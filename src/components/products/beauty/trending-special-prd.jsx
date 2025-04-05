import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper';
import Image from 'next/image';
// internal
import special_thumb from '@assets/img/tasfifat/16.jpg';
import { ArrowNextSm, ArrowPrevSm, PlusTwo } from '@/svg';
import ErrorMsg from '@/components/common/error-msg';

// Import images correctly
import productImg1 from '@assets/img/product-marco/1.png';
import productImg2 from '@assets/img/product-marco/2.png';
import productImg3 from '@assets/img/product-marco/3.png';
import productImg4 from '@assets/img/product-marco/4.png';
import productImg5 from '@assets/img/product-marco/5.png';
import productImg6 from '@assets/img/product-marco/6.png';
import productImg7 from '@assets/img/product-marco/7.png';
import productImg8 from '@assets/img/product-marco/8.png';
import productImg9 from '@assets/img/product-marco/9.png';
import productImg10 from '@assets/img/product-marco/10.png';
// Local product data (corrected structure)
const localProducts = [
  { _id: 1, title: "Face Cream", price: 25, img: productImg1, tags: ["Skincare", "Moisturizer"], status: "in-stock" },
  { _id: 2, title: "Lip Balm", price: 10, img: productImg2, tags: ["Lip Care"], status: "in-stock" },
  { _id: 3, title: "Serum", price: 30, img: productImg3, tags: ["Anti-Aging", "Skincare"], status: "in-stock" },
  { _id: 4, title: "Moisturizer", price: 20, img: productImg4, tags: ["Hydration", "Daily Care"], status: "out-of-stock" },
  { _id: 5, title: "Sunscreen", price: 18, img: productImg5, tags: ["SPF", "Protection"], status: "in-stock" },
  { _id: 6, title: "Sunscreen", price: 18, img: productImg6, tags: ["SPF", "Protection"], status: "in-stock" },
  { _id: 7, title: "Sunscreen", price: 18, img: productImg7, tags: ["SPF", "Protection"], status: "in-stock" },
  { _id: 8, title: "Sunscreen", price: 18, img: productImg8, tags: ["SPF", "Protection"], status: "in-stock" },
  { _id: 9, title: "Sunscreen", price: 18, img: productImg9, tags: ["SPF", "Protection"], status: "in-stock" },
  { _id: 10, title: "Sunscreen", price: 18, img: productImg10, tags: ["SPF", "Protection"], status: "in-stock" }
];

// slider setting 
const sliderSetting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  pagination: { el: ".tp-special-slider-dot", clickable: true },
  navigation: { nextEl: ".tp-special-slider-button-next", prevEl: ".tp-special-slider-button-prev" }
};

const TrendingSpecialPrd = () => {
  return (
    <section id="Products" className="tp-special-area fix">
      <div className="container">
        <div className="row gx-2">
          <div className="col-xl-5 col-md-6">
            <div className="tp-special-slider-thumb">
              <div className="tp-special-thumb">
                <Image src={special_thumb} alt="special-big img" priority />
                <div className="tp-special-hotspot-item tp-special-hotspot-1">
                  <span className="tp-hotspot tp-pulse-border "><PlusTwo /></span>
                  <div className="tp-special-hotspot-content">
                    <h3 className="tp-special-hotspot-title">loreal professionnel</h3>
                    
                  </div>
                </div>
                <div className="tp-special-hotspot-item tp-special-hotspot-2">
                  <span className="tp-hotspot tp-pulse-border "><PlusTwo /></span>
                  <div className="tp-special-hotspot-content">
                  <h3 className="tp-special-hotspot-title">Haarpflegeprodukt</h3>
             
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-6">
            <div className="tp-special-wrapper grey-bg-9 pt-85 pb-35">
              <div className="tp-section-title-wrapper-3 mb-40 text-center">
                <span className="tp-section-title-pre-3">Trends dieser Woche</span>
                <h3 className="tp-section-title-3">Spezialprodukte</h3>
              </div>
              <div className="tp-special-slider ">
                <div className="row gx-0 justify-content-center">
                  <div className="col-xl-5 col-lg-7 col-md-9 col-sm-7">
                    <div className="tp-special-slider-inner p-relative">
                      {localProducts.length === 0 ? (
                        <ErrorMsg msg="No Products found!" />
                      ) : (
                        <Swiper {...sliderSetting} modules={[Pagination, Navigation, EffectFade]} className="tp-special-slider-active swiper-container">
                          {localProducts.map((item) => (
                            <SwiperSlide key={item._id} className="tp-special-item grey-bg-9">
                              {/* Directly displaying product without ProductItem */}
                              <div className="tp-product-item-3 mb-50 text-center">
                                <div className="tp-product-thumb-3 mb-15 fix p-relative z-index-1 bg-white">
                                  <Image src={item.img} alt={item.title} width={282} height={320} />
                                 
                                </div>
                                <div className="tp-product-content-3">
                                  
                                  {/* <h3 className="tp-product-title-3">{item.title}</h3> */}
                                  
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      )}
                      {/* dot style */}
                      <div className="tp-swiper-dot tp-special-slider-dot d-sm-none text-center"></div>
                      <div className="tp-special-arrow d-none d-sm-block">
                        <button className="tp-special-slider-button-prev"><ArrowPrevSm /></button>
                        <button className="tp-special-slider-button-next"><ArrowNextSm /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSpecialPrd;
