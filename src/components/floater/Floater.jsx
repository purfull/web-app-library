import { useState } from "react";
import "./floater.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaShareAlt } from "react-icons/fa";


const Floater = () => {
  const [open, setOpen] = useState(false);

  const toggleIcons = () => {
    setOpen(!open);
  };

  return (
    <div className="floater-wrapper">
      <div className={`icon-list ${open ? "open" : ""}`}>
        <a href="#" className="icon facebook"><FaFacebookF /></a>
        <a href="#" className="icon instagram"><FaInstagram /></a>
        <a href="#" className="icon youtube"><FaYoutube /></a>
        <a href="#" className="icon linkedin"><FaLinkedinIn /></a>
      </div>

      <button className="toggle-btn" onClick={toggleIcons}>
        <img src="icon/social-media-main-icon.png" alt="" />
      </button>
    </div>
  );
};

export default Floater;
