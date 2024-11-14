import React from "react";

import { Box, Button, chakra, Dialog, Fieldset, Heading, HStack, Text } from "@chakra-ui/react";
import { TextField } from "./text-field";

export const EditProceduresForm = () => {
  return (
    <Box>
      <Fieldset.Root size="lg">
        <Fieldset.Legend>
          <HStack mb="40px" alignItems="center">
            <Heading color="#1E2469" fontSize="32px" lineHeight="44.8px">
              Procedimientos
            </Heading>
            <chakra.button cursor="pointer">
              <Text fontWeight="bold" color="#07B284">
                Añadir procedimiento
              </Text>
            </chakra.button>
          </HStack>
          <HStack spaceX="48px">
            <TextField label="Procedimiento 01" placeholder="Ej: 4563523" width="181px" />
            <HStack spaceX="24px">
              <TextField label="Código" placeholder="Ej: 4563523" width="146px" />
              <TextField label="Reclamado RD$" placeholder="Ej: 4563523" width="146px" />
              <TextField label="Diferencia RD$" placeholder="Ej: 4563523" width="146px" />
              <TextField label="Autorizado RD$" placeholder="Ej: 4563523" width="146px" />
            </HStack>
          </HStack>
        </Fieldset.Legend>
        <HStack mt="40px" justifyContent="flex-end">
          <Dialog.CloseTrigger>
            <Button
              fontWeight="bold"
              h="32px"
              w="max-content"
              variant="outline"
              borderWidth="2px"
              borderColor="#D6D6EB"
              color="##6E6D8C"
            >
              Cancelar
            </Button>
          </Dialog.CloseTrigger>
          <Button fontWeight="bold" h="32px" w="max-content" backgroundColor="#3f48ad">
            Guardar Cambios
          </Button>
        </HStack>
      </Fieldset.Root>
    </Box>
  );
};
