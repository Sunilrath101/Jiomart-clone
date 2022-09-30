import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./carousel.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

const data = [
  {
    id: 1,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1663587716_REV_Main_Banner-1680-x-320_100kb.jpg",
  },
  {
    id: 2,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1663078113_1662742225_1662562055_1662140120_1661973300_1659449577_1659283479_1657897108_1657641245_1657556677_1657205534_JioMart-Best-Selling-Electronics-Carousel-Banner-27_05_2022.jpg",
  },
  {
    id: 3,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1664379056_NCR.jpg",
  },
  {
    id: 4,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1664364560_Atta--Flour_1680x320.jpg",
  },
  {
    id: 5,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1663078399_1662742994_1662658775_Beauty-Banaza_1680x320.jpg",
  },
  {
    id: 6,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1663514641_Sep-19_Banner-1_web.jpg",
  },
  {
    id: 7,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1664232769_juice-Desktop-1680-320.jpg",
  },
  {
    id: 8,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1664232277_1663770551_1662563791_1661275553_1661112546_1660758642_Organic-Range-for-Healthy-Diet_1680-x-320.jpg",
  },
  {
    id: 9,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1664230674_Deodorant_fest-1680-320.jpg",
  },
  {
    id: 10,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1663760707_Web_Delhi_PremiumFruits.jpg",
  },
];

const Crousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {data?.map((el) => (
          <SwiperSlide key={el.id}>
            <Image src={el.img} alt="" p={0} w="full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Crousel;
