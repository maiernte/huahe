(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{AyTO:function(e,t,i){"use strict";i.r(t);var o=i("ofXK"),n=i("3Pt+"),s=i("tyNb"),c=i("c7TG"),r=i("mrSG"),l=i("LTmD"),a=i("lEof"),u=i("PKx9"),b=i("HQI1"),d=i("Y6BA"),h=i("7L00"),m=i("fXoL");function f(e,t){if(1&e){const e=m.ac();m.Zb(0,"ion-buttons",13),m.Zb(1,"ion-button",2),m.hc("click",(function(){return m.rc(e),m.jc().onclose(!0)})),m.xc(2," \u4fdd\u5b58 "),m.Yb(),m.Yb()}}function g(e,t){if(1&e){const e=m.ac();m.Zb(0,"ion-chip",2),m.hc("click",(function(){m.rc(e);const i=t.$implicit;return m.jc().DeleteAdmin(i)})),m.xc(1),m.Yb()}if(2&e){const e=t.$implicit;m.Mb(1),m.yc(e)}}function p(e,t){if(1&e){const e=m.ac();m.Zb(0,"ion-button",14),m.hc("click",(function(){return m.rc(e),m.jc().AddAdmin()})),m.xc(1,"\u6dfb\u52a0"),m.Yb()}}function v(e,t){if(1&e&&(m.Zb(0,"ion-chip"),m.Zb(1,"ion-avatar"),m.Xb(2,"img",15),m.Yb(),m.Zb(3,"ion-text"),m.xc(4),m.Yb(),m.Yb()),2&e){const e=t.$implicit;m.Mb(2),m.oc("src",e.icon,m.tc),m.Mb(2),m.yc(e.name)}}function y(e,t){if(1&e){const e=m.ac();m.Zb(0,"ion-button",14),m.hc("click",(function(){return m.rc(e),m.jc().EditRoles()})),m.xc(1,"\u7f16\u8f91"),m.Yb()}}function x(e,t){if(1&e){const e=m.ac();m.Zb(0,"ion-textarea",16),m.hc("ngModelChange",(function(t){return m.rc(e),m.jc().Forum.detail=t})),m.Yb()}if(2&e){const e=m.jc();m.oc("ngModel",e.Forum.detail)}}function Y(e,t){if(1&e&&(m.Zb(0,"ion-text"),m.xc(1),m.Yb()),2&e){const e=m.jc();m.Mb(1),m.zc(" ",e.Forum.detail||"\u7248\u4e3b\u5f88\u61d2\uff0c\u6ca1\u6709\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002"," ")}}function Z(e,t){if(1&e){const e=m.ac();m.Zb(0,"ion-item",5),m.Zb(1,"ion-label",9),m.Zb(2,"ion-text"),m.xc(3,"\u6dfb\u52a0\u7279\u8bb8\u7528\u6237\uff0c\u540d\u5b57\u95f4\u7528\u82f1\u6587\u5206\u53f7\u9694\u5f00\uff1a"),m.Yb(),m.Zb(4,"ion-button",17),m.hc("click",(function(){return m.rc(e),m.jc().EditMessage()})),m.xc(5,"\u7fa4\u53d1\u6d88\u606f"),m.Yb(),m.Yb(),m.Zb(6,"ion-textarea",18),m.hc("ngModelChange",(function(t){return m.rc(e),m.jc().Users=t})),m.Yb(),m.Yb()}if(2&e){const e=m.jc();m.Mb(6),m.oc("ngModel",e.Users)}}let k=(()=>{class e{constructor(e,t,i,o,n,s){this.toastController=e,this.loadingController=t,this.alertController=i,this.modalCtrl=o,this.forumservice=n,this.settings=s,this.Rolers=[],this.Users=""}ngOnInit(){this.Rolers=this.settings.UserRolers(this.Forum.reader||0),this.Users=(this.Forum.user||[]).join(";")}get IsAdmin(){return this.settings.User.roller>=256}DeleteAdmin(e){return Object(r.b)(this,void 0,void 0,(function*(){this.IsAdmin&&(yield this.presentConfirm("\u5220\u9664\u7248\u4e3b",null,`\u786e\u5b9a\u5220\u9664\u7528\u6237 [${e}] \u7684\u7248\u4e3b\u804c\u52a1\u5417\uff1f`))&&(this.Forum.admin=this.Forum.admin.filter(t=>t!==e))}))}AddAdmin(){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.presentInput("\u65b0\u7248\u4e3b",null,"\u7528\u6237\u8d26\u6237");if(e){const t=yield this.forumservice.GetUserInfo(e.name);t&&t.id===e.name?this.Forum.admin.push(e.name):this.presentToast(`\u627e\u4e0d\u5230\u7528\u6237 [${e.name}]`,3e3)}}))}EditRoles(){return Object(r.b)(this,void 0,void 0,(function*(){const e=this.Forum.reader||1;let t=!1;const i=yield this.alertController.create({header:"\u63a5\u6536\u8005\u89d2\u8272",inputs:[{name:"register",type:"checkbox",label:"\u6ce8\u518c\u7528\u6237",value:1,checked:(1&e)>0},{name:"vip",type:"checkbox",label:"VIP\u7528\u6237",value:2,checked:(2&e)>0},{name:"huahe",type:"checkbox",label:"\u534e\u9e64\u540c\u95e8",value:4,checked:(4&e)>0},{name:"bbs",type:"checkbox",label:"\u7248\u4e3b",value:8,checked:(8&e)>0},{name:"liuyao",type:"checkbox",label:"\u516d\u723b\u8001\u5e08",value:16,checked:(16&e)>0},{name:"bazi",type:"checkbox",label:"\u547d\u7406\u8001\u5e08",value:32,checked:(32&e)>0},{name:"fengshui",type:"checkbox",label:"\u98ce\u6c34\u8001\u5e08",value:64,checked:(64&e)>0},{name:"supermaster",type:"checkbox",label:"\u5927\u5b97\u5e08",value:128,checked:(128&e)>0},{name:"admin",type:"checkbox",label:"\u7ba1\u7406\u5458",value:256,checked:(256&e)>0}],buttons:[{text:"\u786e\u5b9a",handler:()=>{t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield i.present();const{data:o}=yield i.onWillDismiss();if(!t)return;let n=0;for(const s of o.values)n|=s;this.Forum.reader=n,this.Rolers=this.settings.UserRolers(n)}))}EditMessage(){return Object(r.b)(this,void 0,void 0,(function*(){if(0===this.Forum.user.length)return void this.presentToast("\u8bba\u575b\u6ca1\u6709\u7279\u7ea6\u7528\u6237\u3002\u65e0\u6cd5\u53d1\u9001\u7fa4\u4f53\u4fe1\u606f\u3002",5e3);Object(d.a)();const e={id:"",created:Date.now(),valid:0,author:this.settings.User.id,receiver:`\u8bba\u575b[${this.Forum.name}]\u7684\u4f1a\u5458`,roller:0,readed:!1,private:!0,replyable:!0,title:"\u7fa4\u53d1\u6d88\u606f",content:"\u8bf7\u8f93\u5165\u5185\u5bb9\u3002\u3002\u3002"},t=yield this.modalCtrl.create({component:h.a,componentProps:{Message:e,NoSend:!0}});yield t.present();const{data:i}=yield t.onWillDismiss();if(!1!==i){for(const t of this.Forum.user){const i=yield this.forumservice.GetUserInfo(t);e.receiver=i.id,yield this.forumservice.SendMessage(e),console.log("send message to",e.receiver)}this.presentToast("\u60a8\u7684\u7fa4\u53d1\u4fe1\u606f\u5df2\u7ecf\u53d1\u9001\u3002\u3002\u3002",5e3)}}))}onclose(e){return Object(r.b)(this,void 0,void 0,(function*(){if(!1===e)this.modalCtrl.dismiss(!1);else{this.Forum.user=this.Users.split(/;|\uff1b|,|\uff0c|:|\uff1a/).filter(e=>""!==e);const e=Object(l.b)(this.Forum);delete e.id,delete e._id,yield this.showLoading(),this.forumservice.UpdatForum(e,this.Forum.id).then(()=>{this.presentToast("\u66f4\u65b0\u6210\u529f\uff01",3e3),this.modalCtrl.dismiss(!0)}).catch(e=>{this.presentToast("\u66f4\u65b0\u8bba\u575b\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",3e3)}).finally(()=>{this.closeLoading()})}}))}presentConfirm(e,t,i){return Object(r.b)(this,void 0,void 0,(function*(){let o=!1;const n=yield this.alertController.create({header:e||"\u63d0\u793a",subHeader:t||"",message:i,buttons:[{text:"\u786e\u5b9a",handler:()=>{o=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});return yield n.present(),yield n.onWillDismiss(),Promise.resolve(o)}))}presentInput(e,t,i){return Object(r.b)(this,void 0,void 0,(function*(){let o=!1;const n=yield this.alertController.create({header:e||"\u63d0\u793a",subHeader:t||"",inputs:[{name:"name",type:"text",id:"name",value:"",label:i,placeholder:i}],buttons:[{text:"\u786e\u5b9a",handler:()=>{o=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield n.present();const{data:s}=yield n.onWillDismiss();return Promise.resolve(o?s.values:null)}))}presentToast(e,t){return Object(r.b)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:t,color:"secondary",position:"middle"})).present()}))}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u4fdd\u5b58\u5230\u8bba\u575b...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(m.Wb(c.jb),m.Wb(c.bb),m.Wb(c.b),m.Wb(c.cb),m.Wb(u.a),m.Wb(l.a))},e.\u0275cmp=m.Qb({type:e,selectors:[["app-forumeditor"]],inputs:{Forum:"Forum"},decls:33,vars:13,consts:[["color","primary"],["slot","start"],[3,"click"],["slot","end",4,"ngIf"],["required","","type","text",3,"readonly","ngModel","ngModelChange"],[1,"ion-text-wrap"],[3,"click",4,"ngFor","ngForOf"],["slot","end","fill","outline",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["position","stacked"],["placeholder","\u5bf9\u8bba\u575b\u7684\u8be6\u7ec6\u8868\u8ff0\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"],["class","ion-text-wrap",4,"ngIf"],["slot","end"],["slot","end","fill","outline",3,"click"],[3,"src"],["placeholder","\u5bf9\u8bba\u575b\u7684\u8be6\u7ec6\u8868\u8ff0\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange"],["fill","outline",3,"click"],["placeholder","\u6dfb\u52a0\u8fdb\u6765\u7684\u7528\u6237\uff0c\u6ca1\u6709\u4ee5\u4e0a\u6743\u9650\u4e5f\u53ef\u4ee5\u8bbf\u95ee\u672c\u8bba\u575b\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(m.Zb(0,"ion-header"),m.Zb(1,"ion-toolbar",0),m.Zb(2,"ion-buttons",1),m.Zb(3,"ion-button",2),m.hc("click",(function(){return t.onclose(!1)})),m.xc(4," \u53d6\u6d88 "),m.Yb(),m.Yb(),m.Zb(5,"ion-title"),m.xc(6),m.Yb(),m.wc(7,f,3,0,"ion-buttons",3),m.Yb(),m.Yb(),m.Zb(8,"ion-content"),m.Zb(9,"ion-item"),m.Zb(10,"ion-label"),m.xc(11,"\u540d\u5b57\uff1a"),m.Yb(),m.Zb(12,"ion-input",4),m.hc("ngModelChange",(function(e){return t.Forum.name=e})),m.Yb(),m.Yb(),m.Zb(13,"ion-item"),m.Zb(14,"ion-label"),m.xc(15,"\u7b80\u4ecb\uff1a"),m.Yb(),m.Zb(16,"ion-input",4),m.hc("ngModelChange",(function(e){return t.Forum.describe=e})),m.Yb(),m.Yb(),m.Zb(17,"ion-item",5),m.Zb(18,"ion-text"),m.xc(19,"\u7248\u4e3b\uff1a"),m.Yb(),m.wc(20,g,2,1,"ion-chip",6),m.wc(21,p,2,0,"ion-button",7),m.Yb(),m.Zb(22,"ion-item",5),m.Zb(23,"ion-text"),m.xc(24,"\u6743\u9650\uff1a"),m.Yb(),m.wc(25,v,5,2,"ion-chip",8),m.wc(26,y,2,0,"ion-button",7),m.Yb(),m.Zb(27,"ion-item",5),m.Zb(28,"ion-label",9),m.xc(29,"\u8be6\u7ec6\u4ecb\u7ecd"),m.Yb(),m.wc(30,x,1,1,"ion-textarea",10),m.wc(31,Y,2,1,"ion-text",11),m.Yb(),m.wc(32,Z,7,1,"ion-item",12),m.Yb()),2&e&&(m.Mb(6),m.yc(t.Forum.name),m.Mb(1),m.oc("ngIf",t.IsAdmin),m.Mb(5),m.oc("readonly",!t.IsAdmin)("ngModel",t.Forum.name),m.Mb(4),m.oc("readonly",!t.IsAdmin)("ngModel",t.Forum.describe),m.Mb(4),m.oc("ngForOf",t.Forum.admin),m.Mb(1),m.oc("ngIf",t.IsAdmin),m.Mb(4),m.oc("ngForOf",t.Rolers),m.Mb(1),m.oc("ngIf",t.IsAdmin),m.Mb(4),m.oc("ngIf",t.IsAdmin),m.Mb(1),m.oc("ngIf",!t.IsAdmin),m.Mb(1),m.oc("ngIf",t.IsAdmin))},directives:[c.s,c.Y,c.k,c.j,c.W,o.j,c.o,c.w,c.C,c.v,c.ib,n.e,n.c,n.d,c.T,o.i,c.m,c.f,c.U],styles:[""]}),e})();function w(e,t){if(1&e){const e=m.ac();m.Zb(0,"ion-item"),m.Zb(1,"ion-text"),m.xc(2,"\u8fde\u63a5\u670d\u52a1\u5668\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u5c1d\u8bd5\u3002"),m.Yb(),m.Zb(3,"ion-button",13),m.hc("click",(function(){return m.rc(e),m.jc().Reconnect(!0)})),m.xc(4,"\u91cd\u65b0\u8fde\u63a5"),m.Yb(),m.Yb()}}function F(e,t){1&e&&m.Xb(0,"ion-icon",20)}function M(e,t){if(1&e){const e=m.ac();m.Zb(0,"ion-item-sliding"),m.Zb(1,"ion-item",14),m.hc("click",(function(){m.rc(e);const i=t.$implicit;return m.jc(2).NaviToForum(i.id)})),m.Zb(2,"ion-label",15),m.Zb(3,"ion-text"),m.xc(4),m.Yb(),m.Zb(5,"ion-text",8),m.Zb(6,"h6"),m.xc(7),m.Yb(),m.Yb(),m.wc(8,F,1,0,"ion-icon",16),m.Zb(9,"ion-text",17),m.xc(10),m.Yb(),m.Zb(11,"ion-text",17),m.xc(12),m.Yb(),m.Yb(),m.Yb(),m.Zb(13,"ion-item-options",18),m.Zb(14,"ion-item-option",9),m.hc("click",(function(){m.rc(e);const i=t.$implicit;return m.jc(2).ForumEditor(i.name)})),m.Xb(15,"ion-icon",19),m.Yb(),m.Yb(),m.Yb()}if(2&e){const e=t.$implicit;m.Mb(1),m.oc("detail",!e.block),m.Mb(3),m.zc(" ",e.name," "),m.Mb(3),m.yc(e.describe),m.Mb(1),m.oc("ngIf",e.block),m.Mb(2),m.zc("\u65b0\u8d34\uff1a",e.modified.toChinaStr(),""),m.Mb(2),m.zc("\u5e16\u6570\uff1a",e.topiccount,"")}}function O(e,t){if(1&e&&(m.Zb(0,"ion-item-group"),m.Zb(1,"ion-item-divider"),m.Zb(2,"ion-label"),m.xc(3),m.Yb(),m.Yb(),m.wc(4,M,16,6,"ion-item-sliding",7),m.Yb()),2&e){const e=t.$implicit;m.Mb(3),m.yc(e.name),m.Mb(1),m.oc("ngForOf",e.items)}}function j(e,t){if(1&e){const e=m.ac();m.Zb(0,"ion-buttons",2),m.Zb(1,"ion-button",9),m.hc("click",(function(t){return m.rc(e),m.jc().personalOption(t)})),m.Xb(2,"ion-icon",21),m.Zb(3,"ion-text"),m.xc(4,"\u6211\u7684"),m.Yb(),m.Yb(),m.Yb()}}let C=(()=>{class e{constructor(e,t,i,o,n,s,c,r){this.loadingController=e,this.modalCtrl=t,this.alertController=i,this.settings=o,this.forumservice=n,this.host=s,this.popoverCtrl=c,this.router=r,this.forums=[],this.showallforums=!1,this.loadfailed=!1,this.hasuser=!0,this.SortKey="lasttopic"}ngOnInit(){return Object(r.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.user=this.settings.User||this.settings.AnonymUser,this.hasuser=this.settings.HasUser,this.showallforums=!this.hasuser,this.Reconnect(!1)}))}get Forums(){return this.forums}get HasUser(){return this.hasuser}Reconnect(e){return Object(r.b)(this,void 0,void 0,(function*(){this.loadfailed=!1,yield this.showLoading(),this.forumservice.ForumList(e).then(e=>{this.buildForumList(e),this.forumservice.ForumMG.Reset()}).catch(e=>{console.log("forum reconnect",e),this.loadfailed=!0}).finally(()=>{this.closeLoading()})}))}ChangeList(){this.showallforums=!this.showallforums,this.Reconnect(!1)}NaviToForum(e){this.router.navigateByUrl(`menu/topiclist/${e}`)}ForumEditor(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=(yield this.forumservice.ForumList()).find(t=>t.name===e),i=yield this.modalCtrl.create({component:k,componentProps:{Forum:t}});yield i.present();const{data:o}=yield i.onWillDismiss();console.log("Forumeditor close"),!0===o&&this.Reconnect(!1)}))}Setting(){return Object(r.b)(this,void 0,void 0,(function*(){const e=this.settings.ForumSetting;let t=!1;const i=yield this.alertController.create({header:"\u663e\u793a\u504f\u597d",inputs:[{name:"showimg",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u56fe\u7247",value:1,checked:e.showimg},{name:"vip",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u5366\u4f8b",value:2,checked:e.showgua},{name:"huahe",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u547d\u4f8b",value:3,checked:e.showbazi},{name:"bbs",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u56fe\u7247",value:4,checked:!e.imgOut},{name:"liuyao",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u5366\u4f8b",value:5,checked:!e.guaOut},{name:"bazi",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u547d\u4f8b",value:6,checked:!e.baziOut}],buttons:[{text:"\u786e\u5b9a",handler:()=>{t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield i.present();const{data:o}=yield i.onWillDismiss();if(!t)return;const n={showimg:o.values.includes(1),showgua:o.values.includes(2),showbazi:o.values.includes(3),imgOut:!o.values.includes(4),guaOut:!o.values.includes(5),baziOut:!o.values.includes(6)};this.settings.ForumSetting=n}))}sortOptions(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=yield this.popoverCtrl.create({component:b.a,event:e,componentProps:{items:[{name:"\u9ed8\u8ba4",value:"id"},{name:"\u65f6\u95f4",value:"lasttopic"}],currentOption:this.SortKey},translucent:!0});yield t.present();const{data:i}=yield t.onDidDismiss();(i||this.SortKey)!==this.SortKey&&(this.SortKey=i.toString())}))}personalOption(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=[{name:"\u5e16\u5b50",value:"forum_me"},{name:"\u6c42\u52a9",value:"forum_ticket"},{name:"\u6d88\u606f",value:"messagelist"}];this.user.roller>=16&&t.insert(2,{name:"\u5ba2\u6237\u6c42\u52a9",value:"forum_master"});const i=yield this.popoverCtrl.create({component:b.a,event:e,componentProps:{items:t,currentOption:"forum_me"},translucent:!0});yield i.present();const{data:o}=yield i.onDidDismiss(),n=o||"";!n.IsNullOrEmpty()&&n.startsWith("forum_")?this.NaviToForum(n):"messagelist"===n&&this.router.navigateByUrl("menu/messagelist/true")}))}buildForumList(e){this.initForums(),e.map(e=>{const t=new Date(0===e.lasttopic?Date.now():e.lasttopic);let i=e.admin.includes(this.user.id);i=i||e.user.includes(this.user.id),i=i||0===e.reader||(e.reader&this.user.roller)>0;const o={id:e.id,name:e.name,describe:e.describe,modified:t,block:!i,group:e.group,topiccount:e.topiccount};return!0!==this.showallforums&&!1!==o.block||this.forums.find(e=>e.group===o.group).items.push(o),o})}initForums(){this.forums=[{group:0,name:"\u6613\u5b66\u533a",items:[]},{group:1,name:"\u7406\u5b66\u533a",items:[]},{group:2,name:"\u85cf\u5b66\u533a",items:[]},{group:10,name:"\u4e8b\u52a1\u533a",items:[]}]}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5217\u8868...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(m.Wb(c.bb),m.Wb(c.cb),m.Wb(c.b),m.Wb(l.a),m.Wb(u.a),m.Wb(a.a),m.Wb(c.fb),m.Wb(s.g))},e.\u0275cmp=m.Qb({type:e,selectors:[["app-forum"]],decls:28,vars:3,consts:[["color","primary"],["slot","start"],["slot","end"],["size","small",3,"click"],["slot","icon-only","name","md-code-working"],["name","md-funnel"],[4,"ngIf"],[4,"ngFor","ngForOf"],["color","medium"],[3,"click"],["name","refresh"],["name","settings"],["slot","end",4,"ngIf"],["fill","outline",3,"click"],[3,"detail","click"],[1,"ion-text-wrap"],["name","ios-lock","style","margin-right: 10px;",4,"ngIf"],["color","medium",1,"ion-margin-end"],["side","start"],["slot","icon-only","name","information-circle"],["name","ios-lock",2,"margin-right","10px"],["name","person"]],template:function(e,t){1&e&&(m.Zb(0,"ion-header"),m.Zb(1,"ion-toolbar",0),m.Zb(2,"ion-buttons",1),m.Xb(3,"ion-menu-button"),m.Yb(),m.Zb(4,"ion-title"),m.xc(5,"\u8ba8\u8bba\u533a\u5217\u8868"),m.Yb(),m.Zb(6,"ion-buttons",2),m.Zb(7,"ion-button",3),m.hc("click",(function(){return t.ChangeList()})),m.Xb(8,"ion-icon",4),m.Yb(),m.Zb(9,"ion-button",3),m.hc("click",(function(e){return t.sortOptions(e)})),m.Xb(10,"ion-icon",5),m.Zb(11,"ion-text"),m.xc(12,"\u6392\u5e8f"),m.Yb(),m.Yb(),m.Yb(),m.Yb(),m.Yb(),m.Zb(13,"ion-content"),m.wc(14,w,5,0,"ion-item",6),m.wc(15,O,5,2,"ion-item-group",7),m.Yb(),m.Zb(16,"ion-footer"),m.Zb(17,"ion-toolbar",8),m.Zb(18,"ion-buttons",1),m.Zb(19,"ion-button",9),m.hc("click",(function(){return t.Reconnect(!0)})),m.Xb(20,"ion-icon",10),m.Zb(21,"ion-text"),m.xc(22,"\u5237\u65b0"),m.Yb(),m.Yb(),m.Zb(23,"ion-button",9),m.hc("click",(function(){return t.Setting()})),m.Xb(24,"ion-icon",11),m.Zb(25,"ion-text"),m.xc(26,"\u8bbe\u7f6e"),m.Yb(),m.Yb(),m.Yb(),m.wc(27,j,5,0,"ion-buttons",12),m.Yb(),m.Yb()),2&e&&(m.Mb(14),m.oc("ngIf",t.loadfailed),m.Mb(1),m.oc("ngForOf",t.Forums),m.Mb(12),m.oc("ngIf",t.HasUser))},directives:[c.s,c.Y,c.k,c.G,c.W,c.j,c.t,c.T,c.o,o.j,o.i,c.q,c.w,c.y,c.x,c.C,c.B,c.A,c.z],styles:[""]}),e})();i.d(t,"ForumPageModule",(function(){return W}));const I=[{path:"",component:C}];let W=(()=>{class e{}return e.\u0275mod=m.Ub({type:e}),e.\u0275inj=m.Tb({factory:function(t){return new(t||e)},imports:[[o.b,n.a,c.Z,s.i.forChild(I)]]}),e})()}}]);