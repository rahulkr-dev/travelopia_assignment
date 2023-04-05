import React from 'react'
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import useFetch from '../hooks/useFetch';

function SubmissionsPage() {
  const {loading,error,data} = useFetch("/api/travel-form");
  console.log(loading,error,data)
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb="6">
        All Submissions
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Destination</Th>
            <Th>No. of Travellers</Th>
            <Th>Budget Per Person</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.map((submission) => (
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
    </Box>
  );
}

export default SubmissionsPage;
