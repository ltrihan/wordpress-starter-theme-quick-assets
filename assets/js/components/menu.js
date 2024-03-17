
document.addEventListener('DOMContentLoaded', (event) => {
    
    const menu = document.querySelector('.menu');
    
    if ( window.innerWidth < 1200 && menu ) {
        
        // const menuItemsToAnimate = document.querySelectorAll('.menu__list > .menu-item > a'); // all selectors of elements to be animated
        // menuItemsToAnimate.forEach((element) => {
        //     element.classList.add('js-menu-animate');
        // });
    
        // const menuItemLinks = document.querySelectorAll('.js-menu-animate'); // et n'animer que les éléments qui ont cette classe (objectif : éviter l'animation delay sur les éléments non visibles)
    
        // menuItemLinks.forEach((menuItemLink, index) => {
        //     menuItemLink.style.animationDelay = `${index * 0.15}s`;
        // });
    
        const submenuTriggers = document.querySelectorAll('.menu__list > .menu-item-has-children > a');
    
        submenuTriggers.forEach((submenuTrigger) => {
            submenuTrigger.addEventListener('click', (event) => {
                event.preventDefault();
                submenuTrigger.classList.toggle('active');
            });
        });
    };

});