function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{bZWr:function(e,n,t){"use strict";t.r(n);var i=t("ofXK"),r=t("3Pt+"),o=t("tyNb"),c=t("c7TG"),a=t("mrSG"),s=t("LTmD"),l=t("PKx9"),u=t("G6JS"),b=t("fXoL");function h(e,n){if(1&e){var t=b.ac();b.Zb(0,"ion-item"),b.Zb(1,"ion-label"),b.xc(2,"\u540d\u5b57\uff1a"),b.Yb(),b.Zb(3,"ion-input",11),b.hc("ngModelChange",(function(e){return b.rc(t),b.jc().SearchName=e})),b.Yb(),b.Yb()}if(2&e){var i=b.jc();b.Mb(3),b.oc("ngModel",i.SearchName)}}function f(e,n){if(1&e){var t=b.ac();b.Zb(0,"ion-chip",4),b.hc("click",(function(){b.rc(t);var e=n.$implicit;return b.jc(2).SearchRole=e.value})),b.Zb(1,"ion-avatar"),b.Xb(2,"img",14),b.Yb(),b.Zb(3,"ion-text",15),b.xc(4),b.Yb(),b.Yb()}if(2&e){var i=n.$implicit,r=b.jc(2);b.Mb(2),b.oc("src",i.icon,b.tc),b.Mb(1),b.oc("color",r.SearchRole===i.value?"success":"medium"),b.Mb(1),b.yc(i.name)}}function d(e,n){if(1&e&&(b.Zb(0,"ion-item"),b.Zb(1,"ion-label",12),b.wc(2,f,5,3,"ion-chip",13),b.Yb(),b.Yb()),2&e){var t=b.jc();b.Mb(2),b.oc("ngForOf",t.Roles)}}function g(e,n){if(1&e&&(b.Zb(0,"ion-chip"),b.Zb(1,"ion-avatar"),b.Xb(2,"img",14),b.Yb(),b.Zb(3,"ion-text"),b.xc(4),b.Yb(),b.Yb()),2&e){var t=n.$implicit;b.Mb(2),b.oc("src",t.icon,b.tc),b.Mb(2),b.yc(t.name)}}function m(e,n){if(1&e){var t=b.ac();b.Zb(0,"ion-item"),b.Zb(1,"ion-thumbnail",1),b.Xb(2,"img",14),b.Yb(),b.Zb(3,"ion-label",12),b.Zb(4,"ion-text",16),b.hc("click",(function(){b.rc(t);var e=n.$implicit;return b.jc().ShowUserInfo(e.id)})),b.xc(5),b.Yb(),b.wc(6,g,5,2,"ion-chip",10),b.Yb(),b.Yb()}if(2&e){var i=n.$implicit,r=b.jc();b.Mb(2),b.oc("src",i.avatar,b.tc),b.Mb(3),b.zc(" ",i.id," "),b.Mb(1),b.oc("ngForOf",r.GetRoles(i.roller))}}var v,p=((v=function(){function e(n,t,i,r){_classCallCheck(this,e),this.settings=n,this.forumservice=t,this.modalCtrl=i,this.loadingController=r,this.SearchMode="name",this.SearchName="",this.SearchRole=4,this.Resultes=[]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"Execute",value:function(){"name"===this.SearchMode&&""!==this.SearchName?this.SearchSingle(this.SearchName):this.SearchRoller(this.SearchRole)}},{key:"SearchSingle",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.showLoading();case 2:this.forumservice.GetUserInfo(e).then((function(e){console.log("SearchSingle",e),e&&(t.Resultes=[e],t.initalUser())})).finally((function(){t.closeLoading()}));case 3:case"end":return n.stop()}}),n,this)})))}},{key:"SearchRoller",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.showLoading();case 2:this.forumservice.GetUserInfo(null,e).then((function(e){console.log("SearchRoller",e),e&&Array.isArray(e)&&(t.Resultes=e,t.initalUser())})).finally((function(){t.closeLoading()}));case 3:case"end":return n.stop()}}),n,this)})))}},{key:"ShowUserInfo",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalCtrl.create({component:u.a,componentProps:{Uerid:e}});case 2:return t=n.sent,n.next=5,t.present();case 5:return n.next=7,t.onWillDismiss();case 7:case"end":return n.stop()}}),n,this)})))}},{key:"GetRoles",value:function(e){return this.settings.UserRolers(e)}},{key:"initalUser",value:function(){var e=this;this.Resultes.forEach((function(n){n.avatar&&""!==n.avatar||(n.avatar=e.settings.Avatar(n.gender))}))}},{key:"showLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,e.t0){e.next=5;break}return e.next=4,this.loadingController.create({message:"\u6b63\u5728\u67e5\u627e...",duration:6e4});case 4:this.loadingView=e.sent;case 5:return e.next=7,this.loadingView.present();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"closeLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,!e.t0){e.next=5;break}return e.next=4,this.loadingView.dismiss();case 4:this.loadingView=null;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"Roles",get:function(){return this.settings.UserRolers(508)}}]),e}()).\u0275fac=function(e){return new(e||v)(b.Wb(s.a),b.Wb(l.a),b.Wb(c.db),b.Wb(c.cb))},v.\u0275cmp=b.Qb({type:v,selectors:[["app-searchuser"]],decls:21,vars:4,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end"],[3,"click"],["name","search"],[3,"ngModel","ngModelChange"],["value","name"],["value","role"],[4,"ngIf"],[4,"ngFor","ngForOf"],["placeholder","\u8f93\u5165\u7528\u6237\u540d\u5b57",3,"ngModel","ngModelChange"],[1,"ion-text-wrap"],[3,"click",4,"ngFor","ngForOf"],[3,"src"],[3,"color"],["color","primary",3,"click"]],template:function(e,n){1&e&&(b.Zb(0,"ion-header"),b.Zb(1,"ion-toolbar",0),b.Zb(2,"ion-buttons",1),b.Xb(3,"ion-back-button",2),b.Yb(),b.Zb(4,"ion-title"),b.xc(5,"\u67e5\u627e\u7528\u6237"),b.Yb(),b.Yb(),b.Yb(),b.Zb(6,"ion-content"),b.Zb(7,"ion-item"),b.Zb(8,"ion-buttons",3),b.Zb(9,"ion-button",4),b.hc("click",(function(){return n.Execute()})),b.Xb(10,"ion-icon",5),b.xc(11," \u6267\u884c "),b.Yb(),b.Yb(),b.Zb(12,"ion-buttons",1),b.Zb(13,"ion-segment",6),b.hc("ngModelChange",(function(e){return n.SearchMode=e})),b.Zb(14,"ion-segment-button",7),b.xc(15,"\u6309\u540d\u5b57"),b.Yb(),b.Zb(16,"ion-segment-button",8),b.xc(17,"\u6309\u89d2\u8272"),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.wc(18,h,4,1,"ion-item",9),b.wc(19,d,3,1,"ion-item",9),b.wc(20,m,7,3,"ion-item",10),b.Yb()),2&e&&(b.Mb(13),b.oc("ngModel",n.SearchMode),b.Mb(5),b.oc("ngIf","name"===n.SearchMode),b.Mb(1),b.oc("ngIf","role"===n.SearchMode),b.Mb(1),b.oc("ngForOf",n.Resultes))},directives:[c.t,c.Z,c.j,c.f,c.g,c.X,c.n,c.x,c.i,c.u,c.O,c.ib,r.c,r.d,c.P,i.j,i.i,c.D,c.w,c.jb,c.l,c.e,c.U,c.W],styles:[""]}),v);t.d(n,"SearchuserPageModule",(function(){return k}));var w,x=[{path:"",component:p}],k=((w=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ub({type:w}),w.\u0275inj=b.Tb({factory:function(e){return new(e||w)},imports:[[i.b,r.a,c.ab,o.i.forChild(x)]]}),w)}}]);