import React from 'react';

export default function ContactLink(props) {
	return (
		<div className="link primary">
			<a href={props.link} target="_blank" rel='noreferrer'>
				<div className="text">{props.text}</div>
			</a>
		</div>
	);
}