import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaRegCopyright } from "react-icons/fa";
// import { FaRegCopyright } from "react-icons/fa";


export function Footer() {
    return (
        <div className="footer-main-wrap">
            <div>
                <FaInstagram className="footer-icon" />
                <FaFacebook className="footer-icon" />
                <FaYoutube className="footer-icon" />
                <FaTwitter className="footer-icon" />
            </div>
            <div className="copyright">
                <FaRegCopyright style={{marginRight: '0.6rem'}}/> coffeeday.com. All rights reserved
            </div>
        </div>
    )
}