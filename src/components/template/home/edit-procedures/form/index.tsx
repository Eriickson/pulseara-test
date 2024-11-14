import React, { forwardRef, useImperativeHandle } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Box, Fieldset, GridItem, Separator, SimpleGrid, Stack } from "@chakra-ui/react";
import { TextField } from "./text-field";
import { EditProceduresFormValues, resolver } from "./schema";

export interface EditProceduresFormRef {
  onSubmit: () => void;
  addProcedure: () => void;
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

    const { fields, append } = useFieldArray({ control, name: "procedures" });

    useImperativeHandle(ref, () => ({
      onSubmit: () => {
        handleSubmit(onSubmit)();
      },
      addProcedure() {
        append({ id: "", authorized: "", claimed: "", code: "", difference: "", name: "" });
      },
    }));

    return (
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset.Root size="lg">
            <Fieldset.Content>
              <Stack spaceY={{ base: "2", md: "32px" }}>
                {fields.map((field, index) => (
                  <React.Fragment key={field.id}>
                    {index !== 0 ? <Separator hideFrom="md" /> : null}
                    <SimpleGrid
                      columns={{ base: 2, md: 5 }}
                      gapX={{ base: "4", md: "48px" }}
                      gapY={{ base: "4", md: "0" }}
                    >
                      <GridItem colSpan={2}>
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
                    </SimpleGrid>
                  </React.Fragment>
                ))}
              </Stack>
            </Fieldset.Content>
          </Fieldset.Root>
        </form>
      </Box>
    );
  }
);

EditProceduresForm.displayName = "EditProceduresForm";
