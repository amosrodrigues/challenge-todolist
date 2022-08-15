import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Form/Input';
import { Image } from '@chakra-ui/react';

import logo from '../../assets/Logo.svg';
import { InputPassword } from '../../components/Form/InputPasswrod';

type SignInFormData = {
  email?: string;
  password?: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
});

export function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const navigate = useNavigate();

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate('/home');
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        gap={8}
        bg="gray.700"
        p="8"
        borderRadius={8}
        flexDir="column"
        boxShadow="0 0 6px 10px gray.100"
        onSubmit={handleSubmit(handleSignIn)}>
        <Stack align="center">
          <Image src={logo} height="12" />
          <Text as="h1" fontSize={20}>
            Bas vindas ao projeto!
          </Text>
          <Text color="gray.300">Entre com dados fictícios e conheça.</Text>
        </Stack>
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            placeholder="email@qualquer.com"
            error={errors.email}
            {...register('email')}
          />
          <InputPassword
            type="password"
            label="Senha"
            placeholder="123456"
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button
          type="submit"
          mt={3}
          colorScheme="blue"
          size="lg"
          isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
