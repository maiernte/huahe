function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{HQI1:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("c7TG"),c=n("fXoL"),o=n("ofXK");function r(e,t){if(1&e){var n=c.fc();c.ec(0,"ion-item",3),c.mc("click",(function(){c.Ac(n);var e=t.$implicit;return c.pc(2).onSelect(e.value)})),c.ec(1,"ion-text"),c.Hc(2),c.dc(),c.dc()}if(2&e){var i=t.$implicit,o=c.pc(2);c.uc("color",i.value===o.currentOption?"light":""),c.Nb(2),c.Ic(i.name)}}function a(e,t){if(1&e&&(c.ec(0,"div"),c.Fc(1,r,3,2,"ion-item",2),c.dc()),2&e){var n=c.pc();c.Nb(1),c.uc("ngForOf",n.items)}}function s(e,t){if(1&e&&(c.ec(0,"ion-note"),c.Hc(1),c.dc()),2&e){var n=c.pc().$implicit;c.Nb(1),c.Jc(" ",n.name," ")}}function u(e,t){if(1&e&&(c.ec(0,"ion-item",6),c.Fc(1,s,2,1,"ion-note",0),c.ec(2,"ion-label",7),c.ec(3,"small"),c.ac(4,"ion-text",8),c.dc(),c.dc(),c.dc()),2&e){var n=t.$implicit;c.Nb(1),c.uc("ngIf",n.name),c.Nb(3),c.uc("innerHtml",n.value,c.Bc)}}function f(e,t){if(1&e&&(c.ec(0,"ion-list",4),c.Fc(1,u,5,2,"ion-item",5),c.dc()),2&e){var n=c.pc();c.Nb(1),c.uc("ngForOf",n.items)}}var l=function(){var e=function(){function e(t){_classCallCheck(this,e),this.popoverCtrl=t,this.toselect=!0}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onSelect",value:function(e){this.popoverCtrl.dismiss(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Zb(i.ib))},e.\u0275cmp=c.Tb({type:e,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["class","ion-no-padding",4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],[1,"ion-no-padding"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","end",1,"ion-text-wrap"],[3,"innerHtml"]],template:function(e,t){1&e&&(c.Fc(0,a,2,1,"div",0),c.Fc(1,f,2,1,"ion-list",1)),2&e&&(c.uc("ngIf",t.toselect),c.Nb(1),c.uc("ngIf",!t.toselect))},directives:[o.j,o.i,i.x,i.W,i.E,i.D,i.J],styles:[""]}),e}()},qNzN:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),c=n("3Pt+"),o=n("tyNb"),r=n("c7TG"),a=n("mrSG"),s=n("LTmD"),u=n("lEof"),f=n("PKx9"),l=n("HQI1"),d=n("8/yo"),p=n("G6JS"),h=n("Y6BA"),m=n("fXoL"),g=n("i/bi");function v(e,t){if(1&e){var n=m.fc();m.ec(0,"ion-buttons",9),m.ec(1,"ion-button",10),m.mc("click",(function(){return m.Ac(n),m.pc().EditTopic(null)})),m.ac(2,"ion-icon",11),m.ec(3,"ion-text"),m.Hc(4,"\u65b0\u8d34"),m.dc(),m.dc(),m.dc()}}function b(e,t){if(1&e){var n=m.fc();m.ec(0,"ion-button",16),m.mc("click",(function(){return m.Ac(n),m.pc(2).JinghuaTopics(-2,!0)})),m.Hc(1," [\u7cbe\u534e] "),m.dc()}}function T(e,t){if(1&e){var n=m.fc();m.ec(0,"ion-button",13),m.mc("click",(function(){return m.Ac(n),m.pc(2).JinghuaTopics(0,!0)})),m.Hc(1," [\u9996\u9875] "),m.dc()}}function x(e,t){if(1&e){var n=m.fc();m.ec(0,"ion-item-divider",12),m.ec(1,"ion-label",1),m.ec(2,"ion-text"),m.Hc(3,"\u7248\u4e3b\uff1a"),m.dc(),m.dc(),m.ec(4,"ion-buttons",1),m.ec(5,"ion-button",13),m.mc("click",(function(){m.Ac(n);var e=m.pc();return e.ShowUserInfo(e.Admin)})),m.Hc(6),m.dc(),m.dc(),m.ec(7,"ion-buttons",9),m.Fc(8,b,2,0,"ion-button",14),m.Fc(9,T,2,0,"ion-button",15),m.dc(),m.dc()}if(2&e){var i=m.pc();m.Nb(6),m.Ic(i.Admin),m.Nb(2),m.uc("ngIf",0===i.PageType),m.Nb(1),m.uc("ngIf",-2===i.PageType)}}function y(e,t){if(1&e){var n=m.fc();m.ec(0,"ion-item",17),m.mc("click",(function(){m.Ac(n);var e=t.$implicit;return m.pc().Navi2Topic(e)})),m.ec(1,"ion-thumbnail",1),m.ac(2,"img",18),m.dc(),m.ec(3,"ion-label",19),m.ec(4,"ion-text"),m.Hc(5),m.dc(),m.ec(6,"ion-text",20),m.Hc(7,"[\u7f6e\u9876]"),m.dc(),m.ac(8,"br"),m.ec(9,"ion-note"),m.Hc(10),m.dc(),m.ac(11,"br"),m.ec(12,"ion-note"),m.ec(13,"small"),m.Hc(14),m.dc(),m.dc(),m.ac(15,"br"),m.ec(16,"ion-note"),m.ec(17,"small"),m.Hc(18),m.dc(),m.dc(),m.ac(19,"br"),m.ec(20,"ion-note"),m.ec(21,"small"),m.Hc(22),m.dc(),m.dc(),m.ec(23,"ion-note"),m.ec(24,"small"),m.Hc(25),m.dc(),m.dc(),m.dc(),m.dc()}if(2&e){var i=t.$implicit,c=m.pc();m.Nb(2),m.uc("src",i.avatar,m.Cc),m.Nb(3),m.Ic(i.title),m.Nb(5),m.Jc("\u4f5c\u8005\uff1a[",i.author,"]"),m.Nb(4),m.Jc("\u53d1\u5e16\u65f6\u95f4: ",c.DateText(i.created),""),m.Nb(4),m.Jc("\u56de\u5e16\u65f6\u95f4: ",c.DateText(i.update),""),m.Nb(4),m.Jc("\u56de\u5e16\u6570\u91cf: ",i.child,""),m.Nb(3),m.Jc("\u6d4f\u89c8\u6570\u91cf: ",i.view,"")}}function k(e,t){1&e&&(m.ec(0,"ion-text",20),m.Hc(1,"[\u7cbe\u534e]"),m.dc())}function w(e,t){if(1&e){var n=m.fc();m.ec(0,"ion-item",17),m.mc("click",(function(){m.Ac(n);var e=t.$implicit;return m.pc().Navi2Topic(e)})),m.ec(1,"ion-thumbnail",1),m.ac(2,"img",18),m.dc(),m.ec(3,"ion-label",19),m.ec(4,"ion-text"),m.Hc(5),m.dc(),m.Fc(6,k,2,0,"ion-text",21),m.ac(7,"br"),m.ec(8,"ion-note"),m.Hc(9),m.dc(),m.ac(10,"br"),m.ec(11,"ion-note"),m.ec(12,"small"),m.Hc(13),m.dc(),m.dc(),m.ac(14,"br"),m.ec(15,"ion-note"),m.ec(16,"small"),m.Hc(17),m.dc(),m.dc(),m.ac(18,"br"),m.ec(19,"ion-note"),m.ec(20,"small"),m.Hc(21),m.dc(),m.dc(),m.ec(22,"ion-note"),m.ec(23,"small"),m.Hc(24),m.dc(),m.dc(),m.dc(),m.dc()}if(2&e){var i=t.$implicit,c=m.pc();m.Nb(2),m.uc("src",i.avatar,m.Cc),m.Nb(3),m.Ic(i.title),m.Nb(1),m.uc("ngIf",i.good),m.Nb(3),m.Jc("\u4f5c\u8005\uff1a[",i.author,"]"),m.Nb(4),m.Jc("\u53d1\u5e16\u65f6\u95f4: ",c.DateText(i.created),""),m.Nb(4),m.Jc("\u56de\u5e16\u65f6\u95f4: ",c.DateText(i.update),""),m.Nb(4),m.Jc("\u56de\u5e16\u6570\u91cf: ",i.child,""),m.Nb(3),m.Jc("\u6d4f\u89c8\u6570\u91cf: ",i.view,"")}}function N(e,t){if(1&e){var n=m.fc();m.ec(0,"div",22),m.ec(1,"sui-pagination",23),m.mc("pageChange",(function(e){return m.Ac(n),m.pc().PageIndex=e})),m.dc(),m.dc()}if(2&e){var i=m.pc();m.Nb(1),m.uc("collectionSize",i.PageSum)("pageSize",20)("maxSize",i.MaxPageButtons)("hasNavigationLinks",!0)("hasBoundaryLinks",!0)("page",i.PageIndex)}}var I,P=((I=function(){function e(t,n,i,c,o,r,a,s){var u=this;_classCallCheck(this,e),this.loadingController=t,this.settings=n,this.forumservice=i,this.host=c,this.popoverCtrl=o,this.modalCtrl=r,this.route=a,this.router=s,this.pageindex=0,this.loadfailed=!0,this.Titel="\u8bba\u575b",this.SortKey="lasttopic",this.Pages=[0],this.PageType=0,this.PageSum=0,this.Topics=[],this.TTopics=[],this.route.params.subscribe((function(e){u.forumid=e.forumid}))}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settings.WaitInit();case 2:return e.next=4,this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4});case 4:this.loadingView=e.sent,this.user=this.settings.User||h.a,"forum_me"===this.forumid?(this.Titel="\u6211\u7684\u5e16\u5b50",this.PageType=-3):"forum_ticket"===this.forumid?(this.Titel="\u6211\u7684\u6c42\u52a9",this.PageType=-4):"forum_master"===this.forumid?(this.Titel="\u5411\u6211\u7684\u53d1\u95ee",this.PageType=-5):this.PageType=0,this.PageIndex=0;case 8:case"end":return e.stop()}}),e,this)})))}},{key:"DateText",value:function(e){if(!e)return"\u65e0";var t=new Date(e);return t.toChinaStr()+" ".concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())}},{key:"doRefresh",value:function(e){var t=this;this.Reconnect().then((function(e){t.loadfailed=!e})).catch((function(e){console.log(e)})).finally((function(){e.target.complete()}))}},{key:"Reconnect",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.showLoading();case 2:return e.abrupt("return",this.forumservice.ForumList().then((function(e){return t.forum=e.find((function(e){return e.id===t.forumid})),t.Titel=t.forum.name,t.admin=t.forum.admin.join("\u3001"),t.forumservice.LoadTopicList(t.forum.id,t.PageIndex,0)})).then((function(e){return t.PageSum=e.sum,t.Topics=e.data,t.Topics.forEach((function(e){return e.avatar=t.DefaultAvatar})),t.updateUserAvatar(t.Topics),t.forumservice.LoadTopicList(t.forum.id,0,-1)})).then((function(e){return t.TTopics=e.data,t.TTopics.forEach((function(e){return e.avatar=t.DefaultAvatar})),t.updateUserAvatar(t.TTopics),!0})).catch((function(e){return!1})).finally((function(){t.closeLoading()})));case 3:case"end":return e.stop()}}),e,this)})))}},{key:"JinghuaTopics",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t&&(this.pageindex=0,this.PageType=e),!(e<0)){n.next=7;break}return n.next=4,this.showLoading();case 4:this.forumservice.LoadTopicList(e<-2?null:this.forumid,this.PageIndex,e).then((function(e){i.PageSum=e.sum,i.Topics=e.data,i.Topics.forEach((function(e){return e.avatar=i.DefaultAvatar})),i.updateUserAvatar(i.Topics),i.loadfailed=!1})).finally((function(){i.closeLoading()})),n.next=8;break;case 7:this.Reconnect();case 8:case"end":return n.stop()}}),n,this)})))}},{key:"Navi2Topic",value:function(e){var t=e.forumid;t="forum_ticket"===this.forumid?"\u6c42\u52a9\uff1a"+t:t,t="forum_master"===this.forumid?"\u89e3\u7b54\u5ba2\u6237":t,this.router.navigateByUrl("menu/topicdetail/".concat(t,"/").concat(e.id))}},{key:"updateUserAvatar",value:function(e){var t=this;e.forEach((function(e){e.avatar&&e.avatar!==t.DefaultAvatar||t.forumservice.GetUserInfo(e.author).then((function(n){var i=(n||h.a).avatar||"";e.avatar=i.IsNullOrEmpty()?t.settings.Avatar(n.gender):i,e.showImg=!0,e.showGua=!0,e.showBazi=!0}))}))}},{key:"sortOptions",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverCtrl.create({component:l.a,event:e,componentProps:{items:[{name:"\u521b\u5efa\u65f6\u95f4",value:"created"},{name:"\u4fee\u6539\u65f6\u95f4",value:"modified"}],currentOption:this.SortKey},translucent:!0});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onDidDismiss();case 7:i=t.sent,((c=i.data)||this.SortKey)!==this.SortKey&&(this.SortKey=c.toString());case 10:case"end":return t.stop()}}),t,this)})))}},{key:"EditTopic",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:d.a,componentProps:{MainTopic:e||this.CreateMainTopic(),forumid:this.forumid,forumname:this.forum.name}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:i=t.sent,(c=i.data)&&this.AddToLocal(c);case 10:case"end":return t.stop()}}),t,this)})))}},{key:"ShowUserInfo",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:p.a,componentProps:{Uerid:e}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:case"end":return t.stop()}}),t,this)})))}},{key:"GoPage",value:function(e){console.log("change page",e)}},{key:"AddToLocal",value:function(e){e.avatar=this.settings.User.avatar,e.forumid===this.forumid&&this.forumservice.ForumMG.SetTopic(e,e.forumid)}},{key:"CreateMainTopic",value:function(){var e=this.settings.User,t=Date.now();return{id:"",created:t,modified:t,author:e.id,forumid:this.forumid,title:"",top:0,good:!1,update:0,gua:null,bazi:null,img:null,content:"",frozen:!1,deleted:!1,child:0,view:0}}},{key:"showLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,e.t0){e.next=5;break}return e.next=4,this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4});case 4:this.loadingView=e.sent;case 5:return e.next=7,this.loadingView.present();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"closeLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,!e.t0){e.next=5;break}return e.next=4,this.loadingView.dismiss();case 4:this.loadingView=null;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"HasUser",get:function(){return this.settings.HasUser&&this.user!==h.a}},{key:"MaxPageButtons",get:function(){return this.settings.DeviceWidth>=400?7:2}},{key:"DefaultAvatar",get:function(){return this.settings.Avatar()}},{key:"PageIndex",get:function(){return this.pageindex},set:function(e){var t=this;this.pageindex=e,0!==this.PageType?this.JinghuaTopics(this.PageType):this.Reconnect().then((function(e){t.loadfailed=!e}))}},{key:"Admin",get:function(){return this.admin}}]),e}()).\u0275fac=function(e){return new(e||I)(m.Zb(r.eb),m.Zb(s.a),m.Zb(f.a),m.Zb(u.a),m.Zb(r.ib),m.Zb(r.fb),m.Zb(o.a),m.Zb(o.g))},I.\u0275cmp=m.Tb({type:I,selectors:[["app-topiclist"]],decls:15,vars:6,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end",4,"ngIf"],["slot","fixed",3,"ionRefresh"],["ion-no-padding",""],["ion-no-padding","","slot","fixed",4,"ngIf"],["detail","",3,"click",4,"ngFor","ngForOf"],["class","ui very basic segment",4,"ngIf"],["slot","end"],["size","small",3,"click"],["slot","icon-only","name","add"],["ion-no-padding","","slot","fixed"],["color","primary",3,"click"],["color","danger",3,"click",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["color","danger",3,"click"],["detail","",3,"click"],[3,"src"],[1,"ion-text-wrap"],["color","danger"],["color","danger",4,"ngIf"],[1,"ui","very","basic","segment"],[1,"ui","right","floated",3,"collectionSize","pageSize","maxSize","hasNavigationLinks","hasBoundaryLinks","page","pageChange"]],template:function(e,t){1&e&&(m.ec(0,"ion-header"),m.ec(1,"ion-toolbar",0),m.ec(2,"ion-buttons",1),m.ac(3,"ion-back-button",2),m.dc(),m.ec(4,"ion-title"),m.Hc(5),m.dc(),m.Fc(6,v,5,0,"ion-buttons",3),m.dc(),m.dc(),m.ec(7,"ion-content"),m.ec(8,"ion-refresher",4),m.mc("ionRefresh",(function(e){return t.doRefresh(e)})),m.ac(9,"ion-refresher-content"),m.dc(),m.ec(10,"ion-list",5),m.Fc(11,x,10,3,"ion-item-divider",6),m.Fc(12,y,26,7,"ion-item",7),m.Fc(13,w,25,8,"ion-item",7),m.Fc(14,N,2,6,"div",8),m.dc(),m.dc()),2&e&&(m.Nb(5),m.Jc(": ",t.Titel," :"),m.Nb(1),m.uc("ngIf",t.PageType>=-2&&t.HasUser),m.Nb(5),m.uc("ngIf",t.PageType>=-2),m.Nb(1),m.uc("ngForOf",t.TTopics),m.Nb(1),m.uc("ngForOf",t.Topics),m.Nb(1),m.uc("ngIf",!t.loadfailed))},directives:[r.t,r.bb,r.j,r.f,r.g,r.Z,i.j,r.n,r.L,r.M,r.E,i.i,r.i,r.u,r.W,r.y,r.D,r.x,r.Y,r.J,g.f],styles:[""]}),I),C=n("Gfuc"),H=n("9UMr");n.d(t,"TopiclistPageModule",(function(){return S}));var A,F=[{path:"",component:P}],S=((A=function e(){_classCallCheck(this,e)}).\u0275mod=m.Xb({type:A}),A.\u0275inj=m.Wb({factory:function(e){return new(e||A)},imports:[[C.a,H.a,i.b,g.e,c.c,r.cb,o.i.forChild(F)]]}),A)}}]);