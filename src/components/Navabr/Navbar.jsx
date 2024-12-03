import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Column, Row } from "../ComponentsIndex";
import OffCanvas from "./Drawer";
import { useNavigate } from "react-router-dom";
import DownArrow from "../../assets/Images/down-arrow-menu.svg";
import { Logo, s1, s2, s3, s4, s5, s6, s7, s8, s9 } from "../Img/ImportedImage"; // Add the icons import

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    navigate("/login");
  };

  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    1: false,
    4: false,
    5: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar
  const [titleName, setTitleName] = useState(""); // State for the dynamic page title

  // Check if the current path is /disclaimer or /privacy-policy
  const shouldHideRow =
    location.pathname === "/disclaimer" ||
    location.pathname === "/privacy_policy" ||
    location.pathname === "/privacy_policy" || 
    location.pathname === "/copyright";

  // if (shouldHideRow) {copyright
  //   return null; // Do not render if on Disclaimer or Privacy Policy page
  // }

  // Detect scroll to toggle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set the page title based on the current path
  useEffect(() => {
    const path = location.pathname;
    let title = "";

    switch (path) {
      case "/":
        title = ""; // For the home page, set title as empty
        break;
      case "/cost-and-value-philosophy":
        title = "Cost and Value Philosophy";
        break;
      case "/article-business-cases-background":
        title = "Article & Business Cases";
        break;
      case "/the-story-of-powerabode":
        title = "About Us & Themes";
        break;
      case "/success-formula-disruptive-and-controlled":
        title = "Capex/Opex Program";
        break;
      case "/supply-chain-by-sla":
        title = "Supply Chain by SLA";
        break;
      case "/post-award-contract-management":
        title = "Post Award Contract Management";
        break;
      case "/category-strategy":
        title = "Category Strategy Contract Strategy";
        break;
      case "/commercial-assurance":
        title = "Commercial Assurance";
        break;
      case "/cost-recovery":
        title = "Cost Recovery";
        break;
      case "/tendering-outsourcing":
        title = "Tendering & Outsourcing";
        break;
      case "/materials-management":
        title = "Materials Management";
        break;
      case "/codex-supply-chain":
        title = "Codex Supply Chain";
        break;
      case "/cm-for-contract":
        title = "CM+";
        break;
      case "/skillset-development":
        title = "Skillset Development";
        break;
      case "/ai-ecosystem":
        title = "AI Ecosystem";
        break;
      case "/articles-business-cases/sourcing-strategy":
        title = "strategic sourcing";
        break;
      case "/blog-articles-business-cases/Unlocking-value-savings-bottom-line":
        title = "unlocking value";
        break;
      case "/blog-articles-business-cases/drilling-cost-transformationblog":
        title = "drilling  cost transformationblog";
        break;
      case "/blog-articles-business-cases/key-performance-indicators-kpi":
        title = "Conflict or Conflicting KPI’s?";
        break;
      case "/blog-articles-business-cases/Project-management-bottle-necks":
        title = "deliver as planned";
        break;
      case "/blog-articles-business-cases/Solutions-to-influence-cost":
        title = "Hidden in Plain Sight";
        break;
      case "/articles-business-cases/supply-Chain-Procurement-Management-System":
        title = "supply chain management";
        break;
      case "/blog-articles-business-cases/discount-price-reduction":
        title = "focus on rates";
        break;
      case "/blog-articles-business-cases/budget-constraints-delivery":
        title = "deliver despite budget";
        break;
      case "/blog-articles-business-cases/businessplan":
        title = "misalignment with business";
        break;
      case "/blog-articles-business-cases/local-content-development":
        title = "local content development";
        break;
      case "/blog-articles-business-cases/the-art-of-the-deal-outsourcing-supply-chain":
        title = "the art of deal";
        break;
      case "/blog-articles-business-cases/Performance-dna-procurement-supplychain-department":
        title = "procurement department";
        break;
      case "/blog-articles-business-cases/Materials-Management":
        title = "materials management";
        break;
      default:
        title = "";
    }

    setTitleName(title); // Update the title state
  }, [location]);

  const toggleSubmenu = (id, close = false) => {
    setIsSubmenuOpen((prevState) => ({
      ...prevState,
      [id]: close ? false : !prevState[id],
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const menuItems = [
    {
      id: 1,
      name: "Cost and Value Philosophy",
      link: "#",
      title: "Cost and Value Philosophy",
      pra1: "How does the Cost & Value Philosophy Work? We explain in this section. Also on the page with articles and business cases you can study an recognise its application.",
      pra2: "",
      pra3: "",
      submenu: [
        {
          id: 1.1,
          name: "Cost and Value Philosophy",
          link: "/cost-and-value-philosophy",
        },
        {
          id: 1.2,
          name: "Article & Business Cases",
          link: "/article-business-cases-background",
        },
        // { id: 1.2, name: "Blog", link: "/drilling-cost-transformation" },
      ],
    },
    { id: 2, name: "About Us & Themes", link: "/the-story-of-powerabode" },
    {
      id: 3,
      name: "Capex/Opex Program",
      link: "/success-formula-disruptive-and-controlled",
    },
    {
      id: 4,
      name: "Supply Chain by SLA",
      link: "#",
      title: "Supply Chain by Service Level Agreement",
      pra1: "Operations, Maintenance or Production. Even Projects. Supply Chain by SLA provides dozens of services in 6 key areas related to your contracts. They all contribute to cost efficiency.​",
      pra2: "Outsource some or all of your Supply Chain and Procurement activities by Service Level Agreement.",
      pra3: "",
      submenu: [
        { id: 4.1, name: "Supply Chain by SLA", link: "/supply-chain-by-sla" },
        {
          id: 4.2,
          name: "Category Strategy & Contract Strategy",
          link: "/category-strategy",
        },
        {
          id: 4.1,
          name: "Post Award Contract Management",
          link: "/post-award-contract-management",
        },
        {
          id: 4.3,
          name: "Commercial Assurance",
          link: "/commercial-assurance",
        },
        { id: 4.4, name: "Cost Recovery", link: "/cost-recovery" },
        {
          id: 4.5,
          name: "Tendering & Outsourcing",
          link: "/tendering-outsourcing",
        },
        {
          id: 4.6,
          name: "Materials Management",
          link: "/materials-management",
        },
      ],
    },
    {
      id: 5,
      name: "Systems & Delivery",
      link: "#",
      title: "Codex & Delivery",
      pra1: "Codex is a contracting procurement & supply chain management system and services that transforms 3 rdparty goods and services into finished product in commercially competitive controlled and compliant manner.​",
      pra2: "cm+ is Contract + Context And focused on the users of the contract. Enabling them to execute the contract as it was intended.",
      pra3: (
        <p>
          <span className="customeFont">powerabode</span> Academy focuses on the
          extended contract user group that use & influence the contract
          regularly. The trainings are designed to inject commercial DNA into
          the team.
        </p>
      ),
      submenu: [
        { id: 5.1, name: "CODEX", link: "/codex-supply-chain" },
        { id: 5.1, name: "CM+", link: "/cm-for-contract" },
        { id: 5.2, name: "Academy", link: "/skillset-development" },
      ],
    },
    { id: 6, name: "AI Ecosystem", link: "/ai-ecosystem" },
  ];

  return (
    <>
      <Row
        className={`flex justify-around items-center py-5 shadow-sm transition-all duration-500 ${
          isSticky
            ? "fixed top-0 left-0 w-full bg-white z-50 shadow-lg"
            : "relative bg-transparent"
        }`}
      >
        <Column className="flex items-center">
          <OffCanvas />
          <a href="/">
            <img src={Logo} alt="Logo" width="200px" />
          </a>
        </Column>

        <Column className="lg:flex items-center space-x-4">
          {/* Menu Items */}
          <Column className="hidden lg:flex items-center font-medium space-x-4 gap-3 ml-16 text-[#29385E]">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => toggleSubmenu(item.id)}
                onMouseLeave={() => toggleSubmenu(item.id, true)}
              >
                <NavLink
                  to={item.link}
                  className="text-sm flex items-center hover:border-b-2 hover:border-b-[#00abb8] hover:text-[#00abb8]"
                  onClick={item.submenu ? () => toggleSubmenu(item.id) : null}
                >
                  {item.name}
                  {item.submenu && (
                    <img
                      src={DownArrow}
                      alt="Arrow"
                      className={`ml-2 transition-transform ${
                        isSubmenuOpen[item.id] ? "rotate-180" : ""
                      }`}
                      style={{ width: "12px", height: "12px" }}
                    />
                  )}
                </NavLink>

                {/* Submenu */}
                {item.submenu && isSubmenuOpen[item.id] && (
                  <div className="fixed top-[60px] left-0 w-screen bg-white shadow-lg z-20 border-b-4 border-[#00abb8]">
                    {/* Submenu Content */}
                    <div className="flex justify-center">
                      <div className="w-full max-w-screen-lg p-6 grid grid-cols-12 gap-5">
                        {/* Left Section - Conditionally rendered */}
                        {item.pra1 || item.pra2 || item.pra3 ? (
                          <div className="col-span-8 border-r pr-5">
                            <h3 className="text-lg font-semibold text-[#00abb8]">
                              {item.title}
                            </h3>
                            {item.pra1 && (
                              <p className="text-sm text-gray-600 mt-2">
                                {item.pra1}
                              </p>
                            )}
                            {item.pra2 && (
                              <p className="text-sm text-gray-600 mt-2">
                                {item.pra2}
                              </p>
                            )}
                            {item.pra3 && (
                              <div className="text-sm text-gray-600 mt-2">
                                {item.pra3}
                              </div>
                            )}
                          </div>
                        ) : null}

                        {/* Right Section */}
                        <div className="col-span-4">
                          <ul className="space-y-2">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.id}>
                                <NavLink
                                  to={subItem.link}
                                  className="text-sm text-gray-700 hover:text-[#00abb8] hover:underline"
                                >
                                  → {subItem.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Column>
        </Column>
      </Row>

      {/* Dynamic Page Title */}
      {!shouldHideRow && (
        <Row className="w-5/10 bg-white z-10 absolute ml-40 rounded-b-md hidden lg:block">
          <div className="w-full p-5">
            <p className="text-center text-[#00abb8] capitalize text-2xl">
              {titleName}
            </p>
            <div className="flex gap-x4 mt-5 mb-2">
              <img src={s1} alt="icon" className="mx-auto w-auto h-6" />
              <img src={s2} alt="icon" className="mx-auto w-auto h-6" />
              <img src={s3} alt="icon" className="mx-auto w-auto h-6" />
              <img src={s4} alt="icon" className="mx-auto w-auto h-6" />
              <img src={s5} alt="icon" className="mx-auto w-auto h-6" />
              <img src={s6} alt="icon" className="mx-auto w-auto h-6" />
              <img src={s7} alt="icon" className="mx-auto w-auto h-6" />
              <img src={s8} alt="icon" className="mx-auto w-auto h-6" />
              <img src={s9} alt="icon" className="mx-auto w-auto h-6" />
            </div>
            <p className="text-center">Operations | Maintenance | Production</p>
          </div>
        </Row>
      )}
    </>
  );
}

export default Navbar;
