import { Link, NavLink } from 'react-router-dom';
import logo2 from './images/taxfax-logo2.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pages = ["overview", "data", "methods", "results", "about-us"];
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });

    const fixLinkNames = (link) => {
        return link
            .toString()
            .split("-")
            .map((word) => {return word[0].toUpperCase() + word.slice(1);})
            .join(" ");
    }

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        });

        if (screenSize.dynamicWidth > 840){
            setMenuOpen(false);
        }
    }
    
    useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
    },
    //eslint-disable-next-line  
    [screenSize])

    return (
        <div className="min-w-full">
            <nav className="navbar bg-taxfaxblue-300 py-2.5">
                <div className="flex justify-between items-center  mx-10 md:mr-10 h-16">
                    <Link to="/cs132-taxfax/" className="max-h-fit text-xl font-black">
                        <img src={logo2} className="max-h-12" alt="TaxFax logo" />
                    </Link>
                    {/* Links to other pages when screen is big */}
                    <div className="hidden gap-x-4 md:flex">
                        {pages.map((page) => <NavBarLink key={page} link={page} name={fixLinkNames(page)}/>)}
                    </div>
                    <div className="flex md:hidden">
                        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    </div>
                </div>
            </nav>
            <ul className={`text-2xl transition-all ease-in-out md:hidden ${menuOpen ? "":"hidden"}`}>
                {pages.map((page) => <div key={page}>
                    <Link to={`/cs132-taxfax/${page}`} onClick={() => {setMenuOpen(false)}}><li className="px-6 py-1.5 hover:bg-gray-100">
                        {fixLinkNames(page)}
                    </li></Link> <hr className="border mx-6" />
                </div>)}
            </ul>
        </div>
    );
}

const NavBarLink = (props) => {
    const navLinkClasses = "p-3 rounded-lg text-white text-lg font-extrabold hover:bg-taxfaxblue-200 transition-all ease-in-out";

    return (
        <div>
            <NavLink
                to={`/cs132-taxfax/${props.link}`}
                className={
                    ({ isActive }) => (isActive ? navLinkClasses.concat(" ", "md:bg-taxfaxblue-200"): navLinkClasses)
                }>{props.name}</NavLink>
            
        </div>
    );
}

const HamburgerMenu = (props) => {
  return (
    <div>
        <button 
            className="align-middle p-3 rounded-xl bg-white fill-taxfaxblue-300 hover:fill-taxfaxblue-200 transition-all ease-in"
            onClick={() => {console.log(props.menuOpen); props.setMenuOpen(!props.menuOpen)}}>
            <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
            </svg>
        </button>
    </div>
  )
}

export default Navbar;