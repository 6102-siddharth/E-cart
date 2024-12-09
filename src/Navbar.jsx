import "./App.css";

function Navbar() {
    return(
        <nav className="navbar">
            <ul className="ulelements">
                <li>
                     <a href="/">Home</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
                <li>
                    <a href="/contact">Contacts-us</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;