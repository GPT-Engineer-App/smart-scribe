import React from "react";
import { Box, Text, VStack, Input, Select, FormControl, FormLabel } from "@chakra-ui/react";

import { InputGroup, InputRightElement, Button } from "@chakra-ui/react";

const FormPage = () => {
  const fetchGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        document.getElementById("geoposition").value = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
      },
      (error) => {
        console.error(error);
      },
    );
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Please fill out the form
      </Text>
      <VStack spacing={4}>
        <FormControl id="geoposition">
          <FormLabel>Geoposition</FormLabel>
          <InputGroup>
            <Input type="text" placeholder="Enter geoposition" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={fetchGeolocation}>
                Get GPS
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="oberbodenhorizont">
          <FormLabel>Oberbodenhorizont</FormLabel>
          <Select placeholder="Select option">
            {Array.from({ length: 21 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="unterbodenhorizont">
          <FormLabel>Unterbodenhorizont</FormLabel>
          <Select placeholder="Select option">
            {Array.from({ length: 21 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="untergrundhorizont">
          <FormLabel>Untergrundhorizont</FormLabel>
          <Select placeholder="Select option">
            {Array.from({ length: 21 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FormPage;
