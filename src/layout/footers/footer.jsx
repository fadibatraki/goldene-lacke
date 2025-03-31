import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@assets/img/logo/logo.svg';
import pay from '@assets/img/footer/footer-pay.png';
import social_data from '@/data/social-data';
import { Email, Location } from '@/svg';

const Footer = ({ style_2 = false, style_3 = false,primary_style=false }) => {
  return (
    <footer>
      <div id="Contact-Us" className={`tp-footer-area ${primary_style?'tp-footer-style-2 tp-footer-style-primary tp-footer-style-6':''} ${style_2 ?'tp-footer-style-2':style_3 ? 'tp-footer-style-2 tp-footer-style-3': ''}`}
        data-bg-color={`${style_2 ? 'footer-bg-white' : 'footer-bg-grey'}`}>
        <div className="tp-footer-top pt-95 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-1 mb-50">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <p className="tp-footer-desc">"Willkommen bei Friseur goldene locke ! Wir stehen für exzellente Handwerkskunst, moderne Haarschnitte und individuellen Stil. Unser erfahrenes Team sorgt mit Präzision und Leidenschaft dafür, dass jeder Kunde unseren Salon mit einem perfekten Look verlässt. Bei uns genießen Sie nicht nur professionelle Haarpflege, sondern auch eine entspannte Atmosphäre und einen erstklassigen Service. Besuchen Sie uns und erleben Sie, wie wir Ihre Schönheit auf das nächste Level bringen</p>
                    <div className="tp-footer-social">
                      {/* {social_data.map(s => <a href={s.link} key={s.id} target="_blank">
                        <i className={s.icon}></i>
                      </a>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
             
              
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-4 mb-50">
                  <h4 className="tp-footer-widget-title">Unser erstes Geschäft</h4>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-talk mb-20">
                      <span>Got Questions? Call us</span>
                      <h4><a href="tel:+4967015001856">089 15001856</a></h4>

                    </div>
                    <div className="tp-footer-contact">
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Email />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                        <p><a href="mailto:Friseur.goldenelocke@gmail.com">Friseur.goldenelocke@gmail.com</a></p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Location />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>Heimeran str 35  <br /> 80339 München </p>
                        </div>
                        
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                       
                        <div className="tp-footer-contact-content">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.796559978547!2d11.539528975917467!3d48.133446551449325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd8abf30a7f81%3A0x6a816e8cbc4b7893!2sHeimeranstra%C3%9Fe%2035%2C%2080339%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2snl!4v1743374930468!5m2!1sen!2snl"  ></iframe>  </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-4 mb-50">
                  <h4 className="tp-footer-widget-title">Unser zweites Geschäft</h4>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-talk mb-20">
                      <span>Got Questions? Call us</span>
                      <h4><a href="tel:+498954356057">089 54356057</a></h4>

                    </div>
                    <div className="tp-footer-contact">
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Email />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p><a href="mailto:Friseur.goldenelocke@gmail.com">Friseur.goldenelocke@gmail.com</a></p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Location />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>Weißenburger str 29  <br /> 81667 München  </p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                       
                        <div className="tp-footer-contact-content">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.0503206977073!2d11.59669467591719!3d48.12855295179006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf81c03a5789%3A0x1a852724034ec1a5!2sWei%C3%9Fenburger%20Str.%2029%2C%2081667%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2snl!4v1743374701149!5m2!1sen!2snl"  ></iframe>  </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
        {/* <div className="tp-footer-bottom">
          <div className="container">
            <div className="tp-footer-bottom-wrapper">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="tp-footer-copyright">
                    <p>{new Date().getFullYear()} Created By Fadi Batraki
                  
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;