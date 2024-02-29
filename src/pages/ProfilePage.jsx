import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, VStack, Input, FormControl, FormLabel, Button } from "@chakra-ui/react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setProfile({
      ...profile,
      [event.target.name]: event.target.value.trim(),
    });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Profile data to be saved:", profile);
    alert("Profile created! (data would be saved if backend were connected)");
    navigate("/");
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Create your profile
      </Text>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="first-name">
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder="Enter your first name" name="firstName" value={profile.firstName} onChange={handleChange} />
        </FormControl>

        <FormControl id="last-name">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Enter your last name" name="lastName" value={profile.lastName} onChange={handleChange} />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" name="email" value={profile.email} onChange={handleChange} />
        </FormControl>

        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter a password" name="password" value={profile.password} onChange={handleChange} />
        </FormControl>

        <Button colorScheme="blue" size="lg" type="submit">
          Create Profile
        </Button>
      </VStack>
    </Box>
  );
};

export default ProfilePage;
