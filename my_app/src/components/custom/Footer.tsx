import Logo from "@/assets/Images/Logo.png";
import "./Footer.css"
import { BsTwitter,BsYoutube  } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area"


const Footer = () => {
  return (
    <div className="footer-wrapper  bg-white shadow-[0px_-5px_5px_rgba(0,0,0,0.1)] pt-10">
      <div className="footer-section-one flex pl-5 gap-32 items-center ">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons flex gap-10">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help</span>
          <span>Share</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>Kathmandu-3,Nepal</span>
          <span>sewaghar@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;