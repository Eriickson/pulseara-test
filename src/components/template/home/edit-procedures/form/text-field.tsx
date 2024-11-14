import { Field, Input, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  width?: string;
}

export const TextField: FC<TextFieldProps> = ({ label }) => {
  return (
    <Field.Root>
      <Field.Label>
        <Text fontSize="16px">{label}</Text>
      </Field.Label>
      <Input
        mt="8px"
        borderColor="#9CBEB3"
        backgroundColor="#F6F6FB"
        _placeholder={{ color: "#80868B" }}
        borderWidth="2px"
        h="44px"
        fontSize="16px"
        w={{ base: "146px" }}
        placeholder="Ej: 4563523"
      />
    </Field.Root>
  );
};
