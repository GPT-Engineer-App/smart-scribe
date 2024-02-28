import React from "react";
import { Box, Text, VStack, Input, Select, FormControl, FormLabel } from "@chakra-ui/react";

const FormPage = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Please fill out the form
      </Text>
      <VStack spacing={4}>
        <FormControl id="latitude">
          <FormLabel>Latitude</FormLabel>
          <Input type="text" placeholder="Enter latitude" />
        </FormControl>
        <FormControl id="longitude">
          <FormLabel>Longitude</FormLabel>
          <Input type="text" placeholder="Enter longitude" />
        </FormControl>
        <FormControl id="oberbodenhorizont">
          <FormLabel>Oberbodenhorizont</FormLabel>
          <Select placeholder="Select option">{/* Options will be added here */}</Select>
        </FormControl>
        <FormControl id="unterbodenhorizont">
          <FormLabel>Unterbodenhorizont</FormLabel>
          <Select placeholder="Select option">{/* Options will be added here */}</Select>
        </FormControl>
        <FormControl id="untergrundhorizont">
          <FormLabel>Untergrundhorizont</FormLabel>
          <Select placeholder="Select option">{/* Options will be added here */}</Select>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FormPage;
