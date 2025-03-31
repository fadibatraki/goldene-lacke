import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightSmTwo } from '@/svg';
// internal
import featured_1 from '@assets/img/product-marco/1.png'; 
import featured_2 from '@assets/img/product/featured/featured-2.png';
import featured_3 from '@assets/img/product/featured/featured-3.png';
import featured_4 from '@assets/img/product/featured/featured-3.png';
import featured_5 from '@assets/img/product/featured/featured-3.png';
import featured_6 from '@assets/img/product/featured/featured-3.png';
import featured_7 from '@assets/img/product/featured/featured-3.png';
import featured_8 from '@assets/img/product/featured/featured-3.png';
import featured_9 from '@assets/img/product/featured/featured-3.png';
import featured_10 from '@assets/img/product/featured/featured-3.png';




// featured data 
const featured_data = [
  {
    id: 1,
    img: featured_1,
    title: <>Matte Liquid <br /> Lipstick & Lip Liner</>,
 
  },
  {
    id: 2,
    img: featured_2,
    title: <>Crushed Liquid <br /> Lip  - Cherry Crush</>,
    
  },
  {
    id: 3,
    img: featured_3,
    title: <>Mega Waterproof <br /> Concealer  - 125 Bisque</>,
  
  },
  {
    id: 4,
    img: featured_4,
    title: <>Mega Waterproof <br /> Concealer  - 125 Bisque</>,
   
  },
  {
    id: 5,
    img: featured_5,
    title: <>Matte Liquid <br /> Lipstick & Lip Liner</>,
   
  },
  {
    id: 6,
    img: featured_6,
    title: <>Crushed Liquid <br /> Lip  - Cherry Crush</>,
  
  },
  {
    id: 7,
    img: featured_7,
    title: <>Mega Waterproof <br /> Concealer  - 125 Bisque</>,
    
  },
  {
    id: 8,
    img: featured_8,
    title: <>Mega Waterproof <br /> Concealer  - 125 Bisque</>,

  },
  {
    id: 9,
    img: featured_9,
    title: <>Mega Waterproof <br /> Concealer  - 125 Bisque</>,
    
  },
  {
    id: 10,
    img: featured_10,
    title: <>Mega Waterproof <br /> Concealer  - 125 Bisque</>,
    
  },
  
  
]

const BeautyFeatured = () => {
  return (
    <>
      <section className="tp-product-item-3 mb-50 tp-product-style-primary pt-70 pb-150">
        <div className="container">
          <div className="row gx-0">
            {featured_data.map(item => (
              <div key={item.id} className="col-lg-3 col-md-6">
                <div className="tp-featured-item-3 text-center">
                  <div className="tp-featured-thumb-3  align-items-end justify-content-center">
                    <Image src={item.img} alt="featured image"  width={200} height={200}/>
                  </div>
                  <div className="tp-featured-content-3">
                    <h3 className="tp-featured-title-3">
                      <Link href="/shop">{item.title}</Link>
                    </h3>
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










export default BeautyFeatured;