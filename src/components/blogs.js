import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Button from 'react-bootstrap/Button';
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <>
            <section id="news" className="pad30">
                <div className="container-fluid">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item news" role="presentation">
                            <h5 className="newsheading">News </h5>
                            <span className="line"></span>
                        </li>
                        <li className="nav-item" role="presentation">
                        {/* <Link to="/blogs" className="talkbtntocontact"><Button variant="outline-secondary" className="talkbtn">All</Button>{' '}</Link> */}
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Press</button>
                        </li>
                         <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Events</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#talks" type="button" role="tab" aria-controls="contact" aria-selected="false">Talks</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#everythingelse" type="button" role="tab" aria-controls="contact" aria-selected="false">Everything Else</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4" data-aos="fade-up">
                                        <div className="card card-a" data-lag="0.5">
                                            <img effect="blur" className="card-img-top" src={'./assets/images/MFC.png'} alt="Card image cap" />
                                            <div className="card-body">
                                                <h3 className="card-title hover-1">PMIC Rebranding</h3>
                                                <h5 className="card-text">In today's competitive market, it’s hard to retain corporate clients, as they say. But if you’re a client working with Constantine, you’ll be impressed every day! PMIC is one such example.<br/><br/>Assisted by an in-house team of top corporate branding and design professionals, we have been providing Social Media & PR services to PMIC.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" data-aos="fade-up">
                                        <div className="card card-b" data-lag="0.3">
                                            <img effect="blur" className="card-img-top" src={'./assets/images/avalon.png'} alt="Card image cap" />
                                            <div className="card-body">
                                                <h3 className="card-title hover-1">Launch Event Avalon City</h3>
                                                <h5 className="card-text">Avalon City’s stellar launch event was yet another ‘Mission Complete’ for team Constantine. From theme setting to site arrangements.<br/><br/> We provided all-round event management services for this housing city’s official launch aimed at bringing Avalon City into the limelight!</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" data-aos="fade-up">
                                        <div className="card card-c" data-lag="0.1">
                                            <video autoPlay loop muted playsInline className="back-video">
                                                <source src={'./assets/videos/howdy.mp4'} type="video/mp4" />
                                            </video>
                                            <div className="card-body">
                                                <h3 className="card-title hover-1">Howdy Social Media</h3>
                                                <h5 className="card-text">When Howdy came to us, it was a stranger in Islamabad’s local food market. We devised an effective marketing campaign, and in no time, we were able to create a marvelous market identity for the brand.<br/><br/>Led by our top graphic design professionals, digital and print design services were provided to Howdy.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" data-aos="fade-up">
                                        <div className="card card-c" data-lag="0.5">
                                            <img effect="blur" className="card-img-top" src={'./assets/images/Medikay.png'} alt="Card image cap" />
                                            <div className="card-body">
                                                <h3 className="card-title hover-1">Medikay Social Media</h3>
                                                <h5 className="card-text">Medikay Cardiac Centre, one of the top most credible cardiac hospitals in Pakistan today, was our client from its very beginning.<br/><br/> We took charge of this client’s brand building, creative designing, digital marketing, video production, and all other related aspects.
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" data-aos="fade-up">
                                        <div className="card card-c" data-lag="0.3">
                                            <video autoPlay loop muted playsInline className="back-video">
                                                <source src={'./assets/videos/quoteleads.mp4'} type="video/mp4" />
                                            </video>
                                            <div className="card-body">
                                                <h3 className="card-title hover-1">QuotedLeads Rebranding</h3>
                                                <h5 className="card-text">Our team merges innovation and skills into Constantine PR's vision to design compelling brand identities for every client. Quoted Leads is one such example!<br/><br/>From branding to digital marketing, we provided all-round creative and social media management services to this client.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" data-aos="fade-up">
                                        <div className="card card-c" data-lag="0.1">
                                            <img effect="blur" className="card-img-top" src={'./assets/images/morenocard.png'} alt="Card image cap" />
                                            <div className="card-body">
                                                <h3 className="card-title hover-1">Moreno Enclave Branding</h3>
                                                <h5 className="card-text">At Constantine, we master the art of giving raw ideas a prestigious market identity and creating appeal. <br/><br/>This is what we did for Moreno Holdings. From logo designing to creative services, and event management, we did it all for this client!s</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" data-aos="fade-up">
                                        <div className="card card-c" data-lag="0.5">
                                            <video autoPlay loop muted playsInline className="back-video ">
                                                <source src={'./assets/videos/Pubg.mp4'} type="video/mp4" />
                                            </video>
                                            <div className="card-body">
                                                <h3 className="card-title hover-1">PUBG Mobile Social Media</h3>
                                                <h5 className="card-text">The world’s highest-grossing and immensely popular gaming platform trusted us for its Social Media Management. <br/><br/>We provided Creative Designing and Copywriting services for PUBG’s social media accounts in Pakistan.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" data-aos="fade-up">
                                        <div className="card card-c" data-lag="0.3">
                                            <img effect="blur" className="card-img-top" src={'./assets/images/RMS.png'} alt="Card image cap" />
                                            <div className="card-body">
                                                <h3 className="card-title hover-1">RMS Global Rebranding</h3>
                                                <h5 className="card-text">RMS Global Corp. is one of our long-standing clients. We have provided creative branding, lead gen, digital marketing, and social media management services to this client.<br/><br/>For years, we have been working closely with multinational clients from different industry verticals, boosting their growth and helping them achieve the desired sales and marketing market objectives.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" data-aos="fade-up">
                                        <div className="card card-c" data-lag="0.3">
                                            <img effect="blur" className="card-img-top" src={'./assets/images/Honey Buns.jpg'} alt="Card image cap" />
                                            <div className="card-body">
                                                <h3 className="card-title hover-1">HoneyMunch Designing</h3>
                                                <h5 className="card-text">Designing captivating brand identities is an art that we master! Honey Munch is one such example of our team’s phenomenal branding skills.<br/><br/>This brand was nothing but an idea when the client contacted us, and we conceptualized and designed its entire visual and market identity from scratch.</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;