import React from 'react';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import HeaderThree from '@/layout/headers/header-3';
import HeaderTwo from "@/layout/headers/header-2";
import BeautyCategory from '@/components/categories/beauty-category';
import TrendingSpecialPrd from '@/components/products/beauty/trending-special-prd';
import InstagramAreaThree from '@/components/instagram/instagram-area-3';
import Footer from '@/layout/footers/footer';
import BlogPostboxArea from "@/components/blog/blog-postox/blog-postbox-area";
import PopularProducts from '@/components/products/jewelry/popular-products';
import PopularProducts1 from '@/components/products/jewelry/popular-products1';
import PopularProducts2 from '@/components/products/jewelry/popular-products2';


const HomeThree = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Three" />
      <HeaderTwo/>

     
      <PopularProducts/>
      <PopularProducts1/>
      <PopularProducts2/>
   
    
    
      {/* <Footer style_3={true} /> */}
    </Wrapper>
  );
};

export default HomeThree;