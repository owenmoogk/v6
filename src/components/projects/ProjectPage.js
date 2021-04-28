import React from 'react';
import {useParams} from 'react-router-dom'
import 'css/projects/project-pages.css'

export default function ProjectIcon(props) {

	// the function called when loading page
	function loadProjectPage(xmlPage, name) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) {
				projectPage(this, name);
			}
		};
		xmlhttp.open("GET", xmlPage, true);
		xmlhttp.send();
	}

	// actual loading process
	function projectPage(xml, name) {

		// xml doxument
		var xmlDoc = xml.responseXML;

		// entire html of page
		var txt = "";

		// load header of page
		var pageTitle = xmlDoc.getElementsByTagName('page-title')[0].innerHTML
		var date = xmlDoc.getElementsByTagName('date')[0].innerHTML
		txt += '<div class="project-page-title"><p style="line-height: 70px;">'+pageTitle+'</p></div><div class="date"><p class="pdate">'+date+'</p></div>';


		// load main part of the page
		var blocks = xmlDoc.getElementsByTagName("block");

		// loading the main part of the page
		for (var currBlockNum = 0; currBlockNum < blocks.length; currBlockNum++) {
			var currBlockLength = blocks[currBlockNum].children.length // the number of elements in the current block
			var currBlock = blocks[currBlockNum].children // the elements inside the current block

			txt += '<div class="block">'

			// looping thru the elements in the block
			for (var blockElementNum = 0; blockElementNum < currBlockLength; blockElementNum++){
				var elementType = currBlock[blockElementNum].tagName // contains the tag name for the element (eg... title, text, image)
				var elementData = currBlock[blockElementNum].innerHTML // contains the inner data for the element

				// appending text to var 'txt' depending on tag name
				if (elementType === 'title'){
					txt += '<div class="text"><h1 class="left">'+elementData+'</h1>'
				}
				else if (elementType === 'text'){
					
					// add in breaks for ~~
					var exitLoop = false
					while (exitLoop === false){
						elementData = elementData.replace('~~','<br>')
						var i = elementData.search('~~')
						if (i === -1){
							exitLoop = true
						}
					}
					txt += '<p class="left">'+elementData+'</p></div>'
				}
				else if (elementType === 'image'){
					txt += '<div class="img"><img src="'+process.env.PUBLIC_URL+"/img/projects/"+name+"/"+elementData+'" class="img"></div>'
				}
				else if (elementType === 'render'){
					txt += '<div class="render"><img src="'+process.env.PUBLIC_URL+"/img/projects/"+name+"/"+elementData+'" class="img"></div>'
				}
				else{
					console.log('unknown tag name') // shouldnt ever happen
				}
			}
			
			txt += '</div>' // close out block div

		}
		document.getElementsByClassName("body")[0].innerHTML = txt;
	}

	// passed in from the router
	var {name} = useParams()
	var xmlFileLink = process.env.PUBLIC_URL + '/assets/projects/'+name+".xml"
	
	return (
		<div className="body">
			{loadProjectPage(xmlFileLink, name)}
		</div>
	);
}