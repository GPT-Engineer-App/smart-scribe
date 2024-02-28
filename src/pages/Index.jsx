import React from "react";
import { ChakraProvider, Box, Text, VStack, Grid, theme, Button, Image, Heading, Container, Flex, Spacer, IconButton, Link } from "@chakra-ui/react";
import { FaPlus, FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import { useState } from "react";

const Index = () => {
  const handleGeolocationFetch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        },
        () => {
          alert("Geolocation is not supported by this browser or permission denied.");
        },
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  return (
    <ChakraProvider theme={theme}>
      {/* <NavigationBar /> */}
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Container maxW="container.xl">
              <Flex>
                <Box p="2">
                  <Heading size="md">SaySoil</Heading>
                </Box>
                <Spacer />
                <Box>
                  <IconButton variant="ghost" icon={<FaTwitter />} aria-label="Twitter" isRound />
                  <IconButton variant="ghost" icon={<FaFacebook />} aria-label="Facebook" isRound />
                  <IconButton variant="ghost" icon={<FaLinkedin />} aria-label="LinkedIn" isRound />
                  <IconButton variant="ghost" icon={<FaGithub />} aria-label="GitHub" isRound />
                </Box>
              </Flex>
            </Container>
            {/* The above VStack containing form fields is removed */}
            <VStack spacing={6}>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTEwMjcyMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Employee portrait" />
              <Heading as="h1" size="2xl">
                Welcome to your own Soil
              </Heading>
              <Text color="gray.500">Entdecke jetzt auf welchem Boden du gerade stehst!</Text>
              <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" onClick={() => (window.location.href = "/form")}>
                Get Started
              </Button>
              <Button colorScheme="teal" size="lg" as={Link} to="/profile" onClick={() => (window.location.href = "/profile")}>
                Create Profile
              </Button>
            </VStack>
            <VStack spacing={8}>
              <Box maxW="32rem">
                <Text mb={4}>Our team is dedicated to providing you with the best experience possible. We believe in quality, commitment, and communication. Join us today and let's achieve greatness together.</Text>

                <Button colorScheme="blue" size="lg">
                  Learn More
                </Button>
              </Box>
            </VStack>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
