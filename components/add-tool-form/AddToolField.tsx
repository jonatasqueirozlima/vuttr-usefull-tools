"use client";

import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import type { ToolSchema } from "lib/types";
import type { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

type Props = {
  type: "input" | "textarea";
  errors: Partial<FieldErrorsImpl<ToolSchema>>;
  label: string;
  id: "title" | "link" | "description" | "tags";
  register: UseFormRegister<ToolSchema>;
};

export default function AddToolInput({
  register,
  label,
  id,
  errors,
  type = "input",
}: Props) {
  return (
    <FormControl isInvalid={!!errors[id]} className="-space-y-2">
      <FormLabel htmlFor={id} className="font-bold">
        {label}
      </FormLabel>
      {type === "input" ? (
        <Input
          className="rounded-none border-[3px] border-black"
          id={id}
          placeholder="..."
          {...register(id)}
        />
      ) : (
        <Textarea
          className="max-h-[200px] rounded-none border-[3px] border-black"
          id={id}
          placeholder="..."
          {...register(id)}
        />
      )}
      {errors[id]?.message && (
        <span className="pt-2 text-red-400"> {errors[id]?.message}</span>
      )}
    </FormControl>
  );
}
