function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+eMj":function(e,t,r){"use strict";r.r(t);var n=r("ofXK"),i=r("3Pt+"),s=r("tyNb"),o=r("c7TG"),a=r("mrSG"),u=r("LTmD"),c=r("PKx9"),l=r("Y6BA"),h=r("HULg"),d=r("lEof"),f=r("fXoL"),p=r("i/bi"),m=function(){return["/menu/forum"]};function v(e,t){1&e&&(f.dc(0,"a",12),f.Zb(1,"ion-icon",13),f.Jc(2," \u8ba8\u8bba\u533a "),f.cc()),2&e&&f.vc("routerLink",f.wc(1,m))}var g=function(){return["/menu/nodes"]};function b(e,t){1&e&&(f.dc(0,"a",12),f.Zb(1,"ion-icon",14),f.Jc(2," \u6848\u4f8b "),f.cc()),2&e&&f.vc("routerLink",f.wc(1,g))}var w=function(){return["/menu/paipan/calendar"]};function k(e,t){1&e&&(f.dc(0,"a",12),f.Zb(1,"ion-icon",15),f.Jc(2," \u4e07\u5e74\u5386 "),f.cc()),2&e&&f.vc("routerLink",f.wc(1,w))}var U=function(){return["/menu/paipan/gua"]};function y(e,t){1&e&&(f.dc(0,"a",12),f.Zb(1,"ion-icon",16),f.Jc(2," \u516d\u723b "),f.cc()),2&e&&f.vc("routerLink",f.wc(1,U))}var P=function(){return["/menu/paipan/bazi"]};function R(e,t){1&e&&(f.dc(0,"a",12),f.Zb(1,"ion-icon",17),f.Jc(2," \u516d\u723b "),f.cc()),2&e&&f.vc("routerLink",f.wc(1,P))}var C=function(e){return[e]};function x(e,t){if(1&e){var r=f.ec();f.dc(0,"a",18),f.lc("click",(function(){return f.Cc(r),f.oc(),f.zc(14).toggle()})),f.Zb(1,"ion-icon",19),f.Jc(2),f.cc()}if(2&e){var n=t.$implicit,i=f.oc();f.Qb("active-item",i.selectedPath.startsWith(n.url)),f.vc("routerLink",f.xc(5,C,n.url)),f.Nb(1),f.vc("name",n.icon),f.Nb(1),f.Lc(" ",n.title," ")}}var M,S=function(){return["/menu/user"]},F=((M=function(){function e(t,r,n,i,s,o,a){_classCallCheck(this,e),this.router=t,this.platform=r,this.toastController=n,this.forumservice=i,this.host=s,this.nanodb=o,this.settings=a,this.selectedPath="",this.pages=[{title:"\u8ba8\u8bba\u533a",url:"/menu/forum",icon:"home"},{title:"\u4e07\u5e74\u5386",url:"/menu/paipan/calendar",icon:"calendar"},{title:"\u516d\u723b",url:"/menu/paipan/gua",icon:"leaf"},{title:"\u516b\u5b57",url:"/menu/paipan/bazi",icon:"walk"},{title:"\u7f57\u76d8",url:"/menu/compass",icon:"compass"},{title:"\u6848\u4f8b",url:"/menu/nodes",icon:"list"},{title:"\u7528\u6237",url:"/menu/user",icon:"person"},{title:"\u8bbe\u7f6e",url:"/menu/setting",icon:"settings"}],this.CanQuit=!1,this.AutoHide=!0,this.platform.width()<768&&(this.AutoHide=!1)}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settings.WaitInit();case 2:this.platform.platforms(),this.nanodb.initNano(),navigator.app||(this.CanQuit=!0),this.settings.IsDevice||this.settings.IsSmallScreen||(this.AutoHide=!1),this.settings.HasUser&&this.settings.User.id!==l.a.id&&(this.updateAppSetting(),this.forumservice.HoldPublicMessage().then((function(e){e>0&&t.presentToast("\u60a8\u6709 ".concat(e," \u6761\u672a\u8bfb\u6d88\u606f, \u8bf7\u53ca\u65f6\u67e5\u6536\u3002"),5e3)})),this.pages.insert(5,{title:"\u6211\u7684\u6d88\u606f",url:"/menu/messagelist/false",icon:"chatboxes"}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"updateAppSetting",value:function(){var e=this;this.host.GetAppSetting().then((function(t){e.settings.AppConfig.appSetting=t.appSetting,console.log("Get AppSetting",e.settings.AppConfig)})).catch((function(e){console.log("Get AppSetting failed",e)}))}},{key:"closeApp",value:function(){navigator.app?navigator.app.exitApp():console.log("platforms",this.platform.platforms(),navigator)}},{key:"presentToast",value:function(e,t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.toastController.create({message:e,duration:t,color:"secondary",position:"middle"});case 2:r.sent.present();case 3:case"end":return r.stop()}}),r,this)})))}},{key:"IsSmallScreen",get:function(){return this.settings.IsSmallScreen}},{key:"HasUser",get:function(){return this.settings.HasUser}},{key:"UserName",get:function(){return this.HasUser?this.settings.User.id:"\u533f\u540d\u7528\u6237"}},{key:"Avatar",get:function(){return this.HasUser&&this.settings.User.avatar||l.a.avatar}}]),e}()).\u0275fac=function(e){return new(e||M)(f.Yb(s.g),f.Yb(o.db),f.Yb(o.ib),f.Yb(c.a),f.Yb(d.a),f.Yb(h.a),f.Yb(u.a))},M.\u0275cmp=f.Sb({type:M,selectors:[["app-menu"]],viewQuery:function(e,t){var r;1&e&&f.Oc(s.k,!0),2&e&&f.yc(r=f.mc())&&(t.outlet=r.first)},decls:18,vars:11,consts:[[1,"ui","top","attached","demo","menu"],[1,"item",3,"click"],[1,"sidebar","icon"],["class","item",3,"routerLink",4,"ngIf"],[1,"right","floated","image","item",3,"routerLink"],[3,"src"],[1,"ui","bottom","attached","segment"],[1,"inverted","vertical"],["sidebar",""],["class","header item","routerDirection","root",3,"routerLink","active-item","click",4,"ngFor","ngForOf"],[3,"isDimmedWhenVisible"],["id","content"],[1,"item",3,"routerLink"],["name","home"],["name","list"],["name","calendar"],["name","leaf"],["name","walk"],["routerDirection","root",1,"header","item",3,"routerLink","click"],["slot","start",3,"name"]],template:function(e,t){if(1&e){var r=f.ec();f.dc(0,"div",0),f.dc(1,"a",1),f.lc("click",(function(){return f.Cc(r),f.zc(14).toggle()})),f.Zb(2,"i",2),f.Jc(3," \u83dc\u5355 "),f.cc(),f.Hc(4,v,3,2,"a",3),f.Hc(5,b,3,2,"a",3),f.Hc(6,k,3,2,"a",3),f.Hc(7,y,3,2,"a",3),f.Hc(8,R,3,2,"a",3),f.dc(9,"a",4),f.Zb(10,"img",5),f.Jc(11),f.cc(),f.cc(),f.dc(12,"sui-sidebar-container",6),f.dc(13,"sui-sidebar",7,8),f.Hc(15,x,3,7,"a",9),f.cc(),f.dc(16,"sui-sidebar-sibling",10),f.Zb(17,"ion-router-outlet",11),f.cc(),f.cc()}2&e&&(f.Nb(4),f.vc("ngIf",!t.IsSmallScreen),f.Nb(1),f.vc("ngIf",!t.IsSmallScreen),f.Nb(1),f.vc("ngIf",!t.IsSmallScreen),f.Nb(1),f.vc("ngIf",!t.IsSmallScreen),f.Nb(1),f.vc("ngIf",!t.IsSmallScreen),f.Nb(1),f.vc("routerLink",f.wc(10,S)),f.Nb(1),f.vc("src",t.Avatar,f.Ec),f.Nb(1),f.Lc(" ",t.UserName," "),f.Nb(4),f.vc("ngForOf",t.pages),f.Nb(1),f.vc("isDimmedWhenVisible",!0))},directives:[p.d,n.j,s.i,o.fb,p.h,p.g,n.i,p.i,o.K,o.t],styles:["ion-menu[_ngcontent-%COMP%]{--max-width:200px}"]}),M);r.d(t,"MenuPageModule",(function(){return G}));var j,L=[{path:"",component:F,children:[{path:"paipan",loadChildren:"../paipan/paipan.module#PaipanPageModule"},{path:"paipan/:child",loadChildren:"../paipan/paipan.module#PaipanPageModule"},{path:"recordes/:id",loadChildren:"../recordes/recordes.module#RecordesPageModule"},{path:"nodes",loadChildren:"../nodes/nodes.module#NodesPageModule"},{path:"forum",loadChildren:"../../forum/forum/forum.module#ForumPageModule"},{path:"topiclist/:forumid",loadChildren:"../../forum/topiclist/topiclist.module#TopiclistPageModule"},{path:"topicdetail/:forumid/:topicid",loadChildren:"../../forum/topicviewer/topicviewer.module#TopicviewerPageModule"},{path:"topicpanfu/:arg",loadChildren:"../../forum/panfuviewer/panfuviewer.module#PanfuviewerPageModule"},{path:"messagelist/:naviback",loadChildren:"../../forum/messagelist/messagelist.module#MessagelistPageModule"},{path:"user",loadChildren:"../../user/userprofil/userprofil.module#UserprofilPageModule"},{path:"searchuser",loadChildren:"../../user/searchuser/searchuser.module#SearchuserPageModule"},{path:"setting",loadChildren:"../setting/setting.module#SettingPageModule"},{path:"recordview/:nodeid/:recid",loadChildren:"../recordviewer/recordviewer.module#RecordviewerPageModule"},{path:"compass",loadChildren:"../compass/compass.module#CompassPageModule"}]}],G=((j=function e(){_classCallCheck(this,e)}).\u0275mod=f.Wb({type:j}),j.\u0275inj=f.Vb({factory:function(e){return new(e||j)},imports:[[n.b,i.c,p.e,o.Y,s.j.forChild(L)]]}),j)},PKx9:function(e,t,r){"use strict";var n=r("mrSG"),i=r("LTmD"),s=r("lEof");r("aGhr");var o=function(){function e(){_classCallCheck(this,e),this.topics=[]}return _createClass(e,[{key:"Reset",value:function(){this.topics=[]}},{key:"GetPage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=this.topics.find((function(r){return r.forumid===e&&t===r.page}));return r?{data:r.items,sum:r.sum}:null}},{key:"SetPage",value:function(e,t,r,n){var i=this.topics.find((function(r){return r.forumid===e&&t===r.page}));i?i.items=r:this.topics.push({forumid:e,page:t,items:r,sum:n})}},{key:"GetTopic",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,s=this.topics[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var o=i.value.items.find((function(t){return t.id===e}));if(o)return o}}catch(a){r=!0,n=a}finally{try{t||null==s.return||s.return()}finally{if(r)throw n}}return null}},{key:"SetTopic",value:function(e,t){var r=this.GetPage(t,0);r?r.data.insert(0,e):this.SetPage(t,0,[e],1)}},{key:"DeleteTopic",value:function(e,t){if(t);else{var r=!0,n=!1,i=void 0;try{for(var s,o=this.topics[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var a=s.value;a.items.find((function(t){return t.id===e}))&&(a.items=a.items.filter((function(t){return t.id!==e})))}}catch(u){n=!0,i=u}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"UpdateTopic",value:function(e){var t=this.GetTopic(e.id);if(t)for(var r in e)t[r]=e[r]}}]),e}(),a=r("Y6BA"),u=(r("0eVs"),r("fXoL"));r.d(t,"a",(function(){return l}));var c,l=((c=function(){function e(t,r){_classCallCheck(this,e),this.settings=t,this.host=r,this.vusers=[],this.currentTopics=[],this.ForumMG=new o}return _createClass(e,[{key:"ForumList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.ForumMG.Forumlist||!1!==e){t.next=4;break}t.t0=Promise.resolve(this.ForumMG.Forumlist),t.next=7;break;case 4:return t.next=6,this.settings.WaitInit();case 6:t.t0=this.LoadForumList();case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t,this)})))}},{key:"LoadTopicList",value:function(e,t,r){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,s,o,a,u=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=e||"forum_"+r,i=-2===r?e+"good":i,s=-1===r?r:t,!(o=this.ForumMG.GetPage(i,s))){n.next=5;break}return n.abrupt("return",Promise.resolve(o));case 5:return a={func:"TopicList",forumid:e,params:{filter:{},startColumn:20*t,private:!1}},n.abrupt("return",(-1===r?a.params.filter.top=1:-2===r?a.params.filter.good=!0:-3===r?(a.params.filter.author=this.User.id,a.params.filter.topic=null):-4===r?(a.params.filter.author=this.User.id,a.params.filter.topic=null,a.params.private=!0):-5===r?(a.params.filter.forumid=this.User.id,a.params.filter.topic=null,a.params.private=!0):a.params.filter.top=0,e&&(a.params.filter.forumid=e),this.host.ForumRequest(this.User.id,this.User.password,a).then((function(e){return e&&e.data&&u.ForumMG.SetPage(i,s,e.data,e.sum),e})).catch((function(e){return Promise.reject(e)}))));case 7:case"end":return n.stop()}}),n,this)})))}},{key:"LoadAnswerList",value:function(e,t,r){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.host.ForumRequest(this.User.id,this.User.password,{func:"TopicList",forumid:t,params:{filter:{topic:e},sort:"created",startColumn:20*r,direction:1}}).then((function(e){return e})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return n.stop()}}),n,this)})))}},{key:"NewTopic",value:function(e,t){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.host.ForumRequest(this.User.id,this.User.password,{func:"NewTopic",forumid:e,params:t}).then((function(e){return e})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return r.stop()}}),r,this)})))}},{key:"GetTopic",value:function(e,t){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var i,s=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=this.ForumMG.GetTopic(t),r.abrupt("return",i?Promise.resolve(i):this.host.ForumRequest(this.User.id,this.User.password,{func:"GetTopic",forumid:e||"",params:{topicid:t||"",private:!1}}).then((function(e){return Object(n.b)(s,void 0,void 0,regeneratorRuntime.mark((function t(){var r,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e;case 2:return r=t.sent,t.next=5,this.GetUserInfo(r.author);case 5:return n=t.sent,i=(n||a.a).avatar||"",t.abrupt("return",(r.avatar=i.IsNullOrEmpty()?this.settings.Avatar(n.gender):i,r.showImg=!0,r.showGua=!0,r.showBazi=!0,e));case 8:case"end":return t.stop()}}),t,this)})))})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return r.stop()}}),r,this)})))}},{key:"UpdatForum",value:function(e,t){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.host.ForumRequest(this.User.id,this.User.password,{func:"UpdateForum",params:{id:t,data:e}}).then((function(e){return e})).catch((function(e){return console.log("updat failed",e),Promise.reject(e)})));case 1:case"end":return r.stop()}}),r,this)})))}},{key:"UpdateTopic",value:function(e,t,r){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.host.ForumRequest(this.User.id,this.User.password,{func:"Update",params:{id:t,private:r,data:e}}).then((function(e){return e})).catch((function(e){return console.log("updat failed",e),Promise.reject(e)})));case 1:case"end":return n.stop()}}),n,this)})))}},{key:"GetUserInfo",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=this.VUsers.find((function(t){return t.id===e}));return n?Promise.resolve(n):this.host.ForumRequest(this.User.id,this.User.password,{func:"GetVUser",author:e,roller:r}).then((function(e){return t.VUsers.push(e),e})).catch((function(e){return Promise.reject(e)}))}},{key:"DeleteTopic",value:function(e,t){var r=this;return this.host.ForumRequest(this.User.id,this.User.password,{func:"DeleteTopic",params:{topicid:e}}).then((function(n){return r.ForumMG.DeleteTopic(e,t),n})).catch((function(e){return Promise.reject(e)}))}},{key:"SendMessage",value:function(e){return this.host.ForumRequest(this.User.id,this.User.password,{func:"SendMessage",params:{message:e}}).then((function(e){return e})).catch((function(e){return Promise.reject(e)}))}},{key:"LoadMessages",value:function(e,t){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.host.ForumRequest(this.User.id,this.User.password,{func:"MessageList",params:{pageindex:e,forme:t}}).then((function(e){return e})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return r.stop()}}),r,this)})))}},{key:"DeleteMessage",value:function(e,t){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.host.ForumRequest(this.User.id,this.User.password,{func:"DeleteMessage",params:{msgid:e,todelete:t}}).then((function(e){return e})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return r.stop()}}),r,this)})))}},{key:"HoldPublicMessage",value:function(){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initial();case 2:return e.abrupt("return",this.host.ForumRequest(this.User.id,this.User.password,{func:"HoldPublicMsg"}).then((function(e){return e})).catch((function(e){return Promise.reject(e)})));case 3:case"end":return e.stop()}}),e,this)})))}},{key:"UpgradUser",value:function(e,t){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.initial();case 2:return r.abrupt("return",this.host.ForumRequest(this.User.id,this.User.password,{func:"UpgradeUser",params:{id:e,data:t}}).then((function(e){return e})).catch((function(e){return Promise.reject(e)})));case 3:case"end":return r.stop()}}),r,this)})))}},{key:"initial",value:function(){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.User,e.t0){e.next=4;break}return e.next=4,this.settings.WaitInit();case 4:return e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"LoadForumList",value:function(){var e=this;return this.host.ForumRequest(this.User.id,this.User.password,{func:"ForumList"}).then((function(t){return e.ForumMG.Forumlist=t,t})).catch((function(e){return Promise.reject(e)}))}},{key:"User",get:function(){return this.settings.User||a.a}},{key:"VUsers",get:function(){return this.vusers=this.vusers||[],this.vusers=this.vusers.filter((function(e){return!!e}))||[],this.vusers},set:function(e){this.vusers=e||[]}}]),e}()).\u0275fac=function(e){return new(e||c)(u.hc(i.a),u.hc(s.a))},c.\u0275prov=u.Ub({token:c,factory:c.\u0275fac,providedIn:"root"}),c)},aGhr:function(e,t){}}]);