"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import useToolsStore from "lib/store/useToolsStore";
import type { Tool } from "lib/types";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {
  isOpen: boolean;
  tool: Tool;
  onClose(): void;
};

export default function RemoveToolModal({ isOpen, onClose, tool }: Props) {
  const { removeTool } = useToolsStore();
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent className="rounded-none border-[3px] border-black">
        <ModalHeader className="flex items-center space-x-2">
          <AiOutlinePlus />
          <h1>Remove tool</h1>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to remove {tool.title}</Text>
        </ModalBody>
        <ModalFooter className="space-x-4">
          <Button
            onClick={onClose}
            className="rounded-none border-[3px] border-black"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              removeTool(tool.id || 0);
              onClose();
            }}
            className="rounded-none border-[3px] border-black"
          >
            Yes, remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
