import React from "react";

const ContactBreadcrumb = () => {
  return (
    <section className="breadcrumb__area include-bg text-center pt-30 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">Bleiben Sie mit uns in Kontakt</h3>
              <div className="breadcrumb__list">
                <span>
                  <a href="/">Home</a>
                </span>
                <span>Kontakt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBreadcrumb;
