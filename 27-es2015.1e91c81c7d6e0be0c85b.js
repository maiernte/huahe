(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+cLM":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("2QJI"),c=n("l+bK"),o=n("uq+3"),s=function(t){return t[t.DaYun=0]="DaYun",t[t.LiuNian=1]="LiuNian",t[t.XiaoYun=2]="XiaoYun",t}({});let a=(()=>{class t{constructor(e,n,i,c){this.Start=e,this.GZ=n,this.birthYear=i,this.type=c,this.type===s.DaYun&&(this.end=new Date(this.Start.getTime()+t.tenyear))}get Old(){return this.Start.getFullYear()-this.birthYear}get End(){return this.end}set End(t){this.end=t||this.end}get Year(){return this.Start.getFullYear()}}return t.oneday=864e5,t.oneyear=365.25*t.oneday,t.tenyear=10*t.oneyear,t})();class r{constructor(t,e){this.Birthday=t,this.Gender=e,this.bazi=c.b.calcBazi(this.Birthday.getFullYear(),this.Birthday.getMonth()+1,this.Birthday.getDate(),this.Birthday.getHours(),this.Birthday.getMinutes()),this.bazi.Y.Base=this.bazi.D,this.bazi.M.Base=this.bazi.D,this.bazi.D.Base=this.bazi.D,this.bazi.T.Base=this.bazi.D,this.initShenSha(),this.initDaYun()}get Y(){return this.bazi.Y}get M(){return this.bazi.M}get D(){return this.bazi.D}get T(){return this.bazi.T}get All(){return[this.bazi.Y,this.bazi.M,this.bazi.D,this.bazi.T]}get Direction(){return("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)}get MingGong(){if(this.minggong)return this.minggong;var t=this.M.Zhi.Index+1+this.T.Zhi.Index+1,e=t<14?14-t:26-t;return new i.b([(this.Y.Gan.QiYueGan+((e-=1)-2+12)%12)%10,e])}get TaiYuan(){return new i.b([(this.M.Gan.Index+1)%10,(this.M.Zhi.Index+3)%12])}get WuXings(){if(this.wuxings)return this.wuxings;let t=[0,0,0,0,0];return t[this.Y.Gan.WuXing.Index]+=1,t[this.M.Gan.WuXing.Index]+=1,t[this.D.Gan.WuXing.Index]+=1,t[this.T.Gan.WuXing.Index]+=1,t[this.Y.Zhi.WuXing.Index]+=1,t[this.M.Zhi.WuXing.Index]+=1,t[this.D.Zhi.WuXing.Index]+=1,t[this.T.Zhi.WuXing.Index]+=1,this.wuxings=[{Name:"\u91d1",Num:t[0]},{Name:"\u6c34",Num:t[1]},{Name:"\u6728",Num:t[2]},{Name:"\u706b",Num:t[3]},{Name:"\u571f",Num:t[4]}],this.wuxings}get ShenSha(){return this.shenshas}get DaYun(){return this.dayun}CalcShenSha(t){let e=new Array;for(let n of this.ShenSha)1==n.Is(t)&&e.push(n.Name);return e.join("\u3001")}CalcLiuNian(t,e){let n=new Array;for(var o=t-1984;o<0;)o+=60;o%=60;let r=this.T.Index+(t-this.Birthday.getFullYear()+1)*this.Direction;r=(r+600)%60;for(let l=t;l<=e;l++){let t=new i.b(o);t.Base=this.D,t.ShenSha=this.CalcShenSha(t);let e=new i.b(r);e.Base=this.D,e.ShenSha=this.CalcShenSha(e);let h=c.b.getSolarTerms(l,2)[0],d=new a(h,t,this.Birthday.getFullYear(),s.LiuNian);d.GZ2=e,n.push(d),o+=1,o%=60,r+=1*this.Direction,r=(r+60)%60}return n}equal(t){return this.Gender==t.Gender&&this.Birthday.toString()==t.Birthday.toString()}initShenSha(){this.shenshas=new Array;let t=this.Y.Index,e=this.M.Index,n=this.D.Index,i=this.T.Index;this.shenshas.push(new o.a("\u5c06\u661f",[n])),this.shenshas.push(new o.a("\u7f8a\u5203",[n])),this.shenshas.push(new o.a("\u7984\u795e",[n])),this.shenshas.push(new o.a("\u534e\u76d6",[n])),this.shenshas.push(new o.a("\u6587\u660c",[n])),this.shenshas.push(new o.a("\u5b66\u5802",[n])),this.shenshas.push(new o.a("\u5929\u559c",[e])),this.shenshas.push(new o.a("\u5929\u533b",[e])),this.shenshas.push(new o.a("\u8d35\u4eba",[n])),this.shenshas.push(new o.a("\u9a7f\u9a6c",[t,n])),this.shenshas.push(new o.a("\u6843\u82b1",[t,n])),this.shenshas.push(new o.a("\u707e\u715e",[t,n])),this.shenshas.push(new o.a("\u52ab\u715e",[t,n])),this.shenshas.push(new o.a("\u65ec\u7a7a",[n])),this.shenshas.push(new o.a("\u9b41\u7f61",[t,e,n,i])),this.shenshas.push(new o.a("\u56db\u5e9f",[t,e,n,i])),this.shenshas.push(new o.a("\u5b64\u8fb0\u5be1\u5bbf",[t,e,n,i])),this.shenshas.push(new o.a("\u9634\u5dee\u9633\u9519",[n]));let c=new o.a("\u5929\u7f57\u5730\u7f51",[t,e,n,i]);c.Gender=this.Gender,this.shenshas.push(c)}initDaYun(){this.dayun=new Array;const t=this.qiDaYun(),e=this.Direction,n=(t.getFullYear(),this.Birthday.getFullYear(),new a(this.Birthday,this.M,this.Birthday.getFullYear(),s.DaYun));n.End=t,this.dayun.push(n);for(let c=0;c<10;c++){const n=new i.b((this.M.Index+(c+1)*e+60)%60);n.Base=this.bazi.D;const o=new Date(t.getTime()+315576e6*c),r=new a(o,n,this.Birthday.getFullYear(),s.DaYun);this.dayun.push(r)}}qiDaYun(){var t=c.b.findNextJieQi(this.Birthday,("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)),e=Math.abs(t.getTime()-this.Birthday.getTime())/6e4*2;return new Date(this.Birthday.getTime()+36e5*e)}}},EUVb:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),c=n("3Pt+"),o=n("tyNb"),s=n("c7TG"),a=n("Y6BA"),r=n("fXoL"),l=n("mrSG"),h=n("l+bK");function d(t,e){if(1&t&&(r.dc(0,"ion-select-option",12),r.Jc(1),r.cc()),2&t){const t=e.$implicit;r.vc("value",e.index),r.Nb(1),r.Lc("",t,"\u6708")}}function u(t,e){if(1&t&&(r.dc(0,"ion-select-option",12),r.Jc(1),r.cc()),2&t){const t=e.$implicit;r.vc("value",e.index),r.Nb(1),r.Kc(t)}}let b=(()=>{class t{constructor(t){this.modalCtrl=t}close(){this.modalCtrl.dismiss({result:this.NlSearch.Result})}get Year(){return this.year}set Year(t){this.year=t}get CurrentYear(){return new Date(Date.now()).getFullYear()}searchNL(){const t=this.NlSearch.Year;let e=parseInt(this.NlSearch.Month.toString(),10)+1;const n=parseInt(this.NlSearch.Date.toString(),10)+1;let i="";!0===this.NlSearch.Leap&&(e*=-1,i="\u95f0"),console.log("search ..",t,e,n);const c=h.b.SearchNongli(t,e,n);null!=c?(this.NlSearch.Result=c,this.NlSearch.ResultTX=c.toChinaStr()):(this.NlSearch.ResultTX="\u627e\u4e0d\u5230\u519c\u5386 "+this.NlSearch.Year+"\u5e74 "+i+h.b.M_ChineseMonthNames[this.NlSearch.Month]+"\u6708 "+h.b.M_DayNames[this.NlSearch.Date],this.NlSearch.Result=null)}ngOnInit(){const t=new Date(Date.now());this.NlSearch={Year:t.getFullYear(),MonthOptions:h.b.M_ChineseMonthNames,DateOptions:h.b.M_DayNames,Month:0,Date:0,Leap:!1,Result:null,ResultTX:""}}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(s.ab))},t.\u0275cmp=r.Sb({type:t,selectors:[["app-searchnoli"]],decls:31,vars:8,consts:[["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],["position","floating"],["type","number","max","2010","min","1640",3,"placeholder","ngModel","ngModelChange"],["placeholder","\u6b63\u6708","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","\u521d\u4e00","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["slot","start",3,"click"],[1,"ion-text-wrap"],[3,"value"]],template:function(t,e){1&t&&(r.dc(0,"ion-header"),r.dc(1,"ion-toolbar",0),r.dc(2,"ion-buttons",1),r.dc(3,"ion-button",2),r.lc("click",(function(){return e.close()})),r.Zb(4,"ion-icon",3),r.cc(),r.cc(),r.dc(5,"ion-title"),r.Jc(6,"\u519c\u5386\u8f6c\u516c\u5386"),r.cc(),r.cc(),r.cc(),r.dc(7,"ion-content"),r.dc(8,"ion-item"),r.dc(9,"ion-label",4),r.Jc(10,"\u5e74\u4efd(1640 ~ 20100)"),r.cc(),r.dc(11,"ion-input",5),r.lc("ngModelChange",(function(t){return e.NlSearch.Year=t})),r.cc(),r.cc(),r.dc(12,"ion-item"),r.dc(13,"ion-label"),r.Jc(14,"\u6708\u4efd"),r.cc(),r.dc(15,"ion-select",6),r.lc("ngModelChange",(function(t){return e.NlSearch.Month=t})),r.Hc(16,d,2,2,"ion-select-option",7),r.cc(),r.cc(),r.dc(17,"ion-item"),r.dc(18,"ion-label"),r.Jc(19,"\u65e5\u5b50"),r.cc(),r.dc(20,"ion-select",8),r.lc("ngModelChange",(function(t){return e.NlSearch.Date=t})),r.Hc(21,u,2,2,"ion-select-option",7),r.cc(),r.cc(),r.dc(22,"ion-item"),r.dc(23,"ion-label"),r.Jc(24,"\u95f0\u6708"),r.cc(),r.dc(25,"ion-toggle",9),r.lc("ngModelChange",(function(t){return e.NlSearch.Leap=t})),r.cc(),r.cc(),r.dc(26,"ion-item"),r.dc(27,"ion-button",10),r.lc("click",(function(){return e.searchNL()})),r.Jc(28,"\u8ba1\u7b97"),r.cc(),r.dc(29,"ion-label",11),r.Jc(30),r.cc(),r.cc(),r.cc()),2&t&&(r.Nb(11),r.vc("placeholder",e.CurrentYear)("ngModel",e.NlSearch.Year),r.Nb(4),r.vc("ngModel",e.NlSearch.Month),r.Nb(1),r.vc("ngForOf",e.NlSearch.MonthOptions),r.Nb(4),r.vc("ngModel",e.NlSearch.Date),r.Nb(1),r.vc("ngForOf",e.NlSearch.DateOptions),r.Nb(4),r.vc("ngModel",e.NlSearch.Leap),r.Nb(5),r.Lc("\u67e5\u8be2\u7ed3\u679c\uff1a",e.NlSearch.ResultTX,""))},directives:[s.s,s.W,s.i,s.h,s.t,s.U,s.m,s.w,s.C,s.v,s.bb,c.f,c.g,s.P,s.fb,i.i,s.V,s.c,s.Q],styles:[""]}),t})();var g=n("LTmD");function p(t,e){1&t&&(r.dc(0,"ion-header"),r.dc(1,"ion-toolbar"),r.dc(2,"ion-buttons",23),r.Zb(3,"ion-menu-button"),r.cc(),r.dc(4,"ion-title"),r.Jc(5,"\u5e74\u5386"),r.cc(),r.cc(),r.cc())}function f(t,e){if(1&t&&(r.dc(0,"div",28),r.Jc(1),r.cc()),2&t){const t=r.oc().$implicit;r.Nb(1),r.Lc(" ",t.GZdate," ")}}function m(t,e){if(1&t){const t=r.ec();r.dc(0,"div",25),r.lc("click",(function(){r.Cc(t);const n=e.$implicit;return r.oc(2).changeDate(n)})),r.dc(1,"div",26),r.Jc(2),r.cc(),r.dc(3,"div"),r.Jc(4),r.cc(),r.Hc(5,f,2,1,"div",27),r.cc()}if(2&t){const t=e.$implicit,n=r.oc(2);r.Qb("xmonth",t.Month!=n.Month)("active",t.Date==n.Date&&t.Month==n.Month)("gzmonth",!!t.JQtime),r.Nb(2),r.Kc(t.Display),r.Nb(2),r.Kc(t.DisplayChi),r.Nb(1),r.vc("ngIf",n.ShowGZ)}}function y(t,e){if(1&t&&(r.dc(0,"div",5),r.Hc(1,m,6,9,"div",24),r.cc()),2&t){const t=e.$implicit;r.Nb(1),r.vc("ngForOf",t.Dates)}}class v{constructor(){this.Dates=[]}}let w=(()=>{class t{constructor(t,e){this.modalController=t,this.settings=e,this.Weeks=[],this.searchModel=!1,this.inited=!1}get IsWeb(){return"web"===a.b}get ShowGZ(){const t=this.settings.CalendarSetting;return!t||t.showGanZhi}set ShowGZ(t){this.settings.CalendarSetting.showGanZhi=t,this.settings.CalendarSetting=this.settings.CalendarSetting}get DateGanZhi(){return`${this.tyDate.GZyear}\u5e74 ${this.tyDate.GZmonth}\u6708 ${this.tyDate.GZdate}\u65e5`}get NongLi(){return`${this.tyDate.GZyear}\u5e74 ${this.tyDate.NLleap}${this.tyDate.NLmonth}\u6708 ${this.tyDate.NLdate}\u65e5`}get SelectedDate(){return this.selectedDate}set SelectedDate(t){if(!1===this.inited||""===t)return;this.selectedDate=t;const e=new Date(Date.parse(t));e.getFullYear()===this.Year&&e.getMonth()+1===this.Month&&e.getDate()===this.Date||this.initWeeks(e.getFullYear(),e.getMonth()+1,e.getDate())}get TyDate(){return this.tyDate}set TyDate(t){this.tyDate=t,this.initDetail()}calcFirstDayInCalendarTable(t,e){const n=new Date(t,e-1,1);let i=n.getDay();return i=0===i?7:i,h.b.addDays(-1*i,n)}showModal(){return Object(l.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:b});yield t.present(),yield t.onWillDismiss()}))}initWeeks(t,e,n){let i=this.calcFirstDayInCalendarTable(t,e);const c=[];for(let s=0;s<6;s++){const t=new v;c.push(t);for(let c=0;c<7;c++){const c=new h.a(i);t.Dates.push(c),i=h.b.addDays(1,i),c.Month===e&&c.Date===n&&(this.TyDate=c)}}this.Weeks=c,this.Month=e,this.Date=n,this.Year=t;const o=new Date(t,e-1,n);this.SelectedDate=o.toDatabaseStr()}initDetail(){const t=this.tyDate.JianChu;this.Good=t.Good,this.Bad=t.Bad,this.Jianchu=t.Titel+": "+t.Mean;let e="";e+=!0===this.tyDate.IsSuiPo?" \u5c81\u7834":"",e+=!0===this.tyDate.IsYuePo?" \u6708\u7834":"",e+=!0===this.tyDate.IsShangSuo?" \u4e0a\u6714":"",e+=!0===this.tyDate.IsYangGong13?" \u6768\u516c\u5341\u4e09\u5fcc":"",this.BadDay=e.trim()}changeDate(t){const e=new Date(Date.now()),n=t?t.Year:e.getFullYear(),i=t?t.Month:e.getMonth()+1,c=t?t.Date:e.getDate();i===this.Month&&t?(this.Date=c,this.TyDate=t,this.SelectedDate=t.date.toDatabaseStr()):this.initWeeks(n,i,c)}ngOnInit(){return Object(l.b)(this,void 0,void 0,(function*(){const t=new Date(Date.now());this.initWeeks(t.getFullYear(),t.getMonth()+1,t.getDate()),this.inited=!0}))}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(s.ab),r.Yb(g.a))},t.\u0275cmp=r.Sb({type:t,selectors:[["app-wannianli"]],decls:71,vars:12,consts:[[4,"ngIf"],[2,"background-image","url('assets/img/back_15.jpg')"],[1,"ui","attached","top","segment"],[1,"ui","top","attached","blue","large","label"],[1,"ui","attached","segment"],[1,"ui","equal","width","grid"],[1,"weekend","th","cell","column"],[1,"weekday","th","cell","column"],["class","ui equal width grid",4,"ngFor","ngForOf"],["side","end"],["color","primary"],["slot","start","color","primary",1,"ion-no-padding"],["color","secondary"],["slot","start","color","warning",1,"ion-no-padding"],["color","warning"],["side","end",1,"ion-text-wrap"],[3,"hidden"],["slot","start","color","danger",1,"ion-no-padding"],["color","secondary",1,"ion-text-wrap"],[3,"ngModel","ngModelChange"],["slot","end"],["color","primary","fill","outline",3,"click"],["lines","none"],["slot","start"],["class","cell column month td",3,"xmonth","active","gzmonth","click",4,"ngFor","ngForOf"],[1,"cell","column","month","td",3,"click"],[2,"font-weight","bold"],["style","color: gray;",4,"ngIf"],[2,"color","gray"]],template:function(t,e){1&t&&(r.Hc(0,p,6,0,"ion-header",0),r.dc(1,"ion-content",1),r.dc(2,"div",2),r.dc(3,"div",3),r.Jc(4),r.cc(),r.cc(),r.dc(5,"div",4),r.dc(6,"div",5),r.dc(7,"div",6),r.Jc(8,"\u661f\u671f\u5929"),r.Zb(9,"br"),r.Jc(10,"\xa0"),r.cc(),r.dc(11,"div",7),r.Jc(12,"\u661f\u671f\u4e00"),r.Zb(13,"div"),r.cc(),r.dc(14,"div",7),r.Jc(15,"\u661f\u671f\u4e8c"),r.Zb(16,"div"),r.cc(),r.dc(17,"div",7),r.Jc(18,"\u661f\u671f\u4e09"),r.Zb(19,"div"),r.cc(),r.dc(20,"div",7),r.Jc(21,"\u661f\u671f\u56db"),r.Zb(22,"div"),r.cc(),r.dc(23,"div",7),r.Jc(24,"\u661f\u671f\u4e94"),r.Zb(25,"div"),r.cc(),r.dc(26,"div",6),r.Jc(27,"\u661f\u671f\u516d"),r.Zb(28,"div"),r.cc(),r.cc(),r.cc(),r.dc(29,"div",4),r.Hc(30,y,2,1,"div",8),r.cc(),r.dc(31,"ion-list"),r.dc(32,"ion-item"),r.dc(33,"ion-label",9),r.dc(34,"ion-text",10),r.dc(35,"p"),r.Jc(36),r.cc(),r.cc(),r.cc(),r.cc(),r.dc(37,"ion-item"),r.dc(38,"ion-note",11),r.dc(39,"ion-text",10),r.dc(40,"h3"),r.Jc(41,"\u5b9c"),r.cc(),r.cc(),r.cc(),r.dc(42,"ion-label",9),r.dc(43,"ion-text",12),r.dc(44,"p"),r.Jc(45),r.cc(),r.cc(),r.cc(),r.cc(),r.dc(46,"ion-item"),r.dc(47,"ion-note",13),r.dc(48,"ion-text",14),r.dc(49,"h3"),r.Jc(50,"\u5fcc"),r.cc(),r.cc(),r.cc(),r.dc(51,"ion-label",15),r.dc(52,"ion-text",12),r.dc(53,"p"),r.Jc(54),r.cc(),r.cc(),r.cc(),r.cc(),r.dc(55,"ion-item",16),r.dc(56,"ion-note",17),r.Jc(57),r.cc(),r.dc(58,"ion-label"),r.dc(59,"ion-text",18),r.dc(60,"p"),r.Jc(61,"\u51e1\u5c81\u7834, \u6708\u7834, \u4e0a\u6714, \u6768\u516c\u5341\u4e09\u5fcc\u7b49\u8bf8\u65e5, \u5927\u4e8b\u4e0d\u5b9c!"),r.cc(),r.cc(),r.cc(),r.cc(),r.dc(62,"ion-item"),r.dc(63,"ion-checkbox",19),r.lc("ngModelChange",(function(t){return e.ShowGZ=t})),r.cc(),r.dc(64,"ion-label"),r.dc(65,"ion-text"),r.Jc(66,"\u663e\u793a\u65e5\u5e72\u652f"),r.cc(),r.cc(),r.dc(67,"ion-buttons",20),r.dc(68,"ion-button",21),r.lc("click",(function(){return e.showModal()})),r.Jc(69,"\u519c\u5386\u53cd\u67e5"),r.cc(),r.cc(),r.cc(),r.Zb(70,"ion-item",22),r.cc(),r.cc()),2&t&&(r.vc("ngIf",!e.IsWeb),r.Nb(4),r.Nc(" ",e.Year,"\u5e74",e.Month,"\u6708",e.Date,"\u65e5\xa0--\xa0 ",e.DateGanZhi," "),r.Nb(26),r.vc("ngForOf",e.Weeks),r.Nb(6),r.Lc("\u519c\u5386\uff1a",e.NongLi,""),r.Nb(9),r.Kc(e.Jianchu),r.Nb(9),r.Kc(e.Bad),r.Nb(1),r.vc("hidden",""==e.BadDay),r.Nb(2),r.Lc(" ",e.BadDay," "),r.Nb(6),r.vc("ngModel",e.ShowGZ))},directives:[i.j,s.m,i.i,s.D,s.w,s.C,s.S,s.G,s.j,s.c,c.f,c.g,s.i,s.h,s.s,s.W,s.F,s.U],styles:[".column.th.cell[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.th.cell.weekday[_ngcontent-%COMP%]{background-color:#cdc8b1}.th.cell.weekend[_ngcontent-%COMP%]{background-color:#d2691e}.month.column.cell.td[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.column.cell.month[_ngcontent-%COMP%]{background-color:#eee9e9;color:#000}.column.cell.gzmonth[_ngcontent-%COMP%]{background-color:#cdc8b1;color:#000}.column.cell.xmonth[_ngcontent-%COMP%]{background-color:snow;color:grey}.column.cell.active[_ngcontent-%COMP%]{background-color:#6495ed;color:#000}ion-grid[_ngcontent-%COMP%]{--ion-grid-width:540px}"]}),t})();var D=n("LvB5"),C=n("B8lH"),S=n("HULg"),N=n("ylIl"),M=n("mo90");function Y(t,e){if(1&t){const t=r.ec();r.dc(0,"ion-header"),r.dc(1,"ion-toolbar"),r.dc(2,"ion-buttons",4),r.Zb(3,"ion-menu-button"),r.cc(),r.dc(4,"ion-title"),r.Jc(5,"\u516d\u723b"),r.cc(),r.dc(6,"ion-buttons",5),r.dc(7,"ion-button",6),r.lc("click",(function(){return r.Cc(t),r.oc().showPaiguaModal()})),r.Zb(8,"ion-icon",7),r.cc(),r.dc(9,"ion-button",6),r.lc("click",(function(){return r.Cc(t),r.oc().showSettingModal()})),r.Zb(10,"ion-icon",8),r.cc(),r.dc(11,"ion-button",9),r.lc("click",(function(){return r.Cc(t),r.oc().SaveGua()})),r.Zb(12,"ion-icon",10),r.cc(),r.cc(),r.cc(),r.cc()}if(2&t){const t=r.oc();r.Nb(11),r.vc("disabled",!t.HasGua)}}function I(t,e){if(1&t){const t=r.ec();r.dc(0,"ion-item",11),r.dc(1,"ion-buttons"),r.dc(2,"ion-button",6),r.lc("click",(function(){return r.Cc(t),r.oc().showPaiguaModal()})),r.Zb(3,"ion-icon",12),r.Jc(4," \u6392\u5366 "),r.cc(),r.dc(5,"ion-button",6),r.lc("click",(function(){return r.Cc(t),r.oc().showSettingModal()})),r.Zb(6,"ion-icon",13),r.Jc(7," \u8bbe\u7f6e "),r.cc(),r.dc(8,"ion-button",9),r.lc("click",(function(){return r.Cc(t),r.oc().SaveGua()})),r.Zb(9,"ion-icon",14),r.Jc(10," \u4fdd\u5b58 "),r.cc(),r.cc(),r.cc()}if(2&t){const t=r.oc();r.Nb(8),r.vc("disabled",!t.HasGua)}}function x(t,e){if(1&t&&r.Zb(0,"app-guaview",15),2&t){const t=r.oc();r.vc("Config",t.Config)("GuaText",t.Gua)}}n("0eVs");let G=(()=>{class t{constructor(t,e,n,i){this.modalController=t,this.alertController=e,this.setting=n,this.dbservice=i,this.smallSymbol=!1}get IsWeb(){return"web"===a.b}get Config(){return this.config||(this.config=Object(g.b)(this.setting.Gua)),this.config}set Config(t){t&&(this.config=t)}get Gua(){return this.gua}get HasGua(){return!!this.Gua}ngOnInit(){}SaveGua(){return Object(l.b)(this,void 0,void 0,(function*(){const t=((yield this.dbservice.getNodes())||[]).filter(t=>32===t.type);if(!t||0===t.length)return void this.presentAlert("\u65e0\u6cd5\u4fdd\u5b58",null,"\u8bf7\u5230\u6848\u4f8b\u9875\u9762\uff0c\u521b\u5efa\u81f3\u5c11\u4e00\u4e2a\u201c\u6587\u4ef6\u5939\u201d\u7c7b\u578b\u7684\u76ee\u5f55\u3002");const e=yield this.modalController.create({component:M.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});yield e.present();const{data:n}=yield e.onWillDismiss();console.log("select node",n),n&&n.nodeid&&this.dbservice.CreateRecord(n.nodeid,this.gua.question,8,JSON.stringify(this.gua))}))}showPaiguaModal(){return Object(l.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:D.a});yield t.present();const{data:e}=yield t.onWillDismiss();this.gua=e.result?e.result:null}))}showSettingModal(){return Object(l.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:C.a,componentProps:{SettingComponent:"gua",Config:Object(g.b)(this.Config)}});yield t.present();const{data:e}=yield t.onWillDismiss();Object(g.c)({},e.result)||!Object(g.c)(this.Config,e.result)&&(this.Config=Object(g.b)(e.result),this.guaview&&this.guaview.Reflash(this.Config))}))}ChangSymbol(){const t=Object(g.b)(this.config);!1===this.smallSymbol&&(t.shensha=4,t.symbol=1),this.smallSymbol=!this.smallSymbol,this.guaview.Reflash(t)}presentAlert(t,e,n){return Object(l.b)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({header:t||"\u9519\u8bef",subHeader:e||"",message:n,buttons:["\u786e\u5b9a"]});yield i.present()}))}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(s.ab),r.Yb(s.b),r.Yb(g.a),r.Yb(S.a))},t.\u0275cmp=r.Sb({type:t,selectors:[["app-paigua"]],viewQuery:function(t,e){var n;1&t&&r.Oc(N.a,!0),2&t&&r.yc(n=r.mc())&&(e.guaview=n.first)},decls:4,vars:3,consts:[[4,"ngIf"],[2,"margin-bottom","10px"],["lines","none",4,"ngIf"],[3,"Config","GuaText",4,"ngIf"],["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],["lines","none"],["name","add-circle-outline"],["name","settings"],["name","save"],[3,"Config","GuaText"]],template:function(t,e){1&t&&(r.Hc(0,Y,13,1,"ion-header",0),r.dc(1,"ion-content",1),r.Hc(2,I,11,1,"ion-item",2),r.Hc(3,x,1,2,"app-guaview",3),r.cc()),2&t&&(r.vc("ngIf",!e.IsWeb),r.Nb(2),r.vc("ngIf",e.IsWeb),r.Nb(1),r.vc("ngIf",e.HasGua))},directives:[i.j,s.m,s.s,s.W,s.i,s.F,s.U,s.h,s.t,s.w,N.a],styles:[""]}),t})();var Z=n("SRjL"),z=n("gTpY");function O(t,e){if(1&t){const t=r.ec();r.dc(0,"ion-header"),r.dc(1,"ion-toolbar",4),r.dc(2,"ion-buttons",5),r.Zb(3,"ion-menu-button"),r.cc(),r.dc(4,"ion-title"),r.Jc(5,"\u516b\u5b57"),r.cc(),r.dc(6,"ion-buttons",6),r.dc(7,"ion-button",7),r.lc("click",(function(){return r.Cc(t),r.oc().showPaipanModal()})),r.Zb(8,"ion-icon",8),r.cc(),r.dc(9,"ion-button",7),r.lc("click",(function(){return r.Cc(t),r.oc().showSettingModal()})),r.Zb(10,"ion-icon",9),r.cc(),r.dc(11,"ion-button",10),r.lc("click",(function(){return r.Cc(t),r.oc().SaveBazi()})),r.Zb(12,"ion-icon",11),r.cc(),r.cc(),r.cc(),r.cc()}if(2&t){const t=r.oc();r.Nb(11),r.vc("disabled",!t.HasBazi)}}function k(t,e){if(1&t){const t=r.ec();r.dc(0,"ion-item",12),r.dc(1,"ion-buttons"),r.dc(2,"ion-button",7),r.lc("click",(function(){return r.Cc(t),r.oc().showPaipanModal()})),r.Zb(3,"ion-icon",13),r.Jc(4," \u6392\u76d8 "),r.cc(),r.dc(5,"ion-button",7),r.lc("click",(function(){return r.Cc(t),r.oc().showSettingModal()})),r.Zb(6,"ion-icon",14),r.Jc(7," \u8bbe\u7f6e "),r.cc(),r.dc(8,"ion-button",10),r.lc("click",(function(){return r.Cc(t),r.oc().SaveBazi()})),r.Zb(9,"ion-icon",15),r.Jc(10," \u4fdd\u5b58 "),r.cc(),r.cc(),r.cc()}if(2&t){const t=r.oc();r.Nb(8),r.vc("disabled",!t.HasBazi)}}function B(t,e){if(1&t&&r.Zb(0,"app-baziview",16),2&t){const t=r.oc();r.vc("Config",t.Config)("BaziText",t.Bazi)}}let J=(()=>{class t{constructor(t,e,n,i){this.modalController=t,this.alertController=e,this.dbservice=n,this.setting=i}get IsWeb(){return"web"===a.b}get Config(){return this.config||(this.config=Object(g.b)(this.setting.Bazi)),this.config}set Config(t){t&&(this.config=t)}get Bazi(){return this.bazi}get HasBazi(){return!!this.bazi}ngOnInit(){}SaveBazi(){return Object(l.b)(this,void 0,void 0,(function*(){const t=((yield this.dbservice.getNodes())||[]).filter(t=>32===t.type);if(!t||0===t.length)return void this.presentAlert("\u65e0\u6cd5\u4fdd\u5b58",null,"\u8bf7\u5230\u6848\u4f8b\u9875\u9762\uff0c\u521b\u5efa\u81f3\u5c11\u4e00\u4e2a\u201c\u6587\u4ef6\u5939\u201d\u7c7b\u578b\u7684\u76ee\u5f55\u3002");const e=yield this.modalController.create({component:M.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});yield e.present();const{data:n}=yield e.onWillDismiss();n&&n.nodeid&&this.dbservice.CreateRecord(n.nodeid,this.bazi.person,16,JSON.stringify(this.bazi))}))}showPaipanModal(){return Object(l.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:Z.a});yield t.present();const{data:e}=yield t.onWillDismiss();this.bazi=e.result?e.result:null}))}showSettingModal(){return Object(l.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:C.a,componentProps:{SettingComponent:"bazi",Config:Object(g.b)(this.Config)}});yield t.present();const{data:e}=yield t.onWillDismiss();Object(g.c)({},e.result)||!Object(g.c)(this.Config,e.result)&&(this.Config=Object(g.b)(e.result),this.baziview&&this.baziview.Reflash(this.Config))}))}presentAlert(t,e,n){return Object(l.b)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({header:t||"\u9519\u8bef",subHeader:e||"",message:n,buttons:["\u786e\u5b9a"]});yield i.present()}))}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(s.ab),r.Yb(s.b),r.Yb(S.a),r.Yb(g.a))},t.\u0275cmp=r.Sb({type:t,selectors:[["app-paibazi"]],viewQuery:function(t,e){var n;1&t&&r.Oc(z.a,!0),2&t&&r.yc(n=r.mc())&&(e.baziview=n.first)},decls:4,vars:3,consts:[[4,"ngIf"],[2,"margin-bottom","10px"],["lines","none",4,"ngIf"],[3,"Config","BaziText",4,"ngIf"],["color","primary"],["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],["lines","none"],["name","add-circle-outline"],["name","settings"],["name","save"],[3,"Config","BaziText"]],template:function(t,e){1&t&&(r.Hc(0,O,13,1,"ion-header",0),r.dc(1,"ion-content",1),r.Hc(2,k,11,1,"ion-item",2),r.Hc(3,B,1,2,"app-baziview",3),r.cc()),2&t&&(r.vc("ngIf",!e.IsWeb),r.Nb(2),r.vc("ngIf",e.IsWeb),r.Nb(1),r.vc("ngIf",e.HasBazi))},directives:[i.j,s.m,s.s,s.W,s.i,s.F,s.U,s.h,s.t,s.w,z.a],styles:[""]}),t})();function T(t,e){1&t&&r.Zb(0,"app-wannianli")}function W(t,e){1&t&&r.Zb(0,"app-paigua")}function j(t,e){1&t&&r.Zb(0,"app-paibazi")}let F=(()=>{class t{constructor(t,e){this.router=t,this.route=e,this.ChildrenType={Calendar:"calendar",Gua:"gua",Bazi:"bazi"},this.Child=this.ChildrenType.Calendar,this.route.params.subscribe(t=>{this.Child=t.child||this.ChildrenType.Calendar})}ngOnInit(){}get IsWeb(){return"web"===a.b}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(o.g),r.Yb(o.a))},t.\u0275cmp=r.Sb({type:t,selectors:[["app-paipan"]],decls:4,vars:3,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(r.dc(0,"ion-content"),r.Hc(1,T,1,0,"app-wannianli",0),r.Hc(2,W,1,0,"app-paigua",0),r.Hc(3,j,1,0,"app-paibazi",0),r.cc()),2&t&&(r.Nb(1),r.vc("ngIf",e.Child===e.ChildrenType.Calendar),r.Nb(1),r.vc("ngIf",e.Child===e.ChildrenType.Gua),r.Nb(1),r.vc("ngIf",e.Child===e.ChildrenType.Bazi))},directives:[s.m,i.j,w,G,J],styles:[""]}),t})();var H=n("Gfuc"),P=n("KPWP"),L=n("n7QD");let X=(()=>{class t{}return t.\u0275mod=r.Wb({type:t}),t.\u0275inj=r.Vb({factory:function(e){return new(e||t)},imports:[[H.a,P.a,L.a,i.b,c.c,s.X]]}),t})();var R=n("9UMr"),_=n("uEAi");let $=(()=>{class t{}return t.\u0275mod=r.Wb({type:t}),t.\u0275inj=r.Vb({factory:function(e){return new(e||t)},imports:[[R.a,P.a,_.a,i.b,c.c,s.X]]}),t})(),A=(()=>{class t{}return t.\u0275mod=r.Wb({type:t}),t.\u0275inj=r.Vb({factory:function(e){return new(e||t)},imports:[[i.b,c.c,s.X]]}),t})();n.d(e,"PaipanPageModule",(function(){return Q}));const K=[{path:"",component:F}];let Q=(()=>{class t{}return t.\u0275mod=r.Wb({type:t}),t.\u0275inj=r.Vb({factory:function(e){return new(e||t)},imports:[[i.b,c.c,s.X,X,$,A,o.j.forChild(K)]]}),t})()}}]);