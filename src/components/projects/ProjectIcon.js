import React from 'react';

export default function ProjectIcon(props) {

	var colors = {
        cad: '#0abde3',
        coding:"#a6c44e",
        mechanical:"#ff9f43",
        'web-dev':"#d65858"
    }

	let color = colors[props.type.toLowerCase()]
	let link = '/projects/'+props.name
	let img = '/img/projects/'+props.name+"/main.png"
	return (
		<div className="content">
			<a href={link}>
				<div className="content-overlay" style={{backgroundColor: color}}></div>
				<img className="content-image" src={img} alt=''/>
				<div className="content-details" style={{backgroundColor: color}}>
					<h3 className="content-title">{props.title}</h3>
					<p className="type">{props.type.toUpperCase()}</p>
				</div>
			</a>
		</div>
	);
}