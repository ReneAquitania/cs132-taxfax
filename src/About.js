import logo from './images/taxfax-logo.png';
import rene from './images/rene.png';

const About = () => {
    return (
        <div className="grid place-items-center">
            <h1 className="text-6xl font-black border-2 border-red-900">About Us</h1>
            <h1 className="text-5xl font-bold border-2 border-red-900">TaxFax</h1>
            <img src={logo} className="max-h-32" alt="TaxFax logo" />
            <p className="max-w-3xl text-center border-2 border-red-900">
                We are TaxFax, bringing you the facts regarding tax.
                In this project, we analyze the deceptive tweets about the tax evasion case of the Marcoses.
            </p>
            <h1 className="text-5xl font-bold border-2 border-red-900">Meet the team</h1>
            <div className="flex columns-2 border-2 border-red-900">
                <img src={rene} className="max-h-32" alt="Rene Aquitania pic" />
                <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold">Rene Aquitania</h1>
                <p>
                    Hi! I’m a UP Diliman undergrad taking up BS Computer Science. 
                    I love listening to music and playing video games (Dota 2, CSGO, and Valorant 😵‍💫). Check out my website
                </p>
                </div>
            </div>
            <div className="flex columns-2 border-2 border-red-900">
                <img src={rene} className="max-h-32" alt="Adrian Lim pic" />
                <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold">Adrian Lim</h1>
                <p>
                    BS Computer Science undergraduate that has the GWA but no JoWA.
                    My hobbies are playing video games, drawing, and visiting the arcade centers! 
                    I also enjoy listening to music, but mostly J-Pop (Yoasobi, Official 髭男dism), 
                    J-rock (My First Story, Alexandros), and EDM (Camellia, Zekk).
                </p>
                </div>
            </div>
            <div className="flex columns-2 border-2 border-red-900">
                <img src={rene} className="max-h-32" alt="Enrico Ramos pic" />
                <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold">Enrico Ramos</h1>
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