import React from 'react';
import {Link} from 'react-router-dom'

export default function ProjectIcon(props) {

	var colors = {
        cad: '#0abde3',
        coding:"#a6c44e",
        mechanical:"#ff9f43",
        'web-dev':"#d65858"
    }

	let color = colors[props.type.toLowerCase()]
	let link = '/projects/'+props.name
	// using the link prop overrides the default link
	let linkChanged = false
	if (props.link){
		linkChanged = true
		link = props.link
	}

	let img = process.env.PUBLIC_URL + '/img/projects/'+props.name+"/main.png"
	function innerHtml(){
		return(
			<div>
				<div className="content-overlay" style={{backgroundColor: color}}></div>
				<img className="content-image" src={img} alt=''/>
				<div className="content-details" style={{backgroundColor: color}}>
					<h3 className="content-title">{props.title}</h3>
					<p className="type">{props.type.toUpperCase()}</p>
				</div>
			</div>
		)
		
	}
	return (
		<div className="content">
			{linkChanged ? 
			<a href={link} target='_blank'>
				{innerHtml()}
			</a>
			:
			<Link to={link}>
				{innerHtml()}
			</Link>
			}
		</div>
	);
}