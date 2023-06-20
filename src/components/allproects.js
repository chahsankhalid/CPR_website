import React,{ useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AllProjects = () => {
    useEffect(() => {
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#allimagesparent",
                start: 'top top',
                pin: false,
                end: '+=1000px',
                pinSpacing: false,
                scrub: true,
                endTrigger: "#allimagesparent",
                markers: false,
                anticipatePin: 1,
            },
        });
        tl1.add('startallparent')
        tl1.fromTo(".allvideo1", { xPercent: 0, yPercent: 0 }, { xPercent: -80, yPercent: -30, ease: 'none', duration: 2}, 'startallparent');
        // tl1.fromTo(".allimg3", { xPercent: 0, yPercent: 0 }, { xPercent: 80, yPercent: 30, ease: 'none', duration: 2}, 'startallparent');
        tl1.from(".allimg3", {
            xPercent: 0, yPercent: 0
        }, 'start')

        tl1.to(".allimg3", {
            xPercent: 80, yPercent: 30, ease: 'none', duration: 2
        }, 'startallparent')

        tl1.from(".allimg1", {
            xPercent: 0, yPercent: 0
        }, 'start')

        tl1.to(".allimg1", {
            xPercent: -80, yPercent: 30, ease: 'none', duration: 2
        }, 'startallparent')
        tl1.fromTo(".allvideo2", { xPercent: 0, yPercent: 0 }, { xPercent: 80, yPercent: 30, ease: 'none', duration: 2}, 'startallparent');
    },[])
  return (
    <>
          <section id="allimagesparent">
                <div className='allimages'>
                    <video autoPlay loop muted playsInline className="allvideo1">
                        <source src={'./assets/videos/bigo.mp4'} type="video/mp4" />
                    </video>
                    <img className="allimg2" src={'./assets/images/RMS 2.png'} alt="Card cap" />
                    <img className="allimg3" src={'./assets/images/Medikay.png'} alt="Card cap" />
                    <img className="allimg1" src={'./assets/images/Body Shop.png'} alt="Card cap" />
                    <video autoPlay loop muted playsInline className="allvideo2">
                        <source src={'./assets/videos/slaughter.mp4'} type="video/mp4" />
                    </video>
                </div>
            </section>
    </>
  )
}

export default AllProjects