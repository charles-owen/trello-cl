<?php
/**
 * @file
 * Main class for access to Trello.com
 */

namespace Trello;

class TrelloException extends \Exception {
	public function __construct($message) {
		parent::__construct($message);
	}
}

/**
 * Main class for access to Trello.com
 *
 * Defines the connection to Trello. Active object that saves
 * the information in the file system.
 */
class Trello {
	const ASSIGNMENT_TAG = "trello_sys";
	const TAG = "auth";

	/**
	 * Trello constructor.
	 * @param \Course $course Course object
	 */
	public function __construct(\Course $course) {
		$this->course = $course;
	}




	public function set($key, $token) {
		$this->key = $key;
		$this->token = $token;
	}
	
	public function write() {
		$json = json_encode(array('key' => $this->key, 'token' => $this->token));

		$filesys = new \FileSystem\FileSystem($this->course);
		return $filesys->save_text(null, self::ASSIGNMENT_TAG, self::TAG, self::TAG, $json, "application/json");
	}

	public function read() {
		$filesys = new \FileSystem\FileSystem($this->course);
		$data = $filesys->read_text(null, self::ASSIGNMENT_TAG, self::TAG, self::TAG);
		if($data === null) {
			return false;
		}

		$obj = json_decode($data['data'], true);
		$this->key = $obj['key'];
		$this->token = $obj['token'];
		return true;
	}

	/**
	 * Getch a Trello project as a big PHP array
	 * @param $name Name of the project
	 * @throws TrelloException
	 */
	public function fetch($name) {
		$this->members = array();

		if($this->read() === false) {
			throw new TrelloException("Not currently connected to Trello");
		}

		$board = $this->find_board($name);
		if($board === null) {
			throw new TrelloException("Board does not exist on Trello");
		}

		$boardId = $board['id'];
		
		$this->project = $this->get_lists($boardId);
	}

	/**
	 * Get the fetched project
	 * @return array containing project
	 */
	public function get_project() {
		return $this->project;
	}

	/**
	 * Get all lists for a given board
	 * @param $boardId
	 * @return string
	 */
	private function get_lists($boardId) {
		$cmd = "/1/boards/$boardId/lists?filter=all";
		$json = $this->api($cmd);
		$lists = json_decode($json, true);

		$project = array();

		foreach($lists as $list) {
			if($list['closed']) {
				continue;
			}

			$project[] = $this->get_list($list);
		}

		return $project;
	}

	/**
	 * Fetch a single list
	 * @param $list
	 * @return string
	 *
	 * Return is object like below plus this addition:
	 *  "cards":array()
	 *
	 * {
	 *  // Basic Trello items for a list
	 * "id":"57ee8c067a7aeb94edb2d93e",
	 * "name":"Completed",
	 * "closed":false,
	 * "idBoard":"57ee8b0dbc5d0bb14e9ad804",
	 * "pos":655359,
	 * "subscribed":false
	 * }
	 */
	private function get_list($list) {
		$this->clear_member_counts();

		$list["cards"] = $this->get_cards($list);

		return $list;
	}

	/**
	 * Get all cards for a given list
	 * @param $list List we are getting the cards for
	 * @return array Array of cards
	 */
	private function get_cards($list) {
		$listId = $list['id'];
		
		$cmd = "/1/lists/$listId/cards?filter=all";
		$json = $this->api($cmd);
		$cards = 

		$cards = array();
		
		foreach(json_decode($json, true) as $card) {
			if($card['closed']) {
				continue;
			}

			$cards[] = $this->get_card($card);
		}

		return $cards;
	}

	/**
	 * @param $card
	 * @return mixed
	 *
	 * Return is object below plus this addition:
	 * "comments":array()
	 *
	Array
	(
	[id] => 57fbfce988fbf0230dbf49c1
	[checkItemStates] => 
	[closed] => 
	[dateLastActivity] => 2016-10-13T23:37:16.916Z
	[desc] => 1: Roles
	Previous Team Leader - Robert
	New Team Leader - Mohamed
	Scribe - Noah

	2: Previous Sprint Tasks
	REfactor CPlayingField into COrbit, fix virtual pixels (completed)
	Streamline Loading Image Code (completed)
	Random Emission of pokemon and pokestops (completed)
	Draw list of pokeballs (completed)
	Pokeballs class (completed)

	Backlog:
	Allow pokemon to be caught/add hit test (re-assigned to Mohamed)
	Draw list of caught pokemon
	(Both tasks moved to current sprint)

	3: Added Risks
	We must make sure we are implementing our current code cleanly so problems don't arise further down the road - see risks card.

	4: Design Update
	(none)

	5: Task and Review Assignments: 
	Add/remove pokemon functions (Robert, Reviewer: Noah)
	Add/remove pokemon tests (Robert, Reviewer: Mohamed)
	Test Pokeball speed (Jim, Reviewer: Robert)
	Test Orbiting Items (Noah, Reviewer: Jim)


	[descData] => Array
	(
	[emoji] => Array
	(
	)

	)

	[idBoard] => 57ed38aa5eb1ad2f1ecf4298
	[idList] => 57ed38c6906a5988c6e3ea5c
	[idMembersVoted] => Array
	(
	)

	[idShort] => 58
	[idAttachmentCover] => 
	[manualCoverAttachment] => 
	[idLabels] => Array
	(
	)

	[name] => 10/10
	[pos] => 262143
	[shortLink] => qyvUCZdq
	[badges] => Array
	(
	[votes] => 0
	[viewingMemberVoted] => 
	[subscribed] => 
	[fogbugz] => 
	[checkItems] => 0
	[checkItemsChecked] => 0
	[comments] => 0
	[attachments] => 0
	[description] => 1
	[due] => 
	)

	[due] => 
	[idChecklists] => Array
	(
	)

	[idMembers] => Array
	(
	[0] => 52497d6d60bc06023a0001a2
	[1] => 57ed4068c3f2f2f4bdcacd8d
	[2] => 57eed26dd5dead116ce2b467
	[3] => 57ed3e0d37fd131cc6ab2848
	)

	[labels] => Array
	(
	)

	[shortUrl] => https://trello.com/c/qyvUCZdq
	[subscribed] => 
	[url] => https://trello.com/c/qyvUCZdq/58-10-10
	)
	 */
	private function get_card($card) {
		// Ensure we have all members loaded...
		foreach($card['idMembers'] as $memberId) {
			$member = $this->get_member($memberId);
		}

		$actions = $this->get_comments($card);
		$card['comments'] = $actions['comments'];
		$card['updates'] = $actions['updates'];
		return $card;
	}

	/**
	 * Get comments attached to a card
	 * @param $card Card we are attached to
	 * @return array Array
	 *
	 * Comments:
	 *
	Array
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
	[fullName] => Brittany
	[initials] => BG
	[username] => brittany1
	)

	)
	 * Updates
	 * Array
	(
	[id] => 57f01a9ba722b9fad917e284
	[idMemberCreator] => 52497d6d60bc06023a0001a2
	[data] => Array
	(
	[listAfter] => Array
	(
	[name] => Completed
	[id] => 57ed38e117508c79cc9d1022
	)

	[listBefore] => Array
	(
	[name] => This Sprint Completed
	[id] => 57ed38dc90c1bf61f4330387
	)

	[board] => Array
	(
	[shortLink] => eiYYoQen
	[name] => Beedle
	[id] => 57ed38aa5eb1ad2f1ecf4298
	)

	[card] => Array
	(
	[shortLink] => 3zNeK7ay
	[idShort] => 27
	[name] => Update UML
	[id] => 57edaab3d78d3178fe1cd0fc
	[idList] => 57ed38e117508c79cc9d1022
	)

	[old] => Array
	(
	[idList] => 57ed38dc90c1bf61f4330387
	)

	)

	[type] => updateCard
	[date] => 2016-10-01T20:20:43.833Z
	[memberCreator] => Array
	(
	[id] => 52497d6d60bc06023a0001a2
	[avatarHash] =>
	[fullName] => Noah Keppers
	[initials] => NK
	[username] => noahkeppers
	)

	)
	 */
	private function get_comments($card) {
		$cardId = $card['id'];
		$comments = array();
		$updates = array();

		$cmd = "/1/cards/$cardId/actions?filter=commentCard,updateCard:idList";
		$json = $this->api($cmd);

		foreach(json_decode($json, true) as $action) {
			if($action['type'] === 'commentCard') {
				$comments[] = $action;
			} else if($action['type'] === 'updateCard') {
				$updates[] = $action;
			}
		}

		return array("comments" => $comments, "updates" => $updates);
	}


	private function find_board($name) {
		$cmd = "/1/member/me/boards?fields=all";
		$json = $this->api($cmd);
		$boards = json_decode($json, true);
		foreach($boards as $board) {
			$regex = "#" . $name . "$#i";
			if(preg_match($regex, $board['name']) === 1) {
				return $board;
			}
		}

		return null;
	}

	private function api($cmd) {
		$curl = curl_init();

		$url = "https://api.trello.com" . $cmd .
			'&key=' . $this->key . '&token=' . $this->token;
//echo "<p>$url</p>";
		curl_setopt($curl, CURLOPT_URL, $url);

		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: text/html; charset=utf-8'));
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

		$json = curl_exec($curl);
		curl_close($curl);
		return $json;
	}

	/**
	 * Get a member based on the ID
	 *
	 * This caches the result so it only has to look it up once.
	 *
	 * @param $memberId ID for the member
	 * @return mixed Member array from Trello
	 */
	public function get_member($memberId) {
		if(isset($this->members[$memberId])) {
			return $this->members[$memberId]["member"];
		}

		$cmd = "/1/members/$memberId?filter=all";
		$json = $this->api($cmd);
		$member = json_decode($json, true);
		$this->members[$memberId] = array("member" => $member, "count" => 0);

		return $member;
	}

	/**
	 * Count the members attached to cards.
	 * @param $cards Array of cards to count
	 * @return Array of member ID to count
	 */
	public function count_members_on_cards($cards) {
		$counts = array();
		foreach($cards as $card) {
			foreach($card['idMembers'] as $id) {
				if(isset($counts[$id])) {
					$counts[$id]++;
				} else {
					$counts[$id] = 1;
				}
			}
		}
		
		return $counts;
	}

	private function clear_member_counts() {
		foreach($this->members as $key => $member) {
			$this->members[$key]['count'] = 0;
		}
	}

	private function inc_member_count($memberId) {
		$this->get_member($memberId);
		$this->members[$memberId]["count"]++;
	}

	private function get_member_count($memberId) {
		if (isset($this->members[$memberId])) {
			return $this->members[$memberId]["count"];
		}

		return 0;
	}
	
	private $project = null;
	private $members = array();
	
	private $key = null;	///< Access key (API)
	private $token = null;	///< Access token (provided when connected
}