import React from "react";

import { List } from "@chakra-ui/react";

import { ProceduresListItem } from "./item";
import { useProcedure } from "../../../../context/procedure";

export const ProceduresList = () => {
  const { procedures } = useProcedure();

  return (
    <List.Root listStyle="none" spaceY={{ base: "2", md: "12px" }} w={{ base: "full", xl: "max-content" }}>
      {procedures.map((procedure, index) => (
        <ProceduresListItem procedureNumber={index + 1} procedure={procedure} key={procedure.id} />
      ))}
    </List.Root>
  );
};
