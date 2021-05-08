/**
 * @author Rijal Tanjung
 * @licence MIT
 */
(function () {
    "use strict";

    // Selector helper
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    };

    // On Scroll event Listener
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    };

    let navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) {return;}

            let section = select(navbarlink.hash)
            if (!section) {return;}

            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    };
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    // Typing effect
    const targetTyped = select('.typed');
    if (targetTyped) {
        let typed_strings = targetTyped.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')

        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        })
    }

    // Animate On Scroll
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });
})()