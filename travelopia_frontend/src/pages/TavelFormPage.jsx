import React from 'react'
import { Box, Img } from '@chakra-ui/react'
import { formPage } from '../utils/styles'
import TravelForm from '../components/TravelForm'
// import Navbar from '../components/Navbar'



const TavelFormPage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Box w="100vw" h="80vh" p="0" mt="-2rem"
                clipPath={formPage.clipPath}
                bg={formPage.linear_gradient}
            >
            </Box>
            <TravelForm />
            
        </>
    )
}

export default TavelFormPage