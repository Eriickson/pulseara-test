import React from "react";

import { Box, GridItem, List, SimpleGrid } from "@chakra-ui/react";

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
        px={{ base: "4", md: "34px" }}
        pr="94px"
        w={{ base: "full" }}
      >
        <SimpleGrid columns={{ base: 1, lg: 6 }} gapX={{ md: "78px" }} gapY={{ base: "7px" }}>
          <GridItem colSpan={{ lg: 2 }}>
            <ProceduresListItemSection mode="text" label={`Procedimiento ${procedureNumber}`} value={procedure.name} />
          </GridItem>
          <GridItem>
            <ProceduresListItemSection mode="text" label="Código" value={procedure.code} />
          </GridItem>
          <GridItem>
            <ProceduresListItemSection mode="currency" label="Reclamado" value={procedure.claimed} />
          </GridItem>
          <GridItem>
            <ProceduresListItemSection mode="currency" label="Diferencia RD$" value={procedure.difference} />
          </GridItem>
          <GridItem>
            <ProceduresListItemSection mode="currency" label="Autorizado RD$" value={procedure.authorized} />
          </GridItem>
        </SimpleGrid>
      </Box>
    </List.Item>
  );
};
