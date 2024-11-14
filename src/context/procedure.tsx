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

  async function updateProcedures(procedures: IProcedure[]) {}

  async function getProcedures() {
    try {
      const result = (await client.graphql({ query: listProcedures })) as GraphQLResult<{
        listProcedures: { items: IProcedure[] };
      }>;

      console.log(result.data?.listProcedures.items);

      setProcedures(result.data?.listProcedures.items || []);

      /* setProcedures([
      { id: "1", name: "Procedure 1", code: "12345", claimed: "1000", difference: "200", authorized: "800" },
      { id: "2", name: "Procedure 2", code: "67890", claimed: "1500", difference: "300", authorized: "1200" },
    ]); */
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
