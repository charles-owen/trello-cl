import TrelloSprinter from "trello-sprinter";

export const TrelloSprinterView = function(site, element) {
	const json = JSON.parse(element.innerText);
	element.innerText = '';
	element.style.display = 'block';

	new TrelloSprinter({
		sel: element,
		key: json.key,
		board: json.team,
		views: json.views,
		after: json.after
	});
}