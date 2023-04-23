"use client";

import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import toolSchema from "lib/schemas/toolSchema";
import useToolsStore from "lib/store/useToolsStore";
import type { Tool, ToolSchema } from "lib/types";
import { useForm } from "react-hook-form";

import AddToolField from "./AddToolField";

type Props = {
  onCloseModal: () => void;
};

export default function AddToolForm({ onCloseModal }: Props) {
  const { addTool } = useToolsStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ToolSchema>({
    resolver: zodResolver(toolSchema),
  });

  return (
    <form
      className="flex flex-col space-y-4 p-4"
      onSubmit={handleSubmit((tool: Tool) => {
        onCloseModal();
        addTool({
          ...tool,
          tags:
            typeof tool.tags === "string" ? tool.tags.split(" ") : tool.tags,
        });
      })}
    >
      <AddToolField
        type="input"
        errors={errors}
        register={register}
        label="Tool Name"
        id="title"
      />

      <AddToolField
        type="input"
        errors={errors}
        register={register}
        label="Tool Link"
        id="link"
      />

      <AddToolField
        type="textarea"
        errors={errors}
        register={register}
        label="Tool description"
        id="description"
      />
      <AddToolField
        type="input"
        errors={errors}
        register={register}
        label="Tags"
        id="tags"
      />

      <Button type="submit" className="self-end  border-[3px] border-black">
        Add tool
      </Button>
    </form>
  );
}
