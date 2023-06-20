import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import Navcomponent from "./navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HashLink as Link } from "react-router-hash-link";
import Button from "react-bootstrap/Button";
import Ourteam from "./ourTeam";
import { gsap } from "gsap";
import Footer from "./footer";
import { Helmet } from "react-helmet";

const Aboutus = () => {
  useEffect(() => {
    gsap.utils.toArray(".stb_line_single").forEach((line, i) => {
      const links = line.querySelectorAll("a"),
        tl = horizontalLoop(links, {
          repeat: -1,
          speed: 1 + i * 0.5,
          paddingRight: parseFloat(
            gsap.getProperty(links[0], "marginRight", "px")
          ), // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
        });
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => tl.pause());
        link.addEventListener("mouseleave", () => tl.resume());
      });
    });

    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
              gsap.getProperty(el, "xPercent")
          );
          return xPercents[i];
        },
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      return tl;
    }
    ScrollTrigger.create({
      trigger: "#aboutussectionmain",
      start: "top bottom",
      end: 'bottom top',
      // end: "bottom 99%",
      // endTrigger: "#aboutussectionmain",
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
  },[]);
  return (
    
    <m.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
      <Helmet>
        <title>About Us |</title>
        <meta name="description" content="Get info about ConstantinePR" />
        <meta name="keywords" content="digital marketing agency, digital marketing agency pakistan, digital advertising agency, digital advertising agencies near me, branding agencies, branding and marketing agency, digital strategy, web development, app development, media production, event management, rebranding, brand management, social media marketing, corporate branding, corporate marketing strategy, print media, digital media        "/>
      </Helmet>

        <div className="smooth-wrapper" id="smooth-wrapper">
          <div id="smooth-content">
            <section id="aboutussectionmain">
              <Navcomponent />
              <div className="container-fluid aboutuscontainer">
                <div className="row">
                  <div className="about_heading">
                    <h1 className="aboutmoretext">From Concept to Reality:</h1>
                    <h1 className="aboutmoretext">
                      We Bring Your Ideas & Vision to Life!
                    </h1>
                  </div>
                  <div className="col-md-6">
                    <div className="aboutimg1">
                      <img
                        className="about-img"
                        src={"./assets/images/aboutimg1.png"}
                        alt="About img"
                      />
                    </div>
                    <div className="aboutcontent2">
                      <h4>
                        What We{" "}
                        <span>
                          {" "}
                          <img
                            className="long-arrow"
                            src={"./assets/images/longarrow.svg"}
                            alt="Long arrow"
                          />
                        </span>{" "}
                        Do?
                      </h4>
                      <br />
                      <p>
                        Our team is brimming with the best talent in every
                        field. We've got social media gurus, marketing wizards,
                        event management maestros, and branding geniuses all
                        under one roof.
                        <br />
                        <br />
                        We know how to create a business, and we're not afraid
                        to get a little wild to make it happen!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="aboutcontent1">
                      <h4>About Us</h4>
                      <br />
                      <p>
                        We’re the coolest, the strangest, and the most
                        unorthodox creative agency out there!
                        <br />
                        <br />
                        We're here to change the game and have our finger on the
                        pulse of what's hot, what's not, and everything in
                        between. We're always ahead of the curve, keeping up
                        with the latest trends and styles.
                        <br />
                        <br />
                        We know how to make things go viral, and we're not
                        afraid to take risks to get our clients the attention
                        they deserve.
                      </p>
                    </div>
                    <div className="aboutimg2">
                      <img
                        className="about-img"
                        src={"./assets/images/aboutimg2.png"}
                        alt="About img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="aboutus_2ndheading">
                    <h1>Transforming Conversations into</h1>
                    <h1> Memorable Experiences</h1>
                    <h1>That Inspire Actions</h1>
                  </div>
                  <div className="aboutvideo">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="back-video "
                    >
                      <source
                        src={"./assets/videos/inspire-action.mp4"}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </section>
            <section id="aboutussectionsecond">
              <div className="container-fluid">
                <div className="aboutus_2ndheading aboutus_2ndheadingsecond">
                  <h1>But don't just take our word for it.</h1>
                  <p>
                    Let's talk about our clients, shall we? We've worked with
                    some of the biggest names in business – from corporate gurus
                    to food giants to tech titans. We've helped clients catapult
                    brands and boosted them to the stratosphere!
                  </p>
                </div>
                <div className="row">
                  <div className="services-ticker-block">
                    <div className="stb_line_single">
                      <a href="#" className="stb-item">
                        <img
                          src={
                            "./assets/images/bahria-town-logo-D1A3F8C43C-seeklogo.com.png"
                          }
                          alt="clients"
                        />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img
                          src={"./assets/images/bigo-live-logo-01.png"}
                          alt="clients"
                        />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img
                          src={"./assets/images/Chery-Logo.png"}
                          alt="clients"
                        />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img
                          src={"./assets/images/Eighteen Logo.png"}
                          alt="clients"
                        />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img src={"./assets/images/gids.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img src={"./assets/images/IRC-01.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img src={"./assets/images/Pepsi Logo.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img
                          src={"./assets/images/EC_Logo.png"}
                          alt="clients"
                        />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img
                          src={"./assets/images/Telenor-Log.png"}
                          alt="clients"
                        />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img src={"./assets/images/Howdy Logo.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img src={"./assets/images/Giga Group Logo.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img src={"./assets/images/Daikin Logo.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img
                          src={"./assets/images/The Body Shop Logo.png"}
                          alt="clients"
                        />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img src={"./assets/images/PMN Logo.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img src={"./assets/images/Askari Bank Logo.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img src={"./assets/images/PMIC.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img
                          src={"./assets/images/Rewayat-Logo.png"}
                          alt="clients"
                        />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <img
                          src={"./assets/images/Manolo-Logo.png"}
                          alt="clients"
                        />{" "}
                      </a>
                    </div>
                  </div>
                  {/* <div className="services-ticker-block">
                    <div className="stb_line_single">
                      <a href="#" className="stb-item">
                      <img src={"./assets/images/EC_Logo.png"} alt="clients" />{" "}
                      </a>
                      <a href="#" className="stb-item">
                        <span>Simple 9</span>
                      </a>
                      <a href="#" className="stb-item">
                        <span>Simple 10</span>
                      </a>
                      <a href="#" className="stb-item">
                        <span>Simple 11</span>
                      </a>
                      <a href="#" className="stb-item">
                        <span>Simple 12</span>
                      </a>
                      <a href="#" className="stb-item">
                        <span>Simple 13</span>
                      </a>
                      <a href="#" className="stb-item">
                        <span>Simple 14</span>
                      </a>
                      <a href="#" className="stb-item">
                        <span>Simple 15</span>
                      </a>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="aboutinspiration_heading">
                    <h1>Constantine PR: Where Innovation,</h1>
                    <h1>Leadership, Imagination, and</h1>
                    <h1>Adaptability Reign Supreme!</h1>
                  </div>
                  <div className="aboutinspiration_headingmob">
                    <h1>
                      Constantine PR: Where Innovation, Leadership, Imagination,
                      and Adaptability Reign Supreme!
                    </h1>
                  </div>
                  <div className="col-md-6">
                    <div className="aboutinspirationimgdiv">
                      <img
                        src={"./assets/images/cprlion.png"}
                        className="cprlion"
                        alt="CPR"
                      />
                    </div>
                    <div className="cprbadge">Constantine PR ®</div>
                  </div>
                  <div className="col-md-6">
                    <div className="inpiration-heading">
                      <h3>Our Inspiration</h3>
                      <br />
                      <p>
                        Our name was inspired by Constantine the Great, one of
                        the most celebrated emperors in history, and the founder
                        of what was once the greatest city in the world -
                        Constantinople.
                        <br />
                        <br />
                        Throughout his reign, Emperor Constantine embodied
                        leadership, innovation, tolerance, and adaptability.
                        <br />
                        <br />
                        These principles are fundamental to the way we operate
                        here at Constantine. Our team is deeply committed to
                        upholding these values in everything we do, be it a
                        digital media campaign or a marketing event to
                        everything in between.
                        <br />
                        <br />
                        At Constantine PR, we strive to deliver our services
                        with the same level of strategic excellence that
                        Constantine himself exemplified.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row pad10">
                  <div className="col-md-6">
                    <div className="inpiration-heading">
                      <h3>Who We Are</h3>
                      <br />
                      <p>
                        As an unconventional advertising agency, we at
                        Constantine are dedicated to converting ideas into great
                        brands!
                        <br />
                        <br />
                        We help businesses achieve their digital media marketing
                        and branding image goals through innovative and
                        effective marketing strategies.
                        <br />
                        <br />
                        With offices in Islamabad, Dubai, Morocco, and other
                        parts of the world, we are uniquely positioned to offer
                        our clients a truly comprehensive 360-degree solution,
                        from initial conception and development to the official
                        launch and beyond.
                        <br />
                        <br />
                        Whether you need help with branding, digital marketing,
                        social media presence, event management and everything
                        in between, we are here to support you every
                        step of the way.
                      </p>
                    </div>
                    <Link to="/contact" className="talkbtntocontact">
                      <Button
                        variant="outline-secondary"
                        className="talkbtnmission"
                      >
                        Let's Talk
                      </Button>{" "}
                    </Link>
                  </div>
                  <div className="col-md-6 paddinrightnone">
                    <div className="aboutinspirationimgdiv">
                      <img
                        src={"./assets/images/whoweare.png"}
                        className="whoweare"
                        alt="Who we are"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="aboutcover"></section>
            <Ourteam />
            <section id="atCPR">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="atcpr-img3"
                      src={"./assets/images/atCpr1.png"}
                      alt="At CPR"
                    />
                    <img
                      className="atcpr-img"
                      src={"./assets/images/atCpr2.png"}
                      alt="At CPR"
                    />
                    <img
                      className="atcpr-img2"
                      src={"./assets/images/atCpr3.png"}
                      alt="At CPR"
                    />
                  </div>
                  <div className="col-md-6 margin-auto">
                    <div className="atcpr-content">
                      <div className="inpiration-heading">
                        <h2 className="atcprheading">
                          At Constantine PR & Communications
                        </h2>
                        <br />
                        <p>
                          We don't just think outside the box, we obliterate it.
                          We're a new breed of badass communicators, and we're
                          here to shake things up. So if you want to get
                          noticed, if you want to be the next big thing, then
                          you know who to call.
                        </p>
                      </div>
                      <Link to="/contact" className="talkbtntocontact">
                        <Button
                          variant="outline-secondary"
                          className="talkbtnmission"
                        >
                          Let's Talk
                        </Button>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </>
    </m.div>
  );
};

export default Aboutus;
