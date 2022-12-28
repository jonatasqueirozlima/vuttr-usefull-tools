import { Alert, AlertIcon } from '@chakra-ui/react';

export default function NoToolsFound() {
  return (
    <Alert className="mt-4 border-[3px] border-black bg-white" status="warning">
      <AlertIcon />
      No tools found
    </Alert>
  );
}
