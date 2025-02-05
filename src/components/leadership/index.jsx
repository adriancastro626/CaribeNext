import Team from "../about-us/Team";

import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";

import BreadCrumbBanner from "./BreadCrumbBanner";


const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- Our Contact --> */}
      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h3 className="mb5">Edgar Zurcher</h3>
                <h4 className="mb5">President</h4>
                <p style={{textAlign: 'justify'}}>
                Mr. Zurcher is the President and Founding Partner of Caribe Hospitality. He is a corporate lawyer and a Costa Rican entrepreneur with more than 35 years of experience, member of Boards of Directors and Partner of many other industrial and commercial companies in Central America.
                </p>
                {/* <Form /> */}
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              {/* <AddressSidebar /> */}
            </div>

          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

      </section>

      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h3 className="mb5">Daniel Campos</h3>
                <h4 className="mb5">Managing Director</h4>
                <p style={{textAlign: 'justify'}}>
                Mr. Campos has been the General Director of Caribe Hospitality since the company began in 2000, at which time an exclusivity agreement was signed with Marriott for the development of several Courtyard by Marriott brand hotels in Central America and the Caribbean. Since the companys inception, Mr. Campos has led its growth, incorporating new markets and properties into the project portfolio, including the first Residence Inn Hotel to be built in Latin America and the first Fairfield Inn in Central America. Industrial Engineer from the University of Costa Rica, he has a Masters Degree in Business Administration from the Catholic University of Chile and the Kenan Flager School of Business at the University of North Carolina, United States.
                </p>
                {/* <Form /> */}
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              {/* <AddressSidebar /> */}
            </div>

          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

      </section>


      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h3 className="mb5">John Keith</h3>
                <h4 className="mb5">Director</h4>
                <p style={{textAlign: 'justify'}}>
                Mr. Keith is the Managing Partner of Caribe Hospitality. He is an economist with more than 25 years of experience in private banking in Costa Rica and Central America. He has been involved in the founding of various companies in the region as Director and Member of Boards of Directors.
                </p>
                {/* <Form /> */}
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              {/* <AddressSidebar /> */}
            </div>

          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

      </section>

      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h3 className="mb5">Ramiro Ortiz</h3>
                <h4 className="mb5">Director</h4>
                <p style={{textAlign: 'justify'}}>
                Mr. Ortíz is a Partner of Caribe Hospitality. He is an agricultural economist with more than 40 years of experience in private banking. Mr. Ortíz is also a director of agribusiness firms, banks, and trading companies throughout Central America and the Caribbean.
                </p>
                {/* <Form /> */}
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              {/* <AddressSidebar /> */}
            </div>

          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

      </section>

      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h3 className="mb5">Mario Rappaccioli</h3>
                <h4 className="mb5">Director</h4>
                <p style={{textAlign: 'justify'}}>
                Mr. Rappaccioli is a Partner at Caribe Hospitality. He is an industrial engineer and economist with more than 30 years of experience in agribusiness, banking, and wholesale and retail companies. Mr. Rappaccioli is a Director and member of the Board of Directors of several companies in the region.
                </p>
                {/* <Form /> */}
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              {/* <AddressSidebar /> */}
            </div>

          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

      </section>

     
      <section className="our-contact pb0 bgc-f7">
        

      </section>

      {/* <div className="row">
            <div className="col-lg-12">
              <div className="team_slider gutter-x15">
                <Team/>
              </div>
            </div>
      </div> */}

    

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
