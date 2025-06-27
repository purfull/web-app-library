import "./navBar.css";
import { RxHamburgerMenu } from "react-icons/rx";
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

        <div className="nav-bar2">
          <div className="search">
            <CiSearch />{" "}
            <span className="nav-text">
              Botho University Online Programmes
              <RiArrowDropDownLine />
            </span>
          </div>

          {showSearchInput && (
            <input
              type="text"
              className="search-input"
              placeholder="Search programmes..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          )}

          <div className="text">Why Botho University Online?</div>

          {!showSearchInput && (
            <div className="mobile-text">
              Why BU Online?
              <CiSearch className="mobile-search" onClick={handleSearchClick} />
            </div>
          )}

          <div className="fee-text">Fees</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
