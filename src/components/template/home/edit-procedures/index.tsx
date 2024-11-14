import React from "react";

import { Button, Dialog } from "@chakra-ui/react";
import { EditProceduresForm } from "./form";

export const EditProcedures = () => {
  return (
    <>
      <Dialog.Root placement="center" size={"2xl" as any}>
        <Dialog.Backdrop />
        <Dialog.Trigger>
          <Button>Editar procedimientos</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.CloseTrigger />
          <Dialog.Header>
            <Dialog.Title />
          </Dialog.Header>
          <Dialog.Body>
            <EditProceduresForm />
          </Dialog.Body>
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
