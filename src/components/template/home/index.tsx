import React from "react";

import { Box, Container, Heading } from "@chakra-ui/react";
import { EditProcedures } from "./edit-procedures";
import { ProceduresList } from "./procedures-list";

export const HomePageTemplate = () => {
  return (
    <Box minH="100vh" backgroundColor="#EDF3F1">
      <Container maxW="1440px" paddingX={{ base: "4", md: "88px" }} paddingTop={{ base: "4", md: "99px" }}>
        <Box>
          <Box mb={{ base: "4", md: "35px" }}>
            <Heading
              w="max-content"
              fontSize={{ base: "2xl", md: "25px" }}
              fontWeight="semibold"
              lineHeight="29.35px"
              color="black"
            >
              Procedimientos
            </Heading>
          </Box>
          <Box mb={{ base: "4", md: "35px" }}>
            <ProceduresList />
          </Box>
          <EditProcedures />
        </Box>
      </Container>
    </Box>
  );
};
