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
import ContactBreadcrumb from "@/components/breadcrumb/contact-breadcrumb";
import ContactArea from "@/components/contact/contact-area";
import ContactMap from "@/components/contact/contact-map";

const HomeThree = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Goldene Locke" />
      <HeaderThree/>
      <BeautyBanner/>
      {/* <BeautyCategory/> */}
      
      <BlogPostboxArea/>
      
      <TrendingSpecialPrd/>
      {/* <InstagramAreaThree/>  */}
      <ContactBreadcrumb />
      <ContactArea/>
      <ContactMap/>
      
    </Wrapper>
  );
};

export default HomeThree;