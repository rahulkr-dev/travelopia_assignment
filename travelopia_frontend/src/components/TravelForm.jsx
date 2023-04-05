import React, { useState } from "react"
import { Box, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

import { formPage } from "../utils/styles";

function TravelForm() {
    const init = {
        name:"",email:"",destination:"",travellers:"",budget:""
    }
    const [formData,setFormData] = useState(init);

    const handleChange = (e)=>{
        const {name,value} = e.target;

        setFormData({
            ...formData,
            [name]:value
        })
    };

    const handleSubmit = ()=>{
        console.log('hello')
        console.log(formData)
    }
  return (
    <Box  
    boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    transition={"all 1s ease"}
    _hover={{
        boxShadow:formPage.formComponent.boxShadowOnHover
    }}
    bg="#fff"
    pos={"absolute"}
    top="6rem"
    left={["2rem","4rem","6rem","15rem"]}
    w={["80vw","60vw","50vw","25vw"]} maxW="lg" mx="auto" mt={8} p={"1rem"} borderWidth={1} borderRadius="md">
      <FormControl isRequired>
        <FormLabel fontSize={"1.1rem"}>Name:</FormLabel>
        <Input
         type="text" value={formData.name} name="name" onChange={handleChange} 
         borderWidth={"2px"}
        variant={"filled"}
        focusBorderColor='lime'
        placeholder="Enter your name" />
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel fontSize={"1.1rem"}>Email address:</FormLabel>
        <Input
         borderWidth={"2px"}
         variant={"filled"}
        focusBorderColor='lime'
        type="email" value={formData.email} name="email" onChange={handleChange} placeholder="Enter your email" />
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel fontSize={"1.1rem"}>Where do you want to go?</FormLabel>
        <Select 
         borderWidth={"2px"}
         variant={"filled"}
        focusBorderColor="lime"
        value={formData.destination} name="destination" onChange={handleChange} placeholder="Select a destination">
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
        </Select>
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel fontSize={"1.1rem"}>No. of travellers:</FormLabel>
        <Input 
         borderWidth={"2px"}
         variant={"filled"}
        focusBorderColor="lime"
        type="number" value={formData.travellers} name="travellers" onChange={handleChange} placeholder="Enter number of travellers" min={1} />
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel fontSize={"1.1rem"}>Budget per person:</FormLabel>
        <Input 
         borderWidth={"2px"}
         variant={"filled"}
        focusBorderColor="lime"
        type="number" value={formData.budget} name="budget" onChange={handleChange} placeholder="Enter budget per person" min={0} step={0.01} />
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel fontSize={"1.1rem"}>Currency:</FormLabel>
        <Input 
         borderWidth={"2px"}
         variant={"filled"}
        focusBorderColor="lime"
        type="text" value="USD" isReadOnly />
      </FormControl>

      <Button
      bg="linear-gradient(90deg, rgba(3,8,11,0.9640231092436975) 0%, rgba(1,14,17,0.8547794117647058) 0%, rgba(97,122,233,1) 0%, rgba(68,228,191,0.958420868347339) 100%, rgba(68,228,191,0.958420868347339) 100%)"
      w="full" onClick={handleSubmit} mt={6} colorScheme="linkedin" size="lg" type="submit">
        Submit
      </Button>
    </Box>
  );
}

export default TravelForm;
