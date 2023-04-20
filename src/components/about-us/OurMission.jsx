import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-next",
      number: "ISO ",
      meta: "14001",
    },
    {
      id: 2,
      icon: "flaticon-next",
      number: "ISO ",
      meta: "50001",
    },
    {
      id: 3,
      icon: "flaticon-next",
      number: "CST",
      meta: "Certification",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
          Caribe Hospitality is committed to developing hotel assets that operate
           profitably in accordance with applicable legal,
           financial, environmental, energy and other requirements.
          </p>
          <p>
          We are committed to the continuous improvement of our business processes, 
          to environmental and energy performance, and to our Sustainability and Energy 
          Management Systems. Caribe Hospitality is specifically committed to:
          </p>
          <p>
          <li>Environmental protection and pollution prevention.</li>

          <li>Establish environmental and energy objectives and goals for the SGS and SGE, as well as their respective review for the improvement of environmental and energy performance.</li>

          <li>Ensure the availability of updated information and the necessary resources to meet the objectives and goals.</li>

          <li>Support the activities of design and acquisition of energy efficient products, processes, facilities, equipment and services, which consider and impact environmental and energy performance.</li>
          </p>

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <img
            className="img-fluid w100"
            src="assets/images/about/2.webp"
            alt="1.jpg"
          />
          {/* <PopupVideo /> */}
        </div>
      </div>
    </>
  );
};

export default OurMission;
