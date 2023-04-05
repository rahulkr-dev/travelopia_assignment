import React from 'react'
import { Flex,Img,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import image from "../assets/travelHub.svg"
import { formPage } from '../utils/styles';

const Navbar = () => {
  return (
    <Flex 
   
    mb="2rem" zIndex={"2"} bg={formPage.linear_gradient} p="1rem" align={"center"} pl={["2rem","3rem","5rem","10rem"]} justifyContent={["center","center","flex-start","flex-start"]} gap="3rem" fontFamily={"cursive"} fontSize={"1.4rem"} color="whatsapp.700">
        <Img borderRadius={"full"} boxSize={"3rem"} src={image} />
        <Text
         transition={"all .5s ease"}
        _hover={{
            color:"purple"
        }}>
            <Link to="/">Create Form</Link>
        </Text>
        <Text
         transition={"all 1s ease"}
            _hover={{
                color:"purple"
            }}>
            <Link to="/form-submission">Form Submission</Link>
        </Text>
    </Flex>
  )
}

export default Navbar