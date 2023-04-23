"use client";

import ToolCardSkeleton from "components/skeletons/ToolCardSkeleton";
import ToolCard from "components/tool-card/ToolCard";
import useToolsStore from "lib/store/useToolsStore";
import useSWR from "swr";

import NoToolsFound from "./NoToolsFound";

const API_URL = "https://vuttr-api-jade.vercel.app/";

export default function ToolsList() {
  const { tools, fetchTools } = useToolsStore();
  const { isLoading } = useSWR(`${API_URL}/tools`, fetchTools);

  if (isLoading) {
    return <ToolCardSkeleton />;
  }

  return (
    <section className="mt-4 flex flex-col space-y-4">
      {tools && tools.length === 0 ? (
        <NoToolsFound />
      ) : (
        tools.map((tool) => <ToolCard key={tool.title} tool={tool} />)
      )}
    </section>
  );
}
