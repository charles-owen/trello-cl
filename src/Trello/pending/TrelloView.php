<?php
/**
 * @file
 * View class for display of Trello data
 */

namespace Trello;

/**
 * View class for access to Trello.com
 *
 * Uses Trello PHP class for data acquisition.
 */
class TrelloView extends \ViewAux {

	/**
	 * TrelloView constructor.
	 * @param \Course $course Course object
	 */
	public function __construct(\Course $course, Trello $trello = null) {
		$this->course = $course;

		if($trello === null) {
			$trello = new Trello($course);
		}

		$this->trello = $trello;
	}

	/**
	 * Called when this auxilliary view is installed in a view
	 * @param View $view View we are installing into
	 */
	public function install(\View $view) {
		$view->add_css("trello/trello.css");
	}

	public function present_project($name) {
		try {
			$this->trello->fetch($name);
			$project = $this->trello->get_project();
		} catch(TrelloException $ex) {
			return "<p>" . $ex->getMessage() . "</p>";
		}

		$html = '<div class="trello">' .
			$this->present_lists($project) .
			"</div>";

		return $html;
	}


	/**
	 * Present all lists for a given board
	 * @param $project Project we are presenting
	 * @return string
	 */
	private function present_lists($project) {
		$html = '';

		foreach($project as $list) {
			if($list['closed']) {
				continue;
			}

			$html .= '<div class="view">' .
				$this->present_list($list) .
				'</div>';
		}

		return $html;
	}

	/**
	 * Present a single list
	 * @param $list
	 * @return string
	 *
	 * {
	 *  // Basic Trello items for a list
	 * "id":"57ee8c067a7aeb94edb2d93e",
	 * "name":"Completed",
	 * "closed":false,
	 * "idBoard":"57ee8b0dbc5d0bb14e9ad804",
	 * "pos":655359,
	 * "subscribed":false
	 *
	 *  // Added child items
	 *  "cards":array()
	 * }
	 */
	private function present_list($list) {
		// Body of list (the cards)
		$listId = $list['id'];
		$body = $this->present_cards($list['cards']);
		$numCards = count($list['cards']);
		$counts = $this->trello->count_members_on_cards($list['cards']);

		// Membership count in the list
		$members = '<p class="count"><em>Cards:</em>[' . $numCards . '] ';
		foreach($counts as $id => $count) {
			$member = $this->trello->get_member($id);
			$members .= $member['fullName'] . ':[' . $count . ']&nbsp;&nbsp;';
		}
		$members .= '</p>';

		$html = \Toggle::begin($list['name'], "h3") . $members . $body . \Toggle::end();

		return $html;
	}

	private function present_cards($cards) {
		$html = '';

		foreach($cards as $card) {
			$html .= $this->present_card($card);
		}

		return $html;
	}

	private function present_card($card) {
		if($card['closed']) {
			return '';
		}

		$dateCreated = hexdec(substr($card['id'], 0, 8));
		$date = date("n-d-Y g:ia", $dateCreated);
		$name = strip_tags($card['name']);
		$cardId = strip_tags($card['id']);

		$desc = str_replace("\n", "<p>", strip_tags($card['desc']));

		$members = '';
		foreach($card['idMembers'] as $memberId) {
			$member = $this->trello->get_member($memberId);
			$members .= '<span>' . $member['fullName'] . '</span> ';
		}

		$html = <<<HTML
<div class="card">

<h4><span class="float-right">$date</span>$name</h4>
<p class="members">$members</p>
<div class="description">
<p>$desc</p>
</div>
HTML;

		$html .= $this->present_comments($card['comments']);
		$html .= $this->present_updates($card['updates']);

		$html .= "</div>";

		return $html;
	}

	/**
	 * Present comments on the card.
	 * @param $cardId
	 * @return string
	 *
	 * Array
	(
	[id] => 57eec1ca22684646b1193abd
	[idMemberCreator] => 57ec1bdafeedcbbc73d600d1
	[data] => Array
	(
	[list] => Array
	(
	[name] => Design
	[id] => 57e920a2b34518203fd5f319
	)

	[board] => Array
	(
	[shortLink] => i9eXE4yJ
	[name] => Project 1 Team: Arbo
	[id] => 57e9204ac3f323f1785d7be4
	)

	[card] => Array
	(
	[shortLink] => Fggvd4nX
	[idShort] => 21
	[name] => Visual Paradigm Class Design
	[id] => 57eec0776fd005f7b81c8239
	)

	[text] => Visual Paradigm Class Design
	)

	[type] => commentCard
	[date] => 2016-09-30T19:49:30.974Z
	[memberCreator] => Array
	(
	[id] => 57ec1bdafeedcbbc73d600d1
	[avatarHash] =>
	[fullName] => Brittany Galliers
	[initials] => BG
	[username] => brittanygalliers1
	)

	)
	 */
	private function present_comments($comments) {
		$html = <<<HTML
<div class="comments">
HTML;

		foreach($comments as $action) {
			$dateCreated = strtotime($action['date']);
			$date = date("n-d-Y g:ia", $dateCreated);
			$member = $this->trello->get_member($action['idMemberCreator'])['fullName'];
			$text = strip_tags($action['data']['text']);
			$text = str_replace("\n", "<p>", $text);

			$html .= <<<HTML
<h5><span class="float-right">$date</span>$member</h5><p>$text</p>
HTML;
		}

		$html .= "</div>";
		return $html;
	}

	private function present_updates($updates) {
		$html = <<<HTML
<div class="updates">
HTML;

		foreach($updates as $action) {
			$dateCreated = strtotime($action['date']);
			$date = date("n-d-Y g:ia", $dateCreated);
			$member = $this->trello->get_member($action['idMemberCreator'])['fullName'];

			$data = $action['data'];
			$listBefore = $data['listBefore']['name'];
			$listAfter = $data['listAfter']['name'];

			$html .= <<<HTML
<p><span class="float-right">$date</span>$member moved from 
<span class="list">$listBefore</span> to <span class="list">$listAfter</span></p>
HTML;

		}

		$html .= "</div>";
		return $html;
	}

	private $course;
	private $trello;

}