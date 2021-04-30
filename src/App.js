import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Nav from "components/Nav.js"
import Homepage from 'components/homepage/Homepage.js'
import Workpage from 'components/Workpage.js'
import ContactPage from 'components/contact/Contact.js';
import ProjectRouter from 'components/ProjectRouter.js';
import 'css/navbar.css'

function App(props) {

	return (
		<Router>
			<Nav></Nav>
			<Switch>
				<Route path='/projects'>
					<ProjectRouter/>
				</Route>
				<Route path='/work'>
					<Workpage/>
				</Route>
				<Route path='/contact'>
					<ContactPage/>
				</Route>
				<Route exact path='/'>
					<Homepage/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;