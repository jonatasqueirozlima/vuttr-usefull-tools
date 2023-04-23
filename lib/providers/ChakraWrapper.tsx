"use client";

import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export default function ChakraWrapper({ children }: Props) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
