import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>TaxFax</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">About Us</Link>
            </div>
        </nav>
    );
}

export default Navbar;