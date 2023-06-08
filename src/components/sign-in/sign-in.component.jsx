import React from "react";
import FormInput from "../form-input/form_input.component";
import CustomButton from "../custom-button/custom_button.component";
import { signInWithGoogle } from "../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
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

    // By using square brackets ([name]) around name, the code uses the value of name as the key to set the state property dynamically. For example,
    // if name is "email" and value is "example@example.com", it will update the state as { email: "example@example.com" }.
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        label="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type="password"
                        label="password"
                        name="password"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick = {signInWithGoogle}> Sign In With Google </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
