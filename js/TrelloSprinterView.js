import TrelloSprinter from "trello-sprinter";

export const TrelloSprinterView = function(site, element) {
	const json = JSON.parse(element.innerText);
	element.innerText = '';
	element.style.display = 'block';

	let trello = new TrelloSprinter({
		sel: element,
		key: json.key,
		board: json.team,
		views: json.views
	});
}