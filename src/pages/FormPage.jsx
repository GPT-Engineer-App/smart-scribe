import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, VStack, Input, Select, FormControl, FormLabel } from "@chakra-ui/react";

import { InputGroup, InputRightElement, Button } from "@chakra-ui/react";

// Duplicate import of 'useEffect' removed

const FormPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register new Location";
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
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

    // Handle form submission
    setFormSubmitted(true);

    setTimeout(() => {
      console.log("Form data to be sent to the API:", formData);
      alert("Data would be saved to the database if connected to the server.");

      // Redirect to homepage after successful form submission
      navigate("/");
    }, 500); // A small delay to ensure the message is seen before redirecting
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
        Register a new Location
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
