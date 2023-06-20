import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { HashLink as Link } from "react-router-hash-link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { motion as m } from "framer-motion";
import Navdark from "./navDark";

const Email = () => {
  const hidenav = () => {
    document.body.style.overflow = "visible";
    const check = document.querySelector(".offcanvas");
    check.style.opacity = 0;
    check.style.zIndex = -1;
  };
  // const navigate = useNavigate();
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "365f23bb-b519-4870-9621-17e3a0f0f1e3",
      To: "media.constantinepr@gmail.com",
      From: formState.email,
      Subject: "Email from website",
      // Body : `${(formState.fname).concat(' ', formState.lname)} connected to you over email`,
      Body: {
        Name: `${formState.fname}<br/>`,
        // LastName: `${formState.lname}<br/>`,
        Email: `${formState.email}<br/>`,
        Phone: `${formState.phone}<br/>`,
        Message: `${formState.message}<br/>`,
        // Service: `${formState.select1}<br/>`,
        // Budget: `${formState.select2}<br/>`,
        Client: `${formState.fname.concat(
          " ",
          formState.lname
        )} connected to you from website`,
      },
    };
    if (window.Email) {
      window.Email.send(config).then((response) => {
        if (response !== "OK") {
          toast.error("Incorrect Email", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.success("🦄Email sent successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          // setTimeout(
          //     navigate('/')
          // , 3000);
        }
      });
    }
  };
  return (
    // <m.div initial={{ y: "100%"}}
    //  animate={{ y: "0%"}}
    //  exit={{opacity: 1}}
    //  transition={{duration: 0.75, ease: "easeOut"}}
    // >
    <m.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact Us |</title>
        <meta name="description" content="Contact to ConstantinePR" />
        <meta name="keywords" content="digital marketing agency, digital marketing agency pakistan, digital advertising agency, digital advertising agencies near me, branding agencies, branding and marketing agency, digital strategy, web development, app development, media production, event management, rebranding, brand management, social media marketing, corporate branding, corporate marketing strategy, print media, digital media        "/>
      </Helmet>
      <section id="emailsection">
       <Navdark />
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-7">
              <div className="worktogehter">
                <h1 className="unorthotext1email">
                  <span>Let's Work</span>
                </h1>
                <h1 className="unorthotext1email unorthotexttraformemail">
                  <span>Together!</span>{" "}
                  <img src={"./assets/images/turnicon.png"} alt="" />{" "}
                </h1>
              </div>
            </div>
            <div className="col-md-5">
              <form onSubmit={submitHandler} className="emailform">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFname"
                    placeholder="Name"
                    name="fname"
                    value={formState.fname || ""}
                    onChange={changeHandler}
                    required
                  />
                </div>
                {/* <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputLname" placeholder="Last Name" name="lname" value={formState.lname || ''} onChange={changeHandler} />
                            </div> */}
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="email"
                    value={formState.email || ""}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="phone"
                    className="form-control"
                    id="exampleInputPhone"
                    aria-describedby=""
                    placeholder="Phone Number"
                    name="phone"
                    value={formState.phone || ""}
                    onChange={changeHandler}
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                    name="message"
                    value={formState.message || ""}
                    onChange={changeHandler}
                    required
                  ></textarea>
                </div>
                {/* <div className="form-group">
                                <select className="form-control" id="exampleFormControlSelect1" name="select1" onChange={changeHandler}>
                                    <option value={''}>---I need help with---</option>
                                    <option value={'Digital Strategy'}>Digital Strategy</option>
                                    <option value={'Branding'}>Branding</option>
                                    <option value={'Web Development'}>Web Development</option>
                                    <option value={'Digital Marketing'}>Digital Marketing</option>
                                    <option value={'Media Production'}>Media Production</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control" id="exampleFormControlSelect2" name="select2" onChange={changeHandler}>
                                    <option value={''}>---Monthly Budget---</option>
                                    <option value={'Less than $5000'}>Less than $5000</option>
                                    <option value={'$5000 - $10000'}>$5000 - $10000</option>
                                    <option value={'$10000 - $50000'} >$10000 - $50000</option>
                                    <option value={'More than $50000'}>More than $50000</option>
                                </select>
                            </div> */}
                <button type="submit" className="submitbtnemail">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <ToastContainer />
          <div className="row bottomfixed footeremail">
            <div className="col-md-7 vertical-center">
              <div className="footernumber">
                © Dubai - 00971 5515 87909 | Pakistan - 0092 333 5790555
              </div>
              <div className="footernumbermob">
                © Dubai - 00971 5515 87909 |<br /> Pakistan - 0092 333 5790555
              </div>
            </div>
            <div className="col-md-5">
              <div className="footernumber footercopywright">
                © ConstantinePr .2023
              </div>
            </div>
          </div>
        </div>
      </section>
    </m.div>
  );
};
export default Email;
