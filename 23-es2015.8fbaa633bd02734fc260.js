(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+eMj":function(e,t,s){"use strict";s.r(t);var i=s("ofXK"),r=s("3Pt+"),o=s("tyNb"),n=s("c7TG"),u=s("mrSG"),a=s("LTmD"),c=s("PKx9"),d=s("Y6BA"),h=s("fXoL");function l(e,t){if(1&e&&(h.Zb(0,"ion-menu-toggle",6),h.Zb(1,"ion-item",7),h.Xb(2,"ion-icon",8),h.Zb(3,"ion-label"),h.xc(4),h.Yb(),h.Yb(),h.Yb()),2&e){const e=t.$implicit,s=h.jc();h.Mb(1),h.Ob("active-item",s.selectedPath.startsWith(e.url)),h.oc("routerLink",e.url),h.Mb(1),h.oc("name",e.icon),h.Mb(2),h.zc(" ",e.title," ")}}let p=(()=>{class e{constructor(e,t,s,i,r){this.router=e,this.platform=t,this.toastController=s,this.forumservice=i,this.settings=r,this.selectedPath="",this.pages=[{title:"\u6392\u76d8",url:"/menu/paipan",icon:"home"},{title:"\u6848\u4f8b",url:"/menu/nodes",icon:"list"},{title:"\u8ba8\u8bba\u533a",url:"/menu/forum",icon:"chatbubbles"},{title:"\u7528\u6237",url:"/menu/user",icon:"person"},{title:"\u8bbe\u7f6e",url:"/menu/setting",icon:"settings"}],this.IsWebApp=!1}ngOnInit(){return Object(u.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.platform.platforms(),navigator.app||(this.IsWebApp=!0),this.settings.HasUser&&this.settings.User.id!==d.a.id&&(this.forumservice.HoldPublicMessage().then(e=>{e>0&&this.presentToast(`\u60a8\u6709 ${e} \u6761\u672a\u8bfb\u6d88\u606f, \u8bf7\u53ca\u65f6\u67e5\u6536\u3002`,5e3)}),this.pages.insert(3,{title:"\u6211\u7684\u6d88\u606f",url:"/menu/messagelist/false",icon:"chatboxes"}))}))}get HasUser(){return this.settings.HasUser}closeApp(){navigator.app?navigator.app.exitApp():console.log("platforms",this.platform.platforms(),navigator)}presentToast(e,t){return Object(u.b)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:t,color:"secondary",position:"middle"})).present()}))}}return e.\u0275fac=function(t){return new(t||e)(h.Wb(o.g),h.Wb(n.eb),h.Wb(n.jb),h.Wb(c.a),h.Wb(a.a))},e.\u0275cmp=h.Qb({type:e,selectors:[["app-menu"]],viewQuery:function(e,t){var s;1&e&&h.Ac(o.j,!0),2&e&&h.qc(s=h.ic())&&(t.outlet=s.first)},decls:13,vars:2,consts:[["disabled","true","contentId","content"],["contentId","content"],["auto-hide","false",4,"ngFor","ngForOf"],["tappable","",3,"hidden","click"],["name","exit","slot","start"],["id","content"],["auto-hide","false"],["routerDirection","root",3,"routerLink"],["slot","start",3,"name"]],template:function(e,t){1&e&&(h.Zb(0,"ion-split-pane",0),h.Zb(1,"ion-menu",1),h.Zb(2,"ion-header"),h.Zb(3,"ion-toolbar"),h.Zb(4,"ion-text"),h.xc(5,"\u83dc\u5355"),h.Yb(),h.Yb(),h.Yb(),h.Zb(6,"ion-content"),h.Zb(7,"ion-list"),h.wc(8,l,5,5,"ion-menu-toggle",2),h.Zb(9,"ion-item",3),h.hc("click",(function(){return t.closeApp()})),h.Xb(10,"ion-icon",4),h.xc(11," \u9000\u51fa "),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Xb(12,"ion-router-outlet",5),h.Yb()),2&e&&(h.Mb(8),h.oc("ngForOf",t.pages),h.Mb(1),h.oc("hidden",t.IsWebApp))},directives:[n.S,n.F,n.s,n.Y,n.T,n.o,n.D,i.i,n.w,n.t,n.K,n.H,n.gb,o.h,n.C],styles:["ion-menu[_ngcontent-%COMP%]{--max-width:200px}"]}),e})();s.d(t,"MenuPageModule",(function(){return f}));const m=[{path:"",component:p,children:[{path:"paipan",loadChildren:"../paipan/paipan.module#PaipanPageModule"},{path:"recordes/:id",loadChildren:"../recordes/recordes.module#RecordesPageModule"},{path:"nodes",loadChildren:"../nodes/nodes.module#NodesPageModule"},{path:"forum",loadChildren:"../../forum/forum/forum.module#ForumPageModule"},{path:"topiclist/:forumid",loadChildren:"../../forum/topiclist/topiclist.module#TopiclistPageModule"},{path:"topicdetail/:forumid/:topicid",loadChildren:"../../forum/topicviewer/topicviewer.module#TopicviewerPageModule"},{path:"topicpanfu/:arg",loadChildren:"../../forum/panfuviewer/panfuviewer.module#PanfuviewerPageModule"},{path:"messagelist/:naviback",loadChildren:"../../forum/messagelist/messagelist.module#MessagelistPageModule"},{path:"user",loadChildren:"../../user/userprofil/userprofil.module#UserprofilPageModule"},{path:"searchuser",loadChildren:"../../user/searchuser/searchuser.module#SearchuserPageModule"},{path:"setting",loadChildren:"../setting/setting.module#SettingPageModule"},{path:"recordview/:nodeid/:recid",loadChildren:"../recordviewer/recordviewer.module#RecordviewerPageModule"}]}];let f=(()=>{class e{}return e.\u0275mod=h.Ub({type:e}),e.\u0275inj=h.Tb({factory:function(t){return new(t||e)},imports:[[i.b,r.a,n.Z,o.i.forChild(m)]]}),e})()},PKx9:function(e,t,s){"use strict";var i=s("mrSG"),r=s("LTmD"),o=s("lEof");s("aGhr");class n{constructor(){this.topics=[]}Reset(){this.topics=[]}GetPage(e,t=0){const s=this.topics.find(s=>s.forumid===e&&t===s.page);return s?{data:s.items,sum:s.sum}:null}SetPage(e,t,s,i){const r=this.topics.find(s=>s.forumid===e&&t===s.page);r?r.items=s:this.topics.push({forumid:e,page:t,items:s,sum:i})}GetTopic(e){for(const t of this.topics){const s=t.items.find(t=>t.id===e);if(s)return s}return null}SetTopic(e,t){const s=this.GetPage(t,0);s?s.data.insert(0,e):this.SetPage(t,0,[e],1)}DeleteTopic(e,t){if(t);else for(const s of this.topics)s.items.find(t=>t.id===e)&&(s.items=s.items.filter(t=>t.id!==e))}UpdateTopic(e){const t=this.GetTopic(e.id);if(t)for(let s in e)t[s]=e[s]}}var u=s("Y6BA"),a=(s("0eVs"),s("fXoL"));s.d(t,"a",(function(){return c}));let c=(()=>{class e{constructor(e,t){this.settings=e,this.host=t,this.vusers=[],this.currentTopics=[],this.ForumMG=new n,this.user=this.settings.User||u.a}get VUsers(){return this.vusers=this.vusers||[],this.vusers=this.vusers.filter(e=>!!e)||[],this.vusers}set VUsers(e){this.vusers=e||[]}ForumList(e=!1){return Object(i.b)(this,void 0,void 0,(function*(){return this.ForumMG.Forumlist&&!1===e?Promise.resolve(this.ForumMG.Forumlist):(yield this.settings.WaitInit(),this.user=this.settings.User||u.a,this.LoadForumList())}))}LoadTopicList(e,t,s){return Object(i.b)(this,void 0,void 0,(function*(){let i=e||"forum_"+s;i=-2===s?e+"good":i;const r=-1===s?s:t,o=this.ForumMG.GetPage(i,r);if(o)return Promise.resolve(o);const n={func:"TopicList",forumid:e,params:{filter:{},startColumn:20*t,private:!1}};return-1===s?n.params.filter.top=1:-2===s?n.params.filter.good=!0:-3===s?(n.params.filter.author=this.user.id,n.params.filter.topic=null):-4===s?(n.params.filter.author=this.user.id,n.params.filter.topic=null,n.params.private=!0):-5===s?(n.params.filter.forumid=this.user.id,n.params.filter.topic=null,n.params.private=!0):n.params.filter.top=0,e&&(n.params.filter.forumid=e),this.host.ForumRequest(this.user.id,this.user.password,n).then(e=>(e&&e.data&&this.ForumMG.SetPage(i,r,e.data,e.sum),e)).catch(e=>Promise.reject(e))}))}LoadAnswerList(e,t,s){return Object(i.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.user.id,this.user.password,{func:"TopicList",forumid:t,params:{filter:{topic:e},sort:"created",startColumn:20*s,direction:1}}).then(e=>e).catch(e=>Promise.reject(e))}))}NewTopic(e,t){return Object(i.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.user.id,this.user.password,{func:"NewTopic",forumid:e,params:t}).then(e=>e).catch(e=>Promise.reject(e))}))}GetTopic(e,t){return Object(i.b)(this,void 0,void 0,(function*(){const e=this.ForumMG.GetTopic(t);if(e)return Promise.resolve(e);Promise.reject("????")}))}UpdatForum(e,t){return Object(i.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.user.id,this.user.password,{func:"UpdateForum",params:{id:t,data:e}}).then(e=>e).catch(e=>(console.log("updat failed",e),Promise.reject(e)))}))}UpdateTopic(e,t,s){return Object(i.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.user.id,this.user.password,{func:"Update",params:{id:t,private:s,data:e}}).then(e=>e).catch(e=>(console.log("updat failed",e),Promise.reject(e)))}))}GetUserInfo(e,t=-1){const s=this.VUsers.find(t=>t.id===e);if(s)return Promise.resolve(s);const i={func:"GetVUser",author:e,roller:t};return console.log("GetUserInfo",i),this.host.ForumRequest(this.user.id,this.user.password,i).then(e=>(console.log("GetUserInfo res",e),this.VUsers.push(e),e)).catch(e=>Promise.reject(e))}DeleteTopic(e,t){return this.host.ForumRequest(this.user.id,this.user.password,{func:"DeleteTopic",params:{topicid:e}}).then(s=>(this.ForumMG.DeleteTopic(e,t),s)).catch(e=>Promise.reject(e))}SendMessage(e){return this.host.ForumRequest(this.user.id,this.user.password,{func:"SendMessage",params:{message:e}}).then(e=>e).catch(e=>Promise.reject(e))}LoadMessages(e,t){return Object(i.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.user.id,this.user.password,{func:"MessageList",params:{pageindex:e,forme:t}}).then(e=>e).catch(e=>Promise.reject(e))}))}DeleteMessage(e,t){return Object(i.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.user.id,this.user.password,{func:"DeleteMessage",params:{msgid:e,todelete:t}}).then(e=>e).catch(e=>Promise.reject(e))}))}HoldPublicMessage(){return Object(i.b)(this,void 0,void 0,(function*(){return yield this.initial(),this.host.ForumRequest(this.user.id,this.user.password,{func:"HoldPublicMsg"}).then(e=>e).catch(e=>Promise.reject(e))}))}UpgradUser(e,t){return Object(i.b)(this,void 0,void 0,(function*(){return yield this.initial(),this.host.ForumRequest(this.user.id,this.user.password,{func:"UpgradeUser",params:{id:e,data:t}}).then(e=>e).catch(e=>Promise.reject(e))}))}initial(){return Object(i.b)(this,void 0,void 0,(function*(){return this.user||(yield this.settings.WaitInit(),this.user=this.settings.User),!0}))}LoadForumList(){return this.host.ForumRequest(this.user.id,this.user.password,{func:"ForumList"}).then(e=>(this.ForumMG.Forumlist=e,e)).catch(e=>Promise.reject(e))}}return e.\u0275fac=function(t){return new(t||e)(a.dc(r.a),a.dc(o.a))},e.\u0275prov=a.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},aGhr:function(e,t){}}]);