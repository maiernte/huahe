function _classCallCheck(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(c,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}function _createClass(c,e,n){return e&&_defineProperties(c.prototype,e),n&&_defineProperties(c,n),c}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{J4mY:function(c,e,n){"use strict";n.r(e);var i,t=n("ofXK"),o=n("3Pt+"),r=n("tyNb"),a=n("c7TG"),u=n("mrSG"),s=n("LTmD"),l=n("PKx9"),d=n("8/yo"),f=n("Y6BA"),p=n("G6JS"),m=n("fXoL"),h=((i=function(){function c(e){_classCallCheck(this,c),this.modalCtrl=e}return _createClass(c,[{key:"ngOnInit",value:function(){}},{key:"onClose",value:function(){this.modalCtrl.dismiss()}}]),c}()).\u0275fac=function(c){return new(c||i)(m.Zb(a.db))},i.\u0275cmp=m.Tb({type:i,selectors:[["app-imgmodal"]],inputs:{ImgSrc:"ImgSrc"},decls:7,vars:1,consts:[["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["name","close"],[1,"frame",2,"background-color","black"],[1,"helper"],[3,"src"]],template:function(c,e){1&c&&(m.ec(0,"ion-content"),m.ec(1,"ion-fab",0),m.mc("click",(function(){return e.onClose()})),m.ec(2,"ion-fab-button"),m.ac(3,"ion-icon",1),m.dc(),m.dc(),m.ec(4,"div",2),m.ac(5,"span",3),m.ac(6,"img",4),m.dc(),m.dc()),2&c&&(m.Nb(6),m.uc("src",e.ImgSrc,m.Cc))},directives:[a.n,a.p,a.q,a.u],styles:[".frame[_ngcontent-%COMP%]{height:100%;width:100%;white-space:nowrap;text-align:center;margin:1em 0}.helper[_ngcontent-%COMP%]{display:inline-block;height:100%}.helper[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{vertical-align:middle}img[_ngcontent-%COMP%]{background:#3a6f9a}"]}),i),g=n("i/bi"),v=n("ylIl"),b=n("gTpY");function T(c,e){1&c&&(m.ec(0,"ion-text",19),m.Hc(1,"[\u7cbe\u534e]"),m.dc())}function k(c,e){1&c&&(m.ec(0,"ion-text",19),m.Hc(1,"[\u7f6e\u9876]"),m.dc())}function x(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){return m.Ac(n),m.pc(2).AnswerTopic(null)})),m.Hc(2,"[\u56de\u590d]"),m.dc(),m.dc()}}function w(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){m.Ac(n);var c=m.pc(2);return c.EditTopic(c.Topic)})),m.Hc(2,"[\u4fee\u6539]"),m.dc(),m.dc()}}function C(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){m.Ac(n);var c=m.pc(2);return c.DeleteTopic(c.Topic.id,!0)})),m.Hc(2,"[\u5220\u9664]"),m.dc(),m.dc()}}function I(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){m.Ac(n);var c=m.pc(2);return c.FrozenTopic(c.Topic)})),m.Hc(2,"[\u5c01\u5b58]"),m.dc(),m.dc()}}function y(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){m.Ac(n);var c=m.pc(2);return c.ChangeImg(c.Topic)})),m.Hc(2,"[\u56fe\u7247]"),m.dc(),m.dc()}}function N(c,e){if(1&c&&(m.ec(0,"sui-accordion",28),m.ec(1,"sui-accordion-panel",29),m.ec(2,"div",30),m.ac(3,"i",31),m.Hc(4," \u5366\u76d8 "),m.dc(),m.ec(5,"div",32),m.ac(6,"app-guaview",33),m.dc(),m.dc(),m.dc()),2&c){var n=m.pc(2);m.uc("closeOthers",!1),m.Nb(1),m.uc("isOpen",!1),m.Nb(5),m.uc("Config",n.GuaConfig)("GuaText",n.Topic.gua)}}function A(c,e){if(1&c&&(m.ec(0,"sui-accordion",28),m.ec(1,"sui-accordion-panel",29),m.ec(2,"div",30),m.ac(3,"i",31),m.Hc(4," \u547d\u76d8 "),m.dc(),m.ec(5,"div",32),m.ac(6,"app-baziview",34),m.dc(),m.dc(),m.dc()),2&c){var n=m.pc(2);m.uc("closeOthers",!1),m.Nb(1),m.uc("isOpen",!1),m.Nb(5),m.uc("Config",n.BaziConfig)("BaziText",n.Topic.bazi)}}var H=function(c){return{"max-height.px":c}};function P(c,e){if(1&c){var n=m.fc();m.ec(0,"ion-item",35),m.mc("click",(function(){m.Ac(n);var c=m.pc(2);return c.ShowImageModal(c.Topic.img)})),m.ec(1,"div",36),m.ac(2,"img",37),m.dc(),m.dc()}if(2&c){var i=m.pc(2);m.Nb(2),m.uc("src",i.Topic.img,m.Cc)("ngStyle",m.vc(2,H,i.MaxHeight))}}function F(c,e){if(1&c){var n=m.fc();m.ec(0,"div"),m.ec(1,"ion-item"),m.ec(2,"ion-thumbnail",1),m.ac(3,"img",20),m.dc(),m.ec(4,"ion-label",21),m.ec(5,"ion-text",22),m.mc("click",(function(){m.Ac(n);var c=m.pc();return c.ShowUserInfo(c.Topic.author)})),m.Hc(6),m.dc(),m.ac(7,"br"),m.ec(8,"ion-note"),m.ec(9,"small"),m.Hc(10),m.dc(),m.dc(),m.ac(11,"br"),m.ec(12,"ion-note"),m.ec(13,"small"),m.Hc(14),m.dc(),m.dc(),m.ac(15,"br"),m.ec(16,"ion-label",21),m.ec(17,"small"),m.ec(18,"ion-text",23),m.Hc(19,"0 \u697c"),m.dc(),m.dc(),m.Fc(20,x,3,0,"small",10),m.Fc(21,w,3,0,"small",10),m.Fc(22,C,3,0,"small",10),m.Fc(23,I,3,0,"small",10),m.Fc(24,y,3,0,"small",10),m.dc(),m.dc(),m.dc(),m.Fc(25,N,7,4,"sui-accordion",24),m.Fc(26,A,7,4,"sui-accordion",24),m.Fc(27,P,3,4,"ion-item",25),m.ec(28,"ion-item"),m.ec(29,"ion-label",21),m.ac(30,"ion-text",26),m.dc(),m.dc(),m.dc()}if(2&c){var i=m.pc();m.Nb(3),m.uc("src",i.Topic.avatar,m.Cc),m.Nb(3),m.Jc("\u4f5c\u8005\uff1a",i.Topic.author,""),m.Nb(4),m.Jc("\u53d1\u5e16\u65f6\u95f4: ",i.DateText(i.Topic.created),""),m.Nb(4),m.Jc("\u4fee\u6539\u65f6\u95f4: ",i.DateText(i.Topic.modified),""),m.Nb(6),m.uc("ngIf",i.CheckAction(i.Topic,"anwser")),m.Nb(1),m.uc("ngIf",i.CheckAction(i.Topic,"modify")),m.Nb(1),m.uc("ngIf",i.CheckAction(i.Topic,"delete")),m.Nb(1),m.uc("ngIf",i.CheckAction(i.Topic,"frozen")),m.Nb(1),m.uc("ngIf",i.Topic.img),m.Nb(1),m.uc("ngIf",i.Topic.gua),m.Nb(1),m.uc("ngIf",i.Topic.bazi),m.Nb(1),m.uc("ngIf",i.ShowMe(i.Topic,"img")),m.Nb(3),m.uc("innerHtml",null==i.Topic?null:i.Topic.content,m.Bc)}}function O(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){return m.Ac(n),m.pc(2).AnswerTopic(null)})),m.Hc(2,"[\u56de\u590d]"),m.dc(),m.dc()}}function z(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){m.Ac(n);var c=m.pc().$implicit;return m.pc().EditTopic(c)})),m.Hc(2,"[\u4fee\u6539]"),m.dc(),m.dc()}}function S(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){m.Ac(n);var c=m.pc().$implicit;return m.pc().DeleteTopic(c.id,!0)})),m.Hc(2,"[\u5220\u9664]"),m.dc(),m.dc()}}function M(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){m.Ac(n);var c=m.pc().$implicit;return m.pc().FrozenTopic(c)})),m.Hc(2,"[\u5c01\u5b58]"),m.dc(),m.dc()}}function R(c,e){if(1&c){var n=m.fc();m.ec(0,"small"),m.ec(1,"ion-text",27),m.mc("click",(function(){m.Ac(n);var c=m.pc().$implicit;return m.pc().ChangeImg(c)})),m.Hc(2,"[\u56fe\u7247]"),m.dc(),m.dc()}}function G(c,e){if(1&c&&(m.ec(0,"sui-accordion",28),m.ec(1,"sui-accordion-panel",29),m.ec(2,"div",30),m.ac(3,"i",31),m.Hc(4," \u5366\u76d8 "),m.dc(),m.ec(5,"div",32),m.ac(6,"app-guaview",33),m.dc(),m.dc(),m.dc()),2&c){var n=m.pc().$implicit,i=m.pc();m.uc("closeOthers",!1),m.Nb(1),m.uc("isOpen",!1),m.Nb(5),m.uc("Config",i.GuaConfig)("GuaText",n.gua)}}function D(c,e){if(1&c&&(m.ec(0,"sui-accordion",28),m.ec(1,"sui-accordion-panel",29),m.ec(2,"div",30),m.ac(3,"i",31),m.Hc(4," \u547d\u76d8 "),m.dc(),m.ec(5,"div",32),m.ac(6,"app-baziview",34),m.dc(),m.dc(),m.dc()),2&c){var n=m.pc().$implicit,i=m.pc();m.uc("closeOthers",!1),m.Nb(1),m.uc("isOpen",!1),m.Nb(5),m.uc("Config",i.BaziConfig)("BaziText",n.bazi)}}function U(c,e){if(1&c){var n=m.fc();m.ec(0,"ion-item",35),m.mc("click",(function(){m.Ac(n);var c=m.pc().$implicit;return m.pc().ShowImageModal(c.img)})),m.ec(1,"div",36),m.ac(2,"img",37),m.dc(),m.dc()}if(2&c){var i=m.pc().$implicit,t=m.pc();m.Nb(2),m.uc("src",i.img,m.Cc)("ngStyle",m.vc(2,H,t.MaxHeight))}}function _(c,e){if(1&c){var n=m.fc();m.ec(0,"ion-item"),m.ec(1,"div",38),m.ec(2,"ion-item"),m.ec(3,"ion-thumbnail",1),m.ac(4,"img",20),m.dc(),m.ec(5,"ion-label",21),m.ec(6,"ion-text",22),m.mc("click",(function(){m.Ac(n);var c=e.$implicit;return m.pc().ShowUserInfo(c.author)})),m.Hc(7),m.dc(),m.ac(8,"br"),m.ec(9,"ion-note"),m.ec(10,"small"),m.Hc(11),m.dc(),m.dc(),m.ac(12,"br"),m.ec(13,"ion-note"),m.ec(14,"small"),m.Hc(15),m.dc(),m.dc(),m.ac(16,"br"),m.ec(17,"ion-label",21),m.ec(18,"small"),m.ec(19,"ion-text",23),m.Hc(20,"0 \u697c"),m.dc(),m.dc(),m.Fc(21,O,3,0,"small",10),m.Fc(22,z,3,0,"small",10),m.Fc(23,S,3,0,"small",10),m.Fc(24,M,3,0,"small",10),m.Fc(25,R,3,0,"small",10),m.dc(),m.dc(),m.dc(),m.Fc(26,G,7,4,"sui-accordion",24),m.Fc(27,D,7,4,"sui-accordion",24),m.Fc(28,U,3,4,"ion-item",25),m.ec(29,"ion-item",39),m.ec(30,"ion-label",21),m.ac(31,"ion-text",26),m.dc(),m.dc(),m.dc(),m.dc()}if(2&c){var i=e.$implicit,t=m.pc();m.Nb(4),m.uc("src",i.avatar,m.Cc),m.Nb(3),m.Jc("\u4f5c\u8005\uff1a",i.author,""),m.Nb(4),m.Jc("\u53d1\u5e16\u65f6\u95f4: ",t.DateText(i.created),""),m.Nb(4),m.Jc("\u4fee\u6539\u65f6\u95f4: ",t.DateText(i.modified),""),m.Nb(6),m.uc("ngIf",t.CheckAction(i,"anwser")),m.Nb(1),m.uc("ngIf",t.CheckAction(i,"modify")),m.Nb(1),m.uc("ngIf",t.CheckAction(i,"delete")),m.Nb(1),m.uc("ngIf",t.CheckAction(i,"frozen")),m.Nb(1),m.uc("ngIf",i.img),m.Nb(1),m.uc("ngIf",i.gua),m.Nb(1),m.uc("ngIf",i.bazi),m.Nb(1),m.uc("ngIf",t.ShowMe(i,"img")),m.Nb(3),m.uc("innerHtml",i.content,m.Bc)}}function j(c,e){if(1&c){var n=m.fc();m.ec(0,"ion-button",40),m.mc("click",(function(){m.Ac(n);var c=m.pc();return c.ShowPanfu(c.Topic.gua)})),m.Hc(1,"\u5366\u76d8"),m.dc()}}function J(c,e){if(1&c){var n=m.fc();m.ec(0,"ion-button",40),m.mc("click",(function(){m.Ac(n);var c=m.pc();return c.ShowPanfu(c.Topic.bazi)})),m.Hc(1,"\u547d\u76d8"),m.dc()}}function B(c,e){if(1&c){var n=m.fc();m.ec(0,"ion-button",41),m.mc("click",(function(){return m.Ac(n),m.pc().SetTopOrGood("\u7cbe\u534e")})),m.Hc(1,"[\u7cbe\u534e]"),m.dc()}if(2&c){var i=m.pc();m.uc("color",null!=i.Topic&&i.Topic.good?"primary":"danger")}}function $(c,e){if(1&c){var n=m.fc();m.ec(0,"ion-button",41),m.mc("click",(function(){return m.Ac(n),m.pc().SetTopOrGood("\u7f6e\u9876")})),m.Hc(1,"[\u7f6e\u9876]"),m.dc()}if(2&c){var i=m.pc();m.uc("color",null!=i.Topic&&i.Topic.top?"primary":"danger")}}function L(c,e){if(1&c&&(m.ec(0,"ion-select-option",42),m.Hc(1),m.dc()),2&c){var n=e.$implicit;m.uc("value",n),m.Nb(1),m.Jc("\u7b2c",n+1,"\u9875")}}var E,Z=((E=function(){function c(e,n,i,t,o,r,a){var u=this;_classCallCheck(this,c),this.loadingController=e,this.alertController=n,this.settings=i,this.forumservice=t,this.modalCtrl=o,this.route=r,this.router=a,this.pageindex=0,this.Pages=[0],this.Titel="Topic Titel",this.VTopic=[],this.route.params.subscribe((function(c){u.forumid=c.forumid,u.topicid=c.topicid}))}return _createClass(c,[{key:"ngOnInit",value:function(){var c;return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settings.WaitInit();case 2:if(e.t0=this.forumservice.ForumMG.Forumlist,e.t0){e.next=6;break}return e.next=6,this.forumservice.LoadForumList();case 6:return this.forum=this.forumservice.ForumMG.Forumlist.find((function(c){return c.id===n.forumid})),this.Titel=(null===(c=this.forum)||void 0===c?void 0:c.name)||this.forumid,this.user=this.settings.User||f.a,this.GuaConfig=this.settings.Gua,this.BaziConfig=this.settings.Bazi,e.next=13,this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4});case 13:return this.loadingView=e.sent,e.next=16,this.forumservice.GetTopic(this.forumid,this.topicid);case 16:this.Topic=e.sent,this.PageIndex=0;case 18:case"end":return e.stop()}}),e,this)})))}},{key:"LoadAnswors",value:function(c){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.forumservice.LoadAnswerList(this.topicid,this.forumid,c).then((function(c){c&&Array.isArray(c.data)&&(n.BuildPages(c.sum),n.VTopic=c.data,n.updateUserAvatar())})).catch((function(c){console.log("LoadAnswors Error",c)}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"DateText",value:function(c){if(!c)return"\u65e0";var e=new Date(c);return e.toChinaStr()+" ".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds())}},{key:"GetRoles",value:function(c){return c?this.settings.UserRolers(c):[]}},{key:"CheckAction",value:function(c,e){if(!c||!this.HasUser)return!1;var n=!1;return"modify"===e?n=(n=this.user.id===c.author||this.IsAdmin)&&!0!==c.frozen:"delete"===e?n=(n=this.user.id===c.author||this.IsAdmin)&&!0!==c.frozen:"frozen"===e?n=(n=this.user.id===c.author||this.IsAdmin)&&!0!==c.frozen:"anwser"===e&&(n=!0),n&&!(!0===c.deleted)}},{key:"ShowPanfu",value:function(c){this.router.navigate(["menu/topicpanfu/".concat(JSON.stringify(c))])}},{key:"EditTopic",value:function(c){var e;return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,t,o,r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=void 0!==c.forumid,(t=i?null===(e=this.forum)||void 0===e?void 0:e.name:this.Topic.title)||(t=c.forumid||this.forumid),n.next=5,this.modalCtrl.create({component:d.a,componentProps:{MainTopic:i?c:null,VTopic:i?null:c,forumid:this.forumid,forumname:t,Private:!this.forum}});case 5:return o=n.sent,n.next=8,o.present();case 8:return n.next=10,o.onWillDismiss();case 10:r=n.sent,a=r.data,console.log("new Topic return ",a);case 13:case"end":return n.stop()}}),n,this)})))}},{key:"DeleteTopic",value:function(c,e){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.presentConfirm("\u5220\u9664",null,"\u786e\u5b9a\u5220\u9664\u6b64\u5e16\u5b50/\u53d1\u8a00\uff1f").then((function(n){return!0===n&&i.forumservice.DeleteTopic(c,e?null:i.Topic.id)})).then((function(c){c&&i.router.navigateByUrl(e?"menu/forum":"menu/topiclist/".concat(i.forumid))}));case 1:case"end":return n.stop()}}),n,this)})))}},{key:"AnswerTopic",value:function(c){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.CreateTopic(c),e.next=3,this.modalCtrl.create({component:d.a,componentProps:{VTopic:n,forumid:this.forumid,forumname:this.Topic.title}});case 3:return i=e.sent,e.next=6,i.present();case 6:return e.next=8,i.onWillDismiss();case 8:case"end":return e.stop()}}),e,this)})))}},{key:"FrozenTopic",value:function(c){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!c,c=c||this.Topic,this.presentConfirm("\u5c01\u5b58",null,"\u5c01\u5b58\u53d1\u8a00\u540e\uff0c\u4e0d\u5141\u8bb8\u518d\u4fee\u6539\u3001\u5220\u9664\u3002\u5168\u697c\u5c01\u5b58\u540e\u4e0d\u5141\u8bb8\u8ddf\u8d34\u3002\u786e\u5b9a\u5c01\u5b58\u5417\uff1f").then((function(e){if(!0===e)return i.forumservice.UpdateTopic({frozen:!0},c.id,!i.forum)})).then((function(e){e&&(c.frozen=!0,c.deleted=!!n||c.deleted)})).catch((function(c){i.presentConfirm("\u64cd\u4f5c\u5931\u8d25",null,"\u5c01\u697c/\u53d1\u8a00\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff0c \u6216\u8005\u5411\u7248\u4e3b\u62a5\u544a\u3002")}));case 2:case"end":return e.stop()}}),e,this)})))}},{key:"SetTopOrGood",value:function(c){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},"\u7cbe\u534e"===c?n.good=!this.Topic.good:"\u7f6e\u9876"===c&&(n.top=(this.Topic.top+1)%2),this.forumservice.UpdateTopic(n,this.Topic.id,!this.forum).then((function(e){e&&("\u7cbe\u534e"===c?i.Topic.good=!i.Topic.good:"\u7f6e\u9876"===c&&(i.Topic.top=(i.Topic.top+1)%2))}));case 2:case"end":return e.stop()}}),e,this)})))}},{key:"ShowUserInfo",value:function(c){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:p.a,componentProps:{Uerid:c}});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.next=7,n.onWillDismiss();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"ShowImageModal",value:function(c){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:h,componentProps:{ImgSrc:c}});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.next=7,n.onWillDismiss();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"ShowMe",value:function(c,e){return"img"===e?c&&c.img&&c.showImg:"gua"===e?c&&c.gua&&c.showgua:"bazi"===e&&c&&c.bazi&&c.showbazi}},{key:"ChangeImg",value:function(c){c.showImg=!c.showImg}},{key:"CreateTopic",value:function(c){var e=Date.now();return{id:"",created:e,modified:e,author:this.user.id,topic:this.Topic.id,gua:null,bazi:null,img:null,content:"",feedback:c||"",frozen:!1}}},{key:"updateUserAvatar",value:function(){var c=this;this.VTopic.forEach((function(e){c.forumservice.GetUserInfo(e.author).then((function(n){var i=(n||f.a).avatar||"";e.avatar=i.IsNullOrEmpty()?c.settings.Avatar(n.gender):i,e.showImg=!0}))}))}},{key:"presentConfirm",value:function(c,e,n){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var t,o;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=!1,i.next=3,this.alertController.create({header:c||"\u63d0\u793a",subHeader:e||"",message:n,buttons:[{text:"\u786e\u5b9a",handler:function(){t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){}}]});case 3:return o=i.sent,i.next=6,o.present();case 6:return i.next=8,o.onWillDismiss();case 8:return i.abrupt("return",Promise.resolve(t));case 9:case"end":return i.stop()}}),i,this)})))}},{key:"BuildPages",value:function(c){if(0===this.PageIndex)if(0!==c){this.Pages=[];for(var e=Math.ceil(c/20),n=0;n<e;n++)this.Pages.push(n)}else this.Pages=[0]}},{key:"HasUser",get:function(){return this.settings.HasUser&&this.user!==f.a}},{key:"PageIndex",get:function(){return this.pageindex},set:function(c){this.pageindex=c,this.LoadAnswors(c)}},{key:"MaxHeight",get:function(){return Math.ceil(this.settings.DeviceHeight/2)}},{key:"IsAdmin",get:function(){if(!this.user||!this.forum)return!1;var c=256===this.user.roller;return this.forum&&this.Topic&&(c=c||this.forum.admin.includes(this.user.id)),c}}]),c}()).\u0275fac=function(c){return new(c||E)(m.Zb(a.cb),m.Zb(a.b),m.Zb(s.a),m.Zb(l.a),m.Zb(a.db),m.Zb(r.a),m.Zb(r.g))},E.\u0275cmp=m.Tb({type:E,selectors:[["app-topicviewer"]],decls:38,vars:15,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end"],["routerLink","/menu/forum"],["icon-only","","name","home"],["color","medium"],[1,"ion-no-padding"],["color","danger",4,"ngIf"],[3,"disabled","click"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],[3,"color","click",4,"ngIf"],["name","arrow-back"],["cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"small",3,"disabled","click"],["name","arrow-forward"],["color","danger"],[3,"src"],[1,"ion-text-wrap"],["color","primary",3,"click"],[1,"ion-margin-end"],[3,"closeOthers",4,"ngIf"],["lines","none",3,"click",4,"ngIf"],["ion-padding-vertical","",2,"margin-bottom","1px",3,"innerHtml"],["color","secondary",1,"ion-margin-end",3,"click"],[3,"closeOthers"],[3,"isOpen"],["title",""],[1,"dropdown","icon"],["content",""],[3,"Config","GuaText"],[3,"Config","BaziText"],["lines","none",3,"click"],[1,"img-container"],[3,"src","ngStyle"],[2,"padding-bottom","3px"],["lines","none"],[3,"click"],[3,"color","click"],[3,"value"]],template:function(c,e){1&c&&(m.ec(0,"ion-header"),m.ec(1,"ion-toolbar",0),m.ec(2,"ion-buttons",1),m.ac(3,"ion-back-button",2),m.dc(),m.ec(4,"ion-title"),m.Hc(5),m.dc(),m.ec(6,"ion-buttons",3),m.ec(7,"ion-button",4),m.ac(8,"ion-icon",5),m.dc(),m.dc(),m.dc(),m.dc(),m.ac(9,"ion-text",6),m.ec(10,"ion-item-divider",7),m.ec(11,"ion-label",1),m.ec(12,"ion-text"),m.Hc(13),m.dc(),m.Fc(14,T,2,0,"ion-text",8),m.Fc(15,k,2,0,"ion-text",8),m.dc(),m.ec(16,"ion-buttons",3),m.ec(17,"ion-button",9),m.mc("click",(function(){return e.FrozenTopic(null)})),m.Hc(18,"\u5c01\u697c"),m.dc(),m.dc(),m.dc(),m.ec(19,"ion-content",7),m.Fc(20,F,31,13,"div",10),m.ec(21,"ion-list",7),m.Fc(22,_,32,13,"ion-item",11),m.dc(),m.dc(),m.ec(23,"ion-footer"),m.ec(24,"small"),m.ec(25,"ion-toolbar"),m.ec(26,"ion-buttons",1),m.Fc(27,j,2,0,"ion-button",12),m.Fc(28,J,2,0,"ion-button",12),m.Fc(29,B,2,1,"ion-button",13),m.Fc(30,$,2,1,"ion-button",13),m.dc(),m.ec(31,"ion-buttons",3),m.ec(32,"ion-button",9),m.mc("click",(function(){return e.PageIndex=e.PageIndex-1})),m.ac(33,"ion-icon",14),m.dc(),m.ec(34,"ion-select",15),m.mc("ngModelChange",(function(c){return e.PageIndex=c})),m.Fc(35,L,2,2,"ion-select-option",16),m.dc(),m.ec(36,"ion-button",17),m.mc("click",(function(){return e.PageIndex=e.PageIndex+1})),m.ac(37,"ion-icon",18),m.dc(),m.dc(),m.dc(),m.dc(),m.dc()),2&c&&(m.Nb(5),m.Ic(e.Titel),m.Nb(8),m.Jc("\u9898\u76ee\uff1a",null==e.Topic?null:e.Topic.title,""),m.Nb(1),m.uc("ngIf",null==e.Topic?null:e.Topic.good),m.Nb(1),m.uc("ngIf",null==e.Topic?null:e.Topic.top),m.Nb(2),m.uc("disabled",!e.CheckAction(e.Topic,"frozen")),m.Nb(3),m.uc("ngIf",e.Topic),m.Nb(2),m.uc("ngForOf",e.VTopic),m.Nb(5),m.uc("ngIf",null==e.Topic?null:e.Topic.gua),m.Nb(1),m.uc("ngIf",null==e.Topic?null:e.Topic.bazi),m.Nb(1),m.uc("ngIf",e.IsAdmin),m.Nb(1),m.uc("ngIf",e.IsAdmin),m.Nb(2),m.uc("disabled",0===e.PageIndex),m.Nb(2),m.uc("ngModel",e.PageIndex),m.Nb(1),m.uc("ngForOf",e.Pages),m.Nb(1),m.uc("disabled",e.PageIndex===e.Pages.length-1))},directives:[a.t,a.Z,a.j,a.f,a.g,a.X,a.i,a.hb,r.h,a.u,a.U,a.y,a.D,t.j,a.n,a.E,t.i,a.r,a.Q,a.ib,o.f,o.g,a.x,a.W,a.J,g.a,g.b,v.a,b.a,t.k,a.R],styles:[".img-container[_ngcontent-%COMP%]{text-align:center;display:block}"]}),E),W=n("CGrG"),V=n("zioG"),X=n("uEAi"),Y=n("n7QD");n.d(e,"TopicviewerPageModule",(function(){return q}));var K,Q=[{path:"",component:Z}],q=((K=function c(){_classCallCheck(this,c)}).\u0275mod=m.Xb({type:K}),K.\u0275inj=m.Wb({factory:function(c){return new(c||K)},imports:[[X.a,Y.a,V.b,g.d,t.b,o.c,a.ab,W.b,r.i.forChild(Q)]]}),K)}}]);