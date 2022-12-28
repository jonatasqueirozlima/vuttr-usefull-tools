'use client';

import RemoveToolButton from 'components/remove-tool-modal/RemoveToolButton';
import type { Tool } from 'lib/types';
import Link from 'next/link';

type Props = {
  tool: Tool;
};

export default function ToolCard({ tool }: Props) {
  return (
    <article className="flex flex-col space-y-2 border-[3px] border-black bg-white p-4">
      <section className="mb-2 flex justify-between">
        <Link
          href={tool?.link || '#'}
          className="font-bold text-blue-600 underline"
        >
          {tool.title}
        </Link>
        <RemoveToolButton tool={tool} />
      </section>
      <p>{tool.description}</p>
      <section className="flex flex-wrap space-x-3">
        {Array.isArray(tool.tags) &&
          tool.tags.map((tag) => (
            <span key={tag} className="font-bold">
              #{tag}
            </span>
          ))}
      </section>
    </article>
  );
}
