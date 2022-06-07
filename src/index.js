import React from "react";
import createRoot from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./global.css";
const rootE = document.getElementById("root");
const root = createRoot(rootE);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar={true}
				closeButton={false}
				theme="colored"
				icon={false}
			/>
		</BrowserRouter>
	</React.StrictMode>
	//document.getElementById("root")
);