(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+eMj":function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),r=i("3Pt+"),o=i("tyNb"),n=i("c7TG"),a=i("mrSG"),c=i("LTmD"),u=i("PKx9"),d=i("Y6BA"),h=i("HULg"),l=i("lEof"),p=i("fXoL"),m=i("i/bi");const f=function(){return["/menu/forum"]};function g(t,e){1&t&&(p.dc(0,"a",12),p.Zb(1,"ion-icon",13),p.Jc(2," \u8ba8\u8bba\u533a "),p.cc()),2&t&&p.vc("routerLink",p.wc(1,f))}const v=function(){return["/menu/nodes"]};function b(t,e){1&t&&(p.dc(0,"a",12),p.Zb(1,"ion-icon",14),p.Jc(2," \u6848\u4f8b "),p.cc()),2&t&&p.vc("routerLink",p.wc(1,v))}const U=function(){return["/menu/paipan/calendar"]};function w(t,e){1&t&&(p.dc(0,"a",12),p.Zb(1,"ion-icon",15),p.Jc(2," \u4e07\u5e74\u5386 "),p.cc()),2&t&&p.vc("routerLink",p.wc(1,U))}const P=function(){return["/menu/paipan/gua"]};function M(t,e){1&t&&(p.dc(0,"a",12),p.Zb(1,"ion-icon",16),p.Jc(2," \u516d\u723b "),p.cc()),2&t&&p.vc("routerLink",p.wc(1,P))}const F=function(){return["/menu/paipan/bazi"]};function S(t,e){1&t&&(p.dc(0,"a",12),p.Zb(1,"ion-icon",17),p.Jc(2," \u516d\u723b "),p.cc()),2&t&&p.vc("routerLink",p.wc(1,F))}const j=function(t){return[t]};function L(t,e){if(1&t){const t=p.ec();p.dc(0,"a",18),p.lc("click",(function(){return p.Cc(t),p.oc(),p.zc(14).toggle()})),p.Zb(1,"ion-icon",19),p.Jc(2),p.cc()}if(2&t){const t=e.$implicit,i=p.oc();p.Qb("active-item",i.selectedPath.startsWith(t.url)),p.vc("routerLink",p.xc(5,j,t.url)),p.Nb(1),p.vc("name",t.icon),p.Nb(1),p.Lc(" ",t.title," ")}}const G=function(){return["/menu/user"]};let C=(()=>{class t{constructor(t,e,i,s,r,o,n){this.router=t,this.platform=e,this.toastController=i,this.forumservice=s,this.host=r,this.nanodb=o,this.settings=n,this.selectedPath="",this.pages=[{title:"\u8ba8\u8bba\u533a",url:"/menu/forum",icon:"home"},{title:"\u4e07\u5e74\u5386",url:"/menu/paipan/calendar",icon:"calendar"},{title:"\u516d\u723b",url:"/menu/paipan/gua",icon:"leaf"},{title:"\u516b\u5b57",url:"/menu/paipan/bazi",icon:"walk"},{title:"\u7f57\u76d8",url:"/menu/compass",icon:"compass"},{title:"\u6848\u4f8b",url:"/menu/nodes",icon:"list"},{title:"\u7528\u6237",url:"/menu/user",icon:"person"},{title:"\u8bbe\u7f6e",url:"/menu/setting",icon:"settings"}],this.CanQuit=!1,this.AutoHide=!0,this.platform.width()<768&&(this.AutoHide=!1)}get IsSmallScreen(){return this.settings.IsSmallScreen}ngOnInit(){return Object(a.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.platform.platforms(),this.nanodb.initNano(),navigator.app||(this.CanQuit=!0),this.settings.IsDevice||this.settings.IsSmallScreen||(this.AutoHide=!1),this.settings.HasUser&&this.settings.User.id!==d.a.id&&(this.updateAppSetting(),this.forumservice.HoldPublicMessage().then(t=>{t>0&&this.presentToast(`\u60a8\u6709 ${t} \u6761\u672a\u8bfb\u6d88\u606f, \u8bf7\u53ca\u65f6\u67e5\u6536\u3002`,5e3)}),this.pages.insert(5,{title:"\u6211\u7684\u6d88\u606f",url:"/menu/messagelist/false",icon:"chatboxes"}))}))}get HasUser(){return this.settings.HasUser}get UserName(){return this.HasUser?this.settings.User.id:"\u533f\u540d\u7528\u6237"}get Avatar(){return this.HasUser&&this.settings.User.avatar||d.a.avatar}updateAppSetting(){this.host.GetAppSetting().then(t=>{this.settings.AppConfig.appSetting=t.appSetting,console.log("Get AppSetting",this.settings.AppConfig)}).catch(t=>{console.log("Get AppSetting failed",t)})}closeApp(){navigator.app?navigator.app.exitApp():console.log("platforms",this.platform.platforms(),navigator)}presentToast(t,e){return Object(a.b)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:e,color:"secondary",position:"middle"})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(p.Yb(o.g),p.Yb(n.cb),p.Yb(n.hb),p.Yb(u.a),p.Yb(l.a),p.Yb(h.a),p.Yb(c.a))},t.\u0275cmp=p.Sb({type:t,selectors:[["app-menu"]],viewQuery:function(t,e){var i;1&t&&p.Oc(o.k,!0),2&t&&p.yc(i=p.mc())&&(e.outlet=i.first)},decls:18,vars:11,consts:[[1,"ui","top","attached","demo","menu"],[1,"item",3,"click"],[1,"sidebar","icon"],["class","item",3,"routerLink",4,"ngIf"],[1,"right","floated","image","item",3,"routerLink"],[3,"src"],[1,"ui","bottom","attached","segment"],[1,"inverted","vertical"],["sidebar",""],["class","header item","routerDirection","root",3,"routerLink","active-item","click",4,"ngFor","ngForOf"],[3,"isDimmedWhenVisible"],["id","content"],[1,"item",3,"routerLink"],["name","home"],["name","list"],["name","calendar"],["name","leaf"],["name","walk"],["routerDirection","root",1,"header","item",3,"routerLink","click"],["slot","start",3,"name"]],template:function(t,e){if(1&t){const t=p.ec();p.dc(0,"div",0),p.dc(1,"a",1),p.lc("click",(function(){return p.Cc(t),p.zc(14).toggle()})),p.Zb(2,"i",2),p.Jc(3," \u83dc\u5355 "),p.cc(),p.Hc(4,g,3,2,"a",3),p.Hc(5,b,3,2,"a",3),p.Hc(6,w,3,2,"a",3),p.Hc(7,M,3,2,"a",3),p.Hc(8,S,3,2,"a",3),p.dc(9,"a",4),p.Zb(10,"img",5),p.Jc(11),p.cc(),p.cc(),p.dc(12,"sui-sidebar-container",6),p.dc(13,"sui-sidebar",7,8),p.Hc(15,L,3,7,"a",9),p.cc(),p.dc(16,"sui-sidebar-sibling",10),p.Zb(17,"ion-router-outlet",11),p.cc(),p.cc()}2&t&&(p.Nb(4),p.vc("ngIf",!e.IsSmallScreen),p.Nb(1),p.vc("ngIf",!e.IsSmallScreen),p.Nb(1),p.vc("ngIf",!e.IsSmallScreen),p.Nb(1),p.vc("ngIf",!e.IsSmallScreen),p.Nb(1),p.vc("ngIf",!e.IsSmallScreen),p.Nb(1),p.vc("routerLink",p.wc(10,G)),p.Nb(1),p.vc("src",e.Avatar,p.Ec),p.Nb(1),p.Lc(" ",e.UserName," "),p.Nb(4),p.vc("ngForOf",e.pages),p.Nb(1),p.vc("isDimmedWhenVisible",!0))},directives:[m.d,s.j,o.i,n.eb,m.h,m.g,s.i,m.i,n.K,n.t],styles:["ion-menu[_ngcontent-%COMP%]{--max-width:200px}"]}),t})();i.d(e,"MenuPageModule",(function(){return k}));const T=[{path:"",component:C,children:[{path:"paipan",loadChildren:"../paipan/paipan.module#PaipanPageModule"},{path:"paipan/:child",loadChildren:"../paipan/paipan.module#PaipanPageModule"},{path:"recordes/:id",loadChildren:"../recordes/recordes.module#RecordesPageModule"},{path:"nodes",loadChildren:"../nodes/nodes.module#NodesPageModule"},{path:"forum",loadChildren:"../../forum/forum/forum.module#ForumPageModule"},{path:"topiclist/:forumid",loadChildren:"../../forum/topiclist/topiclist.module#TopiclistPageModule"},{path:"topicdetail/:forumid/:topicid",loadChildren:"../../forum/topicviewer/topicviewer.module#TopicviewerPageModule"},{path:"topicpanfu/:arg",loadChildren:"../../forum/panfuviewer/panfuviewer.module#PanfuviewerPageModule"},{path:"messagelist/:naviback",loadChildren:"../../forum/messagelist/messagelist.module#MessagelistPageModule"},{path:"user",loadChildren:"../../user/userprofil/userprofil.module#UserprofilPageModule"},{path:"searchuser",loadChildren:"../../user/searchuser/searchuser.module#SearchuserPageModule"},{path:"setting",loadChildren:"../setting/setting.module#SettingPageModule"},{path:"recordview/:nodeid/:recid",loadChildren:"../recordviewer/recordviewer.module#RecordviewerPageModule"},{path:"compass",loadChildren:"../compass/compass.module#CompassPageModule"}]}];let k=(()=>{class t{}return t.\u0275mod=p.Wb({type:t}),t.\u0275inj=p.Vb({factory:function(e){return new(e||t)},imports:[[s.b,r.c,m.e,n.X,o.j.forChild(T)]]}),t})()},PKx9:function(t,e,i){"use strict";var s=i("mrSG"),r=i("LTmD"),o=i("lEof");i("aGhr");class n{constructor(){this.topics=[]}Reset(){this.topics=[]}GetPage(t,e=0){const i=this.topics.find(i=>i.forumid===t&&e===i.page);return i?{data:i.items,sum:i.sum}:null}SetPage(t,e,i,s){const r=this.topics.find(i=>i.forumid===t&&e===i.page);r?r.items=i:this.topics.push({forumid:t,page:e,items:i,sum:s})}GetTopic(t){for(const e of this.topics){const i=e.items.find(e=>e.id===t);if(i)return i}return null}SetTopic(t,e){const i=this.GetPage(e,0);i?i.data.insert(0,t):this.SetPage(e,0,[t],1)}DeleteTopic(t,e){if(e);else for(const i of this.topics)i.items.find(e=>e.id===t)&&(i.items=i.items.filter(e=>e.id!==t))}UpdateTopic(t){const e=this.GetTopic(t.id);if(e)for(let i in t)e[i]=t[i]}}var a=i("Y6BA"),c=(i("0eVs"),i("fXoL"));i.d(e,"a",(function(){return u}));let u=(()=>{class t{constructor(t,e){this.settings=t,this.host=e,this.vusers=[],this.currentTopics=[],this.ForumMG=new n}get User(){return this.settings.User||a.a}get VUsers(){return this.vusers=this.vusers||[],this.vusers=this.vusers.filter(t=>!!t)||[],this.vusers}set VUsers(t){this.vusers=t||[]}ForumList(t=!1){return Object(s.b)(this,void 0,void 0,(function*(){return this.ForumMG.Forumlist&&!1===t?Promise.resolve(this.ForumMG.Forumlist):(yield this.settings.WaitInit(),this.LoadForumList())}))}LoadTopicList(t,e,i){return Object(s.b)(this,void 0,void 0,(function*(){let s=t||"forum_"+i;s=-2===i?t+"good":s;const r=-1===i?i:e,o=this.ForumMG.GetPage(s,r);if(o)return Promise.resolve(o);const n={func:"TopicList",forumid:t,params:{filter:{},startColumn:20*e,private:!1}};return-1===i?n.params.filter.top=1:-2===i?n.params.filter.good=!0:-3===i?(n.params.filter.author=this.User.id,n.params.filter.topic=null):-4===i?(n.params.filter.author=this.User.id,n.params.filter.topic=null,n.params.private=!0):-5===i?(n.params.filter.forumid=this.User.id,n.params.filter.topic=null,n.params.private=!0):n.params.filter.top=0,t&&(n.params.filter.forumid=t),this.host.ForumRequest(this.User.id,this.User.password,n).then(t=>(t&&t.data&&this.ForumMG.SetPage(s,r,t.data,t.sum),t)).catch(t=>Promise.reject(t))}))}LoadAnswerList(t,e,i){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"TopicList",forumid:e,params:{filter:{topic:t},sort:"created",startColumn:20*i,direction:1}}).then(t=>t).catch(t=>Promise.reject(t))}))}NewTopic(t,e){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"NewTopic",forumid:t,params:e}).then(t=>t).catch(t=>Promise.reject(t))}))}GetTopic(t,e){return Object(s.b)(this,void 0,void 0,(function*(){const i=this.ForumMG.GetTopic(e);return i?Promise.resolve(i):this.host.ForumRequest(this.User.id,this.User.password,{func:"GetTopic",forumid:t||"",params:{topicid:e||"",private:!1}}).then(t=>Object(s.b)(this,void 0,void 0,(function*(){const e=yield t,i=yield this.GetUserInfo(e.author),s=(i||a.a).avatar||"";return e.avatar=s.IsNullOrEmpty()?this.settings.Avatar(i.gender):s,e.showImg=!0,e.showGua=!0,e.showBazi=!0,t}))).catch(t=>Promise.reject(t))}))}UpdatForum(t,e){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"UpdateForum",params:{id:e,data:t}}).then(t=>t).catch(t=>(console.log("updat failed",t),Promise.reject(t)))}))}UpdateTopic(t,e,i){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"Update",params:{id:e,private:i,data:t}}).then(t=>t).catch(t=>(console.log("updat failed",t),Promise.reject(t)))}))}GetUserInfo(t,e=-1){const i=this.VUsers.find(e=>e.id===t);return i?Promise.resolve(i):this.host.ForumRequest(this.User.id,this.User.password,{func:"GetVUser",author:t,roller:e}).then(t=>(this.VUsers.push(t),t)).catch(t=>Promise.reject(t))}DeleteTopic(t,e){return this.host.ForumRequest(this.User.id,this.User.password,{func:"DeleteTopic",params:{topicid:t}}).then(i=>(this.ForumMG.DeleteTopic(t,e),i)).catch(t=>Promise.reject(t))}SendMessage(t){return this.host.ForumRequest(this.User.id,this.User.password,{func:"SendMessage",params:{message:t}}).then(t=>t).catch(t=>Promise.reject(t))}LoadMessages(t,e){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"MessageList",params:{pageindex:t,forme:e}}).then(t=>t).catch(t=>Promise.reject(t))}))}DeleteMessage(t,e){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"DeleteMessage",params:{msgid:t,todelete:e}}).then(t=>t).catch(t=>Promise.reject(t))}))}HoldPublicMessage(){return Object(s.b)(this,void 0,void 0,(function*(){return yield this.initial(),this.host.ForumRequest(this.User.id,this.User.password,{func:"HoldPublicMsg"}).then(t=>t).catch(t=>Promise.reject(t))}))}UpgradUser(t,e){return Object(s.b)(this,void 0,void 0,(function*(){return yield this.initial(),this.host.ForumRequest(this.User.id,this.User.password,{func:"UpgradeUser",params:{id:t,data:e}}).then(t=>t).catch(t=>Promise.reject(t))}))}initial(){return Object(s.b)(this,void 0,void 0,(function*(){return this.User||(yield this.settings.WaitInit()),!0}))}LoadForumList(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"ForumList"}).then(t=>(this.ForumMG.Forumlist=t,t)).catch(t=>Promise.reject(t))}}return t.\u0275fac=function(e){return new(e||t)(c.hc(r.a),c.hc(o.a))},t.\u0275prov=c.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},aGhr:function(t,e){}}]);