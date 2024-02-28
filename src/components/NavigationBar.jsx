import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Flex p={4}>
      <Box p="2">
        <Button as={Link} to="/" colorScheme="teal">
          Home
        </Button>
      </Box>
      <Spacer />
      <Box>
        <Button as={Link} to="/form" colorScheme="teal">
          Form
        </Button>
        <Button as={Link} to="/profile" colorScheme="teal" ml={2}>
          Profile
        </Button>
      </Box>
    </Flex>
  );
};

export default NavigationBar;
