import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jfif";
// import AVTR2 from "../../assets/avatar2.jpg";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";
// Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recommendations</h5>
      <h2>Testimonails</h2>

      <Swiper
        className="conatiner testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={AVTR1} alt="Recommdator Profile" />
          </div>
          <h5 className="client-name">Sharjeel Yunus</h5>
          <h5 className="client-name">
            FULLSTACK DEVELOPER REACT / NEXTJS DEV
          </h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            doloremque animi enim illum quasi adipisci necessitatibus eum harum
            maxime culpa! Quas aut voluptatibus nobis nostrum nisi itaque,
            inventore labore voluptas.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={AVTR1} alt="Recommdator Profile" />
          </div>
          <h5 className="client-name">Sharjeel Yunus</h5>
          <h5 className="client-name">
            FULLSTACK DEVELOPER REACT / NEXTJS DEV
          </h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            doloremque animi enim illum quasi adipisci necessitatibus eum harum
            maxime culpa! Quas aut voluptatibus nobis nostrum nisi itaque,
            inventore labore voluptas.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={AVTR1} alt="Recommdator Profile" />
          </div>
          <h5 className="client-name">Sharjeel Yunus</h5>
          <h5 className="client-name">
            FULLSTACK DEVELOPER REACT / NEXTJS DEV
          </h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            doloremque animi enim illum quasi adipisci necessitatibus eum harum
            maxime culpa! Quas aut voluptatibus nobis nostrum nisi itaque,
            inventore labore voluptas.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={AVTR1} alt="Recommdator Profile" />
          </div>
          <h5 className="client-name">Sharjeel Yunus</h5>
          <h5 className="client-name">
            FULLSTACK DEVELOPER REACT / NEXTJS DEV
          </h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            doloremque animi enim illum quasi adipisci necessitatibus eum harum
            maxime culpa! Quas aut voluptatibus nobis nostrum nisi itaque,
            inventore labore voluptas.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
