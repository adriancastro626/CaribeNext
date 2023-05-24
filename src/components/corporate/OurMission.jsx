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
          <p className="large" style={{textAlign: 'justify'}}>
          We have a High-Level Team Committed to Satisfying Our Business Vision.
          </p>
          <p style={{textAlign: 'justify'}}>
          We develop and manage hotel investments of superior
           standards in a sustainable, profitable manner and with a high-level team.
           <br />
           Globalization has proven to be a challenge for Latin America and the Caribbean,
           this phenomenon means an increase in trade in the region and the rest of the world.
           <br/>
           As a consequence, there is a demand for high-quality products and services. This is especially reflected in the challenge
           of providing hotel infrastructure that can be adapted to the profile of each traveler.
          </p>
                  
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-5 col-xl-4" >
        <div className="about_thumb" style={{ width: "100%", height: "100%", position: "relative", borderRadius: "0%" }}>
          <Image
            className="img-fluid w100"
            src="/assets/images/corporate/1.jpg"
            alt="Fairfield Alajuela"
            width={500}
            height={400}
            
          />
          {/* <PopupVideo /> */}
        </div>
      </div>
    </>
  );
};

export default OurMission;
