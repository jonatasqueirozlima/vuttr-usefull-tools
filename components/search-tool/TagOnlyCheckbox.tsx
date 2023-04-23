"use client";

import useToolsStore from "lib/store/useToolsStore";
import type { ChangeEventHandler } from "react";

export default function TagOnlyCheckbox() {
  const { handlerTagOnly } = useToolsStore();

  const onChangeTagOnly: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    handlerTagOnly(target.checked);
  };

  return (
    <section>
      <label htmlFor="tag-only" className="flex space-x-2">
        <input onChange={onChangeTagOnly} type="checkbox" id="tag-only" />
        <span>search in tags only</span>
      </label>
    </section>
  );
}
