import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import Image from "next/image";

// internal
import insta_15 from "@assets/img/gallery/15.jpg";
import insta_16 from "@assets/img/gallery/16.jpg";
import insta_17 from "@assets/img/gallery/29.jpg";
import insta_18 from "@assets/img/gallery/18.jpg";
import insta_19 from "@assets/img/gallery/19.jpg";
import insta_20 from "@assets/img/gallery/20.jpg";
import insta_21 from "@assets/img/gallery/17.jpg";
import insta_22 from "@assets/img/gallery/22.jpg";
import insta_23 from "@assets/img/gallery/23.jpg";
import insta_24 from "@assets/img/gallery/24.jpg";
import insta_25 from "@assets/img/gallery/25.jpg";
import insta_26 from "@assets/img/gallery/26.jpg";
import insta_27 from "@assets/img/gallery/27.jpg";
import insta_28 from "@assets/img/gallery/28.jpg";
import insta_29 from "@assets/img/gallery/21.jpg";

// instagram data
const instagram_data = [
  { id: 15, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_15},
  { id: 16, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_16 },
  { id: 17, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_17 },
  { id: 18, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_18},
  { id: 19, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_19},
  { id: 20, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_20 },
  { id: 21, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_21 },
  { id: 22, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_22 },
  { id: 23, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_23 },
  { id: 24, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_24 },
  { id: 25, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_25 },
  { id: 26, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_26 },
  { id: 27, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_27 },
  { id: 28, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_28 },
  { id: 29, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_29 },
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
    <section className="tp-category-area pt-20 pb-0 tp-category-plr-85" style={{ backgroundColor: `#EFF1F5` }}>
      <div className="container-fluid">
       
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
              {/* <div className="tp-category-swiper-scrollbar tp-swiper-scrollbar h-24"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
