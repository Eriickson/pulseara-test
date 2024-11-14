import React from "react";

import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { EditProcedures } from "./edit-procedures";
import { ProceduresList } from "./procedures-list";

export const HomePageTemplate = () => {
  return (
    <Box minH="100dvh" backgroundColor="#EDF3F1">
      <Container maxW="1440px" paddingX="88px" paddingTop="99px">
        <Box>
          <Stack spaceY="35px">
            <Text w="max-content" fontSize="25px" fontWeight="semibold" lineHeight="29.35px">
              Procedimientos
            </Text>
            <ProceduresList />
            <EditProcedures />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
