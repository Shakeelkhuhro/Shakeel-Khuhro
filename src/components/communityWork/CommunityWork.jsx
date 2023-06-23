import React from "react";
import "./community.css";
import One from "../../assets/community/3.JPG";
import Two from "../../assets/community/2.JPG";
import Three from "../../assets/community/1.jpg";
import Four from "../../assets/community/4.JPG";
import Five from "../../assets/community/5.jpg";
import Six from "../../assets/community/6.jpg";
// Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Community = () => {
  return (
    <section id="communities">
      <h5>My Community Work</h5>
      <h2>As a Beta MLSA & Direcotor of Management at Zindigi Prize</h2>

      <Swiper
        className="conatiner communities-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="community">
            <img src={One} alt="Recommdator Profile" className="community-img"/>
          <h5 className="event-name">Zindigi Prize Idea Pitching</h5>
        </SwiperSlide>
        <SwiperSlide className="community">
            <img src={Two} alt="Recommdator Profile" className="community-img"/>
          <h5 className="event-name">Zindigi Prize Idea Pitching</h5>
        </SwiperSlide>
        <SwiperSlide className="community">
            <img src={Three} alt="Recommdator Profile" className="community-img"/>
          <h5 className="event-name">Iamgine Cup Ready Khp</h5>
        </SwiperSlide>
        <SwiperSlide className="community">
            <img src={Four} alt="Recommdator Profile" className="community-img"/>
          <h5 className="event-name">Zindigi Prize Campus Round</h5>
        </SwiperSlide>
        <SwiperSlide className="community">
            <img src={Five} alt="Recommdator Profile" className="community-img"/>
          <h5 className="event-name">MLSA Muet Khp</h5>
        </SwiperSlide>
        <SwiperSlide className="community">
            <img src={Six} alt="Recommdator Profile" className="community-img"/>
          <h5 className="event-name">Iamgine Cup Ready Khp</h5>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Community;
