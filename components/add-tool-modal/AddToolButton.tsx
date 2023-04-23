"use client";

import { useDisclosure } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

import AddToolModal from "./AddToolModal";

export default function AddToolButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="mt-2 flex h-fit items-center space-x-2 self-center border-[3px] border-black bg-white p-[8px]"
      >
        <AiOutlinePlus />
        <span>Add</span>
      </button>

      <AddToolModal {...{ isOpen, onClose }} />
    </>
  );
}
