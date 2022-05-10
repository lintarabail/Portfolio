import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="name">
        <h1>Linta Rabail</h1>
      </div>
      <div className="navitems">
        <ul>
     
        <Link spy={true} to='Navbar' smooth={true}>
            <li><a href="/">Home</a></li>
          </Link>
        <Link spy={true} to='Service' smooth={true}>
            <li><a href="/">About</a></li>
          </Link>
          
          <Link spy={true} to='Experience' smooth={true}>
            <li><a href="/">Experience</a></li>
          </Link>
          <Link spy={true} to='Portfolio' smooth={true}>
            <li><a href="/">Portfolio</a></li>
          </Link>
          <Link spy={true} to='Testimonials' smooth={true}>
            <li><a href="/">Testimonials</a></li>
          </Link>
        
        </ul>
      </div>
      <div className="navbutton">
      <Link spy={true} to='Form' smooth={true}>
        <button> <a href="/">Contact Me</a> </button>
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
