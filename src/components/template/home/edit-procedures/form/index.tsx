import React, { forwardRef, useImperativeHandle } from "react";

import { useFieldArray, useForm } from "react-hook-form";

import { Box, Fieldset, GridItem, IconButton, Separator, SimpleGrid, Stack } from "@chakra-ui/react";
import { EditProceduresFormValues, resolver } from "./schema";
import { TextField } from "./text-field";

export interface EditProceduresFormRef {
  addProcedure(): void;
}

interface IEditProceduresFormProps {
  onSubmit: (values: EditProceduresFormValues) => void;
  defaultValues?: Partial<EditProceduresFormValues>;
}

export const EditProceduresForm = forwardRef<EditProceduresFormRef, IEditProceduresFormProps>(
  ({ onSubmit, defaultValues = { procedures: [] } }, ref) => {
    const { control, handleSubmit, register } = useForm<EditProceduresFormValues>({
      resolver: resolver,
      defaultValues,
    });

    const { fields, append, update } = useFieldArray({ control, name: "procedures" });

    useImperativeHandle(ref, () => ({
      addProcedure() {
        append({
          authorized: "",
          claimed: "",
          code: "",
          difference: "",
          name: "",
          procedureNumber: (defaultValues.procedures?.length || 0) + 1,
          delete: false,
        });
      },
    }));

    return (
      <Box as="form" onSubmit={handleSubmit(onSubmit)} id="edit-procedures-form">
        <Fieldset.Root size="lg">
          <Fieldset.Content>
            <Stack spaceY={{ base: "2", md: "32px" }}>
              {fields
                .filter((field) => !field.delete)
                .map((field, index) => (
                  <Box key={field.id} position="relative">
                    {index !== 0 ? <Separator hideFrom="md" /> : null}
                    <IconButton
                      position="absolute"
                      variant="surface"
                      size="sm"
                      bottom="1"
                      left="-10"
                      onClick={() => update(index, { ...field, delete: true })}
                    >
                      x
                    </IconButton>
                    <SimpleGrid
                      columns={{ base: 2, md: 5 }}
                      gapX={{ base: "4", md: "48px" }}
                      gapY={{ base: "4", md: "0" }}
                    >
                      <GridItem colSpan={{ base: 2, md: 1 }}>
                        <TextField
                          label={`Procedimiento ${index + 1}`}
                          placeholder="Ej: 4563523"
                          w="full"
                          maxWidth={{ md: "181px" }}
                          {...register(`procedures.${index}.name`)}
                        />
                      </GridItem>
                      <GridItem>
                        <TextField
                          label="Código"
                          placeholder="Ej: 4563523"
                          w="full"
                          maxWidth={{ md: "146px" }}
                          {...register(`procedures.${index}.code`)}
                        />
                      </GridItem>
                      <GridItem>
                        <TextField
                          label="Reclamado RD$"
                          placeholder="Ej: 4563523"
                          w="full"
                          maxWidth={{ md: "146px" }}
                          {...register(`procedures.${index}.claimed`)}
                        />
                      </GridItem>
                      <GridItem>
                        <TextField
                          label="Diferencia RD$"
                          placeholder="Ej: 4563523"
                          w="full"
                          maxWidth={{ md: "146px" }}
                          {...register(`procedures.${index}.difference`)}
                        />
                      </GridItem>
                      <GridItem>
                        <TextField
                          label="Autorizado RD$"
                          placeholder="Ej: 4563523"
                          w="full"
                          maxWidth={{ md: "146px" }}
                          {...register(`procedures.${index}.authorized`)}
                        />
                      </GridItem>
                    </SimpleGrid>
                  </Box>
                ))}
            </Stack>
          </Fieldset.Content>
        </Fieldset.Root>
      </Box>
    );
  }
);

EditProceduresForm.displayName = "EditProceduresForm";
