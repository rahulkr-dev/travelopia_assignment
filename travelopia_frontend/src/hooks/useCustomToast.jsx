import React from 'react'
import { useToast } from '@chakra-ui/react'

const useCustomToast = () => {
    const toast = useToast();
  

    return (title,description,status,position="top-right",duration=5000,isClosable=true)=>{
        const details = {
            position,title,description,status,duration,isClosable
        }
        toast(details)
    }


}

export default useCustomToast