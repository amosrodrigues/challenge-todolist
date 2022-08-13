import { Stack, Image, Box, Text } from '@chakra-ui/react';

import emptyImg from '../../../assets/EmptyImg.svg';

export function EmptyTasks() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={2}
      padding="4rem 2rem"
      borderRadius="8px"
      borderTop="1px"
      borderColor="gray.400">
      <Image src={emptyImg} />

      <Box color="gray.300" textAlign="center">
        <Text fontWeight="bold">Você ainda não tem tarefas cadastradas</Text>
        <Text>Crie tarefas e organize seus itens a fazer</Text>
      </Box>
    </Stack>
  );
}
