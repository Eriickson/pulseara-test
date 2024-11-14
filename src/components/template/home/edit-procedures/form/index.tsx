import React from "react";

import { useForm, useFieldArray } from "react-hook-form";

import { Box, chakra, Dialog, Fieldset, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { TextField } from "./text-field";
import { Button } from "../../../../ui/button";
import { EditProceduresFormValues, resolver } from "./schema";

interface IEditProceduresFormProps {
  onSubmit: (values: EditProceduresFormValues) => void;
}

export const EditProceduresForm: React.FC<IEditProceduresFormProps> = ({ onSubmit }) => {
  const { control, register, handleSubmit } = useForm<EditProceduresFormValues>({ resolver });
  const { fields, append } = useFieldArray({ control, name: "procedures" });

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset.Root size="lg">
          <Fieldset.Legend>
            <HStack mb="40px" alignItems="center">
              <Heading color="#1E2469" fontSize="32px" lineHeight="44.8px">
                Procedimientos
              </Heading>
              <chakra.button
                cursor="pointer"
                onClick={() => append({ authorized: "", claimed: "", code: "", difference: "", name: "" })}
                type="button"
              >
                <Text fontWeight="bold" color="#07B284">
                  Añadir procedimiento
                </Text>
              </chakra.button>
            </HStack>
            <Stack spaceY="32px">
              {fields.map((field, index) => (
                <HStack key={field.id} spaceX="48px">
                  <TextField
                    label={`Procedimiento ${index + 1}`}
                    placeholder="Ej: 4563523"
                    width="181px"
                    {...register(`procedures.${index}.name`)}
                  />
                  <HStack spaceX="24px">
                    <TextField
                      label="Código"
                      placeholder="Ej: 4563523"
                      width="146px"
                      {...register(`procedures.${index}.code`)}
                    />
                    <TextField
                      label="Reclamado RD$"
                      placeholder="Ej: 4563523"
                      width="146px"
                      {...register(`procedures.${index}.claimed`)}
                    />
                    <TextField
                      label="Diferencia RD$"
                      placeholder="Ej: 4563523"
                      width="146px"
                      {...register(`procedures.${index}.difference`)}
                    />
                    <TextField
                      label="Autorizado RD$"
                      placeholder="Ej: 4563523"
                      width="146px"
                      {...register(`procedures.${index}.authorized`)}
                    />
                  </HStack>
                </HStack>
              ))}
            </Stack>
          </Fieldset.Legend>
          <HStack mt="40px" justifyContent="flex-end">
            <Dialog.CloseTrigger>
              <Button variant="secondary">Cancelar</Button>
            </Dialog.CloseTrigger>
            <Button type="submit">Guardar Cambios</Button>
          </HStack>
        </Fieldset.Root>
      </form>
    </Box>
  );
};
