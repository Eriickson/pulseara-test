import React from "react";

import { Dialog, Portal } from "@chakra-ui/react";

import { EditProceduresForm } from "./form";
import { Button } from "../../../ui/button";
import { EditProceduresFormValues } from "./form/schema";
import { procedures } from "../procedures-list";

export const EditProcedures: React.FC = () => {
  async function handleSubmit(values: EditProceduresFormValues) {
    console.log(values);
  }

  return (
    <>
      <Dialog.Root placement="center" size="lg">
        <Dialog.Backdrop />
        <Dialog.Trigger>
          <Button>Editar procedimientos</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.CloseTrigger />
              <Dialog.Body padding="58px">
                <EditProceduresForm onSubmit={handleSubmit} defaultValues={{ procedures }} />
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};
