(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{HQI1:function(t,i,e){"use strict";e.d(i,"a",(function(){return u}));var c=e("c7TG"),n=e("fXoL"),o=e("ofXK");function s(t,i){if(1&t){const t=n.fc();n.ec(0,"ion-item",2),n.mc("click",(function(){n.Ac(t);const e=i.$implicit;return n.pc(2).onSelect(e.value)})),n.ec(1,"ion-text"),n.Hc(2),n.dc(),n.dc()}if(2&t){const t=i.$implicit,e=n.pc(2);n.uc("color",t.value===e.currentOption?"light":""),n.Nb(2),n.Ic(t.name)}}function a(t,i){if(1&t&&(n.ec(0,"div"),n.Fc(1,s,3,2,"ion-item",1),n.dc()),2&t){const t=n.pc();n.Nb(1),n.uc("ngForOf",t.items)}}function r(t,i){if(1&t&&n.ac(0,"ion-note",8),2&t){const t=n.pc().$implicit;n.uc("innerHtml",t.name,n.Bc)}}function d(t,i){if(1&t&&(n.ec(0,"ion-item",5),n.Fc(1,r,1,1,"ion-note",6),n.ec(2,"ion-label",7),n.ac(3,"ion-text",8),n.dc(),n.dc()),2&t){const t=i.$implicit;n.Nb(1),n.uc("ngIf",t.name),n.Nb(2),n.uc("innerHtml",t.value,n.Bc)}}function l(t,i){if(1&t&&(n.ec(0,"small"),n.ec(1,"ion-list",3),n.Fc(2,d,4,2,"ion-item",4),n.dc(),n.dc()),2&t){const t=n.pc();n.Nb(2),n.uc("ngForOf",t.items)}}let u=(()=>{class t{constructor(t){this.popoverCtrl=t,this.toselect=!0}ngOnInit(){}onSelect(t){this.popoverCtrl.dismiss(t)}}return t.\u0275fac=function(i){return new(i||t)(n.Zb(c.gb))},t.\u0275cmp=n.Tb({type:t,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],[1,"ion-no-padding"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[3,"innerHtml",4,"ngIf"],["slot","end",1,"ion-text-wrap"],[3,"innerHtml"]],template:function(t,i){1&t&&(n.Fc(0,a,2,1,"div",0),n.Fc(1,l,3,1,"small",0)),2&t&&(n.uc("ngIf",i.toselect),n.Nb(1),n.uc("ngIf",!i.toselect))},directives:[o.j,o.i,c.x,c.U,c.E,c.D,c.J],styles:[""]}),t})()},qNzN:function(t,i,e){"use strict";e.r(i);var c=e("ofXK"),n=e("3Pt+"),o=e("tyNb"),s=e("c7TG"),a=e("mrSG"),r=e("LTmD"),d=e("lEof"),l=e("PKx9"),u=e("HQI1"),h=e("8/yo"),f=e("G6JS"),m=e("Y6BA"),p=e("fXoL");function g(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-buttons",7),p.ec(1,"ion-button",14),p.mc("click",(function(){return p.Ac(t),p.pc().EditTopic(null)})),p.ac(2,"ion-icon",15),p.ec(3,"ion-text"),p.Hc(4,"\u65b0\u8d34"),p.dc(),p.dc(),p.dc()}}function b(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-button",20),p.mc("click",(function(){return p.Ac(t),p.pc(2).JinghuaTopics(-2,!0)})),p.Hc(1," [\u7cbe\u534e] "),p.dc()}}function v(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-button",17),p.mc("click",(function(){return p.Ac(t),p.pc(2).JinghuaTopics(0,!0)})),p.Hc(1," [\u9996\u9875] "),p.dc()}}function T(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-item-divider",16),p.ec(1,"ion-label",1),p.ec(2,"ion-text"),p.Hc(3,"\u7248\u4e3b\uff1a"),p.dc(),p.dc(),p.ec(4,"ion-buttons",1),p.ec(5,"ion-button",17),p.mc("click",(function(){p.Ac(t);const i=p.pc();return i.ShowUserInfo(i.Admin)})),p.Hc(6),p.dc(),p.dc(),p.ec(7,"ion-buttons",7),p.Fc(8,b,2,0,"ion-button",18),p.Fc(9,v,2,0,"ion-button",19),p.dc(),p.dc()}if(2&t){const t=p.pc();p.Nb(6),p.Ic(t.Admin),p.Nb(2),p.uc("ngIf",0===t.PageType),p.Nb(1),p.uc("ngIf",-2===t.PageType)}}function y(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-item",21),p.mc("click",(function(){p.Ac(t);const e=i.$implicit;return p.pc().Navi2Topic(e)})),p.ec(1,"ion-thumbnail",1),p.ac(2,"img",22),p.dc(),p.ec(3,"ion-label",23),p.ec(4,"ion-text"),p.Hc(5),p.dc(),p.ec(6,"ion-text",24),p.Hc(7,"[\u7f6e\u9876]"),p.dc(),p.ac(8,"br"),p.ec(9,"ion-note"),p.Hc(10),p.dc(),p.ac(11,"br"),p.ec(12,"ion-note"),p.ec(13,"small"),p.Hc(14),p.dc(),p.dc(),p.ac(15,"br"),p.ec(16,"ion-note"),p.ec(17,"small"),p.Hc(18),p.dc(),p.dc(),p.ac(19,"br"),p.ec(20,"ion-note"),p.ec(21,"small"),p.Hc(22),p.dc(),p.dc(),p.ec(23,"ion-note"),p.ec(24,"small"),p.Hc(25),p.dc(),p.dc(),p.dc(),p.dc()}if(2&t){const t=i.$implicit,e=p.pc();p.Nb(2),p.uc("src",t.avatar,p.Cc),p.Nb(3),p.Ic(t.title),p.Nb(5),p.Jc("\u4f5c\u8005\uff1a[",t.author,"]"),p.Nb(4),p.Jc("\u53d1\u5e16\u65f6\u95f4: ",e.DateText(t.created),""),p.Nb(4),p.Jc("\u56de\u5e16\u65f6\u95f4: ",e.DateText(t.update),""),p.Nb(4),p.Jc("\u56de\u5e16\u6570\u91cf: ",t.child,""),p.Nb(3),p.Jc("\u6d4f\u89c8\u6570\u91cf: ",t.view,"")}}function I(t,i){1&t&&(p.ec(0,"ion-text",24),p.Hc(1,"[\u7cbe\u534e]"),p.dc())}function x(t,i){if(1&t){const t=p.fc();p.ec(0,"ion-item",21),p.mc("click",(function(){p.Ac(t);const e=i.$implicit;return p.pc().Navi2Topic(e)})),p.ec(1,"ion-thumbnail",1),p.ac(2,"img",22),p.dc(),p.ec(3,"ion-label",23),p.ec(4,"ion-text"),p.Hc(5),p.dc(),p.Fc(6,I,2,0,"ion-text",25),p.ac(7,"br"),p.ec(8,"ion-note"),p.Hc(9),p.dc(),p.ac(10,"br"),p.ec(11,"ion-note"),p.ec(12,"small"),p.Hc(13),p.dc(),p.dc(),p.ac(14,"br"),p.ec(15,"ion-note"),p.ec(16,"small"),p.Hc(17),p.dc(),p.dc(),p.ac(18,"br"),p.ec(19,"ion-note"),p.ec(20,"small"),p.Hc(21),p.dc(),p.dc(),p.ec(22,"ion-note"),p.ec(23,"small"),p.Hc(24),p.dc(),p.dc(),p.dc(),p.dc()}if(2&t){const t=i.$implicit,e=p.pc();p.Nb(2),p.uc("src",t.avatar,p.Cc),p.Nb(3),p.Ic(t.title),p.Nb(1),p.uc("ngIf",t.good),p.Nb(3),p.Jc("\u4f5c\u8005\uff1a[",t.author,"]"),p.Nb(4),p.Jc("\u53d1\u5e16\u65f6\u95f4: ",e.DateText(t.created),""),p.Nb(4),p.Jc("\u56de\u5e16\u65f6\u95f4: ",e.DateText(t.update),""),p.Nb(4),p.Jc("\u56de\u5e16\u6570\u91cf: ",t.child,""),p.Nb(3),p.Jc("\u6d4f\u89c8\u6570\u91cf: ",t.view,"")}}function P(t,i){if(1&t&&(p.ec(0,"ion-select-option",26),p.Hc(1),p.dc()),2&t){const t=i.$implicit;p.uc("value",t),p.Nb(1),p.Jc("\u7b2c",t+1,"\u9875")}}let N=(()=>{class t{constructor(t,i,e,c,n,o,s,a){this.loadingController=t,this.settings=i,this.forumservice=e,this.host=c,this.popoverCtrl=n,this.modalCtrl=o,this.route=s,this.router=a,this.pageindex=0,this.loadfailed=!1,this.Titel="\u8bba\u575b",this.SortKey="lasttopic",this.Pages=[0],this.PageType=0,this.Topics=[],this.TTopics=[],this.route.params.subscribe(t=>{this.forumid=t.forumid})}ngOnInit(){return Object(a.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4}),this.user=this.settings.User||m.a,"forum_me"===this.forumid?(this.Titel="\u6211\u7684\u5e16\u5b50",this.PageType=-3):"forum_ticket"===this.forumid?(this.Titel="\u6211\u7684\u6c42\u52a9",this.PageType=-4):"forum_master"===this.forumid?(this.Titel="\u5411\u6211\u7684\u53d1\u95ee",this.PageType=-5):this.PageType=0,this.PageIndex=0}))}get HasUser(){return this.settings.HasUser&&this.user!==m.a}get DefaultAvatar(){return this.settings.Avatar()}get PageIndex(){return this.pageindex}set PageIndex(t){this.pageindex=t,0!==this.PageType?this.JinghuaTopics(this.PageType):this.Reconnect()}get Admin(){return this.admin}DateText(t){if(!t)return"\u65e0";const i=new Date(t);return i.toChinaStr()+` ${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}`}Reconnect(){return Object(a.b)(this,void 0,void 0,(function*(){this.loadfailed=!1,yield this.showLoading(),this.forumservice.ForumList().then(t=>(this.forum=t.find(t=>t.id===this.forumid),this.Titel=this.forum.name,this.admin=this.forum.admin.join("\u3001"),this.forumservice.LoadTopicList(this.forum.id,this.PageIndex,0))).then(t=>(this.BuildPages(t.sum),this.Topics=t.data,this.Topics.forEach(t=>t.avatar=this.DefaultAvatar),this.updateUserAvatar(this.Topics),this.forumservice.LoadTopicList(this.forum.id,0,-1))).then(t=>{this.TTopics=t.data,this.TTopics.forEach(t=>t.avatar=this.DefaultAvatar),this.updateUserAvatar(this.TTopics)}).catch(t=>{this.loadfailed=!0}).finally(()=>{this.closeLoading()})}))}JinghuaTopics(t,i=!1){return Object(a.b)(this,void 0,void 0,(function*(){i&&(this.pageindex=0,this.PageType=t),t<0?(yield this.showLoading(),this.forumservice.LoadTopicList(t<-2?null:this.forumid,this.PageIndex,t).then(t=>{this.BuildPages(t.sum),this.Topics=t.data,this.Topics.forEach(t=>t.avatar=this.DefaultAvatar),this.updateUserAvatar(this.Topics)}).finally(()=>{this.closeLoading()})):this.Reconnect()}))}Navi2Topic(t){let i=t.forumid;i="forum_ticket"===this.forumid?"\u6c42\u52a9\uff1a"+i:i,i="forum_master"===this.forumid?"\u89e3\u7b54\u5ba2\u6237":i,this.router.navigateByUrl(`menu/topicdetail/${i}/${t.id}`)}updateUserAvatar(t){t.forEach(t=>{t.avatar&&t.avatar!==this.DefaultAvatar||this.forumservice.GetUserInfo(t.author).then(i=>{const e=(i||m.a).avatar||"";t.avatar=e.IsNullOrEmpty()?this.settings.Avatar(i.gender):e,t.showImg=!0})})}sortOptions(t){return Object(a.b)(this,void 0,void 0,(function*(){const i=yield this.popoverCtrl.create({component:u.a,event:t,componentProps:{items:[{name:"\u521b\u5efa\u65f6\u95f4",value:"created"},{name:"\u4fee\u6539\u65f6\u95f4",value:"modified"}],currentOption:this.SortKey},translucent:!0});yield i.present();const{data:e}=yield i.onDidDismiss();(e||this.SortKey)!==this.SortKey&&(this.SortKey=e.toString())}))}EditTopic(t){return Object(a.b)(this,void 0,void 0,(function*(){const i=yield this.modalCtrl.create({component:h.a,componentProps:{MainTopic:t||this.CreateMainTopic(),forumid:this.forumid,forumname:this.forum.name}});yield i.present();const{data:e}=yield i.onWillDismiss();e&&this.AddToLocal(e)}))}ShowUserInfo(t){return Object(a.b)(this,void 0,void 0,(function*(){const i=yield this.modalCtrl.create({component:f.a,componentProps:{Uerid:t}});yield i.present(),yield i.onWillDismiss()}))}GoPage(t){console.log("change page",t)}AddToLocal(t){t.avatar=this.settings.User.avatar,t.forumid===this.forumid&&this.forumservice.ForumMG.SetTopic(t,t.forumid)}CreateMainTopic(){const t=this.settings.User,i=Date.now();return{id:"",created:i,modified:i,author:t.id,forumid:this.forumid,title:"",top:0,good:!1,update:0,gua:null,bazi:null,img:null,content:"",frozen:!1,deleted:!1,child:0,view:0}}showLoading(){return Object(a.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(a.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}BuildPages(t){if(0!==this.PageIndex)return;if(0===t)return void(this.Pages=[0]);this.Pages=[];const i=Math.ceil(t/20);for(let e=0;e<i;e++)this.Pages.push(e)}}return t.\u0275fac=function(i){return new(i||t)(p.Zb(s.cb),p.Zb(r.a),p.Zb(l.a),p.Zb(d.a),p.Zb(s.gb),p.Zb(s.db),p.Zb(o.a),p.Zb(o.g))},t.\u0275cmp=p.Tb({type:t,selectors:[["app-topiclist"]],decls:22,vars:9,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end",4,"ngIf"],["ion-no-padding",""],["ion-no-padding","","slot","fixed",4,"ngIf"],["detail","",3,"click",4,"ngFor","ngForOf"],["slot","end"],[3,"disabled","click"],["name","arrow-back"],["cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"small",3,"disabled","click"],["name","arrow-forward"],["size","small",3,"click"],["slot","icon-only","name","add"],["ion-no-padding","","slot","fixed"],["color","primary",3,"click"],["color","danger",3,"click",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["color","danger",3,"click"],["detail","",3,"click"],[3,"src"],[1,"ion-text-wrap"],["color","danger"],["color","danger",4,"ngIf"],[3,"value"]],template:function(t,i){1&t&&(p.ec(0,"ion-header"),p.ec(1,"ion-toolbar",0),p.ec(2,"ion-buttons",1),p.ac(3,"ion-back-button",2),p.dc(),p.ec(4,"ion-title"),p.Hc(5),p.dc(),p.Fc(6,g,5,0,"ion-buttons",3),p.dc(),p.dc(),p.ec(7,"ion-content"),p.ec(8,"ion-list",4),p.Fc(9,T,10,3,"ion-item-divider",5),p.Fc(10,y,26,7,"ion-item",6),p.Fc(11,x,25,8,"ion-item",6),p.dc(),p.dc(),p.ec(12,"ion-footer"),p.ec(13,"small"),p.ec(14,"ion-toolbar"),p.ec(15,"ion-buttons",7),p.ec(16,"ion-button",8),p.mc("click",(function(){return i.PageIndex=i.PageIndex-1})),p.ac(17,"ion-icon",9),p.dc(),p.ec(18,"ion-select",10),p.mc("ngModelChange",(function(t){return i.PageIndex=t})),p.Fc(19,P,2,2,"ion-select-option",11),p.dc(),p.ec(20,"ion-button",12),p.mc("click",(function(){return i.PageIndex=i.PageIndex+1})),p.ac(21,"ion-icon",13),p.dc(),p.dc(),p.dc(),p.dc(),p.dc()),2&t&&(p.Nb(5),p.Jc(": ",i.Titel," :"),p.Nb(1),p.uc("ngIf",i.PageType>=-2&&i.HasUser),p.Nb(3),p.uc("ngIf",i.PageType>=-2),p.Nb(1),p.uc("ngForOf",i.TTopics),p.Nb(1),p.uc("ngForOf",i.Topics),p.Nb(5),p.uc("disabled",0===i.PageIndex),p.Nb(2),p.uc("ngModel",i.PageIndex),p.Nb(1),p.uc("ngForOf",i.Pages),p.Nb(1),p.uc("disabled",i.PageIndex===i.Pages.length-1))},directives:[s.t,s.Z,s.j,s.f,s.g,s.X,c.j,s.n,s.E,c.i,s.r,s.i,s.u,s.Q,s.ib,n.f,n.g,s.U,s.y,s.D,s.x,s.W,s.J,s.R],styles:[""]}),t})();var w=e("Gfuc"),H=e("9UMr");e.d(i,"TopiclistPageModule",(function(){return k}));const F=[{path:"",component:N}];let k=(()=>{class t{}return t.\u0275mod=p.Xb({type:t}),t.\u0275inj=p.Wb({factory:function(i){return new(i||t)},imports:[[w.a,H.a,c.b,n.c,s.ab,o.i.forChild(F)]]}),t})()}}]);