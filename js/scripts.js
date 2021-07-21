window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

const routes = [
    { path: '/', component: httpVueLoader('./vue/index.vue') },
    { path: '/about', component: httpVueLoader('./vue/about.vue') },
    { path: '/contact', component: httpVueLoader('./vue/contact.vue') },
    { path: '/man-must-explore-and-this-is-exploration-at-its-greatest',
        component: httpVueLoader('./vue/post-1.vue') },
    { path: '/menambahkan-video-pada-html',
        component: httpVueLoader('./vue/post-html-video.vue') },
    { path: '/menambahkan-audio-pada-html',
        component: httpVueLoader('./vue/post-html-audio.vue') },
    { path: '/membuat-form-html',
        component: httpVueLoader('./vue/post-html-form.vue') },
    { path: '/membuat-list-html',
        component: httpVueLoader('./vue/post-html-list.vue') },
];
const router = new VueRouter({
    routes // short for `routes: routes`
});

router.beforeResolve((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

var app = new Vue({
    router,
    el: '#app',
    data: {
        siteName: 'How To',
    },
    components: {
        'page-footer': httpVueLoader('./vue/components/page-footer.vue'),
    },
    methods: {
      setPageTitle(pageTitle) {
          document.title = pageTitle;
      }
    },
    created() {
        eventBus.$on('set-page-title', this.setPageTitle);
    }
});