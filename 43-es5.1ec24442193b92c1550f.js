function asyncGeneratorStep(t,e,o,n,i,r,a){try{var s=t[r](a),l=s.value}catch(c){return void o(c)}s.done?e(l):Promise.resolve(l).then(n,i)}function _asyncToGenerator(t){return function(){var e=this,o=arguments;return new Promise((function(n,i){var r=t.apply(e,o);function a(t){asyncGeneratorStep(r,n,i,a,s,"next",t)}function s(t){asyncGeneratorStep(r,n,i,a,s,"throw",t)}a(void 0)}))}}function _defineProperty(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{iInF:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_app",(function(){return d})),o.d(e,"ion_buttons",(function(){return p})),o.d(e,"ion_content",(function(){return h})),o.d(e,"ion_footer",(function(){return v})),o.d(e,"ion_header",(function(){return x})),o.d(e,"ion_router_outlet",(function(){return j})),o.d(e,"ion_title",(function(){return O})),o.d(e,"ion_toolbar",(function(){return S}));var n=o("dSyh"),i=o("AfW+"),r=o("aiEM"),a=(o("kBU6"),o("Dl6n")),s=o("m9yc"),l=o("+veT"),c=o("qaSm"),d=function(){function t(e){_classCallCheck(this,t),Object(n.l)(this,e)}return _createClass(t,[{key:"componentDidLoad",value:function(){b((function(){var t=Object(i.f)(window,"hybrid");i.b.getBoolean("_testing")||o.e(18).then(o.bind(null,"tCf4")).then((function(t){return t.startTapClick(i.b)})),i.b.getBoolean("statusTap",t)&&o.e(16).then(o.bind(null,"QE1b")).then((function(t){return t.startStatusTap()})),i.b.getBoolean("inputShims",u())&&o.e(15).then(o.bind(null,"aoIK")).then((function(t){return t.startInputShims(i.b)})),i.b.getBoolean("hardwareBackButton",t)&&o.e(13).then(o.bind(null,"XRsP")).then((function(t){return t.startHardwareBackButton()})),o.e(12).then(o.bind(null,"3YLQ")).then((function(t){return t.startFocusVisible()}))}))}},{key:"render",value:function(){var t,e=Object(n.e)(this);return Object(n.i)(n.a,{class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"ion-page",!0),_defineProperty(t,"force-statusbar-padding",i.b.getBoolean("_forceStatusbarPadding")),t)})}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"style",get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}]),t}(),u=function(){return Object(i.f)(window,"ios")&&Object(i.f)(window,"mobile")},b=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},p=function(){function t(e){_classCallCheck(this,t),Object(n.l)(this,e),this.collapse=!1}return _createClass(t,[{key:"render",value:function(){var t,e=Object(n.e)(this);return Object(n.i)(n.a,{class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"buttons-collapse",this.collapse),t)})}}],[{key:"style",get:function(){return".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--border-color:initial;--background-focused:rgba(var(--ion-color-contrast-rgb),0.1)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:rgba(var(--ion-color-contrast-rgb),0.8);--background-focused:rgba(var(--ion-color-contrast-rgb),0.6);--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--background-activated:var(--ion-color-contrast);--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-clear , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary,#3880ff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-outline , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-background,var(--ion-color-primary-contrast,#fff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--border-color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-solid , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-focused:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--background:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0));--background-focused:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0))}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"}}]),t}(),h=function(){function t(e){_classCallCheck(this,t),Object(n.l)(this,e),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.mode=Object(n.e)(this),this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(n.d)(this,"ionScrollStart",7),this.ionScroll=Object(n.d)(this,"ionScroll",7),this.ionScrollEnd=Object(n.d)(this,"ionScrollEnd",7)}var e;return _createClass(t,[{key:"disconnectedCallback",value:function(){this.onScrollEnd()}},{key:"componentDidLoad",value:function(){this.resize()}},{key:"onClick",value:function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}},{key:"shouldForceOverscroll",value:function(){var t=this.forceOverscroll,e=this.mode;return void 0===t?"ios"===e&&Object(i.f)("ios"):t}},{key:"resize",value:function(){this.fullscreen?Object(n.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}},{key:"readDimensions",value:function(){var t=f(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||o!==this.cBottom)&&(this.cTop=e,this.cBottom=o,this.el.forceUpdate())}},{key:"onScroll",value:function(t){var e=this,o=Date.now(),i=!this.isScrolling;this.lastScroll=o,i&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(n.g)((function(o){e.queued=!1,e.detail.event=t,g(e.detail,e.scrollEl,o,i),e.ionScroll.emit(e.detail)})))}},{key:"getScrollElement",value:function(){return Promise.resolve(this.scrollEl)}},{key:"scrollToTop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.scrollToPoint(void 0,0,t)}},{key:"scrollToBottom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}},{key:"scrollByPoint",value:function(t,e,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,o)}},{key:"scrollToPoint",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(e,o){var n,i,r,a,s,l,c,d,u,b,p=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=p.length>2&&void 0!==p[2]?p[2]:0,i=this.scrollEl,!(n<32)){t.next=4;break}return t.abrupt("return",(null!=o&&(i.scrollTop=o),void(null!=e&&(i.scrollLeft=e))));case 4:return a=0,s=new Promise((function(t){return r=t})),l=i.scrollTop,c=i.scrollLeft,d=null!=o?o-l:0,u=null!=e?e-c:0,b=function t(e){var o=Math.min(1,(e-a)/n)-1,s=Math.pow(o,3)+1;0!==d&&(i.scrollTop=Math.floor(s*d+l)),0!==u&&(i.scrollLeft=Math.floor(s*u+c)),s<1?requestAnimationFrame(t):r()},t.abrupt("return",(requestAnimationFrame((function(t){a=t,b(t)})),s));case 7:case"end":return t.stop()}}),t,this)}))),function(t,o){return e.apply(this,arguments)})},{key:"onScrollStart",value:function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()}),100)}},{key:"onScrollEnd",value:function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}},{key:"render",value:function(){var t,e=this,o=this.scrollX,r=this.scrollY,s=Object(n.e)(this),l=this.shouldForceOverscroll(),c="ios"===s&&i.b.getBoolean("experimentalTransitionShadow",!0);return this.resize(),Object(n.i)(n.a,{class:Object.assign(Object.assign({},Object(a.a)(this.color)),(t={},_defineProperty(t,s,!0),_defineProperty(t,"content-sizing",Object(a.c)("ion-popover",this.el)),_defineProperty(t,"overscroll",l),t)),style:{"--offset-top":"".concat(this.cTop,"px"),"--offset-bottom":"".concat(this.cBottom,"px")}},Object(n.i)("main",{class:{"inner-scroll":!0,"scroll-x":o,"scroll-y":r,overscroll:(o||r)&&l},ref:function(t){return e.scrollEl=t},onScroll:function(t){return e.onScroll(t)}},Object(n.i)("slot",null)),c?Object(n.i)("div",{class:"transition-effect"},Object(n.i)("div",{class:"transition-cover"}),Object(n.i)("div",{class:"transition-shadow"})):null,Object(n.i)("slot",{name:"fixed"}))}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"style",get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}'}}]),t}(),f=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)},g=function(t,e,o,n){var i=t.currentX,r=t.currentY,a=e.scrollLeft,s=e.scrollTop,l=o-t.timeStamp;if(n&&(t.startTimeStamp=o,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.timeStamp=o,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){var c=(s-r)/l;t.velocityX=(a-i)/l*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}},v=function(){function t(e){_classCallCheck(this,t),Object(n.l)(this,e),this.translucent=!1}return _createClass(t,[{key:"render",value:function(){var t,e=Object(n.e)(this),o=this.translucent;return Object(n.i)(n.a,{role:"contentinfo",class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"footer-".concat(e),!0),_defineProperty(t,"footer-translucent",o),_defineProperty(t,"footer-translucent-".concat(e),o),t)})}}],[{key:"style",get:function(){return"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}"}}]),t}(),m=function(t){var e=document.querySelector("".concat(t,".ion-cloned-element"));if(null!==e)return e;var o=document.createElement(t);return o.classList.add("ion-cloned-element"),o.style.setProperty("display","none"),document.body.appendChild(o),o},y=function(t){if(t){var e=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(e).map((function(t){var e=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:e,innerTitleEl:e?e.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}}))||[[]]}}},k=function(t,e){void 0===e?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",e.toString())},w=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(n.m)((function(){e?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")}))},x=function(){function t(e){_classCallCheck(this,t),Object(n.l)(this,e),this.collapsibleHeaderInitialized=!1,this.translucent=!1}var e,o,i,a;return _createClass(t,[{key:"componentDidLoad",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.checkCollapsibleHeader();case 2:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"componentDidUpdate",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.checkCollapsibleHeader();case 2:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"componentDidUnload",value:function(){this.destroyCollapsibleHeader()}},{key:"checkCollapsibleHeader",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e,o,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e="condense"===this.collapse,(o=!(!e||"ios"!==Object(n.e)(this))&&e)||!this.collapsibleHeaderInitialized){t.next=5;break}this.destroyCollapsibleHeader(),t.next=9;break;case 5:if(!o||this.collapsibleHeaderInitialized){t.next=9;break}return i=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),r=i?i.querySelector("ion-content"):null,t.next=9,this.setupCollapsibleHeader(r,i);case 9:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"destroyCollapsibleHeader",value:function(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}},{key:"setupCollapsibleHeader",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(e,o){var i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!o){t.next=9;break}return t.next=3,e.getScrollElement();case 3:this.scrollEl=t.sent,Object(n.g)((function(){var t=o.querySelectorAll("ion-header"),e=Array.from(t).find((function(t){return"condense"!==t.collapse}));if(e&&i.scrollEl){var a=y(e),s=y(i.el);a&&s&&(w(a,!1),Object(n.g)((function(){i.intersectionObserver=new IntersectionObserver((function(t){!function(t,e,o){Object(n.m)((function(){!function(t,e){if(t[0].isIntersecting){var o=100*(1-t[0].intersectionRatio)/75;k(e.toolbars[0],1===o?void 0:o)}}(t,e);var n=t[0],i=n.intersectionRect,r=i.width*i.height,a=0===r&&0==n.rootBounds.width*n.rootBounds.height,s=Math.abs(i.left-n.boundingClientRect.left),l=Math.abs(i.right-n.boundingClientRect.right);a||r>0&&(s>=5||l>=5)||(n.isIntersecting?(w(e,!1),w(o)):(0===i.x&&0===i.y||0!==i.width&&0!==i.height)&&(w(e),w(o,!1),k(e.toolbars[0],1)))}))}(t,a,s)}),{threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-".concat(a.el.clientHeight,"px 0px 0px 0px")}),i.intersectionObserver.observe(s.toolbars[0].el)})),i.contentScrollCallback=function(){!function(t,e){Object(n.g)((function(){var o=t.scrollTop,i=Object(r.c)(1,1+-o/500,1.1);Object(n.m)((function(){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.forEach((function(t){var n=t.ionTitleEl,i=t.innerTitleEl;n&&"large"===n.size&&(i.style.transformOrigin="left center",i.style.transition=o?"all 0.2s ease-in-out":"",i.style.transform="scale3d(".concat(e,", ").concat(e,", 1)"))}))}(e.toolbars,i)}))}))}(i.scrollEl,s)},i.scrollEl.addEventListener("scroll",i.contentScrollCallback))}})),Object(n.m)((function(){m("ion-title"),m("ion-back-button")})),this.collapsibleHeaderInitialized=!0,t.next=10;break;case 9:console.error("ion-header requires a content to collapse, make sure there is an ion-content.");case 10:case"end":return t.stop()}}),t,this)}))),function(t,o){return e.apply(this,arguments)})},{key:"render",value:function(){var t,e=Object(n.e)(this),o=this.collapse||"none";return Object(n.i)(n.a,{role:"banner",class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"header-".concat(e),!0),_defineProperty(t,"header-translucent",this.translucent),_defineProperty(t,"header-collapse-".concat(o),!0),_defineProperty(t,"header-translucent-".concat(e),this.translucent),t)})}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"style",get:function(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-child{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0;padding-bottom:13px}ion-toolbar.in-toolbar ion-buttons,ion-toolbar.in-toolbar ion-title{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.header-collapse-condense ion-toolbar ion-buttons,.header-collapse-condense ion-toolbar ion-title{-webkit-transition:none;transition:none}.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-buttons.buttons-collapse,.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-title{opacity:0;pointer-events:none}"}}]),t}(),j=function(){function t(e){_classCallCheck(this,t),Object(n.l)(this,e),this.animationEnabled=!0,this.mode=Object(n.e)(this),this.animated=!0,this.ionNavWillLoad=Object(n.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(n.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(n.d)(this,"ionNavDidChange",3)}var e,r,a,d,u,b,p;return _createClass(t,[{key:"swipeHandlerChanged",value:function(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)}},{key:"connectedCallback",value:(p=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.e(10).then(o.bind(null,"0yHn"));case 2:t.t0=this.el,t.t1=function(){return!!e.swipeHandler&&e.swipeHandler.canStart()&&e.animationEnabled},t.t2=function(){return e.swipeHandler&&e.swipeHandler.onStart()},t.t3=function(t){return e.ani&&e.ani.progressStep(t)},t.t4=function(t,o,n){if(e.ani){e.animationEnabled=!1,e.ani.onFinish((function(){e.animationEnabled=!0,e.swipeHandler&&e.swipeHandler.onEnd(t)}),{oneTimeCallback:!0});var i=t?-.001:.001;t?i+=Object(c.b)(new c.a(0,0),new c.a(.32,.72),new c.a(0,1),new c.a(1,1),o):(e.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=Object(c.b)(new c.a(0,0),new c.a(1,0),new c.a(.68,.28),new c.a(1,1),o)),e.ani.progressEnd(t?1:0,i,n)}},this.gesture=t.sent.createSwipeBackGesture(t.t0,t.t1,t.t2,t.t3,t.t4),this.swipeHandlerChanged();case 9:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)})},{key:"componentWillLoad",value:function(){this.ionNavWillLoad.emit()}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"commit",value:(b=_asyncToGenerator(regeneratorRuntime.mark((function t(e,o,n){var i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.lock();case 2:return i=t.sent,r=!1,t.prev=4,t.next=7,this.transition(e,o,n);case 7:r=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.error(t.t0);case 13:return t.abrupt("return",(i(),r));case 14:case"end":return t.stop()}}),t,this,[[4,10]])}))),function(t,e,o){return b.apply(this,arguments)})},{key:"setRouteId",value:(u=_asyncToGenerator(regeneratorRuntime.mark((function t(e,o,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setRoot(e,o,{duration:"root"===n?0:void 0,direction:"back"===n?"back":"forward"});case 2:return t.t0=t.sent,t.t1=this.activeEl,t.abrupt("return",{changed:t.t0,element:t.t1});case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,o){return u.apply(this,arguments)})},{key:"getRouteId",value:(d=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.activeEl,t.abrupt("return",e?{id:e.tagName,element:e}:void 0);case 2:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},{key:"setRoot",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function t(e,o,n){var i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.activeComponent!==e){t.next=2;break}return t.abrupt("return",!1);case 2:return i=this.activeEl,t.next=5,Object(s.a)(this.delegate,this.el,e,["ion-page","ion-page-invisible"],o);case 5:return r=t.sent,this.activeComponent=e,this.activeEl=r,t.next=10,this.commit(r,i,n);case 10:return t.next=12,Object(s.b)(this.delegate,i);case 12:return t.abrupt("return",!0);case 13:case"end":return t.stop()}}),t,this)}))),function(t,e,o){return a.apply(this,arguments)})},{key:"transition",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function t(e,o){var n,r,a,s,c,d=this,u=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=u.length>2&&void 0!==u[2]?u[2]:{},o!==e){t.next=3;break}return t.abrupt("return",!1);case 3:return this.ionNavWillChange.emit(),r=this.el,a=this.mode,s=this.animated&&i.b.getBoolean("animated",!0),c=this.animation||n.animationBuilder||i.b.get("navAnimation"),t.next=7,Object(l.e)(Object.assign({mode:a,animated:s,animationBuilder:c,enteringEl:e,leavingEl:o,baseEl:r,progressCallback:n.progressAnimation?function(t){return d.ani=t}:void 0},n));case 7:return this.ionNavDidChange.emit(),t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},{key:"lock",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.waitPromise,this.waitPromise=new Promise((function(t){return o=t})),t.t0=void 0!==e,!t.t0){t.next=6;break}return t.next=6,e;case 6:return t.abrupt("return",o);case 7:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){return Object(n.i)("slot",null)}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{swipeHandler:["swipeHandlerChanged"]}}},{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}]),t}(),O=function(){function t(e){_classCallCheck(this,t),Object(n.l)(this,e),this.ionStyle=Object(n.d)(this,"ionStyle",7)}return _createClass(t,[{key:"sizeChanged",value:function(){this.emitStyle()}},{key:"connectedCallback",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){var t=this.getSize();this.ionStyle.emit(_defineProperty({},"title-".concat(t),!0))}},{key:"getSize",value:function(){return void 0!==this.size?this.size:"default"}},{key:"getMode",value:function(){var t=Object(n.e)(this),e=this.el.closest("ion-toolbar");return e&&e.mode||t}},{key:"render",value:function(){var t,e=this.getMode(),o=this.getSize();return Object(n.i)(n.a,{class:Object.assign((t={},_defineProperty(t,e,!0),_defineProperty(t,"title-".concat(e),!0),_defineProperty(t,"title-".concat(o),!0),t),Object(a.a)(this.color))},Object(n.i)("div",{class:"toolbar-title"},Object(n.i)("slot",null)))}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{size:["sizeChanged"]}}},{key:"style",get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"}}]),t}(),S=function(){function t(e){_classCallCheck(this,t),Object(n.l)(this,e),this.childrenStyles=new Map}return _createClass(t,[{key:"componentWillLoad",value:function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),e=t.find((function(t){return"start"===t.slot}));e&&e.classList.add("buttons-first-slot");var o=t.reverse(),n=o.find((function(t){return"end"===t.slot}))||o.find((function(t){return"primary"===t.slot}))||o.find((function(t){return"secondary"===t.slot}));n&&n.classList.add("buttons-last-slot")}},{key:"childrenStyle",value:function(t){t.stopPropagation();var e=t.target.tagName,o=t.detail,n={},i=this.childrenStyles.get(e)||{},r=!1;Object.keys(o).forEach((function(t){var e="toolbar-".concat(t),a=o[t];a!==i[e]&&(r=!0),a&&(n[e]=!0)})),r&&(this.childrenStyles.set(e,n),this.el.forceUpdate())}},{key:"render",value:function(){var t=Object(n.e)(this),e={};return this.childrenStyles.forEach((function(t){Object.assign(e,t)})),Object(n.i)(n.a,{class:Object.assign(Object.assign(_defineProperty({"in-toolbar":Object(a.c)("ion-toolbar",this.el)},t,!0),e),Object(a.a)(this.color))},Object(n.i)("div",{class:"toolbar-background"}),Object(n.i)("div",{class:"toolbar-container"},Object(n.i)("slot",{name:"start"}),Object(n.i)("slot",{name:"secondary"}),Object(n.i)("div",{class:"toolbar-content"},Object(n.i)("slot",null)),Object(n.i)("slot",{name:"primary"}),Object(n.i)("slot",{name:"end"})))}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"style",get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment){--min-height:auto}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}"}}]),t}()}}]);