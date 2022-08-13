import { Button, Checkbox, HStack, Text } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';

type CardTaskProps = {
  item: {
    id: string;
    task?: string;
    isComplete: boolean;
  };
  onCheckedTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
};

export function CardTask({ item, onCheckedTask, onDeleteTask }: CardTaskProps) {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      bg="gray.500"
      borderRadius="8px"
      paddingY={2}
      paddingX={4}
      gap={3}>
      <Checkbox
        size="lg"
        isChecked={item.isComplete}
        onChange={() => onCheckedTask(item.id)}
      />
      <Text
        as={item.isComplete ? 's' : 'p'}
        color={item.isComplete ? 'gray.300' : 'gray.100'}
        flex="1">
        {item.task}
      </Text>
      <Button
        variant="unstyled"
        aria-label="exclude"
        color="gray.300"
        display="flex"
        rightIcon={<FiTrash2 size={20} />}
        onClick={() => onDeleteTask(item.id)}
      />
    </HStack>
  );
}
