import React from 'react'
import { Box } from '@chakra-ui/react'
import { formPage } from '../utils/styles'
import TravelForm from '../components/TravelForm'

const TavelFormPage = () => {
    return (
        <>
            <Box w="100vw" h="90vh" p="0" mt="-2rem"
                clipPath={formPage.clipPath}
                bg={formPage.linear_gradient}
            >
            </Box>
            <TravelForm />
        </>
    )
}

export default TavelFormPage