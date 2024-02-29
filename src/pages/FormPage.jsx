import React from "react";
import { Box, Text, VStack, Input, Select, FormControl, FormLabel } from "@chakra-ui/react";

import { InputGroup, InputRightElement, Button } from "@chakra-ui/react";

const FormPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const formData = {
      geoposition: formElements.geoposition.value,
      oberbodenhorizont: formElements.oberbodenhorizont.value,
      unterbodenhorizont: formElements.unterbodenhorizont.value,
      untergrundhorizont: formElements.untergrundhorizont.value,
      phwert: formElements.phwert.value,
      feuchtigkeit: formElements.feuchtigkeit.value,
    };

    console.log("Form data to be sent to the API:", formData);
    alert("Data would be saved to the database if connected to the server.");
  };
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

        <FormControl id="bepflanzung">
          <FormLabel>Bepflanzung</FormLabel>
          <Select placeholder="Select option">
            <option value="1">🌱 Young Plant</option>
            <option value="2">🌿 Herb</option>
            <option value="3">🍀 Clover</option>
            <option value="4">🌲 Pine Tree</option>
            <option value="5">🌳 Oak Tree</option>
            <option value="6">🌾 Grassland</option>
            <option value="7">🏞️ Swamp</option>
          </Select>
        </FormControl>
        <FormControl id="oberbodenhorizont">
          <FormLabel>Oberbodenhorizont</FormLabel>
          <Select placeholder="Select option">
            {Array.from({ length: 21 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
            {/* Add additional options with different emojis or Unicode symbols as needed */}
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
        <FormControl id="phwert">
          <FormLabel>ph-Wert</FormLabel>
          <Input type="number" placeholder="Enter ph-Wert" />
        </FormControl>
        <FormControl id="schlag">
          <FormLabel>Schlag</FormLabel>
          <Input type="text" placeholder="Enter Schlag" name="schlag" />
        </FormControl>
        <FormControl id="feuchtigkeit">
          <FormLabel>Feuchtigkeit</FormLabel>
          <Input type="number" placeholder="Enter Feuchtigkeit (%)" />
        </FormControl>
        <form onSubmit={handleSubmit}>
          <Button colorScheme="blue" size="lg" type="submit">
            Submit
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default FormPage;
