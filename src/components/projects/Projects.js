import React from 'react';
import 'css/projects/projects.css'
import 'css/projects/sort.css'
import ProjectIcon from './ProjectIcon'

export default function ProjectPage(props) {
	return (
		<div className="main">
            <div className="page">
                <p className="title">Projects</p>
                <br></br>
                <div className="sorting">
					<div className="buttons">
						<span className="sort_all btn active"><p>All</p></span>
						<span className="sort_cad btn"><p>CAD</p></span>
						<span className="sort_coding btn"><p>Coding</p></span>
						<span className="sort_mechanical btn"><p>Mechanical</p></span>
						<span className="sort_web-dev btn"><p>Web-Dev</p></span>
					</div>
					<div className="sort">
						<label>Sort by: &nbsp; </label>
						<select id="mySort">
							<option value="">--</option>
							<option value="alpha-desc">A-Z</option>
							<option value="alpha-asc">Z-A</option>
						</select>
					</div>
				</div>
				<br/><br/><br/><br/>
				<div id="projectsGoHere">
					<ProjectIcon title='COVID Scraper' name='covid-scraper' type='coding'/>
					<ProjectIcon title='Sorting Visualizer' name='sorting-visualizer' type='coding'/>
					<ProjectIcon title='COVID Website' name='covid-website' type='web-dev'/>
					<ProjectIcon title='Dino Game AI' name='dino-game-ai' type='coding'/>
					<ProjectIcon title='Geometry Calculator' name='geometry-calculator' type='coding'/>
					<ProjectIcon title='Simplelib' name='simplelib' type='coding'/>
					<ProjectIcon title='Flappy Bird AI' name='flappy-bird-ai' type='coding'/>
					<ProjectIcon title='Email Bot' name='email-bot' type='coding'/>
					<ProjectIcon title='Snake' name='snake' type='coding'/>
					<ProjectIcon title='Model Rocket' name='model-rocket' type='mechanical'/>
					<ProjectIcon title='Hydraulic Arm' name='hydraulic-arm' type='mechanical'/>
					<ProjectIcon title='Space Invaders' name='space-invaders' type='coding'/>
					<ProjectIcon title='The Compiler' name='the-compiler' type='web-dev'/>
					<ProjectIcon title='Website Development' name='web-development' type='web-dev'/>
					<ProjectIcon title='Renders/Graphic Design' name='renders' type='CAD'/>
					<ProjectIcon title='Minecraft Modifications' name='minecraft-mods' type='coding'/>
					<ProjectIcon title='Vortex' name='vortex' type='CAD'/>
					<ProjectIcon title='2702 Rebels 2020 Robot' name='2702-2020' type='Mechanical'/>
					<ProjectIcon title='Engine Assembly' name='engine' type='Mechanical'/>
					<ProjectIcon title='2702 Rebels 2019 Robot' name='2702-2019' type='Mechanical'/>
				</div>
            </div>
        </div>
	);
}
