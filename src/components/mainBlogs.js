import React from "react";
import { motion as m } from "framer-motion";
import Navcomponent from "./navbar";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import { useEffect } from "react";
import SplitType from 'split-type'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Mainblogs = () => {
  
    // useEffect(() => {
    //     let revealtext = document.querySelectorAll(".blogs-heading");
    //     const textheritagereveal = new SplitType('.blogs-heading')
    //     let tl1 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#mainblogs',
    //             toggleActions: "restart none none reset"
    //         }
    //     });

    //     tl1.to(textheritagereveal.chars,{
    //         y: 0,
    //         stagger: 0.05,
    //         delay: 0.2,
    //         duration: 0.1
    //     })
    // },[])
  return (
    <m.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <Helmet>
          <title>Blogs |</title>
          <meta name="description" content="Get info about ConstantinePR" />
          <meta
            name="keywords"
            content="digital marketing agency, digital marketing agency pakistan, digital advertising agency, digital advertising agencies near me, branding agencies, branding and marketing agency, digital strategy, web development, app development, media production, event management, rebranding, brand management, social media marketing, corporate branding, corporate marketing strategy, print media, digital media        "
          />
        </Helmet>

        <div className="smooth-wrapper" id="smooth-wrapper">
          <div id="smooth-content">
            <section id="mainblogs">
              <Navcomponent />
              <div className="container-fluid">
                <div className="row">
                  <h1 className="aboutmoretext blogs-heading blogs-headingdesktop">
                    Discover the Latest Business
                  </h1>
                  <h1 className="aboutmoretext blogs-heading blogheading-mobile">
                    Discover the Latest Business Strategies
                  </h1>
                  <h1 className="aboutmoretext blogs-heading2 blogs-headingdesktop">Strategies</h1>
                  <div className="offset-md-6 col-md-6 blog1para">
                    <p>
                    Looking to supercharge your business growth? You're in the right place! Our blog section is packed with game-changing strategies, cutting-edge tips, and industry trends that can help take your business to the next level. 
                    </p>
                    <p>
                    Whether you're just starting out or looking to level up, our team of expert writers will provide you with valuable insights and inspiration to help you succeed. Don't miss out on the latest news and insights – check out our informative blogs now and start achieving your goals!
                    </p>
                  </div>
                  <a href={'/allblogs/' +  1} >
                  <div className="col-md-12">
                    <div className="blog1">
                      <img src={"./assets/images/Blog 1.png"} alt="blogs" className="blogcovers"/>
                      <div className="row blog1content">
                        <div className="col-md-5">
                          <div className="mainText">
                            <h3>Event Planning in the Age of Social Media</h3>
                            <p className="blogdates">
                              April 27, 2023 | Event Management, Social Media |
                              5 min read
                            </p>
                          </div>
                        </div>
                        <div className="offset-md-2 col-md-5">
                          <div className="mainText">
                            <p>
                              Social media has changed the landscape of event
                              planning in ways that we could never have
                              anticipated. In the past, event planners had to
                              rely on word-of-mouth and print advertisements to
                              promote their events.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="row mt-50">             
                  <div className="col-md-6">
                  <a href={'/allblogs/' +  2} >
                    <div className="blog2">
                      <img src={"./assets/images/blog2.png"} alt="blogs" className="blogcovers"/>
                      <div className="blogs-content">
                        <h3>Things You Need to Know About Event Management </h3>
                        <p className="blogdates">April 27, 2023 | Event Management | 5 min read</p>
                      </div>
                    </div>
                  </a>
                  </div>
                  <div className="col-md-6">
                  <a href={'/allblogs/' +  3} >
                    <div className="blog3">
                      <img src={"./assets/images/blog3.png"} alt="blogs" className="blogcovers"/>
                      <div className="blogs-content">
                        <h3>
                          Standing Out in a Crowded Market: The Importance of
                          Branding in Event Management
                        </h3>
                        <p className="blogdates">April 27, 2023   |   Event Management, Branding   |   5 min read</p>
                      </div>
                    </div>
                  </a>
                  </div>
                </div>
                <div className="row mt-50">             
                  <div className="col-md-6">
                  <a href={'/allblogs/' +  4} >
                    <div className="blog2">
                      <img src={"./assets/images/Digital-Marketing-Transfrom.webp"} alt="blogs" className="blogcovers"/>
                      <div className="blogs-content">
                        <h3>From Likes to Leads: How Digital Marketing Can Transform Your Business!</h3>
                        <p className="blogdates">May 02, 2023 | Digital Marketing | 5 min read</p>
                      </div>
                    </div>
                  </a>
                  </div>
                  <div className="col-md-6">
                  <a href={'/allblogs/' +  5} >
                    <div className="blog3">
                      <img src={"./assets/images/blog5.jpeg"} alt="blogs" className="blogcovers"/>
                      <div className="blogs-content">
                        <h3>
                        The Impact of Digital Marketing on Business Success: Why It Matters!
                        </h3>
                        <p className="blogdates">May 18, 2023 | Digital Marketing | 5 min read</p>
                      </div>
                    </div>
                  </a>
                  </div>
                </div>
                <div className="row mt-50">             
                  <div className="col-md-6">
                  <a href={'/allblogs/' +  6} >
                    <div className="blog2">
                      <img src={"./assets/images/pexels-pixabay-35550.jpg"} alt="blogs" className="blogcovers"/>
                      <div className="blogs-content">
                        <h3>Unleashing the Power of Digital Marketing: Boost Your Business in the Digital Era with Constantine PR</h3>
                        <p className="blogdates">June 07, 2023 | Digital Marketing | 5 min read</p>
                      </div>
                    </div>
                  </a>
                  </div>
                
                </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
            </section>
              <Footer />
          </div>
        </div>
      </>
    </m.div>
  );
};

export default Mainblogs;
