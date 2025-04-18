import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import Image from "next/image";

// internal
import insta_1 from "@assets/img/gallery/1.jpg";
import insta_2 from "@assets/img/gallery/2.jpg";
import insta_3 from "@assets/img/gallery/3.jpg";
import insta_4 from "@assets/img/gallery/4.jpg";
import insta_5 from "@assets/img/gallery/5.jpg";
import insta_6 from "@assets/img/gallery/6.jpg";
import insta_7 from "@assets/img/gallery/7.jpg";
import insta_8 from "@assets/img/gallery/8.jpg";
import insta_9 from "@assets/img/gallery/9.jpg";

// instagram data
const instagram_data = [
  { id: 1, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_1 },
  { id: 2, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_2 },
  { id: 3, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_3 },
  { id: 4, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_4 },
  { id: 5, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_5 },
  { id: 6, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_6 },
  { id: 7, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_7 },
  { id: 8, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_8 },
  { id: 9, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_9 },

];

// slider setting 
const slider_setting = {
  slidesPerView: 5,
  spaceBetween: 25,
  pagination: {
    el: ".tp-category-slider-dot-4",
    clickable: true,
  },
  scrollbar: {
    el: '.tp-category-swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    '1400': { slidesPerView: 5 },
    '1200': { slidesPerView: 4 },
    '992': { slidesPerView: 3 },
    '768': { slidesPerView: 2.5 }, // عرض صورتين ونصف على الشاشات المتوسطة
    '576': { slidesPerView: 2.5 }, // عرض صورتين ونصف على الشاشات الصغيرة
    '0': { slidesPerView: 2.5, spaceBetween: 10, slidesPerGroup: 2 },
  },
};

const PopularProducts = () => {
  return (
    <section className="tp-category-area pt-10 pb-0 tp-category-plr-85" style={{ backgroundColor: `#EFF1F5` }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-title-wrapper-4 mb-10 text-center">
              <span className="tp-section-title-pre-4">Friseur Goldene Locke.</span>
              <h3 className="tp-section-title-4"> Unsere Frisuren</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-category-slider-4">
              <Swiper {...slider_setting} modules={[Scrollbar, Pagination]} className="tp-category-slider-active-4 swiper-container mb-20">
                {instagram_data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="tp-instagram-item-2">
                      <Image src={item.img} alt="instagram img" style={{ width: '100%', height: '100%' }} />
                      <div className="tp-instagram-icon-2">
                        <a href={item.link} target="_blank" className="popup-image">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="tp-category-swiper-scrollbar tp-swiper-scrollbar h-0 w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
