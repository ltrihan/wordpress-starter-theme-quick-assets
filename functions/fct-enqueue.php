<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

function ltrihan_register_assets() {
    $the_theme = wp_get_theme();
    
    wp_enqueue_style('bundle', get_template_directory_uri() . '/dist/css/bundle.min.css', array(), $the_theme->get('Version'));
    wp_enqueue_script('bundle', get_template_directory_uri() . '/dist/js/bundle.min.js', array(), $the_theme->get('Version'));
}

add_action('wp_enqueue_scripts', 'ltrihan_register_assets');