import '../css/index/main.css'
import React from 'react'

export default function Homepage(props) {

	function loadSplash(){
		fetch('splashes.txt')
		.then(response => response.text())
		.then(data => {
			let items = data.split(/\r?\n|\r/);
			let index = getRandomInt(0, items.length-1)
			let item = items[index]
			let subtitle = document.getElementById("subtitle")
			subtitle.innerText = item
  		});
	}
	
	// from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return (Math.floor(Math.random() * (max - min + 1)) + min)
	}

	loadSplash()

	return (
		<div className='title'>
			<p id="title" onClick={()=>console.log("hii")}>Owen Moogk</p>
            <p id="subtitle" onClick={loadSplash}></p>
		</div>
	);
}