import React from 'react';
import video from '../videos/Moreno Video Eent.mp4';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const InitDrone = () => {
    const shouldLock = useRef(true);

    useEffect(() => {

        let camera, scene, renderer;
        let w, h;
        let container = document.getElementById('droneSection');
        let test = document.getElementById('test');

        if (shouldLock.current) {
            shouldLock.current = false;
            console.log(container);
            function init() {
                renderer = new THREE.WebGLRenderer({ antialias: true });
                w = container.offsetWidth;
                h = container.offsetHeight;
                renderer.setSize(w, h);
                renderer.setAnimationLoop(animation);
                renderer.setClearColor(0x000000, 1);

                console.log(renderer.domElement);
                container.appendChild(renderer.domElement);

                window.addEventListener('resize', () => {

                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h);
                })

                camera = new THREE.PerspectiveCamera(70, w / h, 0.01, 10);
                camera.position.z = 5;
                camera.rotation.z = 1;

                scene = new THREE.Scene();

                const loader = new GLTFLoader();

                const light = new THREE.AmbientLight(0xffffff, 2);
                scene.add(light);
                loader.load("/models/scene.gltf", (gltf) => {
                    let models = gltf.scene;
                    models.scale.set(.45, .45, .45);

                    gsap.to(camera.position, {
                        z: 1,
                        duration: 1,
                        ease: "back.out(1.7)"
                    })
                    gsap.to(camera.rotation, {
                        z: 0,
                        duration: 1,
                    })

                    gsap.to(models.rotation, {
                        x: 1,
                        duration: 1,
                        delay: 1,
                        scrollTrigger: {
                            trigger: '#droneSection'
                        }
                    })
                    gsap.to(models.rotation, {
                        y: Math.PI * 1.75,
                        duration: 2,
                        delay: 1,
                        scrollTrigger: {
                            trigger: '#droneSection'
                        }
                    })

                    gsap.to(models.scale, {
                        delay: 1,
                        duration: 1,
                        x: .25,
                        y: .25,
                        z: .25,
                        scrollTrigger: {
                            trigger: '#droneSection'
                        }
                    })

                    gsap.to(models.position, {
                        delay: 1,
                        duration: 1,
                        x: .35,
                        y: .3
                    })
                    // gsap.to(models.rotation, {
                    //     delay: 1,
                    //     duration: 1,
                    //     x: .35,
                    //     y: .3,
                    //     scrollTrigger: {
                    //         trigger: '#droneSection'
                    //     }
                    // })

                    gsap.to(models.rotation, {
                        duration: 10,
                        y: Math.PI * 6,
                        repeat: -1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: '#droneSection'
                        }
                    })

                    // gsap.to(camera.position, {
                    //     y: -0.5,
                    //     duration: 0,
                    //     // delay: 2,
                    //     scrollTrigger: {
                    //         trigger: '#droneSection'
                    //     }
                    // })
                    scene.add(models);
                });


            }
            function animation() {
                renderer.render(scene, camera);
            }
            init();
            animation();
        }

    }, [])



    return (
        <>
            <section id='droneSection' ref={shouldLock}>
                {/* <div className="container"> */}
                {/* <div className="row"> */}
                {/* <div className="col-md-6 floatleft "> */}

                {/* </div> */}

                {/* <div className="col-md-6 floatleft relative dronediv" id="test"> */}
                {/* <video className="back-video" loop autoPlay muted >
                                <source src={video} type="video/mp4" />
                            </video>
                            <img src={'./assets/images/shadow.png'} alt="" className="shadow" /> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}

            </section>
        </>
    )
}

export default InitDrone