import React from "react";

import { Dialog, Flex, Heading, chakra, Text } from "@chakra-ui/react";

import { EditProceduresForm } from "./form";
import { Button } from "../../../ui/button";
import { EditProceduresFormValues, resolver } from "./form/schema";
import { procedures } from "../procedures-list";
import { useFieldArray, useForm } from "react-hook-form";

export const EditProcedures: React.FC = () => {
  const { control, register, handleSubmit } = useForm<EditProceduresFormValues>({
    resolver: resolver,
    defaultValues: { procedures },
  });
  const { fields, append } = useFieldArray({ control, name: "procedures" });

  async function onSubmit(values: EditProceduresFormValues) {
    console.log(values);
  }

  return (
    <>
      <Dialog.Root scrollBehavior="inside" placement="center" size={{ md: "cover" }}>
        <Dialog.Backdrop />
        <Dialog.Trigger>
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
                  onClick={() =>
                    append({
                      id: "",
                      authorized: "",
                      claimed: "",
                      code: "",
                      difference: "",
                      name: "",
                    })
                  }
                  w="max-content"
                >
                  <Text fontWeight="bold" color="#07B284">
                    Añadir procedimiento
                  </Text>
                </chakra.button>
              </Flex>
            </Dialog.Header>
            <Dialog.Body padding={{ md: "58px" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <EditProceduresForm register={register} defaultValues={{ procedures: fields }} />
              </form>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger>
                <Button variant="secondary">Cancelar</Button>
              </Dialog.CloseTrigger>
              <Button type="submit">Guardar Cambios</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};
