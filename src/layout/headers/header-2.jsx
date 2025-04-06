import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
// internal
import Menus from './header-com/menus';
import logo_white from '@assets/img/logo/logo-white.svg';
import logo_dark from '@assets/img/logo/logo.svg';
import useSticky from '@/hooks/use-sticky';
import useCartInfo from '@/hooks/use-cart-info';
import { openCartMini } from '@/redux/features/cartSlice';
import HeaderTopRight from './header-com/header-top-right';
import CartMiniSidebar from '@/components/common/cart-mini-sidebar';
import { CartTwo, Compare, Facebook, Menu, PhoneTwo, Wishlist, Search } from '@/svg';
import useSearchFormSubmit from '@/hooks/use-search-form-submit';
import OffCanvas from '@/components/common/off-canvas';

const HeaderTwo = ({ style_2 = false }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { setSearchText, handleSubmit, searchText } = useSearchFormSubmit();
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div className={`tp-header-area tp-header-style-${style_2 ? 'primary' : 'darkRed'} tp-header-height`}>
          

          <div id="header-sticky" className={`tp-header-bottom-2 tp-header-sticky ${sticky ? 'header-sticky' : ''}`}>
          <div className="tp-header-bottom-3 pl-35 pr-35">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="logo">
                    <Link href="/">
                      {/* <Image className="logo-light" src={logo_white} alt="logo" /> */}
                      <Image className="logo-dark" src={logo_dark} alt="logo" width={135} height={50} />
                    </Link>
                  </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                  <div className="main-menu menu-style-2 p-relative d-flex align-items-center justify-content-center">
                    <nav className="tp-main-menu-content">
                      <Menus />
                    </nav>
                  </div>
                </div>
                  <div className="col-xl-2 col-lg-2 col-6">
                                    <div className="tp-header-action d-flex align-items-center justify-content-end ml-50">
                                      <div className="tp-header-action-item d-none d-sm-block">
                                        
                                      </div>
                                      <div className="tp-header-action-item d-none d-sm-block">
                                     
                                      </div>
                                      <div className="tp-header-action-item d-none d-sm-block">
                                        
                                      </div>
                                      <div className="tp-header-action-item d-lg-none">
                                        <button onClick={() => setIsCanvasOpen(true)} type="button" className="tp-header-action-btn tp-offcanvas-open-btn">
                                          <Menu />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* cart mini sidebar start */}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsCanvasOpen={setIsCanvasOpen} categoryType="fashion" />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTwo;