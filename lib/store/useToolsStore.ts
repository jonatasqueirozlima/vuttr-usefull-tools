import type { Tool, ToolsState } from "lib/types";
import create from "zustand";

const API_URL = "https://vuttr-api-server.vercel.app";
const headers = {
  "Content-Type": "application/json",
};

const useToolsStore = create<ToolsState>((set) => ({
  tools: [],
  tagOnly: false,
  handlerTagOnly: (checked: boolean) =>
    set((state) => ({ ...state, tagOnly: checked })),
  addTool: async (tool) => {
    const response = await fetch(`${API_URL}/tools`, {
      method: "POST",
      body: JSON.stringify(tool),
      ...headers,
    });
    const data = (await response.json()) as Tool;

    set((state) => ({ tools: [...state.tools, data] }));
  },
  removeTool: async (id: number) => {
    await fetch(`${API_URL}/tools/${id}`, {
      method: "DELETE",
      ...headers,
    });
    set((state) => ({ tools: state.tools.filter((tool) => tool.id !== id) }));
  },
  fetchTools: async () => {
    const response = await fetch(`${API_URL}/tools`, {
      method: "GET",
      ...headers,
    });

    const data = (await response.json()) as Tool[];
    console.log(response);

    set({ tools: data });
  },
  getByTextTool: async (text: string) => {
    const response = await fetch(`${API_URL}/tools?q=${text}`, {
      method: "GET",
      ...headers,
    });
    const data = (await response.json()) as Tool[];

    set({ tools: data });
  },
  getByTagTool: async (tag: string) => {
    const response = await fetch(`${API_URL}/tools?tags_like=${tag}`, {
      method: "GET",
      ...headers,
    });
    const data = (await response.json()) as Tool[];

    set({ tools: data });
  },
}));

export default useToolsStore;
