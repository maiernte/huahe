(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{AyTO:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),o=i("3Pt+"),c=i("tyNb"),s=i("c7TG"),r=i("mrSG"),l=i("LTmD"),a=i("lEof"),u=i("PKx9"),d=i("HQI1"),m=i("Y6BA"),h=i("7L00"),f=i("fXoL");function b(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-buttons",13),f.ec(1,"ion-button",2),f.mc("click",(function(){return f.Ac(e),f.pc().onclose(!0)})),f.Hc(2," \u4fdd\u5b58 "),f.dc(),f.dc()}}function p(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-chip",2),f.mc("click",(function(){f.Ac(e);const i=t.$implicit;return f.pc().DeleteAdmin(i)})),f.Hc(1),f.dc()}if(2&e){const e=t.$implicit;f.Nb(1),f.Ic(e)}}function g(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-button",14),f.mc("click",(function(){return f.Ac(e),f.pc().AddAdmin()})),f.Hc(1,"\u6dfb\u52a0"),f.dc()}}function v(e,t){if(1&e&&(f.ec(0,"ion-chip"),f.ec(1,"ion-avatar"),f.ac(2,"img",15),f.dc(),f.ec(3,"ion-text"),f.Hc(4),f.dc(),f.dc()),2&e){const e=t.$implicit;f.Nb(2),f.uc("src",e.icon,f.Cc),f.Nb(2),f.Ic(e.name)}}function y(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-button",14),f.mc("click",(function(){return f.Ac(e),f.pc().EditRoles()})),f.Hc(1,"\u7f16\u8f91"),f.dc()}}function F(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-textarea",16),f.mc("ngModelChange",(function(t){return f.Ac(e),f.pc().Forum.detail=t})),f.dc()}if(2&e){const e=f.pc();f.uc("ngModel",e.Forum.detail)}}function k(e,t){if(1&e&&(f.ec(0,"ion-text"),f.Hc(1),f.dc()),2&e){const e=f.pc();f.Nb(1),f.Jc(" ",e.Forum.detail||"\u7248\u4e3b\u5f88\u61d2\uff0c\u6ca1\u6709\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002"," ")}}function x(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-item",5),f.ec(1,"ion-label",9),f.ec(2,"ion-text"),f.Hc(3,"\u6dfb\u52a0\u7279\u8bb8\u7528\u6237\uff0c\u540d\u5b57\u95f4\u7528\u82f1\u6587\u5206\u53f7\u9694\u5f00\uff1a"),f.dc(),f.ec(4,"ion-button",17),f.mc("click",(function(){return f.Ac(e),f.pc().EditMessage()})),f.Hc(5,"\u7fa4\u53d1\u6d88\u606f"),f.dc(),f.dc(),f.ec(6,"ion-textarea",18),f.mc("ngModelChange",(function(t){return f.Ac(e),f.pc().Users=t})),f.dc(),f.dc()}if(2&e){const e=f.pc();f.Nb(6),f.uc("ngModel",e.Users)}}let w=(()=>{class e{constructor(e,t,i,n,o,c){this.toastController=e,this.loadingController=t,this.alertController=i,this.modalCtrl=n,this.forumservice=o,this.settings=c,this.Rolers=[],this.Users=""}ngOnInit(){this.Rolers=this.settings.UserRolers(this.Forum.reader||0),this.Users=(this.Forum.user||[]).join(";")}get IsAdmin(){return this.settings.User.roller>=256}DeleteAdmin(e){return Object(r.b)(this,void 0,void 0,(function*(){this.IsAdmin&&(yield this.presentConfirm("\u5220\u9664\u7248\u4e3b",null,`\u786e\u5b9a\u5220\u9664\u7528\u6237 [${e}] \u7684\u7248\u4e3b\u804c\u52a1\u5417\uff1f`))&&(this.Forum.admin=this.Forum.admin.filter(t=>t!==e))}))}AddAdmin(){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.presentInput("\u65b0\u7248\u4e3b",null,"\u7528\u6237\u8d26\u6237");if(e){const t=yield this.forumservice.GetUserInfo(e.name);t&&t.id===e.name?this.Forum.admin.push(e.name):this.presentToast(`\u627e\u4e0d\u5230\u7528\u6237 [${e.name}]`,3e3)}}))}EditRoles(){return Object(r.b)(this,void 0,void 0,(function*(){const e=this.Forum.reader||1;let t=!1;const i=yield this.alertController.create({header:"\u63a5\u6536\u8005\u89d2\u8272",inputs:[{name:"register",type:"checkbox",label:"\u6ce8\u518c\u7528\u6237",value:1,checked:(1&e)>0},{name:"vip",type:"checkbox",label:"VIP\u7528\u6237",value:2,checked:(2&e)>0},{name:"huahe",type:"checkbox",label:"\u534e\u9e64\u540c\u95e8",value:4,checked:(4&e)>0},{name:"bbs",type:"checkbox",label:"\u7248\u4e3b",value:8,checked:(8&e)>0},{name:"liuyao",type:"checkbox",label:"\u516d\u723b\u8001\u5e08",value:16,checked:(16&e)>0},{name:"bazi",type:"checkbox",label:"\u547d\u7406\u8001\u5e08",value:32,checked:(32&e)>0},{name:"fengshui",type:"checkbox",label:"\u98ce\u6c34\u8001\u5e08",value:64,checked:(64&e)>0},{name:"supermaster",type:"checkbox",label:"\u5927\u5b97\u5e08",value:128,checked:(128&e)>0},{name:"admin",type:"checkbox",label:"\u7ba1\u7406\u5458",value:256,checked:(256&e)>0}],buttons:[{text:"\u786e\u5b9a",handler:()=>{t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield i.present();const{data:n}=yield i.onWillDismiss();if(!t)return;let o=0;for(const c of n.values)o|=c;this.Forum.reader=o,this.Rolers=this.settings.UserRolers(o)}))}EditMessage(){return Object(r.b)(this,void 0,void 0,(function*(){if(0===this.Forum.user.length)return void this.presentToast("\u8bba\u575b\u6ca1\u6709\u7279\u7ea6\u7528\u6237\u3002\u65e0\u6cd5\u53d1\u9001\u7fa4\u4f53\u4fe1\u606f\u3002",5e3);Object(m.b)();const e={id:"",created:Date.now(),valid:0,author:this.settings.User.id,receiver:`\u8bba\u575b[${this.Forum.name}]\u7684\u4f1a\u5458`,roller:0,readed:!1,private:!0,replyable:!0,title:"\u7fa4\u53d1\u6d88\u606f",content:"\u8bf7\u8f93\u5165\u5185\u5bb9\u3002\u3002\u3002"},t=yield this.modalCtrl.create({component:h.a,componentProps:{Message:e,NoSend:!0}});yield t.present();const{data:i}=yield t.onWillDismiss();if(!1!==i){for(const t of this.Forum.user){const i=yield this.forumservice.GetUserInfo(t);e.receiver=i.id,yield this.forumservice.SendMessage(e),console.log("send message to",e.receiver)}this.presentToast("\u60a8\u7684\u7fa4\u53d1\u4fe1\u606f\u5df2\u7ecf\u53d1\u9001\u3002\u3002\u3002",5e3)}}))}onclose(e){return Object(r.b)(this,void 0,void 0,(function*(){if(!1===e)this.modalCtrl.dismiss(!1);else{this.Forum.user=this.Users.split(/;|\uff1b|,|\uff0c|:|\uff1a/).filter(e=>""!==e);const e=Object(l.b)(this.Forum);delete e.id,delete e._id,yield this.showLoading(),this.forumservice.UpdatForum(e,this.Forum.id).then(()=>{this.presentToast("\u66f4\u65b0\u6210\u529f\uff01",3e3),this.modalCtrl.dismiss(!0)}).catch(e=>{this.presentToast("\u66f4\u65b0\u8bba\u575b\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",3e3)}).finally(()=>{this.closeLoading()})}}))}presentConfirm(e,t,i){return Object(r.b)(this,void 0,void 0,(function*(){let n=!1;const o=yield this.alertController.create({header:e||"\u63d0\u793a",subHeader:t||"",message:i,buttons:[{text:"\u786e\u5b9a",handler:()=>{n=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});return yield o.present(),yield o.onWillDismiss(),Promise.resolve(n)}))}presentInput(e,t,i){return Object(r.b)(this,void 0,void 0,(function*(){let n=!1;const o=yield this.alertController.create({header:e||"\u63d0\u793a",subHeader:t||"",inputs:[{name:"name",type:"text",id:"name",value:"",label:i,placeholder:i}],buttons:[{text:"\u786e\u5b9a",handler:()=>{n=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield o.present();const{data:c}=yield o.onWillDismiss();return Promise.resolve(n?c.values:null)}))}presentToast(e,t){return Object(r.b)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:t,color:"secondary",position:"middle"})).present()}))}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u4fdd\u5b58\u5230\u8bba\u575b...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(f.Zb(s.kb),f.Zb(s.cb),f.Zb(s.b),f.Zb(s.db),f.Zb(u.a),f.Zb(l.a))},e.\u0275cmp=f.Tb({type:e,selectors:[["app-forumeditor"]],inputs:{Forum:"Forum"},decls:33,vars:13,consts:[["color","primary"],["slot","start"],[3,"click"],["slot","end",4,"ngIf"],["required","","type","text",3,"readonly","ngModel","ngModelChange"],[1,"ion-text-wrap"],[3,"click",4,"ngFor","ngForOf"],["slot","end","fill","outline",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["position","stacked"],["placeholder","\u5bf9\u8bba\u575b\u7684\u8be6\u7ec6\u8868\u8ff0\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"],["class","ion-text-wrap",4,"ngIf"],["slot","end"],["slot","end","fill","outline",3,"click"],[3,"src"],["placeholder","\u5bf9\u8bba\u575b\u7684\u8be6\u7ec6\u8868\u8ff0\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange"],["fill","outline",3,"click"],["placeholder","\u6dfb\u52a0\u8fdb\u6765\u7684\u7528\u6237\uff0c\u6ca1\u6709\u4ee5\u4e0a\u6743\u9650\u4e5f\u53ef\u4ee5\u8bbf\u95ee\u672c\u8bba\u575b\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(f.ec(0,"ion-header"),f.ec(1,"ion-toolbar",0),f.ec(2,"ion-buttons",1),f.ec(3,"ion-button",2),f.mc("click",(function(){return t.onclose(!1)})),f.Hc(4," \u53d6\u6d88 "),f.dc(),f.dc(),f.ec(5,"ion-title"),f.Hc(6),f.dc(),f.Fc(7,b,3,0,"ion-buttons",3),f.dc(),f.dc(),f.ec(8,"ion-content"),f.ec(9,"ion-item"),f.ec(10,"ion-label"),f.Hc(11,"\u540d\u5b57\uff1a"),f.dc(),f.ec(12,"ion-input",4),f.mc("ngModelChange",(function(e){return t.Forum.name=e})),f.dc(),f.dc(),f.ec(13,"ion-item"),f.ec(14,"ion-label"),f.Hc(15,"\u7b80\u4ecb\uff1a"),f.dc(),f.ec(16,"ion-input",4),f.mc("ngModelChange",(function(e){return t.Forum.describe=e})),f.dc(),f.dc(),f.ec(17,"ion-item",5),f.ec(18,"ion-text"),f.Hc(19,"\u7248\u4e3b\uff1a"),f.dc(),f.Fc(20,p,2,1,"ion-chip",6),f.Fc(21,g,2,0,"ion-button",7),f.dc(),f.ec(22,"ion-item",5),f.ec(23,"ion-text"),f.Hc(24,"\u6743\u9650\uff1a"),f.dc(),f.Fc(25,v,5,2,"ion-chip",8),f.Fc(26,y,2,0,"ion-button",7),f.dc(),f.ec(27,"ion-item",5),f.ec(28,"ion-label",9),f.Hc(29,"\u8be6\u7ec6\u4ecb\u7ecd"),f.dc(),f.Fc(30,F,1,1,"ion-textarea",10),f.Fc(31,k,2,1,"ion-text",11),f.dc(),f.Fc(32,x,7,1,"ion-item",12),f.dc()),2&e&&(f.Nb(6),f.Ic(t.Forum.name),f.Nb(1),f.uc("ngIf",t.IsAdmin),f.Nb(5),f.uc("readonly",!t.IsAdmin)("ngModel",t.Forum.name),f.Nb(4),f.uc("readonly",!t.IsAdmin)("ngModel",t.Forum.describe),f.Nb(4),f.uc("ngForOf",t.Forum.admin),f.Nb(1),f.uc("ngIf",t.IsAdmin),f.Nb(4),f.uc("ngForOf",t.Rolers),f.Nb(1),f.uc("ngIf",t.IsAdmin),f.Nb(4),f.uc("ngIf",t.IsAdmin),f.Nb(1),f.uc("ngIf",!t.IsAdmin),f.Nb(1),f.uc("ngIf",t.IsAdmin))},directives:[s.t,s.Z,s.j,s.i,s.X,n.j,s.n,s.x,s.D,s.w,s.jb,o.h,o.f,o.g,s.U,n.i,s.l,s.e,s.V],styles:[""]}),e})();function I(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-item"),f.ec(1,"ion-text"),f.Hc(2,"\u8fde\u63a5\u670d\u52a1\u5668\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u5c1d\u8bd5\u3002"),f.dc(),f.ec(3,"ion-button",12),f.mc("click",(function(){return f.Ac(e),f.pc().Reconnect(!0)})),f.Hc(4,"\u91cd\u65b0\u8fde\u63a5"),f.dc(),f.dc()}}function O(e,t){1&e&&f.ac(0,"ion-icon",19)}function C(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-item-sliding"),f.ec(1,"ion-item",13),f.mc("click",(function(){f.Ac(e);const i=t.$implicit;return f.pc(2).NaviToForum(i.id)})),f.ec(2,"ion-label",14),f.ec(3,"ion-text"),f.Hc(4),f.dc(),f.ec(5,"ion-text",8),f.ec(6,"h6"),f.Hc(7),f.dc(),f.dc(),f.Fc(8,O,1,0,"ion-icon",15),f.ec(9,"ion-text",16),f.Hc(10),f.dc(),f.ec(11,"ion-text",16),f.Hc(12),f.dc(),f.dc(),f.dc(),f.ec(13,"ion-item-options",17),f.ec(14,"ion-item-option",9),f.mc("click",(function(){f.Ac(e);const i=t.$implicit;return f.pc(2).ForumEditor(i.name)})),f.ac(15,"ion-icon",18),f.dc(),f.dc(),f.dc()}if(2&e){const e=t.$implicit;f.Nb(1),f.uc("detail",!e.block),f.Nb(3),f.Jc(" ",e.name," "),f.Nb(3),f.Ic(e.describe),f.Nb(1),f.uc("ngIf",e.block),f.Nb(2),f.Jc("\u65b0\u8d34\uff1a",e.modified.toChinaStr(),""),f.Nb(2),f.Jc("\u5e16\u6570\uff1a",e.topiccount,"")}}function H(e,t){if(1&e&&(f.ec(0,"ion-item-group"),f.ec(1,"ion-item-divider"),f.ec(2,"ion-label"),f.Hc(3),f.dc(),f.dc(),f.Fc(4,C,16,6,"ion-item-sliding",7),f.dc()),2&e){const e=t.$implicit;f.Nb(3),f.Ic(e.name),f.Nb(1),f.uc("ngForOf",e.items)}}function N(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-buttons",2),f.ec(1,"ion-button",9),f.mc("click",(function(t){return f.Ac(e),f.pc().personalOption(t)})),f.ac(2,"ion-icon",20),f.ec(3,"ion-text"),f.Hc(4,"\u6211\u7684"),f.dc(),f.dc(),f.dc()}}let A=(()=>{class e{constructor(e,t,i,n,o,c,s,r){this.loadingController=e,this.modalCtrl=t,this.alertController=i,this.settings=n,this.forumservice=o,this.host=c,this.popoverCtrl=s,this.router=r,this.forums=[],this.showallforums=!1,this.loadfailed=!1,this.hasuser=!0,this.SortKey="lasttopic"}ngOnInit(){return Object(r.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.user=this.settings.User||m.a,this.hasuser=this.settings.HasUser,this.showallforums=!this.hasuser,this.Reconnect(!1)}))}get Forums(){return this.forums}get HasUser(){return this.hasuser}Reconnect(e){return Object(r.b)(this,void 0,void 0,(function*(){this.loadfailed=!1,yield this.showLoading(),this.forumservice.ForumList(e).then(e=>{this.buildForumList(e),this.forumservice.ForumMG.Reset()}).catch(e=>{console.log("forum reconnect",e),this.loadfailed=!0}).finally(()=>{this.closeLoading()})}))}ChangeList(){this.showallforums=!this.showallforums,this.Reconnect(!1)}NaviToForum(e){this.router.navigateByUrl(`menu/topiclist/${e}`)}ForumEditor(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=(yield this.forumservice.ForumList()).find(t=>t.name===e),i=yield this.modalCtrl.create({component:w,componentProps:{Forum:t}});yield i.present();const{data:n}=yield i.onWillDismiss();console.log("Forumeditor close"),!0===n&&this.Reconnect(!1)}))}Setting(){return Object(r.b)(this,void 0,void 0,(function*(){let e=!1;const t=yield this.alertController.create({header:"\u663e\u793a\u504f\u597d",inputs:[{name:"showimg",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u56fe\u7247",value:1,checked:null.showimg},{name:"vip",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u5366\u4f8b",value:2,checked:null.showgua},{name:"huahe",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u547d\u4f8b",value:3,checked:null.showbazi},{name:"bbs",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u56fe\u7247",value:4,checked:!null.imgOut},{name:"liuyao",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u5366\u4f8b",value:5,checked:!null.guaOut},{name:"bazi",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u547d\u4f8b",value:6,checked:!null.baziOut}],buttons:[{text:"\u786e\u5b9a",handler:()=>{e=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield t.present();const{data:i}=yield t.onWillDismiss();e&&(i.values.includes(1),i.values.includes(2),i.values.includes(3),i.values.includes(4),i.values.includes(5),i.values.includes(6))}))}sortOptions(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=yield this.popoverCtrl.create({component:d.a,event:e,componentProps:{items:[{name:"\u9ed8\u8ba4",value:"id"},{name:"\u65f6\u95f4",value:"lasttopic"}],currentOption:this.SortKey},translucent:!0});yield t.present();const{data:i}=yield t.onDidDismiss();(i||this.SortKey)!==this.SortKey&&(this.SortKey=i.toString())}))}personalOption(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=[{name:"\u5e16\u5b50",value:"forum_me"},{name:"\u6c42\u52a9",value:"forum_ticket"},{name:"\u6d88\u606f",value:"messagelist"},{name:"\u627e\u4eba",value:"searchuser"}];this.user.roller>=16&&t.insert(2,{name:"\u5ba2\u6237\u6c42\u52a9",value:"forum_master"});const i=yield this.popoverCtrl.create({component:d.a,event:e,componentProps:{items:t,currentOption:"forum_me"},translucent:!0});yield i.present();const{data:n}=yield i.onDidDismiss(),o=n||"";!o.IsNullOrEmpty()&&o.startsWith("forum_")?this.NaviToForum(o):"messagelist"===o?this.router.navigateByUrl("menu/messagelist/true"):"searchuser"===o&&this.router.navigateByUrl("menu/searchuser")}))}buildForumList(e){this.initForums(),e.map(e=>{const t=new Date(0===e.lasttopic?Date.now():e.lasttopic);let i=e.admin.includes(this.user.id);i=i||e.user.includes(this.user.id),i=i||0===e.reader||(e.reader&this.user.roller)>0;const n={id:e.id,name:e.name,describe:e.describe,modified:t,block:!i,group:e.group,topiccount:e.topiccount};return!0!==this.showallforums&&!1!==n.block||this.forums.find(e=>e.group===n.group).items.push(n),n})}initForums(){this.forums=[{group:0,name:"\u6613\u5b66\u533a",items:[]},{group:1,name:"\u7406\u5b66\u533a",items:[]},{group:2,name:"\u85cf\u5b66\u533a",items:[]},{group:10,name:"\u4e8b\u52a1\u533a",items:[]}]}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5217\u8868...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(f.Zb(s.cb),f.Zb(s.db),f.Zb(s.b),f.Zb(l.a),f.Zb(u.a),f.Zb(a.a),f.Zb(s.gb),f.Zb(c.g))},e.\u0275cmp=f.Tb({type:e,selectors:[["app-forum"]],decls:24,vars:3,consts:[["color","primary"],["slot","start"],["slot","end"],["size","small",3,"click"],["slot","icon-only","name","md-code-working"],["name","md-funnel"],[4,"ngIf"],[4,"ngFor","ngForOf"],["color","medium"],[3,"click"],["name","refresh"],["slot","end",4,"ngIf"],["fill","outline",3,"click"],[3,"detail","click"],[1,"ion-text-wrap"],["name","ios-lock","style","margin-right: 10px;",4,"ngIf"],["color","medium",1,"ion-margin-end"],["side","start"],["slot","icon-only","name","information-circle"],["name","ios-lock",2,"margin-right","10px"],["name","person"]],template:function(e,t){1&e&&(f.ec(0,"ion-header"),f.ec(1,"ion-toolbar",0),f.ec(2,"ion-buttons",1),f.ac(3,"ion-menu-button"),f.dc(),f.ec(4,"ion-title"),f.Hc(5,"\u8ba8\u8bba\u533a\u5217\u8868"),f.dc(),f.ec(6,"ion-buttons",2),f.ec(7,"ion-button",3),f.mc("click",(function(){return t.ChangeList()})),f.ac(8,"ion-icon",4),f.dc(),f.ec(9,"ion-button",3),f.mc("click",(function(e){return t.sortOptions(e)})),f.ac(10,"ion-icon",5),f.ec(11,"ion-text"),f.Hc(12,"\u6392\u5e8f"),f.dc(),f.dc(),f.dc(),f.dc(),f.dc(),f.ec(13,"ion-content"),f.Fc(14,I,5,0,"ion-item",6),f.Fc(15,H,5,2,"ion-item-group",7),f.dc(),f.ec(16,"ion-footer"),f.ec(17,"ion-toolbar",8),f.ec(18,"ion-buttons",1),f.ec(19,"ion-button",9),f.mc("click",(function(){return t.Reconnect(!0)})),f.ac(20,"ion-icon",10),f.ec(21,"ion-text"),f.Hc(22,"\u5237\u65b0"),f.dc(),f.dc(),f.dc(),f.Fc(23,N,5,0,"ion-buttons",11),f.dc(),f.dc()),2&e&&(f.Nb(14),f.uc("ngIf",t.loadfailed),f.Nb(1),f.uc("ngForOf",t.Forums),f.Nb(8),f.uc("ngIf",t.HasUser))},directives:[s.t,s.Z,s.j,s.H,s.X,s.i,s.u,s.U,s.n,n.j,n.i,s.r,s.x,s.z,s.y,s.D,s.C,s.B,s.A],styles:[""]}),e})();i.d(t,"ForumPageModule",(function(){return M}));const j=[{path:"",component:A}];let M=(()=>{class e{}return e.\u0275mod=f.Xb({type:e}),e.\u0275inj=f.Wb({factory:function(t){return new(t||e)},imports:[[n.b,o.c,s.ab,c.i.forChild(j)]]}),e})()},HQI1:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i("c7TG"),o=i("fXoL"),c=i("ofXK");function s(e,t){if(1&e){const e=o.fc();o.ec(0,"ion-item",2),o.mc("click",(function(){o.Ac(e);const i=t.$implicit;return o.pc(2).onSelect(i.value)})),o.ec(1,"ion-text"),o.Hc(2),o.dc(),o.dc()}if(2&e){const e=t.$implicit,i=o.pc(2);o.uc("color",e.value===i.currentOption?"light":""),o.Nb(2),o.Ic(e.name)}}function r(e,t){if(1&e&&(o.ec(0,"div"),o.Fc(1,s,3,2,"ion-item",1),o.dc()),2&e){const e=o.pc();o.Nb(1),o.uc("ngForOf",e.items)}}function l(e,t){if(1&e&&o.ac(0,"ion-note",8),2&e){const e=o.pc().$implicit;o.uc("innerHtml",e.name,o.Bc)}}function a(e,t){if(1&e&&(o.ec(0,"ion-item",5),o.Fc(1,l,1,1,"ion-note",6),o.ec(2,"ion-label",7),o.ac(3,"ion-text",8),o.dc(),o.dc()),2&e){const e=t.$implicit;o.Nb(1),o.uc("ngIf",e.name),o.Nb(2),o.uc("innerHtml",e.value,o.Bc)}}function u(e,t){if(1&e&&(o.ec(0,"small"),o.ec(1,"ion-list",3),o.Fc(2,a,4,2,"ion-item",4),o.dc(),o.dc()),2&e){const e=o.pc();o.Nb(2),o.uc("ngForOf",e.items)}}let d=(()=>{class e{constructor(e){this.popoverCtrl=e,this.toselect=!0}ngOnInit(){}onSelect(e){this.popoverCtrl.dismiss(e)}}return e.\u0275fac=function(t){return new(t||e)(o.Zb(n.gb))},e.\u0275cmp=o.Tb({type:e,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],[1,"ion-no-padding"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[3,"innerHtml",4,"ngIf"],["slot","end",1,"ion-text-wrap"],[3,"innerHtml"]],template:function(e,t){1&e&&(o.Fc(0,r,2,1,"div",0),o.Fc(1,u,3,1,"small",0)),2&e&&(o.uc("ngIf",t.toselect),o.Nb(1),o.uc("ngIf",!t.toselect))},directives:[c.j,c.i,n.x,n.U,n.E,n.D,n.J],styles:[""]}),e})()}}]);