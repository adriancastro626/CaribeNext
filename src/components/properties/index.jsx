import MobileMenu from "../common/header/MobileMenu";
import Header from "../common/header/DefaultHeader";
import FeaturedProperties from "../home/FeaturedProperties";

import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import PopupSignInUp from "../common/PopupSignInUp";


const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Map --> */}
      <section className="home-two p0 mt85 md-mt0">
        <div className="home_two_map">
          <div className="gmap_canvas">
            <iframe
              title="map"
              className="gmap_iframe"
              src="https://www.google.com/maps/d/embed?mid=1-Ve7JyvJQF0nMM9dm7tlpNs72OlSxyc&ehbc=2E312F"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <!-- Latest Properties For Sell --> */}
      {/* <Hero /> */}

      {/* <!-- Latest Properties For Rent --> */}
      <section className="latest-property">
        <div className="container ovh">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Our Properties</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit mollitia quos voluptatem necessitatibus</p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProperties />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container .ovh */}
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
