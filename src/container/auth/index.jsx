import React from "react";
import { MainDiv, ImageWrapper } from "./style";
import { LoginPageImage } from "../../assets/Images/LoginPage";
import { Login } from "./components/login";
import { useLocation } from "react-router-dom";
import { SignUp } from "./components/signup";

export const Auth = () => {
	const location = useLocation();
	const currentPage = location.pathname.split("/")[1];
	return (
		<MainDiv>
			<ImageWrapper>
				<LoginPageImage />
			</ImageWrapper>
			{currentPage === "login" ? <Login /> : <SignUp />}
		</MainDiv>
	);
};
