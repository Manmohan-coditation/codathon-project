import React, { useState } from "react";
import {
	Main,
	UserWrapper,
	ProfilePicContainer,
	UserProfileDiv,
	EmptyDiv,
} from "./style";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
export const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Main>
			<UserWrapper>
				<ProfilePicContainer>
					<Avatar src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" />
				</ProfilePicContainer>
				<UserProfileDiv>
					<EmptyDiv onClick={handleClick}>
						<KeyboardArrowDownIcon />{" "}
					</EmptyDiv>

					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
						style={{
							transform: "translateY(5%)",
						}}>
						<MenuItem>
							{/* <ListItemTextDiv primary="Logout" /> */}
							Logout
						</MenuItem>
					</Menu>
				</UserProfileDiv>
			</UserWrapper>
		</Main>
	);
};
