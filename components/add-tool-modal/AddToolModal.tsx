'use client';

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import AddToolForm from 'components/add-tool-form/AddToolForm';
import { AiOutlinePlus } from 'react-icons/ai';

type Props = {
  isOpen: boolean;
  onClose(): void;
};

export default function AddToolModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent className="rounded-none border-[3px] border-black">
        <ModalHeader className="flex items-center space-x-2">
          <AiOutlinePlus />
          <h1>Add new tool</h1>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AddToolForm onCloseModal={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
