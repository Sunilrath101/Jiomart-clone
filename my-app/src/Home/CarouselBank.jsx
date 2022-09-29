import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./CarouselBank.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

const CarouselBank = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {data?.map((el) => (
          <SwiperSlide key={el.id}>
            <Image className={styles.zoom} src={el.img} alt="" p={0} w="full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselBank;
