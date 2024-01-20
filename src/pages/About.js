import React from 'react';

import logo from '../images/taxfax-logo.png';
import rene from '../images/rene.png';
import adrian from '../images/ian.png';
import enrico from "../images/raco.png";

const About = () => {
    return (
        <div className="relative grid place-items-center">
            <h1 className="text-6xl font-black mt-4">About Us</h1>
            <h1 className="text-5xl font-bold">TaxFax</h1>
            <img src={logo} className="max-h-32" alt="TaxFax logo" />
            <p className="max-w-3xl text-center mb-4">
                We are TaxFax, bringing you the facts regarding tax. In this project, 
                we analyze the deceptive tweets about the 203 Billion estate tax case of the Marcoses. <br /><br />
                It is our belief in TaxFax that everyone is responsible for paying their taxes; 
                it is our civil duty. This is why we chose the topic: to wake the people up from the Marcoses 
                feigning of responsibility. We're not sure if this will be trusted by the public, 
                but we will strive to find the truth.
            </p>
            <hr className="border-2 border-taxfaxblue-300 w-1/4"/>
            <h1 className="text-5xl font-bold my-6">Meet the team</h1>
            <div className="flex columns-2 mb-4">
                <img src={rene} className="max-h-32 mr-4" alt="Rene Aquitania pic" />
                <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold">Rene Aquitania (WFU: Spring)</h1>
                <p>
                    Hi! I’m a UP Diliman undergrad taking up BS Computer Science. 
                    I love listening to music and playing video games (Dota 2, CSGO, and Valorant 😵‍💫).
                </p>
                </div>
            </div>
            <div className="flex columns-2 mb-4">
                <img src={adrian} className="max-h-32 mr-4" alt="Adrian Lim pic" />
                <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold">Adrian Lim (WFU: Spring)</h1>
                <p>
                    BS Computer Science undergraduate that has the GWA but no JoWA.
                    My hobbies are playing video games, drawing, and visiting the arcade centers! 
                    I also enjoy listening to music, but mostly J-Pop (Yoasobi, Official 髭男dism), 
                    J-rock (My First Story, Alexandros), and EDM (Camellia, Zekk).
                </p>
                </div>
            </div>
            <div className="flex columns-2">
                <img src={enrico} className="max-h-32 mr-4" alt="Enrico Ramos pic" />
                <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold">Enrico Ramos (WFU: Spring)</h1>
                <p>
                    Raco is an aspiring game dev, electronic musician, and caffeine gremlin 
                    who is currently pursuing a Computer Science degree at UP Diliman. 
                    In his spare time he likes to play the piano and build dystopian civilizations 
                    in colony sims of varying degrees of brutality.
                </p>
                </div>
            </div>
        </div>
    );
}
 
export default About;