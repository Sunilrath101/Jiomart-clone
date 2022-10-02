import { ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Men.module.css";
const menData = [
  {
    id: 1,
    img: "https://www.jiomart.com/images/product/330x410/rvvgvyyq6u/svaar-comfortable-black-slippers-for-men-product-images-rvvgvyyq6u-0-202206031548.jpg",
    title: "Svaar Comfortable Black Slippers for Men",
    mrp: 399.0,
    price: 99.0,
  },
  {
    id: 2,
    img: "https://www.jiomart.com/images/product/330x410/441120188_olivegreen/fastdry-active-training-jacket-model-441120188_olivegreen-0-202204080513.jpg",
    title: "Fastdry Active Training Jacket",
    mrp: 999.0,
    price: 549.0,
  },
  {
    id: 3,
    img: "https://www.jiomart.com/images/product/330x410/rvuo5gml4x/hotstyle-fashion-black-casual-shoe-for-menss-product-images-rvuo5gml4x-0-202202262008.jpg",

    title: "HOTSTYLE Black Casual Shoe For Mens",
    mrp: 499.0,
    price: 274.0,
  },
  {
    id: 4,
    img: "https://www.jiomart.com/images/product/330x410/rvufz0hxxf/richale-new-cross-white-slider-product-images-rvufz0hxxf-0-202205211310.jpg",

    title: "Richale New Cross White Slider",
    mrp: 1499.0,
    price: 179.0,
  },
  {
    id: 5,
    img: "https://www.jiomart.com/images/product/330x410/441001614_blue/textured-slim-fit-2-piece-suit-set-model-441001614_blue-0-202104082019.jpg",

    title: "Textured Slim Fit 2-Piece Suit Set",
    mrp: 4999.0,
    price: 2149.0,
  },
  {
    id: 6,
    img: "https://www.jiomart.com/images/product/330x410/rvgu9xfj0n/brd-317-grn_10-product-images-rvgu9xfj0n-0-202202270710.jpg",

    title: "Birde Men's Green Sports Shoes",
    mrp: 499.0,
    price: 199.0,
  },
  {
    id: 7,
    img: "https://www.jiomart.com/images/product/330x410/441124529_maroon/sleeveless-hoodie-with-split-kangaroo-pockets-model-441124529_maroon-0-202109140426.jpg",

    title: "Sleeveless Hoodie with Split Kangaroo Pockets",
    mrp: 999.0,
    price: 429.0,
  },
  {
    id: 8,
    img: "https://www.jiomart.com/images/product/330x410/rvxlwu2v2f/smartees-men-color-blocked-grey-single-t-shirt-product-images-rvxlwu2v2f-0-202205210127.jpg",

    title: "Smartees Men Color Blocked Grey Single T-shirt",
    mrp: 999.0,
    price: 207.0,
  },
  {
    id: 9,
    img: "https://www.jiomart.com/images/product/330x410/440633743_assorted/pack-of-3-handkerchiefs-model-440633743_assorted-0-202104081625.jpg",

    title: "Pack of 3 Handkerchiefs",
    mrp: 129.0,
    price: 116.0,
  },
  {
    id: 10,
    img: "https://www.jiomart.com/images/product/330x410/rvv2puooma/aadi-men-s-grey-synthetic-leather-outdoor-casual-sandal-product-images-rvv2puooma-0-202205271525.jpg",

    title: "Aadi Men's Grey Synthetic Leather Outdoor Casual Sandal",
    mrp: 1999.0,
    price: 269.0,
  },
  {
    id: 11,
    img: "https://www.jiomart.com/images/product/330x410/441135653_grey/pack-of-2-trunks-model-441135653_grey-0-202201121643.jpg",

    title: "Pack of 2 Trunks",
    mrp: 369.0,
    price: 369.0,
  },
  {
    id: 12,
    img: "https://www.jiomart.com/images/product/330x410/rvvopcsg44/k-footlance-slipon-slippers-product-images-rvvopcsg44-0-202202271632.jpg",

    title: "K-FOOTLANCE SLIPON SLIPPERS",
    mrp: 999.0,
    price: 199.0,
  },
  {
    id: 13,
    img: "https://www.jiomart.com/images/product/330x410/441120411_ecru/striped-crew-neck-pullover-model-441120411_ecru-0-202104151240.jpg",

    title: "Striped Crew-Neck Pullover",
    mrp: 1199.0,
    price: 515.0,
  },
  {
    id: 14,
    img: "https://www.jiomart.com/images/product/330x410/rvugp4sbuj/gespo-men-s-black-solid-cotton-blend-half-sleeve-shirt-product-images-rvugp4sbuj-0-202202271328.jpg",

    title: "Gespo Men's Black Solid Cotton Blend Half Sleeve Shirt",
    mrp: 899.0,
    price: 235.0,
  },
  {
    id: 15,
    img: "https://www.jiomart.com/images/product/330x410/rvyzsjs1hy/smartees-men-multicolor-solid-cotton-blend-single-round-neck-t-shirt-product-images-rvyzsjs1hy-0-202202261925.jpg",

    title:
      "Smartees Men Multicolor Solid Cotton Blend Single Round Neck T-shirt",
    mrp: 1599.0,
    price: 449.0,
  },
  {
    id: 16,
    img: "https://www.jiomart.com/images/product/330x410/441105765_brown/textured-crew-neck-pullover-model-441105765_brown-0-202012021420.jpg",

    title: "Textured Crew-Neck Pullover",
    mrp: 999.0,
    price: 429.0,
  },
  {
    id: 17,
    img: "https://www.jiomart.com/images/product/330x410/rvu4uxvkxl/shopyholik-men-black-solid-lycra-blend-track-pant-product-images-rvu4uxvkxl-0-202202250853.jpg",

    title: "Shopyholik Men Black Solid Lycra Blend Track Pant",
    mrp: 999.0,
    price: 275.0,
  },
  {
    id: 18,
    img: "https://www.jiomart.com/images/product/330x410/440633743_white/pack-of-3-handkerchiefs-model-440633743_white-0-202104090228.jpg",

    title: "Pack of 3 Handkerchiefs",
    mrp: 129.0,
    price: 116.0,
  },
  {
    id: 19,
    img: "https://www.jiomart.com/images/product/330x410/441120188_jetblack/fastdry-active-training-jacket-model-441120188_jetblack-0-202204080109.jpg",

    title: "Fastdry Active Training Jacket",
    mrp: 999.0,
    price: 549.0,
  },
  {
    id: 20,
    img: "https://www.jiomart.com/images/product/330x410/rv28zflunt/inchh-men-s-cotton-round-neck-colour-block-half-sleeve-t-shirt-product-images-rv28zflunt-0-202207250225.jpg",

    title: "INCHH Men's Cotton Round Neck Colour Block Half Sleeve T-Shirt",
    mrp: 999.0,
    price: 237.0,
  },
];
const Men = () => {
  return (
    <div className={styles.containerMain}>
      <div className={styles.container}>
        <div className={styles.slide}>
          <Heading as="h4" size="md" p={3} style={{ backgroundColor: "#ffff" }}>
            Categories
          </Heading>
          <div className={styles.slide1}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Men
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Clothing Accessories
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Western Wear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Inner Wear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Bags, Belts & Wallets
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Ethnic Wear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Footwear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Night & Lounge Wear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Fashion Jewellery
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Eyewear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Night & Loungewear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Watches
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Watch Accessories
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Handloom & Handicraft
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Women
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Clothing Accessories
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Western Wear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Inner Wear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Bags, Belts & Wallets
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Ethnic Wear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Footwear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Night & Lounge Wear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Fashion Jewellery
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Eyewear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Night & Loungewear
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Watches
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Watch Accessories
                </AccordionPanel>
                <AccordionPanel
                  p={0}
                  px={4}
                  mx={4}
                  className={styles.slidebarselction}
                >
                  Handloom & Handicraft
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Boys
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Girls
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Make-Up
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Junior Boys
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Infants
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Fragrances
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Toys & Baby Care
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <ChevronRightIcon />
                    <Box flex="1" textAlign="left">
                      Home & Kitchen
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
            </Accordion>
          </div>
          <div className={styles.slide2}>
            <Heading
              as="h4"
              size="md"
              p={3}
              style={{ backgroundColor: "#ffff" }}
            >
              Filters
            </Heading>
            <Heading
              as="h4"
              size="sm"
              p={3}
              style={{ backgroundColor: "#ffff" }}
            >
              Availability
            </Heading>
            <Text
              className={styles.slide2_1}
              style={{ backgroundColor: "#ffff" }}
            >
              <input type="checkbox" />
              <p> InStock Products</p>
            </Text>
            <Heading
              as="h4"
              size="sm"
              p={2}
              pt={5}
              style={{ backgroundColor: "#ffff" }}
            >
              Gender
            </Heading>
            <Text className={styles.slide2_1}>
              <input type="checkbox" />
              <p> Women</p>
            </Text>
            <Text className={styles.slide2_1}>
              <input type="checkbox" />
              <p> Men</p>
            </Text>
            <Text className={styles.slide2_1}>
              <input type="checkbox" />
              <p> Girls</p>
            </Text>
            <Text className={styles.slide2_1}>
              <input type="checkbox" />
              <p> Boys</p>
            </Text>
            <Text className={styles.slide2_1}>
              <input type="checkbox" />
              <p> Infants</p>
            </Text>
            <Text className={styles.slide2_1}>
              <input type="checkbox" />
              <p> Junior Boys</p>
            </Text>
            <Text className={styles.slide2_1}>
              <input type="checkbox" />
              <p> Toys & Baby Care</p>
            </Text>
            <Heading
              as="h4"
              size="sm"
              p={2}
              pt={5}
              style={{ backgroundColor: "#ffff" }}
            >
              Categories
            </Heading>
            <InputGroup size="sm">
              <Input pr="4.5rem" type="text" placeholder="Enter password" />
              <InputRightElement width="4.5rem">
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
            {/* <div className={styles.slide3}>
              <Text className={styles.slide2_1}>
                <input type="checkbox" />
                <p> Tshirts</p>
              </Text>
            </div> */}
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.main1}>
            <Image
              src="https://www.jiomart.com/images/category/3/fashion-20200902.jpeg"
              h="full"
            />
          </div>
          <div className={styles.main2}>
            <div>
              Showing {20} of {52373} items
            </div>
            <div>
              Sort by:
              <Button p={1}>Popularity</Button>
              <Button p={1}>High to Low</Button>
              <Button p={1}>Low to High</Button>
              <Button p={1}>Discount</Button>
              <Button p={1}>All Product</Button>
            </div>
          </div>
          <div className={styles.main3}>
            {
              // menData.map((el)=>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
