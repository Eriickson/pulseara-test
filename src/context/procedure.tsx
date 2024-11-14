import React, { Context, createContext, useContext, useEffect, useState } from "react";

import { generateClient, GraphQLResult } from "aws-amplify/api";
import { v4 as uuidv4 } from "uuid";

import { IProcedure } from "../types/procedure";
import { listProcedures } from "../graphql/queries";
import { diff } from "deep-object-diff";

import { updateProcedure, createProcedure, deleteProcedure } from "../graphql/mutations";
import { EditProceduresFormValues } from "../components/template/home/edit-procedures/form/schema";

export interface ProcedureContextValue {
  procedures: IProcedure[];
  updateProcedures(procedures: IProcedure[]): Promise<void>;
}

export const ProcedureContext = createContext<ProcedureContextValue | undefined>(
  undefined
) as Context<ProcedureContextValue>;

interface IProcedureProviderProps {
  children: React.ReactNode;
}

const client = generateClient();

export const ProcedureProvider: React.FC<IProcedureProviderProps> = ({ children }) => {
  const [procedures, setProcedures] = useState<IProcedure[]>([]);

  async function updateProcedures(newProcedures: EditProceduresFormValues["procedures"]) {
    const proceduresToDelete = newProcedures.filter((procedure) => procedure.delete);

    const proceduresToCreate = newProcedures
      .filter((procedure) => procedure.id === "" && !procedure.delete)
      .map((procedure) => {
        const { delete: _, ...procedureWithoutDelete } = procedure;
        return procedureWithoutDelete;
      });
    const proceduresToUpdate = newProcedures
      .filter((procedure) => procedure.id !== "" && !procedure.delete)
      .map((procedure) => {
        const { delete: _, ...procedureWithoutDelete } = procedure;
        return procedureWithoutDelete;
      });

    await Promise.all(
      proceduresToCreate.map(async (procedure) => {
        procedure.id = uuidv4();

        const response = (await client.graphql({
          query: createProcedure,
          variables: { input: procedure },
        })) as GraphQLResult<{ createProcedure: IProcedure }>;
        return response.data.createProcedure;
      })
    );

    await Promise.all(
      proceduresToUpdate
        .filter((procedureToFilter) => {
          const procedureFound = procedures.find((procedure) => procedure.id === procedureToFilter.id);

          return Object.keys(diff(procedureFound!, procedureToFilter)).length > 0;
        })
        .map(async (procedure) => {
          const response = (await client.graphql({
            query: updateProcedure,
            variables: { input: procedure },
          })) as GraphQLResult<{ updateProcedure: IProcedure }>;
          return response.data.updateProcedure;
        })
    );

    await Promise.all(
      proceduresToDelete.map(async (procedure) => {
        await client.graphql({
          query: deleteProcedure,
          variables: { input: { id: procedure.id } },
        });
      })
    );

    await getProcedures();
  }

  async function getProcedures() {
    try {
      const result = (await client.graphql({ query: listProcedures })) as GraphQLResult<{
        listProcedures: { items: IProcedure[] };
      }>;

      const procedures = result.data?.listProcedures.items || [];

      console.log(procedures);

      setProcedures(procedures.sort((a, b) => a.procedureNumber - b.procedureNumber));
    } catch (err) {
      console.log("Error fetching procedures", err);
    }
  }

  useEffect(() => {
    getProcedures();
  }, []);

  return <ProcedureContext.Provider value={{ procedures, updateProcedures }}>{children}</ProcedureContext.Provider>;
};

export const useProcedure = () => {
  const context = useContext(ProcedureContext);

  if (context === undefined) throw new Error("useProcedure must be used within a ProcedureProvider");

  return context;
};
