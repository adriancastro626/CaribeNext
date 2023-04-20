const WhyChoose = ({ style = "" }) => {
  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Values",
      descriptions: `•We do more and better with less
      •Committed to growth
      •Teamwork
      •Responsibility`,
    },
    {
      id: 2,
      icon: "flaticon-user-1",
      title: "Mission",
      descriptions: `Develop and manage hotel investments of superior standards in a sustainable,
       profitable manner and with a high-level team.`,
    },
    {
      id: 3,
      icon: "flaticon-view",
      title: "Vision",
      descriptions: `To be the leading developer at the regional level of 
      the best and most prestigious brands of hotel chains.`,
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
