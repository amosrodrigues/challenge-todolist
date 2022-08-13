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

import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';
import { v4 as uuidv4 } from 'uuid';

import emptyImg from '../assets/EmptyImg.svg';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type NewTask = {
  id: string;
  task?: string;
  isComplete: boolean;
};

const newTaskFormSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
});

type NewTaskFormData = zod.infer<typeof newTaskFormSchema>;

export function Home() {
  const [tasks, setTasks] = useState<NewTask[]>([]);

  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormSchema),
    defaultValues: {
      task: '',
    },
  });

  const { handleSubmit, register, watch } = newTaskForm;

  function handleCreateNewTask(data: NewTaskFormData) {
    const newTask = {
      id: uuidv4(),
      title: data.task,
      isComplete: false,
    };

    setTasks((state) => [...state, newTask]);
  }

  const task = watch('task');
  const isSubmitDisable = !task;

  return (
    <Center flexDirection="column">
      <Header />

      <Stack width="min(90vw, 46rem)" margin="-1.75rem 2rem" spacing={16}>
        <HStack
          as="form"
          height="54px"
          onSubmit={handleSubmit(handleCreateNewTask)}>
          <Input
            variant="unstyled"
            flex="1"
            bgColor="gray.500"
            padding={4}
            placeholder="Adicione uma nova tarefa"
            _placeholder={{ color: 'gray.300' }}
            {...register('task')}
          />
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            gap={2}
            padding={4}
            height="100%"
            disabled={isSubmitDisable}>
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
