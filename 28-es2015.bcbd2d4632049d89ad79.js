(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{AyTO:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),c=i("c7TG"),r=i("mrSG"),l=i("LTmD"),a=i("lEof"),u=i("PKx9"),b=i("HQI1"),d=i("Y6BA"),m=i("7L00"),h=i("fXoL");function f(e,t){if(1&e){const e=h.ac();h.Zb(0,"ion-buttons",13),h.Zb(1,"ion-button",2),h.hc("click",(function(){return h.rc(e),h.jc().onclose(!0)})),h.xc(2," \u4fdd\u5b58 "),h.Yb(),h.Yb()}}function p(e,t){if(1&e){const e=h.ac();h.Zb(0,"ion-chip",2),h.hc("click",(function(){h.rc(e);const i=t.$implicit;return h.jc().DeleteAdmin(i)})),h.xc(1),h.Yb()}if(2&e){const e=t.$implicit;h.Mb(1),h.yc(e)}}function g(e,t){if(1&e){const e=h.ac();h.Zb(0,"ion-button",14),h.hc("click",(function(){return h.rc(e),h.jc().AddAdmin()})),h.xc(1,"\u6dfb\u52a0"),h.Yb()}}function v(e,t){if(1&e&&(h.Zb(0,"ion-chip"),h.Zb(1,"ion-avatar"),h.Xb(2,"img",15),h.Yb(),h.Zb(3,"ion-text"),h.xc(4),h.Yb(),h.Yb()),2&e){const e=t.$implicit;h.Mb(2),h.oc("src",e.icon,h.tc),h.Mb(2),h.yc(e.name)}}function y(e,t){if(1&e){const e=h.ac();h.Zb(0,"ion-button",14),h.hc("click",(function(){return h.rc(e),h.jc().EditRoles()})),h.xc(1,"\u7f16\u8f91"),h.Yb()}}function x(e,t){if(1&e){const e=h.ac();h.Zb(0,"ion-textarea",16),h.hc("ngModelChange",(function(t){return h.rc(e),h.jc().Forum.detail=t})),h.Yb()}if(2&e){const e=h.jc();h.oc("ngModel",e.Forum.detail)}}function Z(e,t){if(1&e&&(h.Zb(0,"ion-text"),h.xc(1),h.Yb()),2&e){const e=h.jc();h.Mb(1),h.zc(" ",e.Forum.detail||"\u7248\u4e3b\u5f88\u61d2\uff0c\u6ca1\u6709\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002"," ")}}function Y(e,t){if(1&e){const e=h.ac();h.Zb(0,"ion-item",5),h.Zb(1,"ion-label",9),h.Zb(2,"ion-text"),h.xc(3,"\u6dfb\u52a0\u7279\u8bb8\u7528\u6237\uff0c\u540d\u5b57\u95f4\u7528\u82f1\u6587\u5206\u53f7\u9694\u5f00\uff1a"),h.Yb(),h.Zb(4,"ion-button",17),h.hc("click",(function(){return h.rc(e),h.jc().EditMessage()})),h.xc(5,"\u7fa4\u53d1\u6d88\u606f"),h.Yb(),h.Yb(),h.Zb(6,"ion-textarea",18),h.hc("ngModelChange",(function(t){return h.rc(e),h.jc().Users=t})),h.Yb(),h.Yb()}if(2&e){const e=h.jc();h.Mb(6),h.oc("ngModel",e.Users)}}let w=(()=>{class e{constructor(e,t,i,n,o,s){this.toastController=e,this.loadingController=t,this.alertController=i,this.modalCtrl=n,this.forumservice=o,this.settings=s,this.Rolers=[],this.Users=""}ngOnInit(){this.Rolers=this.settings.UserRolers(this.Forum.reader||0),this.Users=(this.Forum.user||[]).join(";")}get IsAdmin(){return this.settings.User.roller>=256}DeleteAdmin(e){return Object(r.b)(this,void 0,void 0,(function*(){this.IsAdmin&&(yield this.presentConfirm("\u5220\u9664\u7248\u4e3b",null,`\u786e\u5b9a\u5220\u9664\u7528\u6237 [${e}] \u7684\u7248\u4e3b\u804c\u52a1\u5417\uff1f`))&&(this.Forum.admin=this.Forum.admin.filter(t=>t!==e))}))}AddAdmin(){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.presentInput("\u65b0\u7248\u4e3b",null,"\u7528\u6237\u8d26\u6237");if(e){const t=yield this.forumservice.GetUserInfo(e.name);t&&t.id===e.name?this.Forum.admin.push(e.name):this.presentToast(`\u627e\u4e0d\u5230\u7528\u6237 [${e.name}]`,3e3)}}))}EditRoles(){return Object(r.b)(this,void 0,void 0,(function*(){const e=this.Forum.reader||1;let t=!1;const i=yield this.alertController.create({header:"\u63a5\u6536\u8005\u89d2\u8272",inputs:[{name:"register",type:"checkbox",label:"\u6ce8\u518c\u7528\u6237",value:1,checked:(1&e)>0},{name:"vip",type:"checkbox",label:"VIP\u7528\u6237",value:2,checked:(2&e)>0},{name:"huahe",type:"checkbox",label:"\u534e\u9e64\u540c\u95e8",value:4,checked:(4&e)>0},{name:"bbs",type:"checkbox",label:"\u7248\u4e3b",value:8,checked:(8&e)>0},{name:"liuyao",type:"checkbox",label:"\u516d\u723b\u8001\u5e08",value:16,checked:(16&e)>0},{name:"bazi",type:"checkbox",label:"\u547d\u7406\u8001\u5e08",value:32,checked:(32&e)>0},{name:"fengshui",type:"checkbox",label:"\u98ce\u6c34\u8001\u5e08",value:64,checked:(64&e)>0},{name:"supermaster",type:"checkbox",label:"\u5927\u5b97\u5e08",value:128,checked:(128&e)>0},{name:"admin",type:"checkbox",label:"\u7ba1\u7406\u5458",value:256,checked:(256&e)>0}],buttons:[{text:"\u786e\u5b9a",handler:()=>{t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield i.present();const{data:n}=yield i.onWillDismiss();if(!t)return;let o=0;for(const s of n.values)o|=s;this.Forum.reader=o,this.Rolers=this.settings.UserRolers(o)}))}EditMessage(){return Object(r.b)(this,void 0,void 0,(function*(){if(0===this.Forum.user.length)return void this.presentToast("\u8bba\u575b\u6ca1\u6709\u7279\u7ea6\u7528\u6237\u3002\u65e0\u6cd5\u53d1\u9001\u7fa4\u4f53\u4fe1\u606f\u3002",5e3);Object(d.b)();const e={id:"",created:Date.now(),valid:0,author:this.settings.User.id,receiver:`\u8bba\u575b[${this.Forum.name}]\u7684\u4f1a\u5458`,roller:0,readed:!1,private:!0,replyable:!0,title:"\u7fa4\u53d1\u6d88\u606f",content:"\u8bf7\u8f93\u5165\u5185\u5bb9\u3002\u3002\u3002"},t=yield this.modalCtrl.create({component:m.a,componentProps:{Message:e,NoSend:!0}});yield t.present();const{data:i}=yield t.onWillDismiss();if(!1!==i){for(const t of this.Forum.user){const i=yield this.forumservice.GetUserInfo(t);e.receiver=i.id,yield this.forumservice.SendMessage(e),console.log("send message to",e.receiver)}this.presentToast("\u60a8\u7684\u7fa4\u53d1\u4fe1\u606f\u5df2\u7ecf\u53d1\u9001\u3002\u3002\u3002",5e3)}}))}onclose(e){return Object(r.b)(this,void 0,void 0,(function*(){if(!1===e)this.modalCtrl.dismiss(!1);else{this.Forum.user=this.Users.split(/;|\uff1b|,|\uff0c|:|\uff1a/).filter(e=>""!==e);const e=Object(l.b)(this.Forum);delete e.id,delete e._id,yield this.showLoading(),this.forumservice.UpdatForum(e,this.Forum.id).then(()=>{this.presentToast("\u66f4\u65b0\u6210\u529f\uff01",3e3),this.modalCtrl.dismiss(!0)}).catch(e=>{this.presentToast("\u66f4\u65b0\u8bba\u575b\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",3e3)}).finally(()=>{this.closeLoading()})}}))}presentConfirm(e,t,i){return Object(r.b)(this,void 0,void 0,(function*(){let n=!1;const o=yield this.alertController.create({header:e||"\u63d0\u793a",subHeader:t||"",message:i,buttons:[{text:"\u786e\u5b9a",handler:()=>{n=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});return yield o.present(),yield o.onWillDismiss(),Promise.resolve(n)}))}presentInput(e,t,i){return Object(r.b)(this,void 0,void 0,(function*(){let n=!1;const o=yield this.alertController.create({header:e||"\u63d0\u793a",subHeader:t||"",inputs:[{name:"name",type:"text",id:"name",value:"",label:i,placeholder:i}],buttons:[{text:"\u786e\u5b9a",handler:()=>{n=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield o.present();const{data:s}=yield o.onWillDismiss();return Promise.resolve(n?s.values:null)}))}presentToast(e,t){return Object(r.b)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:t,color:"secondary",position:"middle"})).present()}))}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u4fdd\u5b58\u5230\u8bba\u575b...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(h.Wb(c.kb),h.Wb(c.cb),h.Wb(c.b),h.Wb(c.db),h.Wb(u.a),h.Wb(l.a))},e.\u0275cmp=h.Qb({type:e,selectors:[["app-forumeditor"]],inputs:{Forum:"Forum"},decls:33,vars:13,consts:[["color","primary"],["slot","start"],[3,"click"],["slot","end",4,"ngIf"],["required","","type","text",3,"readonly","ngModel","ngModelChange"],[1,"ion-text-wrap"],[3,"click",4,"ngFor","ngForOf"],["slot","end","fill","outline",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["position","stacked"],["placeholder","\u5bf9\u8bba\u575b\u7684\u8be6\u7ec6\u8868\u8ff0\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"],["class","ion-text-wrap",4,"ngIf"],["slot","end"],["slot","end","fill","outline",3,"click"],[3,"src"],["placeholder","\u5bf9\u8bba\u575b\u7684\u8be6\u7ec6\u8868\u8ff0\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange"],["fill","outline",3,"click"],["placeholder","\u6dfb\u52a0\u8fdb\u6765\u7684\u7528\u6237\uff0c\u6ca1\u6709\u4ee5\u4e0a\u6743\u9650\u4e5f\u53ef\u4ee5\u8bbf\u95ee\u672c\u8bba\u575b\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(h.Zb(0,"ion-header"),h.Zb(1,"ion-toolbar",0),h.Zb(2,"ion-buttons",1),h.Zb(3,"ion-button",2),h.hc("click",(function(){return t.onclose(!1)})),h.xc(4," \u53d6\u6d88 "),h.Yb(),h.Yb(),h.Zb(5,"ion-title"),h.xc(6),h.Yb(),h.wc(7,f,3,0,"ion-buttons",3),h.Yb(),h.Yb(),h.Zb(8,"ion-content"),h.Zb(9,"ion-item"),h.Zb(10,"ion-label"),h.xc(11,"\u540d\u5b57\uff1a"),h.Yb(),h.Zb(12,"ion-input",4),h.hc("ngModelChange",(function(e){return t.Forum.name=e})),h.Yb(),h.Yb(),h.Zb(13,"ion-item"),h.Zb(14,"ion-label"),h.xc(15,"\u7b80\u4ecb\uff1a"),h.Yb(),h.Zb(16,"ion-input",4),h.hc("ngModelChange",(function(e){return t.Forum.describe=e})),h.Yb(),h.Yb(),h.Zb(17,"ion-item",5),h.Zb(18,"ion-text"),h.xc(19,"\u7248\u4e3b\uff1a"),h.Yb(),h.wc(20,p,2,1,"ion-chip",6),h.wc(21,g,2,0,"ion-button",7),h.Yb(),h.Zb(22,"ion-item",5),h.Zb(23,"ion-text"),h.xc(24,"\u6743\u9650\uff1a"),h.Yb(),h.wc(25,v,5,2,"ion-chip",8),h.wc(26,y,2,0,"ion-button",7),h.Yb(),h.Zb(27,"ion-item",5),h.Zb(28,"ion-label",9),h.xc(29,"\u8be6\u7ec6\u4ecb\u7ecd"),h.Yb(),h.wc(30,x,1,1,"ion-textarea",10),h.wc(31,Z,2,1,"ion-text",11),h.Yb(),h.wc(32,Y,7,1,"ion-item",12),h.Yb()),2&e&&(h.Mb(6),h.yc(t.Forum.name),h.Mb(1),h.oc("ngIf",t.IsAdmin),h.Mb(5),h.oc("readonly",!t.IsAdmin)("ngModel",t.Forum.name),h.Mb(4),h.oc("readonly",!t.IsAdmin)("ngModel",t.Forum.describe),h.Mb(4),h.oc("ngForOf",t.Forum.admin),h.Mb(1),h.oc("ngIf",t.IsAdmin),h.Mb(4),h.oc("ngForOf",t.Rolers),h.Mb(1),h.oc("ngIf",t.IsAdmin),h.Mb(4),h.oc("ngIf",t.IsAdmin),h.Mb(1),h.oc("ngIf",!t.IsAdmin),h.Mb(1),h.oc("ngIf",t.IsAdmin))},directives:[c.t,c.Z,c.j,c.i,c.X,n.j,c.n,c.x,c.D,c.w,c.jb,o.e,o.c,o.d,c.U,n.i,c.l,c.e,c.V],styles:[""]}),e})();function k(e,t){if(1&e){const e=h.ac();h.Zb(0,"ion-item"),h.Zb(1,"ion-text"),h.xc(2,"\u8fde\u63a5\u670d\u52a1\u5668\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u5c1d\u8bd5\u3002"),h.Yb(),h.Zb(3,"ion-button",13),h.hc("click",(function(){return h.rc(e),h.jc().Reconnect(!0)})),h.xc(4,"\u91cd\u65b0\u8fde\u63a5"),h.Yb(),h.Yb()}}function F(e,t){1&e&&h.Xb(0,"ion-icon",20)}function M(e,t){if(1&e){const e=h.ac();h.Zb(0,"ion-item-sliding"),h.Zb(1,"ion-item",14),h.hc("click",(function(){h.rc(e);const i=t.$implicit;return h.jc(2).NaviToForum(i.id)})),h.Zb(2,"ion-label",15),h.Zb(3,"ion-text"),h.xc(4),h.Yb(),h.Zb(5,"ion-text",8),h.Zb(6,"h6"),h.xc(7),h.Yb(),h.Yb(),h.wc(8,F,1,0,"ion-icon",16),h.Zb(9,"ion-text",17),h.xc(10),h.Yb(),h.Zb(11,"ion-text",17),h.xc(12),h.Yb(),h.Yb(),h.Yb(),h.Zb(13,"ion-item-options",18),h.Zb(14,"ion-item-option",9),h.hc("click",(function(){h.rc(e);const i=t.$implicit;return h.jc(2).ForumEditor(i.name)})),h.Xb(15,"ion-icon",19),h.Yb(),h.Yb(),h.Yb()}if(2&e){const e=t.$implicit;h.Mb(1),h.oc("detail",!e.block),h.Mb(3),h.zc(" ",e.name," "),h.Mb(3),h.yc(e.describe),h.Mb(1),h.oc("ngIf",e.block),h.Mb(2),h.zc("\u65b0\u8d34\uff1a",e.modified.toChinaStr(),""),h.Mb(2),h.zc("\u5e16\u6570\uff1a",e.topiccount,"")}}function O(e,t){if(1&e&&(h.Zb(0,"ion-item-group"),h.Zb(1,"ion-item-divider"),h.Zb(2,"ion-label"),h.xc(3),h.Yb(),h.Yb(),h.wc(4,M,16,6,"ion-item-sliding",7),h.Yb()),2&e){const e=t.$implicit;h.Mb(3),h.yc(e.name),h.Mb(1),h.oc("ngForOf",e.items)}}function j(e,t){if(1&e){const e=h.ac();h.Zb(0,"ion-buttons",2),h.Zb(1,"ion-button",9),h.hc("click",(function(t){return h.rc(e),h.jc().personalOption(t)})),h.Xb(2,"ion-icon",21),h.Zb(3,"ion-text"),h.xc(4,"\u6211\u7684"),h.Yb(),h.Yb(),h.Yb()}}let C=(()=>{class e{constructor(e,t,i,n,o,s,c,r){this.loadingController=e,this.modalCtrl=t,this.alertController=i,this.settings=n,this.forumservice=o,this.host=s,this.popoverCtrl=c,this.router=r,this.forums=[],this.showallforums=!1,this.loadfailed=!1,this.hasuser=!0,this.SortKey="lasttopic"}ngOnInit(){return Object(r.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.user=this.settings.User||d.a,this.hasuser=this.settings.HasUser,this.showallforums=!this.hasuser,this.Reconnect(!1)}))}get Forums(){return this.forums}get HasUser(){return this.hasuser}Reconnect(e){return Object(r.b)(this,void 0,void 0,(function*(){this.loadfailed=!1,yield this.showLoading(),this.forumservice.ForumList(e).then(e=>{this.buildForumList(e),this.forumservice.ForumMG.Reset()}).catch(e=>{console.log("forum reconnect",e),this.loadfailed=!0}).finally(()=>{this.closeLoading()})}))}ChangeList(){this.showallforums=!this.showallforums,this.Reconnect(!1)}NaviToForum(e){this.router.navigateByUrl(`menu/topiclist/${e}`)}ForumEditor(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=(yield this.forumservice.ForumList()).find(t=>t.name===e),i=yield this.modalCtrl.create({component:w,componentProps:{Forum:t}});yield i.present();const{data:n}=yield i.onWillDismiss();console.log("Forumeditor close"),!0===n&&this.Reconnect(!1)}))}Setting(){return Object(r.b)(this,void 0,void 0,(function*(){const e=this.settings.ForumSetting;let t=!1;const i=yield this.alertController.create({header:"\u663e\u793a\u504f\u597d",inputs:[{name:"showimg",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u56fe\u7247",value:1,checked:e.showimg},{name:"vip",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u5366\u4f8b",value:2,checked:e.showgua},{name:"huahe",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u547d\u4f8b",value:3,checked:e.showbazi},{name:"bbs",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u56fe\u7247",value:4,checked:!e.imgOut},{name:"liuyao",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u5366\u4f8b",value:5,checked:!e.guaOut},{name:"bazi",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u547d\u4f8b",value:6,checked:!e.baziOut}],buttons:[{text:"\u786e\u5b9a",handler:()=>{t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield i.present();const{data:n}=yield i.onWillDismiss();if(!t)return;const o={showimg:n.values.includes(1),showgua:n.values.includes(2),showbazi:n.values.includes(3),imgOut:!n.values.includes(4),guaOut:!n.values.includes(5),baziOut:!n.values.includes(6)};this.settings.ForumSetting=o}))}sortOptions(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=yield this.popoverCtrl.create({component:b.a,event:e,componentProps:{items:[{name:"\u9ed8\u8ba4",value:"id"},{name:"\u65f6\u95f4",value:"lasttopic"}],currentOption:this.SortKey},translucent:!0});yield t.present();const{data:i}=yield t.onDidDismiss();(i||this.SortKey)!==this.SortKey&&(this.SortKey=i.toString())}))}personalOption(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=[{name:"\u5e16\u5b50",value:"forum_me"},{name:"\u6c42\u52a9",value:"forum_ticket"},{name:"\u6d88\u606f",value:"messagelist"},{name:"\u627e\u4eba",value:"searchuser"}];this.user.roller>=16&&t.insert(2,{name:"\u5ba2\u6237\u6c42\u52a9",value:"forum_master"});const i=yield this.popoverCtrl.create({component:b.a,event:e,componentProps:{items:t,currentOption:"forum_me"},translucent:!0});yield i.present();const{data:n}=yield i.onDidDismiss(),o=n||"";!o.IsNullOrEmpty()&&o.startsWith("forum_")?this.NaviToForum(o):"messagelist"===o?this.router.navigateByUrl("menu/messagelist/true"):"searchuser"===o&&this.router.navigateByUrl("menu/searchuser")}))}buildForumList(e){this.initForums(),e.map(e=>{const t=new Date(0===e.lasttopic?Date.now():e.lasttopic);let i=e.admin.includes(this.user.id);i=i||e.user.includes(this.user.id),i=i||0===e.reader||(e.reader&this.user.roller)>0;const n={id:e.id,name:e.name,describe:e.describe,modified:t,block:!i,group:e.group,topiccount:e.topiccount};return!0!==this.showallforums&&!1!==n.block||this.forums.find(e=>e.group===n.group).items.push(n),n})}initForums(){this.forums=[{group:0,name:"\u6613\u5b66\u533a",items:[]},{group:1,name:"\u7406\u5b66\u533a",items:[]},{group:2,name:"\u85cf\u5b66\u533a",items:[]},{group:10,name:"\u4e8b\u52a1\u533a",items:[]}]}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5217\u8868...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(h.Wb(c.cb),h.Wb(c.db),h.Wb(c.b),h.Wb(l.a),h.Wb(u.a),h.Wb(a.a),h.Wb(c.gb),h.Wb(s.g))},e.\u0275cmp=h.Qb({type:e,selectors:[["app-forum"]],decls:28,vars:3,consts:[["color","primary"],["slot","start"],["slot","end"],["size","small",3,"click"],["slot","icon-only","name","md-code-working"],["name","md-funnel"],[4,"ngIf"],[4,"ngFor","ngForOf"],["color","medium"],[3,"click"],["name","refresh"],["name","settings"],["slot","end",4,"ngIf"],["fill","outline",3,"click"],[3,"detail","click"],[1,"ion-text-wrap"],["name","ios-lock","style","margin-right: 10px;",4,"ngIf"],["color","medium",1,"ion-margin-end"],["side","start"],["slot","icon-only","name","information-circle"],["name","ios-lock",2,"margin-right","10px"],["name","person"]],template:function(e,t){1&e&&(h.Zb(0,"ion-header"),h.Zb(1,"ion-toolbar",0),h.Zb(2,"ion-buttons",1),h.Xb(3,"ion-menu-button"),h.Yb(),h.Zb(4,"ion-title"),h.xc(5,"\u8ba8\u8bba\u533a\u5217\u8868"),h.Yb(),h.Zb(6,"ion-buttons",2),h.Zb(7,"ion-button",3),h.hc("click",(function(){return t.ChangeList()})),h.Xb(8,"ion-icon",4),h.Yb(),h.Zb(9,"ion-button",3),h.hc("click",(function(e){return t.sortOptions(e)})),h.Xb(10,"ion-icon",5),h.Zb(11,"ion-text"),h.xc(12,"\u6392\u5e8f"),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Zb(13,"ion-content"),h.wc(14,k,5,0,"ion-item",6),h.wc(15,O,5,2,"ion-item-group",7),h.Yb(),h.Zb(16,"ion-footer"),h.Zb(17,"ion-toolbar",8),h.Zb(18,"ion-buttons",1),h.Zb(19,"ion-button",9),h.hc("click",(function(){return t.Reconnect(!0)})),h.Xb(20,"ion-icon",10),h.Zb(21,"ion-text"),h.xc(22,"\u5237\u65b0"),h.Yb(),h.Yb(),h.Zb(23,"ion-button",9),h.hc("click",(function(){return t.Setting()})),h.Xb(24,"ion-icon",11),h.Zb(25,"ion-text"),h.xc(26,"\u8bbe\u7f6e"),h.Yb(),h.Yb(),h.Yb(),h.wc(27,j,5,0,"ion-buttons",12),h.Yb(),h.Yb()),2&e&&(h.Mb(14),h.oc("ngIf",t.loadfailed),h.Mb(1),h.oc("ngForOf",t.Forums),h.Mb(12),h.oc("ngIf",t.HasUser))},directives:[c.t,c.Z,c.j,c.H,c.X,c.i,c.u,c.U,c.n,n.j,n.i,c.r,c.x,c.z,c.y,c.D,c.C,c.B,c.A],styles:[""]}),e})();i.d(t,"ForumPageModule",(function(){return U}));const I=[{path:"",component:C}];let U=(()=>{class e{}return e.\u0275mod=h.Ub({type:e}),e.\u0275inj=h.Tb({factory:function(t){return new(t||e)},imports:[[n.b,o.a,c.ab,s.i.forChild(I)]]}),e})()},HQI1:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var n=i("c7TG"),o=i("fXoL"),s=i("ofXK");function c(e,t){if(1&e){const e=o.ac();o.Zb(0,"ion-item",2),o.hc("click",(function(){o.rc(e);const i=t.$implicit;return o.jc(2).onSelect(i.value)})),o.Zb(1,"ion-text"),o.xc(2),o.Yb(),o.Yb()}if(2&e){const e=t.$implicit,i=o.jc(2);o.oc("color",e.value===i.currentOption?"light":""),o.Mb(2),o.yc(e.name)}}function r(e,t){if(1&e&&(o.Zb(0,"div"),o.wc(1,c,3,2,"ion-item",1),o.Yb()),2&e){const e=o.jc();o.Mb(1),o.oc("ngForOf",e.items)}}function l(e,t){if(1&e&&(o.Zb(0,"ion-item",4),o.Zb(1,"ion-note"),o.xc(2),o.Yb(),o.Zb(3,"ion-label",5),o.xc(4),o.Yb(),o.Yb()),2&e){const e=t.$implicit;o.Mb(2),o.yc(e.name),o.Mb(2),o.zc(" ",e.value," ")}}function a(e,t){if(1&e&&(o.Zb(0,"small"),o.wc(1,l,5,2,"ion-item",3),o.Yb()),2&e){const e=o.jc();o.Mb(1),o.oc("ngForOf",e.items)}}let u=(()=>{class e{constructor(e){this.popoverCtrl=e,this.toselect=!0}ngOnInit(){}onSelect(e){this.popoverCtrl.dismiss(e)}}return e.\u0275fac=function(t){return new(t||e)(o.Wb(n.gb))},e.\u0275cmp=o.Qb({type:e,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","end",1,"ion-text-wrap"]],template:function(e,t){1&e&&(o.wc(0,r,2,1,"div",0),o.wc(1,a,2,1,"small",0)),2&e&&(o.oc("ngIf",t.toselect),o.Mb(1),o.oc("ngIf",!t.toselect))},directives:[s.j,s.i,n.x,n.U,n.J,n.D],styles:[""]}),e})()}}]);