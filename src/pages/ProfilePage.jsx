import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, VStack, Input, FormControl, FormLabel, Button } from "@chakra-ui/react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Profile data to be saved:", profile);
    alert("Profile created! (data would be saved if backend were connected)");
    navigate("/duplicate-home");
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Create your profile
      </Text>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter your name" name="name" value={profile.name} onChange={handleChange} />
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
