import React, { Context, createContext, useContext, useEffect, useState } from "react";

import { generateClient, GraphQLResult } from "aws-amplify/api";
import { v4 as uuidv4 } from "uuid";

import { IProcedure } from "../types/procedure";
import { listProcedures } from "../graphql/queries";
import { diff } from "deep-object-diff";

import { updateProcedure, createProcedure } from "../graphql/mutations";

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

  async function updateProcedures(newProcedures: IProcedure[]) {
    const proceduresToCreate = newProcedures.filter((procedure) => procedure.id === "");
    const proceduresToUpdate = newProcedures.filter((procedure) => procedure.id !== "");

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
          return procedureFound ? Object.keys(diff(procedureFound, procedureToFilter)).length > 0 : false;
        })
        .map(async (procedure) => {
          const response = (await client.graphql({
            query: updateProcedure,
            variables: { input: procedure },
          })) as GraphQLResult<{ updateProcedure: IProcedure }>;
          return response.data.updateProcedure;
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
