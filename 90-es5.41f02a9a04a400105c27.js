function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function asyncGeneratorStep(e,r,t,s,n,i,o){try{var l=e[i](o),c=l.value}catch(a){return void t(a)}l.done?r(c):Promise.resolve(c).then(s,n)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(s,n){var i=e.apply(r,t);function o(e){asyncGeneratorStep(i,s,n,o,l,"next",e)}function l(e){asyncGeneratorStep(i,s,n,o,l,"throw",e)}o(void 0)}))}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var s=r[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{CXux:function(e,r,t){"use strict";t.r(r),t.d(r,"ion_refresher",(function(){return o})),t.d(r,"ion_refresher_content",(function(){return l}));var s=t("dSyh"),n=t("AfW+"),i=t("YtD4"),o=function(){function e(r){_classCallCheck(this,e),Object(s.l)(this,r),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1,this.ionRefresh=Object(s.d)(this,"ionRefresh",7),this.ionPull=Object(s.d)(this,"ionPull",7),this.ionStart=Object(s.d)(this,"ionStart",7)}var r,n,i;return _createClass(e,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.setDisabled(this.disabled)}},{key:"connectedCallback",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(){var r,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("fixed"===this.el.getAttribute("slot")){e.next=2;break}return e.abrupt("return",void console.error('Make sure you use: <ion-refresher slot="fixed">'));case 2:if(!(r=this.el.closest("ion-content"))){e.next=14;break}return e.next=6,r.getScrollElement();case 6:return this.scrollEl=e.sent,e.next=9,Promise.resolve().then(t.bind(null,"mUkt"));case 9:e.t0={el:r,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:function(){return s.canStart()},onStart:function(){return s.onStart()},onMove:function(e){return s.onMove(e)},onEnd:function(){return s.onEnd()}},this.gesture=e.sent.createGesture(e.t0),this.disabledChanged(),e.next=15;break;case 14:console.error("<ion-refresher> must be used inside an <ion-content>");case 15:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.close(32,"120ms");case 1:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"cancel",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.close(16,"");case 1:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"getProgress",value:function(){return Promise.resolve(this.progress)}},{key:"canStart",value:function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}},{key:"onStart",value:function(){this.progress=0,this.state=1}},{key:"onMove",value:function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0==(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,s=e.deltaY*t;if(s<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(s,"0ms",!0,""),0!==s){var n=this.pullMin;this.progress=s/n,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),s<n?this.state=2:s>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}}},{key:"onEnd",value:function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}},{key:"beginRefresh",value:function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}},{key:"close",value:function(e,r){var t=this;setTimeout((function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}},{key:"setCss",value:function(e,r,t,n){var i=this;this.appliedStyles=e>0,Object(s.m)((function(){if(i.scrollEl){var s=i.scrollEl.style;s.transform=e>0?"translateY(".concat(e,"px) translateZ(0px)"):"translateZ(0px)",s.transitionDuration=r,s.transitionDelay=n,s.overflow=t?"hidden":""}}))}},{key:"render",value:function(){var e,r=Object(s.e)(this);return Object(s.i)(s.a,{slot:"fixed",class:(e={},_defineProperty(e,r,!0),_defineProperty(e,"refresher-".concat(r),!0),_defineProperty(e,"refresher-active",1!==this.state),_defineProperty(e,"refresher-pulling",2===this.state),_defineProperty(e,"refresher-ready",4===this.state),_defineProperty(e,"refresher-refreshing",8===this.state),_defineProperty(e,"refresher-cancelling",16===this.state),_defineProperty(e,"refresher-completing",32===this.state),e)})}},{key:"el",get:function(){return Object(s.f)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}},{key:"style",get:function(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"}}]),e}(),l=function(){function e(r){_classCallCheck(this,e),Object(s.l)(this,r)}return _createClass(e,[{key:"componentWillLoad",value:function(){if(void 0===this.pullingIcon&&(this.pullingIcon=n.b.get("refreshingIcon","arrow-down")),void 0===this.refreshingSpinner){var e=Object(s.e)(this);this.refreshingSpinner=n.b.get("refreshingSpinner",n.b.get("spinner","ios"===e?"lines":"crescent"))}}},{key:"render",value:function(){return Object(s.i)(s.a,{class:Object(s.e)(this)},Object(s.i)("div",{class:"refresher-pulling"},this.pullingIcon&&Object(s.i)("div",{class:"refresher-pulling-icon"},Object(s.i)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(s.i)("div",{class:"refresher-pulling-text",innerHTML:Object(i.a)(this.pullingText)})),Object(s.i)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(s.i)("div",{class:"refresher-refreshing-icon"},Object(s.i)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(s.i)("div",{class:"refresher-refreshing-text",innerHTML:Object(i.a)(this.refreshingText)})))}}]),e}()}}]);