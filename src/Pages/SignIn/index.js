import React, { Component } from "react"
import FormInput from "../FormInput"
import CustomButton from "../CustomButton"

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ email: "", password: "" })
  }
  render() {
    const { email, password } = this.state
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            required
            value={email}
            onChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            required
            value={password}
            onChange={this.handleChange}
            label="Password"
          />
          <CustomButton type="submit"> Sign In </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
