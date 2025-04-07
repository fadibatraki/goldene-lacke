import React from "react";
import Image from "next/image";
// internal
import insta_1 from "@assets/img/team/1.jpg";
import insta_2 from "@assets/img/team/2.jpg";
import insta_3 from "@assets/img/team/3.jpg";
import insta_4 from "@assets/img/team/4.jpg";
import insta_5 from "@assets/img/team/5.jpg";
import insta_6 from "@assets/img/team/6.jpg";
import insta_7 from "@assets/img/team/7.jpg";

// instagram data
const instagram_data = [
  {
    id: 1,
    link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj",
    img: insta_1,
    title: "Inhaber / Friseurmeister",
  },
  {
    id: 2,
    link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj",
    img: insta_2,
    title: "Friseurmeistrin",
  },
  {
    id: 3,
    link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj",
    img: insta_3,
    title: "Stylistin",
  },
  {
    id: 4,
    link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj",
    img: insta_4,
    title: "Friseurmeistrin",
  },
  {
    id: 5,
    link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj",
    img: insta_5,
    title: "Stylistin",
  },
  {
    id: 6,
    link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj",
    img: insta_6,
    title: "Barber",
  },
  {
    id: 7,
    link: "https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj",
    img: insta_7,
    title: "Top Stylistin",
  },
];

const InstagramAreaThree = () => {
  return (
    <section
      id="InstagramAreaThree"
      className="tp-instagram-area tp-instagram-style-3 pb-40 pt-40"
    >
      <div className="container-fluid pl-20 pr-20">
        {/* Section Heading */}
        <div className="text-center mb-40">
          <h2 className="text-3xl font-bold text-gray-900">Unser Team</h2>
          <p className="text-gray-600 mt-2">Lernen Sie unser kreatives Team kennen</p>
        </div>

        {/* Image Grid */}
        <div className="row row-cols-lg-6 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
          {instagram_data.map((item) => (
            <div className="col" key={item.id}>
              <div className="tp-instagram-item-2 text-center">
                <Image
                  src={item.img}
                  alt="instagram img"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="tp-instagram-icon-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="popup-image"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <h6 className="mt-2 text-sm font-medium text-gray-800">
                  {item.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramAreaThree;
