import React, { Context, createContext, useContext, useEffect, useState } from "react";

import { generateClient, GraphQLResult } from "aws-amplify/api";
import { v4 as uuidv4 } from "uuid";

import { IProcedure } from "../types/procedure";
import { listProcedures } from "../graphql/queries";
import { updateProcedure, deleteProcedure, createProcedure } from "../graphql/mutations";

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

  async function updateProcedures(procedures: IProcedure[]) {
    const proceduresToCreate = procedures.filter((procedure) => procedure.id === "");
    const proceduresToUpdate = procedures.filter((procedure) => procedure.id !== "");

    const updatedProcedures = await Promise.all(
      proceduresToCreate.map(async (procedure) => {
        procedure.id = uuidv4();

        const response = (await client.graphql({
          query: createProcedure,
          variables: { input: procedure },
        })) as GraphQLResult<{ createProcedure: IProcedure }>;
        return response.data.createProcedure;
      })
    );
    console.log(updatedProcedures);
    console.log(proceduresToUpdate);

    setProcedures((prev) => [...prev, ...updatedProcedures]);
  }

  async function getProcedures() {
    try {
      const result = (await client.graphql({ query: listProcedures })) as GraphQLResult<{
        listProcedures: { items: IProcedure[] };
      }>;

      console.log(result.data?.listProcedures.items);

      setProcedures(result.data?.listProcedures.items || []);
    } catch (err) {}
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
