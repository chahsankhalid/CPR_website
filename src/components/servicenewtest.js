import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Servicesnewtest = () => {
  const services = useRef(null);

  const [Bgcolor, setBgColor] = useState("");
  const [Listcolor, setListColor] = useState("");

  const bgcolor = {
    backgroundColor: `${Bgcolor}`,
  };
  const listcolor = {
    backgroundColor: `${Listcolor}`,
  };

  const showImg = (pic, list1, list2, list3, list4, list5, list6, line) => {
    pic.classList.add("active");
    list1.style.zIndex = "-2";
    list2.style.zIndex = "-2";
    list3.style.zIndex = "-2";
    list4.style.zIndex = "-2";
    list5.style.zIndex = "-2";
    list6.style.zIndex = "-2";
    var i;
    for (i = 0; i < line.length; i++) {
      console.log(i)
      line[i].style.opacity = "0";
    }
  };
  const hideImg = (id, list1, list2, list3, list4, list5, list6, line) => {
    id.classList.remove("active");
    list1.style.zIndex = "1";
    list2.style.zIndex = "1";
    list3.style.zIndex = "1";
    list4.style.zIndex = "1";
    list5.style.zIndex = "1";
    list6.style.zIndex = "1";
    var i;
    for (i = 0; i < line.length; i++) {
      console.log(i)
      line[i].style.opacity = "1";
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="services" style={bgcolor} ref={services}>
        <div className="speciality-head">
          <h3>WHAT WE DO</h3>
        </div>
        <div className="servicesparentdiv">
          <div className="services-overlay"></div>
          <div
            className="
                    "
          >
            <ul className="menu">
              <div className="first-service">
                <li id="bcservice" className="listitem">
                  <span
                    className="servicelist"
                    id="bclist"
                    onMouseOver={() => {
                      showImg(
                        document.getElementById("hoverimgchildbcservice"),
                        document.getElementById("eventlist"),
                        document.getElementById("digitallist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("smedialist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#056CF2");
                      setListColor("#5298F2");
                    }}
                    onMouseLeave={() => {
                      hideImg(
                        document.getElementById("hoverimgchildbcservice"),
                        document.getElementById("eventlist"),
                        document.getElementById("digitallist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("smedialist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#00000000");
                      setListColor("#5298F2");
                    }}
                  >
                    Branding & Creative Services
                    <span className="numbers" id="one">
                      01
                    </span>
                  </span>
                  <div className="hover-reveal" id="hoverimg">
                    <div className="hover_reveal_inner">
                      <div
                        className="hoverimgchildbcservice hoverimgreveals"
                        id="hoverimgchildbcservice"
                        alt="services"
                      >
                        <div className="tooltop" style={listcolor}>
                          <p>
                            Our digital strategy services help you develop a
                            comprehensive plan for leveraging digital channels
                            to achieve your business’s strategic marketing
                            goals, from increasing brand awareness to driving
                            conversions and revenue growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <span className="serviceline"></span>
              </div>
              <div className="forth-fifthservice">
                <li id="emanagmnt" className="listitem">
                  <span
                    className="servicelist"
                    id="eventlist"
                    onMouseOver={() => {
                      showImg(
                        document.getElementById("hoverimgchildevent"),
                        document.getElementById("bclist"),
                        document.getElementById("digitallist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("smedialist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#8352EB");
                      setListColor("#9980F2");
                    }}
                    onMouseLeave={() => {
                      hideImg(
                        document.getElementById("hoverimgchildevent"),
                        document.getElementById("bclist"),
                        document.getElementById("digitallist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("smedialist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#00000000");
                      //   setListColor("#ffffff");
                    }}
                  >
                    Event Management
                    <span className="numbers" id="four">
                      02
                    </span>
                  </span>
                  <span className="serviceline"></span>
                  <div className="hover-reveal" id="hoverimg">
                    <div className="hover_reveal_inner">
                      <div
                        className="hoverimgchildevent hoverimgreveals"
                        id="hoverimgchildevent"
                        alt="services"
                      >
                        <div className="tooltop" style={listcolor}>
                          <p>
                            Whether it's a corporate event, conference, product
                            launch, or experiential marketing campaign, our
                            event management team has the expertise and
                            creativity to bring your vision to life, delivering
                            a memorable and impactful event that meets your
                            marketing goals and exceeds your expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li id="dmarketing" className="listitem">
                  <span
                    className="servicelist"
                    id="digitallist"
                    onMouseOver={() => {
                      showImg(
                        document.getElementById("hoverimgchilddigital"),
                        document.getElementById("bclist"),
                        document.getElementById("eventlist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("smedialist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#E93F3F");
                      setListColor("#FF7353");
                    }}
                    onMouseLeave={() => {
                      hideImg(
                        document.getElementById("hoverimgchilddigital"),
                        document.getElementById("bclist"),
                        document.getElementById("eventlist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("smedialist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#00000000");
                      setListColor("#ffffff");
                    }}
                  >
                    Digital Marketing
                    <span className="numbers" id="five">
                      03
                    </span>
                  </span>
                  <div className="hover-reveal" id="hoverimg">
                    <div className="hover_reveal_inner">
                      <div
                        className="hoverimgchilddigital hoverimgreveals"
                        id="hoverimgchilddigital"
                        alt="services"
                      >
                        <div className="tooltop" style={listcolor}>
                          <p>
                            Our digital marketing services help you reach your
                            target media audience through online channels, such
                            as social media, search engines, and email
                            campaigns, to increase your online presence and
                            generate leads.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>

              <div className="third-twoservice">
                <li id="cwriting" className="listitem">
                  <span
                    className="servicelist"
                    id="cwritinglist"
                    onMouseOver={() => {
                      showImg(
                        document.getElementById("hoverimgchildcwriting"),
                        document.getElementById("bclist"),
                        document.getElementById("digitallist"),
                        document.getElementById("eventlist"),
                        document.getElementById("smedialist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#F26A1B");
                      setListColor("#F28A2E");
                    }}
                    onMouseLeave={() => {
                      hideImg(
                        document.getElementById("hoverimgchildcwriting"),
                        document.getElementById("bclist"),
                        document.getElementById("digitallist"),
                        document.getElementById("eventlist"),
                        document.getElementById("smedialist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#00000000");
                      setListColor("#ffffff");
                    }}
                  >
                    Content Writing
                    <span className="numbers" id="four">
                      04
                    </span>
                  </span>
                  <span className="serviceline"></span>
                  <div className="hover-reveal" id="hoverimg">
                    <div className="hover_reveal_inner">
                      <div
                        className="hoverimgchildcwriting hoverimgreveals"
                        id="hoverimgchildcwriting"
                        alt="services"
                      >
                        <div className="tooltop" style={listcolor}>
                          <p>
                            Apart from web design and graphics or developing a
                            media and marketing campaign and plan; Constantine
                            PR specializes in everything content, from writing
                            blog posts to creating social media posts and
                            updates and everything in between. We provide
                            content that not only connects with your target
                            audience but also leads to conversions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li id="smedia" className="listitem">
                  <span
                    className="servicelist"
                    id="smedialist"
                    onMouseOver={() => {
                      showImg(
                        document.getElementById("hoverimgchildsmedia"),
                        document.getElementById("bclist"),
                        document.getElementById("digitallist"),
                        document.getElementById("eventlist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#1C1F26");
                      setListColor("#636873");
                    }}
                    onMouseLeave={() => {
                      hideImg(
                        document.getElementById("hoverimgchildsmedia"),
                        document.getElementById("bclist"),
                        document.getElementById("digitallist"),
                        document.getElementById("eventlist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("weblist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#00000000");
                      setListColor("#ffffff");
                    }}
                  >
                    Social Media Management
                    <span className="numbers" id="five">
                      05
                    </span>
                  </span>
                  <div className="hover-reveal" id="hoverimg">
                    <div className="hover_reveal_inner">
                      <div
                        className="hoverimgchildsmedia hoverimgreveals"
                        id="hoverimgchildsmedia"
                        alt="services"
                      >
                        <div className="tooltop" style={listcolor}>
                          <p>
                            Take your brand's social media presence to the next
                            level with our expert digital media and brand
                            management services, tailor made for your unique
                            image, voice and audience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="thirdservice">
                <li id="webapp" className="listitem">
                  <span
                    className="servicelist"
                    id="weblist"
                    onMouseOver={() => {
                      showImg(
                        document.getElementById("hoverimgchildweb"),
                        document.getElementById("bclist"),
                        document.getElementById("digitallist"),
                        document.getElementById("eventlist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("smedialist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#072606");
                      setListColor("#1A7517");
                    }}
                    onMouseLeave={() => {
                      hideImg(
                        document.getElementById("hoverimgchildweb"),
                        document.getElementById("bclist"),
                        document.getElementById("digitallist"),
                        document.getElementById("eventlist"),
                        document.getElementById("cwritinglist"),
                        document.getElementById("smedialist"),
                        document.getElementById("medialist"),
                        document.querySelectorAll(".serviceline")
                      );
                      setBgColor("#00000000");
                      setListColor("#ffffff");
                    }}
                  >
                    Web + App Development
                    <span className="numbers" id="three">
                      06
                    </span>
                  </span>{" "}
                  <span className="serviceline"></span>
                  <div
                    className="hover-reveal"
                    id="hoverimg"
                    // style={{
                    //     transform: `translate(${x})`
                    // }}
                    // ref={ref}
                  >
                    <div className="hover_reveal_inner">
                      <div
                        className="hoverimgchildweb hoverimgreveals"
                        id="hoverimgchildweb"
                        alt="services"
                      >
                        <div className="tooltop" style={listcolor}>
                          <p>
                            Our web and app development services create
                            user-friendly and visually appealing websites and
                            applications that meet your business’s branding and
                            marketing needs, with a focus on responsive design,
                            usability, and performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>

              <li id="mmanagmnt" className="listitem">
                <span
                  className="servicelist"
                  id="medialist"
                  onMouseOver={() => {
                    showImg(
                      document.getElementById("hoverimgchildmedia"),
                      document.getElementById("bclist"),
                      document.getElementById("digitallist"),
                      document.getElementById("eventlist"),
                      document.getElementById("cwritinglist"),
                      document.getElementById("smedialist"),
                      document.getElementById("weblist"),
                      document.querySelectorAll(".serviceline")
                    );
                    setBgColor("#E5AC00");
                    setListColor("#F27405");
                  }}
                  onMouseLeave={() => {
                    hideImg(
                      document.getElementById("hoverimgchildmedia"),
                      document.getElementById("bclist"),
                      document.getElementById("digitallist"),
                      document.getElementById("eventlist"),
                      document.getElementById("cwritinglist"),
                      document.getElementById("smedialist"),
                      document.getElementById("weblist"),
                      document.querySelectorAll(".serviceline")
                    );
                    setBgColor("#00000000");
                    setListColor("#ffffff");
                  }}
                >
                  Media Production
                  <span className="numbers" id="six">
                    07
                  </span>
                </span>
                <div className="hover-reveal" id="hoverimg">
                  <div className="hover_reveal_inner">
                    <div
                      className="hoverimgchildmedia hoverimgreveals"
                      id="hoverimgchildmedia"
                      alt="services"
                    >
                      <div className="tooltop" style={listcolor}>
                        <p>
                          Our media production services cover everything from
                          video and audio production to animation and graphic
                          design, helping you create captivating content that
                          engages and inspires your audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <div className='seventhservice'>
                        <li><span className='numbers' id="seven">07</span><span className="servicelist" onMouseOver={() => { moveNumber(document.getElementById('seven')); setBgImg(process.env.PUBLIC_URL + '/assets/images/Public Relation.jfif') }} onMouseOut={() => { movebackNumber(document.getElementById('seven'), document.getElementById('serviceline7')) }}>
                            Public Relations
                        </span></li>
                        </div> */}
              {/* <li><span className='numbers' id="eight">08</span><span className="servicelist" onMouseOver={() => { moveNumber(document.getElementById('eight')); setBgImg(process.env.PUBLIC_URL + '/assets/images/Brand Strategy.png') }} onMouseOut={() => { movebackNumber(document.getElementById('eight'), document.getElementById('serviceline8')) }}>
                            Brand Strategy
                        </span></li>
                        <li><span className='numbers' id="nine">09</span><span className="servicelist" onMouseOver={() => { moveNumber(document.getElementById('nine')); setBgImg(process.env.PUBLIC_URL + '/assets/images/Creative Communiation.jfif') }} onMouseOut={() => { movebackNumber(document.getElementById('nine'), document.getElementById('serviceline9')) }}>
                            Creative Communication
                        </span></li> */}
              {/* <div className='hoverimg' id="hoverimg" >
                            <div className='hover_reveal_inner' style={{
                                transform: `translate(${x - width / 2}px, ${y - height /2}px) rotate(${z}deg)`
                            }}      
                                ref={ref} >
                                <img src={Bgimg} className="hoverimgchild" id="hoverimgchild" alt="services" />
                            </div>
                        </div> */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicesnewtest;
