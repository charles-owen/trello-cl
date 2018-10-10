<?php
/**
 * @file
 * View class for page that connects to Trello
 */

namespace Trello;

/**
 * View class for page that connects to Trello
 */
class TrelloConnectView extends \View {
	public function __construct(\Course $course, \User $user, array &$git, array &$session) {
		parent::__construct($course, $user);


		$this->set_autoback();
		$this->set_title('Trello Connect');


	}

	/**
	 * Set the Trello API key to use
	 * @param $key Trello API key
	 */
	public function set_key($key) {
		$js = "https://api.trello.com/1/client.js?key=" . $key;
		$this->add_rel_js($js);

		$this->add_js("trello/trello.con.js");

		$this->js = <<<JS
new TrelloLib.Connect('$key');
JS;
	}

	public function present() {
		return <<<HTML
<p class="center trello-connect">Connecting to Trello...</p>
<p id="msg" class="center error"></p>
HTML;

	}
}