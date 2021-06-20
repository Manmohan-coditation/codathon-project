import styled from "styled-components";
import { Link } from "react-router-dom";
import TabContext from "@material-ui/lab/TabContext";
export const FormWrapper = styled.div`
	text-align: center;
	padding: 4rem;
	margin: 0px auto;
	width: 100%;
	max-width: 448px;
	max-height: 500px;
	overflow: auto;
	background: white;
	border-radius: 4px;
	box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
		rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
	[class*="MuiTabs-flexContainer"] {
		display: grid;
		grid-template-columns: 50% 50%;

		align-items: center;
		background-color: whitesmoke;
	}
	[class*="Mui-selected"] {
		background-color: lightgrey;
	}
`;

export const SignUpLinkWrapper = styled.div`
	margin-top: 2rem;
	${"span"} {
	}
	${"a"} {
		color: #5469d4;
		text-decoration: unset;
	}
`;

export const TextField = styled.div`
	text-align: left;
	${"input"} {
		margin-bottom: 1rem;
		font-size: 16px;
		line-height: 28px;
		width: 100%;
		min-height: 40px;
		padding-left: 1rem;
		border: unset;
		border-radius: 4px;
		outline-color: rgb(84 105 212 / 0.5);
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
			rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
			rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
			rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
			rgba(0, 0, 0, 0) 0px 0px 0px 0px;
	}
	${"label"} {
		display: inline-block;
		margin-bottom: 10px;
		font-size: 16px;
		font-weight: 600;
	}
`;

export const Form = styled.form``;

export const SubmitButtonWrapper = styled.div`
	${"input"} {
		background-color: rgb(84, 105, 212);
		box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
			rgba(0, 0, 0, 0) 0px 0px 0px 0px,
			rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
			rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
			rgba(0, 0, 0, 0) 0px 0px 0px 0px,
			rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
		color: #fff;
		font-weight: 600;
		cursor: pointer;
		padding: 0.5rem 2rem;
		outline: none;
		border: none;
		border-radius: 6px;
	}
	margin-top: 1.5rem;
`;

export const SignUpPageLink = styled(Link)``;

export const TabWrapper = styled(TabContext)``;
