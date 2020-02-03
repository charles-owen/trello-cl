import TrelloSprinter from "trello-sprinter";

export const TrelloSprinterView = function(site, element) {
	const json = JSON.parse(element.innerText);
	element.innerText = '';
	element.style.display = 'block';

	var options = {
		sel: element,
		key: json.key,
		board: json.team,
		views: json.views,
		after: json.after
	};

	if(json.cards !== undefined) {
		options.cards = json.cards;
	}

	new TrelloSprinter(options);
}