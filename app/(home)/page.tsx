import AddToolButton from "components/add-tool-modal/AddToolButton";
import SearchTool from "components/search-tool/SearchTool";
import ToolsList from "components/tools-list/ToolsList";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gray-200 ">
      <section className="mt-4 w-full border-black p-6 md:max-w-2xl">
        <h1 className="text-4xl font-bold">VUTTR</h1>
        <h2>Very Usefull Tools to Remember</h2>

        <section className="flex w-full justify-between">
          <SearchTool />
          <AddToolButton />
        </section>

        <ToolsList />
      </section>
    </main>
  );
}
