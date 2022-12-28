'use client';

import useToolsStore from 'lib/store/useToolsStore';
import type { ChangeEventHandler } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchByText() {
  const { getByTextTool, fetchTools, getByTagTool, tagOnly } = useToolsStore();

  const searchWhileTyping: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (target.value !== '' && tagOnly) {
      getByTagTool(target.value);
    } else if (target.value !== '' && !tagOnly) {
      getByTextTool(target.value);
    } else {
      fetchTools();
    }
  };

  return (
    <section className="flex items-center border-[3px] border-black bg-white p-2">
      <label htmlFor="search" className="flex items-center space-x-2">
        <FaSearch />
        <input
          onChange={searchWhileTyping}
          id="search"
          placeholder="search"
          className="w-[150px] focus-visible:outline-none"
        />
      </label>
    </section>
  );
}
