
import MobileMenu from "../common/header/MobileMenu";

import Header from "./Header";
import HeroSlider from "./HeroSlider";

import WhyChoose from "../common/WhyChoose";



import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import PopupSignInUp from "../common/PopupSignInUp";
import OurMission from "../about-us/OurMission";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- 4th Home Slider --> */}
      <div className="home-four ">
        <div className="container-fluid p0">
          <div className="main-banner-wrapper">
            <div className="arrow-style-2 banner-style-one ">
              <HeroSlider />
            </div>
          </div>
          {/* <!-- /.main-banner-wrapper --> */}
        </div>
        {/* End .container-fluid */}

        <div className="container home_iconbox_container">
          <div className="row posr">
            <div className="col-lg-12">
              <div className="home_content home4">
                <div className="home-text text-center">
                  <h2 className="fz55">Caribe Hospitality</h2>
                  <p className="fz18 color-white" >
                  We bring Development and Sustainable Economic Growth to Different Countries in the Region
                  </p>
                </div>
                {/* <GlobalHeroFilter className="home4" /> */}
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <h4 className="text-center color-white fw600 mb25 mb0-520">
                What are you looking for?
              </h4>
              <ul className="home4_iconbox mb0">
                <LookingItem />
              </ul>
            </div>
          </div> */}
        </div>
      </div>

      {/* <!-- Property Cities --> */}
      {/* <section id="best-property" className="best-property bgc-f7">
        <div className="container ovh">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Featured Properties</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="best_property_slider gutter-x15">
                <FeaturedProperties />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Property Cities --> */}
      {/* <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Properties in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <FindProperties />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Blog --> */}
      {/* <section className="our-blog bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Team --> */}
      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>About Us</h2>
                <p>We have Developed 14 hotels in 6 countries</p>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="team_slider gutter-x15">
                <Team />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="mt0">Sustainability Policy</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <OurMission/>
          </div>
          </div>

        </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
