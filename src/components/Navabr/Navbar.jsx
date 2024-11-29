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
      case "/category-strategy-contract-strategy":
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
      case "/strategic-sourcing":
        title = "strategic sourcing";
        break;
      case "/unlocking-value-bottom":
        title = "unlocking value";
        break;
      case "/drilling-cost-transformationblog":
        title = "drilling  cost transformationblog";
        break;
      case "/conflict-or-conflicting-KPI":
        title = "Conflict or Conflicting KPI’s?";
        break;
      case "/deliver-as-planned":
        title = "deliver as planned";
        break;
      case "/hidden-in-plain-sight":
        title = "Hidden in Plain Sight";
        break;
      case "/supply-chain-management":
        title = "supply chain management";
        break;
      case "/focus-on-rates":
        title = "focus on rates";
        break;
      case "/deliver-despite-budget":
        title = "deliver despite budget";
        break;
      case "/misalignment-with-business":
        title = "misalignment with business";
        break;
      case "/local-content-development":
        title = "local content development";
        break;
      case "/the-art-of-deal":
        title = "the art of deal";
        break;
      case "/procurement-department":
        title = "procurement department";
        break;
      case "/materials-management-blog":
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
      submenu: [
        { id: 4.1, name: "Supply Chain by SLA", link: "/supply-chain-by-sla" },
        {
          id: 4.2,
          name: "Category Strategy & Contract Strategy",
          link: "/category-strategy-contract-strategy",
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
        className={`flex justify-around items-center py-8 shadow-sm transition-all duration-500 ${
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
          <Column className="hidden lg:flex items-center font-medium space-x-4 gap-3 ml-16">
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
                  <Column className="absolute left-0 py-2 w-48 bg-white shadow-lg rounded-lg z-20">
                    {item.submenu.map((subItem) => (
                      <NavLink
                        key={subItem.id}
                        to={subItem.link}
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        onClick={() => toggleSubmenu(item.id, true)}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </Column>
                )}
              </div>
            ))}
          </Column>
        </Column>
      </Row>

      {/* Dynamic Page Title */}
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
          <p>
            <p class="text-center">Operations | Maintenance | Production </p>
          </p>
        </div>
      </Row>
    </>
  );
}

export default Navbar;
