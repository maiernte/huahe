(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{dnR8:function(e,i,t){"use strict";t.r(i);var n=t("ofXK"),o=t("3Pt+"),s=t("tyNb"),c=t("c7TG"),r=t("mrSG"),a=t("PKx9"),b=t("LTmD"),l=t("7L00"),d=t("Y6BA"),h=t("fXoL");function g(e,i){1&e&&h.Xb(0,"ion-menu-button")}function u(e,i){if(1&e&&(h.Zb(0,"ion-item"),h.Zb(1,"ion-label"),h.Zb(2,"ion-text"),h.xc(3),h.Yb(),h.Yb(),h.Yb()),2&e){const e=h.jc();h.Mb(3),h.yc(e.InfoNoMessage)}}function f(e,i){if(1&e&&(h.Zb(0,"ion-text"),h.xc(1),h.Yb()),2&e){const e=h.jc().$implicit;h.Mb(1),h.zc("\u6765\u81ea\uff1a",e.author,"")}}function m(e,i){if(1&e&&(h.Zb(0,"ion-text"),h.xc(1),h.Yb()),2&e){const e=h.jc().$implicit;h.Mb(1),h.zc("\u53d1\u9001\u7ed9\uff1a",e.receiver,"")}}function M(e,i){if(1&e){const e=h.ac();h.Zb(0,"ion-item-sliding",14),h.Zb(1,"ion-item"),h.Zb(2,"ion-label"),h.Zb(3,"ion-text",15),h.xc(4),h.Yb(),h.Xb(5,"br"),h.wc(6,f,2,1,"ion-text",3),h.wc(7,m,2,1,"ion-text",3),h.Xb(8,"br"),h.Zb(9,"p"),h.Zb(10,"small"),h.xc(11),h.Yb(),h.Yb(),h.Yb(),h.Zb(12,"ion-buttons",4),h.Zb(13,"ion-button",16),h.hc("click",(function(){h.rc(e);const t=i.$implicit;return h.jc().ShowMessage(t)})),h.Xb(14,"ion-icon",17),h.Yb(),h.Yb(),h.Yb(),h.Zb(15,"ion-item-options",18),h.Zb(16,"ion-item-option",19),h.hc("click",(function(){h.rc(e);const t=i.$implicit;return h.jc().ReplyMessage(t)})),h.Xb(17,"ion-icon",20),h.Yb(),h.Yb(),h.Zb(18,"ion-item-options",21),h.Zb(19,"ion-item-option",22),h.hc("click",(function(){h.rc(e);const t=i.$implicit;return h.jc().DeleteMsg(t)})),h.Xb(20,"ion-icon",23),h.Yb(),h.Yb(),h.Yb()}if(2&e){const e=i.$implicit,t=h.jc();h.oc("disabled",!t.ForMe),h.Mb(3),h.oc("color",e.readed?"medium":"dark"),h.Mb(1),h.zc("\u6807\u9898\uff1a",e.title,""),h.Mb(2),h.oc("ngIf",t.ForMe),h.Mb(1),h.oc("ngIf",!t.ForMe),h.Mb(4),h.yc(t.ShowTime(e.created)),h.Mb(2),h.oc("color",e.readed?"medium":"primary"),h.Mb(1),h.oc("name",e.readed?"mail":"mail-unread"),h.Mb(2),h.oc("disabled",!e.replyable)("color",e.replyable?"primary":"medium")}}function p(e,i){if(1&e&&(h.Zb(0,"ion-select-option",24),h.xc(1),h.Yb()),2&e){const e=i.$implicit;h.oc("value",e),h.Mb(1),h.zc("\u7b2c",e+1,"\u9875")}}let v=(()=>{class e{constructor(e,i,t,n,o,s,c){this.loadingController=e,this.modalCtrl=i,this.alertController=t,this.route=n,this.router=o,this.forumservice=s,this.settings=c,this.pageindex=0,this.Messages=[],this.ForMe=!0,this.InfoNoMessage="\u6b63\u5728\u8bfb\u53d6\u60a8\u7684\u6d88\u606f\u3002\u3002\u3002",this.Pages=[0],this.CanNaviBack=!0,this.route.params.subscribe(e=>{this.CanNaviBack="true"===e.naviback})}ngOnInit(){return Object(r.b)(this,void 0,void 0,(function*(){if(!this.settings.HasUser)return this.presentAlert("\u65e0\u6cd5\u8bbf\u95ee",null,"\u60a8\u8fd8\u6ca1\u6709\u6ce8\u518c\u8d26\u53f7\uff0c\u65e0\u6cd5\u53d1\u9001\u6d88\u606f\u3002"),void this.router.navigateByUrl("/menu/user");this.PageIndex=0}))}get PageIndex(){return this.pageindex}set PageIndex(e){this.pageindex=e,this.Reload(e)}ShowTime(e){return new Date(e).toChinaStr(!0)}ShowMessage(e){return Object(r.b)(this,void 0,void 0,(function*(){this.ForMe&&!1===e.readed&&this.forumservice.DeleteMessage(e.id,!1).then(()=>{e.readed=!0});const i=yield this.modalCtrl.create({component:l.a,componentProps:{Message:e,Read:!0}});yield i.present()}))}ChangeMode(){return Object(r.b)(this,void 0,void 0,(function*(){this.ForMe=!this.ForMe,this.Messages=[],this.PageIndex=0}))}DeleteMsg(e){return Object(r.b)(this,void 0,void 0,(function*(){yield this.showLoading(),this.forumservice.DeleteMessage(e.id,!0).then(()=>{this.Messages=this.Messages.filter(i=>i.id!==e.id),0===this.Messages.length&&(this.InfoNoMessage="\u60a8\u6ca1\u6709\u4efb\u4f55\u6d88\u606f\u3002\u3002\u3002")}).finally(()=>{this.closeLoading()})}))}ReplyMessage(e){return Object(r.b)(this,void 0,void 0,(function*(){const i=Object(d.b)(),t=new Date(e.created).toChinaStr(!0),n={id:i,created:Date.now(),valid:0,author:this.settings.User.id,receiver:e.author,roller:0,readed:!1,private:!0,replyable:!0,title:`\u56de\u590d\uff1a${e.title}`,content:`\n\n\u539f\u6d88\u606f\uff1a${t}\n\u539f\u5185\u5bb9\uff1a=======================\n${e.content}`},o=yield this.modalCtrl.create({component:l.a,componentProps:{Message:n}});yield o.present(),yield o.onWillDismiss()}))}Reload(e){return Object(r.b)(this,void 0,void 0,(function*(){yield this.showLoading(),this.forumservice.LoadMessages(e,this.ForMe).then(e=>{this.BuildPages(e.sum),this.Messages=e.data||[],0===this.Messages.length&&(this.InfoNoMessage="\u60a8\u6ca1\u6709\u4efb\u4f55\u6d88\u606f")}).finally(()=>{this.closeLoading()})}))}showLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u8bfb\u53d6\u6211\u7684\u6d88\u606f...",duration:6e4})),yield this.loadingView.present()}))}closeLoading(){return Object(r.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}presentAlert(e,i,t){return Object(r.b)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:e||"\u9519\u8bef",subHeader:i||"",message:t,buttons:["\u786e\u5b9a"]});yield n.present()}))}BuildPages(e){if(0!==this.PageIndex)return;if(0===e)return void(this.Pages=[0]);this.Pages=[];const i=Math.ceil(e/20);for(let t=0;t<i;t++)this.Pages.push(t)}}return e.\u0275fac=function(i){return new(i||e)(h.Wb(c.bb),h.Wb(c.cb),h.Wb(c.b),h.Wb(s.a),h.Wb(s.g),h.Wb(a.a),h.Wb(b.a))},e.\u0275cmp=h.Qb({type:e,selectors:[["app-messagelist"]],decls:24,vars:8,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],[4,"ngIf"],["slot","end"],[3,"click"],["ion-no-padding",""],[3,"disabled",4,"ngFor","ngForOf"],[3,"disabled","click"],["name","arrow-back"],["cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"small",3,"disabled","click"],["name","arrow-forward"],[3,"disabled"],[3,"color"],[3,"color","click"],["slot","end",3,"name"],["side","start"],[3,"disabled","color","click"],["slot","icon-only","name","send"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"],[3,"value"]],template:function(e,i){1&e&&(h.Zb(0,"ion-header"),h.Zb(1,"ion-toolbar",0),h.Zb(2,"ion-buttons",1),h.Xb(3,"ion-back-button",2),h.wc(4,g,1,0,"ion-menu-button",3),h.Yb(),h.Zb(5,"ion-title"),h.xc(6,"\u6211\u7684\u6d88\u606f"),h.Yb(),h.Zb(7,"ion-buttons",4),h.Zb(8,"ion-button",5),h.hc("click",(function(){return i.ChangeMode()})),h.xc(9),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Zb(10,"ion-content"),h.Zb(11,"ion-list",6),h.wc(12,u,4,1,"ion-item",3),h.wc(13,M,21,10,"ion-item-sliding",7),h.Yb(),h.Yb(),h.Zb(14,"ion-footer"),h.Zb(15,"small"),h.Zb(16,"ion-toolbar"),h.Zb(17,"ion-buttons",4),h.Zb(18,"ion-button",8),h.hc("click",(function(){return i.PageIndex=i.PageIndex-1})),h.Xb(19,"ion-icon",9),h.Yb(),h.Zb(20,"ion-select",10),h.hc("ngModelChange",(function(e){return i.PageIndex=e})),h.wc(21,p,2,2,"ion-select-option",11),h.Yb(),h.Zb(22,"ion-button",12),h.hc("click",(function(){return i.PageIndex=i.PageIndex+1})),h.Xb(23,"ion-icon",13),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Yb()),2&e&&(h.Mb(4),h.oc("ngIf",!i.CanNaviBack),h.Mb(5),h.yc(i.ForMe?"\u6536\u5230\u7684":"\u53d1\u9001\u7684"),h.Mb(3),h.oc("ngIf",0===i.Messages.length),h.Mb(1),h.oc("ngForOf",i.Messages),h.Mb(5),h.oc("disabled",0===i.PageIndex),h.Mb(2),h.oc("ngModel",i.PageIndex),h.Mb(1),h.oc("ngForOf",i.Pages),h.Mb(1),h.oc("disabled",i.PageIndex===i.Pages.length-1))},directives:[c.s,c.Y,c.k,c.g,c.h,n.j,c.W,c.j,c.o,c.D,n.i,c.q,c.t,c.P,c.hb,o.c,o.d,c.G,c.w,c.C,c.T,c.B,c.A,c.z,c.Q],styles:[""]}),e})();t.d(i,"MessagelistPageModule",(function(){return w}));const Y=[{path:"",component:v}];let w=(()=>{class e{}return e.\u0275mod=h.Ub({type:e}),e.\u0275inj=h.Tb({factory:function(i){return new(i||e)},imports:[[n.b,o.a,c.Z,s.i.forChild(Y)]]}),e})()}}]);