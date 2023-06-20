import React,{useEffect} from "react";
import OwlCarousel from "react-owl-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

export const Testimonials = () => {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <>
      <div className="container-fluid padtop10 testimonials" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" >
       <h1>See What Our Existing Clients Say!</h1>
        <div className="row">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            dots={false}
            items={1}
            smartSpeed={1500}
          >
            <div class="item">
              <div className="testimonialcard">
                <div className="review">
                  <h1>
                    “We’ve been working with Constantine PR for more than a decade now ... they’ve really helped us build our brand. They’ve done extensive digital work, and we’ve launched a lot of brands with them. Our identity has been set throughout the years with our partnership with Constantine. They’ve got a very good creative team that helps us do a good job.”
                  </h1>
                </div>
                <div className="clientdetail">
                  <div className="clientimage">
                    <img
                      className="underneath"
                      src={"./assets/images/ilyas.jpg"}
                      alt="clientimage"
                    />
                  </div>
                  <div className="clientname">
                    <h4>Sajid Ilyas</h4>
                    <h4>Deputy Chief Executive, Bahria Town</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="testimonialcard">
                <div className="review">
                  <h1>
                    “Outstanding professionalism was shown by Constantine during their event with us … Najaf and his team performed brilliantly well under pressure and catered to our every demand to make the event a huge success. ”
                  </h1>
                </div>
                <div className="clientdetail">
                  <div className="clientimage">
                    <img
                      className="underneath"
                      src={"./assets/images/asad.jpg"}
                      alt="clientimage"
                    />
                  </div>
                  <div className="clientname">
                    <h4>Asad Kamal</h4>
                    <h4>CEO, GIDS (Global Industrial Defence Solutions)</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="testimonialcard">
                <div className="review">
                  <h1>
                    “Constantine PR has played a pivotal role in building our digital profile and conducting general PR activities for us over the past couple of years. Their team, especially the top management Najaf and Aiesha, always give ‘out of the box’ input, which really helps us build our profile. ”
                  </h1>
                </div>
                <div className="clientdetail">
                  <div className="clientimage">
                    <img
                      className="underneath"
                      src={"./assets/images/hamzakiyani.jpg"}
                      alt="clientimage"
                    />
                  </div>
                  <div className="clientname">
                    <h4>Hamza Kiyani</h4>
                    <h4>COO, Medikay Cardiac Centre</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="item">
              <div className="testimonialcard">
                <div className="review">
                  <h1>
                    “I have spine tingles. It's amazing to see our strategy come
                    together into such a cohesive and inspiring narrative.”
                  </h1>
                </div>
                <div className="clientdetail">
                  <div className="clientimage">
                    <img
                      className="underneath"
                      src={"./assets/images/MFC.png"}
                      alt="clientimage"
                    />
                  </div>
                  <div className="clientname">
                    <h4>Camilla Cornwell</h4>
                    <h4>Brand Designer, GoodNotes</h4>
                  </div>
                </div>
              </div>
            </div> */}
          </OwlCarousel>
          ;
        </div>
      </div>
    </>
  );
};
