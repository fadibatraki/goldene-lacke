import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import user from '@assets/img/users/user-11.jpg';
import signature from '@assets/img/blog/signature/signature.png';
import { Search } from '@/svg';
import blogData from '@/data/blog-data';

// latest post
const latest_post = blogData.slice(0,3)

const BlogSidebar = () => {
  return (
    <>
      <div className="tp-sidebar-wrapper tp-sidebar-ml--24">
        

        {/* about  */}
        <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title">About me</h3>
          <div className="tp-sidebar-widget-content">
            <div className="tp-sidebar-about">
              
              <div className="tp-sidebar-about-content">
                <h3 className="tp-sidebar-about-title">
                  <a href="#">Marco </a>
                </h3>
                <span className="tp-sidebar-about-designation">Friseurmeister aus Leidenschaft.</span>
                <p>Mein Handwerk habe ich bei dem Catwalk  gelernt, Weiterbildungen im Be Blond Salon gemacht und mich anschließend auf Farbe und Haarverlängerung  und Hairstyling spezialisiert.</p>
                <div className="tp-sidebar-about-signature">
                  <Image src={signature} alt="signature" />
                </div>

                <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title"></h3>
          <div className="tp-sidebar-widget-content tagcloud">
            <a href="#">Professionell</a>
            <a href="#">Präzise</a>
            <a href="#">Kundenorientiert</a>
            <a href="#">Modebewusst</a>
            <a href="#">Kreativ</a>
            <a href="#">Zuverlässig </a>
            <a href="#">Detailorientiert</a>
          </div>
        </div>







              </div>
            </div>
          </div>
        </div>
        {/* <!-- about end --> */}

        
        {/* <!-- tag cloud start --> */}
        
        {/* <!-- tag cloud end --> */}

      </div>
    </>
  );
};

export default BlogSidebar;