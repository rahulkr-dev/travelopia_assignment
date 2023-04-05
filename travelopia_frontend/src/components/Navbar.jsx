import React from 'react'
import { Flex, Img, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import image from "../assets/travelHub.svg"
import { formPage } from '../utils/styles';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Flex
        boxSizing='border-box'
            maxW='100vw'
            overflow={"hidden"}
            mb="2rem" zIndex={"2"} bg={formPage.linear_gradient}
            p="1rem" align={"center"}
            pl={["10px", "3rem", "5rem", "10rem"]}
            justifyContent={["flex-start", "center", "flex-start", "flex-start"]} gap={["10px","1rem","2rem","3rem"]} fontFamily={"cursive"} fontSize={["1rem","1rem","1.2rem","1.4rem"]} color="whatsapp.700">
            <Img onClick={() => navigate('/')} borderRadius={"full"} boxSize={"3rem"} src={image} />
            <Text
                transition={"all .5s ease"}
                _hover={{
                    color: "purple"
                }}>
                <Link to="/">Create Form</Link>
            </Text>
            <Text
                transition={"all 1s ease"}
                _hover={{
                    color: "purple"
                }}>
                <Link to="/form-submission">Form Submission</Link>
            </Text>
        </Flex>
    )
}

export default Navbar