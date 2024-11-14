import React from "react";
import { ProceduresListItem } from "./item";
import { List } from "@chakra-ui/react";

export const ProceduresList = () => {
  return (
    <List.Root listStyle="none" spaceY="12px">
      <ProceduresListItem />
      <ProceduresListItem />
      <ProceduresListItem />
      <ProceduresListItem />
    </List.Root>
  );
};
