<?php
/**
 * @file
 * Controller for handling connection to Trello and
 * storing the key and token.
 */

namespace Trello;


class TrelloConnectController extends \Controller {
	public function __construct(\Course $course, \User $user) {
		parent::__construct($course, $user);
	}

	public function post(&$post, &$session) {

		if(!$this->user->is_staff()) {
			return $this->json_error("Not authorized");
		}
		
		$trello = new Trello($this->course);
		$trello->set($post['key'], $post['token']);
		
		if($trello->write() !== false) {
			return $this->json_success("Successful");
		}

		return $this->json_error("Unable to save data to file system");
	}
}