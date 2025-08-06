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
        <a href="https://www.facebook.com/BothoBU/" target="_blank" className="icon facebook"><FaFacebookF /></a>
        <a href="https://www.instagram.com/bothouniversity/?hl=en" target="_blank" className="icon instagram"><FaInstagram /></a>
        <a href="https://www.youtube.com/channel/UCv0zuyyW7UQKWmy_D0DyseQ" target="_blank" className="icon youtube"><FaYoutube /></a>
        <a href="https://www.linkedin.com/school/9482881" target="_blank" className="icon linkedin"><FaLinkedinIn /></a>
      </div>

      <button className="toggle-btn" onClick={toggleIcons}>
        {/* <img src="icon/social-media-main-icon.png" alt="" /> */}@
      </button>
    </div>
  );
};

export default Floater;
