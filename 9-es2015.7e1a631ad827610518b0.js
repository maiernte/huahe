(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{HQI1:function(t,i,n){"use strict";n.d(i,"a",(function(){return b}));var e=n("c7TG"),o=n("fXoL"),c=n("ofXK");function s(t,i){if(1&t){const t=o.ac();o.Zb(0,"ion-item",2),o.hc("click",(function(){o.rc(t);const n=i.$implicit;return o.jc(2).onSelect(n.value)})),o.Zb(1,"ion-text"),o.xc(2),o.Yb(),o.Yb()}if(2&t){const t=i.$implicit,n=o.jc(2);o.oc("color",t.value===n.currentOption?"light":""),o.Mb(2),o.yc(t.name)}}function a(t,i){if(1&t&&(o.Zb(0,"div"),o.wc(1,s,3,2,"ion-item",1),o.Yb()),2&t){const t=o.jc();o.Mb(1),o.oc("ngForOf",t.items)}}function h(t,i){if(1&t&&(o.Zb(0,"ion-item",4),o.Zb(1,"ion-note"),o.xc(2),o.Yb(),o.Zb(3,"ion-label",5),o.xc(4),o.Yb(),o.Yb()),2&t){const t=i.$implicit;o.Mb(2),o.yc(t.name),o.Mb(2),o.zc(" ",t.value," ")}}function r(t,i){if(1&t&&(o.Zb(0,"small"),o.wc(1,h,5,2,"ion-item",3),o.Yb()),2&t){const t=o.jc();o.Mb(1),o.oc("ngForOf",t.items)}}let b=(()=>{class t{constructor(t){this.popoverCtrl=t,this.toselect=!0}ngOnInit(){}onSelect(t){this.popoverCtrl.dismiss(t)}}return t.\u0275fac=function(i){return new(i||t)(o.Wb(e.gb))},t.\u0275cmp=o.Qb({type:t,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","end",1,"ion-text-wrap"]],template:function(t,i){1&t&&(o.wc(0,a,2,1,"div",0),o.wc(1,r,2,1,"small",0)),2&t&&(o.oc("ngIf",i.toselect),o.Mb(1),o.oc("ngIf",!i.toselect))},directives:[c.j,c.i,e.x,e.U,e.J,e.D],styles:[""]}),t})()},gTpY:function(t,i,n){"use strict";n.d(i,"a",(function(){return y}));var e=n("mrSG"),o=n("c7TG"),c=n("+cLM"),s=(n("0eVs"),n("FiP+")),a=n("l+bK"),h=n("LTmD"),r=n("HQI1"),b=n("fXoL"),l=n("ofXK");function u(t,i){if(1&t&&(b.Zb(0,"span"),b.xc(1),b.Yb()),2&t){const t=b.jc();b.Mb(1),b.zc("\u771f\u592a\u9633\u65f6\uff1a",t.RealTime,"")}}function g(t,i){if(1&t&&(b.Zb(0,"span"),b.xc(1),b.Yb()),2&t){const t=b.jc().$implicit;b.Mb(1),b.yc(t.text)}}function f(t,i){if(1&t&&(b.Zb(0,"h5"),b.xc(1),b.Yb()),2&t){const t=b.jc().$implicit;b.Mb(1),b.yc(t.text)}}function p(t,i){if(1&t&&(b.Zb(0,"ion-col",11),b.Zb(1,"ion-text",2),b.wc(2,g,2,1,"span",1),b.wc(3,f,2,1,"h5",1),b.Yb(),b.Yb()),2&t){const t=i.$implicit;b.Mb(1),b.vc("color",t.color),b.Mb(1),b.oc("ngIf",!t.bz),b.Mb(1),b.oc("ngIf",t.bz)}}function d(t,i){if(1&t&&(b.Zb(0,"ion-row",11),b.wc(1,p,4,4,"ion-col",3),b.Yb()),2&t){const t=i.$implicit;b.Mb(1),b.oc("ngForOf",t)}}function m(t,i){if(1&t&&(b.Zb(0,"ion-col",12),b.Zb(1,"ion-text",12),b.xc(2),b.Yb(),b.Yb()),2&t){const t=i.$implicit;b.Mb(2),b.yc(t)}}function S(t,i){if(1&t&&(b.Zb(0,"ion-row",12),b.wc(1,m,3,1,"ion-col",8),b.Yb()),2&t){const t=i.$implicit;b.Mb(1),b.oc("ngForOf",t)}}function x(t,i){if(1&t){const t=b.ac();b.Zb(0,"ion-item",13),b.hc("click",(function(n){b.rc(t);const e=i.index,o=i.$implicit,c=b.jc();return c.SelectedDY=e,c.ShowDetail(o,n)})),b.Zb(1,"ion-note",14),b.xc(2),b.Yb(),b.Zb(3,"ion-label",15),b.Zb(4,"ion-text",16),b.xc(5),b.Yb(),b.Zb(6,"ion-text",17),b.xc(7),b.Yb(),b.Zb(8,"ion-text",16),b.xc(9),b.Yb(),b.Yb(),b.Yb()}if(2&t){const t=i.$implicit,n=i.index,e=b.jc();b.Mb(2),b.yc(t[0]),b.Mb(3),b.zc("",t[1]," "),b.Mb(1),b.oc("color",e.SelectedDY==n?"primary":"dark"),b.Mb(1),b.yc(t[2]),b.Mb(2),b.zc(" ",t[3],"")}}function Z(t,i){if(1&t){const t=b.ac();b.Zb(0,"ion-item",13),b.hc("click",(function(n){b.rc(t);const e=i.index,o=i.$implicit,c=b.jc();return c.SelectedLiu=e,c.ShowDetail(o,n)})),b.Zb(1,"ion-note",14),b.xc(2),b.Yb(),b.Zb(3,"ion-label",15),b.Zb(4,"ion-text",16),b.xc(5),b.Yb(),b.Zb(6,"ion-text",17),b.xc(7),b.Yb(),b.Zb(8,"ion-text",16),b.xc(9),b.Yb(),b.Yb(),b.Yb()}if(2&t){const t=i.$implicit,n=i.index,e=b.jc();b.Mb(2),b.yc(t[0]),b.Mb(3),b.zc("",t[1]," "),b.Mb(1),b.oc("color",e.SelectedLiu==n?"primary":"dark"),b.Mb(1),b.yc(t[2]),b.Mb(2),b.zc(" ",t[3],"")}}function Y(t,i){if(1&t){const t=b.ac();b.Zb(0,"ion-item",13),b.hc("click",(function(n){b.rc(t);const e=i.index,o=i.$implicit,c=b.jc();return c.SelectedXiao=e,c.ShowDetail(o,n)})),b.Zb(1,"ion-note",14),b.xc(2),b.Yb(),b.Zb(3,"ion-label",15),b.Zb(4,"ion-text",16),b.xc(5),b.Yb(),b.Zb(6,"ion-text",17),b.xc(7),b.Yb(),b.Zb(8,"ion-text",16),b.xc(9),b.Yb(),b.Yb(),b.Yb()}if(2&t){const t=i.$implicit,n=i.index,e=b.jc();b.Mb(2),b.yc(t[0]),b.Mb(3),b.zc("",t[1]," "),b.Mb(1),b.oc("color",e.SelectedXiao==n?"primary":"dark"),b.Mb(1),b.yc(t[2]),b.Mb(2),b.zc(" ",t[3],"")}}let y=(()=>{class t{constructor(t,i){this.toastController=t,this.popoverCtrl=i,this.ShowShenSha=!1,this.ShowDayun=!1,this.ShowLiunian=!1,this.ShowXiaoyun=!1,this.selectedDayun=0,this.SelectedLiu=0,this.SelectedXiao=0}ngOnInit(){this.initBaseInfo(),this.Reflash(null)}set Config(t){this.config=Object(h.b)(t)}get FontSize(){return`${this.config.fontsize}px`}get YuanJu(){return this.yuanju}get DayunName(){return this.dayunname}get SelectedDY(){return this.selectedDayun}set SelectedDY(t){this.selectedDayun=t;const i=this.bazi.DaYun[t],n=i.Start.getFullYear();this.calcXiaoyun(n,i.End.getFullYear()),this.dayunname=`\u5927\u8fd0 - ${i.GZ.Name}`}set BaziText(t){this.baziText=t}get BaziInText(){return`${this.bazi.Y.Name} / ${this.bazi.M.Name} / ${this.bazi.D.Name} / ${this.bazi.T.Name} `}Reflash(t){t&&(this.config=Object(h.b)(t)),this.initYuanju(""===this.RealTime?this.Birthday:this.RealTime),this.initShenShas(),this.SelectedDY=0,this.initDayuns()}ChangeDayun(t){return Object(e.b)(this,void 0,void 0,(function*(){this.SelectedDY=t;const i=this.bazi.DaYun[t-1].Start.toChinaStr(),n=this.bazi.DaYun[t-1].GZ.Name,e=yield this.toastController.create({message:`\u5927\u8fd0${n} \u5f00\u59cb\u4e8e ${i}`,duration:3e3});yield e.present()}))}ShowDetail(t,i){return Object(e.b)(this,void 0,void 0,(function*(){const n=yield this.popoverCtrl.create({component:r.a,event:i,componentProps:{items:[{name:"\u85cf\u5e72",value:t[4]},{name:"\u7eb3\u97f3",value:t[5]},{name:"\u957f\u751f\u5bab",value:t[6]},{name:"\u795e\u715e",value:t[7]}],toselect:!1},translucent:!0});yield n.present(),yield n.onDidDismiss()}))}initBaseInfo(){let t;const i=this.baziText.place,n=s.a.FindCity(i[0],i[1]);this.Place=n?`${i[0]}\u7701/\u5e02 ${i[1]}\u5e02/\u53bf/\u533a`:"\u672a\u77e5",this.Gender=this.baziText.male?"\u4e7e":"\u5764",this.Person=`${this.baziText.person} (${this.Gender}\u9020)`;const e=this.baziText.time.parseDate();this.Birthday=e.toChinaStr(!0);const o=new a.a(e);if(this.BirthdayN=`${o.GZyear}\u5e74${o.NLleap?"(\u95f0)":""}${o.NLmonth}\u6708${o.NLdate}`,this.baziText.realsuntime){const i=n?s.a.CalcTimeOff(n.Code):null;t=new Date(e.getTime()+6e4*i),this.RealTime=t.toChinaStr(!0)}else this.RealTime=""}initYuanju(t){const i=[],n=t.parseDate();this.bazi=new c.a(n,this.baziText.male?"m":"f");const e=this.config.shortname?1:0;if(i.push(this.bazi.All.select(t=>({text:t.Shen10Gan[e],color:"gray",bz:!1}))),i.push(this.bazi.All.select(t=>({text:t.Gan.Name,color:"darkblue",bz:!0}))),i.push(this.bazi.All.select(t=>({text:t.Zhi.Name,color:"darkblue",bz:!0}))),i.push(this.bazi.All.select(t=>({text:t.Shen10Zhi[e],color:"gray",bz:!1}))),i[0].insert(0,{text:this.Gender,color:"",bz:!1}),i[1].insert(0,{text:"\u9020",color:"",bz:!1}),i[2].insert(0,{text:"",color:"",bz:!1}),i[3].insert(0,{text:"",color:"",bz:!1}),this.config.yuanju.cangan){const t=this.bazi.All.select(t=>({text:t.Zhi.CGan.map(t=>t.Name).join(""),color:""}));t.insert(0,{text:"\u85cf\u5e72",color:"gray"}),i.push(t)}if(this.config.yuanju.nayin){const t=this.bazi.All.select(t=>({text:t.NaYin,color:""}));t.insert(0,{text:"\u7eb3\u97f3",color:"gray"}),i.push(t)}if(this.config.yuanju.changshen){const t=this.bazi.All.select(t=>({text:t.ChangSheng,color:""}));t.insert(0,{text:"\u957f\u751f",color:"gray"}),i.push(t)}this.yuanju=i}initShenShas(){const t=[],i=this.bazi.ShenSha.length;for(let o=0;o<i;o++)t.push(`[${this.bazi.ShenSha[o].Name} - ${this.bazi.ShenSha[o].Result.join("")}]`);const n=this.config.shensha;this.ShenShas=[];for(let o=0;o<=i;o+=n){const e=t.slice(o,o+n>i?i:o+n);this.ShenShas.push(e)}const e=n-this.ShenShas[this.ShenShas.length-1].length;if(e>0)for(let o=0;o<e;o++)this.ShenShas[this.ShenShas.length-1].push("");this.ShenShaHead=`[\u547d\u5bab - ${this.bazi.MingGong.Name}] [\u80ce\u5143 - ${this.bazi.TaiYuan.Name}]`}initDayuns(){const t=this.config.shortname?1:0,i=[];this.bazi.DaYun.forEach(n=>{const e=[];e.push(`${n.Start.toChinaStr()}`),e.push(n.GZ.Shen10Gan[t]),e.push(n.GZ.Name),e.push(n.GZ.Shen10Zhi[t]),e.push(n.GZ.Zhi.CGan.map(t=>t.Name).join("")),e.push(n.GZ.NaYin),e.push(n.GZ.ChangSheng),e.push(this.bazi.CalcShenSha(n.GZ)),i.push(e)}),i[0][3]=i[0][3]+" (\u8d77\u8fd0\u524d)",this.Dayuns=i,this.SelectedDY=0}calcXiaoyun(t,i){const n=this.config.shortname?1:0,e=[],o=[];let c=this.bazi.Birthday.toChinaStr();c=c.replace(this.bazi.Birthday.getFullYear().toString(),"##"),this.bazi.CalcLiuNian(t,i).forEach(t=>{const i=[],c=[];i.push(`${t.Start.toChinaStr()}`),c.push(`${t.Start.getFullYear()}\u5e74${this.bazi.Birthday.getMonth()+1}\u6708${this.bazi.Birthday.getDate()+1}\u65e5`),i.push(t.GZ.Shen10Gan[n]),i.push(t.GZ.Name),i.push(t.GZ.Shen10Zhi[n]),c.push(t.GZ2.Shen10Gan[n]),c.push(t.GZ2.Name),c.push(t.GZ2.Shen10Zhi[n]),e.push(i),o.push(c),i.push(t.GZ.Zhi.CGan.map(t=>t.Name).join("")),c.push(t.GZ2.Zhi.CGan.map(t=>t.Name).join("")),i.push(t.GZ.NaYin),c.push(t.GZ2.NaYin),i.push(t.GZ.ChangSheng),c.push(t.GZ2.ChangSheng),i.push(this.bazi.CalcShenSha(t.GZ)),c.push(this.bazi.CalcShenSha(t.GZ2))}),this.Liunian=e,this.Xiaoyun=o}}return t.\u0275fac=function(i){return new(i||t)(b.Wb(o.kb),b.Wb(o.gb))},t.\u0275cmp=b.Qb({type:t,selectors:[["app-baziview"]],inputs:{Config:"Config",BaziText:"BaziText"},decls:58,vars:44,consts:[["lines","none"],[4,"ngIf"],[1,"bzgrid"],["class","ion-no-padding bzgrid",4,"ngFor","ngForOf"],[2,"margin-left","10px"],["size","small","fill","clear","slot","end",3,"click"],[3,"name"],[1,"ion-no-padding",3,"hidden"],["class","ion-no-padding",4,"ngFor","ngForOf"],[3,"hidden"],[3,"click",4,"ngFor","ngForOf"],[1,"ion-no-padding","bzgrid"],[1,"ion-no-padding"],[3,"click"],[1,"ion-margin"],["slot","end"],["color","medium"],[3,"color"]],template:function(t,i){1&t&&(b.Zb(0,"div"),b.Zb(1,"ion-item",0),b.Zb(2,"section"),b.Zb(3,"span"),b.xc(4),b.Yb(),b.Xb(5,"br"),b.Zb(6,"span"),b.xc(7),b.Yb(),b.Xb(8,"br"),b.Zb(9,"span"),b.xc(10),b.Yb(),b.Xb(11,"br"),b.Zb(12,"span"),b.xc(13),b.Yb(),b.Xb(14,"br"),b.wc(15,u,2,1,"span",1),b.Xb(16,"br"),b.Yb(),b.Yb(),b.Zb(17,"ion-item",0),b.Zb(18,"ion-grid",2),b.wc(19,d,2,1,"ion-row",3),b.Yb(),b.Yb(),b.Zb(20,"section"),b.Zb(21,"ion-item"),b.Zb(22,"ion-label"),b.xc(23,"\u795e\u715e"),b.Yb(),b.Zb(24,"ion-text",4),b.Zb(25,"small"),b.xc(26),b.Yb(),b.Yb(),b.Zb(27,"ion-button",5),b.hc("click",(function(){return i.ShowShenSha=!i.ShowShenSha})),b.Xb(28,"ion-icon",6),b.Yb(),b.Yb(),b.Zb(29,"ion-grid",7),b.wc(30,S,2,1,"ion-row",8),b.Yb(),b.Yb(),b.Zb(31,"section"),b.Zb(32,"ion-item"),b.Zb(33,"ion-label"),b.Zb(34,"ion-text",9),b.xc(35,"\u5927\u8fd0\uff1a"),b.Yb(),b.Zb(36,"ion-text",9),b.xc(37),b.Yb(),b.Yb(),b.Zb(38,"ion-button",5),b.hc("click",(function(){return i.ShowDayun=!i.ShowDayun})),b.Xb(39,"ion-icon",6),b.Yb(),b.Yb(),b.Zb(40,"ion-list",9),b.wc(41,x,10,5,"ion-item",10),b.Yb(),b.Yb(),b.Zb(42,"section"),b.Zb(43,"ion-item"),b.Zb(44,"ion-label"),b.xc(45,"\u6d41\u5e74"),b.Yb(),b.Zb(46,"ion-button",5),b.hc("click",(function(){return i.ShowLiunian=!i.ShowLiunian})),b.Xb(47,"ion-icon",6),b.Yb(),b.Yb(),b.Zb(48,"ion-list",9),b.wc(49,Z,10,5,"ion-item",10),b.Yb(),b.Yb(),b.Zb(50,"section"),b.Zb(51,"ion-item"),b.Zb(52,"ion-label"),b.xc(53,"\u5c0f\u8fd0"),b.Yb(),b.Zb(54,"ion-button",5),b.hc("click",(function(){return i.ShowXiaoyun=!i.ShowXiaoyun})),b.Xb(55,"ion-icon",6),b.Yb(),b.Yb(),b.Zb(56,"ion-list",9),b.wc(57,Y,10,5,"ion-item",10),b.Yb(),b.Yb(),b.Yb()),2&t&&(b.vc("font-size",i.FontSize),b.Mb(2),b.vc("font-size",i.FontSize),b.Mb(2),b.zc("\u547d\u4e3b\uff1a",i.Person,""),b.Mb(3),b.zc("\u751f\u65e5\uff1a",i.Birthday,""),b.Mb(3),b.zc("\u519c\u5386\uff1a",i.BirthdayN,""),b.Mb(3),b.zc("\u51fa\u751f\u5730\uff1a",i.Place,""),b.Mb(2),b.oc("ngIf",""!=i.RealTime),b.Mb(3),b.vc("font-size",i.FontSize),b.Mb(1),b.oc("ngForOf",i.YuanJu),b.Mb(1),b.vc("font-size",i.FontSize),b.Mb(2),b.vc("font-size",i.FontSize),b.Mb(4),b.yc(i.ShenShaHead),b.Mb(2),b.oc("name",i.ShowShenSha?"ios-arrow-up":"ios-arrow-down"),b.Mb(1),b.oc("hidden",!i.ShowShenSha),b.Mb(1),b.oc("ngForOf",i.ShenShas),b.Mb(1),b.vc("font-size",i.FontSize),b.Mb(2),b.vc("font-size",i.FontSize),b.Mb(1),b.oc("hidden",!i.ShowDayun),b.Mb(2),b.oc("hidden",i.ShowDayun),b.Mb(1),b.yc(i.DayunName),b.Mb(2),b.oc("name",i.ShowDayun?"ios-arrow-up":"ios-arrow-down"),b.Mb(1),b.oc("hidden",!i.ShowDayun),b.Mb(1),b.oc("ngForOf",i.Dayuns),b.Mb(1),b.vc("font-size",i.FontSize),b.Mb(2),b.vc("font-size",i.FontSize),b.Mb(3),b.oc("name",i.ShowLiunian?"ios-arrow-up":"ios-arrow-down"),b.Mb(1),b.oc("hidden",!i.ShowLiunian),b.Mb(1),b.oc("ngForOf",i.Liunian),b.Mb(1),b.vc("font-size",i.FontSize),b.Mb(2),b.vc("font-size",i.FontSize),b.Mb(3),b.oc("name",i.ShowXiaoyun?"ios-arrow-up":"ios-arrow-down"),b.Mb(1),b.oc("hidden",!i.ShowXiaoyun),b.Mb(1),b.oc("ngForOf",i.Xiaoyun))},directives:[o.x,l.j,o.s,l.i,o.D,o.U,o.i,o.u,o.E,o.M,o.m,o.J],styles:[".bzgrid[_ngcontent-%COMP%]{padding:0}.selected[_ngcontent-%COMP%]{background-color:#faebd7}"]}),t})()},n7QD:function(t,i,n){"use strict";n.d(i,"a",(function(){return a}));var e=n("ofXK"),o=n("3Pt+"),c=n("c7TG"),s=(n("ylIl"),n("fXoL"));let a=(()=>{class t{}return t.\u0275mod=s.Ub({type:t}),t.\u0275inj=s.Tb({factory:function(i){return new(i||t)},imports:[[e.b,o.a,c.ab]]}),t})()},uEAi:function(t,i,n){"use strict";n.d(i,"a",(function(){return a}));var e=n("ofXK"),o=n("3Pt+"),c=n("c7TG"),s=(n("gTpY"),n("fXoL"));let a=(()=>{class t{}return t.\u0275mod=s.Ub({type:t}),t.\u0275inj=s.Tb({factory:function(i){return new(i||t)},imports:[[e.b,o.a,c.ab]]}),t})()},ylIl:function(t,i,n){"use strict";n.d(i,"a",(function(){return p}));var e=n("mrSG"),o=n("c7TG"),c=(n("0eVs"),n("pNW8")),s=n("LTmD"),a=n("2QJI"),h=n("fXoL"),r=n("ofXK");function b(t,i){if(1&t&&(h.Zb(0,"td",3),h.xc(1),h.Yb()),2&t){const t=i.$implicit;h.vc("color",t.color),h.oc("colSpan",t.span),h.Mb(1),h.yc(t.txt)}}function l(t,i){if(1&t&&(h.Zb(0,"tr"),h.wc(1,b,2,4,"td",5),h.Yb()),2&t){const t=i.$implicit;h.Mb(1),h.oc("ngForOf",t)}}function u(t,i){if(1&t){const t=h.ac();h.Zb(0,"td",6),h.hc("click",(function(){return h.rc(t),h.jc().calcColor(null)})),h.xc(1),h.Yb()}if(2&t){const t=i.$implicit;h.oc("colSpan",t.span),h.Mb(1),h.yc(t.txt)}}function g(t,i){if(1&t){const t=h.ac();h.Zb(0,"td",8),h.hc("click",(function(){h.rc(t);const n=i.index,e=h.jc().index;return h.jc().tostNayin(e,n)})),h.Yb()}if(2&t){const t=i.$implicit;h.vc("color",t.color),h.oc("innerHTML",t.text,h.sc)}}function f(t,i){if(1&t&&(h.Zb(0,"tr"),h.wc(1,g,1,3,"td",7),h.Yb()),2&t){const t=i.$implicit;h.Mb(1),h.oc("ngForOf",t)}}let p=(()=>{class t{constructor(t,i){this.toastController=t,this.settings=i,this.ColorRiYue=["","","",""],this.YaoSymbols=[{svg:"assets/shaoyin.svg",name:"\u5c11\u9634"},{svg:"assets/shaoyan.svg",name:"\u5c11\u9633"},{svg:"assets/laoyin.svg",name:"\u8001\u9634"},{svg:"assets/laoyan.svg",name:"\u8001\u9633"}]}ngOnInit(){}set Config(t){this.config=Object(s.b)(t)}get FontSize(){return`${this.config.fontsize}px`}get GuaText(){return this.guaText}set GuaText(t){this.guaText=t,this.initGua()}get ShenSha(){return this.shensha}get Xunkong(){return this.Gua.ShenShas[this.Gua.ShenShas.length-1].Result}get GuaLine(){return this.gualine}get GuaChi(){return this.guachi}get GuaInText(){return this.Gua.Ben.Index===this.Gua.Bian.Index?this.Gua.Ben.Name:`${this.Gua.Ben.NameS}\u4e4b${this.Gua.Bian.NameS}`}get HasBianGua(){return this.Gua.Ben.Index!==this.Gua.Bian.Index}Reflash(t){t&&(this.config=Object(s.b)(t)),this.initShensha(),this.calcGuaLine()}tostNayin(t,i){return Object(e.b)(this,void 0,void 0,(function*(){const n=5-t;let e=i<=4?1:2;e=i<=1?0:e;let o=this.Gua.Ben.GanZhis[n];0===e?o=this.Gua.FuGua.GanZhis[n]:2===e&&(o=this.Gua.Bian.GanZhis[n]);const c=yield this.toastController.create({message:`${o.Name} - ${o.NaYin}`,duration:3e3});yield c.present(),this.calcColor(o.Zhi.Index)}))}calcColor(t){const i=null===t,n=i?"XX":new a.b(t).Zhi.Name,e=i?"XX":new a.b((t+6)%12).Zhi.Name,o=i?"XX":new a.b((13-t)%12).Zhi.Name;this.ShenSha.forEach(t=>{t.forEach(t=>{t.color=t.txt.includes(n)?"#4854e0":t.txt.includes(e)?"#cf3c4f":t.txt.includes(o)?"#28ba62":""})}),this.gualine.forEach(t=>{t.forEach(t=>{t.color=t.text.includes(n)?"#4854e0":t.text.includes(e)?"#cf3c4f":t.text.includes(o)?"#28ba62":""})});const c=[this.Gua.Yue.Name,this.Gua.Ri.Name,this.Xunkong[0],this.Xunkong[1]];for(let s=0;s<4;s++)this.ColorRiYue[s]=c[s].includes(n)?"#4854e0":c[s].includes(e)?"#cf3c4f":c[s].includes(o)?"#28ba62":""}initGua(){this.Titel="\u95ee\u5ff5\uff1a"+this.guaText.question,this.Gua=new c.a(this.guaText.time,this.guaText.ben,this.guaText.bian),this.GuaTime="\u8d77\u5366\u65f6\u95f4\uff1a"+("string"==typeof this.guaText.time?this.guaText.time:`${this.guaText.time[0]}\u6708${this.guaText[1]}\u65e5`).replace("00:00:00",""),this.Reflash(null)}initShensha(){const t=this.config.shensha;this.shensha=[];for(let i=0;i<this.Gua.ShenShas.length-1;i+=t){const n=[];for(let e=0;e<t;e++){if(e+i>=this.Gua.ShenShas.length-1)continue;const t=i+e===this.Gua.ShenShas.length-2,o=this.Gua.ShenShas[e+i];n.push({txt:`[${o.Name} - ${o.Result.join("")}]`,span:t?2:1,color:""})}this.shensha.push(n)}}calcGuaLine(){const t=['<img src="assets/svg/shaoyin32.svg"></img>','<img src="assets/svg/shaoyan32.svg"></img>','<img src="assets/svg/arrowX.svg"></img>','<img src="assets/svg/arrowO.svg"></img>'];let i=!1;this.gualine=[];for(let e=6;e>0;e--){const n=this.Gua.GetLine(e,this.config.shortname);i="string"==typeof n[1];const o=[];let c=0;const s=i?4:3,a=s+1,h=1;for(let i=0;i<n.length;i++){const e="number"==typeof n[i]?t[n[i]%2]:n[i];if(c="number"==typeof n[i]?n[i]%2:c,""===e)switch(i){case h:case s:case a:o.push({text:"",color:""})}else o.push(">"===e&&i===a?{text:t[0===c?2:3],color:""}:{text:i===h?`<small>${e}</small>`:e,color:""})}this.gualine.push(o)}this.guachi=[],this.guachi.push({txt:this.Gua.Ben.GuaGong,span:2});let n=""!==this.Gua.Ben.Property?`(${this.Gua.Ben.Property})`:"";this.guachi.push({txt:`${this.Gua.Ben.Name}${n}`,span:this.HasBianGua?4:2}),this.Gua.Ben.Index!==this.Gua.Bian.Index?(n=""!==this.Gua.Bian.Property?`(${this.Gua.Bian.Property})`:"",this.guachi.push({txt:`${this.Gua.Bian.Name}${n}`,span:2})):this.guachi.push({txt:"",span:2})}}return t.\u0275fac=function(i){return new(i||t)(h.Wb(o.kb),h.Wb(s.a))},t.\u0275cmp=h.Qb({type:t,selectors:[["app-guaview"]],inputs:{Config:"Config",GuaText:"GuaText"},decls:29,vars:20,consts:[[2,"width","100%"],[4,"ngFor","ngForOf"],["colspan","2"],[3,"colSpan"],[3,"colSpan","click",4,"ngFor","ngForOf"],[3,"colSpan","color",4,"ngFor","ngForOf"],[3,"colSpan","click"],[3,"innerHTML","color","click",4,"ngFor","ngForOf"],[3,"innerHTML","click"]],template:function(t,i){1&t&&(h.Zb(0,"div"),h.Zb(1,"ion-text"),h.xc(2),h.Yb(),h.Xb(3,"br"),h.Zb(4,"ion-text"),h.xc(5),h.Yb(),h.Xb(6,"br"),h.Xb(7,"br"),h.Zb(8,"table",0),h.wc(9,l,2,1,"tr",1),h.Yb(),h.Xb(10,"br"),h.Zb(11,"table",0),h.Zb(12,"tr"),h.Zb(13,"td",2),h.xc(14),h.Yb(),h.Zb(15,"td",3),h.xc(16),h.Yb(),h.Zb(17,"td",2),h.xc(18,"(\u65ec\u7a7a\uff1a "),h.Zb(19,"span"),h.xc(20),h.Yb(),h.Zb(21,"span"),h.xc(22),h.Yb(),h.xc(23,") "),h.Yb(),h.Yb(),h.Xb(24,"br"),h.Zb(25,"tr"),h.wc(26,u,2,2,"td",4),h.Yb(),h.Xb(27,"br"),h.wc(28,f,2,1,"tr",1),h.Yb(),h.Yb()),2&t&&(h.vc("font-size",i.FontSize),h.Mb(2),h.yc(i.Titel),h.Mb(3),h.yc(i.GuaTime),h.Mb(4),h.oc("ngForOf",i.ShenSha),h.Mb(4),h.vc("color",i.ColorRiYue[0]),h.Mb(1),h.zc("",i.Gua.Yue.Name,"\u6708"),h.Mb(1),h.vc("color",i.ColorRiYue[1]),h.oc("colSpan",i.HasBianGua?4:2),h.Mb(1),h.zc("",i.Gua.Ri.Name,"\u65e5"),h.Mb(3),h.vc("color",i.ColorRiYue[2]),h.Mb(1),h.yc(i.Xunkong[0]),h.Mb(1),h.vc("color",i.ColorRiYue[3]),h.Mb(1),h.yc(i.Xunkong[1]),h.Mb(4),h.oc("ngForOf",i.GuaChi),h.Mb(2),h.oc("ngForOf",i.GuaLine))},directives:[o.U,r.i],styles:[".guatb[_ngcontent-%COMP%]{margin-left:2px;margin-right:2px}.guagrid[_ngcontent-%COMP%]{margin-top:5px;margin-left:0;margin-right:0;--ion-grid-width-lg:540px;--ion-grid-width-md:540px;--ion-grid-width-sm:540px;--ion-grid-width-xl:540px;--ion-grid-width-xs:100%}.debug[_ngcontent-%COMP%]{border-color:red;border-style:solid}.guayao[_ngcontent-%COMP%]{margin-top:5px;border-bottom:1px dashed grey}"]}),t})()}}]);