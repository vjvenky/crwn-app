import React, { Component } from "react";
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an Account</h2>
        <span>Please login with your Emial and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
            lable="Email"
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
            lable="Password"
          />

          <CustomButton type="submit" value="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
