/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadContent.js":
/*!****************************!*\
  !*** ./src/loadContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContent: () => (/* binding */ loadContent)
/* harmony export */ });
function loadContent() {
    
    // changing background color for buttons
    const homeBtn = document.getElementById('homeButton');
    homeBtn.style.backgroundColor = 'teal';
    const menuButton = document.getElementById('menuButton');
    menuButton.style.backgroundColor = 'white';
    
    //clearing content container
    const content = document.getElementById('content');
    content.textContent = "";

    //creating new DOM elements and giving it values
    let heading = document.createElement('h1');
    heading.textContent = 'My Reastaurant Name';

    let description = document.createElement('p');
    description.textContent = 'Some text about my beatyful reastaurant bla blab bla';

    
    // appending new elements to the content div
    content.append(heading,description);

}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {

    // changing the color of buttons
    const menuButton = document.getElementById('menuButton');
    menuButton.style.backgroundColor = 'teal';
    const homeBtn = document.getElementById('homeButton');
    homeBtn.style.backgroundColor = 'white';
    
    // creating new DOM elements and giving it valyes
    const content = document.getElementById('content');
    content.textContent = "";

    let menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Menu Page';

    let menuContent = document.createElement('p');
    menuContent.textContent = 'This is menu page content div';

    

    // appending new elements to content div

    content.append(menuHeading, menuContent);
}




/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navBarFnc: () => (/* binding */ navBarFnc)
/* harmony export */ });
/* harmony import */ var _loadContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadContent.js */ "./src/loadContent.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




function navBarFnc(){
    const homeBtn = document.getElementById('homeButton');
    //const aboutBtn = document.getElementById('aboutButton');
    const menuBtn = document.getElementById('menuButton');

    homeBtn.addEventListener('click',_loadContent_js__WEBPACK_IMPORTED_MODULE_0__.loadContent);
    //aboutBtn.addEventListener('click',loadAbout);
    menuBtn.addEventListener('click',_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu);

}



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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadContent.js */ "./src/loadContent.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");





(0,_loadContent_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)();
(0,_navbar_js__WEBPACK_IMPORTED_MODULE_2__.navBarFnc)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCNkM7QUFDVjs7O0FBR25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyx3REFBVztBQUNoRDtBQUNBLHFDQUFxQyw4Q0FBUTs7QUFFN0M7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ042QztBQUNWO0FBQ0c7OztBQUd0Qyw0REFBVztBQUNYLHFEQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbG9hZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZENvbnRlbnQoKSB7XG4gICAgXG4gICAgLy8gY2hhbmdpbmcgYmFja2dyb3VuZCBjb2xvciBmb3IgYnV0dG9uc1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ1dHRvbicpO1xuICAgIGhvbWVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RlYWwnO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUJ1dHRvbicpO1xuICAgIG1lbnVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICBcbiAgICAvL2NsZWFyaW5nIGNvbnRlbnQgY29udGFpbmVyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAvL2NyZWF0aW5nIG5ldyBET00gZWxlbWVudHMgYW5kIGdpdmluZyBpdCB2YWx1ZXNcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdNeSBSZWFzdGF1cmFudCBOYW1lJztcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdTb21lIHRleHQgYWJvdXQgbXkgYmVhdHlmdWwgcmVhc3RhdXJhbnQgYmxhIGJsYWIgYmxhJztcblxuICAgIFxuICAgIC8vIGFwcGVuZGluZyBuZXcgZWxlbWVudHMgdG8gdGhlIGNvbnRlbnQgZGl2XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGluZyxkZXNjcmlwdGlvbik7XG5cbn1cblxuZXhwb3J0IHtsb2FkQ29udGVudH07IiwiZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG5cbiAgICAvLyBjaGFuZ2luZyB0aGUgY29sb3Igb2YgYnV0dG9uc1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUJ1dHRvbicpO1xuICAgIG1lbnVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RlYWwnO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ1dHRvbicpO1xuICAgIGhvbWVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICBcbiAgICAvLyBjcmVhdGluZyBuZXcgRE9NIGVsZW1lbnRzIGFuZCBnaXZpbmcgaXQgdmFseWVzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBsZXQgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVIZWFkaW5nLnRleHRDb250ZW50ID0gJ01lbnUgUGFnZSc7XG5cbiAgICBsZXQgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUNvbnRlbnQudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBtZW51IHBhZ2UgY29udGVudCBkaXYnO1xuXG4gICAgXG5cbiAgICAvLyBhcHBlbmRpbmcgbmV3IGVsZW1lbnRzIHRvIGNvbnRlbnQgZGl2XG5cbiAgICBjb250ZW50LmFwcGVuZChtZW51SGVhZGluZywgbWVudUNvbnRlbnQpO1xufVxuXG5cbmV4cG9ydCB7bG9hZE1lbnV9OyIsImltcG9ydCB7bG9hZENvbnRlbnR9IGZyb20gXCIuL2xvYWRDb250ZW50LmpzXCI7XG5pbXBvcnQge2xvYWRNZW51fSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cblxuZnVuY3Rpb24gbmF2QmFyRm5jKCl7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnV0dG9uJyk7XG4gICAgLy9jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dEJ1dHRvbicpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUJ1dHRvbicpO1xuXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbG9hZENvbnRlbnQpO1xuICAgIC8vYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGxvYWRBYm91dCk7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbG9hZE1lbnUpO1xuXG59XG5cbmV4cG9ydCB7bmF2QmFyRm5jfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bG9hZENvbnRlbnR9IGZyb20gXCIuL2xvYWRDb250ZW50LmpzXCI7XG5pbXBvcnQge2xvYWRNZW51fSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQge25hdkJhckZuY30gZnJvbSBcIi4vbmF2YmFyLmpzXCI7XG5cblxubG9hZENvbnRlbnQoKTtcbm5hdkJhckZuYygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==