import React from "react";

import { Box, Center, Container, Flex, Heading, Image, Spinner, Stack, Text } from "@chakra-ui/react";

import { EditProcedures } from "./edit-procedures";
import { ProceduresList } from "./procedures-list";
import { useProcedure } from "../../../context/procedure";

export const HomePageTemplate = () => {
  const { procedures, isLoading } = useProcedure();

  return (
    <Flex minH="100vh" backgroundColor="#EDF3F1">
      <Container
        maxW="1440px"
        paddingX={{ base: "4", md: "8", lg: "88px" }}
        paddingY={{ base: "4", md: "8", lg: "99px" }}
        flex="1"
      >
        <Stack h="full" alignItems="flex-start" gapY={{ base: "4", md: "35px" }}>
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
          {isLoading ? (
            <Center w="full">
              <Spinner />
            </Center>
          ) : procedures.length !== 0 ? (
            <>
              <ProceduresList />
              <EditProcedures />
            </>
          ) : (
            <Center flexDirection="column" w="full" spaceY="20px" flex="1">
              <Image src="/assets/empty-illustration.svg" />
              <Text fontFamily="Roboto">No hay datos que mostrar</Text>
              <EditProcedures />
            </Center>
          )}
        </Stack>
      </Container>
    </Flex>
  );
};
