import Image from "next/image";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-next",
      number: "80,123",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-next",
      number: "$74 Billion",
      meta: "In home sales",
    },
    {
      id: 3,
      icon: "flaticon-next",
      number: "$468 Million",
      meta: "In Savings",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
          Caribe Hospitality was born with the objective of developing hotels that are managed by prestigious hotel brands.
          <p>Our business process begins by selecting strategic locations, to build spaces that are designed and adjusted to meet the needs of the traveler.</p>
          </p>
          <h2>Development Strategy</h2>
          <p className="large">
          Given its reputation as a prestigious hotel developer, renowned international financial institutions have partnered with Caribe Hospitality signing master financing agreements; in 2007 with the International Finance Corporation (IFC), and in 2009 with the Inter-American Development Bank (IDB).
          </p>
          <p>As a result of these relationships, new growth opportunities have materialized.</p>
         

         
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            className="img-fluid w100"
            src="assets/images/corporate/1.jpg"
            alt="1.jpg"
          />
          {/* <PopupVideo /> */}
        </div>
      </div>
    </>
  );
};

export default OurMission;
