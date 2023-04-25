import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import Image from "next/image";

const FeaturedProperties = () => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {properties.slice(0, 12).map((item) => (
          <div className="item" key={item.id}>
            <div className="feat_property home3">
              <div className="thumb">
                <Image className="img-whp" src={item.img} alt="fp1.jpg" width={500} height={400} />
                <div className="thmb_cntnt">
                 




                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4>
                    {/* <Link href={`/listing-details-v1/${item.id}`}> */}
                    <Link href={`${item.url}`} target='_blank'>
                    {/* <Link href={`#`}> */}
                      {item.title}
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {item.location}
                  </p>

                  <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <p href='#'>
                          {val.name}: {val.number}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
