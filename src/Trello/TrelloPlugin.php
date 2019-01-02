<?php
/**
 * @file
 * Plugin class for the Trello Subsystem
 */

namespace CL\Trello;

/**
 * Plugin class for the Trello Subsystem
 */
class TrelloPlugin extends \CL\Site\Plugin {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'trello';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['course', 'team'];}
}