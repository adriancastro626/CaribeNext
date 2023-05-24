import Team from "../about-us/Team";

import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";

import BreadBanner from "../executiveteam/BreadBanner";


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
      <BreadBanner />

      {/* <!-- Our Contact --> */}
      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h3 className="mb5">Bernabé Lopéz</h3>
                <h4 className="mb5">Director of Development</h4>
                <p style={{textAlign: 'justify'}}>
                Bernabé López is Director of Development for Caribe Hospitality. He was previously part of Portafolio Inmobiliario, one of the main real estate development companies in Costa Rica, and a sister company to Caribe. At Caribe Hospitality, Mr. López is responsible for managing the development process of new hotels, including aspects related to feasibility, conceptual planning, negotiation with operators, joint ventures, and financing. Mr. López has 16 years of experience in the planning, marketing, financing, and operation of hotel, office, and commercial projects. He additionally has extensive experience in financial positions at the management level. Mr. López earned his BA in Economics from the University of Costa Rica and his MBA from the Stanford University School of Business.
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
                <h3 className="mb5">Nayarith Pérez</h3>
                <h4 className="mb5">Asset Management Director</h4>
                <p style={{textAlign: 'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias dolorum nobis magnam unde ipsum blanditiis, temporibus voluptatum, repellat dolor vitae? Ex blanditiis molestias iste tempora voluptatum, eveniet quam tempore.
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
                <h3 className="mb5">Jesus Sucre</h3>
                <h4 className="mb5">Chief Financial Officer</h4>
                <p style={{textAlign: 'justify'}}>
                Jesús Sucre, with more than 10 years of experience in Caribe Hospitality, has developed his career with the group in various areas as Development Manager and Director of Treasury and Investments; different challenges that gave way to his current role as Financial Director of the group. As Financial Director, Mr. Sucre plays a key role in defining the financial strategy of the group and in all its areas such as: controllership, accounting, treasury, financial analysis, information systems and strategic planning of the companies belonging to the Caribbean Hospitality group. He is a Business Administrator from Newberry College in South Carolina, United States . He has a Master's Degree in Business Administration from the “Instituto de Estudios Bursátiles” in Madrid, Spain and a Master's Degree in International Business from the “Pompeu Fabra University” in Barcelona, ​​Spain.
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
                <h3 className="mb5">Diego Valerio</h3>
                <h4 className="mb5">Project Director</h4>
                <p style={{textAlign: 'justify'}}>
                Mr. Valerio is responsible for coordinating the design, construction, furnishing and start-up of the hotels developed by the company in the region. With more than 15 years of experience in design, construction and project management, he has been part of the Caribe Hospitality team since 2016; in his beginnings as a Project Engineer. Since 2019 he assumed the Project Management. He is a Civil Engineer from the University of Costa Rica, with a Master's Degree in Project Management from the University for International Cooperation, a Master's Degree in Business Administration from the Technological Institute of Costa Rica and certified as Senior Project Manager Level B by the International Project  Management Association .
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
