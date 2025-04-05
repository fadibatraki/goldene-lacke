import React from "react";
import Image from "next/image";
// internal
import ContactForm from "../forms/contact-form";
import contact_icon_1 from "@assets/img/contact/contact-icon-1.png";
import contact_icon_2 from "@assets/img/contact/contact-icon-2.png";
import contact_icon_3 from "@assets/img/contact/contact-icon-3.png";

const ContactArea = () => {
  return (
    <section className="tp-contact-area pb-100">
      <div className="container">
        <div className="tp-contact-inner">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-wrapper">
                <h3 className="tp-contact-title">Kontakt</h3>
                <div className="tp-contact-form">
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-content">
                      <p>Inhaltlich verantwortlich : Majd Hanashe</p>
                      <p>Anschrift : Heimeran str 35 80339 München</p>
                      <p>Anschrift : Weißenburger str 29 81667 München</p>
                      <p>Rechtsform : Einzelunternehmen</p>
                      <p>Steuernummer : 147/174/51598</p>
                      <p>
    <a href="tel:+4967015001856">Telephon : 089 15001856</a>
  </p>
  <p>
    <a href="tel:+4967054356057">Telephon : 089 54356057</a>
  </p>

  <p>Internet : www.friseur-goldenelocke@gmail.de</p>
  <p>
  <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
    Web-Developer : Fadi Batraki
    </a>
    </p>
                    </div>
                  </div>
                  <p className="ajax-response"></p>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-info-wrapper">

                {/* First Row: Addresses */}
                <div className="d-flex gap-4 flex-wrap mb-4">
                  {/* Address 1 */}
                  <div className="tp-contact-info-item" style={{ flex: '1 1 45%' }}>
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_2} alt="contact-icon" />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p>
                        <a
                          href="https://www.google.com/maps?q=Heimeranstr+35+80339+München"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Heimeran str 35 <br /> 80339 München
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Address 2 */}
                  <div className="tp-contact-info-item" style={{ flex: '1 1 45%' }}>
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_2} alt="contact-icon" />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p>
                        <a
                          href="https://www.google.com/maps?q=Weißenburger+str+29+81667+München"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Weißenburger str 29 <br /> 81667 München
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Row: Contact & Social */}
                <div className="d-flex gap-4 flex-wrap">
                  {/* Contact Info */}
                  <div className="tp-contact-info-item" style={{ flex: '1 1 45%' }}>
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_1} alt="contact-icon" />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
  <p>
    <a href="mailto:Friseur.goldenelocke@gmail.com">
      Friseur.goldenelocke@gmail.com
    </a>
  </p>
  <p>
    <a href="tel:+4967015001856">Telephon : 089 15001856</a>
  </p>
  <p>
    <a href="tel:+4967054356057">Telephon : 089 54356057</a>
  </p>
</div>

                  </div>

                  {/* Social Media */}
                  <div className="tp-contact-info-item" style={{ flex: '1 1 45%' }}>
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_3} alt="contact-icon" />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <h4 className="tp-contact-social-title mb-2">
                      Finden Sie uns in den sozialen Medien
                      </h4>
                      <div className="tp-contact-social-icon">
                        <a href="https://www.instagram.com/friseur_goldene_locke?igsh=M3p2NDEyYjhqbzJj"><i className="fa-brands fa-instagram"></i></a>
                    
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
