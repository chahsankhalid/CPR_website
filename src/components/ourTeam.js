import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Ourteam = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <>
      <section
        className="parentParalax"
        // data-aos="fade-up"
        // data-aos-duration="3000"
      >
        <div className="aboutus_2ndheading aboutus_2ndheadingsecond">
          <h1>Our Ingenious Team</h1>
          <p>
            Team Constantine PR is a powerhouse of innovation and expertise,
            crafting unique and captivating brand identities and delivering
            top-notch creative, digital marketing, and event management
            solutions to top brands.
          </p>
        </div>
        <div className="parentIneerParalax">
          <MouseParallaxContainer className="parallax1 parallax" resetOnLeave>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  effect="blur"
                  src={"./assets/images/sirnajaf.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Najaf Akhtar</h3>
                  <p>CEO</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  effect="blur"
                  src={"./assets/images/mam.webp"}
                  className="bitmojis"
                  alt=""
                />
                <div className="memberDetail">
                  <h3>Aiesha Butt</h3>
                  <p>Co-founder</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  effect="blur"
                  src={"./assets/images/saima.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Saima</h3>
                  <p>Director Comm & Marketing</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  effect="blur"
                  src={"./assets/images/saawal.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Sheikh Sajawal</h3>
                  <p>Director Digital Marketing</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <MouseParallaxContainer className="parallax" resetOnLeave>
            {/* <MouseParallaxChild className="bgParalax" factorX={0.03} factorY={0.1}
                            updateStyles={{
                                background:
                                    "url(https://images.unsplash.com/photo-1611502867268-9193c5c45f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
                                backgroundPositionY: "50%",
                                transform: "scale(1.2)",
                                position: "absolute",
                                filter: "blur(4px) brightness(50%)",
                                backgroundSize: "auto",
                                backgroundRepeat: "repeat",
                                width: "100%",
                                height: "100%",
                                backfaceVisibility: "hidden",
                               
                            }}
                        /> */}
            {/* <MouseParallaxChild className="paralaxChild" factorX={0.05} factorY={0.05}>
                            <div className="imgbox">
                                <LazyLoadImage effect="blur" src={'./assets/images/hr.webp'} className="bitmojis" />
                                <div className="memberDetail">
                                    <h3>M. Taimoor</h3>
                                    <p>Head of HR</p>
                                </div>
                                <div className="overlay"></div>
                            </div>
                        </MouseParallaxChild> */}
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  effect="blur"
                  src={"./assets/images/oan.png"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Oan Abbas</h3>
                  <p>Lead Content Writer</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            {/* <MouseParallaxChild className="paralaxChild" factorX={0.05} factorY={0.05}>
                            <div className="imgbox">
                                <LazyLoadImage effect="blur" src={'./assets/images/rameen.png'} className="bitmojis" />
                                <div className="memberDetail">
                                    <h3>Rameen</h3>
                                    <p>Sr. Social Media Manager</p>
                                </div>
                                <div className="overlay"></div>
                            </div>
                        </MouseParallaxChild> */}
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.07}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  effect="blur"
                  src={"./assets/images/namrah.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Namrah Tariq</h3>
                  <p>Associate Creative Director</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/uzair.png"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Uzair Ellahi</h3>
                  <p>Creative Manager</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.09}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  effect="blur"
                  src={"./assets/images/hamza.png"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Hamza Amin</h3>
                  <p>Non-linear Editor(NLE) </p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.07}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/ahsan.png"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Ahsan Khalid</h3>
                  <p>Web Developer</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/john.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Shakil John</h3>
                  <p>Associate Creative Director</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>

            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/insa.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Insa Azmat</h3>
                  <p>Sr. Graphic Designer</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/faheem.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Faheem Abbas</h3>
                  <p>AM Accounts & Finance</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/anas.png"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Muhammad Anas</h3>
                  <p>Graphic Designer</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/umer.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Umer Sharif</h3>
                  <p>Video Editor & 2D Animator</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/naveed.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Naveed Khan</h3>
                  <p>Director Operations (Karachi Region)</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            {/* <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/zara.png"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Zahra Kowkab</h3>
                  <p>Sr. Social Media Manager</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild> */}

            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/shoaib.png"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Shoaib Hussain</h3>
                  <p>Visual Communication Designer</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>

            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/misbah.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Misbah Jabeen</h3>
                  <p>HR & BD</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/adnan.png"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Adnan Ali</h3>
                  <p>CGI Artist & IT Support</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/rafay.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Rafay Zaman</h3>
                  <p>Business Development Associate</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/Abdullah-Khan.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Abdullah Khan</h3>
                  <p>Graphic Artist</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="paralaxChild"
              factorX={0.05}
              factorY={0.05}
            >
              <div className="imgbox">
                <LazyLoadImage
                  src={"./assets/images/Aimen.webp"}
                  className="bitmojis"
                />
                <div className="memberDetail">
                  <h3>Aimen Fatah</h3>
                  <p>Communications Manager</p>
                </div>
                <div className="overlay"></div>
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </section>
    </>
  );
};
export default Ourteam;
