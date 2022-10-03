import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { FaUserCircle, FaShoppingCart, FaListUl } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { IsAuthContext } from "../Context/AuthContext";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { isAuth } = useContext(IsAuthContext);
  console.log("isAuth:", isAuth);

  const clickHandler = () => {};
  return (
    <>
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
          <GridItem
            colSpan={1}
            display="flex"
            alignItems="center"
            gap={2}
            px={0}
          >
            <HamburgerIcon
              boxSize={8}
              color="white"
              onClick={onOpen}
              style={{ cursor: "pointer" }}
            />
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
            <Link to="/login">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={3}
                cursor="pointer"
                mt={2}
              >
                <Icon as={FaUserCircle} color="white" boxSize={6} />
                <Text color="white" fontSize="14px" w="140px">
                  {isAuth ? " Sunil Rathore" : "Login/Signin"}
                </Text>
              </Box>
            </Link>
            <Link to="/cart">
              <Box
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                gap={4}
                cursor="pointer"
                mt={2}
              >
                <Icon as={FaShoppingCart} color="white" boxSize={5} />
                <Text color="white" fontSize="14px">
                  Cart
                </Text>
              </Box>
            </Link>
          </GridItem>
        </Grid>
      </Box>
      <Box w="full" bg="#d5dbdb" h="50px">
        <Box
          w="90%"
          margin="auto"
          bg="#d5dbdb"
          display="flex"
          justifyContent="space-evenly"
        >
          <Popover trigger="hover" bg="#d5dbdb">
            <PopoverTrigger>
              <Button bg="#d5dbdb">Groceries</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />

              {/* <PopoverHeader bg="#d5dbdb">Confirmation!</PopoverHeader> */}
              <PopoverBody display="flex" flexDirection="row" gap={4}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Text>Fruit & vegetables</Text>
                  <Text>Dairy & Bakery</Text>
                  <Text>Staples</Text>
                  <Text>FSnacks & Branded Foods</Text>
                  <Text>Beverages</Text>
                  <Text>Personal Care</Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  borderLeft="5px solid #d5dbdb"
                  mr={4}
                >
                  <Text ml={4}>Home Care</Text>
                  <Text ml={4}>Home & Kitchen</Text>
                  <Text ml={4}>Staples</Text>
                  <Text ml={4}>Mom & Baby Care</Text>
                  <Text ml={4}>Books</Text>
                  <Text ml={4}>Pets</Text>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover" bg="#d5dbdb">
            <PopoverTrigger>
              <Button bg="#d5dbdb">Premium Fruits</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />

              {/* <PopoverHeader bg="#d5dbdb">Confirmation!</PopoverHeader> */}
              <PopoverBody display="flex" flexDirection="row" gap={4}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Text>Apples & Pears</Text>
                  <Text>Avocado,Peach ,Plum</Text>
                  <Text>Banana,Melons & Coconut</Text>
                  <Text>Cherries ,Berries & Exotic Fruits</Text>
                  <Text>Citrus, Mango & Grapes</Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  borderLeft="5px solid #d5dbdb"
                  mr={4}
                >
                  <Text ml={4}>Dates</Text>
                  <Text ml={4}>Gift,Assorted & XL packs</Text>
                  <Text ml={4}>Pomegranate,Papaya & Paneapple</Text>
                  <Text ml={4}>Seasonal & minor Fruits</Text>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover" bg="#d5dbdb">
            <PopoverTrigger>
              <Button bg="#d5dbdb">Home & Kitchen</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />

              {/* <PopoverHeader bg="#d5dbdb">Confirmation!</PopoverHeader> */}
              <PopoverBody display="flex" flexDirection="row" gap={4}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Text>Kitchenware</Text>
                  <Text>Dining</Text>
                  <Text>Furnishing</Text>
                  <Text>Home Decor</Text>
                  <Text>Furniture</Text>
                  <Text>Home appliances</Text>
                  <Text>Toys,Games & Fitness</Text>
                  <Text>Electrical</Text>
                  <Text>Bathroom & Laundry Accessories</Text>
                  <Text>Disposables</Text>
                  <Text>Stationery</Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  borderLeft="5px solid #d5dbdb"
                  mr={4}
                >
                  <Text ml={4}>Bags & trabel Luggage</Text>
                  <Text ml={4}>Mops , Brushes & Scrubs</Text>
                  <Text ml={4}>Auto care</Text>
                  <Text ml={4}>Garden & Outdoor</Text>
                  <Text ml={4}>Carpentry & work accessories</Text>
                  <Text ml={4}>Pooja Needs</Text>
                  <Text ml={4}>bathroom & Laundrt</Text>
                  <Text ml={4}>Industrial & Scientific Suppies</Text>
                  <Text ml={4}>Personal Wear</Text>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover" bg="#d5dbdb">
            <PopoverTrigger>
              <Button bg="#d5dbdb">Fashion</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />

              {/* <PopoverHeader bg="#d5dbdb">Confirmation!</PopoverHeader> */}
              <PopoverBody display="flex" flexDirection="row" gap={4}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Link to="/products">
                    <Text>Men</Text>
                  </Link>
                  <Text>Women</Text>
                  <Text>Boys</Text>
                  <Text>Junior Boys</Text>
                  <Text>Infants</Text>
                  <Text>Toys & Baby Care</Text>
                </Box>
                {/* <Box
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  borderLeft="5px solid #d5dbdb"
                  mr={4}
                >
                
                </Box> */}
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover" bg="#d5dbdb">
            <PopoverTrigger>
              <Button bg="#d5dbdb">Electronics</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />

              {/* <PopoverHeader bg="#d5dbdb">Confirmation!</PopoverHeader> */}
              <PopoverBody display="flex" flexDirection="row" gap={4}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Text>mobiles & Tablets</Text>
                  <Text>TV & Speaker</Text>
                  <Text>Home Appliances</Text>
                  <Text>Computers</Text>
                  <Text>Cameras</Text>
                  <Text>Kitchen Appliances</Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  borderLeft="5px solid #d5dbdb"
                  mr={4}
                >
                  <Text ml={4}>Personal Care & Grooming</Text>
                  <Text ml={4}>Smart Devices</Text>
                  <Text ml={4}>Gaming</Text>
                  <Text ml={4}>Accessories</Text>
                  <Text ml={4}>Phones</Text>
                  <Text ml={4}>Office Products</Text>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover" bg="#d5dbdb">
            <PopoverTrigger>
              <Button bg="#d5dbdb">Beauty</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />

              {/* <PopoverHeader bg="#d5dbdb">Confirmation!</PopoverHeader> */}
              <PopoverBody display="flex" flexDirection="row" gap={4}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Text>Make-Up</Text>
                  <Text>Hair</Text>
                  <Text>Skin Care</Text>
                  <Text>Fragrances</Text>
                  <Text>Mom & Baby</Text>
                  <Text>Personal Care</Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  borderLeft="5px solid #d5dbdb"
                  mr={4}
                >
                  <Text ml={4}>Men's Gromming</Text>
                  <Text ml={4}>Tool & Appliances</Text>
                  <Text ml={4}>Covid Essentials</Text>
                  <Text ml={4}>Wellness</Text>
                  <Text ml={4}>Fitness</Text>
                  <Text ml={4}>Ayush</Text>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover" bg="#d5dbdb">
            <PopoverTrigger>
              <Button bg="#d5dbdb">Jewellery</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />

              {/* <PopoverHeader bg="#d5dbdb">Confirmation!</PopoverHeader> */}
              <PopoverBody display="flex" flexDirection="row" gap={4}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Text>Fine Jewellery</Text>
                  <Text>Jewellery</Text>
                </Box>
                {/* <Box
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  borderLeft="5px solid #d5dbdb"
                  mr={4}
                >
                
                </Box> */}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="#008ecc">
            {/* Create your account */}
            <Link to="/login">
              <Box display="flex" gap={4}>
                <Icon as={FaUserCircle} color="white" boxSize={6} />
                <Text color="white" fontSize="14px" w="140px">
                  Hello, {isAuth ? " Sunil Rathore" : "Login/Signin"}
                </Text>
              </Box>
            </Link>

            <Box display="flex" justifyContent="space-around" gap={4} my={2}>
              <Button bg="#008ecc" border="1px solid #fff" w="50%">
                Account
              </Button>
              <Button bg="#008ecc" border="1px solid #fff" w="50%">
                Orders
              </Button>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            {/* <Input placeholder="Type here..." /> */}
            <Box
              borderBottom="5px solid #d5dbdb"
              display="flex"
              flexDirection="column"
              gap={2}
              p={2}
            >
              <Link to="/">
                <Text>Home</Text>
              </Link>
              <Text>Shop by Category</Text>
              <Text>My List</Text>
              <Text>JioMart Wallet</Text>
              <Text>JioMart Gift Store</Text>
              <Text>JioMart Gift Card</Text>
              <Text>GOGreen with JioMart</Text>

              <Text>All Offers</Text>
            </Box>
            <Box
              borderBottom="5px solid #d5dbdb"
              display="flex"
              flexDirection="column"
              gap={2}
              p={2}
            >
              <Text>My Account</Text>
              <Text>Need Help</Text>
              <Text>About Us</Text>
              <Text>Guide</Text>
            </Box>
            <Box
              borderBottom="5px solid #d5dbdb"
              display="flex"
              flexDirection="column"
              gap={2}
              p={5}
            >
              <Heading as="h4" size="md">
                CONTACT US
              </Heading>
              <Text fontSize={5}>
                WhatsApp us :
                <span style={{ color: "#008ecc", cursor: "pointer" }}>
                  70003 70003
                </span>{" "}
              </Text>
              <Text fontSize={5}>
                Call Us :
                <span style={{ color: "#008ecc", cursor: "pointer" }}>
                  1800 890 1222
                </span>{" "}
              </Text>
              <Text fontSize={5}>8:00 AM to 8:00 PM, 365 days</Text>
              <br />
              <Text fontSize={5}>
                Please note that you are accessing the BETA Version of{" "}
                <span style={{ color: "#008ecc", cursor: "pointer" }}>
                  {" "}
                  www.jiomart.com
                </span>
              </Text>
              <Text fontSize={5}>
                Should you encounter any bugs, glitches, lack of functionality,
                delayed deliveries, billing errors or other problems on the beta
                website, please email us on
                <span style={{ color: "#008ecc", cursor: "pointer" }}>
                  cs@jiomart.com
                </span>
              </Text>
            </Box>
            <Box my={10}>
              <Heading as="h4" size="md">
                DOWNLOAD APP
              </Heading>
            </Box>
            <Box display="flex" justifyContent="space-around" gap={4} my={2}>
              <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png" />
              <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" />
            </Box>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
