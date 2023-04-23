import type toolSchema from "lib/schemas/toolSchema";

export interface Tool {
  id?: number;
  title: string;
  link: string;
  description: string;
  tags: string[] | string;
}

export interface ToolsState {
  tools: Tool[] | [];
  tagOnly: boolean;
  handlerTagOnly: (checked: boolean) => void;
  addTool: (tool: Tool) => Promise<void>;
  removeTool: (id: number) => Promise<void>;
  fetchTools: () => Promise<void>;
  getByTextTool: (text: string) => Promise<void>;
  getByTagTool: (tag: string) => Promise<void>;
}

export type ToolSchema = z.infer<typeof toolSchema>;
