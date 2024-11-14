import React, { useEffect } from "react";

import { Box, Container, Heading, Stack } from "@chakra-ui/react";

import { generateClient } from "aws-amplify/api";

import { EditProcedures } from "./edit-procedures";
import { ProceduresList } from "./procedures-list";
import { listProcedures } from "../../../graphql/queries";

const client = generateClient();
export const HomePageTemplate = () => {
  async function getProcedures() {
    try {
      const result = await client.graphql({ query: listProcedures, variables: { limit: 1 } });

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProcedures();
  }, []);

  return (
    <Box minH="100vh" backgroundColor="#EDF3F1">
      <Container maxW="1440px" paddingX={{ base: "4", md: "88px" }} paddingTop={{ base: "4", md: "99px" }}>
        <Box>
          <Stack alignItems="flex-start" gapY={{ base: "4", md: "35px" }}>
            <Box>
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
            <ProceduresList />
            <EditProcedures />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
