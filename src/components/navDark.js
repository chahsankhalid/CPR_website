import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { HashLink as Link } from 'react-router-hash-link'
import Offcanvas from 'react-bootstrap/Offcanvas'

const Navdark = () => {
    const hidenav = () => {
        document.body.style.overflow = 'visible'
        const check = document.querySelector('.offcanvas')
        check.style.opacity = 0
        check.style.zIndex = -1
      }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navemail">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={'./assets/images/©.png'} className="logomain" alt="logo" />
            </Navbar.Brand>
            <Navbar.Brand href="/">
              <img src={'./assets/images/cpr_ico_white.png'} className="logomain1" alt="logo" />
            </Navbar.Brand>
            <Link to="/contact" className="talkbtntocontact">
              <Button variant="outline-secondary" className="talkbtnemail">
                Let's Talk
              </Button>{' '}
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <span className="navbar-toggler-icon1email"></span>
              <span className="navbar-toggler-icon2email"></span>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="">
                  <div className="container">
                    <div className="col-sm-5 float-start mobnavsocialicon">
                      <div className="c">C /</div>
                      <div className="navsocial">
                        <a href="https://www.facebook.com/constantineprandcommunications/" className="">
                          Facebook
                        </a>
                        <a href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y=" className="">
                          Instagram
                        </a>
                        {/* <a href="" className="">Twitter</a> */}
                        <a href="https://www.linkedin.com/company/constantine-pr-communications/" className="">
                          Linkedin
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-5 offset-sm-2 float-end">
                      <ul>
                        <li>
                          <a onClick={hidenav} className="nav-link" smooth={true} href="/">
                            <span>Home</span>
                          </a>
                        </li>
                        <li onClick={hidenav}>
                          <a data-cursor-stick className="nav-link" smooth={true} href="/work">
                            <span>Work</span>
                          </a>
                        </li>
                        <li>
                          <a onClick={hidenav} className="nav-link" smooth={true} href="/about-us">
                            <span>About</span>
                          </a>
                        </li>
                        <li>
                          <a onClick={hidenav} className="nav-link" smooth={true} href="/blogs">
                            <span>Blogs</span>
                          </a>
                        </li>
                        <li>
                          <a onClick={hidenav} className="nav-link" smooth={true} href="/careers">
                            <span>Careers</span>
                          </a>
                        </li>
                        <li>
                          <a onClick={hidenav} className="nav-link" smooth={true} href="/contact">
                            <span>Contact</span>
                          </a>
                        </li>
                      </ul>
                      <div className="navsocialmob">
                        <a href="https://www.facebook.com/constantineprandcommunications/" className="">
                          Facebook
                        </a>
                        <a href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y=" className="">
                          Instagram
                        </a>
                        {/* <a href="" className="">Twitter</a> */}
                        <a href="https://www.linkedin.com/company/constantine-pr-communications/" className="">
                          Linkedin
                        </a>
                      </div>
                    </div>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navdark
