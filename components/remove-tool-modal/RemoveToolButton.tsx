"use client";

import { useDisclosure } from "@chakra-ui/react";
import type { Tool } from "lib/types";
import { GrFormClose } from "react-icons/gr";

import RemoveToolModal from "./RemoveToolModal";

type Props = {
  tool: Tool;
};

export default function RemoveToolButton({ tool }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen} className="flex items-center">
        <GrFormClose className="text-2xl" />
        <span>remove </span>
      </button>

      <RemoveToolModal {...{ isOpen, onClose, tool }} />
    </>
  );
}
