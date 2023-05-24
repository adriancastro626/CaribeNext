import BreadCrumb from "../common/BreadCrumb";

const BreadBanner = () => {
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb title="Executive Team" />
              <h4 className="breadcrumb_title">Executive Team</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadBanner;
