(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7L00":function(e,t,i){"use strict";i.d(t,"a",(function(){return y}));var s=i("mrSG"),n=i("c7TG"),c=i("PKx9"),o=i("G6JS"),r=i("fXoL"),a=i("ofXK"),l=i("3Pt+");function d(e,t){if(1&e){const e=r.ec();r.dc(0,"ion-buttons",8),r.dc(1,"ion-button",3),r.lc("click",(function(){return r.Cc(e),r.oc().onclose(!1)})),r.Jc(2," \u53d6\u6d88 "),r.cc(),r.cc()}}function u(e,t){if(1&e){const e=r.ec();r.dc(0,"ion-item"),r.dc(1,"ion-label"),r.dc(2,"ion-text"),r.Jc(3,"\u53d1\u9001\u7ed9\uff1a"),r.cc(),r.dc(4,"ion-text",9),r.lc("click",(function(){r.Cc(e);const t=r.oc();return t.ShowUserInfo(t.Message.receiver)})),r.Jc(5),r.cc(),r.cc(),r.cc()}if(2&e){const e=r.oc();r.Nb(5),r.Kc(e.Message.receiver)}}function h(e,t){if(1&e){const e=r.ec();r.dc(0,"ion-item",10),r.dc(1,"ion-label"),r.dc(2,"ion-text"),r.Jc(3),r.cc(),r.cc(),r.dc(4,"ion-button",11),r.lc("click",(function(){return r.Cc(e),r.oc().EditRoles()})),r.Jc(5,"\u63a5\u6536\u8005\u89d2\u8272"),r.cc(),r.cc()}if(2&e){const e=r.oc();r.Nb(3),r.Kc(e.RollerText)}}function m(e,t){if(1&e){const e=r.ec();r.dc(0,"ion-item"),r.dc(1,"ion-text"),r.Jc(2,"\u53d1\u9001\u4eba\uff1a"),r.cc(),r.dc(3,"ion-select",12),r.lc("ngModelChange",(function(t){return r.Cc(e),r.oc().Sender=t})),r.dc(4,"ion-select-option",13),r.Jc(5,"\u7cfb\u7edf\u53d1\u9001"),r.cc(),r.dc(6,"ion-select-option",14),r.Jc(7),r.cc(),r.cc(),r.dc(8,"ion-label"),r.dc(9,"ion-segment",12),r.lc("ngModelChange",(function(t){return r.Cc(e),r.oc().Replyable=t})),r.dc(10,"ion-segment-button",15),r.Jc(11,"\u53ef\u56de\u590d"),r.cc(),r.dc(12,"ion-segment-button",16),r.Jc(13,"\u4e0d\u53ef\u56de\u590d"),r.cc(),r.cc(),r.cc(),r.cc()}if(2&e){const e=r.oc();r.Nb(3),r.vc("ngModel",e.Sender),r.Nb(3),r.vc("value",e.Message.author),r.Nb(1),r.Kc(e.Message.author),r.Nb(2),r.vc("ngModel",e.Replyable)}}function f(e,t){if(1&e){const e=r.ec();r.dc(0,"ion-item"),r.dc(1,"ion-text"),r.Jc(2,"\u6765\u81ea\u4e8e\uff1a"),r.cc(),r.dc(3,"ion-text",9),r.lc("click",(function(){r.Cc(e);const t=r.oc();return t.ShowUserInfo(t.Message.author)})),r.Jc(4),r.cc(),r.cc()}if(2&e){const e=r.oc();r.Nb(4),r.Lc(" ",e.Message.author,"")}}function p(e,t){if(1&e&&(r.dc(0,"ion-text"),r.Jc(1),r.cc()),2&e){const e=r.oc();r.Nb(1),r.Kc(e.Message.readed?"[\u5df2\u8bfb]\uff1a":"[\u672a\u8bfb]\uff1a")}}function b(e,t){1&e&&(r.dc(0,"ion-text"),r.Jc(1,"\u4e3b\u9898\uff1a"),r.cc())}function g(e,t){if(1&e){const e=r.ec();r.dc(0,"div",17),r.dc(1,"div",18),r.dc(2,"div",19),r.dc(3,"label"),r.Jc(4,"\u6d88\u606f\u5185\u5bb9"),r.cc(),r.dc(5,"textarea",12),r.lc("ngModelChange",(function(t){return r.Cc(e),r.oc().Message.content=t})),r.cc(),r.cc(),r.cc(),r.cc()}if(2&e){const e=r.oc();r.Nb(5),r.vc("ngModel",e.Message.content)}}function v(e,t){if(1&e&&(r.dc(0,"ion-item"),r.dc(1,"ion-note",8),r.Jc(2,"\u6d88\u606f\u5185\u5bb9"),r.cc(),r.dc(3,"ion-label",10),r.dc(4,"ion-text"),r.Jc(5),r.cc(),r.cc(),r.cc()),2&e){const e=r.oc();r.Nb(5),r.Kc(e.Message.content)}}let y=(()=>{class e{constructor(e,t,i,s,n){this.toastController=e,this.loadingController=t,this.alertController=i,this.modalCtrl=s,this.forumservice=n,this.Read=!1,this.NoSend=!1,this.Sender="",this.Replyable="true",this.RollerText=""}ngOnInit(){this.Sender=this.Message.author,this.Replyable=JSON.stringify(this.Message.replyable),this.RollerText=this.Roles2Text(this.Message.roller)}get IsPublic(){return!this.Message.private}EditRoles(){return Object(s.b)(this,void 0,void 0,(function*(){const e=this.Message.roller;let t=!1;const i=yield this.alertController.create({header:"\u63a5\u6536\u8005\u89d2\u8272",inputs:[{name:"register",type:"checkbox",label:"\u6ce8\u518c\u7528\u6237",value:1,checked:(1&e)>0},{name:"vip",type:"checkbox",label:"VIP\u7528\u6237",value:2,checked:(2&e)>0},{name:"huahe",type:"checkbox",label:"\u534e\u9e64\u540c\u95e8",value:4,checked:(4&e)>0},{name:"bbs",type:"checkbox",label:"\u7248\u4e3b",value:8,checked:(8&e)>0},{name:"liuyao",type:"checkbox",label:"\u516d\u723b\u8001\u5e08",value:16,checked:(16&e)>0},{name:"bazi",type:"checkbox",label:"\u547d\u7406\u8001\u5e08",value:32,checked:(32&e)>0},{name:"fengshui",type:"checkbox",label:"\u98ce\u6c34\u8001\u5e08",value:64,checked:(64&e)>0},{name:"supermaster",type:"checkbox",label:"\u5927\u5b97\u5e08",value:128,checked:(128&e)>0},{name:"admin",type:"checkbox",label:"\u7ba1\u7406\u5458",value:256,checked:(256&e)>0}],buttons:[{text:"\u786e\u5b9a",handler:()=>{t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield i.present();const{data:s}=yield i.onWillDismiss();console.log("roles",s),this.Message.roller=0;for(const n of s.values)this.Message.roller=this.Message.roller|n;this.RollerText=this.Roles2Text(this.Message.roller),console.log(this.Message.roller)}))}Roles2Text(e){const t=[];return(1&e)>0&&t.push("\u6ce8\u518c\u7528\u6237"),(2&e)>0&&t.push("VIP\u7528\u6237"),(4&e)>0&&t.push("\u534e\u9e64\u540c\u95e8"),(8&e)>0&&t.push("\u7248\u4e3b"),(16&e)>0&&t.push("\u516d\u723b\u8001\u5e08"),(32&e)>0&&t.push("\u547d\u7406\u8001\u5e08"),(64&e)>0&&t.push("\u98ce\u6c34\u8001\u5e08"),(128&e)>0&&t.push("\u5927\u5b97\u5e08"),(256&e)>0&&t.push("\u7ba1\u7406\u5458"),t.join(";")}ShowUserInfo(e){return Object(s.b)(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:o.a,componentProps:{Uerid:e}});yield t.present(),yield t.onWillDismiss()}))}onclose(e){return Object(s.b)(this,void 0,void 0,(function*(){this.IsPublic&&(this.Message.replyable="true"===this.Replyable,this.Message.author=this.Sender),this.NoSend&&e?this.modalCtrl.dismiss(!0):e&&!this.Read?(yield this.showLoading(),this.Message.created=Date.now(),this.forumservice.SendMessage(this.Message).then(e=>{this.ToastMsg(),this.modalCtrl.dismiss(!0)}).finally(()=>{this.closeLoading()})):this.modalCtrl.dismiss(!1)}))}ToastMsg(){return Object(s.b)(this,void 0,void 0,(function*(){const e=this.Message.private?this.Message.receiver:this.RollerText,t=yield this.toastController.create({message:`\u6d88\u606f\u5df2\u7ecf\u53d1\u9001\u7ed9 ${e}`,duration:3e3});yield t.present()}))}showLoading(){return Object(s.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u4fdd\u5b58\u5230\u8bba\u575b...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(s.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(n.hb),r.Yb(n.Z),r.Yb(n.b),r.Yb(n.ab),r.Yb(c.a))},e.\u0275cmp=r.Sb({type:e,selectors:[["app-messageeditor"]],inputs:{Message:"Message",Read:"Read",NoSend:"NoSend"},decls:21,vars:13,consts:[[3,"color"],["slot","start",4,"ngIf"],["slot","end"],[3,"click"],[4,"ngIf"],["class","ion-text-wrap",4,"ngIf"],["required","","type","text","placeholder","\u8bf7\u8f93\u5165\u4e3b\u9898",3,"readonly","ngModel","ngModelChange"],["class","ui attached segment",4,"ngIf"],["slot","start"],["color","primary",3,"click"],[1,"ion-text-wrap"],["slot","end",3,"click"],[3,"ngModel","ngModelChange"],["value","system"],[3,"value"],["value","true"],["value","false"],[1,"ui","attached","segment"],[1,"ui","form"],[1,"field"]],template:function(e,t){1&e&&(r.dc(0,"ion-header"),r.dc(1,"ion-toolbar",0),r.Hc(2,d,3,0,"ion-buttons",1),r.dc(3,"ion-title"),r.Jc(4),r.cc(),r.dc(5,"ion-buttons",2),r.dc(6,"ion-button",3),r.lc("click",(function(){return t.onclose(!0)})),r.Jc(7," \u786e\u5b9a "),r.cc(),r.cc(),r.cc(),r.cc(),r.dc(8,"ion-content"),r.dc(9,"ion-list"),r.Hc(10,u,6,1,"ion-item",4),r.Hc(11,h,6,1,"ion-item",5),r.Hc(12,m,14,4,"ion-item",4),r.Hc(13,f,5,1,"ion-item",4),r.dc(14,"ion-item"),r.dc(15,"ion-label"),r.Hc(16,p,2,1,"ion-text",4),r.Hc(17,b,2,0,"ion-text",4),r.cc(),r.dc(18,"ion-input",6),r.lc("ngModelChange",(function(e){return t.Message.title=e})),r.cc(),r.cc(),r.Hc(19,g,6,1,"div",7),r.Hc(20,v,6,1,"ion-item",4),r.cc(),r.cc()),2&e&&(r.Nb(1),r.vc("color",t.Read?"primary":"secondary"),r.Nb(1),r.vc("ngIf",!t.Read),r.Nb(2),r.Kc(t.Read?"\u6d88\u606f\u5185\u5bb9":"\u7f16\u8f91\u6d88\u606f"),r.Nb(6),r.vc("ngIf",!t.IsPublic),r.Nb(1),r.vc("ngIf",t.IsPublic),r.Nb(1),r.vc("ngIf",t.IsPublic),r.Nb(1),r.vc("ngIf",t.Read&&!t.IsPublic),r.Nb(3),r.vc("ngIf",t.Read),r.Nb(1),r.vc("ngIf",!t.Read),r.Nb(1),r.vc("readonly",t.Read)("ngModel",t.Message.title),r.Nb(1),r.vc("ngIf",!t.Read),r.Nb(1),r.vc("ngIf",t.Read))},directives:[n.s,n.W,a.j,n.U,n.i,n.h,n.m,n.D,n.w,n.C,n.v,n.gb,l.h,l.f,l.g,n.S,n.P,n.fb,n.Q,n.N,n.O,l.b,n.G],styles:[""]}),e})()},"8/yo":function(e,t,i){"use strict";i.d(t,"a",(function(){return T}));var s=i("mrSG"),n=i("c7TG"),c=(i("Y6BA"),i("LTmD")),o=i("lEof"),r=i("+z1p"),a=i("LvB5"),l=i("SRjL"),d=i("pNW8"),u=i("+cLM"),h=i("PKx9"),m=i("CGrG"),f=i("i/He"),p=i("fXoL"),b=i("3Pt+"),g=i("ofXK"),v=i("zioG");const y=["filePicker"];function M(e,t){if(1&e){const e=p.ec();p.dc(0,"ion-button",14),p.lc("click",(function(){return p.Cc(e),p.oc().GuaInfo()})),p.dc(1,"ion-text"),p.Jc(2,"\u5366\u76d8"),p.cc(),p.cc()}}function k(e,t){if(1&e){const e=p.ec();p.dc(0,"ion-button",14),p.lc("click",(function(){return p.Cc(e),p.oc().BaziInfo()})),p.dc(1,"ion-text"),p.Jc(2,"\u547d\u76d8"),p.cc(),p.cc()}}const w=i("mxV5");let T=(()=>{class e{constructor(e,t,i,s,n,c){this.settings=e,this.host=t,this.forumservice=i,this.alertController=s,this.loadingController=n,this.modalCtrl=c,this.Private=!1,this.Gua=null,this.Bazi=null,this.Content="",this.TitelEditable=!0,this.Editor=r,this.EditorConfig={toolbar:["heading","|","bold","italic","bulletedList","numberedList","fontcolor","|","link","undo","redo"]},this.readMode=m.c.arrayBuffer,r.builtinPlugins.map(e=>e.pluginName)}ngOnInit(){this.MainTopic?(this.Titel=this.MainTopic.title,this.TitelEditable=""===(this.MainTopic.id||"")):(this.Titel=this.forumname,this.forumname="\u56de\u5e16",this.TitelEditable=!1);const e=this.MainTopic||this.VTopic;this.Gua=e.gua,this.Bazi=e.bazi,this.Content=e.content}get Titel(){return this.titel||""}set Titel(e){this.titel=(e||"").substring(0,30)}onSave(){var e,t;return Object(s.b)(this,void 0,void 0,(function*(){this.Titel.trim().IsNullOrEmpty()?this.presentAlert("\u9519\u8bef",null,"\u9898\u76ee\u4e0d\u80fd\u4e3a\u7a7a"):(yield this.showLoading(),(null===(e=this.MainTopic)||void 0===e?void 0:e.id)||(null===(t=this.VTopic)||void 0===t?void 0:t.id)?this.UpdateToServer():this.SaveNewToServer())}))}onCancel(){this.modalCtrl.dismiss(null)}showPaiguaModal(){return Object(s.b)(this,void 0,void 0,(function*(){if(this.MainTopic.gua)return void(this.MainTopic.gua=null);const e=yield this.modalCtrl.create({component:a.a});yield e.present();const{data:t}=yield e.onWillDismiss();t.result&&(this.Gua=t.result,new d.a(this.Gua.time,this.Gua.ben,this.Gua.bian))}))}showPaiBaziModal(){return Object(s.b)(this,void 0,void 0,(function*(){if(this.MainTopic.bazi)return void(this.MainTopic.bazi=null);const e=yield this.modalCtrl.create({component:l.a});yield e.present();const{data:t}=yield e.onWillDismiss();t.result&&(this.Bazi=t.result)}))}GuaInfo(){return Object(s.b)(this,void 0,void 0,(function*(){const e=this.Gua,t="string"==typeof e.time?e.time:`${e.time[0]}\u6708${e.time[1]}\u65e5`,i=new d.a(e.time,e.ben,e.bian);this.presentAlert("\u5366\u672c",t,i.Ben.Name+(i.Ben.Index!==i.Bian.Index?` \u4e4b ${i.Bian.Name}`:""))}))}BaziInfo(){return Object(s.b)(this,void 0,void 0,(function*(){const e=this.Bazi,t=`${e.person} (${e.male?"\u4e7e":"\u5764"}\u9020)`,i=e.time.parseDate(),s=new u.a(i,e.male?"m":"f");this.presentAlert("\u547d\u76d8",t,`${s.Y.Name}\u5e74 ${s.M.Name}\u6708 ${s.D.Name}\u65e5 ${s.T.Name}\u65f6`)}))}CheckImageRight(){return Object(s.b)(this,void 0,void 0,(function*(){const e=(yield this.forumservice.ForumList()).find(e=>e.id===this.forumid);return e&&!1!==e.image?0==(2&this.settings.User.roller)?(this.presentAlert("\u4f20\u56fe\u6743\u9650",null,"\u76ee\u524d\u53ea\u5bf9VIP\u7528\u6237\u5f00\u653e\u672c\u5730\u56fe\u5e8a\u7684\u6743\u9650\u3002\n      \u975eVIP\u7528\u6237\u53ef\u4ee5\u5728\u5e16\u5b50\u5185\u5bb9\u91cc\u6dfb\u52a0\u5916\u90e8\u56fe\u7247\u94fe\u63a5\u3002"),Promise.resolve(!1)):""===((this.MainTopic||this.VTopic).id||"")?(this.presentAlert("\u4f20\u56fe\u6743\u9650",null,"\u8bf7\u5728\u521b\u5efa\u5e16\u5b50\u6210\u529f\u540e\uff0c\u4fee\u6539\u5e16\u5b50\u65f6\u6dfb\u52a0\u56fe\u7247\u3002"),Promise.resolve(!1)):Promise.resolve(!0):(this.presentAlert("\u4f20\u56fe\u6743\u9650",null,"\u672c\u8ba8\u8bba\u533a\u6ca1\u6709\u5f00\u653e\u56fe\u7247\u6743\u9650\u3002"),Promise.resolve(!1))}))}onReadStart(e){}onFilePicked(e){return Object(s.b)(this,void 0,void 0,(function*(){if(!(yield this.CheckImageRight()))return;const t=f.Buffer.from(e.content);if(t.length/1024>500)return void this.presentAlert("\u6587\u4ef6\u592a\u5927",null,"\u9650\u4e8e\u8fd0\u8425\u6210\u672c\uff0c\u76ee\u524d\u53ea\u63a5\u53d7\u5c0f\u4e8e 500KB \u7684\u56fe\u7247\u3002");const i=e.name.split("."),s=i[i.length-1].toLowerCase();if(!["jpg","png","jpeg"].includes(s))return void this.presentAlert("\u6587\u4ef6\u683c\u5f0f",null,"\u53ea\u63a5\u53d7 jpg, jpeg, png \u683c\u5f0f\u7684\u56fe\u7247\u3002");yield this.showLoading();const n=this.settings.User;this.host.GetAliToken(n.id,n.password,"osstoken").then(e=>{const i={region:e.region,accessKeyId:e.token.accessKeyId,accessKeySecret:e.token.accessKeySecret,stsToken:e.token.securityToken,bucket:"huaheapp",endpoint:e.endpoint};console.log("got token",i);const n=`forum/${this.forumid}/${(this.MainTopic||this.VTopic).id}.${s}`;return new w(i).put(n,t)}).then(e=>{const t=this.MainTopic||this.VTopic;return t.img=e.url,this.forumservice.UpdateTopic({img:e.url},t.id,this.Private)}).then(e=>{this.presentAlert("\u4e0a\u4f20\u6210\u529f\uff01",null,"\u8bf7\u70b9\u51fb\u5e16\u5b50\u4fdd\u5b58\u6309\u94ae\uff0c\u5c06\u4e0a\u4f20\u7684\u5185\u5bb9\u4fdd\u5b58\u5230\u5e16\u5b50\u91cc\u3002")}).catch(e=>{this.presentAlert("\u4e0a\u4f20\u5931\u8d25",null," \u8bf7\u786e\u5b9a\u60a8\u62e5\u6709\u64cd\u4f5c\u6743\u9650\u3002\u8bf7\u91cd\u65b0\u4e0a\u4f20\uff0c\u6216\u7a0d\u540e\u518d\u8bd5\u3002")})}))}onReadEnd(e){this.filePicker.reset()}onEditorReady(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())}presentAlert(e,t,i){return Object(s.b)(this,void 0,void 0,(function*(){yield this.closeLoading();const s=yield this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:i,buttons:["\u786e\u5b9a"]});yield s.present()}))}SaveNewToServer(){const e=this.SaveTo(this.MainTopic||this.VTopic);this.forumservice.NewTopic(this.Private?null:this.forumid,e).then(t=>{e.id=t.insertedId,this.modalCtrl.dismiss(e)}).catch(e=>{this.presentAlert("\u9519\u8bef","\u521b\u5efa\u5931\u8d25",JSON.stringify(e))}).finally(()=>{this.closeLoading()})}UpdateToServer(){var e,t;const i={};this.SaveTo(i);const s=(null===(e=this.MainTopic)||void 0===e?void 0:e.id)||(null===(t=this.VTopic)||void 0===t?void 0:t.id);this.forumservice.UpdateTopic(i,s,this.Private).then(e=>{this.SaveTo(this.MainTopic||this.VTopic),this.modalCtrl.dismiss(!0)}).catch(e=>{this.presentAlert("\u9519\u8bef","\u521b\u5efa\u5931\u8d25",JSON.stringify(e))}).finally(()=>{this.closeLoading()})}SaveTo(e){try{return this.MainTopic&&(e.title=this.Titel),e.gua=this.Gua,e.bazi=this.Bazi,e.content=this.Content,e.modified=Date.now(),e}catch(t){console.log(t)}}showLoading(){return Object(s.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u4fdd\u5b58\u5230\u8bba\u575b...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(s.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}}return e.\u0275fac=function(t){return new(t||e)(p.Yb(c.a),p.Yb(o.a),p.Yb(h.a),p.Yb(n.b),p.Yb(n.Z),p.Yb(n.ab))},e.\u0275cmp=p.Sb({type:e,selectors:[["app-topiceditor"]],viewQuery:function(e,t){var i;1&e&&p.Oc(y,!0),2&e&&p.yc(i=p.mc())&&(t.filePicker=i.first)},inputs:{MainTopic:"MainTopic",VTopic:"VTopic",forumid:"forumid",forumname:"forumname",Private:"Private"},decls:40,vars:11,consts:[["color","secondary"],["slot","start"],[3,"click"],["name","close-circle"],["slot","end"],["name","save"],["position","fixed"],["placeholder","\u8bf7\u8f93\u5165\u9898\u76ee\uff1a\u4e0d\u8d85\u8fc730\u4e2a\u5b57\u7b26",3,"ngModel","disabled","ngModelChange"],["color","medium",3,"click",4,"ngIf"],[3,"name"],["ngxFilePicker","","fill","outline",3,"readMode","readStart","filePick","readEnd"],["filePicker","ngxFilePicker"],["name","image"],[3,"ngModel","config","editor","ngModelChange","ready"],["color","medium",3,"click"]],template:function(e,t){1&e&&(p.dc(0,"ion-header"),p.dc(1,"ion-toolbar",0),p.dc(2,"ion-buttons",1),p.dc(3,"ion-button",2),p.lc("click",(function(){return t.onCancel()})),p.Zb(4,"ion-icon",3),p.dc(5,"ion-text"),p.Jc(6,"\u53d6\u6d88"),p.cc(),p.cc(),p.cc(),p.dc(7,"ion-title"),p.Jc(8),p.cc(),p.dc(9,"ion-buttons",4),p.dc(10,"ion-button",2),p.lc("click",(function(){return t.onSave()})),p.Zb(11,"ion-icon",5),p.dc(12,"ion-text"),p.Jc(13,"\u4fdd\u5b58"),p.cc(),p.cc(),p.cc(),p.cc(),p.cc(),p.dc(14,"ion-content"),p.dc(15,"ion-item"),p.dc(16,"ion-label",6),p.Jc(17,"\u9898\u76ee"),p.cc(),p.dc(18,"ion-input",7),p.lc("ngModelChange",(function(e){return t.Titel=e})),p.cc(),p.cc(),p.dc(19,"ion-item"),p.dc(20,"ion-text"),p.Jc(21,"\u5185\u5bb9"),p.cc(),p.dc(22,"ion-buttons"),p.Hc(23,M,3,0,"ion-button",8),p.Hc(24,k,3,0,"ion-button",8),p.cc(),p.dc(25,"ion-buttons",4),p.dc(26,"ion-button",2),p.lc("click",(function(){return t.showPaiguaModal()})),p.Zb(27,"ion-icon",9),p.dc(28,"ion-text"),p.Jc(29,"\u516d\u723b"),p.cc(),p.cc(),p.dc(30,"ion-button",2),p.lc("click",(function(){return t.showPaiBaziModal()})),p.Zb(31,"ion-icon",9),p.dc(32,"ion-text"),p.Jc(33,"\u516b\u5b57"),p.cc(),p.cc(),p.cc(),p.cc(),p.dc(34,"ion-item"),p.dc(35,"ion-button",10,11),p.lc("readStart",(function(e){return t.onReadStart(e)}))("filePick",(function(e){return t.onFilePicked(e)}))("readEnd",(function(e){return t.onReadEnd(e)})),p.Zb(37,"ion-icon",12),p.Jc(38," \u4e0a\u4f20\u56fe\u7247 "),p.cc(),p.cc(),p.dc(39,"ckeditor",13),p.lc("ngModelChange",(function(e){return t.Content=e}))("ready",(function(e){return t.onEditorReady(e)})),p.cc(),p.cc()),2&e&&(p.Nb(8),p.Lc("\u7f16\u8f91\uff1a",t.forumname,""),p.Nb(10),p.vc("ngModel",t.Titel)("disabled",!t.TitelEditable),p.Nb(5),p.vc("ngIf",t.Gua),p.Nb(1),p.vc("ngIf",t.Bazi),p.Nb(3),p.vc("name",t.Gua?"backspace":"add"),p.Nb(4),p.vc("name",t.Bazi?"backspace":"add"),p.Nb(4),p.vc("readMode",t.readMode),p.Nb(4),p.vc("ngModel",t.Content)("config",t.EditorConfig)("editor",t.Editor))},directives:[n.s,n.W,n.i,n.h,n.t,n.S,n.U,n.m,n.w,n.C,n.v,n.gb,b.f,b.g,g.j,m.a,v.a],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[contenteditable][_ngcontent-%COMP%], ckeditor[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}"]}),e})()},CGrG:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"c",(function(){return c})),i.d(t,"b",(function(){return l}));var s=i("mrSG"),n=i("fXoL");const c=function(){var e={arrayBuffer:0,binaryString:1,dataURL:2,text:3};return e[e.arrayBuffer]="arrayBuffer",e[e.binaryString]="binaryString",e[e.dataURL]="dataURL",e[e.text]="text",e}();class o{constructor(e,t,i){this._underlyingFile=e,this._readMode=t,this._content=i}get name(){return this._underlyingFile.name}get size(){return this._underlyingFile.size}get type(){return this._underlyingFile.type}get readMode(){return this._readMode}get content(){return this._content}get underlyingFile(){return this._underlyingFile}}let r=(()=>{class e{constructor(){this.filter=()=>!0,this.readStart=new n.s,this.readEnd=new n.s}readFiles(e,t){return Object(s.b)(this,void 0,void 0,(function*(){const i=Array.from(e).filter(this.filter),n=i.length;this.readStart.emit(n),yield Promise.all(i.map(e=>Object(s.b)(this,void 0,void 0,(function*(){const i=yield function(e,t){return Object(s.b)(this,void 0,void 0,(function*(){return new Promise((i,s)=>{const n=new FileReader;switch(n.onload=s=>{const n=new o(e,t,s.target.result);i(n)},n.onerror=e=>{s(e)},t){case c.arrayBuffer:n.readAsArrayBuffer(e);break;case c.binaryString:n.readAsBinaryString(e);break;case c.text:n.readAsText(e);break;case c.dataURL:default:n.readAsDataURL(e)}})}))}(e,this.readMode);t(i)})))),this.readEnd.emit(n)}))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=n.Tb({type:e,inputs:{filter:"filter",readMode:"readMode"},outputs:{readStart:"readStart",readEnd:"readEnd"}}),e})(),a=(()=>{class e extends r{constructor(e,t){super(),this.el=e,this.renderer=t,this.accept="",this.filePick=new n.s}get multiple(){return this._multiple}set multiple(e){this._multiple=function(e){return null!=e&&"false"!==`${e}`}(e)}ngOnInit(){this._input=this.renderer.createElement("input"),this.renderer.appendChild(this.el.nativeElement,this._input),this.renderer.setAttribute(this._input,"type","file"),this.renderer.setAttribute(this._input,"accept",this.accept),this.renderer.setStyle(this._input,"display","none"),this.multiple&&this.renderer.setAttribute(this._input,"multiple","multiple"),this.renderer.listen(this._input,"change",e=>this._onListen(e))}reset(){this._input?this._input.value=null:console.error("It seems that ngOnInit() has not been executed or that the hidden _input element is null. Did you mess with the DOM?")}browse(){this._input?this._input.click():console.error("It seems that ngOnInit() has not been executed or that the hidden _input element is null. Did you mess with the DOM?")}_onListen(e){this.readFiles(e.target.files,e=>this.filePick.emit(e))}}return e.\u0275fac=function(t){return new(t||e)(n.Yb(n.q),n.Yb(n.N))},e.\u0275dir=n.Tb({type:e,selectors:[["","ngxFilePicker",""]],hostBindings:function(e,t){1&e&&n.lc("click",(function(){return t.browse()}))},inputs:{accept:"accept",multiple:"multiple"},outputs:{filePick:"filePick"},exportAs:["ngxFilePicker"],features:[n.Kb]}),e})(),l=(()=>{class e{}return e.\u0275mod=n.Wb({type:e}),e.\u0275inj=n.Vb({factory:function(t){return new(t||e)},imports:[[]]}),e})()},G6JS:function(e,t,i){"use strict";i.d(t,"a",(function(){return v}));var s=i("mrSG"),n=i("c7TG"),c=i("PKx9"),o=i("LTmD"),r=i("7L00"),a=i("8/yo"),l=(i("0eVs"),i("Y6BA")),d=i("fXoL"),u=i("tyNb"),h=i("ofXK");function m(e,t){if(1&e&&(d.dc(0,"ion-chip"),d.dc(1,"ion-avatar"),d.Zb(2,"img",5),d.cc(),d.dc(3,"ion-text"),d.Jc(4),d.cc(),d.cc()),2&e){const e=t.$implicit;d.Nb(2),d.vc("src",e.icon,d.Ec),d.Nb(2),d.Kc(e.name)}}function f(e,t){if(1&e){const e=d.ec();d.dc(0,"ion-button",11),d.lc("click",(function(){return d.Cc(e),d.oc().ShowPanfu()})),d.Jc(1,"\u547d\u76d8"),d.cc()}}function p(e,t){if(1&e){const e=d.ec();d.dc(0,"ion-buttons",1),d.dc(1,"ion-button",2),d.lc("click",(function(){return d.Cc(e),d.oc(2).EditTopic()})),d.Jc(2,"\u5411\u4ed6\u6c42\u52a9"),d.cc(),d.cc()}}function b(e,t){if(1&e){const e=d.ec();d.dc(0,"ion-item"),d.dc(1,"ion-buttons"),d.dc(2,"ion-button",2),d.lc("click",(function(){return d.Cc(e),d.oc().EditMessage()})),d.Jc(3,"\u7ed9\u4ed6\u53d1\u77ed\u6d88\u606f"),d.cc(),d.cc(),d.Hc(4,p,3,0,"ion-buttons",12),d.cc()}if(2&e){const e=d.oc();d.Nb(4),d.vc("ngIf",e.IsMaster)}}function g(e,t){if(1&e){const e=d.ec();d.dc(0,"ion-footer"),d.dc(1,"ion-toolbar"),d.dc(2,"ion-buttons"),d.dc(3,"ion-button",2),d.lc("click",(function(){return d.Cc(e),d.oc().EditRoles()})),d.Jc(4,"\u66f4\u6539\u89d2\u8272"),d.cc(),d.dc(5,"ion-button",2),d.lc("click",(function(){return d.Cc(e),d.oc().ExtendVIP()})),d.Jc(6,"VIP\u5ef6\u671f"),d.cc(),d.cc(),d.cc(),d.cc()}}let v=(()=>{class e{constructor(e,t,i,s,n,c,o){this.modalCtrl=e,this.loadingController=t,this.toastController=i,this.alertController=s,this.forumservice=n,this.settings=c,this.router=o,this.Avatar="",this.Name="",this.Gender="\u6ca1\u6709\u516c\u5f00",this.Bazi=null,this.Describe="\u4ed6\u5f88\u61d2\uff0c\u4ec0\u4e48\u90fd\u6ca1\u5199\u3002",this.IsMaster=!1,this.Rolers=[]}ngOnInit(){return Object(s.b)(this,void 0,void 0,(function*(){this.Avatar=this.settings.Avatar("male"),yield this.showLoading(),this.forumservice.GetUserInfo(this.Uerid).then(e=>{this.Avatar=e.avatar||this.settings.Avatar(e.gender),this.Name=e.id,this.Rolers=this.settings.UserRolers(e.roller),this.Gender="male"===e.gender?"\u7537\u58eb":this.Gender,this.Gender="female"===e.gender?"\u5973\u58eb":this.Gender,this.Describe=""!==(e.describe||"")?e.describe:this.Describe,this.IsMaster=e.roller>=16,e.birthday&&(this.Bazi={person:e.id,male:"female"!==e.gender,time:e.birthday,place:["\u672a\u77e5","\u672a\u77e5"],realsuntime:!1}),this.vuser=e}).finally(()=>{this.closeLoading()})}))}get IsMe(){return this.Uerid===this.settings.User.id}get IsAmdin(){const e=this.settings.User;return!!e&&e.roller>=256}onSave(){this.modalCtrl.dismiss(!0)}ShowPanfu(){this.onSave(),this.router.navigate([`menu/topicpanfu/${JSON.stringify(this.Bazi)}`])}EditMessage(){return Object(s.b)(this,void 0,void 0,(function*(){const e={id:Object(l.c)(),created:Date.now(),valid:0,author:this.settings.User.id,receiver:this.Uerid,roller:0,readed:!1,private:!0,replyable:!0,title:"\u3002\u3002\u3002\u4f60\u597d\uff01",content:""},t=yield this.modalCtrl.create({component:r.a,componentProps:{Message:e}});yield t.present(),yield t.onWillDismiss()}))}EditTopic(){return Object(s.b)(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:a.a,componentProps:{MainTopic:this.CreateMainTopic(),forumid:null,forumname:"\u4e2a\u4eba\u6c42\u52a9"}});yield e.present();const{data:t}=yield e.onWillDismiss();t&&this.presentToast("\u6c42\u52a9\u5df2\u53d1\u9001\uff0c\u8bf7\u7b49\u5f85\u56de\u590d\u3002")}))}EditRoles(){return Object(s.b)(this,void 0,void 0,(function*(){const e=this.vuser.roller;let t=!1;const i=yield this.alertController.create({header:"\u63a5\u6536\u8005\u89d2\u8272",inputs:[{name:"register",type:"checkbox",label:"\u6ce8\u518c\u7528\u6237",value:1,checked:(1&e)>0},{name:"vip",type:"checkbox",label:"VIP\u7528\u6237",value:2,checked:(2&e)>0},{name:"huahe",type:"checkbox",label:"\u534e\u9e64\u540c\u95e8",value:4,checked:(4&e)>0},{name:"bbs",type:"checkbox",label:"\u7248\u4e3b",value:8,checked:(8&e)>0},{name:"liuyao",type:"checkbox",label:"\u516d\u723b\u8001\u5e08",value:16,checked:(16&e)>0},{name:"bazi",type:"checkbox",label:"\u547d\u7406\u8001\u5e08",value:32,checked:(32&e)>0},{name:"fengshui",type:"checkbox",label:"\u98ce\u6c34\u8001\u5e08",value:64,checked:(64&e)>0},{name:"supermaster",type:"checkbox",label:"\u5927\u5b97\u5e08",value:128,checked:(128&e)>0},{name:"admin",type:"checkbox",label:"\u7ba1\u7406\u5458",value:256,checked:(256&e)>0}],buttons:[{text:"\u786e\u5b9a",handler:()=>{t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield i.present();const{data:s}=yield i.onWillDismiss();if(!t)return;let n=0;for(const c of s.values)n|=c;yield this.showLoading(),this.forumservice.UpgradUser(this.vuser.id,{roller:n}).then(()=>{this.vuser.roller=n,this.Rolers=this.settings.UserRolers(n)}).catch(e=>{this.presentToast("\u8bbe\u7f6e\u7528\u6237\u6743\u9650\u5931\u8d25\u3002")}).finally(()=>{this.closeLoading()})}))}ExtendVIP(){return Object(s.b)(this,void 0,void 0,(function*(){let e=!1;const t=yield this.alertController.create({header:"\u5ef6\u957fVIP",inputs:[{name:"30days",type:"radio",label:"30 \u65e5",value:30,checked:!0},{name:"60days",type:"radio",label:"60 \u65e5",value:90,checked:!1},{name:"90days",type:"radio",label:"90 \u65e5",value:90,checked:!1},{name:"180days",type:"radio",label:"180 \u65e5",value:180,checked:!1},{name:"365days",type:"radio",label:"365 \u65e5",value:365,checked:!1}],buttons:[{text:"\u786e\u5b9a",handler:()=>{e=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield t.present();const{data:i}=yield t.onWillDismiss();yield this.showLoading(),this.forumservice.UpgradUser(this.vuser.id,{vip:i.values}).then(()=>{new Date(i.values),this.presentToast(`\u7528\u6237"${this.vuser.id}"\u7684VIP\u6743\u9650\u5ef6\u957f\u4e86 ${i.values} \u65e5\u3002`)}).catch(e=>{this.presentToast("\u8bbe\u7f6e\u7528\u6237\u6743\u9650\u5931\u8d25\u3002")}).finally(()=>{this.closeLoading()})}))}showLoading(){return Object(s.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u4fdd\u5b58\u7528\u6237\u8d44\u6599...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(s.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}CreateMainTopic(){const e=this.settings.User,t=Date.now();return{id:"",created:t,modified:t,author:e.id,forumid:this.Uerid,title:"",top:0,good:!1,update:0,gua:null,bazi:null,img:null,content:"",frozen:!1,deleted:!1,child:0,view:0}}presentToast(e){return Object(s.b)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:2e3})).present()}))}}return e.\u0275fac=function(t){return new(t||e)(d.Yb(n.ab),d.Yb(n.Z),d.Yb(n.hb),d.Yb(n.b),d.Yb(c.a),d.Yb(o.a),d.Yb(u.g))},e.\u0275cmp=d.Sb({type:e,selectors:[["app-publicprofil"]],inputs:{Uerid:"Uerid"},decls:28,vars:8,consts:[["color","secondary"],["slot","end"],[3,"click"],["name","log-out"],["slot","start"],[3,"src"],[1,"ion-text-wrap"],[4,"ngFor","ngForOf"],["fill","outline",3,"click",4,"ngIf"],[4,"ngIf"],[3,"innerHtml"],["fill","outline",3,"click"],["slot","end",4,"ngIf"]],template:function(e,t){1&e&&(d.dc(0,"ion-header"),d.dc(1,"ion-toolbar",0),d.dc(2,"ion-title"),d.Jc(3,"\u7b80\u4ecb/\u8d44\u5386"),d.cc(),d.dc(4,"ion-buttons",1),d.dc(5,"ion-button",2),d.lc("click",(function(){return t.onSave()})),d.Zb(6,"ion-icon",3),d.dc(7,"ion-text"),d.Jc(8,"\u5173\u95ed"),d.cc(),d.cc(),d.cc(),d.cc(),d.cc(),d.dc(9,"ion-content"),d.dc(10,"ion-item"),d.dc(11,"ion-thumbnail",4),d.Zb(12,"ion-img",5),d.cc(),d.dc(13,"ion-label",6),d.dc(14,"ion-text"),d.Jc(15),d.cc(),d.Zb(16,"p"),d.Hc(17,m,5,2,"ion-chip",7),d.cc(),d.cc(),d.dc(18,"ion-item"),d.dc(19,"ion-label"),d.dc(20,"ion-text"),d.Jc(21),d.cc(),d.cc(),d.Hc(22,f,2,0,"ion-button",8),d.cc(),d.Hc(23,b,5,1,"ion-item",9),d.dc(24,"ion-item"),d.dc(25,"ion-label"),d.Zb(26,"ion-text",10),d.cc(),d.cc(),d.cc(),d.Hc(27,g,7,0,"ion-footer",9)),2&e&&(d.Nb(12),d.vc("src",t.Avatar),d.Nb(3),d.Kc(t.Name),d.Nb(2),d.vc("ngForOf",t.Rolers),d.Nb(4),d.Lc("\u6027\u522b\uff1a",t.Gender,""),d.Nb(1),d.vc("ngIf",t.Bazi),d.Nb(1),d.vc("ngIf",!t.IsMe),d.Nb(3),d.vc("innerHtml",t.Describe,d.Dc),d.Nb(1),d.vc("ngIf",t.IsAmdin))},directives:[n.s,n.W,n.U,n.i,n.h,n.t,n.S,n.m,n.w,n.T,n.u,n.C,h.i,h.j,n.k,n.e,n.q],styles:[""]}),e})()},PKx9:function(e,t,i){"use strict";var s=i("mrSG"),n=i("LTmD"),c=i("lEof");i("aGhr");class o{constructor(){this.topics=[]}Reset(){this.topics=[]}GetPage(e,t=0){const i=this.topics.find(i=>i.forumid===e&&t===i.page);return i?{data:i.items,sum:i.sum}:null}SetPage(e,t,i,s){const n=this.topics.find(i=>i.forumid===e&&t===i.page);n?n.items=i:this.topics.push({forumid:e,page:t,items:i,sum:s})}GetTopic(e){for(const t of this.topics){const i=t.items.find(t=>t.id===e);if(i)return i}return null}SetTopic(e,t){const i=this.GetPage(t,0);i?i.data.insert(0,e):this.SetPage(t,0,[e],1)}DeleteTopic(e,t){if(t);else for(const i of this.topics)i.items.find(t=>t.id===e)&&(i.items=i.items.filter(t=>t.id!==e))}UpdateTopic(e){const t=this.GetTopic(e.id);if(t)for(let i in e)t[i]=e[i]}}var r=i("Y6BA"),a=(i("0eVs"),i("fXoL"));i.d(t,"a",(function(){return l}));let l=(()=>{class e{constructor(e,t){this.settings=e,this.host=t,this.vusers=[],this.currentTopics=[],this.ForumMG=new o}get User(){return this.settings.User||r.a}get VUsers(){return this.vusers=this.vusers||[],this.vusers=this.vusers.filter(e=>!!e)||[],this.vusers}set VUsers(e){this.vusers=e||[]}ForumList(e=!1){return Object(s.b)(this,void 0,void 0,(function*(){return this.ForumMG.Forumlist&&!1===e?Promise.resolve(this.ForumMG.Forumlist):(yield this.settings.WaitInit(),this.LoadForumList())}))}LoadTopicList(e,t,i){return Object(s.b)(this,void 0,void 0,(function*(){let s=e||"forum_"+i;s=-2===i?e+"good":s;const n=-1===i?i:t,c=this.ForumMG.GetPage(s,n);if(c)return Promise.resolve(c);const o={func:"TopicList",forumid:e,params:{filter:{},startColumn:20*t,private:!1}};return-1===i?o.params.filter.top=1:-2===i?o.params.filter.good=!0:-3===i?(o.params.filter.author=this.User.id,o.params.filter.topic=null):-4===i?(o.params.filter.author=this.User.id,o.params.filter.topic=null,o.params.private=!0):-5===i?(o.params.filter.forumid=this.User.id,o.params.filter.topic=null,o.params.private=!0):o.params.filter.top=0,e&&(o.params.filter.forumid=e),this.host.ForumRequest(this.User.id,this.User.password,o).then(e=>(e&&e.data&&this.ForumMG.SetPage(s,n,e.data,e.sum),e)).catch(e=>Promise.reject(e))}))}LoadAnswerList(e,t,i){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"TopicList",forumid:t,params:{filter:{topic:e},sort:"created",startColumn:20*i,direction:1}}).then(e=>e).catch(e=>Promise.reject(e))}))}NewTopic(e,t){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"NewTopic",forumid:e,params:t}).then(e=>e).catch(e=>Promise.reject(e))}))}GetTopic(e,t){return Object(s.b)(this,void 0,void 0,(function*(){const i=this.ForumMG.GetTopic(t);return i?Promise.resolve(i):this.host.ForumRequest(this.User.id,this.User.password,{func:"GetTopic",forumid:e||"",params:{topicid:t||"",private:!1}}).then(e=>Object(s.b)(this,void 0,void 0,(function*(){const t=yield e,i=yield this.GetUserInfo(t.author),s=(i||r.a).avatar||"";return t.avatar=s.IsNullOrEmpty()?this.settings.Avatar(i.gender):s,t.showImg=!0,t.showGua=!0,t.showBazi=!0,e}))).catch(e=>Promise.reject(e))}))}UpdatForum(e,t){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"UpdateForum",params:{id:t,data:e}}).then(e=>e).catch(e=>(console.log("updat failed",e),Promise.reject(e)))}))}UpdateTopic(e,t,i){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"Update",params:{id:t,private:i,data:e}}).then(e=>e).catch(e=>(console.log("updat failed",e),Promise.reject(e)))}))}GetUserInfo(e,t=-1){const i=this.VUsers.find(t=>t.id===e);return i?Promise.resolve(i):this.host.ForumRequest(this.User.id,this.User.password,{func:"GetVUser",author:e,roller:t}).then(e=>(this.VUsers.push(e),e)).catch(e=>Promise.reject(e))}DeleteTopic(e,t){return this.host.ForumRequest(this.User.id,this.User.password,{func:"DeleteTopic",params:{topicid:e}}).then(i=>(this.ForumMG.DeleteTopic(e,t),i)).catch(e=>Promise.reject(e))}SendMessage(e){return this.host.ForumRequest(this.User.id,this.User.password,{func:"SendMessage",params:{message:e}}).then(e=>e).catch(e=>Promise.reject(e))}LoadMessages(e,t){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"MessageList",params:{pageindex:e,forme:t}}).then(e=>e).catch(e=>Promise.reject(e))}))}DeleteMessage(e,t){return Object(s.b)(this,void 0,void 0,(function*(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"DeleteMessage",params:{msgid:e,todelete:t}}).then(e=>e).catch(e=>Promise.reject(e))}))}HoldPublicMessage(){return Object(s.b)(this,void 0,void 0,(function*(){return yield this.initial(),this.host.ForumRequest(this.User.id,this.User.password,{func:"HoldPublicMsg"}).then(e=>e).catch(e=>Promise.reject(e))}))}UpgradUser(e,t){return Object(s.b)(this,void 0,void 0,(function*(){return yield this.initial(),this.host.ForumRequest(this.User.id,this.User.password,{func:"UpgradeUser",params:{id:e,data:t}}).then(e=>e).catch(e=>Promise.reject(e))}))}initial(){return Object(s.b)(this,void 0,void 0,(function*(){return this.User||(yield this.settings.WaitInit()),!0}))}LoadForumList(){return this.host.ForumRequest(this.User.id,this.User.password,{func:"ForumList"}).then(e=>(this.ForumMG.Forumlist=e,e)).catch(e=>Promise.reject(e))}}return e.\u0275fac=function(t){return new(t||e)(a.hc(n.a),a.hc(c.a))},e.\u0275prov=a.Ub({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},aGhr:function(e,t){}}]);