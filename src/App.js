import { Fragment } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Main from "./Pages/Main";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import AudioPlayer from "./Components/AudioPlayer";
import Playlist from "./Pages/Playlist";
import Search from "./Pages/Search";
import LikedSongs from "./Pages/LikedSongs";
import Profile from "./Pages/Profile";

const App = () => {
	const user = true;
	const location = useLocation();

	return (
		<Fragment>
			{user &&
				location.pathname !== "/login" &&
				location.pathname !== "/" &&
				location.pathname !== "/signup" &&
				location.pathname !== "/not-found" && (
					<Fragment>
						<Navbar />
						<Sidebar />
						<AudioPlayer />
					</Fragment>
				)}
			<Routes>
				<Route exact path="/" component={Main} />
				<PrivateRoute exact user={user} path="/home" component={Home} />
				<PrivateRoute
					exact
					user={user}
					path="/collection/tracks"
					component={LikedSongs}
				/>
				<PrivateRoute
					exact
					user={user}
					path="/collection/playlists"
					component={Library}
				/>
				<PrivateRoute exact user={user} path="/search" component={Search} />
				<PrivateRoute
					exact
					user={user}
					path="/playlist/:id"
					component={Playlist}
				/>
				<PrivateRoute exact user={user} path="/me" component={Profile} />
				{user && <Navigate from="/signup" to="/home" />}
				{user && <Navigate from="/login" to="/home" />}
				<Route path="/signup" component={SignUp} />
				<Route path="/login" component={Login} />
				<Route path="/not-found" component={NotFound} />
				<Navigate to="/not-found" />
			</Routes>
		</Fragment>
	);
};

export default App;