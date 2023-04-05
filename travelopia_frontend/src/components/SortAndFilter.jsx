import { useState } from 'react';
import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

function SortAndFilter({handleSort,handleSearch}) {
    const [searchText,setSearchText] = useState("");
    const [sort,setSort] = useState("");

    const handleSearchFuntion = (e)=>{
        setSearchText(e.target.value);
        handleSearch(e.target.value);
    }

    return (
        <Box m="auto" bg="gray.200" p={3} mt={['-1rem',"-1rem","-2rem","-3rem"]} mb="1rem">
            <Flex align="center" justify={['flex-start',"flex-start","space-around","space-around"]}>
                <InputGroup w={{ base: '100%', md: 'auto' }} mr={{ md: 4 }}>
                    <InputLeftElement pointerEvents="none" children={<ChevronDownIcon />} />
                    <Menu>
                        <MenuButton fontFamily={"cursive"} as={Button} rightIcon={<ChevronDownIcon />}>Sort:</MenuButton>
                        <MenuList>
                            <MenuItem onClick={()=>handleSort("A-Z")}>
                                {"  Name (A-Z)"}
                            </MenuItem>
                            <MenuItem onClick={()=>handleSort("Z-A")} >
                                {" Name (Z-A)"}
                            </MenuItem>
                            <MenuItem onClick={()=>handleSort("Oldest")} >
                                {"Date (Oldest first)"}
                            </MenuItem>
                            <MenuItem onClick={()=>handleSort("Newest")}  >
                                {" Date (Newest first)"}
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </InputGroup>
                <InputGroup w={{ base: '100%', md: 'auto' }}>
                    <Input
                        value={searchText}
                        onChange={(e)=>handleSearchFuntion(e)}
                        fontFamily={"cursive"}
                        placeholder="Search"
                        focusBorderColor='gray.500'
                        border="1px solid gray"
                    />
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='black' />}
                    />
                </InputGroup>
            </Flex>
        </Box>
    )
}

export default SortAndFilter;
