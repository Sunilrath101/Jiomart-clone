import styles from "./Footer.module.css";
import React from "react";
import {
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerIn}>
          <List className={styles.list} gap={1}>
            <ListItem className={styles.listItem}>
              MOST POPULAR CATEGORIES
            </ListItem>
            <ListItem className={styles.listItem}>Staples</ListItem>
            <ListItem className={styles.listItem}>Beverages</ListItem>
            <ListItem className={styles.listItem}>Personal Care</ListItem>
            <ListItem className={styles.listItem}>Home Care</ListItem>
            <ListItem className={styles.listItem}>
              Fruits and Vegetables
            </ListItem>
            <ListItem className={styles.listItem}>Baby Care</ListItem>
            <ListItem className={styles.listItem}>
              Snacks & Branded Foods
            </ListItem>
            <ListItem className={styles.listItem}>Dairy & Bakery</ListItem>
          </List>
          <List className={styles.list} gap={1}>
            <ListItem className={styles.listItem}>CUSTOMER SERVICES</ListItem>
            <ListItem className={styles.listItem}>About Us</ListItem>
            <ListItem className={styles.listItem}>FAQ</ListItem>
            <ListItem className={styles.listItem}>
              Terms and conditions
            </ListItem>
            <ListItem className={styles.listItem}>Privacy policy</ListItem>
            <ListItem className={styles.listItem}>E-waste Policy</ListItem>
            <ListItem className={styles.listItem}>
              Cancellation and return policy
            </ListItem>
          </List>
          <List className={styles.list} w="30%">
            <ListItem>
              <Box
                borderLeft="5px solid #d5dbdb"
                display="flex"
                flexDirection="column"
                gap={1}
                px={5}
              >
                <Heading as="h4" size="md" className={styles.listItem}>
                  CONTACT US
                </Heading>
                <Text fontSize={5} className={styles.listItem}>
                  WhatsApp us :
                  <span style={{ color: "#008ecc", cursor: "pointer" }}>
                    70003 70003
                  </span>{" "}
                </Text>
                <Text fontSize={5} className={styles.listItem}>
                  Call Us :
                  <span style={{ color: "#008ecc", cursor: "pointer" }}>
                    1800 890 1222
                  </span>{" "}
                </Text>
                <Text fontSize={5} className={styles.listItem}>
                  8:00 AM to 8:00 PM, 365 days
                </Text>
                <br />
                <Text fontSize={5} className={styles.listItem}>
                  Please note that you are accessing the BETA Version of{" "}
                  <span style={{ color: "#008ecc", cursor: "pointer" }}>
                    www.jiomart.com
                  </span>
                </Text>
                <Text fontSize={5} className={styles.listItem}>
                  Should you encounter any bugs, glitches, lack of
                  functionality, delayed deliveries, billing errors or other
                  problems on the beta website, please email us on
                  <span style={{ color: "#008ecc", cursor: "pointer" }}>
                    cs@jiomart.com
                  </span>
                </Text>
              </Box>
              <Box my={3}>
                <Heading as="h4" size="md">
                  DOWNLOAD APP
                </Heading>
              </Box>
              <Box display="flex" justifyContent="space-around" gap={1}>
                <Image
                  src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                  className={styles.listItem}
                />
                <Image
                  src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                  className={styles.listItem}
                />
              </Box>
            </ListItem>
          </List>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "50px",
            paddingBottom: "10px",
            fontSize: "10px",
          }}
        >
          <p>
            Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari
            5.1.5+, Google Chrome 80+
          </p>
          <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
