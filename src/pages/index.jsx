import React from 'react';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import HeaderThree from '@/layout/headers/header-3';
import BeautyBanner from '@/components/banner/beauty-banner';
import BeautyCategory from '@/components/categories/beauty-category';
import TrendingSpecialPrd from '@/components/products/beauty/trending-special-prd';
import InstagramAreaThree from '@/components/instagram/instagram-area-3';
import Footer from '@/layout/footers/footer';
import BlogPostboxArea from "@/components/blog/blog-postox/blog-postbox-area";


const HomeThree = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Three" />
      <HeaderThree/>
      <BeautyBanner/>
      <BeautyCategory/>
      
      <BlogPostboxArea/>
      
      <TrendingSpecialPrd/>
      <InstagramAreaThree/> 
      <Footer style_3={true} />
    </Wrapper>
  );
};

export default HomeThree;