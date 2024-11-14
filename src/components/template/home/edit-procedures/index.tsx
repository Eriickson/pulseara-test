import React, { useState } from "react";

import { Dialog, Flex, Heading, chakra } from "@chakra-ui/react";

import { EditProceduresForm, EditProceduresFormRef } from "./form";
import { Button } from "../../../ui/button";
import { EditProceduresFormValues } from "./form/schema";
import { useProcedure } from "../../../../context/procedure";

export const EditProcedures: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { procedures, updateProcedures } = useProcedure();

  const editProceduresFormRef = React.useRef<EditProceduresFormRef>(null);

  async function handleSubmit(values: EditProceduresFormValues) {
    await updateProcedures(values.procedures);

    setOpen(false);
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
          <Button>Editar procedimientos</Button>
        </Dialog.Trigger>
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger />
            <Dialog.Header>
              <Flex flexDirection="column">
                <Heading color="#1E2469" fontSize={{ md: "32px" }} lineHeight={{ md: "44.8px" }}>
                  Procedimientos
                </Heading>
                <chakra.button
                  cursor="pointer"
                  onClick={() => editProceduresFormRef.current?.addProcedure()}
                  w="max-content"
                  fontWeight="bold"
                  color="#07B284"
                >
                  Añadir procedimiento
                </chakra.button>
              </Flex>
            </Dialog.Header>
            <Dialog.Body padding={{ md: "58px" }}>
              <EditProceduresForm onSubmit={handleSubmit} ref={editProceduresFormRef} defaultValues={{ procedures }} />
            </Dialog.Body>
            <Dialog.Footer>
              {/* @ts-ignore */}
              <Dialog.CloseTrigger asChild>
                <Button variant="secondary">Cancelar</Button>
              </Dialog.CloseTrigger>
              <Button form="edit-procedures-form">Guardar Cambios</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};
