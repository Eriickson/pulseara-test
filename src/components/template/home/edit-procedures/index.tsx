import React, { useState } from "react";

import { Dialog, Flex, HStack, Heading, Image, Text, chakra } from "@chakra-ui/react";

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
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger />
            <Dialog.Header>
              <Flex alignItems={{ md: "center" }} flexDirection={{ base: "column", md: "row" }}>
                <Heading color="#1E2469" fontSize={{ md: "32px" }} lineHeight={{ md: "44.8px" }}>
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
            <Dialog.Footer>
              {/* @ts-ignore */}
              <Dialog.CloseTrigger asChild>
                <Button loading={isLoading} variant="secondary">
                  Cancelar
                </Button>
              </Dialog.CloseTrigger>
              <Button loading={isLoading} form="edit-procedures-form">
                Guardar Cambios
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};
