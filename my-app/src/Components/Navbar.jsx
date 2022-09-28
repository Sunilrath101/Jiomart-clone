import {
  Box,
  Grid,
  GridItem,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { FaUserCircle, FaShoppingCart, FaListUl } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box
      bg="#008ecc"
      w="full"
      maxW="full"
      h="72px"
      p={0}
      m={0}
      display="flex"
      alignItems="center"
    >
      <Grid w="1232px" m="auto" templateColumns="repeat(7, 1fr)" gap={4}>
        <GridItem colSpan={1} display="flex" alignItems="center" gap={8}>
          <HamburgerIcon boxSize={8} color="white" />
          <Image
            src="https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg"
            w="110px"
            h="37px"
          />
        </GridItem>
        <GridItem colSpan={4} display="flex" borderRadius={4}>
          <InputGroup size="md" borderRadius={4}>
            <Input
              placeholder="Search essentials, groceries, and more...."
              bg="white"
            />
            <InputRightElement children={<Icon as={FaListUl} bg="white" />} />
          </InputGroup>
        </GridItem>
        <GridItem below="md" colSpan={2} display="flex" gap={8}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Icon as={FaUserCircle} color="white" boxSize={6} />
            <Text color="white" fontSize="14px" w="140px">
              Sunil Rathore
            </Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            gap={4}
          >
            <Icon as={FaShoppingCart} color="white" boxSize={5} />
            <Text color="white" fontSize="14px">
              Cart
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Navbar;
