import React, { useState } from "react";
import { Box, Button, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const NavigationBar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <Flex p={4} position="relative">
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
        <Menu isOpen={isProfileMenuOpen}>
          <MenuButton as={IconButton} onClick={toggleProfileMenu} colorScheme="teal" aria-label="Profile" icon={<FaUser />} ml={2} />
          <MenuList>
            <MenuItem as={Link} to="/profile">
              Profile
            </MenuItem>
            <MenuItem as={Link} to="/settings">
              Settings
            </MenuItem>
            <MenuItem as={Link} to="/logout">
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default NavigationBar;
