function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,t,i){return t&&_defineProperties(n.prototype,t),i&&_defineProperties(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{HQI1:function(n,t,i){"use strict";i.d(t,"a",(function(){return h}));var e=i("c7TG"),o=i("fXoL"),a=i("ofXK");function c(n,t){if(1&n){var i=o.ac();o.Zb(0,"ion-item",2),o.hc("click",(function(){o.rc(i);var n=t.$implicit;return o.jc(2).onSelect(n.value)})),o.Zb(1,"ion-text"),o.xc(2),o.Yb(),o.Yb()}if(2&n){var e=t.$implicit,a=o.jc(2);o.oc("color",e.value===a.currentOption?"light":""),o.Mb(2),o.yc(e.name)}}function r(n,t){if(1&n&&(o.Zb(0,"div"),o.wc(1,c,3,2,"ion-item",1),o.Yb()),2&n){var i=o.jc();o.Mb(1),o.oc("ngForOf",i.items)}}function s(n,t){if(1&n&&(o.Zb(0,"ion-item",4),o.Zb(1,"ion-note"),o.xc(2),o.Yb(),o.Zb(3,"ion-label",5),o.xc(4),o.Yb(),o.Yb()),2&n){var i=t.$implicit;o.Mb(2),o.yc(i.name),o.Mb(2),o.zc(" ",i.value," ")}}function u(n,t){if(1&n&&(o.Zb(0,"small"),o.wc(1,s,5,2,"ion-item",3),o.Yb()),2&n){var i=o.jc();o.Mb(1),o.oc("ngForOf",i.items)}}var h=function(){var n=function(){function n(t){_classCallCheck(this,n),this.popoverCtrl=t,this.toselect=!0}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"onSelect",value:function(n){this.popoverCtrl.dismiss(n)}}]),n}();return n.\u0275fac=function(t){return new(t||n)(o.Wb(e.fb))},n.\u0275cmp=o.Qb({type:n,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","end",1,"ion-text-wrap"]],template:function(n,t){1&n&&(o.wc(0,r,2,1,"div",0),o.wc(1,u,2,1,"small",0)),2&n&&(o.oc("ngIf",t.toselect),o.Mb(1),o.oc("ngIf",!t.toselect))},directives:[a.j,a.i,e.w,e.T,e.I,e.C],styles:[""]}),n}()},gTpY:function(n,t,i){"use strict";i.d(t,"a",(function(){return Z}));var e=i("mrSG"),o=i("c7TG"),a=i("+cLM"),c=(i("0eVs"),i("FiP+")),r=i("l+bK"),s=i("LTmD"),u=i("HQI1"),h=i("fXoL"),b=i("ofXK");function l(n,t){if(1&n&&(h.Zb(0,"span"),h.xc(1),h.Yb()),2&n){var i=h.jc();h.Mb(1),h.zc("\u771f\u592a\u9633\u65f6\uff1a",i.RealTime,"")}}function f(n,t){if(1&n&&(h.Zb(0,"span"),h.xc(1),h.Yb()),2&n){var i=h.jc().$implicit;h.Mb(1),h.yc(i.text)}}function g(n,t){if(1&n&&(h.Zb(0,"h5"),h.xc(1),h.Yb()),2&n){var i=h.jc().$implicit;h.Mb(1),h.yc(i.text)}}function p(n,t){if(1&n&&(h.Zb(0,"ion-col",11),h.Zb(1,"ion-text",2),h.wc(2,f,2,1,"span",1),h.wc(3,g,2,1,"h5",1),h.Yb(),h.Yb()),2&n){var i=t.$implicit;h.Mb(1),h.vc("color",i.color),h.Mb(1),h.oc("ngIf",!i.bz),h.Mb(1),h.oc("ngIf",i.bz)}}function m(n,t){if(1&n&&(h.Zb(0,"ion-row",11),h.wc(1,p,4,4,"ion-col",3),h.Yb()),2&n){var i=t.$implicit;h.Mb(1),h.oc("ngForOf",i)}}function d(n,t){if(1&n&&(h.Zb(0,"ion-col",12),h.Zb(1,"ion-text",12),h.xc(2),h.Yb(),h.Yb()),2&n){var i=t.$implicit;h.Mb(2),h.yc(i)}}function v(n,t){if(1&n&&(h.Zb(0,"ion-row",12),h.wc(1,d,3,1,"ion-col",8),h.Yb()),2&n){var i=t.$implicit;h.Mb(1),h.oc("ngForOf",i)}}function x(n,t){if(1&n){var i=h.ac();h.Zb(0,"ion-item",13),h.hc("click",(function(n){h.rc(i);var e=t.index,o=t.$implicit,a=h.jc();return a.SelectedDY=e,a.ShowDetail(o,n)})),h.Zb(1,"ion-note",14),h.xc(2),h.Yb(),h.Zb(3,"ion-label",15),h.Zb(4,"ion-text",16),h.xc(5),h.Yb(),h.Zb(6,"ion-text",17),h.xc(7),h.Yb(),h.Zb(8,"ion-text",16),h.xc(9),h.Yb(),h.Yb(),h.Yb()}if(2&n){var e=t.$implicit,o=t.index,a=h.jc();h.Mb(2),h.yc(e[0]),h.Mb(3),h.zc("",e[1]," "),h.Mb(1),h.oc("color",a.SelectedDY==o?"primary":"dark"),h.Mb(1),h.yc(e[2]),h.Mb(2),h.zc(" ",e[3],"")}}function S(n,t){if(1&n){var i=h.ac();h.Zb(0,"ion-item",13),h.hc("click",(function(n){h.rc(i);var e=t.index,o=t.$implicit,a=h.jc();return a.SelectedLiu=e,a.ShowDetail(o,n)})),h.Zb(1,"ion-note",14),h.xc(2),h.Yb(),h.Zb(3,"ion-label",15),h.Zb(4,"ion-text",16),h.xc(5),h.Yb(),h.Zb(6,"ion-text",17),h.xc(7),h.Yb(),h.Zb(8,"ion-text",16),h.xc(9),h.Yb(),h.Yb(),h.Yb()}if(2&n){var e=t.$implicit,o=t.index,a=h.jc();h.Mb(2),h.yc(e[0]),h.Mb(3),h.zc("",e[1]," "),h.Mb(1),h.oc("color",a.SelectedLiu==o?"primary":"dark"),h.Mb(1),h.yc(e[2]),h.Mb(2),h.zc(" ",e[3],"")}}function y(n,t){if(1&n){var i=h.ac();h.Zb(0,"ion-item",13),h.hc("click",(function(n){h.rc(i);var e=t.index,o=t.$implicit,a=h.jc();return a.SelectedXiao=e,a.ShowDetail(o,n)})),h.Zb(1,"ion-note",14),h.xc(2),h.Yb(),h.Zb(3,"ion-label",15),h.Zb(4,"ion-text",16),h.xc(5),h.Yb(),h.Zb(6,"ion-text",17),h.xc(7),h.Yb(),h.Zb(8,"ion-text",16),h.xc(9),h.Yb(),h.Yb(),h.Yb()}if(2&n){var e=t.$implicit,o=t.index,a=h.jc();h.Mb(2),h.yc(e[0]),h.Mb(3),h.zc("",e[1]," "),h.Mb(1),h.oc("color",a.SelectedXiao==o?"primary":"dark"),h.Mb(1),h.yc(e[2]),h.Mb(2),h.zc(" ",e[3],"")}}var Z=function(){var n=function(){function n(t,i){_classCallCheck(this,n),this.toastController=t,this.popoverCtrl=i,this.ShowShenSha=!1,this.ShowDayun=!1,this.ShowLiunian=!1,this.ShowXiaoyun=!1,this.selectedDayun=0,this.SelectedLiu=0,this.SelectedXiao=0}return _createClass(n,[{key:"ngOnInit",value:function(){this.initBaseInfo(),this.Reflash(null)}},{key:"Reflash",value:function(n){n&&(this.config=Object(s.b)(n)),this.initYuanju(""===this.RealTime?this.Birthday:this.RealTime),this.initShenShas(),this.SelectedDY=0,this.initDayuns()}},{key:"ChangeDayun",value:function(n){return Object(e.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i,e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.SelectedDY=n,i=this.bazi.DaYun[n-1].Start.toChinaStr(),e=this.bazi.DaYun[n-1].GZ.Name,t.next=5,this.toastController.create({message:"\u5927\u8fd0".concat(e," \u5f00\u59cb\u4e8e ").concat(i),duration:3e3});case 5:return o=t.sent,t.next=8,o.present();case 8:case"end":return t.stop()}}),t,this)})))}},{key:"ShowDetail",value:function(n,t){return Object(e.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.popoverCtrl.create({component:u.a,event:t,componentProps:{items:[{name:"\u85cf\u5e72",value:n[4]},{name:"\u7eb3\u97f3",value:n[5]},{name:"\u957f\u751f\u5bab",value:n[6]},{name:"\u795e\u715e",value:n[7]}],toselect:!1},translucent:!0});case 2:return e=i.sent,i.next=5,e.present();case 5:return i.next=7,e.onDidDismiss();case 7:case"end":return i.stop()}}),i,this)})))}},{key:"initBaseInfo",value:function(){var n,t=this.baziText.place,i=c.a.FindCity(t[0],t[1]);this.Place=i?"".concat(t[0],"\u7701/\u5e02 ").concat(t[1],"\u5e02/\u53bf/\u533a"):"\u672a\u77e5",this.Gender=this.baziText.male?"\u4e7e":"\u5764",this.Person="".concat(this.baziText.person," (").concat(this.Gender,"\u9020)");var e=this.baziText.time.parseDate();this.Birthday=e.toChinaStr(!0);var o=new r.a(e);if(this.BirthdayN="".concat(o.GZyear,"\u5e74").concat(o.NLleap?"(\u95f0)":"").concat(o.NLmonth,"\u6708").concat(o.NLdate),this.baziText.realsuntime){var a=i?c.a.CalcTimeOff(i.Code):null;n=new Date(e.getTime()+6e4*a),this.RealTime=n.toChinaStr(!0)}else this.RealTime=""}},{key:"initYuanju",value:function(n){var t=[],i=n.parseDate();this.bazi=new a.a(i,this.baziText.male?"m":"f");var e=this.config.shortname?1:0;if(t.push(this.bazi.All.select((function(n){return{text:n.Shen10Gan[e],color:"gray",bz:!1}}))),t.push(this.bazi.All.select((function(n){return{text:n.Gan.Name,color:"darkblue",bz:!0}}))),t.push(this.bazi.All.select((function(n){return{text:n.Zhi.Name,color:"darkblue",bz:!0}}))),t.push(this.bazi.All.select((function(n){return{text:n.Shen10Zhi[e],color:"gray",bz:!1}}))),t[0].insert(0,{text:this.Gender,color:"",bz:!1}),t[1].insert(0,{text:"\u9020",color:"",bz:!1}),t[2].insert(0,{text:"",color:"",bz:!1}),t[3].insert(0,{text:"",color:"",bz:!1}),this.config.yuanju.cangan){var o=this.bazi.All.select((function(n){return{text:n.Zhi.CGan.map((function(n){return n.Name})).join(""),color:""}}));o.insert(0,{text:"\u85cf\u5e72",color:"gray"}),t.push(o)}if(this.config.yuanju.nayin){var c=this.bazi.All.select((function(n){return{text:n.NaYin,color:""}}));c.insert(0,{text:"\u7eb3\u97f3",color:"gray"}),t.push(c)}if(this.config.yuanju.changshen){var r=this.bazi.All.select((function(n){return{text:n.ChangSheng,color:""}}));r.insert(0,{text:"\u957f\u751f",color:"gray"}),t.push(r)}this.yuanju=t}},{key:"initShenShas",value:function(){for(var n=[],t=this.bazi.ShenSha.length,i=0;i<t;i++)n.push("[".concat(this.bazi.ShenSha[i].Name," - ").concat(this.bazi.ShenSha[i].Result.join(""),"]"));var e=this.config.shensha;this.ShenShas=[];for(var o=0;o<=t;o+=e){var a=n.slice(o,o+e>t?t:o+e);this.ShenShas.push(a)}var c=e-this.ShenShas[this.ShenShas.length-1].length;if(c>0)for(var r=0;r<c;r++)this.ShenShas[this.ShenShas.length-1].push("");this.ShenShaHead="[\u547d\u5bab - ".concat(this.bazi.MingGong.Name,"] [\u80ce\u5143 - ").concat(this.bazi.TaiYuan.Name,"]")}},{key:"initDayuns",value:function(){var n=this,t=this.config.shortname?1:0,i=[];this.bazi.DaYun.forEach((function(e){var o=[];o.push("".concat(e.Start.toChinaStr())),o.push(e.GZ.Shen10Gan[t]),o.push(e.GZ.Name),o.push(e.GZ.Shen10Zhi[t]),o.push(e.GZ.Zhi.CGan.map((function(n){return n.Name})).join("")),o.push(e.GZ.NaYin),o.push(e.GZ.ChangSheng),o.push(n.bazi.CalcShenSha(e.GZ)),i.push(o)})),i[0][3]=i[0][3]+" (\u8d77\u8fd0\u524d)",this.Dayuns=i,this.SelectedDY=0}},{key:"calcXiaoyun",value:function(n,t){var i=this,e=this.config.shortname?1:0,o=[],a=[],c=this.bazi.Birthday.toChinaStr();c=c.replace(this.bazi.Birthday.getFullYear().toString(),"##"),this.bazi.CalcLiuNian(n,t).forEach((function(n){var t=[],c=[];t.push("".concat(n.Start.toChinaStr())),c.push("".concat(n.Start.getFullYear(),"\u5e74").concat(i.bazi.Birthday.getMonth()+1,"\u6708").concat(i.bazi.Birthday.getDate()+1,"\u65e5")),t.push(n.GZ.Shen10Gan[e]),t.push(n.GZ.Name),t.push(n.GZ.Shen10Zhi[e]),c.push(n.GZ2.Shen10Gan[e]),c.push(n.GZ2.Name),c.push(n.GZ2.Shen10Zhi[e]),o.push(t),a.push(c),t.push(n.GZ.Zhi.CGan.map((function(n){return n.Name})).join("")),c.push(n.GZ2.Zhi.CGan.map((function(n){return n.Name})).join("")),t.push(n.GZ.NaYin),c.push(n.GZ2.NaYin),t.push(n.GZ.ChangSheng),c.push(n.GZ2.ChangSheng),t.push(i.bazi.CalcShenSha(n.GZ)),c.push(i.bazi.CalcShenSha(n.GZ2))})),this.Liunian=o,this.Xiaoyun=a}},{key:"Config",set:function(n){this.config=Object(s.b)(n)}},{key:"FontSize",get:function(){return"".concat(this.config.fontsize,"px")}},{key:"YuanJu",get:function(){return this.yuanju}},{key:"DayunName",get:function(){return this.dayunname}},{key:"SelectedDY",get:function(){return this.selectedDayun},set:function(n){this.selectedDayun=n;var t=this.bazi.DaYun[n],i=t.Start.getFullYear();this.calcXiaoyun(i,t.End.getFullYear()),this.dayunname="\u5927\u8fd0 - ".concat(t.GZ.Name)}},{key:"BaziText",set:function(n){this.baziText=n}},{key:"BaziInText",get:function(){return"".concat(this.bazi.Y.Name," / ").concat(this.bazi.M.Name," / ").concat(this.bazi.D.Name," / ").concat(this.bazi.T.Name," ")}}]),n}();return n.\u0275fac=function(t){return new(t||n)(h.Wb(o.jb),h.Wb(o.fb))},n.\u0275cmp=h.Qb({type:n,selectors:[["app-baziview"]],inputs:{Config:"Config",BaziText:"BaziText"},decls:58,vars:44,consts:[["lines","none"],[4,"ngIf"],[1,"bzgrid"],["class","ion-no-padding bzgrid",4,"ngFor","ngForOf"],[2,"margin-left","10px"],["size","small","fill","clear","slot","end",3,"click"],[3,"name"],[1,"ion-no-padding",3,"hidden"],["class","ion-no-padding",4,"ngFor","ngForOf"],[3,"hidden"],[3,"click",4,"ngFor","ngForOf"],[1,"ion-no-padding","bzgrid"],[1,"ion-no-padding"],[3,"click"],[1,"ion-margin"],["slot","end"],["color","medium"],[3,"color"]],template:function(n,t){1&n&&(h.Zb(0,"div"),h.Zb(1,"ion-item",0),h.Zb(2,"section"),h.Zb(3,"span"),h.xc(4),h.Yb(),h.Xb(5,"br"),h.Zb(6,"span"),h.xc(7),h.Yb(),h.Xb(8,"br"),h.Zb(9,"span"),h.xc(10),h.Yb(),h.Xb(11,"br"),h.Zb(12,"span"),h.xc(13),h.Yb(),h.Xb(14,"br"),h.wc(15,l,2,1,"span",1),h.Xb(16,"br"),h.Yb(),h.Yb(),h.Zb(17,"ion-item",0),h.Zb(18,"ion-grid",2),h.wc(19,m,2,1,"ion-row",3),h.Yb(),h.Yb(),h.Zb(20,"section"),h.Zb(21,"ion-item"),h.Zb(22,"ion-label"),h.xc(23,"\u795e\u715e"),h.Yb(),h.Zb(24,"ion-text",4),h.Zb(25,"small"),h.xc(26),h.Yb(),h.Yb(),h.Zb(27,"ion-button",5),h.hc("click",(function(){return t.ShowShenSha=!t.ShowShenSha})),h.Xb(28,"ion-icon",6),h.Yb(),h.Yb(),h.Zb(29,"ion-grid",7),h.wc(30,v,2,1,"ion-row",8),h.Yb(),h.Yb(),h.Zb(31,"section"),h.Zb(32,"ion-item"),h.Zb(33,"ion-label"),h.Zb(34,"ion-text",9),h.xc(35,"\u5927\u8fd0\uff1a"),h.Yb(),h.Zb(36,"ion-text",9),h.xc(37),h.Yb(),h.Yb(),h.Zb(38,"ion-button",5),h.hc("click",(function(){return t.ShowDayun=!t.ShowDayun})),h.Xb(39,"ion-icon",6),h.Yb(),h.Yb(),h.Zb(40,"ion-list",9),h.wc(41,x,10,5,"ion-item",10),h.Yb(),h.Yb(),h.Zb(42,"section"),h.Zb(43,"ion-item"),h.Zb(44,"ion-label"),h.xc(45,"\u6d41\u5e74"),h.Yb(),h.Zb(46,"ion-button",5),h.hc("click",(function(){return t.ShowLiunian=!t.ShowLiunian})),h.Xb(47,"ion-icon",6),h.Yb(),h.Yb(),h.Zb(48,"ion-list",9),h.wc(49,S,10,5,"ion-item",10),h.Yb(),h.Yb(),h.Zb(50,"section"),h.Zb(51,"ion-item"),h.Zb(52,"ion-label"),h.xc(53,"\u5c0f\u8fd0"),h.Yb(),h.Zb(54,"ion-button",5),h.hc("click",(function(){return t.ShowXiaoyun=!t.ShowXiaoyun})),h.Xb(55,"ion-icon",6),h.Yb(),h.Yb(),h.Zb(56,"ion-list",9),h.wc(57,y,10,5,"ion-item",10),h.Yb(),h.Yb(),h.Yb()),2&n&&(h.vc("font-size",t.FontSize),h.Mb(2),h.vc("font-size",t.FontSize),h.Mb(2),h.zc("\u547d\u4e3b\uff1a",t.Person,""),h.Mb(3),h.zc("\u751f\u65e5\uff1a",t.Birthday,""),h.Mb(3),h.zc("\u519c\u5386\uff1a",t.BirthdayN,""),h.Mb(3),h.zc("\u51fa\u751f\u5730\uff1a",t.Place,""),h.Mb(2),h.oc("ngIf",""!=t.RealTime),h.Mb(3),h.vc("font-size",t.FontSize),h.Mb(1),h.oc("ngForOf",t.YuanJu),h.Mb(1),h.vc("font-size",t.FontSize),h.Mb(2),h.vc("font-size",t.FontSize),h.Mb(4),h.yc(t.ShenShaHead),h.Mb(2),h.oc("name",t.ShowShenSha?"ios-arrow-up":"ios-arrow-down"),h.Mb(1),h.oc("hidden",!t.ShowShenSha),h.Mb(1),h.oc("ngForOf",t.ShenShas),h.Mb(1),h.vc("font-size",t.FontSize),h.Mb(2),h.vc("font-size",t.FontSize),h.Mb(1),h.oc("hidden",!t.ShowDayun),h.Mb(2),h.oc("hidden",t.ShowDayun),h.Mb(1),h.yc(t.DayunName),h.Mb(2),h.oc("name",t.ShowDayun?"ios-arrow-up":"ios-arrow-down"),h.Mb(1),h.oc("hidden",!t.ShowDayun),h.Mb(1),h.oc("ngForOf",t.Dayuns),h.Mb(1),h.vc("font-size",t.FontSize),h.Mb(2),h.vc("font-size",t.FontSize),h.Mb(3),h.oc("name",t.ShowLiunian?"ios-arrow-up":"ios-arrow-down"),h.Mb(1),h.oc("hidden",!t.ShowLiunian),h.Mb(1),h.oc("ngForOf",t.Liunian),h.Mb(1),h.vc("font-size",t.FontSize),h.Mb(2),h.vc("font-size",t.FontSize),h.Mb(3),h.oc("name",t.ShowXiaoyun?"ios-arrow-up":"ios-arrow-down"),h.Mb(1),h.oc("hidden",!t.ShowXiaoyun),h.Mb(1),h.oc("ngForOf",t.Xiaoyun))},directives:[o.w,b.j,o.r,b.i,o.C,o.T,o.j,o.t,o.D,o.L,o.n,o.I],styles:[".bzgrid[_ngcontent-%COMP%]{padding:0}.selected[_ngcontent-%COMP%]{background-color:#faebd7}"]}),n}()},n7QD:function(n,t,i){"use strict";i.d(t,"a",(function(){return r}));var e=i("ofXK"),o=i("3Pt+"),a=i("c7TG"),c=(i("ylIl"),i("fXoL")),r=function(){var n=function n(){_classCallCheck(this,n)};return n.\u0275mod=c.Ub({type:n}),n.\u0275inj=c.Tb({factory:function(t){return new(t||n)},imports:[[e.b,o.a,a.Z]]}),n}()},uEAi:function(n,t,i){"use strict";i.d(t,"a",(function(){return r}));var e=i("ofXK"),o=i("3Pt+"),a=i("c7TG"),c=(i("gTpY"),i("fXoL")),r=function(){var n=function n(){_classCallCheck(this,n)};return n.\u0275mod=c.Ub({type:n}),n.\u0275inj=c.Tb({factory:function(t){return new(t||n)},imports:[[e.b,o.a,a.Z]]}),n}()},ylIl:function(n,t,i){"use strict";i.d(t,"a",(function(){return p}));var e=i("mrSG"),o=i("c7TG"),a=(i("0eVs"),i("pNW8")),c=i("LTmD"),r=i("2QJI"),s=i("fXoL"),u=i("ofXK");function h(n,t){if(1&n&&(s.Zb(0,"td",3),s.xc(1),s.Yb()),2&n){var i=t.$implicit;s.vc("color",i.color),s.oc("colSpan",i.span),s.Mb(1),s.yc(i.txt)}}function b(n,t){if(1&n&&(s.Zb(0,"tr"),s.wc(1,h,2,4,"td",5),s.Yb()),2&n){var i=t.$implicit;s.Mb(1),s.oc("ngForOf",i)}}function l(n,t){if(1&n){var i=s.ac();s.Zb(0,"td",6),s.hc("click",(function(){return s.rc(i),s.jc().calcColor(null)})),s.xc(1),s.Yb()}if(2&n){var e=t.$implicit;s.oc("colSpan",e.span),s.Mb(1),s.yc(e.txt)}}function f(n,t){if(1&n){var i=s.ac();s.Zb(0,"td",8),s.hc("click",(function(){s.rc(i);var n=t.index,e=s.jc().index;return s.jc().tostNayin(e,n)})),s.Yb()}if(2&n){var e=t.$implicit;s.vc("color",e.color),s.oc("innerHTML",e.text,s.sc)}}function g(n,t){if(1&n&&(s.Zb(0,"tr"),s.wc(1,f,1,3,"td",7),s.Yb()),2&n){var i=t.$implicit;s.Mb(1),s.oc("ngForOf",i)}}var p=function(){var n=function(){function n(t,i){_classCallCheck(this,n),this.toastController=t,this.settings=i,this.ColorRiYue=["","","",""],this.YaoSymbols=[{svg:"assets/shaoyin.svg",name:"\u5c11\u9634"},{svg:"assets/shaoyan.svg",name:"\u5c11\u9633"},{svg:"assets/laoyin.svg",name:"\u8001\u9634"},{svg:"assets/laoyan.svg",name:"\u8001\u9633"}]}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"Reflash",value:function(n){n&&(this.config=Object(c.b)(n)),this.initShensha(),this.calcGuaLine()}},{key:"tostNayin",value:function(n,t){return Object(e.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var e,o,a,c;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e=5-n,o=t<=4?1:2,o=t<=1?0:o,a=this.Gua.Ben.GanZhis[e],0===o?a=this.Gua.FuGua.GanZhis[e]:2===o&&(a=this.Gua.Bian.GanZhis[e]),i.next=7,this.toastController.create({message:"".concat(a.Name," - ").concat(a.NaYin),duration:3e3});case 7:return c=i.sent,i.next=10,c.present();case 10:this.calcColor(a.Zhi.Index);case 11:case"end":return i.stop()}}),i,this)})))}},{key:"calcColor",value:function(n){var t=null===n,i=t?"XX":new r.b(n).Zhi.Name,e=t?"XX":new r.b((n+6)%12).Zhi.Name,o=t?"XX":new r.b((13-n)%12).Zhi.Name;this.ShenSha.forEach((function(n){n.forEach((function(n){n.color=n.txt.includes(i)?"#4854e0":n.txt.includes(e)?"#cf3c4f":n.txt.includes(o)?"#28ba62":""}))})),this.gualine.forEach((function(n){n.forEach((function(n){n.color=n.text.includes(i)?"#4854e0":n.text.includes(e)?"#cf3c4f":n.text.includes(o)?"#28ba62":""}))}));for(var a=[this.Gua.Yue.Name,this.Gua.Ri.Name,this.Xunkong[0],this.Xunkong[1]],c=0;c<4;c++)this.ColorRiYue[c]=a[c].includes(i)?"#4854e0":a[c].includes(e)?"#cf3c4f":a[c].includes(o)?"#28ba62":""}},{key:"initGua",value:function(){this.Titel="\u95ee\u5ff5\uff1a"+this.guaText.question,this.Gua=new a.a(this.guaText.time,this.guaText.ben,this.guaText.bian),this.GuaTime="\u8d77\u5366\u65f6\u95f4\uff1a"+("string"==typeof this.guaText.time?this.guaText.time:"".concat(this.guaText.time[0],"\u6708").concat(this.guaText[1],"\u65e5")).replace("00:00:00",""),this.Reflash(null)}},{key:"initShensha",value:function(){var n=this.config.shensha;this.shensha=[];for(var t=0;t<this.Gua.ShenShas.length-1;t+=n){for(var i=[],e=0;e<n;e++)if(!(e+t>=this.Gua.ShenShas.length-1)){var o=t+e===this.Gua.ShenShas.length-2,a=this.Gua.ShenShas[e+t];i.push({txt:"[".concat(a.Name," - ").concat(a.Result.join(""),"]"),span:o?2:1,color:""})}this.shensha.push(i)}}},{key:"calcGuaLine",value:function(){var n=['<img src="assets/svg/shaoyin32.svg"></img>','<img src="assets/svg/shaoyan32.svg"></img>','<img src="assets/svg/arrowX.svg"></img>','<img src="assets/svg/arrowO.svg"></img>'];this.gualine=[];for(var t=6;t>0;t--){for(var i=this.Gua.GetLine(t,this.config.shortname),e=[],o=0,a="string"==typeof i[1]?4:3,c=a+1,r=0;r<i.length;r++){var s="number"==typeof i[r]?n[i[r]%2]:i[r];if(o="number"==typeof i[r]?i[r]%2:o,""===s)switch(r){case 1:case a:case c:e.push({text:"",color:""})}else e.push(">"===s&&r===c?{text:n[0===o?2:3],color:""}:{text:1===r?"<small>".concat(s,"</small>"):s,color:""})}this.gualine.push(e)}this.guachi=[],this.guachi.push({txt:this.Gua.Ben.GuaGong,span:2});var u=""!==this.Gua.Ben.Property?"(".concat(this.Gua.Ben.Property,")"):"";this.guachi.push({txt:"".concat(this.Gua.Ben.Name).concat(u),span:this.HasBianGua?4:2}),this.Gua.Ben.Index!==this.Gua.Bian.Index?(u=""!==this.Gua.Bian.Property?"(".concat(this.Gua.Bian.Property,")"):"",this.guachi.push({txt:"".concat(this.Gua.Bian.Name).concat(u),span:2})):this.guachi.push({txt:"",span:2})}},{key:"Config",set:function(n){this.config=Object(c.b)(n)}},{key:"FontSize",get:function(){return"".concat(this.config.fontsize,"px")}},{key:"GuaText",get:function(){return this.guaText},set:function(n){this.guaText=n,this.initGua()}},{key:"ShenSha",get:function(){return this.shensha}},{key:"Xunkong",get:function(){return this.Gua.ShenShas[this.Gua.ShenShas.length-1].Result}},{key:"GuaLine",get:function(){return this.gualine}},{key:"GuaChi",get:function(){return this.guachi}},{key:"GuaInText",get:function(){return this.Gua.Ben.Index===this.Gua.Bian.Index?this.Gua.Ben.Name:"".concat(this.Gua.Ben.NameS,"\u4e4b").concat(this.Gua.Bian.NameS)}},{key:"HasBianGua",get:function(){return this.Gua.Ben.Index!==this.Gua.Bian.Index}}]),n}();return n.\u0275fac=function(t){return new(t||n)(s.Wb(o.jb),s.Wb(c.a))},n.\u0275cmp=s.Qb({type:n,selectors:[["app-guaview"]],inputs:{Config:"Config",GuaText:"GuaText"},decls:29,vars:20,consts:[[2,"width","100%"],[4,"ngFor","ngForOf"],["colspan","2"],[3,"colSpan"],[3,"colSpan","click",4,"ngFor","ngForOf"],[3,"colSpan","color",4,"ngFor","ngForOf"],[3,"colSpan","click"],[3,"innerHTML","color","click",4,"ngFor","ngForOf"],[3,"innerHTML","click"]],template:function(n,t){1&n&&(s.Zb(0,"div"),s.Zb(1,"ion-text"),s.xc(2),s.Yb(),s.Xb(3,"br"),s.Zb(4,"ion-text"),s.xc(5),s.Yb(),s.Xb(6,"br"),s.Xb(7,"br"),s.Zb(8,"table",0),s.wc(9,b,2,1,"tr",1),s.Yb(),s.Xb(10,"br"),s.Zb(11,"table",0),s.Zb(12,"tr"),s.Zb(13,"td",2),s.xc(14),s.Yb(),s.Zb(15,"td",3),s.xc(16),s.Yb(),s.Zb(17,"td",2),s.xc(18,"(\u65ec\u7a7a\uff1a "),s.Zb(19,"span"),s.xc(20),s.Yb(),s.Zb(21,"span"),s.xc(22),s.Yb(),s.xc(23,") "),s.Yb(),s.Yb(),s.Xb(24,"br"),s.Zb(25,"tr"),s.wc(26,l,2,2,"td",4),s.Yb(),s.Xb(27,"br"),s.wc(28,g,2,1,"tr",1),s.Yb(),s.Yb()),2&n&&(s.vc("font-size",t.FontSize),s.Mb(2),s.yc(t.Titel),s.Mb(3),s.yc(t.GuaTime),s.Mb(4),s.oc("ngForOf",t.ShenSha),s.Mb(4),s.vc("color",t.ColorRiYue[0]),s.Mb(1),s.zc("",t.Gua.Yue.Name,"\u6708"),s.Mb(1),s.vc("color",t.ColorRiYue[1]),s.oc("colSpan",t.HasBianGua?4:2),s.Mb(1),s.zc("",t.Gua.Ri.Name,"\u65e5"),s.Mb(3),s.vc("color",t.ColorRiYue[2]),s.Mb(1),s.yc(t.Xunkong[0]),s.Mb(1),s.vc("color",t.ColorRiYue[3]),s.Mb(1),s.yc(t.Xunkong[1]),s.Mb(4),s.oc("ngForOf",t.GuaChi),s.Mb(2),s.oc("ngForOf",t.GuaLine))},directives:[o.T,u.i],styles:[".guatb[_ngcontent-%COMP%]{margin-left:2px;margin-right:2px}.guagrid[_ngcontent-%COMP%]{margin-top:5px;margin-left:0;margin-right:0;--ion-grid-width-lg:540px;--ion-grid-width-md:540px;--ion-grid-width-sm:540px;--ion-grid-width-xl:540px;--ion-grid-width-xs:100%}.debug[_ngcontent-%COMP%]{border-color:red;border-style:solid}.guayao[_ngcontent-%COMP%]{margin-top:5px;border-bottom:1px dashed grey}"]}),n}()}}]);