/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function initVue() {
  new Vue({
    el: '#app',
    data: {
      isOpen: false,
      activeIndex: '0',
      line: '',
      header: [{
        url: '#home',
        name: 'HOME',
        dropdown: [{
          url: "",
          name: "Main Home"
        }, {
          url: "",
          name: "Floating Portfolio"
        }, {
          url: "",
          name: "Portfolio Pinterest"
        }, {
          url: "",
          name: "Animated Slider"
        }, {
          url: "",
          name: "Portfolio Metro"
        }, {
          url: "",
          name: "Portfolio Gallery"
        }, {
          url: "",
          name: "Interactive Links"
        }, {
          url: "",
          name: "Split Slider Showcase"
        }, {
          url: "",
          name: "Portfolio Carousel"
        }, {
          url: "",
          name: "Landing"
        }]
      }, {
        url: '#pages',
        name: 'PAGES',
        dropdown: [{
          url: "",
          name: "About Us"
        }, {
          url: "",
          name: "About Me"
        }, {
          url: "",
          name: "What We Offer"
        }, {
          url: "",
          name: "Working Process"
        }, {
          url: "",
          name: "Our Team"
        }, {
          url: "",
          name: "Pricing Plans"
        }, {
          url: "",
          name: "Contact Us"
        }, {
          url: "",
          name: "Coming Soon"
        }, {
          url: "",
          name: "404 Error Page"
        }]
      }, {
        url: '#portfolio',
        name: 'PORTFOLIO'
      }, {
        url: '#blog',
        name: 'BLOG',
        dropdown: [{
          url: "",
          name: "Right Sidebar"
        }, {
          url: "",
          name: "Left Sidebar"
        }, {
          url: "",
          name: "Centerd"
        }, {
          url: "",
          name: "Post Types"
        }]
      }, {
        url: '#shop',
        name: 'SHOP',
        dropdown: [{
          url: "",
          name: "Product List"
        }, {
          url: "",
          name: "Product Single"
        }, {
          url: "",
          name: "Shop Layouts"
        }, {
          url: "",
          name: "Three Columns"
        }, {
          url: "",
          name: "Three Columns Wide"
        }, {
          url: "",
          name: "Four Columns"
        }, {
          url: "",
          name: "Four Columns Wide"
        }, {
          url: "",
          name: "Five Columns"
        }, {
          url: "",
          name: "Five Columns Wide"
        }, {
          url: "",
          name: "Shop Pages"
        }]
      }, {
        url: '#elements',
        name: 'ELEMENTS'
      }],
      footer: [{
        url: '',
        name: "Let's get creative"
      }, {
        url: '',
        name: "maree.qode@gmail.com"
      }, {
        url: '',
        name: "+44645 321 789"
      }, {
        url: '',
        name: "Avenue d'Auderghem 10"
      }, {
        url: '',
        name: "1040 Brussels, Belgium"
      }, {
        url: '',
        name: "Stay in touch with us"
      }],
      footerLogo: "/maree-vue-sass/src/img/logo-sidearea-1-1.png",
      social: [{
        socialName: 'fa-pinterest-p'
      }, {
        socialName: 'fa-facebook-f'
      }, {
        socialName: 'fa-twitter'
      }, {
        socialName: 'fa-linkedin-in'
      }],
      images: [{
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-3.png"
      }, {
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-1.png"
      }, {
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-2.png"
      }, {
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-4.png"
      }, {
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-5.png"
      }, {
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-6.png"
      }, {
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-7.png"
      }, {
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-8.png"
      }, {
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-9.png"
      }, {
        src: "/maree-vue-sass/src/img/short-slider-rev-1-img-10.png"
      }]
    },
    methods: {
      mouseOver: function mouseOver(index) {
        this.isOpen = true;
        this.activeIndex = index;
        this.line = "text-line";
      },
      mouseLeave: function mouseLeave() {
        this.isOpen = false;
        this.activeIndex = "0";
        this.line = "";
      }
    }
  });
}

function init() {
  initVue();
}

;
document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmaree_vue_sass"] = self["webpackChunkmaree_vue_sass"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;