import React from "react";

import { UseFormRegister } from "react-hook-form";

import { Box, Fieldset, GridItem, Separator, SimpleGrid, Stack } from "@chakra-ui/react";
import { TextField } from "./text-field";
import { EditProceduresFormValues } from "./schema";

interface IEditProceduresFormProps {
  onSubmit?: (values: EditProceduresFormValues) => void;
  register: UseFormRegister<EditProceduresFormValues>;
  defaultValues?: Partial<EditProceduresFormValues>;
}

export const EditProceduresForm: React.FC<IEditProceduresFormProps> = ({
  register,
  onSubmit,
  defaultValues = { procedures: [] },
}) => {
  return (
    <Box>
      <Fieldset.Root size="lg">
        <Fieldset.Content>
          <Stack spaceY={{ base: "2", md: "32px" }}>
            {defaultValues.procedures?.map((field, index) => (
              <>
                {index !== 0 ? <Separator hideFrom="md" /> : null}
                <SimpleGrid
                  columns={{ base: 2, md: 5 }}
                  key={field.id}
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
              </>
            ))}
          </Stack>
        </Fieldset.Content>
      </Fieldset.Root>
    </Box>
  );
};
