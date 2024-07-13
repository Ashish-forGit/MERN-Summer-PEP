import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import '../../footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="section-p1">
                    <div className="col">
                        
                        <h4>Contact</h4>
                        <p><strong>Address:</strong> Lovely Professional University, Phagwara, Punjab, India</p>
                        <p><strong>Email:</strong> info@amazon.in</p>
                        <div className="follow">
                            <h4>Follow us</h4>
                            <div className="icon">
                                <ImFacebook2 />
                                <BsTwitterX/>
                                <RiInstagramFill/>
                                <FaPinterestP/>
                                <IoLogoYoutube/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4>About</h4>
                        <a href="#">About us</a> <br/>
                        <a href="#">Delivery Information</a> <br/>
                        <a href="#">Privacy Policy</a> <br/>
                        <a href="#">Terms & Conditions</a> <br/>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="col">
                        <h4>My Account</h4>
                        <a href="#">Sign In</a><br/>
                        <a href="#">View Cart</a><br/>
                        <a href="#">My Wishlist</a><br/>
                        <a href="#">Track My Order</a><br/>
                        <a href="#">Help</a>
                    </div>
                    <div className="col install">
                        <h4>Install App</h4>
                        <p>From App Store or Google Play</p>
                        <div className="store-icons">
                            <IoLogoGooglePlaystore className="store-icon"/>
                            <FaAppStoreIos className="store-icon"/>
                        </div>
                        <div className="row">
                            <img src="img/pay/app.jpg" alt=""/>
                            <img src="img/pay/play.jpg" alt=""/>
                        </div>
                        <p>Secured Payment Gateways </p>
                        <div className="payment-icons">
                            <FaAmazonPay />
                            <FaPaypal />
                            <FaGooglePay />
                            <img src="img/pay/pay.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2024, <FaGithub/> Ashish-forGit</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
