import { Spinner } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';


function BeatLoader(color = "red.500") {

    return (
            <Spinner
            opacity={"1"}
            pos="fixed" top="50vh" left="50vw"
            transform={"translate(-50%,-50%)"}
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
       
    );
}

export default BeatLoader;
