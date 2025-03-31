import React from "react";
import Link from "next/link";
// internal
import ErrorMsg from "../common/error-msg";
import { ArrowRightSm, ArrowRightSmTwo } from "@/svg";
// import { HomeThreeCategoryLoader } from "../loader"]; // No need for the loader since we're using static data

// Set up the image paths for the categories (four images now)
const categoryImages = [
  '/assets/img/Frisuren/1.jpg',
  '/assets/img/Frisuren/2.jpg',
  '/assets/img/Frisuren/3.jpg',
  '/assets/img/Frisuren/5.jpg'
];

// Static category data
const categories = [
  {
    _id: "1",
    parent: "Hairstyles 1",
    products: [
      { id: "p1", name: "Product 1" },
      { id: "p2", name: "Product 2" },
    ],
  },
  {
    _id: "2",
    parent: "Hairstyles 2",
    products: [
      { id: "p3", name: "Product 3" },
      { id: "p4", name: "Product 4" },
    ],
  },
  {
    _id: "3",
    parent: "Hairstyles 3",
    products: [
      { id: "p5", name: "Product 5" },
      { id: "p6", name: "Product 6" },
    ],
  },
  {
    _id: "4",
    parent: "Hairstyles 4",
    products: [
      { id: "p7", name: "Product 7" },
      { id: "p8", name: "Product 8" },
    ],
  },
];

const BeautyCategory = () => {
  // handle category route
  const handleCategoryRoute = (title) => {
    // Here we manually route with static data
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
  };

  // Render the categories
  const content = categories.map((item, index) => (
    <div key={item._id} className="col-lg-3 col-sm-6">
      <div className="tp-category-item-3 p-relative black-bg text-center z-index-1 fix mb-30">
        <div
          className="tp-category-thumb-3 include-bg"
          style={{ backgroundImage: `url(${categoryImages[index % categoryImages.length]})` }}
        ></div>
        <div className="tp-category-content-3 transition-3 pb-5">
          <h3 className="tp-category-title-3">
            <a
              className="cursor-pointer"
              onClick={() => handleCategoryRoute(item.parent)}
            >
              {item.parent}
            </a>
          </h3>
          <div className="tp-category-btn-3">
            <a
              onClick={() => handleCategoryRoute(item.parent)}
              className="cursor-pointer tp-link-btn tp-link-btn-2"
            >
              View Now
              <ArrowRightSm />
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section id="Frisuren" className="tp-category-area pt-95">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="tp-section-title-wrapper-3 mb-45">
                <span className="tp-section-title-pre-3">Unsere Frisuren</span>
                <h3 className="tp-section-title-3">Frisuren in unserem Salon</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="tp-category-more-3 text-md-end mb-55">
                <Link href="/shop" className="tp-btn">
                  Alle unsere Frisuren <ArrowRightSmTwo />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">{content}</div>
        </div>
      </section>
    </>
  );
};

export default BeautyCategory;
