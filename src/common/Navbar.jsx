import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar(){
    return(
    <>
    <nav>
        <div className="logo">
            <h1>🎓Aimentor</h1>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register" className="reg">Register</Link></li>
        </ul>
    </nav>
    </>
    )
}

export default Navbar;