import { Link } from "react-router-dom";
import logo from "../logo.jpeg";

function Nav() {
  const navStyle = {
    color: "white",
  };

 

  return (

    <nav className = "navbar">
        <div class = "topBorder">
          <img src={logo}/>
         </div>



      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li> <a> ABOUT </a></li>
        </Link>
        <Link style={navStyle} to="/search">
          <li><a> SEARCH </a> </li>
        </Link>
       
        <Link style={navStyle} to="/login">
          <li> <a> LOGIN</a></li>
        </Link>
      </ul>



    </nav>
  );
}

export default Nav;
