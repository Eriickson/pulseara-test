import React from "react";

import { List } from "@chakra-ui/react";

import { ProceduresListItem } from "./item";
import { IProcedure } from "../../../../types/procedure";

export const procedures: IProcedure[] = [
  { name: "Procedure 1", code: "12345", claimed: "1000", difference: "200", authorized: "800" },
  { name: "Procedure 2", code: "67890", claimed: "1500", difference: "300", authorized: "1200" },
];

export const ProceduresList = () => {
  return (
    <List.Root listStyle="none" spaceY={{ base: "2", md: "12px" }}>
      {procedures.map((procedure, index) => (
        <ProceduresListItem procedureNumber={index + 1} procedure={procedure} key={index} />
      ))}
    </List.Root>
  );
};
