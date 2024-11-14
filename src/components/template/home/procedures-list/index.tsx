import React from "react";
import { ProceduresListItem } from "./item";
import { List } from "@chakra-ui/react";
import { IProcedure } from "../../../../types/procedure";

export const procedures: IProcedure[] = [
  { name: "Procedure 1", code: "12345", claimed: "1000", difference: "200", authorized: "800" },
  { name: "Procedure 2", code: "67890", claimed: "1500", difference: "300", authorized: "1200" },
  { name: "Procedure 3", code: "11223", claimed: "2000", difference: "400", authorized: "1600" },
  { name: "Procedure 4", code: "44556", claimed: "2500", difference: "500", authorized: "2000" },
  { name: "Procedure 5", code: "77889", claimed: "3000", difference: "600", authorized: "2400" },
];

export const ProceduresList = () => {
  return (
    <List.Root listStyle="none" spaceY="12px">
      {procedures.map((procedure, index) => (
        <ProceduresListItem procedureNumber={index + 1} procedure={procedure} key={index} />
      ))}
    </List.Root>
  );
};
