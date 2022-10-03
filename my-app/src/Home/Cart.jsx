import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigation } from "react-router-dom";
import { CarrtContext } from "../Context/CartContext";
const property = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};
const Cart = () => {
  const { data } = useContext(CarrtContext);
  const [total, setTotal] = useState(data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  // const { iisOpen, oonOpen, oonClose } = useDisclosure();
  // const navigate = useNavigation();

  console.log("data:", total);

  const quantity = (item, action) => {
    if (action === "plus") {
      setTotal(
        [...total]
          .map((el) => el)
          .filter((el) => {
            return item === el ? el.quantity++ : el.quantity;
          })
      );
    } else if (action === "minus") {
      setTotal(
        [...total]
          .map((el) => el)
          .filter((el) => {
            return item === el ? el.quantity-- : el.quantity;
          })
      );
    }
  };
  return (
    <Box w="80%" m="auto" border="1px solid #ccc" display="flex">
      <Box w="40%" m="auto" border="1px solid #ccc" mt={4} borderRadius="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          alignItems="center"
          px={4}
          mb={4}
          mt={4}
        >
          <Heading size="md">Fashion Basket {total.length}</Heading>
          <Heading size="lg">
            ₹
            {total
              ?.map((el) => el)
              .reduce((a, el) => {
                return a + el.quantity * el.price;
              }, 0)}
          </Heading>
        </Box>
        {data?.map((el) => (
          <Box
            w="100%"
            borderWidth="1px"
            borderRadius="lg"
            // overflow="hidden"
            display="flex"
            key={el.id}
          >
            <Image src={el.img} alt={"proper"} boxSize={40} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {el.title}
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              ></Box>

              <Box>
                ₹{el.price}
                <Box as="span" color="gray.600" fontSize="sm" ml={5}>
                  ₹{el.mrp}
                </Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                <Box ml="2" color="green.800" fontSize="md" fontWeight="500">
                  You Save ₹{(el.mrp - el.price) * el.quantity}
                </Box>
              </Box>
              <Box
                display="flex"
                mt="2"
                ml={40}
                alignItems="center"
                flexDirection="row"
                gap={2}
              >
                <Button
                  onClick={() => quantity(el, "minus")}
                  disabled={el.quantity === 1}
                >
                  -
                </Button>

                <Button color="black">{+el.quantity}</Button>
                <Button onClick={() => quantity(el, "plus")}>+</Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        w="40%"
        m="auto"
        border="1px solid #ccc"
        mt={250}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        p={5}
        borderRadius="lg"
      >
        <Stack w="100%">
          <Heading>Payment Details</Heading>
          <Box
            display="flex"
            justifyContent="space-between"
            px={4}
            py={1}
            borderBottom="3px solid #ccc"
          >
            <Text>MRP Total</Text>
            <Text fontWeight="500" color="black">
              ₹
              {total
                ?.map((el) => el)
                .reduce((a, el) => {
                  return a + el.quantity * el.mrp;
                }, 0)}
            </Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            px={4}
            py={1}
            borderBottom="3px solid #ccc"
          >
            <Text>Product Discount</Text>
            <Text fontWeight="500" color="black">
              ₹
              {total
                ?.map((el) => el)
                .reduce((a, el) => {
                  return a + el.quantity * (el.mrp - el.price);
                }, 0)}
            </Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            px={4}
            py={1}
            borderBottom="3px solid #ccc"
            mb={4}
          >
            <Text>Total Amount</Text>
            <Text fontWeight="500" color="black">
              ₹
              {total
                ?.map((el) => el)
                .reduce((a, el) => {
                  return a + el.quantity * el.price;
                }, 0)}
            </Text>
          </Box>
          <Button bg="#008ecc" onClick={onOpen}>
            Place Order
          </Button>
        </Stack>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment Confirmation</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box
                display="flex"
                justifyContent="space-between"
                px={4}
                py={1}
                borderBottom="3px solid #ccc"
                mb={4}
              >
                <Text>Total Amount</Text>
                <Text fontWeight="500" color="black">
                  ₹
                  {total
                    ?.map((el) => el)
                    .reduce((a, el) => {
                      return a + el.quantity * el.price;
                    }, 0)}
                </Text>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Link to="/">
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() =>
                    toast({
                      title: "Payment Successful.",
                      description: "We've received your payment.",
                      status: "success",
                      duration: 10000,
                      isClosable: true,
                    })
                  }
                >
                  Done
                </Button>
              </Link>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Cart;
