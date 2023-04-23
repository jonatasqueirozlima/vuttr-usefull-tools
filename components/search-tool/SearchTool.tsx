"use client";

import SearchByText from "./SearchByText";
import TagOnlyCheckbox from "./TagOnlyCheckbox";

export default function SearchTool() {
  return (
    <section className="mt-10 flex h-fit flex-col items-start space-y-2">
      <SearchByText />
      <TagOnlyCheckbox />
    </section>
  );
}
