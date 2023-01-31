import { Link } from "react-router-dom";
import {  Route, useNavigate,  Routes} from "react-router-dom";
import './Header.css'
function Header(){
  return (
    <div className="header">
      <Link to="/" className="title">
        Intuitive Quiz Hub
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
