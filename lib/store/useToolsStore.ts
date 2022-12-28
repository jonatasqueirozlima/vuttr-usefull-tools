import type { Tool, ToolsState } from 'lib/types';
import create from 'zustand';

const useToolsStore = create<ToolsState>((set) => ({
  tools: [],
  addTool: async (tool) => {
    const response = await fetch('http://localhost:3000/tools', {
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
    await fetch(`http://localhost:3000/tools/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    set((state) => ({ tools: state.tools.filter((tool) => tool.id !== id) }));
  },
  fetchTools: async () => {
    const response = await fetch('http://localhost:3000/tools', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as Tool[];

    set({ tools: data });
  },
  getByTextTool: async (text: string) => {
    const response = await fetch(`http://localhost:3000/tools?q=${text}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as Tool[];

    set({ tools: data });
  },
  getByTagTool: async (tag: string) => {
    const response = await fetch(
      `http://localhost:3000/tools?tags_like=${tag}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = (await response.json()) as Tool[];

    set({ tools: data });
  },
}));

export default useToolsStore;
