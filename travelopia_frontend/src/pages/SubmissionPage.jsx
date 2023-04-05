import React, { useState } from 'react'
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import useFetch from '../hooks/useFetch';
import DataLoadingSkeleton from '../components/DataLoadingSkeleton';
import BeatLoader from '../components/BeatLoader';
import SortAndFilter from '../components/SortAndFilter';

function SubmissionsPage() {
  const { loading, error, data, initialLoading,updateData } = useFetch("/api/travel-form");
  // console.log(loading, error, data, initialLoading);
  // SORTING LOGIC
  const handleSort = (type)=>{
    // console.log(type)
    switch(type){
      case "A-Z" :{

        data.sort((a,b)=>{
          if(a.name>b.name) return 1
          if(a.name<b.name) return -1
          else return 0;
        });
        updateData([...data])
        return;
      }
      case "Z-A" :{
        data.sort((a,b)=>{
          if(a.name<b.name) return 1
          if(a.name>b.name) return -1
          else return 0;
        });
        updateData([...data]);
        return;
      }
      case "Oldest" :{
        data.sort((a,b)=>{
          if(a.createdAt>b.createdAt) return 1
          if(a.createdAt<b.createdAt) return -1
          else return 0;
        });
        updateData([...data]);
        return;
      }default :{
        data.sort((a,b)=>{
          if(a.createdAt<b.createdAt) return 1
          if(a.createdAt>b.createdAt) return -1
          else return 0;
        });
        updateData([...data]);
        return;
      }
    }
    // SEARCHING LOGIC
    const handleSearch = (text)=>{
      console.log(text);
    }
  }
  return (
    <Box m="auto" p={["5px", "5px", "10px", "4rem"]}>
      {
        initialLoading ? (
          <DataLoadingSkeleton />
        ) : (
          <Box>
            <SortAndFilter handleSort={handleSort} />
            <Text fontSize="2xl" fontWeight="bold" mb="6">
              All Submissions
            </Text>
            <Table variant="striped">
              <Thead>
                <Tr fontSize="1.1rem">
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Destination</Th>
                  <Th>No. of Travellers</Th>
                  <Th>Budget Per Person</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((submission) => (
                  <Tr key={submission._id}>
                    <Td>{submission.name}</Td>
                    <Td>{submission.email}</Td>
                    <Td>{submission.destination}</Td>
                    <Td>{submission.numTravellers}</Td>
                    <Td>{submission.budgetPerPerson}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            {/* Loading Indicator */}
            {
              loading && <BeatLoader />
            }

          </Box>
        )
      }
    </Box>
  )
}

export default SubmissionsPage;
