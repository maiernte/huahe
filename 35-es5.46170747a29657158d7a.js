function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var c=0;c<n.length;c++){var t=n[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,c){return n&&_defineProperties(e.prototype,n),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{bZWr:function(e,n,c){"use strict";c.r(n);var t=c("ofXK"),i=c("3Pt+"),r=c("tyNb"),o=c("c7TG"),a=c("mrSG"),s=c("LTmD"),l=c("PKx9"),u=c("G6JS"),h=c("fXoL");function f(e,n){if(1&e){var c=h.ec();h.dc(0,"ion-item"),h.dc(1,"ion-label"),h.Jc(2,"\u540d\u5b57\uff1a"),h.cc(),h.dc(3,"ion-input",11),h.lc("ngModelChange",(function(e){return h.Cc(c),h.oc().SearchName=e})),h.cc(),h.cc()}if(2&e){var t=h.oc();h.Nb(3),h.vc("ngModel",t.SearchName)}}function d(e,n){if(1&e){var c=h.ec();h.dc(0,"ion-chip",7),h.lc("click",(function(){h.Cc(c);var e=n.$implicit;return h.oc(2).SearchRole=e.value})),h.dc(1,"ion-avatar"),h.Zb(2,"img",14),h.cc(),h.dc(3,"ion-text",15),h.Jc(4),h.cc(),h.cc()}if(2&e){var t=n.$implicit,i=h.oc(2);h.Nb(2),h.vc("src",t.icon,h.Ec),h.Nb(1),h.vc("color",i.SearchRole===t.value?"success":"medium"),h.Nb(1),h.Kc(t.name)}}function v(e,n){if(1&e&&(h.dc(0,"ion-item"),h.dc(1,"ion-label",12),h.Hc(2,d,5,3,"ion-chip",13),h.cc(),h.cc()),2&e){var c=h.oc();h.Nb(2),h.vc("ngForOf",c.Roles)}}function g(e,n){if(1&e&&(h.dc(0,"ion-chip"),h.dc(1,"ion-avatar"),h.Zb(2,"img",14),h.cc(),h.dc(3,"ion-text"),h.Jc(4),h.cc(),h.cc()),2&e){var c=n.$implicit;h.Nb(2),h.vc("src",c.icon,h.Ec),h.Nb(2),h.Kc(c.name)}}function m(e,n){if(1&e){var c=h.ec();h.dc(0,"ion-item"),h.dc(1,"ion-thumbnail",1),h.Zb(2,"img",14),h.cc(),h.dc(3,"ion-label",12),h.dc(4,"ion-text",16),h.lc("click",(function(){h.Cc(c);var e=n.$implicit;return h.oc().ShowUserInfo(e.id)})),h.Jc(5),h.cc(),h.Hc(6,g,5,2,"ion-chip",10),h.cc(),h.cc()}if(2&e){var t=n.$implicit,i=h.oc();h.Nb(2),h.vc("src",t.avatar,h.Ec),h.Nb(3),h.Lc(" ",t.id," "),h.Nb(1),h.vc("ngForOf",i.GetRoles(t.roller))}}var b,p=((b=function(){function e(n,c,t,i){_classCallCheck(this,e),this.settings=n,this.forumservice=c,this.modalCtrl=t,this.loadingController=i,this.SearchMode="name",this.SearchName="",this.SearchRole=4,this.Resultes=[]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"Execute",value:function(){"name"===this.SearchMode&&""!==this.SearchName?this.SearchSingle(this.SearchName):this.SearchRoller(this.SearchRole)}},{key:"SearchSingle",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var c=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.showLoading();case 2:this.forumservice.GetUserInfo(e).then((function(e){console.log("SearchSingle",e),e&&(c.Resultes=[e],c.initalUser())})).finally((function(){c.closeLoading()}));case 3:case"end":return n.stop()}}),n,this)})))}},{key:"SearchRoller",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var c=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.showLoading();case 2:this.forumservice.GetUserInfo(null,e).then((function(e){console.log("SearchRoller",e),e&&Array.isArray(e)&&(c.Resultes=e,c.initalUser())})).finally((function(){c.closeLoading()}));case 3:case"end":return n.stop()}}),n,this)})))}},{key:"ShowUserInfo",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalCtrl.create({component:u.a,componentProps:{Uerid:e}});case 2:return c=n.sent,n.next=5,c.present();case 5:return n.next=7,c.onWillDismiss();case 7:case"end":return n.stop()}}),n,this)})))}},{key:"GetRoles",value:function(e){return this.settings.UserRolers(e)}},{key:"initalUser",value:function(){var e=this;this.Resultes.forEach((function(n){n.avatar&&""!==n.avatar||(n.avatar=e.settings.Avatar(n.gender))}))}},{key:"showLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,e.t0){e.next=5;break}return e.next=4,this.loadingController.create({message:"\u6b63\u5728\u67e5\u627e...",duration:6e4});case 4:this.loadingView=e.sent;case 5:return e.next=7,this.loadingView.present();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"closeLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,!e.t0){e.next=5;break}return e.next=4,this.loadingView.dismiss();case 4:this.loadingView=null;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"Roles",get:function(){return this.settings.UserRolers(508)}}]),e}()).\u0275fac=function(e){return new(e||b)(h.Yb(s.a),h.Yb(l.a),h.Yb(o.ab),h.Yb(o.Z))},b.\u0275cmp=h.Sb({type:b,selectors:[["app-searchuser"]],decls:20,vars:4,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],[3,"ngModel","ngModelChange"],["value","name"],["value","role"],["slot","end"],[3,"click"],["name","search"],[4,"ngIf"],[4,"ngFor","ngForOf"],["placeholder","\u8f93\u5165\u7528\u6237\u540d\u5b57",3,"ngModel","ngModelChange"],[1,"ion-text-wrap"],[3,"click",4,"ngFor","ngForOf"],[3,"src"],[3,"color"],["color","primary",3,"click"]],template:function(e,n){1&e&&(h.dc(0,"ion-header"),h.dc(1,"ion-toolbar",0),h.dc(2,"ion-buttons",1),h.Zb(3,"ion-back-button",2),h.cc(),h.dc(4,"ion-title"),h.Jc(5,"\u67e5\u627e\u7528\u6237"),h.cc(),h.cc(),h.cc(),h.dc(6,"ion-content"),h.dc(7,"ion-item"),h.dc(8,"ion-segment",3),h.lc("ngModelChange",(function(e){return n.SearchMode=e})),h.dc(9,"ion-segment-button",4),h.Jc(10,"\u6309\u540d\u5b57"),h.cc(),h.dc(11,"ion-segment-button",5),h.Jc(12,"\u6309\u89d2\u8272"),h.cc(),h.cc(),h.dc(13,"ion-buttons",6),h.dc(14,"ion-button",7),h.lc("click",(function(){return n.Execute()})),h.Zb(15,"ion-icon",8),h.Jc(16," \u6267\u884c "),h.cc(),h.cc(),h.cc(),h.Hc(17,f,4,1,"ion-item",9),h.Hc(18,v,3,1,"ion-item",9),h.Hc(19,m,7,3,"ion-item",10),h.cc()),2&e&&(h.Nb(8),h.vc("ngModel",n.SearchMode),h.Nb(9),h.vc("ngIf","name"===n.SearchMode),h.Nb(1),h.vc("ngIf","role"===n.SearchMode),h.Nb(1),h.vc("ngForOf",n.Resultes))},directives:[o.s,o.W,o.i,o.f,o.g,o.U,o.m,o.w,o.N,o.fb,i.f,i.g,o.O,o.h,o.t,t.j,t.i,o.C,o.v,o.gb,o.k,o.e,o.S,o.T],styles:[""]}),b);c.d(n,"SearchuserPageModule",(function(){return S}));var w,k=[{path:"",component:p}],S=((w=function e(){_classCallCheck(this,e)}).\u0275mod=h.Wb({type:w}),w.\u0275inj=h.Vb({factory:function(e){return new(e||w)},imports:[[t.b,i.c,o.X,r.j.forChild(k)]]}),w)}}]);