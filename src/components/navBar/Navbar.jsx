import "./navBar.css";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchText, setSearchText] = useState("");
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setShowSearchInput((prev) => !prev);
    setIsDropdownOpen((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [searchQuery, setSearchQuery] = useState("");


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // optionally trigger filtering here
  };
  const handleWhyClick = () => {
    navigate("/");
    window.scrollTo(0, window.innerHeight);
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
  top: "100%",
  left: 0,
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginTop: "5px",
  zIndex: 10,
  padding: "10px",
  width: "250px",
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

  return (
    <div className="nav-head">
      <div className="nav-bar">
        <img src="../logo/BothoLogo-hd.png" alt="logo" className="nav-logo" onClick={handleHomeClick} style={{cursor: "pointer"}} />

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
           <div className="button-search-wrapper" style={{ position: "relative" }}>
      <div className="search-icon-text" onClick={handleSearchClick}>
        <CiSearch className="clickable-icon" />
        <span className="nav-text">
          Botho University Online Programmes
          <RiArrowDropDownLine />
        </span>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-search" style={dropdownStyle}>
          <input
            type="text"
            placeholder="Search programmes..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={inputStyle}
          />
          <ul style={listStyle}>
            {["MBA", "BSc CS", "MSc IT"]
              .filter((item) =>
                item.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item) => (
                <li key={item} style={listItemStyle}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>

          <div className="text" onClick={handleWhyClick} style={{cursor: "pointer"}}>Why Botho University Online?</div>
          <p className="fee-text" onClick={handleFeeClick} style={{cursor: "pointer"}}>Fees</p>

          {/* {!showSearchInput && ( */}
          {/* <div className="mobile-search-group"> */}
          <div className="mobile-text" onClick={handleWhyClick}>
            Why BU Online?
            <CiSearch className="mobile-search" onClick={handleSearchClick} />
          </div>
          {/* )} */}

          {/* <div className="fee-text">Fees</div> */}
        </div>

        {showSearchInput && (
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
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavBar;
