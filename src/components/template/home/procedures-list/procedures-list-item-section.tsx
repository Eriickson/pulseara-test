import React from "react";

import { Box, Text } from "@chakra-ui/react";
import numeral from "numeral";

interface IProceduresListItemSectionProps {
  label: string;
  value: string;
  mode: "text" | "currency";
}

export const ProceduresListItemSection: React.FC<IProceduresListItemSectionProps> = ({ label, value, mode }) => {
  return (
    <Box lineHeight="19px">
      <Text color="#949494" mb={{ base: "1", md: "7px" }}>
        {label}
      </Text>
      <Text color="black" fontWeight="semibold">
        {mode === "currency" ? <>RD$ {numeral(value).format("0,0")}</> : value}
      </Text>
    </Box>
  );
};
