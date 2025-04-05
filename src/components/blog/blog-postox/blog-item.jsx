import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import PopupVideo from '@/components/common/popup-video';
import blogImage from '@assets/img/about/marcos.jpg';
const BlogItem = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const article = {
    id: 1,
    title: "Ein guter Friseur kümmert sich nicht nur um das Aussehen, sondern auch um das Wohlbefinden der Kunden!“",
    desc: "Ich bin Marco , Friseurmeister aus Leidenschaft. Mein Handwerk habe ich bei dem Catwalk  gelernt, Weiterbildungen im Be Blond Salon gemacht und mich anschließend auf Farbe und Haarverlängerung  und Hairstyling spezialisiert. 2016 habe ich mit meiner Familie den erfolgreichen Salon Goldene Locke  Hair & Nails in der Münchner Innenstadt gegründet. 2023 eröffnete dann mein neuer Salon, in Haidhausen welchem ich mich auf Farbe, besonders Blond spezialisiert habe. Besonders wichtig ist mir Eure Zufriedenheit. Diese garantiere ich durch eine individuelle Haar und Typ Beratung. Ihr sollt meinen Salon mit einem neuen strahlenden Erscheinungsbild verlassen und die Zeit bei uns als Kurzurlaub erleben.. Da ich persönlichen Kundenkontakt sehr schätze   L‘Oréal/Friseur Meister, Master of Color, Blond Expert.",
    img: blogImage ,
    date: "March 26, 2016",
    author: "Macro",
    comments: 867
  };

  return (
    <>
      <article className="tp-postbox-item format-image mb-50 transition-3">
        <div className="tp-postbox-thumb w-img">
          
            <Image src={article.img} alt="blog img" width={500} height={500} />
          
        </div>

        <div className="tp-postbox-content">
          <div className="tp-postbox-meta">
            <span>
              <i className="far fa-calendar-check"></i> {article.date}
            </span>
            <span>
              <a href="#">
                <i className="far fa-user"></i> {article.author}
              </a>
            </span>
            <span>
              <a href="#">
                <i className="fal fa-comments"></i> {article.comments} Stammkunden
              </a>
            </span>
          </div>
          <h3 className="tp-postbox-title">
           
              {article.title}
          
          </h3>
          <div className="tp-postbox-text">
            <p>
              {article.desc} 
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogItem;