import React, { useState } from "react";
import {
	SubmitButtonWrapper,
	FormWrapper,
	Form,
	TextField,
	SignUpLinkWrapper,
	SignUpPageLink,
} from "./style";
export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const onChange = (e) => {
		if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "password") {
			setPassword(e.target.value);
		}
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		setEmail("");
		setPassword("");
	};
	return (
		<FormWrapper>
			<span>Sign in to your account</span>
			<Form onSubmit={onSubmit}>
				<TextField>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={onChange}
					/>
				</TextField>
				<TextField>
					<label htmlFor="email">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
					/>
				</TextField>
				<SubmitButtonWrapper>
					<input type="submit" value="Continue" />
				</SubmitButtonWrapper>
			</Form>
			<SignUpLinkWrapper>
				<span>
					Don't have an account ?
					<SignUpPageLink to="/signup"> Sign up</SignUpPageLink>
				</span>
			</SignUpLinkWrapper>
		</FormWrapper>
	);
};
