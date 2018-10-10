import {TrelloSprinterView} from './TrelloSprinterView';

export const TrelloFactory = function() {
}

TrelloFactory.create = function(site) {

	site.start( () => {
		let elements = document.querySelectorAll('div.cl-trello-sprinter');
		for(let i=0; i<elements.length; i++) {
			new TrelloSprinterView(site, elements[i]);
		}
	});
}