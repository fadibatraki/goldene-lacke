import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import { CloseTwo } from '@/svg';
import logo from '@assets/img/logo/logo.svg';
import contact_img from '@assets/img/icon/contact.png';
import language_img from '@assets/img/icon/language-flag.png';
import MobileCategory from '@/layout/headers/header-com/mobile-category';
import MobileMenus from './mobile-menus';


import insta_1 from "@assets/img/gallery/1.jpg";
import insta_2 from "@assets/img/gallery/2.jpg";
import insta_3 from "@assets/img/gallery/3.jpg";
import insta_4 from "@assets/img/gallery/4.jpg";
import insta_5 from "@assets/img/gallery/5.jpg";
import insta_6 from "@assets/img/gallery/6.jpg";
import insta_7 from "@assets/img/gallery/7.jpg";
import insta_8 from "@assets/img/gallery/8.jpg";
import insta_9 from "@assets/img/gallery/9.jpg";
import insta_10 from "@assets/img/gallery/10.jpg";
import insta_11 from "@assets/img/gallery/11.jpg";
import insta_12 from "@assets/img/gallery/12.jpg";
import insta_13 from "@assets/img/gallery/13.jpg";
import insta_14 from "@assets/img/gallery/14.jpg";


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
  { id: 10, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_10 },
  { id: 11, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_11 },
  { id: 12, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_12 },
  { id: 13, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_13 },
  { id: 14, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_14 },

];


const OffCanvas = ({ isOffCanvasOpen, setIsCanvasOpen,categoryType = "electronics" }) => {
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const [isCurrencyActive, setIsCurrencyActive] = useState(false);
  const [isLanguageActive, setIsLanguageActive] = useState(false);

  // handle language active
  const handleLanguageActive = () => {
    setIsLanguageActive(!isLanguageActive)
    setIsCurrencyActive(false)
  }
  // handle Currency active
  const handleCurrencyActive = () => {
    setIsCurrencyActive(!isCurrencyActive)
    setIsLanguageActive(false)
  }
  return (
    <>
      <div className={`offcanvas__area offcanvas__radius ${isOffCanvasOpen ? "offcanvas-opened" : ""}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button onClick={() => setIsCanvasOpen(false)} className="offcanvas__close-btn offcanvas-close-btn">
              <CloseTwo />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-0 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} alt="logo"   width={155}   // Set your desired width
    height={80}  />
                </Link>
              </div>
            </div>
            
            {/* <div className="tp-main-menu-mobile fix d-lg-none mb-0">
              <MobileMenus />
            </div> */}

               <section id="InstagramAreaThree" className="tp-instagram-area tp-instagram-style-3 pb-2 pt-0">
                      <div className="container-fluid pl-20 pr-20 ">
                      <div className="offcanvas__category pb-40">
             
              <div className="tp-category-mobile-menu">
                <nav className={`tp-category-menu-content ${isCategoryActive ? "active" : ""}`}>
                  <MobileCategory categoryType={categoryType} isCategoryActive={isCategoryActive} />
                </nav>
              </div>
            </div>
            <div className="tp-main-menu-mobile fix d-lg-none mb-10">
              <MobileMenus />
            </div>
                        <h3 className="justify-content-center text-center">Unsere Frisuren</h3>
                        <div className="row row-cols-lg-6 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0 ">
                          {instagram_data.map((item) => (
                            <div className="col-6" key={item.id}>
                              <div className="tp-instagram-item-2">
                                <Image src={item.img} alt="instagram img" style={{width:'100%',height:'100%'}} />
                                <div className="tp-instagram-icon-2">
                                  <a href={item.link} target="_blank" className="popup-image">
                                    <i className="fa-brands fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                    
                    
          
          </div>
          
        </div>
      </div>
      {/* body overlay start */}
      <div onClick={() => setIsCanvasOpen(false)} className={`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`}></div>
      {/* body overlay end */}
    </>
  );
};

export default OffCanvas;