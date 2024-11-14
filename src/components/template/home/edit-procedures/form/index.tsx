import React, { forwardRef, useImperativeHandle } from "react";

import { useFieldArray, useForm } from "react-hook-form";

import { Box, Fieldset, GridItem, HStack, IconButton, Image, Separator, SimpleGrid, Stack } from "@chakra-ui/react";
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

    const { fields, append, remove } = useFieldArray({ control, name: "procedures", keyName: "fieldId" });

    useImperativeHandle(ref, () => ({
      addProcedure() {
        append({
          authorized: "",
          claimed: "",
          code: "",
          difference: "",
          name: "",
          procedureNumber: (defaultValues.procedures?.length || 0) + 1,
        });
      },
    }));

    return (
      <Box as="form" onSubmit={handleSubmit(onSubmit)} id="edit-procedures-form">
        <Fieldset.Root size="lg">
          <Fieldset.Content>
            <Stack spaceY={{ base: "2", md: "32px" }}>
              {fields.map((field, index) => (
                <Box key={field.fieldId} position="relative">
                  {index !== 0 ? <Separator my="4" hideFrom="md" /> : null}
                  <HStack alignItems="flex-end">
                    <IconButton
                      hideBelow="md"
                      mb="1"
                      type="button"
                      variant="surface"
                      size="sm"
                      onClick={() => remove(index)}
                    >
                      <Image src="/assets/trash.svg" />
                    </IconButton>
                    <SimpleGrid
                      columns={{ base: 2, md: 5 }}
                      gapX={{ base: "4", md: "48px" }}
                      gapY={{ base: "4", md: "0" }}
                    >
                      <GridItem colSpan={{ base: 2, md: 1 }}>
                        <HStack alignItems="flex-end">
                          <TextField
                            label={`Procedimiento ${index + 1}`}
                            placeholder="Ej: 4563523"
                            w="full"
                            maxWidth={{ md: "181px" }}
                            {...register(`procedures.${index}.name`)}
                          />
                          <IconButton
                            hideFrom={{ base: "md" }}
                            type="button"
                            variant="surface"
                            size="sm"
                            onClick={() => remove(index)}
                          >
                            <Image src="/assets/trash.svg" />
                          </IconButton>
                        </HStack>
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
                  </HStack>
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
