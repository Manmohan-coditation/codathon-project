import "./App.css";
import { Auth } from "./container/auth";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./shared-components/header";

function App() {
	return (
		<BrowserRouter>
			<Route path="/login" exact component={Auth} />
			<Route path="/signup" exact component={Auth} />
			<Route path="/dashboard" exact component={Header} />

			{/* <Login /> */}
		</BrowserRouter>
	);
}

export default App;
