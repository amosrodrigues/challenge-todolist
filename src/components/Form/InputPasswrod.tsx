import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, type, ...rest },
  ref,
) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        <ChakraInput
          id={name}
          name={name}
          type={show ? 'text' : 'password'}
          focusBorderColor="blue.100"
          bgColor="gray.600"
          _placeholder={{ color: 'gray.400' }}
          variant="filled"
          size="lg"
          _hover={{
            bgColor: 'gray.600',
          }}
          ref={ref}
          {...rest}
        />
        <InputRightElement height="100%">
          <Icon
            as={show ? FiEye : FiEyeOff}
            fontSize={20}
            cursor="pointer"
            color="gray.300"
            transition="color 0.2s"
            _hover={{
              color: 'white',
            }}
            onClick={handleClick}
          />
        </InputRightElement>
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const InputPassword = forwardRef(InputBase);
