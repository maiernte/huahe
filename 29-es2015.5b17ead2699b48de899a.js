(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{HQI1:function(t,i,e){"use strict";e.d(i,"a",(function(){return u}));var c=e("c7TG"),o=e("fXoL"),n=e("ofXK");function s(t,i){if(1&t){const t=o.fc();o.ec(0,"ion-item",3),o.mc("click",(function(){o.Ac(t);const e=i.$implicit;return o.pc(2).onSelect(e.value)})),o.ec(1,"ion-text"),o.Hc(2),o.dc(),o.dc()}if(2&t){const t=i.$implicit,e=o.pc(2);o.uc("color",t.value===e.currentOption?"light":""),o.Nb(2),o.Ic(t.name)}}function a(t,i){if(1&t&&(o.ec(0,"div"),o.Fc(1,s,3,2,"ion-item",2),o.dc()),2&t){const t=o.pc();o.Nb(1),o.uc("ngForOf",t.items)}}function r(t,i){if(1&t&&(o.ec(0,"ion-note"),o.ec(1,"small"),o.Hc(2),o.dc(),o.dc()),2&t){const t=o.pc().$implicit;o.Nb(2),o.Ic(t.name)}}function d(t,i){if(1&t&&(o.ec(0,"ion-item",6),o.Fc(1,r,3,1,"ion-note",0),o.ec(2,"ion-label",7),o.ec(3,"small"),o.ac(4,"ion-text",8),o.dc(),o.dc(),o.dc()),2&t){const t=i.$implicit;o.Nb(1),o.uc("ngIf",t.name),o.Nb(3),o.uc("innerHtml",t.value,o.Bc)}}function l(t,i){if(1&t&&(o.ec(0,"ion-list",4),o.Fc(1,d,5,2,"ion-item",5),o.dc()),2&t){const t=o.pc();o.Nb(1),o.uc("ngForOf",t.items)}}let u=(()=>{class t{constructor(t){this.popoverCtrl=t,this.toselect=!0}ngOnInit(){}onSelect(t){this.popoverCtrl.dismiss(t)}}return t.\u0275fac=function(i){return new(i||t)(o.Zb(c.ib))},t.\u0275cmp=o.Tb({type:t,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["class","ion-no-padding",4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],[1,"ion-no-padding"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","end",1,"ion-text-wrap"],[3,"innerHtml"]],template:function(t,i){1&t&&(o.Fc(0,a,2,1,"div",0),o.Fc(1,l,2,1,"ion-list",1)),2&t&&(o.uc("ngIf",i.toselect),o.Nb(1),o.uc("ngIf",!i.toselect))},directives:[n.j,n.i,c.x,c.W,c.E,c.D,c.J],styles:[""]}),t})()},qNzN:function(t,i,e){"use strict";e.r(i);var c=e("ofXK"),o=e("3Pt+"),n=e("tyNb"),s=e("c7TG"),a=e("mrSG"),r=e("LTmD"),d=e("lEof"),l=e("PKx9"),u=e("HQI1"),h=e("8/yo"),f=e("G6JS"),m=e("Y6BA"),p=e("fXoL"),g=e("i/bi");function b(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-buttons",9),p.ec(1,"ion-button",10),p.mc("click",(function(){return p.Ac(t),p.pc().EditTopic(null)})),p.ac(2,"ion-icon",11),p.ec(3,"ion-text"),p.Hc(4,"\u65b0\u8d34"),p.dc(),p.dc(),p.dc()}}function v(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-button",16),p.mc("click",(function(){return p.Ac(t),p.pc(2).JinghuaTopics(-2,!0)})),p.Hc(1," [\u7cbe\u534e] "),p.dc()}}function T(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-button",13),p.mc("click",(function(){return p.Ac(t),p.pc(2).JinghuaTopics(0,!0)})),p.Hc(1," [\u9996\u9875] "),p.dc()}}function y(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-item-divider",12),p.ec(1,"ion-label",1),p.ec(2,"ion-text"),p.Hc(3,"\u7248\u4e3b\uff1a"),p.dc(),p.dc(),p.ec(4,"ion-buttons",1),p.ec(5,"ion-button",13),p.mc("click",(function(){p.Ac(t);const i=p.pc();return i.ShowUserInfo(i.Admin)})),p.Hc(6),p.dc(),p.dc(),p.ec(7,"ion-buttons",9),p.Fc(8,v,2,0,"ion-button",14),p.Fc(9,T,2,0,"ion-button",15),p.dc(),p.dc()}if(2&t){const t=p.pc();p.Nb(6),p.Ic(t.Admin),p.Nb(2),p.uc("ngIf",0===t.PageType),p.Nb(1),p.uc("ngIf",-2===t.PageType)}}function N(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-item",17),p.mc("click",(function(){p.Ac(t);const e=i.$implicit;return p.pc().Navi2Topic(e)})),p.ec(1,"ion-thumbnail",1),p.ac(2,"img",18),p.dc(),p.ec(3,"ion-label",19),p.ec(4,"ion-text"),p.Hc(5),p.dc(),p.ec(6,"ion-text",20),p.Hc(7,"[\u7f6e\u9876]"),p.dc(),p.ac(8,"br"),p.ec(9,"ion-note"),p.Hc(10),p.dc(),p.ac(11,"br"),p.ec(12,"ion-note"),p.ec(13,"small"),p.Hc(14),p.dc(),p.dc(),p.ac(15,"br"),p.ec(16,"ion-note"),p.ec(17,"small"),p.Hc(18),p.dc(),p.dc(),p.ac(19,"br"),p.ec(20,"ion-note"),p.ec(21,"small"),p.Hc(22),p.dc(),p.dc(),p.ec(23,"ion-note"),p.ec(24,"small"),p.Hc(25),p.dc(),p.dc(),p.dc(),p.dc()}if(2&t){const t=i.$implicit,e=p.pc();p.Nb(2),p.uc("src",t.avatar,p.Cc),p.Nb(3),p.Ic(t.title),p.Nb(5),p.Jc("\u4f5c\u8005\uff1a[",t.author,"]"),p.Nb(4),p.Jc("\u53d1\u5e16\u65f6\u95f4: ",e.DateText(t.created),""),p.Nb(4),p.Jc("\u56de\u5e16\u65f6\u95f4: ",e.DateText(t.update),""),p.Nb(4),p.Jc("\u56de\u5e16\u6570\u91cf: ",t.child,""),p.Nb(3),p.Jc("\u6d4f\u89c8\u6570\u91cf: ",t.view,"")}}function I(t,i){1&t&&(p.ec(0,"ion-text",20),p.Hc(1,"[\u7cbe\u534e]"),p.dc())}function x(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-item",17),p.mc("click",(function(){p.Ac(t);const e=i.$implicit;return p.pc().Navi2Topic(e)})),p.ec(1,"ion-thumbnail",1),p.ac(2,"img",18),p.dc(),p.ec(3,"ion-label",19),p.ec(4,"ion-text"),p.Hc(5),p.dc(),p.Fc(6,I,2,0,"ion-text",21),p.ac(7,"br"),p.ec(8,"ion-note"),p.Hc(9),p.dc(),p.ac(10,"br"),p.ec(11,"ion-note"),p.ec(12,"small"),p.Hc(13),p.dc(),p.dc(),p.ac(14,"br"),p.ec(15,"ion-note"),p.ec(16,"small"),p.Hc(17),p.dc(),p.dc(),p.ac(18,"br"),p.ec(19,"ion-note"),p.ec(20,"small"),p.Hc(21),p.dc(),p.dc(),p.ec(22,"ion-note"),p.ec(23,"small"),p.Hc(24),p.dc(),p.dc(),p.dc(),p.dc()}if(2&t){const t=i.$implicit,e=p.pc();p.Nb(2),p.uc("src",t.avatar,p.Cc),p.Nb(3),p.Ic(t.title),p.Nb(1),p.uc("ngIf",t.good),p.Nb(3),p.Jc("\u4f5c\u8005\uff1a[",t.author,"]"),p.Nb(4),p.Jc("\u53d1\u5e16\u65f6\u95f4: ",e.DateText(t.created),""),p.Nb(4),p.Jc("\u56de\u5e16\u65f6\u95f4: ",e.DateText(t.update),""),p.Nb(4),p.Jc("\u56de\u5e16\u6570\u91cf: ",t.child,""),p.Nb(3),p.Jc("\u6d4f\u89c8\u6570\u91cf: ",t.view,"")}}function P(t,i){if(1&t){const t=p.fc();p.ec(0,"div",22),p.ec(1,"sui-pagination",23),p.mc("pageChange",(function(i){return p.Ac(t),p.pc().PageIndex=i})),p.dc(),p.dc()}if(2&t){const t=p.pc();p.Nb(1),p.uc("collectionSize",t.PageSum)("pageSize",20)("maxSize",t.MaxPageButtons)("hasNavigationLinks",!0)("hasBoundaryLinks",!0)("page",t.PageIndex)}}let w=(()=>{class t{constructor(t,i,e,c,o,n,s,a){this.loadingController=t,this.settings=i,this.forumservice=e,this.host=c,this.popoverCtrl=o,this.modalCtrl=n,this.route=s,this.router=a,this.pageindex=0,this.loadfailed=!0,this.Titel="\u8bba\u575b",this.SortKey="lasttopic",this.Pages=[0],this.PageType=0,this.PageSum=0,this.Topics=[],this.TTopics=[],this.route.params.subscribe(t=>{this.forumid=t.forumid})}ngOnInit(){return Object(a.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4}),this.user=this.settings.User||m.a,"forum_me"===this.forumid?(this.Titel="\u6211\u7684\u5e16\u5b50",this.PageType=-3):"forum_ticket"===this.forumid?(this.Titel="\u6211\u7684\u6c42\u52a9",this.PageType=-4):"forum_master"===this.forumid?(this.Titel="\u5411\u6211\u7684\u53d1\u95ee",this.PageType=-5):this.PageType=0,this.PageIndex=0}))}get HasUser(){return this.settings.HasUser&&this.user!==m.a}get MaxPageButtons(){return this.settings.DeviceWidth>=400?7:2}get DefaultAvatar(){return this.settings.Avatar()}get PageIndex(){return this.pageindex}set PageIndex(t){this.pageindex=t,0!==this.PageType?this.JinghuaTopics(this.PageType):this.Reconnect().then(t=>{this.loadfailed=!t})}get Admin(){return this.admin}DateText(t){if(!t)return"\u65e0";const i=new Date(t);return i.toChinaStr()+` ${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}`}doRefresh(t){this.Reconnect().then(t=>{this.loadfailed=!t}).catch(t=>{console.log(t)}).finally(()=>{t.target.complete()})}Reconnect(){return Object(a.b)(this,void 0,void 0,(function*(){return yield this.showLoading(),this.forumservice.ForumList().then(t=>(this.forum=t.find(t=>t.id===this.forumid),this.Titel=this.forum.name,this.admin=this.forum.admin.join("\u3001"),this.forumservice.LoadTopicList(this.forum.id,this.PageIndex,0))).then(t=>(this.PageSum=t.sum,this.Topics=t.data,this.Topics.forEach(t=>t.avatar=this.DefaultAvatar),this.updateUserAvatar(this.Topics),this.forumservice.LoadTopicList(this.forum.id,0,-1))).then(t=>(this.TTopics=t.data,this.TTopics.forEach(t=>t.avatar=this.DefaultAvatar),this.updateUserAvatar(this.TTopics),!0)).catch(t=>!1).finally(()=>{this.closeLoading()})}))}JinghuaTopics(t,i=!1){return Object(a.b)(this,void 0,void 0,(function*(){i&&(this.pageindex=0,this.PageType=t),t<0?(yield this.showLoading(),this.forumservice.LoadTopicList(t<-2?null:this.forumid,this.PageIndex,t).then(t=>{this.PageSum=t.sum,this.Topics=t.data,this.Topics.forEach(t=>t.avatar=this.DefaultAvatar),this.updateUserAvatar(this.Topics),this.loadfailed=!1}).finally(()=>{this.closeLoading()})):this.Reconnect()}))}Navi2Topic(t){let i=t.forumid;i="forum_ticket"===this.forumid?"\u6c42\u52a9\uff1a"+i:i,i="forum_master"===this.forumid?"\u89e3\u7b54\u5ba2\u6237":i,this.router.navigateByUrl(`menu/topicdetail/${i}/${t.id}`)}updateUserAvatar(t){t.forEach(t=>{t.avatar&&t.avatar!==this.DefaultAvatar||this.forumservice.GetUserInfo(t.author).then(i=>{const e=(i||m.a).avatar||"";t.avatar=e.IsNullOrEmpty()?this.settings.Avatar(i.gender):e,t.showImg=!0,t.showGua=!0,t.showBazi=!0})})}sortOptions(t){return Object(a.b)(this,void 0,void 0,(function*(){const i=yield this.popoverCtrl.create({component:u.a,event:t,componentProps:{items:[{name:"\u521b\u5efa\u65f6\u95f4",value:"created"},{name:"\u4fee\u6539\u65f6\u95f4",value:"modified"}],currentOption:this.SortKey},translucent:!0});yield i.present();const{data:e}=yield i.onDidDismiss();(e||this.SortKey)!==this.SortKey&&(this.SortKey=e.toString())}))}EditTopic(t){return Object(a.b)(this,void 0,void 0,(function*(){const i=yield this.modalCtrl.create({component:h.a,componentProps:{MainTopic:t||this.CreateMainTopic(),forumid:this.forumid,forumname:this.forum.name}});yield i.present();const{data:e}=yield i.onWillDismiss();e&&this.AddToLocal(e)}))}ShowUserInfo(t){return Object(a.b)(this,void 0,void 0,(function*(){const i=yield this.modalCtrl.create({component:f.a,componentProps:{Uerid:t}});yield i.present(),yield i.onWillDismiss()}))}GoPage(t){console.log("change page",t)}AddToLocal(t){t.avatar=this.settings.User.avatar,t.forumid===this.forumid&&this.forumservice.ForumMG.SetTopic(t,t.forumid)}CreateMainTopic(){const t=this.settings.User,i=Date.now();return{id:"",created:i,modified:i,author:t.id,forumid:this.forumid,title:"",top:0,good:!1,update:0,gua:null,bazi:null,img:null,content:"",frozen:!1,deleted:!1,child:0,view:0}}showLoading(){return Object(a.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(a.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return t.\u0275fac=function(i){return new(i||t)(p.Zb(s.eb),p.Zb(r.a),p.Zb(l.a),p.Zb(d.a),p.Zb(s.ib),p.Zb(s.fb),p.Zb(n.a),p.Zb(n.g))},t.\u0275cmp=p.Tb({type:t,selectors:[["app-topiclist"]],decls:15,vars:6,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end",4,"ngIf"],["slot","fixed",3,"ionRefresh"],["ion-no-padding",""],["ion-no-padding","","slot","fixed",4,"ngIf"],["detail","",3,"click",4,"ngFor","ngForOf"],["class","ui very basic segment",4,"ngIf"],["slot","end"],["size","small",3,"click"],["slot","icon-only","name","add"],["ion-no-padding","","slot","fixed"],["color","primary",3,"click"],["color","danger",3,"click",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["color","danger",3,"click"],["detail","",3,"click"],[3,"src"],[1,"ion-text-wrap"],["color","danger"],["color","danger",4,"ngIf"],[1,"ui","very","basic","segment"],[1,"ui","right","floated",3,"collectionSize","pageSize","maxSize","hasNavigationLinks","hasBoundaryLinks","page","pageChange"]],template:function(t,i){1&t&&(p.ec(0,"ion-header"),p.ec(1,"ion-toolbar",0),p.ec(2,"ion-buttons",1),p.ac(3,"ion-back-button",2),p.dc(),p.ec(4,"ion-title"),p.Hc(5),p.dc(),p.Fc(6,b,5,0,"ion-buttons",3),p.dc(),p.dc(),p.ec(7,"ion-content"),p.ec(8,"ion-refresher",4),p.mc("ionRefresh",(function(t){return i.doRefresh(t)})),p.ac(9,"ion-refresher-content"),p.dc(),p.ec(10,"ion-list",5),p.Fc(11,y,10,3,"ion-item-divider",6),p.Fc(12,N,26,7,"ion-item",7),p.Fc(13,x,25,8,"ion-item",7),p.Fc(14,P,2,6,"div",8),p.dc(),p.dc()),2&t&&(p.Nb(5),p.Jc(": ",i.Titel," :"),p.Nb(1),p.uc("ngIf",i.PageType>=-2&&i.HasUser),p.Nb(5),p.uc("ngIf",i.PageType>=-2),p.Nb(1),p.uc("ngForOf",i.TTopics),p.Nb(1),p.uc("ngForOf",i.Topics),p.Nb(1),p.uc("ngIf",!i.loadfailed))},directives:[s.t,s.bb,s.j,s.f,s.g,s.Z,c.j,s.n,s.L,s.M,s.E,c.i,s.i,s.u,s.W,s.y,s.D,s.x,s.Y,s.J,g.f],styles:[""]}),t})();var H=e("Gfuc"),k=e("9UMr");e.d(i,"TopiclistPageModule",(function(){return F}));const A=[{path:"",component:w}];let F=(()=>{class t{}return t.\u0275mod=p.Xb({type:t}),t.\u0275inj=p.Wb({factory:function(i){return new(i||t)},imports:[[H.a,k.a,c.b,g.e,o.c,s.cb,n.i.forChild(A)]]}),t})()}}]);