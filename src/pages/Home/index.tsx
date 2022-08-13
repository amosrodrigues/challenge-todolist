import {
  HStack,
  Stack,
  Center,
  Text,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { Header } from '../../components/Header/Header';

import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';
import { v4 as uuidv4 } from 'uuid';

import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NewTaskForm } from './components/NewTaskForm';
import { SummaryTasks } from './components/SummaryTasks';
import { EmptyTasks } from './components/EmptyTasks';
import { CardTask } from './components/CardTask';

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
  const [tasks, setTasks] = useState<NewTask[]>(() => {
    const tasksLocal = localStorage.getItem('@ignite:challenge01');
    if (tasksLocal) {
      return JSON.parse(tasksLocal);
    } else {
      localStorage.setItem('@ignite:challenge01', JSON.stringify([]));
    }
  });

  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormSchema),
    defaultValues: {
      task: '',
    },
  });

  const { handleSubmit, reset } = newTaskForm;

  function handleCreateNewTask(data: NewTaskFormData) {
    const newTask = {
      id: uuidv4(),
      task: data.task,
      isComplete: false,
    };

    setTasks((state) => [...state, newTask]);

    reset();
  }

  function handleCheckedTask(taskId: string) {
    setTasks((state) => {
      return state.map((task) => {
        if (task.id === taskId) {
          task.isComplete = !task.isComplete;
          return task;
        }
        return task;
      });
    });
  }

  function handleDeleteTask(taskId: string) {
    setTasks((state) => state.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(tasks);
    localStorage.setItem('@ignite:challenge01', stateJSON);
  }, [tasks]);

  const infoTasks = useMemo(() => {
    return {
      total: tasks.length,
      done: tasks.reduce(
        (acc, task) => (task.isComplete ? (acc += 1) : acc),
        0,
      ),
    };
  }, [tasks]);

  return (
    <Center flexDirection="column">
      <Header />

      <Stack
        width="min(90vw, 46rem)"
        margin="-1.75rem 2rem"
        marginBottom={8}
        spacing={16}>
        <HStack
          as="form"
          height="54px"
          onSubmit={handleSubmit(handleCreateNewTask)}>
          <FormProvider {...newTaskForm}>
            <NewTaskForm />
          </FormProvider>
        </HStack>

        <Stack spacing={2}>
          <SummaryTasks infoTasks={infoTasks} />

          {tasks.length === 0 ? (
            <EmptyTasks />
          ) : (
            tasks.map((item) => {
              return (
                <CardTask
                  item={item}
                  onDeleteTask={handleDeleteTask}
                  onCheckedTask={handleCheckedTask}
                />
              );
            })
          )}
        </Stack>
      </Stack>
    </Center>
  );
}
