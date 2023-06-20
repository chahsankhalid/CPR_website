import React, { useEffect } from "react";
import Owldemo1 from "./landingSlider";
import Navcomponent from "./navbar";
import Footer from "./footer";
import About from "./about";
import Servicesnewtest from "./servicenewtest";
import { Aboutmore } from "./aboutmore";
import AllProjects from "./allproects";
import { Testimonials } from "./Testimonials";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Careers from "./careers";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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

    gsap.set("section.footer-container", { yPercent: -70 });

    const uncover = gsap.timeline({ paused: true });

    uncover.to("section.footer-container", { yPercent: 0, ease: "none" });

    ScrollTrigger.create({
      trigger: ".testimonials, #mainblogs, #blogDetails",
      start: "top top",
      end: "+=100%",
      animation: uncover,
      scrub: true,
    });
  }, []);

  return (
    <>
      <a id="back-to-top" href="#" className="back-to-top" role="button">
        <p className="scrollbtnp">Up</p>
      </a>
      <div className="smooth-wrapper" id="smooth-wrapper">
        <div id="smooth-content">
          <Navcomponent />
          <Owldemo1 />
          <Servicesnewtest />
          <About />
          <Aboutmore />
          <AllProjects />
          {/* <Careers /> */}
          {/* <Ourteam /> */}
          {/* <Blogs /> */}
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
