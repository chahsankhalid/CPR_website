import React, { useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const SliderScroll = () => {
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#circle",
                markers: false,
                // anticipatePin: 1,
            },
        });
        tl.add('start')
        tl.fromTo("#circle", {
           borderRadius: '0%',
        },
            {
               borderRadius: '50%',
                ease: 'none',
                duration: 1
            },'start');
    }, [])
    return (
        <div>
            <div className='container circlecontainer'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='radial-overlay'>
                            <img className="underneath" src={'./assets/images/MFC.png'} alt="" />
                            <div class="overlaytest"></div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <video autoPlay loop muted playsInline className="back-video">
                            <source src={'./assets/videos/quoteleads.mp4'} type="video/mp4" />
                        </video>
                    </div>
                        <div id="circle"></div>
                </div>
            </div>
        </div>
    )
}
