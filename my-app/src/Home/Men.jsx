import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Men.module.css";
const Men = () => {
  return (
    <div className={styles.containerMain}>
      <div className={styles.container}>
        <div className={styles.slide}>
          <div className={styles.slide1}>
            <Heading as="h4" size="md" p={3}>
              Categories
            </Heading>
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
        </div>
        <div className={styles.main}></div>
      </div>
    </div>
  );
};

export default Men;
