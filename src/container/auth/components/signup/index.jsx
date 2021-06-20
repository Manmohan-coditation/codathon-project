import React, { useState } from "react";
import {
	SubmitButtonWrapper,
	FormWrapper,
	Form,
	TextField,
	SignUpLinkWrapper,
	SignUpPageLink,
	TabWrapper,
} from "./style";
import TabList from "@material-ui/lab/TabList";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import { RegistrationFieldsArr } from "../../../../constants/auth-contants";
import { DocResFieldsArr } from "../../../../constants/auth-contants";

const initialState = {
	username: "",
	firstname: "",
	lastname: "",
	age: "",
	email: "",
	mobile: "",
	license: "",
};
export const SignUp = () => {
	const [userDetails, setUserDetails] = useState({ ...initialState });
	const [tabValue, setTabValue] = useState("1");
	const [selectedTab, setSelectedTab] = useState("Patience");
	const onChange = (e) => {
		const key = e.target.name.toLowerCase().split(" ").join("");
		userDetails[key] = e.target.value;
		setUserDetails({ ...userDetails });
	};
	const onSubmit = (e) => {
		e.preventDefault();

		const Data =
			selectedTab === "Patience"
				? {
						user_name: userDetails.username,
						first_name: userDetails.firstname,
						last_name: userDetails.lastname,
						age: userDetails.age,
						mobile_no: userDetails.mobile,
						email: userDetails.email,
				  }
				: {
						user_name: userDetails.username,
						first_name: userDetails.firstname,
						last_name: userDetails.lastname,
						age: userDetails.age,
						mobile_no: userDetails.mobile,
						email: userDetails.email,
						license_no: userDetails.license,
				  };

		setUserDetails({ ...initialState });
		console.log(Data, "Final Data is here");
	};
	const handleTabChange = (event, newvalue) => {
		setTabValue(newvalue);
		newvalue === "1"
			? setSelectedTab("Patience")
			: setSelectedTab("Doctor");
	};

	return (
		<FormWrapper>
			<span>Registration</span>

			<TabWrapper value={tabValue}>
				<TabList onChange={handleTabChange}>
					<Tab label="Patience" value="1" />
					<Tab label="Doctor" value="2" />
				</TabList>

				<TabPanel value="1">
					<Form onSubmit={onSubmit}>
						{RegistrationFieldsArr.map((item, pos) => {
							return (
								<TextField key={pos}>
									<label htmlFor={item.field}>
										{item.field}
									</label>
									<input
										type={item.type}
										name={item.field}
										value={
											userDetails[
												item.field.toLowerCase()
											]
										}
										onChange={onChange}
									/>
								</TextField>
							);
						})}
					</Form>
				</TabPanel>
				<TabPanel value="2">
					<Form onSubmit={onSubmit}>
						{DocResFieldsArr.map((item, pos) => {
							return (
								<TextField key={pos}>
									<label htmlFor={item.field}>
										{item.field}
									</label>
									<input
										type={item.type}
										name={item.field}
										value={
											userDetails[
												item.field.toLowerCase()
											]
										}
										onChange={onChange}
									/>
								</TextField>
							);
						})}
					</Form>
				</TabPanel>
			</TabWrapper>

			<SubmitButtonWrapper>
				<input type="submit" value="Continue" />
			</SubmitButtonWrapper>
			<SignUpLinkWrapper>
				<span>
					Do you have an account ?
					<SignUpPageLink to="/login"> Sign In</SignUpPageLink>
				</span>
			</SignUpLinkWrapper>
		</FormWrapper>
	);
};
