import React, { forwardRef } from "react";
import { Field, Input, Text, InputProps } from "@chakra-ui/react";

interface TextFieldProps extends InputProps {
  label: string;
  placeholder?: string;
  width?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, placeholder = "Ej: 4563523", width = "146px", ...props }, ref) => {
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
          w={{ base: width }}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </Field.Root>
    );
  }
);

TextField.displayName = "TextField";
