import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Home.css";

function HomeCarousel() {
  return (
    <div className="carouselDiv">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="/pictures/hugging.jpg" alt="hugging kids"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/pile.jpg" alt="hugging kids"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/holdingtrophy.jpg" alt="hugging kids"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/teampose.jpeg" alt="hugging kids"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeCarousel;
