<?php
/**
 * @file
 * Auxiliary view class for presenting trello-sprinter content.
 */

namespace CL\Trello;

use CL\Site\Site;
use CL\Site\View;

class TrelloSprinterView extends \CL\Site\ViewAux {

	/** Constructor
	 * @param Site $site The Site object
	 * @param string $teamingTag Optional teaming tag */
	public function __construct(Site $site, $team = null) {
		$this->site = $site;
		$this->user = $site->users->user;
		$this->team = $team;

		$this->views = ['board'=>[], 'sprint'=>[]];
	}

	/**
	 * Called when this auxiliary view is installed in a view
	 * @param View $view View we are installing into
	 */
	protected function install(View $view) {
		parent::install($view);

		$view->addJS('trello');
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'key':
				$this->key = $value;
				break;

			default:
				parent::__set($property, $value);
				break;
		}
	}

	/**
	 * Present the Trello analysis
	 * @return string HTML
	 */
	public function present() {
		$data = [
			'key'=>$this->key,
			'team'=>$this->team,
			'views'=>$this->views
		];

		$json = htmlspecialchars(json_encode($data), ENT_NOQUOTES);
		return <<<HTML
<div class="cl-trello-sprinter" style="display:none">$json</div>		
HTML;
	}

	/**
	 * Add a view.
	 *
	 * The only additional view at this time is:
	 * $trello->addView('sprintTable', ['addHeadings'=>10]);
	 *
	 * The value of addHeadings can be: false, true, or a specific number of expected sprints.
	 *
	 * @param string $name View name
	 * @param array $options View options
	 */
	public function addView($name, $options) {
		$this->views[$name] = $options;
	}


	private $site;
	private $user;
	private $team;
	private $key;
	private $views;
}