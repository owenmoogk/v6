import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Nav from "./components/Nav.js"
import Homepage from './components/Homepage.js'
import Workpage from './components/Workpage.js'
import ContactPage from './components/contact/Contact.js';
import Projects from  './components/projects/Projects.js'
import ProjectPage from './components/projects/ProjectPage.js';

function App(props) {

	return (
		<Router>
			<Nav></Nav>
			<Switch>
				<Route path='/projects'>
					<Switch>
						<Route path='/projects/covid-scraper'>
							<ProjectPage />
						</Route>
						<Route path='/projects'>
							<Projects/>
						</Route>
					</Switch>
				</Route>
				<Route path='/work'>
					<Workpage/>
				</Route>
				<Route path='/contact'>
					<ContactPage/>
				</Route>
				<Route exact path='/'>
					<Homepage></Homepage>
				</Route>
			</Switch>
		</Router>
		
	);
}

export default App;