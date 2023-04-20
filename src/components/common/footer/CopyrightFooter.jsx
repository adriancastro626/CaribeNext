import Link from "next/link";

const CopyrightFooter = () => {
  const menuItems = [
    { id: 1, name: "Home", routeLink: "/" },
    { id: 2, name: "Listing", routeLink: "/listing-grid-v3" },
    { id: 3, name: "Property", routeLink: "/listing-grid-v4" },
    { id: 4, name: "About Us", routeLink: "/about-us" },
    { id: 5, name: "Blog", routeLink: "/blog-list-3" },
    { id: 6, name: "Contact", routeLink: "/contact" },
  ];

  return (
    <div className="column">
      {/* <div className="col-lg-6 col-xl-6">
        <div className="footer_menu_widget">
        <p>
            &copy; {new Date().getFullYear()} {" "}
            <a
              href="https://bluesat.cr"
              target="_blank"
              rel="noreferrer"
            >
              .
            </a>
             All rights reserved.
          </p> */}
          {/* <ul>
            {menuItems.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <Link href={item.routeLink}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul> */}
        {/* </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-6"> */}
      <div className="">
        <div className="copyright-widget ">
          <p>
            &copy; {new Date().getFullYear()} {" "}
            <a
              href="https://bluesat.cr"
              target="_blank"
              rel="noreferrer"
            >
              .
            </a>
             All rights reserved.
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
