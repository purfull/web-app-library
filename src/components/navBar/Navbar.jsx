import "./navBar.css";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const NavBar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    setShowSearchInput((prev) => !prev);
  };

  return (
    <div className="nav-head">
      <div className="nav-bar">
        <img src="../logo/BothoLogo.png" alt="logo" />

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
          <div className="button-search-wrapper">
            <div className="search-icon-text" onClick={handleSearchClick}>
              <CiSearch className="clickable-icon" />
              <span className="nav-text">
                Botho University Online Programmes
                <RiArrowDropDownLine />
              </span>
            </div>

          </div>

          <div className="text">Why Botho University Online?</div>
          <p className="fee-text">Fees</p>

          {/* {!showSearchInput && ( */}
          {/* <div className="mobile-search-group"> */}
          <div className="mobile-text">
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
            {/* {searchText && (
              <span className="close-icon" onClick={() => setSearchText("")}>
                ×
              </span>
            )} */}
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavBar;
