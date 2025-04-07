import React from 'react';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import HeaderThree from '@/layout/headers/header-3';
import HeaderTwo from "@/layout/headers/header-2";
import BeautyCategory from '@/components/categories/beauty-category';
import TrendingSpecialPrd from '@/components/products/beauty/trending-special-prd';
import InstagramAreaThre from '@/components/instagram/instagram-area-33';
import Footer from '@/layout/footers/footer';
import BlogPostboxArea from "@/components/blog/blog-postox/blog-postbox-area";
import PopularProducts from '@/components/products/jewelry/popular-products';
import PopularProducts1 from '@/components/products/jewelry/popular-products1';
import PopularProducts2 from '@/components/products/jewelry/popular-products2';
import ContactArea from "@/components/contact/contact-area";

const HomeThree = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Three" />
      <HeaderTwo/>

    <  InstagramAreaThre/>
    
      {/* <Footer style_3={true} /> */}
      <ContactArea/>
    </Wrapper>
  );
};

export default HomeThree;