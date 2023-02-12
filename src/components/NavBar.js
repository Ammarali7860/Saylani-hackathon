import React from "react";
import { NavLink } from "react-router-dom";
import {HomeOutlined,UserOutlined,ShoppingCartOutlined} from "@ant-design/icons"
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <ul>
        <li> <HomeOutlined />
          <NavLink exact activeClassName="active" to="/home">
            Home
          </NavLink>
        </li>
        <li><ShoppingCartOutlined />
          <NavLink exact activeClassName="active" to="/Card">
            Card
          </NavLink>
        </li>
        <li><UserOutlined />
          <NavLink exact activeClassName="active" to="/account">
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
