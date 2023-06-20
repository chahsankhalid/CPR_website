import React, { useEffect } from 'react'
import { motion as m } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from 'react-bootstrap/Button'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet'
import Form from "react-bootstrap/Form";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navdark from './navDark'

const Careers = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#careersection',
      start: 'top bottom',
      end: 'bottom top',
      // end: "bottom 99%",
      // endTrigger: "#aboutussectionmain",
      markers: false,
      scrub: 1,
      onEnter: () => {
        gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
      },
      onLeave: () => {
        gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
      },
      onEnterBack: () => {
        gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
      },
      onLeaveBack: () => {
        gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
      }
    })
  }, [])
  return (
    <m.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 0.5 }}>
      <>
        <Helmet>
          <title>Careers |</title>
          <meta name="description" content="Get info about ConstantinePR" />
          <meta
            name="keywords"
            content="digital marketing agency, digital marketing agency pakistan, digital advertising agency, digital advertising agencies near me, branding agencies, branding and marketing agency, digital strategy, web development, app development, media production, event management, rebranding, brand management, social media marketing, corporate branding, corporate marketing strategy, print media, digital media        "
          />
        </Helmet>

        <div className="smooth-wrapper" id="smooth-wrapper">
          <div id="smooth-content">
            <section id="careersection">
                <Navdark />
              <div className="container-fluid aboutuscontainer">
                <div className="row">
                  <div className="hiring_heading">
                    <h1 className="careertext">WE</h1>
                    <h1 className="careertext">ARE</h1>
                    <h1 className="careertext">HIRING</h1>
                    <h1 className="careertext">
                      INTERNS! <img src={'./assets/images/face.png'} alt="jobs" className="face" />
                    </h1>
                  </div>
                </div>
                <div className="row internshipdivparent ">
                  <div className="col-md-6">
                    <div className="internshipdiv">
                      <h2>Summer</h2>
                      <h2>Internship 23</h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="emaildiv">
                      <h2>career@</h2>
                      <h2>constantine-pr</h2>
                      <h2>.com</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="aboutussectionsecond">
              <div className="container-fluid">
                <div className="aboutus_2ndheading joinustext">
                  <h1>Join us in the</h1>
                  <h1>following departments</h1>
                </div>

                <div className="row pad10">
                  <div className="col-md-10">
                    <div className="vacancies">
                      <ul>
                        <li>
                          <span>Visual Communication Design</span> <img src={'./assets/images/logohere.png'} alt="jobs" className="" />
                        </li>
                        <li>
                          <span>Video Editing / Animation</span>
                          <img src={'./assets/images/escape.png'} alt="jobs" className="" />
                        </li>
                        <li>
                          <span>Social Media Management</span>
                          <img src={'./assets/images/weight.png'} alt="jobs" className="" />
                        </li>
                        <li>
                          <span>Web Development</span>
                          <img src={'./assets/images/wash.png'} alt="jobs" className="" />
                        </li>
                        <li>
                          Event Management
                          <img src={'./assets/images/event.png'} alt="jobs" className="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer id="footer" className="pad30">
           
              <section className="footer-container">
                <div className="container-fluid footercontent">
                  <div className="row footerallcontent">
                    <div className="col-md-2">
                      <div className="gridview gridview1">
                        <h4>Discover</h4>
                        <div className="footerlinks mar20">
                          <a className="nav-link" href="/work">
                            <span>Work</span>
                          </a>
                          {/* <a
                       className="nav-link"
                       href="/work"
                  >
                    
                    <span>Services</span>
                  </a>
                  <a
                    className="nav-link"
                    href="/blogs"
                  >
                    <span>Press</span>
                  </a> */}
                          <a className="nav-link" href="/contact">
                            <span>Contact</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="gridview gridview1">
                        <h4>Legal</h4>
                        <div className="footerlinks mar20">
                          <a className="nav-link" href="/terms&conditions">
                            <span>Terms & Conditions</span>
                          </a>
                          <a className="nav-link" href="/privacypolicy">
                            Privacy Policy
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="gridview gridview1">
                        <h4>Connect</h4>
                        <div className="footerlinks mar20">
                          <a href="https://www.facebook.com/constantineprandcommunications/" className="nav-link">
                            Facebook
                          </a>
                          <a href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y=" className="nav-link">
                            Instagram
                          </a>
                          <a href="https://www.linkedin.com/company/constantine-pr-communications/" className="nav-link">
                            Linkedin
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="gridview gridview1">
                        <h4>About</h4>
                        <div className="footerlinks mar20">
                          {/* <a href="" className="nav-link">
                    Our Mission
                  </a> */}
                          <a href="/about-us" className="nav-link">
                            Company
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="gridview gridview1">
                        <h4>Newsletter</h4>
                        <div className="footerlinks mar20">
                          <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Enter email" />
                              <Button type="submit" className="sbmitbtn">
                                <HiArrowNarrowRight />
                              </Button>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="row bottomfixed">
                <div className="col-md-4 vertical-center">
                  <img src={process.env.PUBLIC_URL + '/assets/images/Logofooter.png'} alt="footer-logo" className="footer-logomob" />
                  <div className="copywright">© ConstantinePR . 2023</div>
                </div>
                <div className="col-md-4 text-center">
                  <img src={process.env.PUBLIC_URL + '/assets/images/Logofooter.png'} alt="footer-logo" className="footer-logo" />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    </m.div>
  )
}

export default Careers
