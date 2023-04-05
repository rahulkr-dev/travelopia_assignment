import { Spinner } from '@chakra-ui/react';

function BeatLoader({ size = "md", color = "blue.500" }) {
  return (
    <Spinner
      size={size}
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color={color}
    />
  );
}

export default BeatLoader;
