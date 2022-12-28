import type { Tool, ToolsState } from 'lib/types';
import create from 'zustand';

const useToolsStore = create<ToolsState>((set) => ({
  tools: [],
  tagOnly: false,
  handlerTagOnly: (checked: boolean) =>
    set((state) => ({ ...state, tagOnly: checked })),
  addTool: async (tool) => {
    const response = await fetch('http://0.0.0.0:3001/tools', {
      method: 'POST',
      body: JSON.stringify(tool),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as Tool;

    set((state) => ({ tools: [...state.tools, data] }));
  },
  removeTool: async (id: number) => {
    await fetch(`http://0.0.0.0:3001/tools/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    set((state) => ({ tools: state.tools.filter((tool) => tool.id !== id) }));
  },
  fetchTools: async () => {
    const response = await fetch('http://0.0.0.0:3001/tools', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as Tool[];
    console.log(data);

    set({ tools: data });
  },
  getByTextTool: async (text: string) => {
    const response = await fetch(`http://0.0.0.0:3001/tools?q=${text}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as Tool[];

    set({ tools: data });
  },
  getByTagTool: async (tag: string) => {
    const response = await fetch(`http://0.0.0.0:3001/tools?tags_like=${tag}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as Tool[];

    set({ tools: data });
  },
}));

export default useToolsStore;
