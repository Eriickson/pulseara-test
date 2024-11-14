import React, { FC } from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

interface IButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<IButtonProps> = ({ children, variant = "primary", onClick, type }) => {
  return (
    <ChakraButton
      fontWeight="bold"
      h="32px"
      w="max-content"
      minW="138px"
      backgroundColor={variant === "primary" ? "#3f48ad" : "white"}
      color={variant === "primary" ? "white" : "#6E6D8C"}
      borderWidth={variant === "primary" ? "0" : "2px"}
      borderColor={variant === "primary" ? "transparent" : "#D6D6EB"}
      onClick={onClick}
      type={type}
    >
      {children}
    </ChakraButton>
  );
};