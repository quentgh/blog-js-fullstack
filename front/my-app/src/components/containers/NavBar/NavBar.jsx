import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import menuImage from "../../../assets/menu.svg";
import { UserContext } from "../../contexts/UserContext";
import BtnNav from "../../ui/BtnNav/BtnNav";
import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.buttonContainer}>
        <img
          onClick={toggleMenu}
          className={classes.button}
          src={menuImage}
          alt="Menu button"
        />
      </div>
      <ul style={{ left: showMenu ? "0px" : "-100%" }} className={classes.menu}>
        <li className={classes.link}>
          <Link to={"/"}>Home</Link>
        </li>
        <li className={classes.link}>
          <Link to={"/profile"}>Profile</Link>
        </li>
      </ul>
      <BtnNav>
        <a href="/auth">Sign In / Sign Up</a>
      </BtnNav>
      {user ? <p>{user.username}</p> : ""}
      <BtnNav onClick={signOut}>
        <p>Sign Out</p>
      </BtnNav>
    </div>
  );
}
