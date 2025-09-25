import "./navBar.css";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);
  const cardData = [
  
    {
      cover: "/images/courses-images/MBA.jpeg",
      courseName: "Postgraduate Programme",
      title: "Master of Business Administration (MBA).",
      description:
        "Aiming to become a top executive in the global business arena? Our MBA programme is designed for ambitious professionals. It equips you with the skills to tackle complex challenges, focusing on critical thinking, entrepreneurship, financial resilience, and innovative problem-solving.",
    },
    {
      cover: "/images/courses-images/MCom in Human resource.png",
      courseName: "Postgraduate Programme",
      title: "MCom in Human Resource Management.",
      description:
        "Looking to become a leader in talent management? Our Master of Commerce in Human Resource Management (MCom in HRM) is a transformative qualification designed for the modern business landscape. You'll gain a robust foundation in strategic HR planning, recruitment, performance assessment, and more.",
    },
    {
      cover: "/images/courses-images/Med in curriculum.png",
      courseName: "Postgraduate Programme",
      title: "MEd in Curriculum Design and Instruction",
      description:
        "Ready to lead in education and curriculum development? Our Master of Education in Curriculum Design and Instruction is your pathway to becoming an expert.",
    },
    {
      cover: "/images/courses-images/Med in higher education.jpg",
      courseName: "Postgraduate Programme",
      title: "MEd in Higher Education",
      description:
        "Elevate your expertise with our Master of Education in Higher Education. This specialised two-year online programme equips you with advanced pedagogical skills, covering Learning, Teaching and Assessment, Curriculum Design and Development, and Academic Writing.",
    },
    {
      cover:
        "/images/courses-images/Med in educational leadership and mgmt.png",
      courseName: "Postgraduate Programme",
      title: "MEd in Leadership and Management",
      description:
        "Aspiring to lead in education? Our Master of Educational Leadership and Management is a prestigious, two-year programme designed to elevate your career.",
    },
    {
      cover: "/images/courses-images/Msc in computer science.png",
      courseName: "Postgraduate Programme",
      title: "MSc in Computer Science",
      description:
        "Aspiring to excel in the tech industry? Our Master of Science in Computer Science is an advanced, flexible online programme.",
    },
    {
      cover: "/images/courses-images/Msc in Information Systems management.png",
      courseName: "Postgraduate Programme",
      title: "MSc in Information Systems Management",
      description:
        "Ready to excel in information systems management? Our Master of Science in Information Systems Management is a professionally oriented online programme, perfect if you need flexible learning.",
    },
    {
      cover: "/images/courses-images/PGDHE.png",
      courseName: "Postgraduate Programme",
      title: "Post Graduate Diploma in Higher Education(PGDHE)",
      description:
        "Ready to advance your teaching career? Our Postgraduate Diploma in Higher Education (PGDHE) is a transformative one-year programme designed to equip you with advanced teaching skills, curriculum design expertise, and effective assessment strategies.",
    },
      {
      cover: "/images/courses-images/BBA in bus mgmt.png",
      courseName: "Undergraduate Programme",
      title: "BBA in Business Management",
      description:
        "Aiming for a leadership role in the global business environment? Our Bachelor of Business Administration in Business Management provides the strategic mindset and skills you need. This programme covers key areas like management, finance, marketing, entrepreneurship, operations, and digital transformation, with a strong focus on innovation, sustainability, and ethical leadership.",
      subject:
        "Business Management 1,Fundamental Of Business and Finance,Legal Aspects of Business,Business Mathematics and Statistics,Academic Writing for Business,Introduction to MS Office",
    },
    {
      cover: "/images/courses-images/Bcom in accounting.png",
      courseName: "Undergraduate Programme",
      title: "BCom in Accounting",
      description:
        "Your Future in Accounting Starts Here! Our Bachelor of Commerce in Accounting programme offers a practical, industry-focused approach to a rewarding career in accounting and finance. You'll gain essential expertise in financial reporting, auditing, taxation, and management accounting. What sets this degree apart is its blend of theory and hands-on experience, including a compulsory semester-long internship for invaluable real-world exposure.",
      subject:
        "Business Management 1,Fundamental Of Business and Finance,Legal Aspects of Business,Business Mathematics and Statistics,Academic Writing for Business,Introduction to MS Office,Computerized Accounting 1,Business Management 2,Business Ethics and Assurance,Introduction to Financial Accounting,Business Mathametics and Statistics 2,Principles of Marketing,Financial Accounting 1,Corporate Administration 1,Computerized Accounting 2,Cost Accounting,Micreconomics,Taxation 1",
    },

    // {
    //   cover: "/images/courses-images/Bcom in Hospitality.png",
    //   courseName: "Undergraduate Programme",
    //   title: "BCom in Hospitality Management",
    //   description:
    //     "Aspiring to a leadership role in the vibrant hospitality sector? Our Bachelor of Commerce in Hospitality Management provides a strong foundation in business principles alongside specialised hospitality skills. You'll cover core areas like accounting and marketing, combined with modules in hotel operations, food and beverage management, and tourism development.",
    // },
    {
      cover: "/images/courses-images/Bed in Primary.png",
      courseName: "Undergraduate Programme",
      title: "BEd in Primary Education",
      description:
        "Ready to shape the future of education? Botho University's Bachelor of Education (Primary Education) programme is designed for aspiring and current educators, equipping you with essential skills and knowledge to excel.",
    },
    {
      cover: "/images/courses-images/Bsc in data science.png",
      courseName: "Undergraduate Programme",
      title: "BSc in Data Science",
      description:
        "Want to become a data expert? Our four-year BSc in Data Science equips you to extract meaningful insights from vast datasets.",
    },
    {
      cover: "/images/courses-images/BSc in health info.png",
      courseName: "Undergraduate Programme",
      title: "BSc in Health Information Management",
      description:
        "Fascinated by the intersection of healthcare and technology? Our BSc in Health Information Management equips you to manage health data, information systems, and technology solutions.",
    },
    {
      cover: "/images/courses-images/BSc in Hospitality.png",
      courseName: "Undergraduate Programme",
      title: "BSc in Hospital Administration",
      description:
        "Aspiring to a leadership position in healthcare? Our BSc in Hospital Administration is a specialised programme designed to equip you with essential knowledge and skills.",
    },
    {
      cover: "/images/courses-images/BSc in network security.png",
      courseName: "Undergraduate Programme",
      title: "BSc in Network Security and Computer Forensics",
      description:
        "Ready to become a cybersecurity expert? Our BSc in Network Security and Computer Forensics is a specialised degree equipping you to protect digital assets and investigate cyber threats.",
    },
    {
      cover: "/images/courses-images/BSc in Safety..png",
      courseName: "Undergraduate Programme",
      title: "BSc in Safety, Health and Environmental Management",
      description:
        "Ready to champion workplace safety and environmental well-being? Our BSc in Safety, Health, and Environment (SHE) Management is an interdisciplinary programme designed to equip you with essential knowledge.",
    },
    {
      cover: "/images/courses-images/Diploma in Occup.png",
      courseName: "Undergraduate Programme",
      title: "Diploma in Occupational Health Safety",
      description:
        "Fascinated by creating safer workplaces? Our Diploma in Occupational Health and Safety is for you! This comprehensive programme blends occupational health, safety management, risk assessment, and environmental sustainability. You'll gain practical skills to identify, evaluate, and control workplace hazards, ensuring compliance with regulations, and fostering a strong safety culture.",
    },
  ];
  const handleSearchClick = () => {
    setShowSearchInput((prev) => !prev);
    setIsDropdownOpen((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSuggestions = cardData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  //   const filteredSuggestions = cardData.filter((item) =>
  //   item.subject.toLowerCase()
  //     .split(',')
  //     .some(subject => subject.trim().includes(searchText.toLowerCase()))
  // );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // optionally trigger filtering here
  };
  const handleWhyClick = () => {
    navigate("/");
    window.scrollTo(0, window.innerHeight * 1.35);
  };

  const handleFeeClick = () => {
    navigate("/all-fee");
    window.scrollTo(0, 0);
  };
  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const dropdownStyle = {
    position: "absolute",
    top: "44px",
    left: 0,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "5px",
    zIndex: 10,
    padding: "10px",
    width: "100%",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    maxHeight: "150px",
    overflowY: "auto",
  };

  const listItemStyle = {
    padding: "5px 0",
    cursor: "pointer",
  };

  const handleSuggestionClick = (course) => {
    const cleaned = course
      .trim()
      .replace(/\(.*?\)/g, "") // remove anything in brackets
      .replace(/,/g, "") // remove commas
      .replace(/\.$/, "") // remove trailing period
      .replace(/\./g, "") // remove all dots
      .replace(/\s+/g, "") // remove all whitespace
      .replace(/-/g, "");

    const slug = cleaned.toLowerCase();
    navigate(`/course/${slug}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className="nav-head">
      <div className="nav-bar">
        <img
          src="../logo/BothoLogo-hd.jpg"
          alt="logo"
          className="nav-logo"
          onClick={handleHomeClick}
          style={{ cursor: "pointer", maxWidth: "90px" }}
        />

        <div className="">
          {showSearchInput && (
            <input
              type="text"
              className="search-input"
              placeholder="Search programmes..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          )}
        </div>
        <div className="nav-bar2">
          <div
            className="button-search-wrapper"
            style={{ position: "relative" }}
          >
            <div className="search-icon-text" onClick={handleSearchClick}>
              <CiSearch className="clickable-icon" />
              <span className="nav-text">
                Online Programmes
                <RiArrowDropDownLine />
              </span>
            </div>

            {isDropdownOpen && (
              <div className="dropdown-search" style={dropdownStyle}>
                <input
                  type="text"
                  className="search-button-text"
                  placeholder="Search programmes..."
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setShowSuggestions(true);
                  }}
                  // style={inputStyle}
                />
                <ul className="suggestions-list">
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(item.title)}
                        className="suggestion-item"
                      >
                        {item.title}
                      </li>
                    ))
                  ) : (
                    <li className="no-match">No matching programmes</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <div
            className="text"
            onClick={handleWhyClick}
            style={{ cursor: "pointer" }}
          >
            Why Choose Us?
          </div>
          <p
            className="fee-text"
            onClick={handleFeeClick}
            style={{ cursor: "pointer" }}
          >
           Our Programme Fees
          </p>

          {/* {!showSearchInput && ( */}
          {/* <div className="mobile-search-group"> */}
          <div className="mobile-text" onClick={handleSearchClick}>
            <CiSearch className="mobile-search" />
            Online Programmes
          </div>
          {isDropdownOpen && (
            <div className="dropdown-search-mobile">
              <input
                type="text"
                className="search-button-text"
                placeholder="Search programmes..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setShowSuggestions(true);
                }}
                // style={inputStyle}
              />
              <ul className="suggestions-list">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(item.title)}
                      className="suggestion-item"
                    >
                      {item.title}
                    </li>
                  ))
                ) : (
                  <li className="no-match">No matching programmes</li>
                )}
              </ul>
            </div>
          )}
          {/* )} */}

          {/* <div className="fee-text">Fees</div> */}
        </div>

        {/* {showSearchInput && (
          <div className="mobile-search-input-wrapper">
            <input
              type="text"
              className="mobile-search-input"
              placeholder="Search programmes..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <span
                className="close-icon"
                onClick={() => {
                  setShowSearchInput(false);
                  setSearchText("");
                }}
              >
                ×
              </span>
            )}
          </div>
        )} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavBar;
