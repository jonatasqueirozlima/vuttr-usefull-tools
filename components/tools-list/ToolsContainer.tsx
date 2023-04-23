"use client";

import NoToolsFound from "./NoToolsFound";
import ToolsList from "./ToolsList";

export default function ToolsContainer() {
  return (
    <>
      <ToolsList />
      <NoToolsFound />
    </>
  );
}
