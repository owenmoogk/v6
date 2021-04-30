import React from 'react';
import ContactLink from './ContactLink.js'
import 'css/contact.css'

export default function ContactPage() {
	return (
		<div className="main">
			<p className="title">Contact</p>
			<div className="contact">
				<div id="main">
					<ContactLink link='mailto:owenmoogk@gmail.com' text='Personal Email' />
					<ContactLink link='tel:+1-226-989-0602' text='Phone' />
					<ContactLink link='https://linktr.ee/owenmoogk' text='Social Media' />
					<ContactLink link='https://github.com/owenmoogk' text='Github' />
					<ContactLink link='https://www.thingiverse.com/owen_moogk' text='Thingiverse' />
					<ContactLink link='https://repl.it/@owenm21' text='Repl.it' />
					<ContactLink link='https://www.linkedin.com/in/owen-moogk-1ab9371b8/' text='LinkedIn' />
				</div>
			</div>
		</div>
	);
}
