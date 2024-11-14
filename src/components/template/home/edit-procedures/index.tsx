import React, { useState } from "react";

import { Box, Dialog, Flex, HStack, Heading, IconButton, Image, Portal, Text, chakra } from "@chakra-ui/react";

import { EditProceduresForm, EditProceduresFormRef } from "./form";
import { Button } from "../../../ui/button";
import { EditProceduresFormValues } from "./form/schema";
import { useProcedure } from "../../../../context/procedure";

export const EditProcedures: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { procedures, updateProcedures } = useProcedure();

  const editProceduresFormRef = React.useRef<EditProceduresFormRef>(null);

  async function handleSubmit(values: EditProceduresFormValues) {
    setIsLoading(true);
    try {
      await updateProcedures(values.procedures);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  return (
    <>
      <Dialog.Root
        scrollBehavior="inside"
        placement="center"
        size={{ md: "cover" }}
        open={open}
        onOpenChange={(e: { open: boolean }) => setOpen(e.open)}
      >
        <Dialog.Backdrop />
        {/* @ts-ignore */}
        <Dialog.Trigger asChild>
          <Button leftComponent={<Image src="/assets/edit.svg" />}>Editar procedimientos</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Positioner>
            <Dialog.Content>
              <Box pos="absolute" top="0" right="0">
                <Dialog.CloseTrigger>
                  <IconButton variant="ghost">
                    <Image src="/assets/x.svg" />
                  </IconButton>
                </Dialog.CloseTrigger>
              </Box>
              <Dialog.Header px={{ base: "4", md: "58px" }} pt={{ base: "4", md: "58px" }}>
                <Flex alignItems={{ md: "center" }} flexDirection={{ base: "column", md: "row" }}>
                  <Heading ml={{ md: "10" }} color="#1E2469" fontSize={{ md: "32px" }} lineHeight={{ md: "44.8px" }}>
                    Procedimientos
                  </Heading>
                  <chakra.button
                    ml={{ md: "14" }}
                    cursor="pointer"
                    onClick={() => editProceduresFormRef.current?.addProcedure()}
                    w="max-content"
                    fontWeight="bold"
                    color="#07B284"
                  >
                    <HStack>
                      <Image src="/assets/plus.svg" />
                      <Text fontFamily="Open Sans">Añadir procedimiento</Text>
                    </HStack>
                  </chakra.button>
                </Flex>
              </Dialog.Header>
              <Dialog.Body padding={{ md: "58px" }}>
                <EditProceduresForm
                  onSubmit={handleSubmit}
                  ref={editProceduresFormRef}
                  defaultValues={{ procedures: procedures.map((procedure) => ({ ...procedure, delete: false })) }}
                />
              </Dialog.Body>
              <Dialog.Footer px={{ base: "4", md: "58px" }} pb={{ base: "4", md: "58px" }}>
                {/* @ts-ignore */}
                <Dialog.CloseTrigger asChild>
                  <Button loading={isLoading} variant="secondary">
                    Cancelar
                  </Button>
                </Dialog.CloseTrigger>
                <Button loading={isLoading} form="edit-procedures-form">
                  <HStack>
                    <Image src="/assets/check.svg" />
                    <Text>Guardar Cambios</Text>
                  </HStack>
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};
