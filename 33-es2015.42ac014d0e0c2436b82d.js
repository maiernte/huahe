(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{J4mY:function(i,o,t){"use strict";t.r(o);var n=t("ofXK"),c=t("3Pt+"),e=t("tyNb"),r=t("c7TG"),s=t("mrSG"),a=t("LTmD"),b=t("PKx9"),l=t("8/yo"),u=t("Y6BA"),f=t("G6JS"),h=t("fXoL");let d=(()=>{class i{constructor(i){this.modalCtrl=i}ngOnInit(){}onClose(){this.modalCtrl.dismiss()}}return i.\u0275fac=function(o){return new(o||i)(h.Wb(r.db))},i.\u0275cmp=h.Qb({type:i,selectors:[["app-imgmodal"]],inputs:{ImgSrc:"ImgSrc"},decls:7,vars:1,consts:[["vertical","top=","horizontal","end","slot","fixed",3,"click"],["name","close"],[1,"frame",2,"background-color","black"],[1,"helper"],[3,"src"]],template:function(i,o){1&i&&(h.Zb(0,"ion-content"),h.Zb(1,"ion-fab",0),h.hc("click",(function(){return o.onClose()})),h.Zb(2,"ion-fab-button"),h.Xb(3,"ion-icon",1),h.Yb(),h.Yb(),h.Zb(4,"div",2),h.Xb(5,"span",3),h.Xb(6,"img",4),h.Yb(),h.Yb()),2&i&&(h.Mb(6),h.oc("src",o.ImgSrc,h.tc))},directives:[r.n,r.p,r.q,r.u],styles:[".frame[_ngcontent-%COMP%]{height:100%;width:100%;white-space:nowrap;text-align:center;margin:1em 0}.helper[_ngcontent-%COMP%]{display:inline-block;height:100%}.helper[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{vertical-align:middle}img[_ngcontent-%COMP%]{background:#3a6f9a}"]}),i})();var g=t("ylIl"),m=t("gTpY");function p(i,o){1&i&&(h.Zb(0,"ion-text",26),h.xc(1,"[\u7cbe\u534e]"),h.Yb())}function x(i,o){1&i&&(h.Zb(0,"ion-text",26),h.xc(1,"[\u7f6e\u9876]"),h.Yb())}function T(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-item"),h.Zb(1,"ion-thumbnail",1),h.Xb(2,"img",27),h.Yb(),h.Zb(3,"ion-label",17),h.Zb(4,"ion-text",28),h.hc("click",(function(){h.rc(i);const o=h.jc();return o.ShowUserInfo(o.Topic.author)})),h.xc(5),h.Yb(),h.Xb(6,"br"),h.Zb(7,"ion-note"),h.Zb(8,"small"),h.xc(9),h.Yb(),h.Yb(),h.Xb(10,"br"),h.Zb(11,"ion-note"),h.Zb(12,"small"),h.xc(13),h.Yb(),h.Yb(),h.Xb(14,"br"),h.Yb(),h.Yb()}if(2&i){const i=h.jc();h.Mb(2),h.oc("src",i.Topic.avatar,h.tc),h.Mb(3),h.zc("\u4f5c\u8005\uff1a",i.Topic.author,""),h.Mb(4),h.zc("\u53d1\u5e16\u65f6\u95f4: ",i.DateText(i.Topic.created),""),h.Mb(4),h.zc("\u4fee\u6539\u65f6\u95f4: ",i.DateText(i.Topic.modified),"")}}function w(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",33),h.hc("click",(function(){return h.rc(i),h.jc(2).AnswerTopic(null)})),h.xc(1,"[\u56de\u590d]"),h.Yb()}}function M(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",33),h.hc("click",(function(){h.rc(i);const o=h.jc(2);return o.EditTopic(o.Topic)})),h.xc(1,"[\u4fee\u6539]"),h.Yb()}}function Y(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",33),h.hc("click",(function(){h.rc(i);const o=h.jc(2);return o.DeleteTopic(o.Topic.id,!0)})),h.xc(1,"[\u5220\u9664]"),h.Yb()}}function Z(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",33),h.hc("click",(function(){h.rc(i);const o=h.jc(2);return o.FrozenTopic(o.Topic)})),h.xc(1,"[\u5c01\u5b58]"),h.Yb()}}function v(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",34),h.hc("click",(function(){h.rc(i);const o=h.jc(2);return o.ChangeShowModel(o.Topic,"gua")})),h.xc(1,"[\u5366\u76d8]"),h.Yb()}}function I(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",34),h.hc("click",(function(){h.rc(i);const o=h.jc(2);return o.ChangeShowModel(o.Topic,"bazi")})),h.xc(1,"[\u547d\u76d8]"),h.Yb()}}function k(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",34),h.hc("click",(function(){h.rc(i);const o=h.jc(2);return o.ChangeShowModel(o.Topic,"img")})),h.xc(1,"[\u56fe\u7247]"),h.Yb()}}function C(i,o){if(1&i&&(h.Zb(0,"ion-item",29),h.Zb(1,"small"),h.Zb(2,"ion-label",17),h.Zb(3,"ion-text",30),h.xc(4,"0 \u697c"),h.Yb(),h.wc(5,w,2,0,"ion-text",31),h.wc(6,M,2,0,"ion-text",31),h.wc(7,Y,2,0,"ion-text",31),h.wc(8,Z,2,0,"ion-text",31),h.wc(9,v,2,0,"ion-text",32),h.wc(10,I,2,0,"ion-text",32),h.wc(11,k,2,0,"ion-text",32),h.Yb(),h.Yb(),h.Yb()),2&i){const i=h.jc();h.Mb(5),h.oc("ngIf",i.CheckAction(i.Topic,"anwser")),h.Mb(1),h.oc("ngIf",i.CheckAction(i.Topic,"modify")),h.Mb(1),h.oc("ngIf",i.CheckAction(i.Topic,"delete")),h.Mb(1),h.oc("ngIf",i.CheckAction(i.Topic,"frozen")),h.Mb(1),h.oc("ngIf",i.Topic.gua),h.Mb(1),h.oc("ngIf",i.Topic.bazi),h.Mb(1),h.oc("ngIf",i.Topic.img)}}const j=function(i){return{"max-height.px":i}};function z(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-item",35),h.hc("click",(function(){h.rc(i);const o=h.jc();return o.ShowImageModal(o.Topic.img)})),h.Zb(1,"div",36),h.Xb(2,"img",37),h.Yb(),h.Yb()}if(2&i){const i=h.jc();h.Mb(2),h.oc("src",i.Topic.img,h.tc)("ngStyle",h.pc(2,j,i.MaxHeight))}}function y(i,o){if(1&i&&(h.Zb(0,"ion-item",16),h.Xb(1,"app-guaview",38),h.Yb()),2&i){const i=h.jc();h.Mb(1),h.oc("Config",i.GuaConfig)("GuaText",i.Topic.gua)}}function S(i,o){if(1&i&&(h.Zb(0,"ion-item",16),h.Xb(1,"app-baziview",39),h.Yb()),2&i){const i=h.jc();h.Mb(1),h.oc("Config",i.BaziConfig)("BaziText",i.Topic.bazi)}}function P(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",33),h.hc("click",(function(){h.rc(i);const o=h.jc().$implicit;return h.jc().AnswerTopic(o)})),h.xc(1,"[\u56de\u590d]"),h.Yb()}}function O(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",33),h.hc("click",(function(){h.rc(i);const o=h.jc().$implicit;return h.jc().EditTopic(o)})),h.xc(1,"[\u4fee\u6539]"),h.Yb()}}function A(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",33),h.hc("click",(function(){h.rc(i);const o=h.jc().$implicit;return h.jc().DeleteTopic(o.id,!1)})),h.xc(1,"[\u5220\u9664]"),h.Yb()}}function X(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",33),h.hc("click",(function(){h.rc(i);const o=h.jc().$implicit;return h.jc().FrozenTopic(o)})),h.xc(1,"[\u5c01\u5b58]"),h.Yb()}}function G(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",34),h.hc("click",(function(){h.rc(i);const o=h.jc().$implicit;return h.jc().ChangeShowModel(o,"gua")})),h.xc(1,"[\u5366\u76d8]"),h.Yb()}}function D(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",34),h.hc("click",(function(){h.rc(i);const o=h.jc().$implicit;return h.jc().ChangeShowModel(o,"bazi")})),h.xc(1,"[\u547d\u76d8]"),h.Yb()}}function $(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-text",34),h.hc("click",(function(){h.rc(i);const o=h.jc().$implicit;return h.jc().ChangeShowModel(o,"img")})),h.xc(1,"[\u56fe\u7247]"),h.Yb()}}function F(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-item",35),h.hc("click",(function(){h.rc(i);const o=h.jc().$implicit;return h.jc().ShowImageModal(o.img)})),h.Zb(1,"div",36),h.Xb(2,"img",37),h.Yb(),h.Yb()}if(2&i){const i=h.jc().$implicit,o=h.jc();h.Mb(2),h.oc("src",i.img,h.tc)("ngStyle",h.pc(2,j,o.MaxHeight))}}function U(i,o){if(1&i&&(h.Zb(0,"ion-item",16),h.Xb(1,"app-guaview",38),h.Yb()),2&i){const i=h.jc().$implicit,o=h.jc();h.Mb(1),h.oc("Config",o.GuaConfig)("GuaText",i.gua)}}function W(i,o){if(1&i&&(h.Zb(0,"ion-item",16),h.Xb(1,"app-baziview",39),h.Yb()),2&i){const i=h.jc().$implicit,o=h.jc();h.Mb(1),h.oc("Config",o.BaziConfig)("BaziText",i.bazi)}}function H(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-item"),h.Zb(1,"div",11),h.Zb(2,"ion-item"),h.Zb(3,"ion-thumbnail",1),h.Xb(4,"img",27),h.Yb(),h.Zb(5,"ion-label",17),h.Zb(6,"ion-text",28),h.hc("click",(function(){h.rc(i);const t=o.$implicit;return h.jc().ShowUserInfo(t.author)})),h.xc(7),h.Yb(),h.Xb(8,"br"),h.Zb(9,"ion-note"),h.Zb(10,"small"),h.xc(11),h.Yb(),h.Yb(),h.Xb(12,"br"),h.Zb(13,"ion-note"),h.Zb(14,"small"),h.xc(15),h.Yb(),h.Yb(),h.Xb(16,"br"),h.Yb(),h.Yb(),h.Zb(17,"ion-item",29),h.Zb(18,"ion-label",17),h.Zb(19,"ion-text",30),h.xc(20),h.Yb(),h.wc(21,P,2,0,"ion-text",31),h.wc(22,O,2,0,"ion-text",31),h.wc(23,A,2,0,"ion-text",31),h.wc(24,X,2,0,"ion-text",31),h.wc(25,G,2,0,"ion-text",32),h.wc(26,D,2,0,"ion-text",32),h.wc(27,$,2,0,"ion-text",32),h.Yb(),h.Yb(),h.wc(28,F,3,4,"ion-item",14),h.wc(29,U,2,2,"ion-item",15),h.wc(30,W,2,2,"ion-item",15),h.Zb(31,"ion-item",16),h.Zb(32,"ion-label",17),h.Xb(33,"ion-text",18),h.Yb(),h.Yb(),h.Yb(),h.Yb()}if(2&i){const i=o.$implicit,t=o.index,n=h.jc();h.Mb(4),h.oc("src",i.avatar,h.tc),h.Mb(3),h.zc("\u4f5c\u8005\uff1a",i.author,""),h.Mb(4),h.zc("\u53d1\u5e16\u65f6\u95f4: ",n.DateText(i.created),""),h.Mb(4),h.zc("\u4fee\u6539\u65f6\u95f4: ",n.DateText(i.modified),""),h.Mb(5),h.zc("",t+1,"\u697c"),h.Mb(1),h.oc("ngIf",n.CheckAction(i,"anwser")),h.Mb(1),h.oc("ngIf",n.CheckAction(i,"modify")),h.Mb(1),h.oc("ngIf",n.CheckAction(i,"delete")),h.Mb(1),h.oc("ngIf",n.CheckAction(i,"frozen")),h.Mb(1),h.oc("ngIf",i.gua),h.Mb(1),h.oc("ngIf",i.bazi),h.Mb(1),h.oc("ngIf",i.img),h.Mb(1),h.oc("ngIf",n.ShowMe(i,"img")),h.Mb(1),h.oc("ngIf",n.ShowMe(i,"gua")),h.Mb(1),h.oc("ngIf",n.ShowMe(i,"bazi")),h.Mb(3),h.oc("innerHtml",i.content,h.sc)}}function B(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-button",35),h.hc("click",(function(){h.rc(i);const o=h.jc();return o.ShowPanfu(o.Topic.gua)})),h.xc(1,"\u5366\u76d8"),h.Yb()}}function L(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-button",35),h.hc("click",(function(){h.rc(i);const o=h.jc();return o.ShowPanfu(o.Topic.bazi)})),h.xc(1,"\u547d\u76d8"),h.Yb()}}function E(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-button",40),h.hc("click",(function(){return h.rc(i),h.jc().SetTopOrGood("\u7cbe\u534e")})),h.xc(1,"[\u7cbe\u534e]"),h.Yb()}if(2&i){const i=h.jc();h.oc("color",null!=i.Topic&&i.Topic.good?"primary":"danger")}}function V(i,o){if(1&i){const i=h.ac();h.Zb(0,"ion-button",40),h.hc("click",(function(){return h.rc(i),h.jc().SetTopOrGood("\u7f6e\u9876")})),h.xc(1,"[\u7f6e\u9876]"),h.Yb()}if(2&i){const i=h.jc();h.oc("color",null!=i.Topic&&i.Topic.top?"primary":"danger")}}function J(i,o){if(1&i&&(h.Zb(0,"ion-select-option",41),h.xc(1),h.Yb()),2&i){const i=o.$implicit;h.oc("value",i),h.Mb(1),h.zc("\u7b2c",i+1,"\u9875")}}let _=(()=>{class i{constructor(i,o,t,n,c,e,r){this.loadingController=i,this.alertController=o,this.settings=t,this.forumservice=n,this.modalCtrl=c,this.route=e,this.router=r,this.pageindex=0,this.Pages=[0],this.Titel="Topic Titel",this.VTopic=[],this.route.params.subscribe(i=>{this.forumid=i.forumid,this.topicid=i.topicid})}ngOnInit(){var i;return Object(s.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.forumservice.ForumMG.Forumlist||(yield this.forumservice.LoadForumList()),this.forum=this.forumservice.ForumMG.Forumlist.find(i=>i.id===this.forumid),this.Titel=(null===(i=this.forum)||void 0===i?void 0:i.name)||this.forumid,this.user=this.settings.User||u.a,this.GuaConfig=this.settings.Gua,this.BaziConfig=this.settings.Bazi,this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5e16\u5b50...",duration:6e4}),this.Topic=yield this.forumservice.GetTopic(this.forumid,this.topicid),this.PageIndex=0}))}get HasUser(){return this.settings.HasUser&&this.user!==u.a}get PageIndex(){return this.pageindex}set PageIndex(i){this.pageindex=i,this.LoadAnswors(i)}get MaxHeight(){return Math.ceil(this.settings.DeviceHeight/2)}get IsAdmin(){if(!this.user||!this.forum)return!1;let i=256===this.user.roller;return this.forum&&this.Topic&&(i=i||this.forum.admin.includes(this.user.id)),i}LoadAnswors(i){return Object(s.b)(this,void 0,void 0,(function*(){this.forumservice.LoadAnswerList(this.topicid,this.forumid,i).then(i=>{i&&Array.isArray(i.data)&&(this.BuildPages(i.sum),this.VTopic=i.data,this.updateUserAvatar())}).catch(i=>{console.log("LoadAnswors Error",i)})}))}DateText(i){if(!i)return"\u65e0";const o=new Date(i);return o.toChinaStr()+` ${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`}ShowMe(i,o){return"img"===o?i&&i.img&&i.showimg:"gua"===o?i&&i.gua&&i.showgua:"bazi"===o&&i&&i.bazi&&i.showbazi}ChangeShowModel(i,o){if(!i)return;const t=this.settings.ForumSetting;if("img"===o)t.imgOut?this.ShowPanfu({img:btoa(i.img)}):i.showimg=!i.showimg;else if("gua"===o)t.guaOut?this.ShowPanfu(i.gua):i.showgua=!i.showgua;else{if("bazi"!==o)return!1;t.baziOut?this.ShowPanfu(i.bazi):i.showbazi=!i.showbazi}}GetRoles(i){return i?this.settings.UserRolers(i):[]}CheckAction(i,o){if(!i||!this.HasUser)return!1;let t=!1;return"modify"===o?(t=this.user.id===i.author||this.IsAdmin,t=t&&!0!==i.frozen):"delete"===o?(t=this.user.id===i.author||this.IsAdmin,t=t&&!0!==i.frozen):"frozen"===o?(t=this.user.id===i.author||this.IsAdmin,t=t&&!0!==i.frozen):"anwser"===o&&(t=!0),t&&!(!0===i.deleted)}ShowPanfu(i){this.router.navigate([`menu/topicpanfu/${JSON.stringify(i)}`])}EditTopic(i){var o;return Object(s.b)(this,void 0,void 0,(function*(){const t=void 0!==i.forumid;let n=t?null===(o=this.forum)||void 0===o?void 0:o.name:this.Topic.title;n||(n=i.forumid||this.forumid);const c=yield this.modalCtrl.create({component:l.a,componentProps:{MainTopic:t?i:null,VTopic:t?null:i,forumid:this.forumid,forumname:n,Private:!this.forum}});yield c.present();const{data:e}=yield c.onWillDismiss();console.log("new Topic return ",e)}))}DeleteTopic(i,o){return Object(s.b)(this,void 0,void 0,(function*(){this.presentConfirm("\u5220\u9664",null,"\u786e\u5b9a\u5220\u9664\u6b64\u5e16\u5b50/\u53d1\u8a00\uff1f").then(t=>!0===t&&this.forumservice.DeleteTopic(i,o?null:this.Topic.id)).then(i=>{i&&this.router.navigateByUrl(o?"menu/forum":`menu/topiclist/${this.forumid}`)})}))}AnswerTopic(i){return Object(s.b)(this,void 0,void 0,(function*(){const o=this.CreateTopic(i),t=yield this.modalCtrl.create({component:l.a,componentProps:{VTopic:o,forumid:this.forumid,forumname:this.Topic.title}});yield t.present(),yield t.onWillDismiss()}))}FrozenTopic(i){return Object(s.b)(this,void 0,void 0,(function*(){const o=!i;i=i||this.Topic,this.presentConfirm("\u5c01\u5b58",null,"\u5c01\u5b58\u53d1\u8a00\u540e\uff0c\u4e0d\u5141\u8bb8\u518d\u4fee\u6539\u3001\u5220\u9664\u3002\u5168\u697c\u5c01\u5b58\u540e\u4e0d\u5141\u8bb8\u8ddf\u8d34\u3002\u786e\u5b9a\u5c01\u5b58\u5417\uff1f").then(o=>{if(!0===o)return this.forumservice.UpdateTopic({frozen:!0},i.id,!this.forum)}).then(t=>{t&&(i.frozen=!0,i.deleted=!!o||i.deleted)}).catch(i=>{this.presentConfirm("\u64cd\u4f5c\u5931\u8d25",null,"\u5c01\u697c/\u53d1\u8a00\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff0c \u6216\u8005\u5411\u7248\u4e3b\u62a5\u544a\u3002")})}))}SetTopOrGood(i){return Object(s.b)(this,void 0,void 0,(function*(){const o={};"\u7cbe\u534e"===i?o.good=!this.Topic.good:"\u7f6e\u9876"===i&&(o.top=(this.Topic.top+1)%2),this.forumservice.UpdateTopic(o,this.Topic.id,!this.forum).then(o=>{o&&("\u7cbe\u534e"===i?this.Topic.good=!this.Topic.good:"\u7f6e\u9876"===i&&(this.Topic.top=(this.Topic.top+1)%2))})}))}ShowUserInfo(i){return Object(s.b)(this,void 0,void 0,(function*(){const o=yield this.modalCtrl.create({component:f.a,componentProps:{Uerid:i}});yield o.present(),yield o.onWillDismiss()}))}ShowImageModal(i){return Object(s.b)(this,void 0,void 0,(function*(){const o=yield this.modalCtrl.create({component:d,componentProps:{ImgSrc:i}});yield o.present(),yield o.onWillDismiss()}))}CreateTopic(i){const o=Date.now();return{id:"",created:o,modified:o,author:this.user.id,topic:this.Topic.id,gua:null,bazi:null,img:null,content:"",feedback:i||"",frozen:!1}}updateUserAvatar(){const i=this.settings.ForumSetting;this.VTopic.forEach(o=>{this.forumservice.GetUserInfo(o.author).then(t=>{const n=(t||u.a).avatar||"";o.avatar=n.IsNullOrEmpty()?this.settings.Avatar(t.gender):n,o.showimg=i.showimg&&!i.imgOut,o.showgua=i.showgua&&!i.guaOut,o.showbazi=i.showbazi&&!i.baziOut})})}presentConfirm(i,o,t){return Object(s.b)(this,void 0,void 0,(function*(){let n=!1;const c=yield this.alertController.create({header:i||"\u63d0\u793a",subHeader:o||"",message:t,buttons:[{text:"\u786e\u5b9a",handler:()=>{n=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});return yield c.present(),yield c.onWillDismiss(),Promise.resolve(n)}))}BuildPages(i){if(0!==this.PageIndex)return;if(0===i)return void(this.Pages=[0]);this.Pages=[];const o=Math.ceil(i/20);for(let t=0;t<o;t++)this.Pages.push(t)}}return i.\u0275fac=function(o){return new(o||i)(h.Wb(r.cb),h.Wb(r.b),h.Wb(a.a),h.Wb(b.a),h.Wb(r.db),h.Wb(e.a),h.Wb(e.g))},i.\u0275cmp=h.Qb({type:i,selectors:[["app-topicviewer"]],decls:46,vars:20,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end"],["routerLink","/menu/forum"],["icon-only","","name","home"],["color","medium"],["ion-no-padding",""],["color","danger",4,"ngIf"],[3,"disabled","click"],["lines","full"],[2,"padding-bottom","3px"],[4,"ngIf"],["lines","none","class","ion-no-margin",4,"ngIf"],[3,"click",4,"ngIf"],["lines","none",4,"ngIf"],["lines","none"],[1,"ion-text-wrap"],["ion-padding-vertical","","color","success",2,"margin-bottom","1px",3,"innerHtml"],[4,"ngFor","ngForOf"],[3,"color","click",4,"ngIf"],["name","arrow-back"],["cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"small",3,"disabled","click"],["name","arrow-forward"],["color","danger"],[3,"src"],["color","primary",3,"click"],["lines","none",1,"ion-no-margin"],["slot","end",1,"ion-margin-end"],["color","secondary","class","ion-margin-end",3,"click",4,"ngIf"],["color","warning","class","ion-margin-end",3,"click",4,"ngIf"],["color","secondary",1,"ion-margin-end",3,"click"],["color","warning",1,"ion-margin-end",3,"click"],[3,"click"],[1,"img-container"],[3,"src","ngStyle"],[3,"Config","GuaText"],[3,"Config","BaziText"],[3,"color","click"],[3,"value"]],template:function(i,o){1&i&&(h.Zb(0,"ion-header"),h.Zb(1,"ion-toolbar",0),h.Zb(2,"ion-buttons",1),h.Xb(3,"ion-back-button",2),h.Yb(),h.Zb(4,"ion-title"),h.xc(5),h.Yb(),h.Zb(6,"ion-buttons",3),h.Zb(7,"ion-button",4),h.Xb(8,"ion-icon",5),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Xb(9,"ion-text",6),h.Zb(10,"ion-item-divider",7),h.Zb(11,"ion-label",1),h.Zb(12,"ion-text"),h.xc(13),h.Yb(),h.wc(14,p,2,0,"ion-text",8),h.wc(15,x,2,0,"ion-text",8),h.Yb(),h.Zb(16,"ion-buttons",3),h.Zb(17,"ion-button",9),h.hc("click",(function(){return o.FrozenTopic(null)})),h.xc(18,"\u5c01\u697c"),h.Yb(),h.Yb(),h.Yb(),h.Zb(19,"ion-content"),h.Zb(20,"ion-item",10),h.Zb(21,"div",11),h.wc(22,T,15,4,"ion-item",12),h.wc(23,C,12,7,"ion-item",13),h.wc(24,z,3,4,"ion-item",14),h.wc(25,y,2,2,"ion-item",15),h.wc(26,S,2,2,"ion-item",15),h.Zb(27,"ion-item",16),h.Zb(28,"ion-label",17),h.Xb(29,"ion-text",18),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.wc(30,H,34,16,"ion-item",19),h.Yb(),h.Zb(31,"ion-footer"),h.Zb(32,"small"),h.Zb(33,"ion-toolbar"),h.Zb(34,"ion-buttons",1),h.wc(35,B,2,0,"ion-button",14),h.wc(36,L,2,0,"ion-button",14),h.wc(37,E,2,1,"ion-button",20),h.wc(38,V,2,1,"ion-button",20),h.Yb(),h.Zb(39,"ion-buttons",3),h.Zb(40,"ion-button",9),h.hc("click",(function(){return o.PageIndex=o.PageIndex-1})),h.Xb(41,"ion-icon",21),h.Yb(),h.Zb(42,"ion-select",22),h.hc("ngModelChange",(function(i){return o.PageIndex=i})),h.wc(43,J,2,2,"ion-select-option",23),h.Yb(),h.Zb(44,"ion-button",24),h.hc("click",(function(){return o.PageIndex=o.PageIndex+1})),h.Xb(45,"ion-icon",25),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Yb()),2&i&&(h.Mb(5),h.yc(o.Titel),h.Mb(8),h.zc("\u9898\u76ee\uff1a",null==o.Topic?null:o.Topic.title,""),h.Mb(1),h.oc("ngIf",null==o.Topic?null:o.Topic.good),h.Mb(1),h.oc("ngIf",null==o.Topic?null:o.Topic.top),h.Mb(2),h.oc("disabled",!o.CheckAction(o.Topic,"frozen")),h.Mb(5),h.oc("ngIf",o.Topic),h.Mb(1),h.oc("ngIf",o.Topic),h.Mb(1),h.oc("ngIf",o.ShowMe(o.Topic,"img")),h.Mb(1),h.oc("ngIf",o.ShowMe(o.Topic,"gua")),h.Mb(1),h.oc("ngIf",o.ShowMe(o.Topic,"bazi")),h.Mb(3),h.oc("innerHtml",null==o.Topic?null:o.Topic.content,h.sc),h.Mb(1),h.oc("ngForOf",o.VTopic),h.Mb(5),h.oc("ngIf",null==o.Topic?null:o.Topic.gua),h.Mb(1),h.oc("ngIf",null==o.Topic?null:o.Topic.bazi),h.Mb(1),h.oc("ngIf",o.IsAdmin),h.Mb(1),h.oc("ngIf",o.IsAdmin),h.Mb(2),h.oc("disabled",0===o.PageIndex),h.Mb(2),h.oc("ngModel",o.PageIndex),h.Mb(1),h.oc("ngForOf",o.Pages),h.Mb(1),h.oc("disabled",o.PageIndex===o.Pages.length-1))},directives:[r.t,r.Z,r.j,r.f,r.g,r.X,r.i,r.hb,e.h,r.u,r.U,r.y,r.D,n.j,r.n,r.x,n.i,r.r,r.Q,r.ib,c.c,c.d,r.W,r.J,n.k,g.a,m.a,r.R],styles:[".img-container[_ngcontent-%COMP%]{text-align:center;display:block}"]}),i})();var Q=t("CGrG"),N=t("zioG"),R=t("uEAi"),K=t("n7QD");t.d(o,"TopicviewerPageModule",(function(){return ii}));const q=[{path:"",component:_}];let ii=(()=>{class i{}return i.\u0275mod=h.Ub({type:i}),i.\u0275inj=h.Tb({factory:function(o){return new(o||i)},imports:[[R.a,K.a,N.b,n.b,c.a,r.ab,Q.b,e.i.forChild(q)]]}),i})()}}]);