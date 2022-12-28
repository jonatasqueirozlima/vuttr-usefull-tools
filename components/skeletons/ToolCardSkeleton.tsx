import { Skeleton, SkeletonText } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

export default function ToolCardSkeleton() {
  return (
    <section className="mt-4 space-y-4">
      {Array(3)
        .fill(null)
        .map(() => (
          <section
            key={uuidv4()}
            className="flex flex-col space-y-2 border-[3px] border-black bg-white p-4"
          >
            <section className="flex justify-between">
              <Skeleton w="28" height="4" />
              <section className="flex space-x-2">
                <Skeleton w="5" height="4" /> <Skeleton w="16" height="4" />
              </section>
            </section>

            <SkeletonText mt="4" noOfLines={3} skeletonHeight="4" />
            <section className="flex space-x-3">
              <Skeleton w="12" height="4" />
              <Skeleton w="12" height="4" />
              <Skeleton w="12" height="4" />
            </section>
          </section>
        ))}
    </section>
  );
}
