import React from "react";
import Image from "next/image";
// internal
import insta_1 from "@assets/img/tasfifat/30.jpg";
import insta_2 from "@assets/img/tasfifat/9.jpg";
import insta_3 from "@assets/img/tasfifat/13.jpg";
import insta_4 from "@assets/img/tasfifat/15.jpg";
import insta_5 from "@assets/img/tasfifat/28.jpg";
import insta_6 from "@assets/img/tasfifat/19.jpg";

// instagram data
const instagram_data = [
  { id: 1, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_1 },
  { id: 2, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_2 },
  { id: 3, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_3 },
  { id: 4, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_4 },
  { id: 5, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_5 },
  { id: 6, link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj", img: insta_6 },
];

const InstagramAreaThree = () => {
  return (
    <>
      <section id="InstagramAreaThree" className="tp-instagram-area tp-instagram-style-3 pb-40 pt-40">
        <div className="container-fluid pl-20 pr-20 ">
          <div className="row row-cols-lg-6 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0 ">
            {instagram_data.map((item) => (
              <div className="col" key={item.id}>
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
    </>
  );
};

export default InstagramAreaThree;