import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiMail} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://x.com/Alex_Rayer_" className="home__social-icon">
                <FiTwitter />
            </a>
            <a href="https://github.com/arayer143" className="home__social-icon">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/alex-rayer/" className="home__social-icon">
                <FiLinkedin />
            </a>
            <a href="mailto:alexrayer7@gmail.com" className="home__social-icon">
                <FiMail />
            </a>
        </div> 
    ); 
}

export default Social;