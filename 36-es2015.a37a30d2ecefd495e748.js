(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{bZWr:function(c,e,i){"use strict";i.r(e);var n=i("ofXK"),o=i("3Pt+"),t=i("tyNb"),s=i("c7TG"),r=i("mrSG"),l=i("LTmD"),a=i("PKx9"),d=i("G6JS"),h=i("fXoL");function u(c,e){if(1&c){const c=h.ec();h.dc(0,"ion-item"),h.dc(1,"ion-label"),h.Jc(2,"\u540d\u5b57\uff1a"),h.cc(),h.dc(3,"ion-input",11),h.lc("ngModelChange",(function(e){return h.Cc(c),h.oc().SearchName=e})),h.cc(),h.cc()}if(2&c){const c=h.oc();h.Nb(3),h.vc("ngModel",c.SearchName)}}function b(c,e){if(1&c){const c=h.ec();h.dc(0,"ion-chip",4),h.lc("click",(function(){h.Cc(c);const i=e.$implicit;return h.oc(2).SearchRole=i.value})),h.dc(1,"ion-avatar"),h.Zb(2,"img",14),h.cc(),h.dc(3,"ion-text",15),h.Jc(4),h.cc(),h.cc()}if(2&c){const c=e.$implicit,i=h.oc(2);h.Nb(2),h.vc("src",c.icon,h.Ec),h.Nb(1),h.vc("color",i.SearchRole===c.value?"success":"medium"),h.Nb(1),h.Kc(c.name)}}function g(c,e){if(1&c&&(h.dc(0,"ion-item"),h.dc(1,"ion-label",12),h.Hc(2,b,5,3,"ion-chip",13),h.cc(),h.cc()),2&c){const c=h.oc();h.Nb(2),h.vc("ngForOf",c.Roles)}}function f(c,e){if(1&c&&(h.dc(0,"ion-chip"),h.dc(1,"ion-avatar"),h.Zb(2,"img",14),h.cc(),h.dc(3,"ion-text"),h.Jc(4),h.cc(),h.cc()),2&c){const c=e.$implicit;h.Nb(2),h.vc("src",c.icon,h.Ec),h.Nb(2),h.Kc(c.name)}}function m(c,e){if(1&c){const c=h.ec();h.dc(0,"ion-item"),h.dc(1,"ion-thumbnail",1),h.Zb(2,"img",14),h.cc(),h.dc(3,"ion-label",12),h.dc(4,"ion-text",16),h.lc("click",(function(){h.Cc(c);const i=e.$implicit;return h.oc().ShowUserInfo(i.id)})),h.Jc(5),h.cc(),h.Hc(6,f,5,2,"ion-chip",10),h.cc(),h.cc()}if(2&c){const c=e.$implicit,i=h.oc();h.Nb(2),h.vc("src",c.avatar,h.Ec),h.Nb(3),h.Lc(" ",c.id," "),h.Nb(1),h.vc("ngForOf",i.GetRoles(c.roller))}}let v=(()=>{class c{constructor(c,e,i,n){this.settings=c,this.forumservice=e,this.modalCtrl=i,this.loadingController=n,this.SearchMode="name",this.SearchName="",this.SearchRole=4,this.Resultes=[]}ngOnInit(){}get Roles(){return this.settings.UserRolers(508)}Execute(){"name"===this.SearchMode&&""!==this.SearchName?this.SearchSingle(this.SearchName):this.SearchRoller(this.SearchRole)}SearchSingle(c){return Object(r.b)(this,void 0,void 0,(function*(){yield this.showLoading(),this.forumservice.GetUserInfo(c).then(c=>{console.log("SearchSingle",c),c&&(this.Resultes=[c],this.initalUser())}).finally(()=>{this.closeLoading()})}))}SearchRoller(c){return Object(r.b)(this,void 0,void 0,(function*(){yield this.showLoading(),this.forumservice.GetUserInfo(null,c).then(c=>{console.log("SearchRoller",c),c&&Array.isArray(c)&&(this.Resultes=c,this.initalUser())}).finally(()=>{this.closeLoading()})}))}ShowUserInfo(c){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:d.a,componentProps:{Uerid:c}});yield e.present(),yield e.onWillDismiss()}))}GetRoles(c){return this.settings.UserRolers(c)}initalUser(){this.Resultes.forEach(c=>{c.avatar&&""!==c.avatar||(c.avatar=this.settings.Avatar(c.gender))})}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u67e5\u627e...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return c.\u0275fac=function(e){return new(e||c)(h.Yb(l.a),h.Yb(a.a),h.Yb(s.cb),h.Yb(s.bb))},c.\u0275cmp=h.Sb({type:c,selectors:[["app-searchuser"]],decls:21,vars:4,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end"],[3,"click"],["name","search"],[3,"ngModel","ngModelChange"],["value","name"],["value","role"],[4,"ngIf"],[4,"ngFor","ngForOf"],["placeholder","\u8f93\u5165\u7528\u6237\u540d\u5b57",3,"ngModel","ngModelChange"],[1,"ion-text-wrap"],[3,"click",4,"ngFor","ngForOf"],[3,"src"],[3,"color"],["color","primary",3,"click"]],template:function(c,e){1&c&&(h.dc(0,"ion-header"),h.dc(1,"ion-toolbar",0),h.dc(2,"ion-buttons",1),h.Zb(3,"ion-back-button",2),h.cc(),h.dc(4,"ion-title"),h.Jc(5,"\u67e5\u627e\u7528\u6237"),h.cc(),h.cc(),h.cc(),h.dc(6,"ion-content"),h.dc(7,"ion-item"),h.dc(8,"ion-buttons",3),h.dc(9,"ion-button",4),h.lc("click",(function(){return e.Execute()})),h.Zb(10,"ion-icon",5),h.Jc(11," \u6267\u884c "),h.cc(),h.cc(),h.dc(12,"ion-buttons",1),h.dc(13,"ion-segment",6),h.lc("ngModelChange",(function(c){return e.SearchMode=c})),h.dc(14,"ion-segment-button",7),h.Jc(15,"\u6309\u540d\u5b57"),h.cc(),h.dc(16,"ion-segment-button",8),h.Jc(17,"\u6309\u89d2\u8272"),h.cc(),h.cc(),h.cc(),h.cc(),h.Hc(18,u,4,1,"ion-item",9),h.Hc(19,g,3,1,"ion-item",9),h.Hc(20,m,7,3,"ion-item",10),h.cc()),2&c&&(h.Nb(13),h.vc("ngModel",e.SearchMode),h.Nb(5),h.vc("ngIf","name"===e.SearchMode),h.Nb(1),h.vc("ngIf","role"===e.SearchMode),h.Nb(1),h.vc("ngForOf",e.Resultes))},directives:[s.t,s.Y,s.j,s.f,s.g,s.W,s.n,s.x,s.i,s.u,s.O,s.hb,o.f,o.g,s.P,n.j,n.i,s.D,s.w,s.ib,s.l,s.e,s.T,s.V],styles:[""]}),c})();i.d(e,"SearchuserPageModule",(function(){return S}));const p=[{path:"",component:v}];let S=(()=>{class c{}return c.\u0275mod=h.Wb({type:c}),c.\u0275inj=h.Vb({factory:function(e){return new(e||c)},imports:[[n.b,o.c,s.Z,t.j.forChild(p)]]}),c})()}}]);