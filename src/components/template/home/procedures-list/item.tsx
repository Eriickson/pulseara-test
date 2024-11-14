import React from "react";

import { Box, List, Stack } from "@chakra-ui/react";

import { IProcedure } from "../../../../types/procedure";
import { ProceduresListItemSection } from "./procedures-list-item-section";

interface IProceduresListItemProps {
  procedureNumber: number;
  procedure: IProcedure;
}

export const ProceduresListItem: React.FC<IProceduresListItemProps> = ({ procedure, procedureNumber }) => {
  return (
    <List.Item>
      <Box
        borderRadius="10px"
        backgroundColor="white"
        py="16px"
        pl={{ base: "4", md: "34px" }}
        pr="94px"
        w={{ base: "full", md: "max-content" }}
      >
        <Stack direction={{ base: "column", md: "row" }} spaceX={{ md: "78px" }}>
          <ProceduresListItemSection mode="text" label={`Procedimiento ${procedureNumber}`} value={procedure.name} />
          <ProceduresListItemSection mode="text" label="Código" value={procedure.code} />
          <ProceduresListItemSection mode="currency" label="Reclamado" value={procedure.claimed} />
          <ProceduresListItemSection mode="currency" label="Diferencia RD$" value={procedure.difference} />
          <ProceduresListItemSection mode="currency" label="Autorizado RD$" value={procedure.authorized} />
        </Stack>
      </Box>
    </List.Item>
  );
};
