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
import { Header } from '../../components/Header/Header';
import { BsPlusCircle } from 'react-icons/bs';

import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { NewTaskForm } from './components/NewTaskForm';
import { SummaryTasks } from './components/SummaryTasks';
import { EmptyTasks } from './components/EmptyTasks';

type NewTask = {
  id: string;
  task?: string;
  isComplete: boolean;
};

const newTaskFormSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
});

export type NewTaskFormData = zod.infer<typeof newTaskFormSchema>;

export function Home() {
  const [tasks, setTasks] = useState<NewTask[]>([]);

  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormSchema),
    defaultValues: {
      task: '',
    },
  });

  function handleCreateNewTask(data: NewTaskFormData) {
    const newTask = {
      id: uuidv4(),
      title: data.task,
      isComplete: false,
    };

    setTasks((state) => [...state, newTask]);
  }

  const { handleSubmit } = newTaskForm;

  return (
    <Center flexDirection="column">
      <Header />

      <Stack width="min(90vw, 46rem)" margin="-1.75rem 2rem" spacing={16}>
        <HStack
          as="form"
          height="54px"
          onSubmit={handleSubmit(handleCreateNewTask)}>
          <FormProvider {...newTaskForm}>
            <NewTaskForm />
          </FormProvider>
        </HStack>

        <Stack spacing={4}>
          <SummaryTasks />

          <EmptyTasks />
        </Stack>
      </Stack>
    </Center>
  );
}
