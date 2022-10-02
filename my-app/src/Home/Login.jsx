import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { IsAuthContext } from "../Context/AuthContext";

const Login = () => {
  const { toggle } = useContext(IsAuthContext);
  const [otp, setOtp] = useState(false);
  return (
    <Box
      w="80%"
      h="auto"
      m="auto"
      mt={10}
      display="flex"
      justifyContent="space-between"
      borderRadius={10}
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    >
      <Image
        src="https://www.jiomart.com/msassets/images/login-banner.jpg"
        borderRadius={10}
      />
      <Box
        mr={150}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={10}
      >
        <Box>
          <Heading as="h4" size="md">
            Sign in
          </Heading>
          <p style={{ fontSize: "10px" }}>
            Sign in to access your Orders, Offers and Wishlist.
          </p>
        </Box>
        <Box>
          <Box spacing={4}>
            {!otp ? (
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input type="tel" placeholder="Enter your moblie number" />
              </InputGroup>
            ) : (
              <PinInput otp display="flex" flexDirection="row" gap={4}>
                <PinInputField mr={4} />
                <PinInputField mr={4} />
                <PinInputField mr={4} />
                <PinInputField mr={4} />
              </PinInput>
            )}
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center">
          {!otp ? (
            <Button
              onClick={() => {
                setOtp(true);
              }}
              bg="#008ecc"
              color="black"
            >
              Enter
            </Button>
          ) : (
            <Link to="/">
              <Button bg="#008ecc" color="black" onClick={() => toggle(true)}>
                Submit
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
