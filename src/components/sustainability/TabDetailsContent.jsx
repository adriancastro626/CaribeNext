// import Team from "../agent-view/agent-v2/Team";
// import Comments from "../blog-details/Comments";
// import Ratings from "../blog-details/Ratings";
// import ReviewBox from "../blog-details/ReviewBox";
// import DescriptionsText from "./DescriptionsText";
// import Listings from "./Listings";
import Certifications from "./Certifications";
import Leadership from "./Leadership";
import Management from "./Management";
import Model from "./Model";

const TabDetailsContent = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#model"
            role="tab"
            aria-controls="model"
            aria-selected="true"
          >
            Model
          </a>
        </li>
        {/* End Description tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#certifications"
            role="tab"
            aria-controls="certifications"
            aria-selected="false"
          >
            Certifications
          </a>
        </li>
        {/* End Listing tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#management"
            role="tab"
            aria-controls="management"
            aria-selected="false"
          >
            Management
          </a>
        </li>
        {/* End Listing tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#leadership"
            role="tab"
            aria-controls="leadership"
            aria-selected="false"
          >
            Leadership
          </a>
        </li>
        {/* End Reviews tab */}
      </ul>
      {/* End .nav nav-tabs */}

      <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="model"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
      
                  <Model />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Description details content*/}

        <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="certifications"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
      
                  <Certifications />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="management"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
      
                  <Management/>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="leadership"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
      
                  <Leadership />
                </div>
              </div>
            </div>
          </div>
        </div>
     
        {/* End Description details content*/}


     
           
        
        {/* End Reviews details content*/}
      </div>
      </div>
      </div>
      </div>
      {/* End tab-content */}
    </>
  );
};

export default TabDetailsContent;
