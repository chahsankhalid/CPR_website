import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { motion as m } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./footer";
import Navdark from "./navDark";

const Privacypolicy = () => {
  const hidenav = () => {
    document.body.style.overflow = "visible";
    const check = document.querySelector(".offcanvas");
    check.style.opacity = 0;
    check.style.zIndex = -1;
  };
  useEffect(() => {
    var backtoTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        backtoTop.classList.add("active");
      } else {
        backtoTop.classList.remove("active");
      }
      backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
    });
    var stampImg = document.getElementById("stampimage");
    window.addEventListener("scroll", function () {
      stampImg.style.transform = "rotate(" + window.pageYOffset + "deg)";
    });
    AOS.init();
  }, []);
  return (
    <>
      <m.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a id="back-to-top" href="#" className="back-to-top" role="button">
          <p className="scrollbtnp">Up</p>
        </a>
        <div className="smooth-wrapper" id="smooth-wrapper">
          <div id="smooth-content">
            <section id="privacypolicy">
              <Navdark />
              <div className="container-fluid nopadding">
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Privacy Policy</h1>
                      <p>
                        At Constantine, we take the privacy of our clients and
                        those who
                        <br /> visit our website seriously. This Privacy Policy
                        outlines how we
                        <br /> collect, use, disclose, and protect your personal
                        information.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="animated-emojiodd">
                      <img
                        src={"./assets/images/privacyemoji3.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="animated-emojieven">
                      <img
                        src={"./assets/images/privacyemoji2.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Information</h1>
                      <h1>Collection and Use</h1>
                      <p>
                        We collect personal information only when you
                        voluntarily provide it to us.
                        <br />
                        <br />
                        This includes, but is not limited to: your name, email
                        address, phone number and/or any other information you
                        provide when you fill up a contract form, engage with
                        our website, or interact with our social media handles.
                        <br />
                        <br />
                        We use this information to communication with you and
                        ensure a seamless provision of our services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Information</h1>
                      <h1>Disclosure</h1>
                      <p>
                        We neither sell, nor rent your personal information to
                        third parties.
                        <br />
                        <br />
                        We may share your personal information with our partners
                        and/or service providers for the purpose of assistance
                        in providing our services to you.
                        <br />
                        <br />
                        We may also disclose your personal information if we are
                        required to do so by law, or if we believe that such
                        disclosure is necessary to protect our rights, property,
                        or safety, or the rights, property, or safety of others.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="animated-emojiodd">
                      <img
                        src={"./assets/images/privacyemoji3.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="animated-emojieven">
                      <img
                        src={"./assets/images/privacyemoji2.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Cookies</h1>
                      <p>
                        We use cookies on our website to enhance your browsing
                        experience and provide personalized content.
                        <br />
                        <br />
                        Cookies are small data files that are placed on your
                        device when you visit our website.
                        <br />
                        <br />
                        You can choose to disable cookies in your browser
                        settings, but this may affect your ability to use
                        certain features of our website.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Security</h1>
                      <p>
                        We take reasonable measures to protect your personal
                        information from unauthorized access, use, or disclosure
                        <br />
                        <br />
                        However, no method of transmission over the Internet or
                        electronic storage is a 100 percent secure.
                        <br />
                        <br />
                        Therefore, while we strive to use commercially
                        acceptable means to protect your personal information,
                        we cannot guarantee its absolute security.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="animated-emojiodd">
                      <img
                        src={"./assets/images/privacyemoji3.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="animated-emojieven">
                      <img
                        src={"./assets/images/privacyemoji2.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Changes to this</h1>
                      <h1>Privacy Policy</h1>
                      <p>
                        We reserve the right to modify this Privacy Policy at
                        any time.
                        <br />
                        <br />
                        We encourage you to review this Privacy Policy
                        periodically to stay informed about how we are
                        protecting your personal information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </section>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Privacypolicy;
