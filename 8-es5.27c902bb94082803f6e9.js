function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{HQI1:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var i=e("c7TG"),c=e("fXoL"),a=e("ofXK");function s(t,n){if(1&t){var e=c.fc();c.ec(0,"ion-item",3),c.mc("click",(function(){c.Ac(e);var t=n.$implicit;return c.pc(2).onSelect(t.value)})),c.ec(1,"ion-text"),c.Hc(2),c.dc(),c.dc()}if(2&t){var i=n.$implicit,a=c.pc(2);c.uc("color",i.value===a.currentOption?"light":""),c.Nb(2),c.Ic(i.name)}}function o(t,n){if(1&t&&(c.ec(0,"div"),c.Fc(1,s,3,2,"ion-item",2),c.dc()),2&t){var e=c.pc();c.Nb(1),c.uc("ngForOf",e.items)}}function r(t,n){if(1&t&&(c.ec(0,"ion-note"),c.ec(1,"small"),c.Hc(2),c.dc(),c.dc()),2&t){var e=c.pc().$implicit;c.Nb(2),c.Ic(e.name)}}function u(t,n){if(1&t&&(c.ec(0,"ion-item",6),c.Fc(1,r,3,1,"ion-note",0),c.ec(2,"ion-label",7),c.ec(3,"small"),c.ac(4,"ion-text",8),c.dc(),c.dc(),c.dc()),2&t){var e=n.$implicit;c.Nb(1),c.uc("ngIf",e.name),c.Nb(3),c.uc("innerHtml",e.value,c.Bc)}}function l(t,n){if(1&t&&(c.ec(0,"ion-list",4),c.Fc(1,u,5,2,"ion-item",5),c.dc()),2&t){var e=c.pc();c.Nb(1),c.uc("ngForOf",e.items)}}var h=function(){var t=function(){function t(n){_classCallCheck(this,t),this.popoverCtrl=n,this.toselect=!0}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onSelect",value:function(t){this.popoverCtrl.dismiss(t)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.Zb(i.ib))},t.\u0275cmp=c.Tb({type:t,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["class","ion-no-padding",4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],[1,"ion-no-padding"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","end",1,"ion-text-wrap"],[3,"innerHtml"]],template:function(t,n){1&t&&(c.Fc(0,o,2,1,"div",0),c.Fc(1,l,2,1,"ion-list",1)),2&t&&(c.uc("ngIf",n.toselect),c.Nb(1),c.uc("ngIf",!n.toselect))},directives:[a.j,a.i,i.x,i.W,i.E,i.D,i.J],styles:[""]}),t}()},gTpY:function(t,n,e){"use strict";e.d(n,"a",(function(){return C}));var i=e("mrSG"),c=e("c7TG"),a=e("+cLM"),s=(e("0eVs"),e("FiP+")),o=e("l+bK"),r=e("LTmD"),u=e("HQI1"),l=e("fXoL"),h=e("i/bi"),d=e("ofXK");function g(t,n){if(1&t&&(l.ec(0,"span"),l.Hc(1),l.dc()),2&t){var e=l.pc();l.Nb(1),l.Jc("\u771f\u592a\u9633\u65f6\uff1a",e.RealTime,"")}}function f(t,n){if(1&t&&(l.ec(0,"span"),l.Hc(1),l.dc()),2&t){var e=l.pc().$implicit;l.Nb(1),l.Ic(e.text)}}function p(t,n){if(1&t&&(l.ec(0,"span",20),l.Hc(1),l.dc()),2&t){var e=l.pc().$implicit;l.Nb(1),l.Ic(e.text)}}function b(t,n){if(1&t&&(l.ec(0,"ion-col",18),l.ec(1,"ion-text",9),l.Fc(2,f,2,1,"span",7),l.Fc(3,p,2,1,"span",19),l.dc(),l.dc()),2&t){var e=n.$implicit;l.Nb(1),l.Ec("color",e.color),l.Nb(1),l.uc("ngIf",!e.bz),l.Nb(1),l.uc("ngIf",e.bz)}}function m(t,n){if(1&t&&(l.ec(0,"ion-row",18),l.Fc(1,b,4,4,"ion-col",10),l.dc()),2&t){var e=n.$implicit;l.Nb(1),l.uc("ngForOf",e)}}function v(t,n){if(1&t&&(l.ec(0,"td"),l.Hc(1),l.dc()),2&t){var e=n.$implicit;l.Nb(1),l.Ic(e)}}function N(t,n){if(1&t&&(l.ec(0,"tr"),l.Fc(1,v,2,1,"td",12),l.dc()),2&t){var e=n.$implicit;l.Nb(1),l.uc("ngForOf",e)}}function y(t,n){if(1&t){var e=l.fc();l.ec(0,"div",21),l.ec(1,"div",22),l.Hc(2),l.dc(),l.ec(3,"div",23),l.mc("click",(function(){l.Ac(e);var t=n.index;return l.pc().SelectedDY=t})),l.ec(4,"div",24),l.Hc(5),l.dc(),l.ec(6,"div",25),l.Hc(7),l.dc(),l.dc(),l.ec(8,"div",22),l.Hc(9),l.dc(),l.ec(10,"div"),l.Hc(11),l.dc(),l.dc()}if(2&t){var i=n.$implicit,c=n.index,a=l.pc();l.Nb(2),l.Ic(i[1]),l.Nb(1),l.Ec("background-color",a.SelectedDY===c?"skyblue":"white"),l.Nb(2),l.Ic(i[2][0]),l.Nb(2),l.Ic(i[2][1]),l.Nb(2),l.Ic(i[3]),l.Nb(2),l.Ic(i[8])}}function S(t,n){if(1&t){var e=l.fc();l.ec(0,"tr"),l.ec(1,"td"),l.Hc(2),l.dc(),l.ec(3,"td"),l.Hc(4),l.dc(),l.ec(5,"td",23),l.mc("click",(function(t){l.Ac(e);var i=n.$implicit;return l.pc(2).ShowDetail(i,t)})),l.ec(6,"span",22),l.Hc(7),l.dc(),l.ec(8,"span",27),l.Hc(9),l.dc(),l.ec(10,"span",22),l.Hc(11),l.dc(),l.dc(),l.ec(12,"td",23),l.mc("click",(function(t){l.Ac(e);var i=n.$implicit;return l.pc(2).ShowDetail(i,t)})),l.ec(13,"span",22),l.Hc(14),l.dc(),l.ec(15,"span",27),l.Hc(16),l.dc(),l.ec(17,"span",22),l.Hc(18),l.dc(),l.dc(),l.dc()}if(2&t){var i=n.$implicit,c=n.index,a=l.pc().$implicit;l.Nb(2),l.Ic(i[0]),l.Nb(2),l.Ic(i[8]),l.Nb(3),l.Jc("(",i[1],")"),l.Nb(2),l.Ic(i[2]),l.Nb(2),l.Jc("(",i[3],")"),l.Nb(3),l.Jc("(",a.xiao[c][1],")"),l.Nb(2),l.Ic(a.xiao[c][2]),l.Nb(2),l.Jc("(",a.xiao[c][3],")")}}function x(t,n){if(1&t&&(l.ec(0,"sui-accordion",2),l.ec(1,"sui-accordion-panel",3),l.ec(2,"div",4),l.ac(3,"i",5),l.Hc(4),l.dc(),l.ec(5,"div",6),l.ec(6,"table",26),l.ec(7,"thead"),l.ec(8,"tr"),l.ec(9,"th"),l.Hc(10,"\u5e74\u4efd"),l.dc(),l.ec(11,"th"),l.Hc(12,"\u5c81\u6570"),l.dc(),l.ec(13,"th"),l.Hc(14,"\u6d41\u5e74"),l.dc(),l.ec(15,"th"),l.Hc(16,"\u5c0f\u8fd0"),l.dc(),l.dc(),l.dc(),l.ec(17,"tbody"),l.Fc(18,S,19,8,"tr",12),l.dc(),l.dc(),l.dc(),l.dc(),l.dc()),2&t){var e=n.$implicit;l.uc("closeOthers",!0),l.Nb(1),l.uc("isOpen",!1),l.Nb(3),l.Jc(" ",e.name," "),l.Nb(14),l.uc("ngForOf",e.liu)}}var C=function(){var t=function(){function t(n,e){_classCallCheck(this,t),this.toastController=n,this.popoverCtrl=e,this.ShowDayun=!1,this.ShowLiunian=!1,this.ShowXiaoyun=!1,this.selectedDayun=0,this.SelectedLiu=0,this.SelectedXiao=0,this.AllLiuNian=[]}return _createClass(t,[{key:"ngOnInit",value:function(){this.initBaseInfo(),this.Reflash(null)}},{key:"Reflash",value:function(t){t&&(this.config=Object(r.b)(t)),this.initYuanju(""===this.RealTime?this.Birthday:this.RealTime),this.initShenShas(),this.SelectedDY=0,this.initDayuns()}},{key:"ChangeDayun",value:function(t){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,i,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.SelectedDY=t,e=this.bazi.DaYun[t-1].Start.toChinaStr(),i=this.bazi.DaYun[t-1].GZ.Name,n.next=5,this.toastController.create({message:"\u5927\u8fd0".concat(i," \u5f00\u59cb\u4e8e ").concat(e),duration:3e3});case 5:return c=n.sent,n.next=8,c.present();case 8:case"end":return n.stop()}}),n,this)})))}},{key:"ShowDetail",value:function(t,n){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var i,c,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(this.bazi.Y.Gan.Name," ").concat(this.bazi.M.Gan.Name," ").concat(this.bazi.D.Gan.Name," ").concat(this.bazi.T.Gan.Name),c="".concat(this.bazi.Y.Zhi.Name," ").concat(this.bazi.M.Zhi.Name," ").concat(this.bazi.D.Zhi.Name," ").concat(this.bazi.T.Zhi.Name),e.next=4,this.popoverCtrl.create({component:u.a,event:n,componentProps:{items:[{name:"\u516b\u5b57",value:"<span>".concat(i,"</span><br><span>").concat(c,"</span>")},{name:"\u85cf\u5e72",value:t[4]},{name:"\u7eb3\u97f3",value:t[5]},{name:"\u957f\u751f\u5bab",value:t[6]},{name:"\u795e\u715e",value:t[7]}],toselect:!1},translucent:!0});case 4:return a=e.sent,e.next=7,a.present();case 7:return e.next=9,a.onDidDismiss();case 9:case"end":return e.stop()}}),e,this)})))}},{key:"initBaseInfo",value:function(){var t,n=this.baziText.place,e=s.a.FindCity(n[0],n[1]);this.Place=e?"".concat(n[0],"\u7701/\u5e02 ").concat(n[1],"\u5e02/\u53bf/\u533a"):"\u672a\u77e5",this.Gender=this.baziText.male?"\u4e7e":"\u5764",this.Person="".concat(this.baziText.person," (").concat(this.Gender,"\u9020)");var i=this.baziText.time.parseDate();this.Birthday=i.toChinaStr(!0);var c=new o.a(i);if(this.BirthdayN="".concat(c.GZyear,"\u5e74").concat(c.NLleap).concat(c.NLmonth,"\u6708").concat(c.NLdate),this.baziText.realsuntime){var a=e?s.a.CalcTimeOff(e.Code):null;t=new Date(i.getTime()+6e4*a),this.RealTime=t.toChinaStr(!0)}else this.RealTime=""}},{key:"initYuanju",value:function(t){var n=[],e=t.parseDate();this.bazi=new a.a(e,this.baziText.male?"m":"f");var i=this.config.shortname?1:0;if(n.push(this.bazi.All.select((function(t){return{text:t.Shen10Gan[i],color:"gray",bz:!1}}))),n.push(this.bazi.All.select((function(t){return{text:t.Gan.Name,color:"darkblue",bz:!0}}))),n.push(this.bazi.All.select((function(t){return{text:t.Zhi.Name,color:"darkblue",bz:!0}}))),n.push(this.bazi.All.select((function(t){return{text:t.Shen10Zhi[i],color:"gray",bz:!1}}))),n[0].insert(0,{text:this.Gender,color:"",bz:!1}),n[1].insert(0,{text:"\u9020",color:"",bz:!1}),n[2].insert(0,{text:"",color:"",bz:!1}),n[3].insert(0,{text:"",color:"",bz:!1}),this.config.yuanju.cangan){var c=this.bazi.All.select((function(t){return{text:t.Zhi.CGan.map((function(t){return t.Name})).join(""),color:""}}));c.insert(0,{text:"\u85cf\u5e72",color:"gray"}),n.push(c)}if(this.config.yuanju.nayin){var s=this.bazi.All.select((function(t){return{text:t.NaYin,color:""}}));s.insert(0,{text:"\u7eb3\u97f3",color:"gray"}),n.push(s)}if(this.config.yuanju.changshen){var o=this.bazi.All.select((function(t){return{text:t.ChangSheng,color:""}}));o.insert(0,{text:"\u957f\u751f",color:"gray"}),n.push(o)}this.yuanju=n}},{key:"initShenShas",value:function(){for(var t=[],n=this.bazi.ShenSha.length,e=0;e<n;e++)t.push("[".concat(this.bazi.ShenSha[e].Name," - ").concat(this.bazi.ShenSha[e].Result.join(""),"]"));var i=this.config.shensha;this.ShenShas=[];for(var c=0;c<=n;c+=i){var a=t.slice(c,c+i>n?n:c+i);this.ShenShas.push(a)}var s=i-this.ShenShas[this.ShenShas.length-1].length;if(s>0)for(var o=0;o<s;o++)this.ShenShas[this.ShenShas.length-1].push("");this.ShenShaHead="[\u547d\u5bab - ".concat(this.bazi.MingGong.Name,"] [\u80ce\u5143 - ").concat(this.bazi.TaiYuan.Name,"]")}},{key:"initDayuns",value:function(){var t=this,n=this.config.shortname?1:0,e=this.bazi.Birthday.getFullYear(),i=[];this.bazi.DaYun.forEach((function(c){var a=[];a.push("".concat(c.Start.toChinaStr())),a.push(c.GZ.Shen10Gan[n]),a.push(c.GZ.Name),a.push(c.GZ.Shen10Zhi[n]),a.push(c.GZ.Zhi.CGan.map((function(t){return t.Name})).join("")),a.push(c.GZ.NaYin),a.push(c.GZ.ChangSheng),a.push(t.bazi.CalcShenSha(c.GZ)),a.push(c.Start.getFullYear()-e),i.push(a)})),this.Dayuns=i,this.SelectedDY=0;var c=[],a=!0,s=!1,o=void 0;try{for(var r,u=this.bazi.DaYun[Symbol.iterator]();!(a=(r=u.next()).done);a=!0){var l=r.value,h=this.calcXiaoyun(l.Start.getFullYear(),l.End.getFullYear());c.push({name:"".concat(l.GZ.Name,"\u8fd0 ").concat(l.Start.toChinaStr()),liu:h[0],xiao:h[1]})}}catch(d){s=!0,o=d}finally{try{a||null==u.return||u.return()}finally{if(s)throw o}}this.AllLiuNian=c}},{key:"calcXiaoyun",value:function(t,n){var e=this,i=this.config.shortname?1:0,c=[],a=[],s=this.bazi.Birthday.toChinaStr();return s=s.replace(this.bazi.Birthday.getFullYear().toString(),"##"),this.bazi.CalcLiuNian(t,n).forEach((function(t){var n=[],s=[];n.push("".concat(t.Start.getFullYear())),s.push("".concat(t.Start.getFullYear(),"\u5e74").concat(e.bazi.Birthday.getMonth()+1,"\u6708").concat(e.bazi.Birthday.getDate()+1,"\u65e5")),n.push(t.GZ.Shen10Gan[i]),n.push(t.GZ.Name),n.push(t.GZ.Shen10Zhi[i]),s.push(t.GZ2.Shen10Gan[i]),s.push(t.GZ2.Name),s.push(t.GZ2.Shen10Zhi[i]),c.push(n),a.push(s),n.push(t.GZ.Zhi.CGan.map((function(t){return t.Name})).join("")),s.push(t.GZ2.Zhi.CGan.map((function(t){return t.Name})).join("")),n.push(t.GZ.NaYin),s.push(t.GZ2.NaYin),n.push(t.GZ.ChangSheng),s.push(t.GZ2.ChangSheng),n.push(e.bazi.CalcShenSha(t.GZ)),s.push(e.bazi.CalcShenSha(t.GZ2)),n.push(t.Start.getFullYear()-e.bazi.Birthday.getFullYear())})),[c,a]}},{key:"Config",set:function(t){this.config=Object(r.b)(t)}},{key:"FontSize",get:function(){return"".concat(this.config.fontsize,"px")}},{key:"YuanJu",get:function(){return this.yuanju}},{key:"DayunName",get:function(){return this.dayunname}},{key:"SelectedDY",get:function(){return this.selectedDayun},set:function(t){this.selectedDayun=t;var n=this.bazi.DaYun[t];n.Start.getFullYear(),this.dayunname="".concat(n.GZ.Name)}},{key:"BaziText",set:function(t){this.baziText=t}},{key:"BaziInText",get:function(){return"".concat(this.bazi.Y.Name," / ").concat(this.bazi.M.Name," / ").concat(this.bazi.D.Name," / ").concat(this.bazi.T.Name," ")}}]),t}();return t.\u0275fac=function(n){return new(n||t)(l.Zb(c.mb),l.Zb(c.ib))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-baziview"]],inputs:{Config:"Config",BaziText:"BaziText"},decls:63,vars:27,consts:[[1,"ui","attached","segment",2,"margin-left","3px","max-width","500px"],[1,"ui","blue","ribbon","label"],[3,"closeOthers"],[3,"isOpen"],["title",""],[1,"dropdown","icon"],["content",""],[4,"ngIf"],["lines","none"],[1,"bzgrid"],["class","ion-no-padding bzgrid",4,"ngFor","ngForOf"],[2,"width","100%"],[4,"ngFor","ngForOf"],[1,"ui","equal","width","grid"],["class","column","style","padding-left: 0;padding-right: 0;text-align: center",4,"ngFor","ngForOf"],[1,"ion-no-padding"],[1,"item"],[3,"closeOthers",4,"ngFor","ngForOf"],[1,"ion-no-padding","bzgrid"],["style","font-weight: bolder;",4,"ngIf"],[2,"font-weight","bolder"],[1,"column",2,"padding-left","0","padding-right","0","text-align","center"],[2,"color","gray"],[3,"click"],[2,"margin-top","3px","font-weight","bold"],[2,"margin-bottom","3px","font-weight","bold"],[1,"ui","unstackable","very","basic","table","compact","striped"],[2,"font-weight","bold"]],template:function(t,n){1&t&&(l.ec(0,"div",0),l.ec(1,"div"),l.ec(2,"a",1),l.Hc(3),l.dc(),l.dc(),l.ec(4,"sui-accordion",2),l.ec(5,"sui-accordion-panel",3),l.ec(6,"div",4),l.ac(7,"i",5),l.Hc(8),l.dc(),l.ec(9,"div",6),l.ec(10,"span"),l.Hc(11),l.dc(),l.ac(12,"br"),l.ec(13,"span"),l.Hc(14),l.dc(),l.ac(15,"br"),l.ec(16,"span"),l.Hc(17),l.dc(),l.ac(18,"br"),l.Fc(19,g,2,1,"span",7),l.ac(20,"br"),l.dc(),l.dc(),l.dc(),l.ec(21,"ion-item",8),l.ec(22,"ion-grid",9),l.Fc(23,m,2,1,"ion-row",10),l.dc(),l.dc(),l.ec(24,"sui-accordion",2),l.ec(25,"sui-accordion-panel",3),l.ec(26,"div",4),l.ac(27,"i",5),l.Hc(28),l.dc(),l.ec(29,"div",6),l.ec(30,"table",11),l.Fc(31,N,2,1,"tr",12),l.dc(),l.dc(),l.dc(),l.dc(),l.ec(32,"sui-accordion",2),l.ec(33,"sui-accordion-panel",3),l.ec(34,"div",4),l.ac(35,"i",5),l.Hc(36),l.dc(),l.ec(37,"div",6),l.ec(38,"div",13),l.Fc(39,y,12,7,"div",14),l.dc(),l.ec(40,"ion-list",15),l.ec(41,"ion-item",16),l.ec(42,"small"),l.Hc(43),l.dc(),l.dc(),l.ec(44,"ion-item",16),l.ec(45,"small"),l.Hc(46),l.dc(),l.dc(),l.ec(47,"ion-item",16),l.ec(48,"small"),l.Hc(49),l.dc(),l.dc(),l.ec(50,"ion-item",16),l.ec(51,"small"),l.Hc(52),l.dc(),l.dc(),l.ec(53,"ion-item",16),l.ec(54,"small"),l.Hc(55),l.dc(),l.dc(),l.dc(),l.dc(),l.dc(),l.dc(),l.ec(56,"sui-accordion",2),l.ec(57,"sui-accordion-panel",3),l.ec(58,"div",4),l.ac(59,"i",5),l.Hc(60," \u6d41\u5e74\u5c0f\u8fd0 "),l.dc(),l.ec(61,"div",6),l.Fc(62,x,19,4,"sui-accordion",17),l.dc(),l.dc(),l.dc(),l.dc()),2&t&&(l.Nb(3),l.Jc(" ",n.BaziInText," "),l.Nb(1),l.uc("closeOthers",!1),l.Nb(1),l.uc("isOpen",!1),l.Nb(3),l.Jc(" \u547d\u4e3b\uff1a",n.Person," "),l.Nb(3),l.Jc("\u751f\u65e5\uff1a",n.Birthday,""),l.Nb(3),l.Jc("\u519c\u5386\uff1a",n.BirthdayN,""),l.Nb(3),l.Jc("\u51fa\u751f\u5730\uff1a",n.Place,""),l.Nb(2),l.uc("ngIf",""!=n.RealTime),l.Nb(3),l.Ec("font-size",n.FontSize),l.Nb(1),l.uc("ngForOf",n.YuanJu),l.Nb(1),l.uc("closeOthers",!1),l.Nb(1),l.uc("isOpen",!1),l.Nb(3),l.Jc(" \u795e\u715e\uff1a",n.ShenShaHead," "),l.Nb(3),l.uc("ngForOf",n.ShenShas),l.Nb(1),l.uc("closeOthers",!1),l.Nb(1),l.uc("isOpen",!1),l.Nb(3),l.Jc(" \u5927\u8fd0\uff1a",n.DayunName," "),l.Nb(3),l.uc("ngForOf",n.Dayuns),l.Nb(4),l.Jc("\u8d77\u59cb: ",n.Dayuns[n.SelectedDY][0],""),l.Nb(3),l.Jc("\u85cf\u5e72: ",n.Dayuns[n.SelectedDY][4],""),l.Nb(3),l.Jc("\u7eb3\u97f3: ",n.Dayuns[n.SelectedDY][5],""),l.Nb(3),l.Jc("\u957f\u751f\u4e8c\u5341\u5bab: ",n.Dayuns[n.SelectedDY][6],""),l.Nb(3),l.Jc("\u795e\u715e: ",n.Dayuns[n.SelectedDY][7],""),l.Nb(1),l.uc("closeOthers",!0),l.Nb(1),l.uc("isOpen",!1),l.Nb(5),l.uc("ngForOf",n.AllLiuNian))},directives:[h.a,h.b,d.j,c.x,c.s,d.i,c.E,h.d,c.O,c.m,c.W],styles:[".bzgrid[_ngcontent-%COMP%]{padding:0}.selected[_ngcontent-%COMP%]{background-color:#faebd7}"]}),t}()},n7QD:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("ofXK"),c=e("3Pt+"),a=e("c7TG"),s=(e("ylIl"),e("i/bi")),o=e("fXoL"),r=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=o.Xb({type:t}),t.\u0275inj=o.Wb({factory:function(n){return new(n||t)},imports:[[i.b,c.c,s.e,a.cb]]}),t}()},uEAi:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("ofXK"),c=e("3Pt+"),a=e("c7TG"),s=(e("gTpY"),e("i/bi")),o=e("fXoL"),r=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=o.Xb({type:t}),t.\u0275inj=o.Wb({factory:function(n){return new(n||t)},imports:[[i.b,c.c,s.e,a.cb]]}),t}()},ylIl:function(t,n,e){"use strict";e.d(n,"a",(function(){return x}));var i=e("mrSG"),c=e("c7TG"),a=(e("0eVs"),e("pNW8")),s=e("LTmD"),o=e("2QJI"),r=e("fXoL"),u=e("i/bi"),l=e("ofXK"),h=function(t){return{positive:t}},d=function(t){return{error:t}},g=function(t){return{warning:t}};function f(t,n){if(1&t&&(r.ec(0,"td",12),r.Hc(1),r.dc()),2&t){var e=n.$implicit;r.uc("colSpan",e.span)("ngClass",r.vc(5,h,"positive"===e.color))("ngClass",r.vc(7,d,"error"===e.color))("ngClass",r.vc(9,g,"warning"===e.color)),r.Nb(1),r.Jc("\xa0",e.txt,"\xa0")}}function p(t,n){if(1&t&&(r.ec(0,"tr"),r.Fc(1,f,2,11,"td",15),r.dc()),2&t){var e=n.$implicit;r.Nb(1),r.uc("ngForOf",e)}}function b(t,n){if(1&t){var e=r.fc();r.ec(0,"td",16),r.mc("click",(function(){return r.Ac(e),r.pc().calcColor(null)})),r.dc()}if(2&t){var i=n.$implicit;r.uc("colSpan",i.span)("innerHTML",i.txt,r.Bc)}}function m(t,n){if(1&t&&r.ac(0,"div",21),2&t){var e=r.pc().$implicit;r.uc("innerHTML",e.text,r.Bc)}}function v(t,n){if(1&t&&r.ac(0,"div",22),2&t){var e=r.pc().$implicit;r.uc("innerHTML",e.text,r.Bc)}}function N(t,n){if(1&t){var e=r.fc();r.ec(0,"td",18),r.mc("click",(function(){r.Ac(e);var t=n.index,i=r.pc().index;return r.pc().tostNayin(i,t)})),r.Fc(1,m,1,1,"div",19),r.Fc(2,v,1,1,"div",20),r.dc()}if(2&t){var i=n.$implicit;r.uc("ngClass",r.vc(5,h,"positive"===i.color))("ngClass",r.vc(7,d,"error"===i.color))("ngClass",r.vc(9,g,"warning"===i.color)),r.Nb(1),r.uc("ngIf","svg"!==i.size),r.Nb(1),r.uc("ngIf","svg"===i.size)}}function y(t,n){if(1&t&&(r.ec(0,"tr"),r.Fc(1,N,3,11,"td",17),r.dc()),2&t){var e=n.$implicit;r.Nb(1),r.uc("ngForOf",e)}}var S=function(t){return{gua:t}},x=function(){var t=function(){function t(n,e){_classCallCheck(this,t),this.toastController=n,this.settings=e,this.smallSymbol=!1,this.ColorRiYue=["","","",""],this.YaoSymbols=[{svg:"assets/shaoyin.svg",name:"\u5c11\u9634"},{svg:"assets/shaoyan.svg",name:"\u5c11\u9633"},{svg:"assets/laoyin.svg",name:"\u8001\u9634"},{svg:"assets/laoyan.svg",name:"\u8001\u9633"}]}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"Reflash",value:function(t){t&&(this.config=Object(s.b)(t)),this.initShensha(),this.calcGuaLine()}},{key:"tostNayin",value:function(t,n){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var i,c,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=5-t,c=n<=4?1:2,c=n<=1?0:c,a=this.Gua.Ben.GanZhis[i],0===c?a=this.Gua.FuGua.GanZhis[i]:2===c&&(a=this.Gua.Bian.GanZhis[i]),e.next=7,this.toastController.create({message:"".concat(a.Name," - ").concat(a.NaYin),duration:3e3});case 7:return s=e.sent,e.next=10,s.present();case 10:this.calcColor(a.Zhi.Index);case 11:case"end":return e.stop()}}),e,this)})))}},{key:"calcColor",value:function(t){var n=null===t,e=n?"XX":new o.b(t).Zhi.Name,i=n?"XX":new o.b((t+6)%12).Zhi.Name,c=n?"XX":new o.b((13-t)%12).Zhi.Name;this.ShenSha.forEach((function(t){t.forEach((function(t){t.color=t.txt.includes(e)?"positive":t.txt.includes(i)?"error":t.txt.includes(c)?"warning":""}))})),this.gualine.forEach((function(t){t.forEach((function(t){t.color=t.text.includes(e)&&!t.text.startsWith("\u5b50\u5b59")?"positive":t.text.includes(i)&&!t.text.startsWith("\u5b50\u5b59")?"error":t.text.includes(c)&&!t.text.startsWith("\u5b50\u5b59")?"warning":""}))}));for(var a=[this.Gua.Yue.Name,this.Gua.Ri.Name,this.Xunkong[0],this.Xunkong[1]],s=0;s<4;s++)this.ColorRiYue[s]=a[s].includes(e)?s<2?"positive":"#4854e0":a[s].includes(i)?s<2?"error":"#cf3c4f":a[s].includes(c)?s<2?"warning":"#28ba62":""}},{key:"ChangSymbol",value:function(){!1===this.smallSymbol?(this.config_s=Object(s.b)(this.config),this.config.shensha=4,this.config.shortname=!0,this.config.shensha=4):this.config=Object(s.b)(this.config_s),this.smallSymbol=!this.smallSymbol,this.Reflash(null)}},{key:"initGua",value:function(){this.Titel="\u95ee\u5ff5\uff1a"+this.guaText.question,this.Gua=new a.a(this.guaText.time,this.guaText.ben,this.guaText.bian),this.GuaTime="\u8d77\u5366\u65f6\u95f4\uff1a"+("string"==typeof this.guaText.time?this.guaText.time:"".concat(this.guaText.time[0],"\u6708 ").concat(this.guaText.time[1],"\u65e5")).replace("00:00:00",""),this.Reflash(null)}},{key:"initShensha",value:function(){var t=this.config.shensha;this.shensha=[];for(var n=0;n<this.Gua.ShenShas.length-1;n+=t){for(var e=[],i=0;i<t;i++)if(!(i+n>=this.Gua.ShenShas.length-1)){var c=n+i===this.Gua.ShenShas.length-2,a=this.Gua.ShenShas[i+n];e.push({txt:"[".concat(a.Name," - ").concat(a.Result.join(""),"]"),span:c?2:1,color:""})}this.shensha.push(e)}}},{key:"calcGuaLine",value:function(){var t=this,n=['<img src="assets/svg/shaoyin32.svg"/>','<img src="assets/svg/shaoyan32.svg"/>','<img src="assets/svg/arrowX.svg"/>','<img src="assets/svg/arrowO.svg"/>'],e=!1;this.gualine=[];for(var i=6;i>0;i--){for(var c=this.Gua.GetLine(i,this.config.shortname),a=[],s=0,o=(e="string"==typeof c[1])?4:3,r=o+1,u=e?1:-1,l=0;l<c.length;l++){var h="number"==typeof c[l]?n[c[l]%2]:c[l];if(s="number"==typeof c[l]?c[l]%2:s,""===h)switch(l){case u:case o:case r:a.push({text:"",color:""})}else if(">"===h&&l===r)a.push({text:n[0===s?2:3],color:""});else{var d=l===u?"<small>&nbsp;".concat(h,"&nbsp;</small>"):h.toString();d=l===o?"&nbsp;".concat(d):d,a.push({text:d,color:""})}}this.gualine.push(a)}this.guachi=[],this.guachi.push({txt:this.Gua.Ben.GuaGong,span:e?2:3});var g=""!==this.Gua.Ben.Property?"(".concat(this.Gua.Ben.Property,")"):"";this.guachi.push({txt:"".concat(this.Gua.Ben.Name).concat(g),span:e?4:3}),this.Gua.Ben.Index!==this.Gua.Bian.Index?(g=""!==this.Gua.Bian.Property?"(".concat(this.Gua.Bian.Property,")"):"",this.guachi.push({txt:"".concat(this.Gua.Bian.Name).concat(g),span:2})):this.guachi.push({txt:"&nbsp;".repeat(5),span:2}),this.gualine.forEach((function(n){n.forEach((function(t){t.text.startsWith("<img")&&(t.size="svg")})),e||n.insert(1,{text:"&nbsp;".repeat(t.HasBianGua?1:5),color:"",size:""}),t.HasBianGua||(n.push({text:"&nbsp;",color:"",size:""}),n.push({text:"&nbsp;".repeat(25),color:"",size:""}))}))}},{key:"Config",set:function(t){this.config=Object(s.b)(t)}},{key:"Compact",get:function(){return this.settings.IsSmallScreen}},{key:"FontSize",get:function(){return"".concat(this.config.fontsize,"px")}},{key:"GuaText",get:function(){return this.guaText},set:function(t){this.guaText=t,this.initGua()}},{key:"ShenSha",get:function(){return this.shensha}},{key:"Xunkong",get:function(){return this.Gua.ShenShas[this.Gua.ShenShas.length-1].Result}},{key:"GuaLine",get:function(){return this.gualine}},{key:"GuaChi",get:function(){return this.guachi}},{key:"GuaInText",get:function(){return this.Gua.Ben.Index===this.Gua.Bian.Index?this.Gua.Ben.Name:"".concat(this.Gua.Ben.NameS,"\u4e4b").concat(this.Gua.Bian.NameS)}},{key:"HasBianGua",get:function(){return this.Gua.Ben.Index!==this.Gua.Bian.Index}}]),t}();return t.\u0275fac=function(n){return new(n||t)(r.Zb(c.mb),r.Zb(s.a))},t.\u0275cmp=r.Tb({type:t,selectors:[["app-guaview"]],inputs:{Config:"Config",GuaText:"GuaText"},decls:35,vars:45,consts:[[1,"ui","attached","segment",2,"margin-left","3px","max-width","500px"],[1,"ui","teal","ribbon","label"],[1,"ui","top","right","attached","icon","basic","label",3,"click"],[1,"cut","icon"],[3,"closeOthers"],[3,"isOpen"],["title",""],[1,"dropdown","icon"],["content",""],[1,"ui","unstackable","very","basic","table","collapsing","table-noline",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"ui","unstackable","very","basic","table","compact","collapsing",3,"ngClass"],[3,"colSpan","ngClass"],["colspan","4"],["class","collapsing",3,"colSpan","innerHTML","click",4,"ngFor","ngForOf"],[3,"colSpan","ngClass",4,"ngFor","ngForOf"],[1,"collapsing",3,"colSpan","innerHTML","click"],["class","collapsing gua",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"collapsing","gua",3,"ngClass","click"],[3,"innerHTML",4,"ngIf"],["class","ui image",3,"innerHTML",4,"ngIf"],[3,"innerHTML"],[1,"ui","image",3,"innerHTML"]],template:function(t,n){1&t&&(r.ec(0,"div",0),r.ec(1,"div"),r.ec(2,"a",1),r.Hc(3),r.dc(),r.Hc(4),r.ec(5,"a",2),r.mc("click",(function(){return n.ChangSymbol()})),r.ac(6,"i",3),r.dc(),r.dc(),r.ec(7,"sui-accordion",4),r.ec(8,"sui-accordion-panel",5),r.ec(9,"div",6),r.ac(10,"i",7),r.Hc(11),r.dc(),r.ec(12,"div",8),r.ec(13,"p"),r.Hc(14),r.dc(),r.dc(),r.dc(),r.dc(),r.ec(15,"table",9),r.Fc(16,p,2,1,"tr",10),r.dc(),r.ec(17,"table",11),r.ec(18,"thead"),r.ec(19,"tr"),r.ec(20,"td",12),r.Hc(21),r.dc(),r.ec(22,"td",12),r.Hc(23),r.dc(),r.ec(24,"td",13),r.Hc(25),r.ec(26,"span"),r.Hc(27),r.dc(),r.ec(28,"span"),r.Hc(29),r.dc(),r.Hc(30,") "),r.dc(),r.dc(),r.ec(31,"tr"),r.Fc(32,b,1,2,"td",14),r.dc(),r.dc(),r.ec(33,"tbody"),r.Fc(34,y,2,1,"tr",10),r.dc(),r.dc(),r.dc()),2&t&&(r.Nb(3),r.Jc(" ",n.GuaInText," "),r.Nb(1),r.Kc(" ",n.Gua.Yue.Name,"\u6708 ",n.Gua.Ri.Name,"\u65e5 "),r.Nb(3),r.uc("closeOthers",!1),r.Nb(1),r.uc("isOpen",!0),r.Nb(3),r.Jc(" ",n.Titel," "),r.Nb(3),r.Ic(n.GuaTime),r.Nb(1),r.uc("ngClass",r.vc(29,S,n.Compact)),r.Nb(1),r.uc("ngForOf",n.ShenSha),r.Nb(1),r.uc("ngClass",r.vc(31,S,n.Compact)),r.Nb(3),r.uc("colSpan",n.GuaChi[0].span)("ngClass",r.vc(33,h,"positive"===n.ColorRiYue[0]))("ngClass",r.vc(35,d,"error"===n.ColorRiYue[0]))("ngClass",r.vc(37,g,"warning"===n.ColorRiYue[0])),r.Nb(1),r.Jc("",n.Gua.Yue.Name,"\u6708"),r.Nb(1),r.uc("colSpan",n.GuaChi[1].span)("ngClass",r.vc(39,h,"positive"===n.ColorRiYue[1]))("ngClass",r.vc(41,d,"error"===n.ColorRiYue[1]))("ngClass",r.vc(43,g,"warning"===n.ColorRiYue[1])),r.Nb(1),r.Jc("",n.Gua.Ri.Name,"\u65e5"),r.Nb(2),r.Jc("(",n.smallSymbol?"":"\u65ec\u7a7a\uff1a"," "),r.Nb(1),r.Ec("color",n.ColorRiYue[2]),r.Nb(1),r.Ic(n.Xunkong[0]),r.Nb(1),r.Ec("color",n.ColorRiYue[3]),r.Nb(1),r.Ic(n.Xunkong[1]),r.Nb(3),r.uc("ngForOf",n.GuaChi),r.Nb(2),r.uc("ngForOf",n.GuaLine))},directives:[u.a,u.b,l.h,l.i,l.j],styles:[".guatb[_ngcontent-%COMP%]{margin-left:2px;margin-right:2px}.guagrid[_ngcontent-%COMP%]{margin-top:5px;margin-left:0;margin-right:0;--ion-grid-width-lg:540px;--ion-grid-width-md:540px;--ion-grid-width-sm:540px;--ion-grid-width-xl:540px;--ion-grid-width-xs:100%}.debug[_ngcontent-%COMP%]{border-color:red;border-style:solid}.guayao[_ngcontent-%COMP%]{margin-top:5px;border-bottom:1px dashed grey}.table-noline[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:0!important;padding-top:0!important}.gua[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:0;padding-right:0;text-align:left}table[_ngcontent-%COMP%]{padding:0;margin:0;background-color:#fff}td[_ngcontent-%COMP%]{padding-left:0;padding-right:0;border-collapse:collapse;text-align:left}"]}),t}()}}]);