function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"D+SI":function(e,t,n){"use strict";n.r(t);var r,c=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),s=n("c7TG"),a=n("mrSG"),u=n("HULg"),d=n("LTmD"),l=n("lEof"),h=n("fXoL"),f=((r=function(){function e(t,n){_classCallCheck(this,e),this.modalCtrl=t,this.toastCtrl=n,this.name="",this.nodetype=32,this.edit=!1,this.path=[]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onclose",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.name=(this.name||"").trim(),!e||!this.name.IsNullOrEmpty()){t.next=4;break}return t.next=3,this.toastCtrl.create({message:"\u6587\u4ef6\u5939\u7684\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a",duration:2e3});case 3:return t.abrupt("return",void t.sent.present());case 4:n={},e&&(n={name:this.name,type:this.nodetype}),this.modalCtrl.dismiss(n);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"NodeName",set:function(e){this.name=e},get:function(){return this.name}},{key:"NodeType",get:function(){return this.nodetype.toString()},set:function(e){this.nodetype=parseInt(e)}},{key:"Edit",get:function(){return this.edit},set:function(e){this.edit=!0===e}},{key:"Path",set:function(e){console.log("path = ",e),this.path=e}},{key:"PathT",get:function(){return this.path.join(" / ")}}]),e}()).\u0275fac=function(e){return new(e||r)(h.Yb(s.bb),h.Yb(s.ib))},r.\u0275cmp=h.Sb({type:r,selectors:[["app-nodeeditor"]],inputs:{NodeName:"NodeName",NodeType:"NodeType",Edit:"Edit",Path:"Path"},decls:44,vars:4,consts:[["color","secondary"],["slot","end"],[3,"click"],["color","medium"],["position","floating"],["placeholder","\u6587\u4ef6\u5939\u6216\u5ba2\u6237\u540d\u79f0",3,"ngModel","ngModelChange"],["position","stacked"],[3,"ngModel","disabled","ngModelChange"],["value","1"],["name","folder"],["value","2"],["name","person"],["value","32","checked",""],["name","document"],[1,"ion-margin-top"]],template:function(e,t){1&e&&(h.dc(0,"ion-header"),h.dc(1,"ion-toolbar",0),h.dc(2,"ion-title"),h.Jc(3,"\u521b\u5efa\u8282\u70b9"),h.cc(),h.dc(4,"ion-buttons",1),h.dc(5,"ion-button",2),h.lc("click",(function(){return t.onclose(!1)})),h.Jc(6," \u53d6\u6d88 "),h.cc(),h.dc(7,"ion-button",2),h.lc("click",(function(){return t.onclose(!0)})),h.Jc(8," \u786e\u5b9a "),h.cc(),h.cc(),h.cc(),h.cc(),h.dc(9,"ion-content"),h.dc(10,"ion-item"),h.dc(11,"ion-text"),h.Jc(12,"\u8def\u5f84\uff1a"),h.cc(),h.dc(13,"ion-text",3),h.Jc(14),h.cc(),h.cc(),h.dc(15,"ion-item"),h.dc(16,"ion-label",4),h.Jc(17,"\u76ee\u5f55\u540d\u79f0"),h.cc(),h.dc(18,"ion-input",5),h.lc("ngModelChange",(function(e){return t.NodeName=e})),h.cc(),h.cc(),h.dc(19,"ion-item"),h.dc(20,"ion-label",6),h.Jc(21,"\u76ee\u5f55\u7c7b\u578b"),h.cc(),h.dc(22,"ion-segment",7),h.lc("ngModelChange",(function(e){return t.NodeType=e})),h.dc(23,"ion-segment-button",8),h.Zb(24,"ion-icon",9),h.dc(25,"ion-text"),h.Jc(26,"\u5f52\u6863\u7bb1"),h.cc(),h.cc(),h.dc(27,"ion-segment-button",10),h.Zb(28,"ion-icon",11),h.dc(29,"ion-text"),h.Jc(30,"\u5ba2\u6237\u5939"),h.cc(),h.cc(),h.dc(31,"ion-segment-button",12),h.Zb(32,"ion-icon",13),h.dc(33,"ion-text"),h.Jc(34,"\u6587\u4ef6\u5939"),h.cc(),h.cc(),h.cc(),h.cc(),h.dc(35,"ion-item",14),h.dc(36,"ion-text",3),h.Jc(37,"\u6587\u4ef6\u5939\uff1a\u53ea\u53ef\u5b58\u653e\u516d\u723b\u548c\u516b\u5b57\u6848\u4f8b\u3002\u6587\u4ef6\u5939\u4e0b\u9762\u4e0d\u80fd\u518d\u5305\u542b\u5f52\u6863\u7bb1\u3001\u5ba2\u6237\u5939\u3001\u6587\u4ef6\u5939\u3002"),h.cc(),h.cc(),h.dc(38,"ion-item",14),h.dc(39,"ion-text",3),h.Jc(40,"\u5f52\u6863\u7bb1\uff1a\u4e0d\u53ef\u5b58\u653e\u6848\u4f8b\uff0c\u4f46\u53ef\u4ee5\u5d4c\u5957\u5305\u542b\u5f52\u6863\u7bb1\u3001\u5ba2\u6237\u5939\u3001\u6587\u4ef6\u5939\u3002"),h.cc(),h.cc(),h.dc(41,"ion-item",14),h.dc(42,"ion-text",3),h.Jc(43,"\u5ba2\u6237\u5939\uff1a\u4e0d\u53ef\u5b58\u653e\u6848\u4f8b\uff0c\u4f46\u53ef\u4ee5\u5d4c\u5957\u5305\u542b\u5f52\u6863\u7bb1\u3001\u5ba2\u6237\u5939\u3001\u6587\u4ef6\u5939\u3002"),h.cc(),h.cc(),h.cc()),2&e&&(h.Nb(14),h.Kc(t.PathT),h.Nb(4),h.vc("ngModel",t.NodeName),h.Nb(4),h.vc("ngModel",t.NodeType)("disabled",t.Edit))},directives:[s.s,s.X,s.V,s.i,s.h,s.m,s.w,s.S,s.C,s.v,s.hb,i.f,i.g,s.N,s.gb,s.O,s.t],styles:[""]}),r),p=n("HQI1"),b=n("mo90");function v(e,t){1&e&&(h.dc(0,"div",6),h.Zb(1,"ion-spinner",7),h.cc())}function m(e,t){if(1&e&&h.Zb(0,"ion-icon",8),2&e){var n=h.oc().$implicit;h.vc("name",1===n.statue?"md-checkmark":"md-close")}}function y(e,t){if(1&e&&(h.dc(0,"ion-item"),h.dc(1,"ion-text",3),h.Jc(2),h.cc(),h.dc(3,"ion-text"),h.Jc(4),h.cc(),h.Hc(5,v,2,0,"div",4),h.Hc(6,m,1,1,"ion-icon",5),h.cc()),2&e){var n=t.$implicit;h.Nb(2),h.Kc(n.type),h.Nb(2),h.Kc(n.path),h.Nb(1),h.vc("ngIf",0===n.statue),h.Nb(1),h.vc("ngIf",0!==n.statue)}}var g,N=n("NFKh"),x=((g=function(){function e(t,n,r,c,i){_classCallCheck(this,e),this.modalCtrl=t,this.alertController=n,this.dbservice=r,this.settings=c,this.host=i,this.Items=[],this.changed=!1,this.encrypKey="",this.usingencry=!1,this.Finished=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.user=this.settings.User,this.encrypKey=this.user.encryp,this.usingencry=!0===this.settings.Encryp,console.log("encrypKey",this.encrypKey,this.settings.Encryp),this.SyncNodes(this.user.id,this.user.password)}},{key:"SyncNodes",value:function(e,t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,c,i,o,s,a,u,d,l,h,f,p,b,v,m,y,g=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={type:"\u8fde\u63a5 => :",path:"\u6b63\u5728\u94fe\u63a5\u4e91\u670d\u52a1\u5668\u3002\u3002\u3002",statue:0,id:null},this.Items.push(t),e.next=4,this.LoadTreeFromCloud().catch((function(){return t.statue=-1,[]}));case 4:if(n=e.sent,Array.isArray(n)){e.next=7;break}return e.abrupt("return",(console.log(n),void this.modalCtrl.dismiss()));case 7:if(-1!==t.statue){e.next=9;break}return e.abrupt("return",(t.path="\u65e0\u6cd5\u94fe\u63a5\u5230\u670d\u52a1\u5668\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",void(this.Finished=!0)));case 9:return t.statue=1,r=!1,c=!1,e.next=13,this.dbservice.getNodesAlle();case 13:i=e.sent,console.log("nl",i),console.log("nc",n),o=!0,s=!1,a=void 0,e.prev=18,u=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.value,n=i.find((function(e){return e.id===t.id})),e.t0=!n||t.version>n.version,!e.t0){e.next=7;break}return r=!0,e.next=7,g.DownloadNode(n,t);case 7:if(e.t1=n&&n.version>t.version,!e.t1){e.next=12;break}return c=!0,e.next=12,g.UploadNode(n);case 12:case"end":return e.stop()}}),e)})),d=n[Symbol.iterator]();case 21:if(o=(l=d.next()).done){e.next=26;break}return e.delegateYield(u(),"t0",23);case 23:o=!0,e.next=21;break;case 26:e.next=32;break;case 28:e.prev=28,e.t1=e.catch(18),s=!0,a=e.t1;case 32:e.prev=32,e.prev=33,o||null==d.return||d.return();case 35:if(e.prev=35,!s){e.next=38;break}throw a;case 38:return e.finish(35);case 39:return e.finish(32);case 40:h=n.map((function(e){return e.id})),f=!0,p=!1,b=void 0,e.prev=44,v=i[Symbol.iterator]();case 46:if(f=(m=v.next()).done){e.next=56;break}if(y=m.value,e.t2=h.includes(y.id),e.t2){e.next=53;break}return c=!0,e.next=53,this.UploadNode(y);case 53:f=!0,e.next=46;break;case 56:e.next=62;break;case 58:e.prev=58,e.t3=e.catch(44),p=!0,b=e.t3;case 62:e.prev=62,e.prev=63,f||null==v.return||v.return();case 65:if(e.prev=65,!p){e.next=68;break}throw b;case 68:return e.finish(65);case 69:return e.finish(62);case 70:if(!1!==c||!1!==r){e.next=74;break}this.Items.push({type:"",path:"\u6ca1\u6709\u53ef\u66f4\u65b0\u7684\u6570\u636e\uff0c\u5df2\u7ecf\u4fdd\u5b58\u540c\u6b65\uff01",statue:1,id:""}),e.next=78;break;case 74:if(e.t4=c,!e.t4){e.next=78;break}return e.next=78,this.UploadNodes();case 78:this.Finished=!0;case 79:case"end":return e.stop()}}),e,this,[[18,28,32,40],[33,,35,39],[44,58,62,70],[63,,65,69]])})))}},{key:"DownloadNode",value:function(e,t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r,c,i,o,s,a,u,d,l,h,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r={type:"\u4e0b\u8f7d => :",path:t.name,statue:0,id:t.id},this.Items.push(r),!e||!e.dirty){n.next=7;break}return n.next=4,this.presentConfirm("\u51b2\u7a81",t.name,"\u4e91\u7aef\u6570\u636e\u4e0e\u672c\u5730\u6570\u636e\u5b58\u5728\u51b2\u7a81\uff0c\u8bf7\u9009\u62e9\u4fdd\u7559\u672c\u5730\u8bb0\u5f55\u6216\u8005\u6216\u8005\u66f4\u65b0\u672c\u5730\u8bb0\u5f55\u3002\u4e0d\u786e\u5b9a\u7684\u8bdd\u8bf7\u505c\u6b62\u672c\u6b21\u540c\u6b65\u3002");case 4:if(1===(c=n.sent)){n.next=7;break}return n.abrupt("return",c);case 7:if(n.prev=7,!(32===t.type&&t.size>=0)){n.next=43;break}return n.next=11,this.host.LoadRecord(this.user.id,this.user.password,t.id);case 11:if(!(i=n.sent)||i.id!==t.id){n.next=41;break}o=i.content,!0===i.encryp&&(o=this.DecrypData(i.content)),Array.isArray(o)||console.log(i,o.toString()),s=!0,a=!1,u=void 0,n.prev=18,d=o[Symbol.iterator]();case 20:if(s=(l=d.next()).done){n.next=27;break}return h=l.value,n.next=24,this.dbservice.UpdateObj(this.dbservice.Tables.Record,null,h);case 24:s=!0,n.next=20;break;case 27:n.next=33;break;case 29:n.prev=29,n.t0=n.catch(18),a=!0,u=n.t0;case 33:n.prev=33,n.prev=34,s||null==d.return||d.return();case 36:if(n.prev=36,!a){n.next=39;break}throw u;case 39:return n.finish(36);case 40:return n.finish(33);case 41:n.next=44;break;case 43:32===t.type&&t.size<0&&this.dbservice.DeleteNode(t.id);case 44:return f=e?e.id:null,n.next=47,this.dbservice.UpdateObj(this.dbservice.Tables.Node,f,t);case 47:return r.statue=1,n.abrupt("return",1);case 51:return n.prev=51,n.t1=n.catch(7),n.abrupt("return",(console.log(n.t1),this.presentAlert("\u7f51\u7edc\u51fa\u9519",null,"\u540c\u6b65\u6570\u636e\u65f6\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002"),r.statue=-1,-1));case 54:case"end":return n.stop()}}),n,this,[[7,51],[18,29,33,41],[34,,36,40]])})))}},{key:"UploadNode",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={type:"\u4e0a\u4f20 => :",path:e.name,statue:0,id:e.id},this.Items.push(n),t.prev=2,!(32===e.type&&e.size>=0)){t.next=13;break}return t.next=6,this.dbservice.GetRecordes(e.id);case 6:return r=t.sent,c={id:e.id,modified:Date.now(),version:e.version,encryp:!1,content:r},this.usingencry&&(c.content=N.AES.encrypt(JSON.stringify(r),this.encrypKey).toString(),c.encryp=!0),t.next=11,this.host.UploadRecord(this.user.id,this.user.password,c);case 11:t.next=17;break;case 13:if(t.t0=32===e.type&&e.size<0,!t.t0){t.next=17;break}return t.next=17,this.host.DeleteRecord(this.user.id,this.user.password,e.id);case 17:return t.abrupt("return",(this.dbservice.UpdateObj(this.dbservice.Tables.Node,e.id,{dirty:!1}),n.statue=1,1));case 20:return t.prev=20,t.t1=t.catch(2),t.abrupt("return",(this.presentAlert("\u7f51\u7edc\u51fa\u9519",null,"\u540c\u6b65\u6570\u636e\u65f6\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002"),n.statue=-1,-1));case 23:case"end":return t.stop()}}),t,this,[[2,20]])})))}},{key:"DecrypData",value:function(e){try{var t=N.AES.decrypt(e,this.encrypKey).toString(N.enc.Utf8);return JSON.parse(t)}catch(n){throw this.presentAlert("\u89e3\u5bc6\u51fa\u9519",null,"\u65e0\u6cd5\u89e3\u5bc6\u4e91\u7aef\u6848\u4f8b\u6587\u4ef6\u3002\u6587\u4ef6\u5df2\u635f\u574f\u6216\u52a0\u5bc6\u53e3\u4ee4\u4e0d\u6b63\u786e\u3002"),new Error("\u6587\u4ef6\u5df2\u635f\u574f\uff0c\u6216\u52a0\u5bc6\u53e3\u4ee4\u4e0d\u6b63\u786e\uff0c\u65e0\u6cd5\u6253\u5f00\u6587\u4ef6\u3002")}}},{key:"LoadTreeFromCloud",value:function(){var e=this,t=this.settings.User;return this.host.GetBookTree(t.id,t.password).then((function(n){return n&&n.id===t.id?!0===n.encryp?e.DecrypData(n.content):n.content:Promise.reject("\u670d\u52a1\u5668\u6587\u4ef6\u51fa\u9519\u3002")})).catch((function(e){return Promise.reject(e)}))}},{key:"UploadNodes",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={type:"\u4e0a\u4f20 => :",path:"\u76ee\u5f55\u7ed3\u6784",statue:0,id:null},this.Items.push(t),n=this.settings.User,e.next=5,this.dbservice.getNodesAlle();case 5:return(r=e.sent).forEach((function(e){return e.dirty=!1})),c={id:n.id,modified:Date.now(),version:0,encryp:!1,content:r},e.abrupt("return",(this.usingencry&&(c.content=N.AES.encrypt(JSON.stringify(r),this.encrypKey).toString(),c.encryp=!0),this.host.SaveBookTree(n.id,n.password,c).then((function(){return t.statue=1,!0})).catch((function(e){return t.statue=-1,!1}))));case 9:case"end":return e.stop()}}),e,this)})))}},{key:"Stop",value:function(){this.modalCtrl.dismiss(this.changed)}},{key:"presentAlert",value:function(e,t,n){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return c=r.sent,r.next=5,c.present();case 5:case"end":return r.stop()}}),r,this)})))}},{key:"presentConfirm",value:function(e,t,n){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var c,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=-1,r.next=3,this.alertController.create({header:e||"\u63d0\u793a",subHeader:t||"",message:n,buttons:[{text:"\u66f4\u65b0",handler:function(){c=1}},{text:" \u4fdd\u7559",handler:function(){c=0}},{text:"\u505c\u6b62",role:"cancel",cssClass:"secondary",handler:function(){}}]});case 3:return i=r.sent,r.next=6,i.present();case 6:return r.next=8,i.onWillDismiss();case 8:return r.abrupt("return",Promise.resolve(c));case 9:case"end":return r.stop()}}),r,this)})))}}]),e}()).\u0275fac=function(e){return new(e||g)(h.Yb(s.bb),h.Yb(s.b),h.Yb(u.a),h.Yb(d.a),h.Yb(l.a))},g.\u0275cmp=h.Sb({type:g,selectors:[["app-syncindicator"]],inputs:{Items:"Items"},decls:11,vars:2,consts:[["color","secondary"],[4,"ngFor","ngForOf"],["slot","end",3,"disabled","click"],["color","medium"],["class","spin","slot","end",4,"ngIf"],["slot","end",3,"name",4,"ngIf"],["slot","end",1,"spin"],["name","bubbles"],["slot","end",3,"name"]],template:function(e,t){1&e&&(h.dc(0,"ion-header"),h.dc(1,"ion-toolbar",0),h.dc(2,"ion-title"),h.Jc(3,"\u540c\u6b65\u6570\u636e\u5230\u670d\u52a1\u5668"),h.cc(),h.cc(),h.cc(),h.dc(4,"ion-content"),h.dc(5,"ion-list"),h.Hc(6,y,7,4,"ion-item",1),h.cc(),h.cc(),h.dc(7,"ion-footer"),h.dc(8,"ion-toolbar"),h.dc(9,"ion-button",2),h.lc("click",(function(){return t.Stop()})),h.Jc(10,"\u786e\u5b9a"),h.cc(),h.cc(),h.cc()),2&e&&(h.Nb(6),h.vc("ngForOf",t.Items),h.Nb(3),h.vc("disabled",!t.Finished))},directives:[s.s,s.X,s.V,s.m,s.D,c.i,s.q,s.h,s.w,s.S,c.j,s.R,s.t],styles:[""]}),g),k=n("xPBH"),S=(n("MTcp"),n("Y6BA")),w=n("vBXD");function C(e,t){if(1&e){var n=h.ec();h.dc(0,"ion-header"),h.dc(1,"ion-toolbar",2),h.dc(2,"ion-buttons",3),h.Zb(3,"ion-menu-button"),h.cc(),h.dc(4,"ion-title"),h.Jc(5,"\u6848\u4f8b\u76ee\u5f55"),h.cc(),h.dc(6,"ion-buttons",4),h.dc(7,"ion-button",5),h.lc("click",(function(){return h.Cc(n),h.oc().SyncCloud()})),h.Zb(8,"ion-icon",6),h.cc(),h.dc(9,"ion-button",7),h.lc("click",(function(e){return h.Cc(n),h.oc().sortOptions(e)})),h.Zb(10,"ion-icon",8),h.dc(11,"ion-text"),h.Jc(12),h.cc(),h.cc(),h.cc(),h.cc(),h.cc()}if(2&e){var r=h.oc();h.Nb(7),h.vc("disabled",!r.HasUser),h.Nb(5),h.Kc(r.SortName)}}function I(e,t){if(1&e){var n=h.ec();h.dc(0,"ion-item"),h.dc(1,"ion-buttons"),h.dc(2,"ion-button",9),h.lc("click",(function(){return h.Cc(n),h.oc().SyncCloud()})),h.Zb(3,"ion-icon",10),h.Jc(4," \u4e91\u540c\u6b65 "),h.cc(),h.dc(5,"ion-button",7),h.lc("click",(function(){return h.Cc(n),h.oc().onNodeAdd(null)})),h.Zb(6,"ion-icon",11),h.dc(7,"ion-text"),h.Jc(8,"\u65b0\u5efa"),h.cc(),h.cc(),h.dc(9,"ion-button",7),h.lc("click",(function(){return h.Cc(n),h.oc().ShowRecordes(null)})),h.Zb(10,"ion-icon",12),h.dc(11,"ion-text"),h.Jc(12,"\u5168\u90e8"),h.cc(),h.cc(),h.dc(13,"ion-button",5),h.lc("click",(function(){return h.Cc(n),h.oc().ShowActions()})),h.Zb(14,"ion-icon",13),h.dc(15,"ion-text"),h.Jc(16,"\u7f16\u8f91"),h.cc(),h.cc(),h.dc(17,"ion-button",14),h.lc("click",(function(){return h.Cc(n),h.oc().CleanData()})),h.Zb(18,"ion-icon",15),h.Jc(19," \u6e05\u7a7a "),h.cc(),h.cc(),h.dc(20,"ion-buttons",4),h.dc(21,"ion-segment",16),h.lc("ngModelChange",(function(e){return h.Cc(n),h.oc().SortKey=e}))("ionChange",(function(){return h.Cc(n),h.oc().Reload()})),h.dc(22,"ion-segment-button",17),h.Jc(23,"\u540d\u79f0"),h.cc(),h.dc(24,"ion-segment-button",18),h.Jc(25,"\u521b\u5efa\u65f6\u95f4"),h.cc(),h.dc(26,"ion-segment-button",19),h.Jc(27,"\u4fee\u6539\u65f6\u95f4"),h.cc(),h.cc(),h.cc(),h.cc()}if(2&e){var r=h.oc();h.Nb(2),h.vc("disabled",!r.HasUser),h.Nb(11),h.vc("disabled",!r.SelectedNode),h.Nb(8),h.vc("ngModel",r.SortKey)}}function O(e,t){if(1&e){var n=h.ec();h.dc(0,"ion-footer"),h.dc(1,"ion-toolbar"),h.dc(2,"ion-buttons",3),h.dc(3,"ion-button",7),h.lc("click",(function(){return h.Cc(n),h.oc().onNodeAdd(null)})),h.Zb(4,"ion-icon",11),h.dc(5,"ion-text"),h.Jc(6,"\u65b0\u5efa"),h.cc(),h.cc(),h.dc(7,"ion-button",5),h.lc("click",(function(){return h.Cc(n),h.oc().ShowActions()})),h.Zb(8,"ion-icon",13),h.dc(9,"ion-text"),h.Jc(10,"\u7f16\u8f91"),h.cc(),h.cc(),h.dc(11,"ion-button",14),h.lc("click",(function(){return h.Cc(n),h.oc().CleanData()})),h.Zb(12,"ion-icon",15),h.Jc(13," \u6e05\u7a7a "),h.cc(),h.cc(),h.dc(14,"ion-buttons",4),h.dc(15,"ion-button",7),h.lc("click",(function(){return h.Cc(n),h.oc().ShowRecordes(null)})),h.Zb(16,"ion-icon",12),h.dc(17,"ion-text"),h.Jc(18,"\u5168\u90e8"),h.cc(),h.cc(),h.cc(),h.cc(),h.cc()}if(2&e){var r=h.oc();h.Nb(7),h.vc("disabled",!r.SelectedNode)}}var R,D=((R=function(){function e(t,n,r,c,i,o,s,a,u){_classCallCheck(this,e),this.dbservice=t,this.settings=n,this.host=r,this.actionsheetctrl=c,this.alertCtrl=i,this.popoverCtrl=o,this.modalController=s,this.route=a,this.router=u,this.selectedtNodeId=15,this.SortKey="created",this.SortName="\u521b\u5efa\u65e5\u671f",this.HasUser=!1,this.spinner=!1}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settings.WaitInit();case 2:return e.next=4,this.Reload();case 4:this.HasUser=this.settings.HasUser,this.user=this.settings.User||S.a;case 6:case"end":return e.stop()}}),e,this)})))}},{key:"Reload",value:function(){var e=this;return this.dbservice.getNodes().then((function(t){return e.Nodes=e.buildNodeTree(t,null),!0})).catch((function(e){return!1}))}},{key:"onNodeSelecte",value:function(e){this.SelectedNode&&(this.SelectedNode.IsSelected=!1),this.SelectedNode=e,this.SelectedNode.IsSelected=!0}},{key:"sortOptions",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverCtrl.create({component:p.a,event:e,componentProps:{items:[{name:"\u76ee\u5f55\u540d\u79f0",value:"name"},{name:"\u521b\u5efa\u65f6\u95f4",value:"created"},{name:"\u4fee\u6539\u65f6\u95f4",value:"modified"}],currentOption:this.SortKey},translucent:!0});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onDidDismiss();case 7:if(r=t.sent,((c=r.data)||this.SortKey)===this.SortKey){t.next=21;break}t.t0=(this.SortKey=c.toString(),this.SortKey),t.next="name"===t.t0?13:"created"===t.t0?15:"modified"===t.t0?17:19;break;case 13:return this.SortName="\u76ee\u5f55\u540d\u79f0",t.abrupt("break",20);case 15:return this.SortName="\u521b\u5efa\u65f6\u95f4",t.abrupt("break",20);case 17:return this.SortName="\u4fee\u6539\u65f6\u95f4",t.abrupt("break",20);case 19:this.SortName="\u9ed8\u8ba4";case 20:this.Reload();case 21:case"end":return t.stop()}}),t,this)})))}},{key:"onNodeOpen",value:function(e){this.ShowRecordes(e)}},{key:"onNodeAdd",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,c,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:f,componentProps:{NodeName:null,NodeType:1,Edit:!1,Path:k.a.getNodePath(null,e?e.ID:null,this.Nodes)}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:r=t.sent,(c=r.data).name&&!c.name.IsNullOrEmpty()&&(c.parent=e?e.ID:"",this.dbservice.CreateNode(c.parent,c.name,c.type).then((function(t){var n=new k.a(t.type,t.name,t.id);e?e.Sub.push(n):i.Nodes.push(n)})));case 10:case"end":return t.stop()}}),t,this)})))}},{key:"EditNode",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,c,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.a.getNodePath(null,this.SelectedNode.ID,this.Nodes),e.next=3,this.modalController.create({component:f,componentProps:{NodeName:this.SelectedNode.Title,NodeType:this.SelectedNode.Type,Edit:!0,Path:t}});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.next=8,n.onWillDismiss();case 8:r=e.sent,(c=r.data).name&&!c.name.IsNullOrEmpty()&&this.dbservice.ChangeNode(this.SelectedNode.ID,c.name).then((function(e){i.SelectedNode.Title=c.name}));case 11:case"end":return e.stop()}}),e,this)})))}},{key:"DeleteNode",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,c,i,o,s,u=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("try delete ",this.SelectedNode),t=!1,n=k.a.getNodePath(null,this.SelectedNode?this.SelectedNode.ID:null,this.Nodes),e.next=5,this.alertCtrl.create({header:"".concat(n.join("/")),subHeader:'\u5220\u9664 "'.concat(this.SelectedNode.Title,'"'),message:"\u6b64\u76ee\u5f55\u4ee5\u53ca\u5176\u5305\u542b\u7684\u5b50\u76ee\u5f55\u548c\u76ee\u5f55\u5185\u7684\u6848\u4f8b\u5c06\u4f1a\u88ab\u5220\u9664\u3002\u786e\u5b9a\u6267\u884c\u5220\u9664\u64cd\u4f5c\u5417\uff1f",buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"},{text:"\u786e\u5b9a",handler:function(){return Object(a.b)(u,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!0;case 1:case"end":return e.stop()}}),e)})))}}]});case 5:return r=e.sent,e.next=8,r.present();case 8:return e.next=10,r.onDidDismiss();case 10:if(!t){e.next=22;break}c=[],this.SelectedNode.SubNodesId(c),i=0,o=c;case 14:if(!(i<o.length)){e.next=21;break}return s=o[i],e.next=18,this.dbservice.DeleteNode(s).catch((function(e){console.log("delete node err",e),u.presentAlert("\u51fa\u9519",null,"\u4e0d\u597d\u610f\u601d\uff0c\u51fa\u4e86\u70b9\u5c0f\u95ee\u9898\u3002\u8bf7\u518d\u6b21\u6267\u884c\u4e00\u6b21\u5220\u9664\u64cd\u4f5c\u3002")}));case 18:i++,e.next=14;break;case 21:console.log("reload nodes ...."),this.Reload();case 22:case"end":return e.stop()}}),e,this)})))}},{key:"MoveNode",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,c=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.a.getNodePath(null,this.SelectedNode?this.SelectedNode.ID:null,this.Nodes),e.next=3,this.modalController.create({component:b.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!1,NodeID:this.SelectedNode.ID}});case 3:return t=e.sent,e.next=6,t.present();case 6:return e.next=8,t.onWillDismiss();case 8:n=e.sent,(r=n.data).nodeid&&!r.nodeid.IsNullOrEmpty()&&this.dbservice.ChangeNode(this.SelectedNode.ID,null,"root"===r.nodeid?"":r.nodeid).then((function(e){return c.Reload()}));case 11:case"end":return e.stop()}}),e,this)})))}},{key:"ShowRecordes",value:function(e){if(e){var t=[];this.findDocumentNode(e,t),this.router.navigateByUrl("/menu/recordes/".concat(t.join("-")))}else this.router.navigateByUrl("/menu/recordes/*")}},{key:"ShowActions",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{text:"\u5220\u9664",role:"destructive",icon:"trash",handler:function(){r.DeleteNode()}},{text:"\u4fee\u6539",icon:"create",handler:function(){r.EditNode()}},{text:"\u8fc1\u79fb\u76ee\u5f55",icon:"arrow-round-back",handler:function(){r.MoveNode()}},{text:" \u53d6\u6d88",icon:"close",role:"cancel",handler:function(){}}],this.SelectedNode&&!this.SelectedNode.IsFile&&t.insert(0,{text:"\u5b50\u76ee\u5f55",icon:"add",handler:function(){r.onNodeAdd(r.SelectedNode)}}),e.next=4,this.actionsheetctrl.create({header:"\u7f16\u8f91\uff1a".concat(this.SelectedNode.Title),buttons:t});case 4:return n=e.sent,e.next=7,n.present();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"SyncCloud",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:x});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:return e.next=9,this.Reload();case 9:case"end":return e.stop()}}),e,this)})))}},{key:"CleanData",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.presentAlert("\u6e05\u7a7a","\u672c\u5730\u6848\u4f8b","\u672c\u5730\u6848\u4f8b\u4f1a\u88ab\u6e05\u7a7a\u3002\u8bf7\u786e\u4fdd\u5df2\u7ecf\u5bfc\u51fa\uff0c\u6216\u8005\u4fdd\u5b58\u5230\u4e91\u7aef\u3002",!0);case 2:if(e.t0=e.sent,!e.t0){e.next=9;break}return e.next=6,this.dbservice.CleanDB(this.user.id);case 6:return e.next=8,this.dbservice.initNano();case 8:this.Nodes=[];case 9:case"end":return e.stop()}}),e,this)})))}},{key:"buildNodeTree",value:function(e,t){var n=this,r=[];return(t||"").IsNullOrEmpty(),t=null!=t?t:"",(r=e.where((function(e){return(e.parent||"")===t})).sortByKey(this.SortKey).select((function(e){var t=new k.a(e.type,e.name,e.id);return t.Version=e.version?e.version:0,t}))).forEach((function(t){t.Sub=n.buildNodeTree(e,t.ID)})),r}},{key:"findDocumentNode",value:function(e,t){if(32!==e.Type){var n=!0,r=!1,c=void 0;try{for(var i,o=(e.Sub||[])[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;this.findDocumentNode(s,t)}}catch(a){r=!0,c=a}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}}else t.push(e.ID)}},{key:"findTreeNode",value:function(e,t){var n=(e||[]).find((function(e){return e.ID===t}));if(n)return n;var r=!0,c=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value,u=this.findTreeNode(a.Sub,t);if(u)return u}}catch(d){c=!0,i=d}finally{try{r||null==s.return||s.return()}finally{if(c)throw i}}return null}},{key:"presentAlert",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function c(){var i,o,s;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=!1,o=[{text:"\u786e\u5b9a",handler:function(){i=!0}}],r&&o.push({text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){}}),c.next=5,this.alertCtrl.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:o});case 5:return s=c.sent,c.next=8,s.present();case 8:return c.next=10,s.onWillDismiss();case 10:return c.abrupt("return",Promise.resolve(i));case 11:case"end":return c.stop()}}),c,this)})))}},{key:"IsWeb",get:function(){return"web"===S.b}},{key:"OpenEnable",get:function(){return!!this.SelectedNode&&32===this.SelectedNode.Type}}]),e}()).\u0275fac=function(e){return new(e||R)(h.Yb(u.a),h.Yb(d.a),h.Yb(l.a),h.Yb(s.a),h.Yb(s.b),h.Yb(s.eb),h.Yb(s.bb),h.Yb(o.a),h.Yb(o.g))},R.\u0275cmp=h.Sb({type:R,selectors:[["app-nodes"]],decls:5,vars:4,consts:[[4,"ngIf"],[3,"nodes","nodeOpen","nodeSelected","nodeAdd"],["color","primary"],["slot","start"],["slot","end"],["size","small",3,"disabled","click"],["slot","icon-only","name","cloud-upload"],["size","small",3,"click"],["name","md-funnel"],[3,"disabled","click"],["name","cloud-upload"],["name","add"],["name","book"],["name","build"],[3,"click"],["name","trash"],[3,"ngModel","ngModelChange","ionChange"],["value","name"],["value","modified"],["value","created"]],template:function(e,t){1&e&&(h.Hc(0,C,13,2,"ion-header",0),h.dc(1,"ion-content"),h.Hc(2,I,28,3,"ion-item",0),h.dc(3,"app-tree-node",1),h.lc("nodeOpen",(function(e){return t.onNodeOpen(e)}))("nodeSelected",(function(e){return t.onNodeSelecte(e)}))("nodeAdd",(function(e){return t.onNodeAdd(e)})),h.cc(),h.cc(),h.Hc(4,O,19,1,"ion-footer",0)),2&e&&(h.vc("ngIf",!t.IsWeb),h.Nb(2),h.vc("ngIf",t.IsWeb),h.Nb(1),h.vc("nodes",t.Nodes),h.Nb(1),h.vc("ngIf",!t.IsWeb))},directives:[c.j,s.m,w.a,s.s,s.X,s.i,s.F,s.V,s.h,s.t,s.S,s.w,s.N,s.gb,i.f,i.g,s.O,s.q],styles:[".spin[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px;stroke:#444;fill:#222}"]}),R),J=n("i/bi");n.d(t,"NodesPageModule",(function(){return P}));var T,j=[{path:"",component:D}],P=((T=function e(){_classCallCheck(this,e)}).\u0275mod=h.Wb({type:T}),T.\u0275inj=h.Vb({factory:function(e){return new(e||T)},imports:[[c.b,i.c,s.Y,J.e,o.j.forChild(j)]]}),T)},HQI1:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("c7TG"),c=n("fXoL"),i=n("ofXK");function o(e,t){if(1&e){var n=c.ec();c.dc(0,"ion-item",3),c.lc("click",(function(){c.Cc(n);var e=t.$implicit;return c.oc(2).onSelect(e.value)})),c.dc(1,"ion-text"),c.Jc(2),c.cc(),c.cc()}if(2&e){var r=t.$implicit,i=c.oc(2);c.vc("color",r.value===i.currentOption?"light":""),c.Nb(2),c.Kc(r.name)}}function s(e,t){if(1&e&&(c.dc(0,"div"),c.Hc(1,o,3,2,"ion-item",2),c.cc()),2&e){var n=c.oc();c.Nb(1),c.vc("ngForOf",n.items)}}function a(e,t){if(1&e&&(c.dc(0,"ion-note"),c.Jc(1),c.cc()),2&e){var n=c.oc().$implicit;c.Nb(1),c.Lc(" ",n.name," ")}}function u(e,t){if(1&e&&(c.dc(0,"ion-item",6),c.Hc(1,a,2,1,"ion-note",0),c.dc(2,"ion-label",7),c.dc(3,"small"),c.Zb(4,"ion-text",8),c.cc(),c.cc(),c.cc()),2&e){var n=t.$implicit;c.Nb(1),c.vc("ngIf",n.name),c.Nb(3),c.vc("innerHtml",n.value,c.Dc)}}function d(e,t){if(1&e&&(c.dc(0,"ion-list",4),c.Hc(1,u,5,2,"ion-item",5),c.cc()),2&e){var n=c.oc();c.Nb(1),c.vc("ngForOf",n.items)}}var l=function(){var e=function(){function e(t){_classCallCheck(this,e),this.popoverCtrl=t,this.toselect=!0}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onSelect",value:function(e){this.popoverCtrl.dismiss(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Yb(r.eb))},e.\u0275cmp=c.Sb({type:e,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["class","ion-no-padding",4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],[1,"ion-no-padding"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","end",1,"ion-text-wrap"],[3,"innerHtml"]],template:function(e,t){1&e&&(c.Hc(0,s,2,1,"div",0),c.Hc(1,d,2,1,"ion-list",1)),2&e&&(c.vc("ngIf",t.toselect),c.Nb(1),c.vc("ngIf",!t.toselect))},directives:[i.j,i.i,r.w,r.S,r.D,r.C,r.G],styles:[""]}),e}()}}]);