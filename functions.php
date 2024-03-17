<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Custom post types declarations
 */
// require_once('functions/cpt/news.php');

/**
 * Commons functions
 */
require_once('functions/commons/limit-characters.php');
require_once('functions/commons/truncate-string.php');
// require_once('functions/commons/add-slug-body-class.php');
// require_once('functions/commons/add-custom-link-to-menu-nav.php');

/**
 * Backoffice
 */
require_once('functions/admin/admin-custom-menu.php');
require_once('functions/admin/admin-menus.php');
require_once('functions/admin/admin-options-pages.php');
require_once('functions/admin/admin-duplicate-post.php');

/**
 * Permalinks rules
 */
// require_once('functions/permalinks.php');

/**
 * Plugins, comment or delete if you doesn't need it
 */

require_once('functions/yoast.php');