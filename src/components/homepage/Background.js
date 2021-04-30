import React, {useEffect} from 'react'
import {loadBackground} from './backgroundHelper.js'

export default function Background(props) {

	useEffect(() => {
		loadBackground();
	}, []);

	return (
		<canvas id='c' style={{zIndex: -1}}></canvas>
	);
}