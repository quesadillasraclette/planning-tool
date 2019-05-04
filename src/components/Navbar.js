import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/firebase";
import { message, Divider } from "antd";

export class Navbar extends Component {
  logout = () => {
    logout().then(r => {
      message.info("Byeee!!");
    });
  };

  render() {
    return (
      <div>
        <nav>
          <Link to="/"> home </Link>
          <Divider type="vertical" />
          <Link to="/signup"> SignUp </Link>
          <Divider type="vertical" />
          <Link to="/login"> Login </Link>
          <Divider type="vertical" />
          <Link to="/contents"> Contents</Link>
          <Divider type="vertical" />
          <Link to="/contents/new"> New Contents</Link>
          <Divider type="vertical" />
          <Link to="#!/" onClick={this.logout}>
            {" "}
            Logout
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
