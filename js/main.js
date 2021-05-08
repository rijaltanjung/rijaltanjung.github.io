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

    // Event listener helper
    const on = (type, el, listener, all = false) => {
        let selectEl =  select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

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

    // Scrolls to an element with header offset
    const scrollto = (el) => {
        let elementPos = select(el).offsetTop;
        window.scrollTo({
            top: elementPos,
            behavior: 'smooth'
        })
    }

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

    // Mobile nav toggle
    on('click', '.mobile-nav-toggle', function (e) {
        select('body').classList.toggle('mobile-nav-active')
        this.classList.toggle('bx-menu')
        this.classList.toggle('bx-x')
    })

    // Scroll with offset on links with a class name .scrollto
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault();

            let body = select('body')
            if (body.classList.contains('mobile-nav-active')) {
                body.classList.remove('mobile-nav-active')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bx-menu')
                navbarToggle.classList.toggle('bx-x')

            }
            scrollto(this.hash)
        }
    }, true)

    // Scroll with offset on page load with hash links in the url
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    })

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