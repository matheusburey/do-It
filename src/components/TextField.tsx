/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { FormControl, FormLabel, InputGroup, InputLeftElement, Input, FormErrorMessage, InputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, useCallback, useEffect, useState } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

const inputVariations = {
  error: "red.500",
  default: "gray.500",
  focus: "purple.500",
  filled: "green.500",
};

interface IPropsTextField extends InputProps {
  label: string;
  error: FieldError | null;
  icon: IconType;
}

type KeysVariation = keyof typeof inputVariations;

const TextFieldRef: ForwardRefRenderFunction<HTMLInputElement, IPropsTextField> = ({ label, error, icon: Icon, ...rest }, ref) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState<KeysVariation>("default");

  useEffect(() => {
    if (error) {
      setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value && !error) {
      setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement color={inputVariations[variation]} mt="2.5">
            <Icon />
          </InputLeftElement>
        )}
        <Input
          onChangeCapture={({ currentTarget }) => setValue(currentTarget.value)}
          bg="gray.50"
          color={inputVariations[variation]}
          borderColor={inputVariations[variation]}
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          h="60px"
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          ref={ref}
          {...rest}
        />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const TextField = forwardRef(TextFieldRef);
