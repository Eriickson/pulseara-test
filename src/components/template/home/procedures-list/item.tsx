import React from "react";

import { Box, HStack, List } from "@chakra-ui/react";

import { IProcedure } from "../../../../types/procedure";
import { ProceduresListItemSection } from "./procedures-list-item-section";

interface IProceduresListItemProps {
  procedureNumber: number;
  procedure: IProcedure;
}

export const ProceduresListItem: React.FC<IProceduresListItemProps> = ({ procedure, procedureNumber }) => {
  return (
    <List.Item>
      <Box borderRadius="10px" backgroundColor="white" py="16px" pl="34px" pr="94px" w="max-content">
        <HStack spaceX="78px">
          <ProceduresListItemSection mode="text" label={`Procedimiento ${procedureNumber}`} value={procedure.name} />
          <ProceduresListItemSection mode="text" label="Código" value={procedure.code} />
          <ProceduresListItemSection mode="currency" label="Reclamado" value={procedure.claimed} />
          <ProceduresListItemSection mode="currency" label="Diferencia RD$" value={procedure.difference} />
          <ProceduresListItemSection mode="currency" label="Autorizado RD$" value={procedure.authorized} />
        </HStack>
      </Box>
    </List.Item>
  );
};
