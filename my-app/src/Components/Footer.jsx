import styles from "./Footer.module.css";
import React from "react";
import { Link, List, ListItem } from "@chakra-ui/react";

const Footer = () => {
  return (
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
          <ListItem className={styles.listItem}>Fruits and Vegetables</ListItem>
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
          <ListItem className={styles.listItem}>Terms and conditions</ListItem>
          <ListItem className={styles.listItem}>Privacy policy</ListItem>
          <ListItem className={styles.listItem}>E-waste Policy</ListItem>
          <ListItem className={styles.listItem}>
            Cancellation and return policy
          </ListItem>
        </List>
        <List className={styles.list}>
          <ListItem className={styles.listItem}>
            MOST POPULAR CATEGORIES
          </ListItem>
          <ListItem className={styles.listItem}>Staples</ListItem>
          <ListItem className={styles.listItem}>Beverages</ListItem>
          <ListItem className={styles.listItem}>Personal Care</ListItem>
          <ListItem className={styles.listItem}>Home Care</ListItem>
          <ListItem className={styles.listItem}>Fruits and Vegetables</ListItem>
          <ListItem className={styles.listItem}>Baby Care</ListItem>
          <ListItem className={styles.listItem}>
            Snacks & Branded Foods
          </ListItem>
          <ListItem className={styles.listItem}>Dairy & Bakery</ListItem>
        </List>
      </div>
    </div>
  );
};

export default Footer;
