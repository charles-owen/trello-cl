<?php
/**
 * @file
 * View class for display of Trello data, assuming all 
 * viewing is done using the JavaScript client.
 */

namespace Trello;

/**
 * View class for access to Trello.com
 *
 * Based on use of local TrelloLib JavasScript library.
 */
class TrelloJsView extends \ViewAux {

	/**
	 * TrelloJsView constructor.
	 * @param \Course $course Course object
	 */
	public function __construct(\Course $course) {
		$this->course = $course;
	}

	/**
	 * Set the Trello API key to use
	 *
	 * Must be called before adding to the view.
	 * @param $key Trello API key
	 */
	public function set_key($key) {
		$this->apikey = $key;
	}


	/**
	 * Called when this auxilliary view is installed in a view
	 * @param View $view View we are installing into
	 */
	public function install(\View $view) {
		$view->add_css("trello/trello.css");

		if($this->apikey === null) {
			die("Trello API key not set");
		}

		$js = "https://api.trello.com/1/client.js?key=" . $this->apikey;
		$view->add_rel_js($js);

		if($this->course->get_sandbox()) {
			$jsFile = 'trello/trello.con.js';
		} else {
			$jsFile = 'trello/trello.min.js';
		}

		$ts = filemtime(__DIR__ . '/../../' . $jsFile);

		$view->add_js("trello/trello.con.js?t=$ts");
	}

	public function tokenKiller() {
	    return '<p class="center"><a href="javascript:" onclick="TrelloLib.tokenKiller(event)">Trello Disconnect</a></p>';
    }


	public function present_board($name) {
		return <<<HTML
<div class="trello"></div>
<script>
new TrelloLib.BoardView("$name");
</script>
HTML;
	}

	private $apikey = null;
	private $course;
}