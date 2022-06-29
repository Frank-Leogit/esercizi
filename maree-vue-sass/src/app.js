function initVue() {
    new Vue({
        el: '#app',
        data: {
            isOpen: false,
            activeIndex: '0',
            line: '',
            header: [
                {
                    url: '#home',
                    name: 'HOME',
                    dropdown: [
                        {
                            url: "",
                            name: "Main Home",
                        },
                        {
                            url: "",
                            name: "Floating Portfolio",
                        },
                        {
                            url: "",
                            name: "Portfolio Pinterest",
                        },
                        {
                            url: "",
                            name: "Animated Slider",
                        },
                        {
                            url: "",
                            name: "Portfolio Metro",
                        },
                        {
                            url: "",
                            name: "Portfolio Gallery",
                        },
                        {
                            url: "",
                            name: "Interactive Links",
                        },
                        {
                            url: "",
                            name: "Split Slider Showcase",
                        },
                        {
                            url: "",
                            name: "Portfolio Carousel",
                        },
                        {
                            url: "",
                            name: "Landing",
                        },
                    ]



                },
                {
                    url: '#pages',
                    name: 'PAGES',
                    dropdown: [
                        {
                            url: "",
                            name: "About Us"
                        },
                        {
                            url: "",
                            name: "About Me"
                        },
                        {
                            url: "",
                            name: "What We Offer"
                        },
                        {
                            url: "",
                            name: "Working Process"
                        },
                        {
                            url: "",
                            name: "Our Team"
                        },
                        {
                            url: "",
                            name: "Pricing Plans"
                        },
                        {
                            url: "",
                            name: "Contact Us"
                        },
                        {
                            url: "",
                            name: "Coming Soon"
                        },
                        {
                            url: "",
                            name: "404 Error Page"
                        },
                    ]
                },
                {
                    url: '#portfolio',
                    name: 'PORTFOLIO',

                },
                {
                    url: '#blog',
                    name: 'BLOG',
                    dropdown: [
                        {
                            url: "",
                            name: "Right Sidebar"
                        },
                        {
                            url: "",
                            name: "Left Sidebar"
                        },
                        {
                            url: "",
                            name: "Centerd"
                        },
                        {
                            url: "",
                            name: "Post Types"
                        },

                    ]
                },
                {
                    url: '#shop',
                    name: 'SHOP',
                    dropdown: [
                        {
                            url: "",
                            name: "Product List"
                        },
                        {
                            url: "",
                            name: "Product Single"
                        },
                        {
                            url: "",
                            name: "Shop Layouts"
                        },
                        {
                            url: "",
                            name: "Three Columns"
                        },
                        {
                            url: "",
                            name: "Three Columns Wide"
                        },
                        {
                            url: "",
                            name: "Four Columns"
                        },
                        {
                            url: "",
                            name: "Four Columns Wide"
                        },
                        {
                            url: "",
                            name: "Five Columns"
                        },
                        {
                            url: "",
                            name: "Five Columns Wide"
                        },
                        {
                            url: "",
                            name: "Shop Pages"
                        },


                    ]
                },
                {
                    url: '#elements',
                    name: 'ELEMENTS',

                }
            ],
            footer: [
                {
                    url: '',
                    name: "Let's get creative"
                },
                {
                    url: '',
                    name: "maree.qode@gmail.com"
                },
                {
                    url: '',
                    name: "+44645 321 789"
                },
                {
                    url: '',
                    name: "Avenue d'Auderghem 10"
                },
                {
                    url: '',
                    name: "1040 Brussels, Belgium"
                },
                {
                    url: '',
                    name: "Stay in touch with us"
                },
            ],
            footerLogo: "/maree-vue-sass/src/img/logo-sidearea-1-1.png",
            social: [
             {
                socialName: 'fa-pinterest-p'
            },
             {
                socialName: 'fa-facebook-f'
            },
             {
                socialName: 'fa-twitter'
            },
             {
                socialName: 'fa-linkedin-in'
            }
            ],
            images: [
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-3.png"
                },
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-1.png"
                },
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-2.png"
                },
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-4.png"
                },
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-5.png"
                },
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-6.png"
                },
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-7.png"
                },
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-8.png"
                },
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-9.png"
                },
                {
                    src: "/maree-vue-sass/src/img/short-slider-rev-1-img-10.png"
                },
            ]
        },
        methods: {
            mouseOver: function (index) {
                this.isOpen = true
                this.activeIndex = index;
                this.line = "text-line";


            },
            mouseLeave: function () {
                this.isOpen = false;
                this.activeIndex = "0";
                this.line = "";
            },
        }
    })
}
function init() {
    initVue();
};
document.addEventListener('DOMContentLoaded', init);