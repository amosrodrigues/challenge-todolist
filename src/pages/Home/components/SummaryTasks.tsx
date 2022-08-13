import { Flex, HStack, Text } from '@chakra-ui/react';

type SummaryTasksProps = {
  infoTasks: { total: number; done: number };
};

export function SummaryTasks({
  infoTasks: { total, done },
}: SummaryTasksProps) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems={{ base: 'flex-end' }}
      flexDirection={{ base: 'column', md: 'row' }}
      gap={3}
      marginBottom={4}>
      <HStack>
        <Text color="blue.100">Tarefas criadas</Text>
        <Text padding="2px 8px" bg="gray.400" borderRadius="999px">
          {total}
        </Text>
      </HStack>

      <HStack>
        <Text color="purple">Concluidas</Text>
        <Text padding="2px 8px" bg="gray.400" borderRadius="999px">
          {`${done} de ${total}`}
        </Text>
      </HStack>
    </Flex>
  );
}
