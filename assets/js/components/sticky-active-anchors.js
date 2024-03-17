document.addEventListener('DOMContentLoaded', (event) => {

    // check if page contains class .anchors .anchors--sticky
    const anchorsContainer = document.querySelector('.anchors.anchors--sticky');

    if ( anchorsContainer && window.innerWidth >= 992 ) {
        
        const archiveCourse = document.querySelector('.post-type-archive-course');
        
        // init the observer
        if (archiveCourse) {
            var options = {
                root: null,
                rootMargin: '-25% 0px -25% 0px',
                // rootMargin: '0px 0px -80% 0px',
                threshold: 0.25
            }
        } else {
            var options = {
                root: null,
                rootMargin: '-25% 0px -25% 0px',
                // rootMargin: '0px 0px -80% 0px',
                threshold: 0.25
            }
        }
        
        // simple function to use for callback in the intersection observer
        const currentAnchor = (entries, observer) => {
            entries.forEach((entry) => {
                // verify the element is intersecting
                if( entry.isIntersecting && entry.intersectionRatio >= 0.25 ) {
                // if( entry.isIntersecting ) {
                    // remove old active class
                    document.querySelectorAll('.active').forEach(active => {
                        active.classList.remove('active');
                    }); 
                    // get id of the intersecting section
                    let id = entry.target.getAttribute('id');
                    // find matching anchor & add appropriate class
                    let newActiveAnchor = document.querySelector(`[href="#${id}"]`).classList.add('active');
                }
            });
        }

        const observer = new IntersectionObserver(currentAnchor, options);

        // Target all sections that have an `id` applied
        const sections = document.querySelectorAll('.js-anchor-section[id]');
        sections.forEach((section) => {
            observer.observe(section);
        });
        
    }

    // var lastScrollPosition = 0;

    // window.addEventListener("scroll", function(){
    //    var currentScrollPosition = window.scrollY;
    //    if (currentScrollPosition > lastScrollPosition) {
    //       // downscroll code
    //    } else if (currentScrollPosition < lastScrollPosition) {
    //       // upscroll code
    //    } // else was horizontal scroll
    //    lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition; // For Mobile or negative scrolling
    // }, false);

}); // end DOMContentLoaded