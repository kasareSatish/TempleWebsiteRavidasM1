import { Component } from "react";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> संत रविदास महाराज</h1>
        <div className="menu-icons" onClick={this.handleClick}>
        <FontAwesomeIcon icon={faBars} className={this.state.clicked ? "fa-solid fa-bars" : "fa-bars"} />

        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i class={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
