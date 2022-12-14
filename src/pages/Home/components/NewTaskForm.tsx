import { Button, Icon, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { BsPlusCircle } from 'react-icons/bs';

export function NewTaskForm() {
  const { register, watch } = useFormContext();

  const taskData = watch('task');
  const isSubmitDisable = !taskData;

  return (
    <>
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
        padding={4}
        height="100%"
        rightIcon={<BsPlusCircle size={20} />}
        disabled={isSubmitDisable}>
        Criar
      </Button>
    </>
  );
}
