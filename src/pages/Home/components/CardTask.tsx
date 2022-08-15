import {
  Button,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FiAlertCircle, FiTrash2 } from 'react-icons/fi';

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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <IconButton
        variant="unstyled"
        aria-label="exclude"
        color="gray.300"
        display="flex"
        _hover={{ color: 'red.500', bg: 'gray.400' }}
        onClick={onOpen}
        icon={<FiTrash2 size="20px" />}
      />

      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.800" alignContent="center" alignItems="center">
          <Icon as={FiAlertCircle} fontSize={60} color="danger" marginTop={8} />
          <ModalHeader>Tem certeza?</ModalHeader>
          <ModalBody>Você não poderá reverter isso!</ModalBody>
          <ModalFooter gap={3} marginBottom={3}>
            <Button
              colorScheme="blue"
              onClick={() => {
                onDeleteTask(item.id), onClose();
              }}>
              Sim, exclua!
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancelar!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
}
