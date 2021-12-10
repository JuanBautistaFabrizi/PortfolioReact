import React from "react";
import SocialContact from "../../common/social-contact/index";
import "./about.css";

function About() {
    return(
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hola, Soy Juan 👋 bienvenido a mi portfolio!
                    <br />
                    <br />
                    Soy desarrollador full stack.
                </div>
                <div className="about-photo">
                    <img 
                        src={require("../../../assets/image/naranja.png").default}
                        className="picture"
                    />
                </div>
                
            </div>
        </div>
    );
}

export default About;

