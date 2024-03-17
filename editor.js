wp.blocks.registerBlockStyle('core/button', {
    name: 'primary',
    label: 'Bleu'
});
wp.blocks.registerBlockStyle('core/button', {
    name: 'secondary',
    label: 'Jaune'
});
wp.blocks.registerBlockStyle('core/button', {
    name: 'white',
    label: 'Blanc'
});
wp.blocks.registerBlockStyle('core/button', {
    name: 'empty',
    label: 'Bordures bleues'
});
wp.domReady( () => {
    wp.blocks.unregisterBlockStyle('core/button', 'default');
    wp.blocks.unregisterBlockStyle('core/button', 'fill');
    wp.blocks.unregisterBlockStyle('core/button', 'outline');
    wp.blocks.unregisterBlockStyle('core/button', 'squared');
});