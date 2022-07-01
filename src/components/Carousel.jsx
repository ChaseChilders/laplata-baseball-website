import React from "react";
import "./Stylesheets/Carousel.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomeCarousel() {
  return (
    <div className="carouselDiv">
      <div className="stateChampionships">
        <div className="stateChampionshipHeading">
          <h1>MARYLAND STATE CHAMPIONS </h1>
        </div>
        <div className="stateChampionshipYears">
          <h1> 2008, 2016, 2019, 2021</h1>
        </div>
      </div>
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
