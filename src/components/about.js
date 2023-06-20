import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Button from "react-bootstrap/Button";
import "aos/dist/aos.css";
import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#aboutus",
      start: "top top",
      // end: 'top center',
      // end: "bottom 99%",
      endTrigger: "#aboutmore",
      markers: false,
      scrub: 1,
      onEnter: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#D6FF6F" });
      },
      onLeave: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#000000" });
      },
      onEnterBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#D6FF6F" });
      },
      onLeaveBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#000000" });
      },
    });
    // },
    // "(min-width: 1700px)": function () {
    //     ScrollTrigger.create({
    //         trigger: '#aboutus',
    //         start: 'top top',
    //         // end: 'top center',
    //         // end: "bottom 99%",
    //         endTrigger: '#aboutus',
    //         markers: true,
    //         scrub: 1,
    //         onEnter: () => {
    //             gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
    //             gsap.to(".about-para", {
    //                 duration: 1,
    //                 opacity: 1
    //             });
    //         },
    //         onLeave: () => {
    //             gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
    //             gsap.to(".about-para", {
    //                 duration: 1,
    //                 opacity: 0
    //             });
    //         },
    //         onEnterBack: () => {
    //             gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
    //             gsap.to(".about-para", {
    //                 duration: 1,
    //                 opacity: 1,
    //             });
    //         },
    //         onLeaveBack: () => {
    //             gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
    //             gsap.to(".about-para", {
    //                 duration: 1,
    //                 opacity: 0
    //             });
    //         }
    //     })
    // }
    // })
  });

  return (
    <>
      <section id="aboutus">
        <div className="marquee-w">
          <div className="marquee">
            <span>
              BE PART OF THE ACTUAL <div className="commnity">COMMUNITY</div>{" "}
              NOT JUST THE AD <div className="commnity">COMMUNITY</div>
            </span>
          </div>
          <div className="marquee marquee2">
            <span>
              BE PART OF THE ACTUAL <div className="commnity">COMMUNITY</div>{" "}
              NOT JUST THE AD <div className="commnity">COMMUNITY</div>
            </span>
          </div>
        </div>
        <div className="marquee-w2second">
          <div className="marqueesecond">
            <span>
              GET OUT OF THE MARKETING ECHO{" "}
              <div className="commnity">CHAMBER</div>&nbsp;
            </span>
          </div>
          <div className="marqueesecond marqueesecond2">
            <span>
              GET OUT OF THE MARKETING ECHO{" "}
              <div className="commnity">CHAMBER</div>&nbsp;
            </span>
          </div>
        </div>
        <div className="marquee-w2third">
          <div className="marqueethird">
            <span>
              <div className="commnity"> DIVERSITY</div> MAKES THE WORK BETTER{" "}
              <div className="commnity">DIVERSITY</div> MAKES THE WORK BETTER
            </span>
          </div>
          <div className="marqueethird marqueethird2">
            <span>
              {" "}
              <div className="commnity">DIVERSITY</div> MAKES THE WORK BETTER{" "}
              <div className="commnity">DIVERSITY</div> MAKES THE WORK BETTER
            </span>
          </div>
        </div>
      </section>
      <section id="aboutmore">
        <div className="container-fluid">
          <div className="row">
            <div className="mission-heading">
              <h3>Our Mission</h3>
            </div>
            <div className="col-md-12">
              <h1 className="aboutmoretext">
                Elevating Brands and Exceeding Expectations!
              </h1>
            </div>
            <div className="col-md-5">
              <p className="mission-content">
                We craft compelling campaigns and unforgettable events that
                resonate with your target audience. Let us help you tell your
                story and take your brand to that next level of success.
              </p>
              <Link to="/contact" className="talkbtntocontact">
                <Button variant="outline-secondary" className="talkbtnmission">
                  Let's Talk
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
