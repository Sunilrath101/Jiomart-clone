import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./CarouselChild.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

const CarouselChild = ({ data }) => {
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
            <Image className={styles.zoom} src={el.img} alt="" p={0} w="full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselChild;
