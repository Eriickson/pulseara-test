import React from "react";
import { Box, HStack, List, Text } from "@chakra-ui/react";

const ProceduresListItemSection = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box lineHeight="19px">
      <Text color="#949494" mb="7px">
        {label}
      </Text>
      <Text fontWeight="semibold">{value}</Text>
    </Box>
  );
};

export const ProceduresListItem = () => {
  return (
    <List.Item>
      <Box borderRadius="10px" backgroundColor="white" py="16px" pl="34px" pr="94px" w="max-content">
        <HStack spaceX="78px">
          <ProceduresListItemSection label="Procedimiento" value="Esclerosis" />
          <ProceduresListItemSection label="Código" value="3425" />
          <ProceduresListItemSection label="Reclamado" value="RD$ 500" />
          <ProceduresListItemSection label="Diferencia RD$" value="RD$ 500" />
          <ProceduresListItemSection label="Autorizado RD$" value="RD$ 500" />
        </HStack>
      </Box>
    </List.Item>
  );
};
