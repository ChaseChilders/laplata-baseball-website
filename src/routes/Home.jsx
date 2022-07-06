import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Home.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function HomeCarousel() {
  return (
    <div>
      <div className="home-title">HOME</div>
      <div className="carouselDiv">
        <Swiper
          className="carousel"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img className="carouselImage" src="/pictures/homerun.jpg" alt="hugging kids"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="carouselImage" src="/pictures/standing.jpeg" alt="hugging kids"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="carouselImage" src="/pictures/holdingtrophy.jpg" alt="hugging kids"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="carouselImage" src="/pictures/teampose.jpeg" alt="hugging kids"></img>
          </SwiperSlide>
        </Swiper>
        <div className="tweetSection">
          <div className="headlines">
            <div className="headlineTitle">
              <h1>IN THE NEWS</h1>
            </div>
            <div className="newslines">
              <a
                className="bullets"
                target="blank"
                href="https://www.washingtonpost.com/sports/2022/06/21/2022-spring-all-met-baseball-first-team-second-team-honorable-mention/"
              >
                Bowling recieves All-Met Honorable Mention honors
              </a>
              <a
                className="bullets"
                target="blank"
                href="https://www.somdnews.com/sports/high_school/la-plata-baseball-outlasts-mcdonough/article_c9efbab7-1287-59d8-9c34-025e162cf74f.html"
              >
                La Plata baseball outlasts Mc Donough
              </a>
              <a
                className="bullets"
                target="blank"
                href="https://www.somdnews.com/independent/spotlight/la-plata-baseball-wins-class-2a-state-championship/article_fbd10211-1d89-53c9-bfee-9a4c0d6a6700.html"
              >
                La Plata wins 2A State Title over Middletown
              </a>
              <a
                className="bullets"
                target="blank"
                href="https://southernmarylandchronicle.com/2020/11/24/la-plata-coach-childers-named-baseball-coach-of-the-year/"
              >
                Childers named 2020 NFHS Coach of the Year
              </a>
            </div>
          </div>
          <div className="walkoff">
            <blockquote class="twitter-tweet">
              <p lang="en" dir="ltr">
                🚨 WALK OFF WINNER‼️ <br></br>2022 C Chet Bowling singles back up the middle to score two runs as{" "}
                <a href="https://twitter.com/LaPlataBaseball?ref_src=twsrc%5Etfw">@LaPlataBaseball</a> storms back to win the 2021 MPSSAA 2A State
                Championship 8-7 over <a href="https://twitter.com/SPHSAthletics1?ref_src=twsrc%5Etfw">@SPHSAthletics1</a>.{" "}
                <a href="https://twitter.com/PBRMaryland?ref_src=twsrc%5Etfw">@PBRMaryland</a> |{" "}
                <a href="https://twitter.com/hashtag/MPSSAAPlayoffs?src=hash&amp;ref_src=twsrc%5Etfw">#MPSSAAPlayoffs</a>{" "}
                <a href="https://t.co/RP7C0G8okM">pic.twitter.com/RP7C0G8okM</a>
              </p>
              &mdash; Kyle Campbell (@kcbamaboy13){" "}
              <a href="https://twitter.com/kcbamaboy13/status/1406035909968121857?ref_src=twsrc%5Etfw">June 18, 2021</a>
            </blockquote>
          </div>
        </div>
        <div className="sponsors">
          <img className="mpssaa" src="/pictures/mpssaa.png" alt="mpssaa logo"></img>
          <div className="address">
            <h2 className="footerText">6035 Radio Station Rd, La Plata, MD 20646</h2>
            <h2 className="footerText">Main: 301-753-1754 | Cell: 301-980-4071</h2>
            <h2 className="footerText">Coach John Childers: lpbaseball@gmail.com</h2>
          </div>
          <img className="mpssaa" src="/pictures/smac.jpeg" alt="mpssaa logo"></img>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
