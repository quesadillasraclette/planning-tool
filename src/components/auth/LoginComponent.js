import React, { Component } from "react";
import { Input, Icon, Button, message, Divider } from "antd";
import { login, loginWithGoogle } from "../../services/firebase";
import "./auth.css";

export class LoginComponent extends Component {
  state = {
    userInfo: {}
  };

  handleChange = e => {
    const { userInfo } = this.state;
    userInfo[e.target.name] = e.target.value;
    this.setState({ userInfo });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userInfo } = this.state;
    login(userInfo)
      .then(res => {
        message.success("Welcome");
        this.props.history.push("/content");
      })
      .catch(e => {
        message.error(e.message);
      });
  };

  loginWithGoogle = () => {
    loginWithGoogle()
      .then(res => {
        message.success(`Welcome ${res.user.email}`);
        this.props.history.push("/content");
      })
      .catch(e => {
        message.error(e.message);
      });
  };

  render() {
    return (
      <div className="signup_section">
        <div>
          <form onSubmit={this.handleSubmit}>
            <Input
              //addonAfter="@google.com"
              type="text"
              name="email"
              onChange={this.handleChange}
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
            <Input
              type="password"
              name="password"
              onChange={this.handleChange}
              placeholder="Enter your password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
            <Button type="primary" htmlType="submit" block>
              Registrate
            </Button>
            <Divider />
            <Button type="danger" block onClick={this.loginWithGoogle}>
              {" "}
              Signup with Google
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
