import {
  Button,
  Text,
  HStack,
  Icon,
  Input,
  Stack,
  Center,
  Image,
  Flex,
  Box,
} from '@chakra-ui/react';
import { Header } from '../components/Header/Header';
import { BsPlusCircle } from 'react-icons/bs';

import emptyImg from '../assets/EmptyImg.svg';

export function Home() {
  return (
    <Center flexDirection="column">
      <Header />

      <Stack width="min(90vw, 46rem)" margin="-1.75rem 2rem" spacing={16}>
        <HStack height="54px">
          <Input
            variant="unstyled"
            flex="1"
            bgColor="gray.500"
            padding={4}
            placeholder="Adicione uma nova tarefa"
            _placeholder={{ color: 'gray.300' }}
          />
          <Button
            colorScheme="blue"
            size="lg"
            gap={2}
            padding={4}
            height="100%">
            Criar
            <Icon as={BsPlusCircle} fontSize={20} />
          </Button>
        </HStack>

        <Stack spacing={4}>
          <Flex justifyContent="space-between">
            <HStack>
              <Text color="blue.100">Tarefas criadas</Text>
              <Text padding="2px 8px" bg="gray.400" borderRadius="999px">
                0
              </Text>
            </HStack>

            <HStack>
              <Text color="blue.100">Concluidas</Text>
              <Text padding="2px 8px" bg="gray.400" borderRadius="999px">
                0
              </Text>
            </HStack>
          </Flex>

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
              <Text fontWeight="bold">
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text>Crie tarefas e organize seus itens a fazer</Text>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
