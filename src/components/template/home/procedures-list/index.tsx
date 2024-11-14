import React from "react";

import { List } from "@chakra-ui/react";

import { ProceduresListItem } from "./item";
import { IProcedure } from "../../../../types/procedure";

export const procedures: IProcedure[] = [
  { id: "1", name: "Procedure 1", code: "12345", claimed: "1000", difference: "200", authorized: "800" },
  { id: "2", name: "Procedure 2", code: "67890", claimed: "1500", difference: "300", authorized: "1200" },
];

export const ProceduresList = () => {
  return (
    <List.Root listStyle="none" spaceY={{ base: "2", md: "12px" }} w={{ base: "full", md: undefined }}>
      {procedures.map((procedure, index) => (
        <ProceduresListItem procedureNumber={index + 1} procedure={procedure} key={index} />
      ))}
    </List.Root>
  );
};
