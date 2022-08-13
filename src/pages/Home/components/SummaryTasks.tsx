import { Flex, HStack, Text } from '@chakra-ui/react';

export function SummaryTasks() {
  return (
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
  );
}
