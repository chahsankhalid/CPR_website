import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { HashLink as Link } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  //   useEffect(() => {
  //     ScrollTrigger.matchMedia({

  //         // desktop
  //         "(min-width: 800px)": function () {
  //             ScrollTrigger.create({
  //                 trigger: '#footer',
  //                 start: 'top center',
  //                 endTrigger: '#footer',
  //                 markers: false,
  //                 // scrub: 1,
  //                 onEnter: () => {
  //                     gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
  //                 },
  //                 onLeaveBack: () => {
  //                     gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
  //                 },
  //             })
  //         },
  //         "(min-width: 1920px)": function () {
  //             ScrollTrigger.create({
  //                 trigger: '#footer',
  //                 start: 'top center',
  //                 endTrigger: '#footer',
  //                 markers: false,
  //                 // scrub: 1,
  //                 onEnter: () => {
  //                     gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
  //                 },
  //                 onLeaveBack: () => {
  //                     gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
  //                 },
  //             })
  //         }
  //     })
  //   }, [])
  return (
    <>
      <footer id="footer" className="pad30">
        {/* <div className="blob">
                    <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                        <g transform="translate(144, 6)">
                            <path className="blob" fill="#191818">
                                <animate attributeName='d'
                                    dur="10000ms"
                                    repeatCount='indefinite'
                                    values="M469.5,294.5Q464,339,442.5,380Q421,421,376,434Q331,447,290.5,455Q250,463,211.5,449Q173,435,124,430Q75,425,51.5,383.5Q28,342,16,296Q4,250,13,202.5Q22,155,52.5,119Q83,83,127.5,72Q172,61,211,35Q250,9,295.5,19Q341,29,378.5,56.5Q416,84,440.5,122.5Q465,161,470,205.5Q475,250,469.5,294.5Z;
                                 M460.5,293.5Q459,337,442,381Q425,425,384.5,451Q344,477,297,467.5Q250,458,211.5,447Q173,436,125,429.5Q77,423,57.5,380.5Q38,338,34,294Q30,250,47.5,211.5Q65,173,78,132Q91,91,129.5,72Q168,53,209,36Q250,19,295.5,24Q341,29,375.5,59.5Q410,90,439,125Q468,160,465,205Q462,250,460.5,293.5Z;
                                 M471,293Q458,336,439,378Q420,420,381.5,447.5Q343,475,296.5,481Q250,487,206.5,473Q163,459,122.5,438.5Q82,418,66,375.5Q50,333,48,291.5Q46,250,40.5,205.5Q35,161,63,126Q91,91,132,77Q173,63,211.5,51Q250,39,297,31Q344,23,369.5,64Q395,105,429,133.5Q463,162,473.5,206Q484,250,471,293Z;
                                 M454.5,291Q448,332,421,363Q394,394,363,420.5Q332,447,291,454.5Q250,462,210.5,451Q171,440,127,428.5Q83,417,64.5,375.5Q46,334,44.5,292Q43,250,34,203.5Q25,157,59,125Q93,93,125.5,61Q158,29,204,20.5Q250,12,291.5,31Q333,50,377,64.5Q421,79,439.5,121.5Q458,164,459.5,207Q461,250,454.5,291Z;
                                 M469.5,294.5Q464,339,442.5,380Q421,421,376,434Q331,447,290.5,455Q250,463,211.5,449Q173,435,124,430Q75,425,51.5,383.5Q28,342,16,296Q4,250,13,202.5Q22,155,52.5,119Q83,83,127.5,72Q172,61,211,35Q250,9,295.5,19Q341,29,378.5,56.5Q416,84,440.5,122.5Q465,161,470,205.5Q475,250,469.5,294.5Z
                                 "

                                ></animate>

                            </path>
                        </g>
                    </svg>
                </div>
                <div className='blob2'>
                <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                        <g transform="translate(358, -1)">
                            <path className="blob" fill="#2a2929">
                            <animate attributeName='d'
                                    dur="10000ms"
                                    repeatCount='indefinite'
                                    values="M429.5,307.5Q408,365,357.5,394.5Q307,424,244,443.5Q181,463,116,428.5Q51,394,54,322Q57,250,68.5,188Q80,126,127,71Q174,16,249,19Q324,22,382,67Q440,112,445.5,181Q451,250,429.5,307.5Z;
                                    M424,311Q418,372,366,409Q314,446,251.5,441.5Q189,437,127,410.5Q65,384,37.5,317Q10,250,30,177Q50,104,115,70Q180,36,250.5,34.5Q321,33,385,69Q449,105,439.5,177.5Q430,250,424,311Z;
                                    M452,312.5Q422,375,369.5,416Q317,457,250.5,454.5Q184,452,123,419.5Q62,387,36.5,318.5Q11,250,38,182.5Q65,115,119,63.5Q173,12,245.5,27Q318,42,367,86Q416,130,449,190Q482,250,452,312.5Z;
                                    M450.99959,318.50248Q438.00662,387.00497,376.00269,417.00041Q313.99876,446.99586,250.5,444.99607Q187.00124,442.99627,130.50311,410.49627Q74.00497,377.99627,65.0118,313.99814Q56.01863,250,70.51346,190.00311Q85.00828,130.00621,134.50642,88.51035Q184.00455,47.01449,247.00062,56.01201Q309.99669,65.00952,351.49358,105.50807Q392.99048,146.00662,428.49151,198.00331Q463.99255,250,450.99959,318.50248Z;
                                    M429.5,307.5Q408,365,357.5,394.5Q307,424,244,443.5Q181,463,116,428.5Q51,394,54,322Q57,250,68.5,188Q80,126,127,71Q174,16,249,19Q324,22,382,67Q440,112,445.5,181Q451,250,429.5,307.5Z
                                 "

                                ></animate>
                            </path>
                        </g>
                    </svg>
                </div> */}
        {/* <video autoPlay loop muted playsInline className="back-video">
                    <source src={'./assets/videos/Blob.mp4'} type="video/mp4" />
                </video> */}
        <section className="footer-container">
          <div className="container-fluid footercontent">
            <h1 className='talk'>Let's Talk.</h1>
            <img src={process.env.PUBLIC_URL + "/assets/images/turnicon.png"} alt="icon" className="footerarrowicon"/>
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
                    <a
                      href="https://www.facebook.com/constantineprandcommunications/"
                      className="nav-link"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y="
                      className="nav-link"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/constantine-pr-communications/"
                      className="nav-link"
                    >
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
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/Logofooter.png"
                  }
                  alt="footer-logo"
                  className="footer-logomob"
                />
                <div className="copywright">© ConstantinePR . 2023</div>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/Logofooter.png"
                  }
                  alt="footer-logo"
                  className="footer-logo"
                />
              </div>
            </div>
      </footer>
    </>
  );
};

export default Footer;
