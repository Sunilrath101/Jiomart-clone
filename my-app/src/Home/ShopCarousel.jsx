import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./ShopCarousel.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Center, Heading, Image } from "@chakra-ui/react";

const ShopCarousel = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {data?.map((el) => (
          <SwiperSlide key={el.id}>
            <Box p={4} border="1px solid #ccc" height="220px">
              <Image
                p={1}
                className={styles.zoom}
                src={el.img}
                alt=""
                w="full"
                h="80%"
              />
              {
                <Center>
                  {" "}
                  <Heading size="sm">{el.title}</Heading>
                </Center>
              }
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ShopCarousel;
