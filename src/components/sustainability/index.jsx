
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";

import BreadCrumbBanner from "./BreadCrumbBanner";

import OurMission from "./OurMission";
import TabDetailsContent from "./TabDetailsContent";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      {/* <PopupSignInUp /> */}

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- About Text Content --> */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-0">
              <div className="main-title text-left">
                <h2 className="mt0">Sustainability</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <OurMission />
          </div>
          <div className="shop_single_tab_content style2 mt30">
              <TabDetailsContent/>
          </div>
          {/* End .row */}

         
    
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
