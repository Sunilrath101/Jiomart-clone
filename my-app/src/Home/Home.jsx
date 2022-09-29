import {
  Box,
  Container,
  GridItem,
  Heading,
  Image,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CarouselBank from "./CarouselBank";
import CarouselChild from "./CarouselChild";
import Crousel from "./Crousel";
import top_catgory from "../Supply/top_catgory.png";
import top_catgory_2 from "../Supply/top_catgory_2.png";
import top_catgory_3 from "../Supply/top_catgory_3.png";
import ShopCarousel from "./ShopCarousel";
import { Grid } from "@chakra-ui/react";

const carouselData = {
  top: [
    {
      id: 1,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329065_02--Shop-From-Top-Categories-Kitchen-Appliances.jpg",
    },
    {
      id: 2,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329189_02--Shop-From-Top-Categories-audio.jpg",
    },
    {
      id: 3,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329189_02--Shop-From-Top-Categories-audio.jpg",
    },
    {
      id: 4,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329189_02--Shop-From-Top-Categories-audio.jpg",
    },
    {
      id: 5,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109379_1654018684_Womens-Wear.jpg",
    },
    {
      id: 6,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109408_1654018699_Kids-WEAR.jpg",
    },
    {
      id: 7,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109408_1654018699_Kids-WEAR.jpg",
    },
    {
      id: 8,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109280_1654018629_Dairy-Bakery.jpg",
    },
    {
      id: 9,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109280_1654018629_Dairy-Bakery.jpg",
    },
    {
      id: 10,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109301_1654018647_Instant-Foods.jpg",
    },
    {
      id: 11,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109327_1654018658_Home-Kitchen.jpg",
    },
    {
      id: 12,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109179_1654018570_Snacks-FOOD.jpg",
    },
    {
      id: 13,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109205_1654018587_Home-care.jpg",
    },
  ],
  top_deals: [
    {
      id: 1,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1664343444_910X278xb.jpg",
    },
    {
      id: 2,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1662047585_jiomart-svg_910x278_1.jpg",
    },
    {
      id: 3,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1662047508_Payzapp_910x278.jpg",
    },
    {
      id: 4,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1662047264_910x278.jpg",
    },
  ],
  shopCategories: [
    {
      id: 1,
      img: "https://www.jiomart.com/images/category/6/thumb/0-6.png?v=1607022291",
      title: "Personal Care",
    },
    {
      id: 2,
      img: "https://www.jiomart.com/images/category/7/thumb/0-7.png?v=1607022291",
      title: "Home Care",
    },
    {
      id: 3,
      img: "https://www.jiomart.com/images/category/10/thumb/0-10.png?v=1607022291",
      title: "Baby Care",
    },
    {
      id: 4,
      img: "https://www.jiomart.com/images/category/13/thumb/staples-20200710.jpg?v=1607022291",
      title: "Staples",
    },
    {
      id: 5,
      img: "https://www.jiomart.com/images/category/11/thumb/0-11.png?v=1607022291",
      title: "Snackes & Branded Foods",
    },
    {
      id: 6,
      img: "https://www.jiomart.com/images/category/12/thumb/0-12.png?v=1607022291",
      title: "Dairy & Bakery",
    },
    {
      id: 7,
      img: "https://www.jiomart.com/images/category/141/thumb/fruits-vegetables-20200520.png?v=1607022291",
      title: "Fruits & Vegetables",
    },
    {
      id: 8,
      img: "https://www.jiomart.com/images/category/3/thumb/0-3.png?v=1607022291",
      title: "Beverages",
    },
  ],
};

const Home = () => {
  return (
    <div>
      <Crousel />
      <Box p={2}>
        <Image
          w="full"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg"
        />
      </Box>
      <Box p={1}>
        <Image
          w="full"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663775475_Slim-Banner_web.jpg"
        />
      </Box>
      <Box p={1}>
        <Image
          w="full"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664381381_Desktop-DOTD-29th-Sept.jpg"
        />
      </Box>
      <Box p={4}>
        <Heading size="md" pb={4}>
          Shop from Top Categories
        </Heading>
        <CarouselChild data={carouselData.top} />
      </Box>
      <Box p={1}>
        <Image
          w="full"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg"
        />
      </Box>
      <Box>men wear producrts</Box>
      <Box>men wear producrts</Box>
      <Box p={10}>
        <Heading size="md" pb={4}>
          Shop from Top Categories
        </Heading>
        <CarouselBank data={carouselData.top_deals} />
      </Box>
      <Box p={5}>
        <Heading size="md" pb={4} ml="1rem">
          Offers on daily essentials
        </Heading>
        <Image src={top_catgory} />
      </Box>
      <Box p={5}>
        <Heading size="md" pb={4} ml="1rem">
          Offers on daily essentials
        </Heading>
        <ShopCarousel data={carouselData.shopCategories} />
      </Box>
      <Box p={4}>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          // spacingX="00px"
          // spacingY="20px"
        >
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1661428656_01--Staple-Store-_600x350.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1656790165_Web--600-x-350.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1647359679_Milk-Fest--600x350.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623423184_wm.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1656690807_Min-33-600x350.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1628171483_Chinese_webmini.jpg"
              w="full"
            />
          </GridItem>
        </Grid>
      </Box>
      <Box p={5}>
        <Heading size="md" pb={4} ml="1rem">
          Offers on Household & Personal care
        </Heading>
        <Image src={top_catgory_2} />
      </Box>
      <Box p={4}>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          // spacingX="00px"
          // spacingY="20px"
        >
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1645558047_web_mini.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624538640_wm.jpg"
              w="full"
            />
          </GridItem>
        </Grid>
      </Box>
      <Box p={6}>
        <Heading size="md" pb={4} ml="1rem">
          Offers on Household & Personal care
        </Heading>
        <Image src={top_catgory_3} />
      </Box>
      <Box p={4}>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          // spacingX="00px"
          // spacingY="20px"
        >
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663690559_Desktop_600x350.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1626259904_wm.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1626259904_wm.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1660816405_01--Apples-Banner_600x350.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664345006_Shree_600x350.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1660036332_Mobilebanner_StaplesWeek_2_600x350.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1626448037_snackswebmini.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1659004297_600x350-Buy-at-99.jpg"
              w="full"
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1641903326_Your-Favourite-Noodle_600x350.jpg"
              w="full"
            />
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
