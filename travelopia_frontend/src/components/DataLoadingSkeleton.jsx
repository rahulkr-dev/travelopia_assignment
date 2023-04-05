import { Skeleton, Grid, SkeletonText } from "@chakra-ui/react";
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";


function DataLoadingSkeleton() {
    const arr = new Array(10).fill(0);
    return (
        <Box w="full" h="100vh" bg="#22c1c3" height="full" my="4" p="2rem">
            <SkeletonText noOfLines={1} skeletonHeight={"3rem"} w="10rem" my="3rem" />
      
                    <Box>
                        <SkeletonText noOfLines={1} skeletonHeight={"2rem"} my="1.5rem" />
                    </Box>
            
                    <Grid gap="2rem" templateColumns={"repeat(5,1fr)"}>
                        <SkeletonText my="15px" noOfLines={10} spacing={"10px"} skeletonHeight={"1rem"} />
                        <SkeletonText my="15px" noOfLines={10} spacing={"10px"} skeletonHeight={"1rem"} />
                        <SkeletonText my="15px" noOfLines={10} spacing={"10px"} skeletonHeight={"1rem"} />
                        <SkeletonText my="15px" noOfLines={10} spacing={"10px"} skeletonHeight={"1rem"} />
                        <SkeletonText my="15px" noOfLines={10} spacing={"10px"} skeletonHeight={"1rem"} />
                    
                    </Grid>
        </Box>
    );
}

export default DataLoadingSkeleton;
