import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Aboutmore = () => {
    useEffect(() => {
        var elem = document.getElementById("aboutMorevideo");
        openFullscreen(elem);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#boxContainerParent",
                start: 'center 50%',
                pin: true,
                end: '+=1000px',
                pinSpacing: true,
                scrub: true,
                endTrigger: "#boxContainerParent",
                markers: false,
                // anticipatePin: 1,
            },
        });
        tl.add('start')
        tl.from("boxContainer", {
            xPercent: 0,
            yPercent: 0,
        }, 'start')
        tl.fromTo(".boxContainerchild", {
            xPercent: 0,
            yPercent: 0,
        },
            {
                xPercent: -80,
                yPercent: 0,
                ease: 'none',
                duration: 4
            }, 'start');

        tl.fromTo(".aboutvideo", { scale: 0.3, autoAlpha: 0.5 }, { scale: 1, duration: 4, autoAlpha: 1 }, 'start');
        tl.to(".boxContainer", {
            xPercent: 80,
            yPercent: 0,
            ease: 'none',
            duration: 4,
            // autoAlpha: 0
        }, 'start')
    }, [])

    let openFullscreen = (elem) => {
        // console.log(elem)
        // if (elem.requestFullscreen) {
        //     elem.requestFullscreen();
        // } else if (elem.webkitRequestFullscreen) { /* Safari */
        //     elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) { /* IE11 */
        //     elem.msRequestFullscreen();
        // }
    }
    return (
        <>
            <section id="boxContainerParent">
                {/* <div className='aboutheadindtest'>About More</div> */}
                <div id="aboutvideo" onClick={openFullscreen}>
                    <video autoPlay loop muted playsInline className="aboutvideo" id="aboutMorevideo">
                        <source src={'./assets/videos/cpr.mp4'} type="video/mp4" />
                    </video>
                    {/* <img className="aboutvideo" src={'./assets/images/about.webp'} alt="Card image cap" /> */}
                    <div className="testcntainer">
                        <div className="boxes">

                            <div className="boxContainer" id="">
                                <h1>Play</h1>
                            </div>

                            <div className="boxContainerchild" id="">
                                <h1>Reel</h1>
                            </div>
                        </div>
                    </div>
                    {/* <p className='aboutreelpara'>
                        Our lens captures the right moments!
                    </p> */}
                </div>
            </section>
        </>
    )
}
