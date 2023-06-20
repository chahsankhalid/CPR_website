import React, { useEffect } from "react";
import MouseFollower from "mouse-follower";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);
let owl_carousel = require("owl.carousel");

window.fn = owl_carousel;
const Owldemo1 = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#scrollsection",
      start: "top top",
      // end: 'top center',
      endTrigger: "#scrollsection",
      markers: false,
      scrub: 1,
      onEnter: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
      },
      onLeave: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#000000" });
      },
      onEnterBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
      },
      onLeaveBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
      },
    });
  }, []);
  return (
    <>
      <section id="scrollsection" className="carouselsection">
        <div className="unorthodox">
          <h1 className="unorthotext1 unorthotexttest">
            <span className="landedcontent2">
            PAKISTAN'S TOP ADVERTISING & PR AGENCY
            </span>
          </h1>
          <h1 className="unorthotext1 unorthotexttraform wetranform">
            <span className="landedcontent1">
            Strategically Transforming Your Ideas Into Powerful Brands!
            </span>{" "}
            <img src={"./assets/images/turnicon.png"} alt="icon" />{" "}
          </h1>
        </div>
        <div className="landinganim">
          <video autoPlay loop muted playsInline className="back-video ">
            <source
              src={"./assets/videos/Landingvideo-1.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="about-para">
          <b>Constantine's Marketing Magic Will Make Your Business Shine!</b>
        </div>
        <div className="about-para pt-2">
         Are you
          tired of the same old boring marketing agencies promising the world
          and delivering mediocre results?<br/> Not anymore! At Constantine, we know
          how to make your business a GRAND SUCCESS!
        </div>
        <div className="stamp">
          <img
            id="stampimage"
            className="stampimage"
            src={"./assets/images/servicetstamo.png"}
            alt="stamp"
          />
        </div>
        {/* <div className='container-fluid'>
                    <OwlCarousel items={1}
                        className="owl-theme"
                        nav={true}
                        dots={false}
                        loop
                        autoplay={false}
                        navText={[
                            "<span class='arrow prev'></span>",
                            "<span class='arrow next'></span>"
                        ]}
                    >
                        <div className='videodiv'>
                            <video autoPlay loop muted playsInline className="back-video">
                                <source src={'./assets/videos/Eighteen Animation-1.mp4'} type="video/mp4" />
                            </video>
                        </div>
                        <div><img className="img" src={'./assets/images/chery-2.jpg'} /></div>
                        <div><img className="img" src={'./assets/images/USAID.jpg'} /></div>
                        <div><img className="img" src={'./assets/images/Body Shop.png'} /></div>
                        <div className='videodiv'>
                            <video autoPlay loop muted playsInline className="back-video">
                                <source src={'./assets/videos/bigo.mp4'} type="video/mp4" />
                            </video>
                        </div>

                        <div><img className="img" src={'./assets/images/British-Council (1).jpg'} /></div>
                        <div><img className="img" src={'./assets/images/moreno.png'} /></div>
                        <div className='videodiv'>
                            <video autoPlay loop muted playsInline className="back-video">
                                <source src={'./assets/videos/slaughter.mp4'} type="video/mp4" />
                            </video>
                        </div>
                        <div><img className="img" src={'./assets/images/PUBG.jpg'} /></div>
                    </OwlCarousel>
                </div> */}
      </section>
    </>
  );
};
export default Owldemo1;
