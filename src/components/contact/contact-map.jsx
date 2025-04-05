import React from 'react';

const ContactMap = () => {
  return (
    <>
      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper">
                <div className="tp-map-hotspot">
                  <span className="tp-hotspot tp-pulse-border">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="6" fill="#821F40" />
                    </svg>
                  </span>
                </div>
                <div className="tp-map-iframe">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.796559978547!2d11.539528975917467!3d48.133446551449325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd8abf30a7f81%3A0x6a816e8cbc4b7893!2sHeimeranstra%C3%9Fe%2035%2C%2080339%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2snl!4v1743374930468!5m2!1sen!2snl"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper">
                <div className="tp-map-hotspot">
                  <span className="tp-hotspot tp-pulse-border">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="6" fill="#821F40" />
                    </svg>
                  </span>
                </div>
                <div className="tp-map-iframe">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.0503206977073!2d11.59669467591719!3d48.12855295179006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf81c03a5789%3A0x1a852724034ec1a5!2sWei%C3%9Fenburger%20Str.%2029%2C%2081667%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2snl!4v1743374701149!5m2!1sen!2snl"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;