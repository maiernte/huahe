function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{HQI1:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("c7TG"),c=n("fXoL"),o=n("ofXK");function r(e,t){if(1&e){var n=c.fc();c.ec(0,"ion-item",2),c.mc("click",(function(){c.Ac(n);var e=t.$implicit;return c.pc(2).onSelect(e.value)})),c.ec(1,"ion-text"),c.Hc(2),c.dc(),c.dc()}if(2&e){var i=t.$implicit,o=c.pc(2);c.uc("color",i.value===o.currentOption?"light":""),c.Nb(2),c.Ic(i.name)}}function a(e,t){if(1&e&&(c.ec(0,"div"),c.Fc(1,r,3,2,"ion-item",1),c.dc()),2&e){var n=c.pc();c.Nb(1),c.uc("ngForOf",n.items)}}function s(e,t){if(1&e&&c.ac(0,"ion-note",8),2&e){var n=c.pc().$implicit;c.uc("innerHtml",n.name,c.Bc)}}function u(e,t){if(1&e&&(c.ec(0,"ion-item",5),c.Fc(1,s,1,1,"ion-note",6),c.ec(2,"ion-label",7),c.ac(3,"ion-text",8),c.dc(),c.dc()),2&e){var n=t.$implicit;c.Nb(1),c.uc("ngIf",n.name),c.Nb(2),c.uc("innerHtml",n.value,c.Bc)}}function l(e,t){if(1&e&&(c.ec(0,"small"),c.ec(1,"ion-list",3),c.Fc(2,u,4,2,"ion-item",4),c.dc(),c.dc()),2&e){var n=c.pc();c.Nb(2),c.uc("ngForOf",n.items)}}var d=function(){var e=function(){function e(t){_classCallCheck(this,e),this.popoverCtrl=t,this.toselect=!0}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onSelect",value:function(e){this.popoverCtrl.dismiss(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Zb(i.gb))},e.\u0275cmp=c.Tb({type:e,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],[1,"ion-no-padding"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[3,"innerHtml",4,"ngIf"],["slot","end",1,"ion-text-wrap"],[3,"innerHtml"]],template:function(e,t){1&e&&(c.Fc(0,a,2,1,"div",0),c.Fc(1,l,3,1,"small",0)),2&e&&(c.uc("ngIf",t.toselect),c.Nb(1),c.uc("ngIf",!t.toselect))},directives:[o.j,o.i,i.x,i.U,i.E,i.D,i.J],styles:[""]}),e}()},qNzN:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),c=n("3Pt+"),o=n("tyNb"),r=n("c7TG"),a=n("mrSG"),s=n("LTmD"),u=n("lEof"),l=n("PKx9"),d=n("HQI1"),f=n("8/yo"),m=n("G6JS"),p=n("Y6BA"),h=n("fXoL");function g(e,t){if(1&e){var n=h.fc();h.ec(0,"ion-buttons",7),h.ec(1,"ion-button",14),h.mc("click",(function(){return h.Ac(n),h.pc().EditTopic(null)})),h.ac(2,"ion-icon",15),h.ec(3,"ion-text"),h.Hc(4,"\u65b0\u8d34"),h.dc(),h.dc(),h.dc()}}function v(e,t){if(1&e){var n=h.fc();h.ec(0,"ion-button",20),h.mc("click",(function(){return h.Ac(n),h.pc(2).JinghuaTopics(-2,!0)})),h.Hc(1," [\u7cbe\u534e] "),h.dc()}}function b(e,t){if(1&e){var n=h.fc();h.ec(0,"ion-button",17),h.mc("click",(function(){return h.Ac(n),h.pc(2).JinghuaTopics(0,!0)})),h.Hc(1," [\u9996\u9875] "),h.dc()}}function x(e,t){if(1&e){var n=h.fc();h.ec(0,"ion-item-divider",16),h.ec(1,"ion-label",1),h.ec(2,"ion-text"),h.Hc(3,"\u7248\u4e3b\uff1a"),h.dc(),h.dc(),h.ec(4,"ion-buttons",1),h.ec(5,"ion-button",17),h.mc("click",(function(){h.Ac(n);var e=h.pc();return e.ShowUserInfo(e.Admin)})),h.Hc(6),h.dc(),h.dc(),h.ec(7,"ion-buttons",7),h.Fc(8,v,2,0,"ion-button",18),h.Fc(9,b,2,0,"ion-button",19),h.dc(),h.dc()}if(2&e){var i=h.pc();h.Nb(6),h.Ic(i.Admin),h.Nb(2),h.uc("ngIf",0===i.PageType),h.Nb(1),h.uc("ngIf",-2===i.PageType)}}function T(e,t){if(1&e){var n=h.fc();h.ec(0,"ion-item",21),h.mc("click",(function(){h.Ac(n);var e=t.$implicit;return h.pc().Navi2Topic(e)})),h.ec(1,"ion-thumbnail",1),h.ac(2,"img",22),h.dc(),h.ec(3,"ion-label",23),h.ec(4,"ion-text"),h.Hc(5),h.dc(),h.ec(6,"ion-text",24),h.Hc(7,"[\u7f6e\u9876]"),h.dc(),h.ac(8,"br"),h.ec(9,"ion-note"),h.Hc(10),h.dc(),h.ac(11,"br"),h.ec(12,"ion-note"),h.ec(13,"small"),h.Hc(14),h.dc(),h.dc(),h.ac(15,"br"),h.ec(16,"ion-note"),h.ec(17,"small"),h.Hc(18),h.dc(),h.dc(),h.ac(19,"br"),h.ec(20,"ion-note"),h.ec(21,"small"),h.Hc(22),h.dc(),h.dc(),h.ec(23,"ion-note"),h.ec(24,"small"),h.Hc(25),h.dc(),h.dc(),h.dc(),h.dc()}if(2&e){var i=t.$implicit,c=h.pc();h.Nb(2),h.uc("src",i.avatar,h.Cc),h.Nb(3),h.Ic(i.title),h.Nb(5),h.Jc("\u4f5c\u8005\uff1a[",i.author,"]"),h.Nb(4),h.Jc("\u53d1\u5e16\u65f6\u95f4: ",c.DateText(i.created),""),h.Nb(4),h.Jc("\u56de\u5e16\u65f6\u95f4: ",c.DateText(i.update),""),h.Nb(4),h.Jc("\u56de\u5e16\u6570\u91cf: ",i.child,""),h.Nb(3),h.Jc("\u6d4f\u89c8\u6570\u91cf: ",i.view,"")}}function k(e,t){1&e&&(h.ec(0,"ion-text",24),h.Hc(1,"[\u7cbe\u534e]"),h.dc())}function y(e,t){if(1&e){var n=h.fc();h.ec(0,"ion-item",21),h.mc("click",(function(){h.Ac(n);var e=t.$implicit;return h.pc().Navi2Topic(e)})),h.ec(1,"ion-thumbnail",1),h.ac(2,"img",22),h.dc(),h.ec(3,"ion-label",23),h.ec(4,"ion-text"),h.Hc(5),h.dc(),h.Fc(6,k,2,0,"ion-text",25),h.ac(7,"br"),h.ec(8,"ion-note"),h.Hc(9),h.dc(),h.ac(10,"br"),h.ec(11,"ion-note"),h.ec(12,"small"),h.Hc(13),h.dc(),h.dc(),h.ac(14,"br"),h.ec(15,"ion-note"),h.ec(16,"small"),h.Hc(17),h.dc(),h.dc(),h.ac(18,"br"),h.ec(19,"ion-note"),h.ec(20,"small"),h.Hc(21),h.dc(),h.dc(),h.ec(22,"ion-note"),h.ec(23,"small"),h.Hc(24),h.dc(),h.dc(),h.dc(),h.dc()}if(2&e){var i=t.$implicit,c=h.pc();h.Nb(2),h.uc("src",i.avatar,h.Cc),h.Nb(3),h.Ic(i.title),h.Nb(1),h.uc("ngIf",i.good),h.Nb(3),h.Jc("\u4f5c\u8005\uff1a[",i.author,"]"),h.Nb(4),h.Jc("\u53d1\u5e16\u65f6\u95f4: ",c.DateText(i.created),""),h.Nb(4),h.Jc("\u56de\u5e16\u65f6\u95f4: ",c.DateText(i.update),""),h.Nb(4),h.Jc("\u56de\u5e16\u6570\u91cf: ",i.child,""),h.Nb(3),h.Jc("\u6d4f\u89c8\u6570\u91cf: ",i.view,"")}}function w(e,t){if(1&e&&(h.ec(0,"ion-select-option",26),h.Hc(1),h.dc()),2&e){var n=t.$implicit;h.uc("value",n),h.Nb(1),h.Jc("\u7b2c",n+1,"\u9875")}}var P,I=((P=function(){function e(t,n,i,c,o,r,a,s){var u=this;_classCallCheck(this,e),this.loadingController=t,this.settings=n,this.forumservice=i,this.host=c,this.popoverCtrl=o,this.modalCtrl=r,this.route=a,this.router=s,this.pageindex=0,this.loadfailed=!1,this.Titel="\u8bba\u575b",this.SortKey="lasttopic",this.Pages=[0],this.PageType=0,this.Topics=[],this.TTopics=[],this.route.params.subscribe((function(e){u.forumid=e.forumid}))}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settings.WaitInit();case 2:return e.next=4,this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4});case 4:this.loadingView=e.sent,this.user=this.settings.User||p.a,"forum_me"===this.forumid?(this.Titel="\u6211\u7684\u5e16\u5b50",this.PageType=-3):"forum_ticket"===this.forumid?(this.Titel="\u6211\u7684\u6c42\u52a9",this.PageType=-4):"forum_master"===this.forumid?(this.Titel="\u5411\u6211\u7684\u53d1\u95ee",this.PageType=-5):this.PageType=0,this.PageIndex=0;case 8:case"end":return e.stop()}}),e,this)})))}},{key:"DateText",value:function(e){if(!e)return"\u65e0";var t=new Date(e);return t.toChinaStr()+" ".concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())}},{key:"Reconnect",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadfailed=!1,e.next=3,this.showLoading();case 3:this.forumservice.ForumList().then((function(e){return t.forum=e.find((function(e){return e.id===t.forumid})),t.Titel=t.forum.name,t.admin=t.forum.admin.join("\u3001"),t.forumservice.LoadTopicList(t.forum.id,t.PageIndex,0)})).then((function(e){return t.BuildPages(e.sum),t.Topics=e.data,t.Topics.forEach((function(e){return e.avatar=t.DefaultAvatar})),t.updateUserAvatar(t.Topics),t.forumservice.LoadTopicList(t.forum.id,0,-1)})).then((function(e){t.TTopics=e.data,t.TTopics.forEach((function(e){return e.avatar=t.DefaultAvatar})),t.updateUserAvatar(t.TTopics)})).catch((function(e){t.loadfailed=!0})).finally((function(){t.closeLoading()}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"JinghuaTopics",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t&&(this.pageindex=0,this.PageType=e),!(e<0)){n.next=7;break}return n.next=4,this.showLoading();case 4:this.forumservice.LoadTopicList(e<-2?null:this.forumid,this.PageIndex,e).then((function(e){i.BuildPages(e.sum),i.Topics=e.data,i.Topics.forEach((function(e){return e.avatar=i.DefaultAvatar})),i.updateUserAvatar(i.Topics)})).finally((function(){i.closeLoading()})),n.next=8;break;case 7:this.Reconnect();case 8:case"end":return n.stop()}}),n,this)})))}},{key:"Navi2Topic",value:function(e){var t=e.forumid;t="forum_ticket"===this.forumid?"\u6c42\u52a9\uff1a"+t:t,t="forum_master"===this.forumid?"\u89e3\u7b54\u5ba2\u6237":t,this.router.navigateByUrl("menu/topicdetail/".concat(t,"/").concat(e.id))}},{key:"updateUserAvatar",value:function(e){var t=this;e.forEach((function(e){e.avatar&&e.avatar!==t.DefaultAvatar||t.forumservice.GetUserInfo(e.author).then((function(n){var i=(n||p.a).avatar||"";e.avatar=i.IsNullOrEmpty()?t.settings.Avatar(n.gender):i,e.showImg=!0}))}))}},{key:"sortOptions",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverCtrl.create({component:d.a,event:e,componentProps:{items:[{name:"\u521b\u5efa\u65f6\u95f4",value:"created"},{name:"\u4fee\u6539\u65f6\u95f4",value:"modified"}],currentOption:this.SortKey},translucent:!0});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onDidDismiss();case 7:i=t.sent,((c=i.data)||this.SortKey)!==this.SortKey&&(this.SortKey=c.toString());case 10:case"end":return t.stop()}}),t,this)})))}},{key:"EditTopic",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:f.a,componentProps:{MainTopic:e||this.CreateMainTopic(),forumid:this.forumid,forumname:this.forum.name}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:i=t.sent,(c=i.data)&&this.AddToLocal(c);case 10:case"end":return t.stop()}}),t,this)})))}},{key:"ShowUserInfo",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:m.a,componentProps:{Uerid:e}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:case"end":return t.stop()}}),t,this)})))}},{key:"GoPage",value:function(e){console.log("change page",e)}},{key:"AddToLocal",value:function(e){e.avatar=this.settings.User.avatar,e.forumid===this.forumid&&this.forumservice.ForumMG.SetTopic(e,e.forumid)}},{key:"CreateMainTopic",value:function(){var e=this.settings.User,t=Date.now();return{id:"",created:t,modified:t,author:e.id,forumid:this.forumid,title:"",top:0,good:!1,update:0,gua:null,bazi:null,img:null,content:"",frozen:!1,deleted:!1,child:0,view:0}}},{key:"showLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,e.t0){e.next=5;break}return e.next=4,this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4});case 4:this.loadingView=e.sent;case 5:return e.next=7,this.loadingView.present();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"closeLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,!e.t0){e.next=5;break}return e.next=4,this.loadingView.dismiss();case 4:this.loadingView=null;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"BuildPages",value:function(e){if(0===this.PageIndex)if(0!==e){this.Pages=[];for(var t=Math.ceil(e/20),n=0;n<t;n++)this.Pages.push(n)}else this.Pages=[0]}},{key:"HasUser",get:function(){return this.settings.HasUser&&this.user!==p.a}},{key:"DefaultAvatar",get:function(){return this.settings.Avatar()}},{key:"PageIndex",get:function(){return this.pageindex},set:function(e){this.pageindex=e,0!==this.PageType?this.JinghuaTopics(this.PageType):this.Reconnect()}},{key:"Admin",get:function(){return this.admin}}]),e}()).\u0275fac=function(e){return new(e||P)(h.Zb(r.cb),h.Zb(s.a),h.Zb(l.a),h.Zb(u.a),h.Zb(r.gb),h.Zb(r.db),h.Zb(o.a),h.Zb(o.g))},P.\u0275cmp=h.Tb({type:P,selectors:[["app-topiclist"]],decls:22,vars:9,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end",4,"ngIf"],["ion-no-padding",""],["ion-no-padding","","slot","fixed",4,"ngIf"],["detail","",3,"click",4,"ngFor","ngForOf"],["slot","end"],[3,"disabled","click"],["name","arrow-back"],["cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"small",3,"disabled","click"],["name","arrow-forward"],["size","small",3,"click"],["slot","icon-only","name","add"],["ion-no-padding","","slot","fixed"],["color","primary",3,"click"],["color","danger",3,"click",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["color","danger",3,"click"],["detail","",3,"click"],[3,"src"],[1,"ion-text-wrap"],["color","danger"],["color","danger",4,"ngIf"],[3,"value"]],template:function(e,t){1&e&&(h.ec(0,"ion-header"),h.ec(1,"ion-toolbar",0),h.ec(2,"ion-buttons",1),h.ac(3,"ion-back-button",2),h.dc(),h.ec(4,"ion-title"),h.Hc(5),h.dc(),h.Fc(6,g,5,0,"ion-buttons",3),h.dc(),h.dc(),h.ec(7,"ion-content"),h.ec(8,"ion-list",4),h.Fc(9,x,10,3,"ion-item-divider",5),h.Fc(10,T,26,7,"ion-item",6),h.Fc(11,y,25,8,"ion-item",6),h.dc(),h.dc(),h.ec(12,"ion-footer"),h.ec(13,"small"),h.ec(14,"ion-toolbar"),h.ec(15,"ion-buttons",7),h.ec(16,"ion-button",8),h.mc("click",(function(){return t.PageIndex=t.PageIndex-1})),h.ac(17,"ion-icon",9),h.dc(),h.ec(18,"ion-select",10),h.mc("ngModelChange",(function(e){return t.PageIndex=e})),h.Fc(19,w,2,2,"ion-select-option",11),h.dc(),h.ec(20,"ion-button",12),h.mc("click",(function(){return t.PageIndex=t.PageIndex+1})),h.ac(21,"ion-icon",13),h.dc(),h.dc(),h.dc(),h.dc(),h.dc()),2&e&&(h.Nb(5),h.Jc(": ",t.Titel," :"),h.Nb(1),h.uc("ngIf",t.PageType>=-2&&t.HasUser),h.Nb(3),h.uc("ngIf",t.PageType>=-2),h.Nb(1),h.uc("ngForOf",t.TTopics),h.Nb(1),h.uc("ngForOf",t.Topics),h.Nb(5),h.uc("disabled",0===t.PageIndex),h.Nb(2),h.uc("ngModel",t.PageIndex),h.Nb(1),h.uc("ngForOf",t.Pages),h.Nb(1),h.uc("disabled",t.PageIndex===t.Pages.length-1))},directives:[r.t,r.Z,r.j,r.f,r.g,r.X,i.j,r.n,r.E,i.i,r.r,r.i,r.u,r.Q,r.ib,c.f,c.g,r.U,r.y,r.D,r.x,r.W,r.J,r.R],styles:[""]}),P),N=n("Gfuc"),H=n("9UMr");n.d(t,"TopiclistPageModule",(function(){return O}));var C,F=[{path:"",component:I}],O=((C=function e(){_classCallCheck(this,e)}).\u0275mod=h.Xb({type:C}),C.\u0275inj=h.Wb({factory:function(e){return new(e||C)},imports:[[N.a,H.a,i.b,c.c,r.ab,o.i.forChild(F)]]}),C)}}]);