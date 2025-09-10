import "./App.css";
import Navbar from "../components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import About from "../components/about/about";
import Services from "../components/services/services";
import Contact from "../components/contact/contact";
import Error404 from "../components/error";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path={`/`} element={<Home />} />
					<Route path={`/about`} element={<About />} />
					<Route path={`/services`} element={<Services />} />
					<Route path={`/contact`} element={<Contact />} />
					<Route path={`*`} element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
