(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{AyTO:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),o=i("3Pt+"),c=i("tyNb"),s=i("c7TG"),r=i("mrSG"),l=i("LTmD"),a=i("lEof"),d=i("PKx9"),u=i("HQI1"),m=i("Y6BA"),h=i("7L00"),f=i("fXoL");function b(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-buttons",13),f.ec(1,"ion-button",2),f.mc("click",(function(){return f.Bc(e),f.pc().onclose(!0)})),f.Ic(2," \u4fdd\u5b58 "),f.dc(),f.dc()}}function p(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-chip",2),f.mc("click",(function(){f.Bc(e);const i=t.$implicit;return f.pc().DeleteAdmin(i)})),f.Ic(1),f.dc()}if(2&e){const e=t.$implicit;f.Nb(1),f.Jc(e)}}function g(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-button",14),f.mc("click",(function(){return f.Bc(e),f.pc().AddAdmin()})),f.Ic(1,"\u6dfb\u52a0"),f.dc()}}function v(e,t){if(1&e&&(f.ec(0,"ion-chip"),f.ec(1,"ion-avatar"),f.ac(2,"img",15),f.dc(),f.ec(3,"ion-text"),f.Ic(4),f.dc(),f.dc()),2&e){const e=t.$implicit;f.Nb(2),f.vc("src",e.icon,f.Dc),f.Nb(2),f.Jc(e.name)}}function y(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-button",14),f.mc("click",(function(){return f.Bc(e),f.pc().EditRoles()})),f.Ic(1,"\u7f16\u8f91"),f.dc()}}function I(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-textarea",16),f.mc("ngModelChange",(function(t){return f.Bc(e),f.pc().Forum.detail=t})),f.dc()}if(2&e){const e=f.pc();f.vc("ngModel",e.Forum.detail)}}function k(e,t){if(1&e&&(f.ec(0,"ion-text"),f.Ic(1),f.dc()),2&e){const e=f.pc();f.Nb(1),f.Kc(" ",e.Forum.detail||"\u7248\u4e3b\u5f88\u61d2\uff0c\u6ca1\u6709\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002"," ")}}function F(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-item",5),f.ec(1,"ion-label",9),f.ec(2,"ion-text"),f.Ic(3,"\u6dfb\u52a0\u7279\u8bb8\u7528\u6237\uff0c\u540d\u5b57\u95f4\u7528\u82f1\u6587\u5206\u53f7\u9694\u5f00\uff1a"),f.dc(),f.ec(4,"ion-button",17),f.mc("click",(function(){return f.Bc(e),f.pc().EditMessage()})),f.Ic(5,"\u7fa4\u53d1\u6d88\u606f"),f.dc(),f.dc(),f.ec(6,"ion-textarea",18),f.mc("ngModelChange",(function(t){return f.Bc(e),f.pc().Users=t})),f.dc(),f.dc()}if(2&e){const e=f.pc();f.Nb(6),f.vc("ngModel",e.Users)}}let x=(()=>{class e{constructor(e,t,i,n,o,c){this.toastController=e,this.loadingController=t,this.alertController=i,this.modalCtrl=n,this.forumservice=o,this.settings=c,this.Rolers=[],this.Users=""}ngOnInit(){this.Rolers=this.settings.UserRolers(this.Forum.reader||0),this.Users=(this.Forum.user||[]).join(";")}get IsAdmin(){return this.settings.User.roller>=256}DeleteAdmin(e){return Object(r.b)(this,void 0,void 0,(function*(){this.IsAdmin&&(yield this.presentConfirm("\u5220\u9664\u7248\u4e3b",null,`\u786e\u5b9a\u5220\u9664\u7528\u6237 [${e}] \u7684\u7248\u4e3b\u804c\u52a1\u5417\uff1f`))&&(this.Forum.admin=this.Forum.admin.filter(t=>t!==e))}))}AddAdmin(){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.presentInput("\u65b0\u7248\u4e3b",null,"\u7528\u6237\u8d26\u6237");if(e){const t=yield this.forumservice.GetUserInfo(e.name);t&&t.id===e.name?this.Forum.admin.push(e.name):this.presentToast(`\u627e\u4e0d\u5230\u7528\u6237 [${e.name}]`,3e3)}}))}EditRoles(){return Object(r.b)(this,void 0,void 0,(function*(){const e=this.Forum.reader||1;let t=!1;const i=yield this.alertController.create({header:"\u63a5\u6536\u8005\u89d2\u8272",inputs:[{name:"register",type:"checkbox",label:"\u6ce8\u518c\u7528\u6237",value:1,checked:(1&e)>0},{name:"vip",type:"checkbox",label:"VIP\u7528\u6237",value:2,checked:(2&e)>0},{name:"huahe",type:"checkbox",label:"\u534e\u9e64\u540c\u95e8",value:4,checked:(4&e)>0},{name:"bbs",type:"checkbox",label:"\u7248\u4e3b",value:8,checked:(8&e)>0},{name:"liuyao",type:"checkbox",label:"\u516d\u723b\u8001\u5e08",value:16,checked:(16&e)>0},{name:"bazi",type:"checkbox",label:"\u547d\u7406\u8001\u5e08",value:32,checked:(32&e)>0},{name:"fengshui",type:"checkbox",label:"\u98ce\u6c34\u8001\u5e08",value:64,checked:(64&e)>0},{name:"supermaster",type:"checkbox",label:"\u5927\u5b97\u5e08",value:128,checked:(128&e)>0},{name:"admin",type:"checkbox",label:"\u7ba1\u7406\u5458",value:256,checked:(256&e)>0}],buttons:[{text:"\u786e\u5b9a",handler:()=>{t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield i.present();const{data:n}=yield i.onWillDismiss();if(!t)return;let o=0;for(const c of n.values)o|=c;this.Forum.reader=o,this.Rolers=this.settings.UserRolers(o)}))}EditMessage(){return Object(r.b)(this,void 0,void 0,(function*(){if(0===this.Forum.user.length)return void this.presentToast("\u8bba\u575b\u6ca1\u6709\u7279\u7ea6\u7528\u6237\u3002\u65e0\u6cd5\u53d1\u9001\u7fa4\u4f53\u4fe1\u606f\u3002",5e3);Object(m.c)();const e={id:"",created:Date.now(),valid:0,author:this.settings.User.id,receiver:`\u8bba\u575b[${this.Forum.name}]\u7684\u4f1a\u5458`,roller:0,readed:!1,private:!0,replyable:!0,title:"\u7fa4\u53d1\u6d88\u606f",content:"\u8bf7\u8f93\u5165\u5185\u5bb9\u3002\u3002\u3002"},t=yield this.modalCtrl.create({component:h.a,componentProps:{Message:e,NoSend:!0}});yield t.present();const{data:i}=yield t.onWillDismiss();if(!1!==i){for(const t of this.Forum.user){const i=yield this.forumservice.GetUserInfo(t);e.receiver=i.id,yield this.forumservice.SendMessage(e),console.log("send message to",e.receiver)}this.presentToast("\u60a8\u7684\u7fa4\u53d1\u4fe1\u606f\u5df2\u7ecf\u53d1\u9001\u3002\u3002\u3002",5e3)}}))}onclose(e){return Object(r.b)(this,void 0,void 0,(function*(){if(!1===e)this.modalCtrl.dismiss(!1);else{this.Forum.user=this.Users.split(/;|\uff1b|,|\uff0c|:|\uff1a/).filter(e=>""!==e);const e=Object(l.b)(this.Forum);delete e.id,delete e._id,yield this.showLoading(),this.forumservice.UpdatForum(e,this.Forum.id).then(()=>{this.presentToast("\u66f4\u65b0\u6210\u529f\uff01",3e3),this.modalCtrl.dismiss(!0)}).catch(e=>{this.presentToast("\u66f4\u65b0\u8bba\u575b\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",3e3)}).finally(()=>{this.closeLoading()})}}))}presentConfirm(e,t,i){return Object(r.b)(this,void 0,void 0,(function*(){let n=!1;const o=yield this.alertController.create({header:e||"\u63d0\u793a",subHeader:t||"",message:i,buttons:[{text:"\u786e\u5b9a",handler:()=>{n=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});return yield o.present(),yield o.onWillDismiss(),Promise.resolve(n)}))}presentInput(e,t,i){return Object(r.b)(this,void 0,void 0,(function*(){let n=!1;const o=yield this.alertController.create({header:e||"\u63d0\u793a",subHeader:t||"",inputs:[{name:"name",type:"text",id:"name",value:"",label:i,placeholder:i}],buttons:[{text:"\u786e\u5b9a",handler:()=>{n=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield o.present();const{data:c}=yield o.onWillDismiss();return Promise.resolve(n?c.values:null)}))}presentToast(e,t){return Object(r.b)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:t,color:"secondary",position:"middle"})).present()}))}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u4fdd\u5b58\u5230\u8bba\u575b...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(f.Zb(s.jb),f.Zb(s.bb),f.Zb(s.b),f.Zb(s.cb),f.Zb(d.a),f.Zb(l.a))},e.\u0275cmp=f.Tb({type:e,selectors:[["app-forumeditor"]],inputs:{Forum:"Forum"},decls:33,vars:13,consts:[["color","primary"],["slot","start"],[3,"click"],["slot","end",4,"ngIf"],["required","","type","text",3,"readonly","ngModel","ngModelChange"],[1,"ion-text-wrap"],[3,"click",4,"ngFor","ngForOf"],["slot","end","fill","outline",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["position","stacked"],["placeholder","\u5bf9\u8bba\u575b\u7684\u8be6\u7ec6\u8868\u8ff0\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"],["class","ion-text-wrap",4,"ngIf"],["slot","end"],["slot","end","fill","outline",3,"click"],[3,"src"],["placeholder","\u5bf9\u8bba\u575b\u7684\u8be6\u7ec6\u8868\u8ff0\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange"],["fill","outline",3,"click"],["placeholder","\u6dfb\u52a0\u8fdb\u6765\u7684\u7528\u6237\uff0c\u6ca1\u6709\u4ee5\u4e0a\u6743\u9650\u4e5f\u53ef\u4ee5\u8bbf\u95ee\u672c\u8bba\u575b\u3002\u3002\u3002","rows","6","auto-grow","true",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(f.ec(0,"ion-header"),f.ec(1,"ion-toolbar",0),f.ec(2,"ion-buttons",1),f.ec(3,"ion-button",2),f.mc("click",(function(){return t.onclose(!1)})),f.Ic(4," \u53d6\u6d88 "),f.dc(),f.dc(),f.ec(5,"ion-title"),f.Ic(6),f.dc(),f.Gc(7,b,3,0,"ion-buttons",3),f.dc(),f.dc(),f.ec(8,"ion-content"),f.ec(9,"ion-item"),f.ec(10,"ion-label"),f.Ic(11,"\u540d\u5b57\uff1a"),f.dc(),f.ec(12,"ion-input",4),f.mc("ngModelChange",(function(e){return t.Forum.name=e})),f.dc(),f.dc(),f.ec(13,"ion-item"),f.ec(14,"ion-label"),f.Ic(15,"\u7b80\u4ecb\uff1a"),f.dc(),f.ec(16,"ion-input",4),f.mc("ngModelChange",(function(e){return t.Forum.describe=e})),f.dc(),f.dc(),f.ec(17,"ion-item",5),f.ec(18,"ion-text"),f.Ic(19,"\u7248\u4e3b\uff1a"),f.dc(),f.Gc(20,p,2,1,"ion-chip",6),f.Gc(21,g,2,0,"ion-button",7),f.dc(),f.ec(22,"ion-item",5),f.ec(23,"ion-text"),f.Ic(24,"\u6743\u9650\uff1a"),f.dc(),f.Gc(25,v,5,2,"ion-chip",8),f.Gc(26,y,2,0,"ion-button",7),f.dc(),f.ec(27,"ion-item",5),f.ec(28,"ion-label",9),f.Ic(29,"\u8be6\u7ec6\u4ecb\u7ecd"),f.dc(),f.Gc(30,I,1,1,"ion-textarea",10),f.Gc(31,k,2,1,"ion-text",11),f.dc(),f.Gc(32,F,7,1,"ion-item",12),f.dc()),2&e&&(f.Nb(6),f.Jc(t.Forum.name),f.Nb(1),f.vc("ngIf",t.IsAdmin),f.Nb(5),f.vc("readonly",!t.IsAdmin)("ngModel",t.Forum.name),f.Nb(4),f.vc("readonly",!t.IsAdmin)("ngModel",t.Forum.describe),f.Nb(4),f.vc("ngForOf",t.Forum.admin),f.Nb(1),f.vc("ngIf",t.IsAdmin),f.Nb(4),f.vc("ngForOf",t.Rolers),f.Nb(1),f.vc("ngIf",t.IsAdmin),f.Nb(4),f.vc("ngIf",t.IsAdmin),f.Nb(1),f.vc("ngIf",!t.IsAdmin),f.Nb(1),f.vc("ngIf",t.IsAdmin))},directives:[s.t,s.Y,s.j,s.i,s.W,n.j,s.n,s.x,s.D,s.w,s.ib,o.h,o.f,o.g,s.T,n.i,s.l,s.e,s.U],styles:[""]}),e})();function O(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-button",9),f.mc("click",(function(t){return f.Bc(e),f.pc(2).personalOption(t)})),f.ac(1,"ion-icon",10),f.ec(2,"ion-text"),f.Ic(3,"\u6211\u7684"),f.dc(),f.dc()}}function w(e,t){if(1&e&&(f.ec(0,"ion-header"),f.ec(1,"ion-toolbar",5),f.ec(2,"ion-buttons",6),f.ac(3,"ion-menu-button"),f.dc(),f.ec(4,"ion-title"),f.Ic(5,"\u8ba8\u8bba\u533a\u5217\u8868"),f.dc(),f.ec(6,"ion-buttons",7),f.Gc(7,O,4,0,"ion-button",8),f.dc(),f.dc(),f.dc()),2&e){const e=f.pc();f.Nb(7),f.vc("ngIf",e.HasUser)}}function N(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-item"),f.ec(1,"ion-text"),f.Ic(2,"\u8fde\u63a5\u670d\u52a1\u5668\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u5c1d\u8bd5\u3002"),f.dc(),f.ec(3,"ion-button",11),f.mc("click",(function(){return f.Bc(e),f.pc().Reconnect(!0)})),f.Ic(4,"\u91cd\u65b0\u8fde\u63a5"),f.dc(),f.dc()}}function C(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-button",9),f.mc("click",(function(){f.Bc(e);const i=t.$implicit;return f.pc(2).NaviToForum(null,i.value)})),f.Ic(1),f.dc()}if(2&e){const e=t.$implicit;f.Nb(1),f.Kc(" ",e.name," ")}}function j(e,t){if(1&e&&(f.ec(0,"ion-item",12),f.ec(1,"ion-label"),f.ac(2,"ion-icon",10),f.ec(3,"ion-text"),f.Ic(4,"\u6211\u7684\uff1a"),f.dc(),f.dc(),f.ec(5,"ion-buttons"),f.Gc(6,C,2,1,"ion-button",13),f.dc(),f.dc()),2&e){const e=f.pc();f.Nb(6),f.vc("ngForOf",e.PersonalActions)}}function G(e,t){1&e&&f.ac(0,"ion-icon",23)}function A(e,t){if(1&e){const e=f.fc();f.ec(0,"ion-item-sliding",16),f.ec(1,"ion-item",17),f.mc("click",(function(){f.Bc(e);const i=t.$implicit;return f.pc(2).NaviToForum(i.id)})),f.ec(2,"ion-label",18),f.ec(3,"ion-text"),f.Ic(4),f.dc(),f.ec(5,"ion-text",14),f.ec(6,"h6"),f.Ic(7),f.dc(),f.dc(),f.Gc(8,G,1,0,"ion-icon",19),f.ec(9,"ion-text",20),f.Ic(10),f.dc(),f.ec(11,"ion-text",20),f.Ic(12),f.dc(),f.dc(),f.dc(),f.ec(13,"ion-item-options",21),f.ec(14,"ion-item-option",9),f.mc("click",(function(){f.Bc(e);const i=t.$implicit;return f.pc(2).ForumEditor(i.name)})),f.ac(15,"ion-icon",22),f.dc(),f.dc(),f.dc()}if(2&e){const e=t.$implicit;f.Nb(1),f.vc("detail",!e.block),f.Nb(3),f.Kc(" ",e.name," "),f.Nb(3),f.Jc(e.describe),f.Nb(1),f.vc("ngIf",e.block),f.Nb(2),f.Kc("\u65b0\u8d34\uff1a",e.modified.toChinaStr(),""),f.Nb(2),f.Kc("\u5e16\u6570\uff1a",e.topiccount,"")}}function M(e,t){if(1&e&&(f.ec(0,"ion-item-group"),f.ec(1,"ion-item-divider",14),f.ec(2,"ion-label"),f.Ic(3),f.dc(),f.dc(),f.Gc(4,A,16,6,"ion-item-sliding",15),f.dc()),2&e){const e=t.$implicit;f.Nb(3),f.Jc(e.name),f.Nb(1),f.vc("ngForOf",e.items)}}let D=(()=>{class e{constructor(e,t,i,n,o,c,s,r){this.loadingController=e,this.modalCtrl=t,this.alertController=i,this.settings=n,this.forumservice=o,this.host=c,this.popoverCtrl=s,this.router=r,this.forums=[],this.personalActions=[],this.showallforums=!1,this.loadfailed=!1,this.hasuser=!0,this.SortKey="lasttopic",this.selectedPath=""}ngOnInit(){return Object(r.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.user=this.settings.User||m.a,this.hasuser=this.settings.HasUser,this.showallforums=!this.hasuser,this.personalActions=[{name:"\u5e16\u5b50",value:"menu/topiclist/forum_me"},{name:"\u6c42\u52a9",value:"menu/topiclist/forum_ticket"},{name:"\u6d88\u606f",value:"menu/messagelist/true"},{name:"\u627e\u4eba",value:"menu/searchuser"}],this.user.roller>=16&&this.personalActions.insert(2,{name:"\u5ba2\u6237\u6c42\u52a9",value:"menu/topiclist/forum_master"}),this.Reconnect(!1)}))}get Forums(){return this.forums}get HasUser(){return this.hasuser}get IsWeb(){return"web"===m.b}get PersonalActions(){return this.personalActions}doRefresh(e){this.Reconnect(!0).then(()=>{}).catch(e=>{console.log(e)}).finally(()=>{e.target.complete()})}Reconnect(e){return Object(r.b)(this,void 0,void 0,(function*(){return this.loadfailed=!1,yield this.showLoading(),this.forumservice.ForumList(e).then(e=>(this.buildForumList(e),this.forumservice.ForumMG.Reset(),!0)).catch(e=>(console.log("forum reconnect",e),this.loadfailed=!0,!1)).finally(()=>{this.closeLoading()})}))}NaviToForum(e,t=null){this.router.navigateByUrl(t=t||`menu/topiclist/${e}`)}ForumEditor(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=(yield this.forumservice.ForumList()).find(t=>t.name===e),i=yield this.modalCtrl.create({component:x,componentProps:{Forum:t}});yield i.present();const{data:n}=yield i.onWillDismiss();console.log("Forumeditor close"),!0===n&&this.Reconnect(!1)}))}Setting(){return Object(r.b)(this,void 0,void 0,(function*(){let e=!1;const t=yield this.alertController.create({header:"\u663e\u793a\u504f\u597d",inputs:[{name:"showimg",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u56fe\u7247",value:1,checked:null.showimg},{name:"vip",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u5366\u4f8b",value:2,checked:null.showgua},{name:"huahe",type:"checkbox",label:"\u663e\u793a/\u9690\u85cf \u547d\u4f8b",value:3,checked:null.showbazi},{name:"bbs",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u56fe\u7247",value:4,checked:!null.imgOut},{name:"liuyao",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u5366\u4f8b",value:5,checked:!null.guaOut},{name:"bazi",type:"checkbox",label:"\u8d34\u5185\u663e\u793a\u547d\u4f8b",value:6,checked:!null.baziOut}],buttons:[{text:"\u786e\u5b9a",handler:()=>{e=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield t.present();const{data:i}=yield t.onWillDismiss();e&&(i.values.includes(1),i.values.includes(2),i.values.includes(3),i.values.includes(4),i.values.includes(5),i.values.includes(6))}))}sortOptions(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=yield this.popoverCtrl.create({component:u.a,event:e,componentProps:{items:[{name:"\u9ed8\u8ba4",value:"id"},{name:"\u65f6\u95f4",value:"lasttopic"}],currentOption:this.SortKey},translucent:!0});yield t.present();const{data:i}=yield t.onDidDismiss();(i||this.SortKey)!==this.SortKey&&(this.SortKey=i.toString())}))}personalOption(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=this.PersonalActions,i=yield this.popoverCtrl.create({component:u.a,event:e,translucent:!0,componentProps:{items:t,currentOption:t[0]}});yield i.present();const{data:n}=yield i.onDidDismiss(),o=n||"";o&&(console.log("navi to action",o),this.router.navigateByUrl(o))}))}buildForumList(e){this.initForums(),e.map(e=>{const t=new Date(0===e.lasttopic?Date.now():e.lasttopic);let i=e.admin.includes(this.user.id);i=i||e.user.includes(this.user.id),i=i||0===e.reader||(e.reader&this.user.roller)>0;const n={id:e.id,name:e.name,describe:e.describe,modified:t,block:!i,group:e.group,topiccount:e.topiccount};return this.forums.find(e=>e.group===n.group).items.push(n),n})}initForums(){this.forums=[{group:0,name:"\u6613\u5b66\u533a",items:[]},{group:1,name:"\u7406\u5b66\u533a",items:[]},{group:2,name:"\u85cf\u5b66\u533a",items:[]},{group:10,name:"\u4e8b\u52a1\u533a",items:[]}]}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u83b7\u53d6\u8bba\u575b\u5217\u8868...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(f.Zb(s.bb),f.Zb(s.cb),f.Zb(s.b),f.Zb(l.a),f.Zb(d.a),f.Zb(a.a),f.Zb(s.fb),f.Zb(c.g))},e.\u0275cmp=f.Tb({type:e,selectors:[["app-forum"]],decls:8,vars:4,consts:[[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["lines","none","class","tybg",4,"ngIf"],[4,"ngFor","ngForOf"],["lines","none"],["color","primary"],["slot","start"],["slot","end"],[3,"click",4,"ngIf"],[3,"click"],["name","person"],["fill","outline",3,"click"],["lines","none",1,"tybg"],[3,"click",4,"ngFor","ngForOf"],["color","medium"],["class","tybg",4,"ngFor","ngForOf"],[1,"tybg"],[1,"tybg",3,"detail","click"],[1,"ion-text-wrap"],["name","ios-lock","style","margin-right: 10px;",4,"ngIf"],["color","medium",1,"ion-margin-end"],["side","start"],["slot","icon-only","name","information-circle"],["name","ios-lock",2,"margin-right","10px"]],template:function(e,t){1&e&&(f.Gc(0,w,8,1,"ion-header",0),f.ec(1,"ion-content"),f.ec(2,"ion-refresher",1),f.mc("ionRefresh",(function(e){return t.doRefresh(e)})),f.ac(3,"ion-refresher-content"),f.dc(),f.Gc(4,N,5,0,"ion-item",0),f.Gc(5,j,7,1,"ion-item",2),f.Gc(6,M,5,2,"ion-item-group",3),f.ac(7,"ion-item",4),f.dc()),2&e&&(f.vc("ngIf",!t.IsWeb),f.Nb(4),f.vc("ngIf",t.loadfailed),f.Nb(1),f.vc("ngIf",t.IsWeb),f.Nb(1),f.vc("ngForOf",t.Forums))},directives:[n.j,s.n,s.J,s.K,n.i,s.x,s.t,s.Y,s.j,s.G,s.W,s.i,s.u,s.T,s.D,s.z,s.y,s.C,s.B,s.A],styles:[""]}),e})();var T=i("i/bi");i.d(t,"ForumPageModule",(function(){return R}));const U=[{path:"",component:D}];let R=(()=>{class e{}return e.\u0275mod=f.Xb({type:e}),e.\u0275inj=f.Wb({factory:function(t){return new(t||e)},imports:[[n.b,o.c,s.Z,T.e,c.j.forChild(U)]]}),e})()},HQI1:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var n=i("c7TG"),o=i("fXoL"),c=i("ofXK");function s(e,t){if(1&e){const e=o.fc();o.ec(0,"ion-item",3),o.mc("click",(function(){o.Bc(e);const i=t.$implicit;return o.pc(2).onSelect(i.value)})),o.ec(1,"ion-text"),o.Ic(2),o.dc(),o.dc()}if(2&e){const e=t.$implicit,i=o.pc(2);o.vc("color",e.value===i.currentOption?"light":""),o.Nb(2),o.Jc(e.name)}}function r(e,t){if(1&e&&(o.ec(0,"div"),o.Gc(1,s,3,2,"ion-item",2),o.dc()),2&e){const e=o.pc();o.Nb(1),o.vc("ngForOf",e.items)}}function l(e,t){if(1&e&&(o.ec(0,"ion-note"),o.Ic(1),o.dc()),2&e){const e=o.pc().$implicit;o.Nb(1),o.Kc(" ",e.name," ")}}function a(e,t){if(1&e&&(o.ec(0,"ion-item",6),o.Gc(1,l,2,1,"ion-note",0),o.ec(2,"ion-label",7),o.ec(3,"small"),o.ac(4,"ion-text",8),o.dc(),o.dc(),o.dc()),2&e){const e=t.$implicit;o.Nb(1),o.vc("ngIf",e.name),o.Nb(3),o.vc("innerHtml",e.value,o.Cc)}}function d(e,t){if(1&e&&(o.ec(0,"ion-list",4),o.Gc(1,a,5,2,"ion-item",5),o.dc()),2&e){const e=o.pc();o.Nb(1),o.vc("ngForOf",e.items)}}let u=(()=>{class e{constructor(e){this.popoverCtrl=e,this.toselect=!0}ngOnInit(){}onSelect(e){this.popoverCtrl.dismiss(e)}}return e.\u0275fac=function(t){return new(t||e)(o.Zb(n.fb))},e.\u0275cmp=o.Tb({type:e,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["class","ion-no-padding",4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],[1,"ion-no-padding"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","end",1,"ion-text-wrap"],[3,"innerHtml"]],template:function(e,t){1&e&&(o.Gc(0,r,2,1,"div",0),o.Gc(1,d,2,1,"ion-list",1)),2&e&&(o.vc("ngIf",t.toselect),o.Nb(1),o.vc("ngIf",!t.toselect))},directives:[c.j,c.i,n.x,n.T,n.E,n.D,n.H],styles:[""]}),e})()}}]);