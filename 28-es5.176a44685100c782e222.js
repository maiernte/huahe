function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+cLM":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("2QJI"),c=n("l+bK"),a=n("uq+3"),o=function(t){return t[t.DaYun=0]="DaYun",t[t.LiuNian=1]="LiuNian",t[t.XiaoYun=2]="XiaoYun",t}({}),r=function(){var t=function(){function t(e,n,i,c){_classCallCheck(this,t),this.Start=e,this.GZ=n,this.birthYear=i,this.type=c,this.type===o.DaYun&&(this.end=new Date(this.Start.getTime()+t.tenyear))}return _createClass(t,[{key:"Old",get:function(){return this.Start.getFullYear()-this.birthYear}},{key:"End",get:function(){return this.end},set:function(t){this.end=t||this.end}},{key:"Year",get:function(){return this.Start.getFullYear()}}]),t}();return t.oneday=864e5,t.oneyear=365.25*t.oneday,t.tenyear=10*t.oneyear,t}(),s=function(){function t(e,n){_classCallCheck(this,t),this.Birthday=e,this.Gender=n,this.bazi=c.b.calcBazi(this.Birthday.getFullYear(),this.Birthday.getMonth()+1,this.Birthday.getDate(),this.Birthday.getHours(),this.Birthday.getMinutes()),this.bazi.Y.Base=this.bazi.D,this.bazi.M.Base=this.bazi.D,this.bazi.D.Base=this.bazi.D,this.bazi.T.Base=this.bazi.D,this.initShenSha(),this.initDaYun()}return _createClass(t,[{key:"CalcShenSha",value:function(t){var e=new Array,n=!0,i=!1,c=void 0;try{for(var a,o=this.ShenSha[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var r=a.value;1==r.Is(t)&&e.push(r.Name)}}catch(s){i=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(i)throw c}}return e.join("\u3001")}},{key:"CalcLiuNian",value:function(t,e){for(var n=new Array,a=t-1984;a<0;)a+=60;a%=60;var s=this.T.Index+(t-this.Birthday.getFullYear()+1)*this.Direction;s=(s+600)%60;for(var u=t;u<=e;u++){var l=new i.b(a);l.Base=this.D,l.ShenSha=this.CalcShenSha(l);var h=new i.b(s);h.Base=this.D,h.ShenSha=this.CalcShenSha(h);var d=c.b.getSolarTerms(u,2)[0],b=new r(d,l,this.Birthday.getFullYear(),o.LiuNian);b.GZ2=h,n.push(b),a+=1,a%=60,s=((s+=1*this.Direction)+60)%60}return n}},{key:"equal",value:function(t){return this.Gender==t.Gender&&this.Birthday.toString()==t.Birthday.toString()}},{key:"initShenSha",value:function(){this.shenshas=new Array;var t=this.Y.Index,e=this.M.Index,n=this.D.Index,i=this.T.Index;this.shenshas.push(new a.a("\u5c06\u661f",[n])),this.shenshas.push(new a.a("\u7f8a\u5203",[n])),this.shenshas.push(new a.a("\u7984\u795e",[n])),this.shenshas.push(new a.a("\u534e\u76d6",[n])),this.shenshas.push(new a.a("\u6587\u660c",[n])),this.shenshas.push(new a.a("\u5b66\u5802",[n])),this.shenshas.push(new a.a("\u5929\u559c",[e])),this.shenshas.push(new a.a("\u5929\u533b",[e])),this.shenshas.push(new a.a("\u8d35\u4eba",[n])),this.shenshas.push(new a.a("\u9a7f\u9a6c",[t,n])),this.shenshas.push(new a.a("\u6843\u82b1",[t,n])),this.shenshas.push(new a.a("\u707e\u715e",[t,n])),this.shenshas.push(new a.a("\u52ab\u715e",[t,n])),this.shenshas.push(new a.a("\u65ec\u7a7a",[n])),this.shenshas.push(new a.a("\u9b41\u7f61",[t,e,n,i])),this.shenshas.push(new a.a("\u56db\u5e9f",[t,e,n,i])),this.shenshas.push(new a.a("\u5b64\u8fb0\u5be1\u5bbf",[t,e,n,i])),this.shenshas.push(new a.a("\u9634\u5dee\u9633\u9519",[n]));var c=new a.a("\u5929\u7f57\u5730\u7f51",[t,e,n,i]);c.Gender=this.Gender,this.shenshas.push(c)}},{key:"initDaYun",value:function(){this.dayun=new Array;var t=this.qiDaYun(),e=this.Direction,n=(t.getFullYear(),this.Birthday.getFullYear(),new r(this.Birthday,this.M,this.Birthday.getFullYear(),o.DaYun));n.End=t,this.dayun.push(n);for(var c=0;c<10;c++){var a=new i.b((this.M.Index+(c+1)*e+60)%60);a.Base=this.bazi.D;var s=new Date(t.getTime()+315576e6*c),u=new r(s,a,this.Birthday.getFullYear(),o.DaYun);this.dayun.push(u)}}},{key:"qiDaYun",value:function(){var t=c.b.findNextJieQi(this.Birthday,("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)),e=Math.abs(t.getTime()-this.Birthday.getTime())/6e4*2;return new Date(this.Birthday.getTime()+36e5*e)}},{key:"Y",get:function(){return this.bazi.Y}},{key:"M",get:function(){return this.bazi.M}},{key:"D",get:function(){return this.bazi.D}},{key:"T",get:function(){return this.bazi.T}},{key:"All",get:function(){return[this.bazi.Y,this.bazi.M,this.bazi.D,this.bazi.T]}},{key:"Direction",get:function(){return("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)}},{key:"MingGong",get:function(){if(this.minggong)return this.minggong;var t=this.M.Zhi.Index+1+this.T.Zhi.Index+1,e=t<14?14-t:26-t;return new i.b([(this.Y.Gan.QiYueGan+((e-=1)-2+12)%12)%10,e])}},{key:"TaiYuan",get:function(){return new i.b([(this.M.Gan.Index+1)%10,(this.M.Zhi.Index+3)%12])}},{key:"WuXings",get:function(){if(this.wuxings)return this.wuxings;var t=[0,0,0,0,0];return t[this.Y.Gan.WuXing.Index]+=1,t[this.M.Gan.WuXing.Index]+=1,t[this.D.Gan.WuXing.Index]+=1,t[this.T.Gan.WuXing.Index]+=1,t[this.Y.Zhi.WuXing.Index]+=1,t[this.M.Zhi.WuXing.Index]+=1,t[this.D.Zhi.WuXing.Index]+=1,t[this.T.Zhi.WuXing.Index]+=1,this.wuxings=[{Name:"\u91d1",Num:t[0]},{Name:"\u6c34",Num:t[1]},{Name:"\u6728",Num:t[2]},{Name:"\u706b",Num:t[3]},{Name:"\u571f",Num:t[4]}],this.wuxings}},{key:"ShenSha",get:function(){return this.shenshas}},{key:"DaYun",get:function(){return this.dayun}}]),t}()},EUVb:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),c=n("3Pt+"),a=n("tyNb"),o=n("c7TG"),r=n("Y6BA"),s=n("fXoL"),u=n("mrSG"),l=n("l+bK");function h(t,e){if(1&t&&(s.dc(0,"ion-select-option",12),s.Ic(1),s.cc()),2&t){var n=e.$implicit;s.vc("value",e.index),s.Nb(1),s.Kc("",n,"\u6708")}}function d(t,e){if(1&t&&(s.dc(0,"ion-select-option",12),s.Ic(1),s.cc()),2&t){var n=e.$implicit;s.vc("value",e.index),s.Nb(1),s.Jc(n)}}var b,f=((b=function(){function t(e){_classCallCheck(this,t),this.modalCtrl=e}return _createClass(t,[{key:"close",value:function(){this.modalCtrl.dismiss({result:this.NlSearch.Result})}},{key:"searchNL",value:function(){var t=this.NlSearch.Year,e=parseInt(this.NlSearch.Month.toString(),10)+1,n=parseInt(this.NlSearch.Date.toString(),10)+1,i="";!0===this.NlSearch.Leap&&(e*=-1,i="\u95f0"),console.log("search ..",t,e,n);var c=l.b.SearchNongli(t,e,n);null!=c?(this.NlSearch.Result=c,this.NlSearch.ResultTX=c.toChinaStr()):(this.NlSearch.ResultTX="\u627e\u4e0d\u5230\u519c\u5386 "+this.NlSearch.Year+"\u5e74 "+i+l.b.M_ChineseMonthNames[this.NlSearch.Month]+"\u6708 "+l.b.M_DayNames[this.NlSearch.Date],this.NlSearch.Result=null)}},{key:"ngOnInit",value:function(){var t=new Date(Date.now());this.NlSearch={Year:t.getFullYear(),MonthOptions:l.b.M_ChineseMonthNames,DateOptions:l.b.M_DayNames,Month:0,Date:0,Leap:!1,Result:null,ResultTX:""}}},{key:"Year",get:function(){return this.year},set:function(t){this.year=t}},{key:"CurrentYear",get:function(){return new Date(Date.now()).getFullYear()}}]),t}()).\u0275fac=function(t){return new(t||b)(s.Yb(o.cb))},b.\u0275cmp=s.Sb({type:b,selectors:[["app-searchnoli"]],decls:31,vars:8,consts:[["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],["position","floating"],["type","number","max","2010","min","1640",3,"placeholder","ngModel","ngModelChange"],["placeholder","\u6b63\u6708","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","\u521d\u4e00","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["slot","start",3,"click"],[1,"ion-text-wrap"],[3,"value"]],template:function(t,e){1&t&&(s.dc(0,"ion-header"),s.dc(1,"ion-toolbar",0),s.dc(2,"ion-buttons",1),s.dc(3,"ion-button",2),s.lc("click",(function(){return e.close()})),s.Zb(4,"ion-icon",3),s.cc(),s.cc(),s.dc(5,"ion-title"),s.Ic(6,"\u519c\u5386\u8f6c\u516c\u5386"),s.cc(),s.cc(),s.cc(),s.dc(7,"ion-content"),s.dc(8,"ion-item"),s.dc(9,"ion-label",4),s.Ic(10,"\u5e74\u4efd(1640 ~ 20100)"),s.cc(),s.dc(11,"ion-input",5),s.lc("ngModelChange",(function(t){return e.NlSearch.Year=t})),s.cc(),s.cc(),s.dc(12,"ion-item"),s.dc(13,"ion-label"),s.Ic(14,"\u6708\u4efd"),s.cc(),s.dc(15,"ion-select",6),s.lc("ngModelChange",(function(t){return e.NlSearch.Month=t})),s.Gc(16,h,2,2,"ion-select-option",7),s.cc(),s.cc(),s.dc(17,"ion-item"),s.dc(18,"ion-label"),s.Ic(19,"\u65e5\u5b50"),s.cc(),s.dc(20,"ion-select",8),s.lc("ngModelChange",(function(t){return e.NlSearch.Date=t})),s.Gc(21,d,2,2,"ion-select-option",7),s.cc(),s.cc(),s.dc(22,"ion-item"),s.dc(23,"ion-label"),s.Ic(24,"\u95f0\u6708"),s.cc(),s.dc(25,"ion-toggle",9),s.lc("ngModelChange",(function(t){return e.NlSearch.Leap=t})),s.cc(),s.cc(),s.dc(26,"ion-item"),s.dc(27,"ion-button",10),s.lc("click",(function(){return e.searchNL()})),s.Ic(28,"\u8ba1\u7b97"),s.cc(),s.dc(29,"ion-label",11),s.Ic(30),s.cc(),s.cc(),s.cc()),2&t&&(s.Nb(11),s.vc("placeholder",e.CurrentYear)("ngModel",e.NlSearch.Year),s.Nb(4),s.vc("ngModel",e.NlSearch.Month),s.Nb(1),s.vc("ngForOf",e.NlSearch.MonthOptions),s.Nb(4),s.vc("ngModel",e.NlSearch.Date),s.Nb(1),s.vc("ngForOf",e.NlSearch.DateOptions),s.Nb(4),s.vc("ngModel",e.NlSearch.Leap),s.Nb(5),s.Kc("\u67e5\u8be2\u7ed3\u679c\uff1a",e.NlSearch.ResultTX,""))},directives:[o.t,o.Y,o.j,o.i,o.u,o.W,o.n,o.x,o.D,o.w,o.db,c.f,c.g,o.Q,o.hb,i.i,o.X,o.c,o.R],styles:[""]}),b);function g(t,e){1&t&&(s.dc(0,"ion-header"),s.dc(1,"ion-toolbar"),s.dc(2,"ion-buttons",22),s.Zb(3,"ion-menu-button"),s.cc(),s.dc(4,"ion-title"),s.Ic(5,"\u5e74\u5386"),s.cc(),s.cc(),s.cc())}function v(t,e){if(1&t){var n=s.ec();s.dc(0,"div",24),s.lc("click",(function(){s.Bc(n);var t=e.$implicit;return s.oc(2).changeDate(t)})),s.dc(1,"div"),s.Ic(2),s.cc(),s.dc(3,"div"),s.Ic(4),s.cc(),s.cc()}if(2&t){var i=e.$implicit,c=s.oc(2);s.Qb("xmonth",i.Month!=c.Month)("active",i.Date==c.Date&&i.Month==c.Month),s.Nb(2),s.Jc(i.Display),s.Nb(2),s.Jc(i.DisplayChi)}}function p(t,e){if(1&t&&(s.dc(0,"div",6),s.Gc(1,v,5,6,"div",23),s.cc()),2&t){var n=e.$implicit;s.Nb(1),s.vc("ngForOf",n.Dates)}}var m,y=function t(){_classCallCheck(this,t),this.Dates=[]},k=((m=function(){function t(e){_classCallCheck(this,t),this.modalController=e,this.Weeks=[],this.searchModel=!1,this.inited=!1}return _createClass(t,[{key:"calcFirstDayInCalendarTable",value:function(t,e){var n=new Date(t,e-1,1),i=n.getDay();return i=0===i?7:i,l.b.addDays(-1*i,n)}},{key:"showModal",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:f});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.next=7,e.onWillDismiss();case 7:case"end":return t.stop()}}),t,this)})))}},{key:"initWeeks",value:function(t,e,n){for(var i=this.calcFirstDayInCalendarTable(t,e),c=[],a=0;a<6;a++){var o=new y;c.push(o);for(var r=0;r<7;r++){var s=new l.a(i);o.Dates.push(s),i=l.b.addDays(1,i),s.Month===e&&s.Date===n&&(this.TyDate=s)}}this.Weeks=c,this.Month=e,this.Date=n,this.Year=t;var u=new Date(t,e-1,n);this.SelectedDate=u.toDatabaseStr()}},{key:"initDetail",value:function(){var t=this.tyDate.JianChu;this.Good=t.Good,this.Bad=t.Bad,this.Jianchu=t.Titel+": "+t.Mean;var e="";e+=!0===this.tyDate.IsSuiPo?" \u5c81\u7834":"",e+=!0===this.tyDate.IsYuePo?" \u6708\u7834":"",e+=!0===this.tyDate.IsShangSuo?" \u4e0a\u6714":"",e+=!0===this.tyDate.IsYangGong13?" \u6768\u516c\u5341\u4e09\u5fcc":"",this.BadDay=e.trim()}},{key:"changeDate",value:function(t){var e=new Date(Date.now()),n=t?t.Year:e.getFullYear(),i=t?t.Month:e.getMonth()+1,c=t?t.Date:e.getDate();i===this.Month&&t?(this.Date=c,this.TyDate=t,this.SelectedDate=t.date.toDatabaseStr()):this.initWeeks(n,i,c)}},{key:"ngOnInit",value:function(){var t=new Date(Date.now());this.initWeeks(t.getFullYear(),t.getMonth()+1,t.getDate()),this.inited=!0}},{key:"IsWeb",get:function(){return"web"===r.b}},{key:"DateGanZhi",get:function(){return"".concat(this.tyDate.GZyear,"\u5e74 ").concat(this.tyDate.GZmonth,"\u6708 ").concat(this.tyDate.GZdate,"\u65e5")}},{key:"NongLi",get:function(){return"".concat(this.tyDate.GZyear,"\u5e74 ").concat(this.tyDate.NLleap).concat(this.tyDate.NLmonth,"\u6708 ").concat(this.tyDate.NLdate,"\u65e5")}},{key:"SelectedDate",get:function(){return this.selectedDate},set:function(t){if(!1!==this.inited&&""!==t){this.selectedDate=t;var e=new Date(Date.parse(t));e.getFullYear()===this.Year&&e.getMonth()+1===this.Month&&e.getDate()===this.Date||this.initWeeks(e.getFullYear(),e.getMonth()+1,e.getDate())}}},{key:"TyDate",get:function(){return this.tyDate},set:function(t){this.tyDate=t,this.initDetail()}}]),t}()).\u0275fac=function(t){return new(t||m)(s.Yb(o.cb))},m.\u0275cmp=s.Sb({type:m,selectors:[["app-wannianli"]],decls:68,vars:11,consts:[[4,"ngIf"],[2,"background-image","url('assets/img/back_15.jpg')"],["fixed",""],[1,"ui","attached","top","segment"],[1,"ui","top","attached","blue","large","label"],[1,"ui","attached","segment"],[1,"ui","equal","width","grid"],[1,"weekend","th","cell","column"],[1,"weekday","th","cell","column"],["class","ui equal width grid",4,"ngFor","ngForOf"],["side","end"],["color","primary"],["slot","end"],[3,"click"],["slot","start","color","primary",1,"ion-no-padding"],["color","secondary"],["slot","start","color","warning",1,"ion-no-padding"],["color","warning"],["side","end",1,"ion-text-wrap"],[3,"hidden"],["slot","start","color","danger",1,"ion-no-padding"],["color","secondary",1,"ion-text-wrap"],["slot","start"],["class","cell column month td",3,"xmonth","active","click",4,"ngFor","ngForOf"],[1,"cell","column","month","td",3,"click"]],template:function(t,e){1&t&&(s.Gc(0,g,6,0,"ion-header",0),s.dc(1,"ion-content",1),s.dc(2,"ion-grid",2),s.dc(3,"div",3),s.dc(4,"div",4),s.Ic(5),s.Zb(6,"br"),s.Ic(7,"\xa0 "),s.cc(),s.cc(),s.dc(8,"div",5),s.dc(9,"div",6),s.dc(10,"div",7),s.Ic(11,"\u661f\u671f\u5929"),s.Zb(12,"br"),s.Ic(13,"\xa0"),s.cc(),s.dc(14,"div",8),s.Ic(15,"\u661f\u671f\u4e00"),s.Zb(16,"div"),s.cc(),s.dc(17,"div",8),s.Ic(18,"\u661f\u671f\u4e8c"),s.Zb(19,"div"),s.cc(),s.dc(20,"div",8),s.Ic(21,"\u661f\u671f\u4e09"),s.Zb(22,"div"),s.cc(),s.dc(23,"div",8),s.Ic(24,"\u661f\u671f\u56db"),s.Zb(25,"div"),s.cc(),s.dc(26,"div",8),s.Ic(27,"\u661f\u671f\u4e94"),s.Zb(28,"div"),s.cc(),s.dc(29,"div",7),s.Ic(30,"\u661f\u671f\u516d"),s.Zb(31,"div"),s.cc(),s.cc(),s.cc(),s.dc(32,"div",5),s.Gc(33,p,2,1,"div",9),s.cc(),s.dc(34,"ion-list"),s.dc(35,"ion-item"),s.dc(36,"ion-label",10),s.dc(37,"ion-text",11),s.dc(38,"p"),s.Ic(39),s.cc(),s.cc(),s.cc(),s.dc(40,"ion-buttons",12),s.dc(41,"ion-button",13),s.lc("click",(function(){return e.showModal()})),s.Ic(42,"\u519c\u5386\u53cd\u67e5"),s.cc(),s.cc(),s.cc(),s.dc(43,"ion-item"),s.dc(44,"ion-note",14),s.dc(45,"ion-text",11),s.dc(46,"h3"),s.Ic(47,"\u5b9c"),s.cc(),s.cc(),s.cc(),s.dc(48,"ion-label",10),s.dc(49,"ion-text",15),s.dc(50,"p"),s.Ic(51),s.cc(),s.cc(),s.cc(),s.cc(),s.dc(52,"ion-item"),s.dc(53,"ion-note",16),s.dc(54,"ion-text",17),s.dc(55,"h3"),s.Ic(56,"\u5fcc"),s.cc(),s.cc(),s.cc(),s.dc(57,"ion-label",18),s.dc(58,"ion-text",15),s.dc(59,"p"),s.Ic(60),s.cc(),s.cc(),s.cc(),s.cc(),s.dc(61,"ion-item",19),s.dc(62,"ion-note",20),s.Ic(63),s.cc(),s.dc(64,"ion-label"),s.dc(65,"ion-text",21),s.dc(66,"p"),s.Ic(67,"\u51e1\u5c81\u7834, \u6708\u7834, \u4e0a\u6714, \u6768\u516c\u5341\u4e09\u5fcc\u7b49\u8bf8\u65e5, \u5927\u4e8b\u4e0d\u5b9c!"),s.cc(),s.cc(),s.cc(),s.cc(),s.cc(),s.cc(),s.cc()),2&t&&(s.vc("ngIf",!e.IsWeb),s.Nb(5),s.Mc(" ",e.Year,"\u5e74",e.Month,"\u6708",e.Date,"\u65e5\xa0--\xa0 ",e.DateGanZhi," "),s.Nb(28),s.vc("ngForOf",e.Weeks),s.Nb(6),s.Kc("\u519c\u5386\uff1a",e.NongLi,""),s.Nb(12),s.Jc(e.Jianchu),s.Nb(9),s.Jc(e.Bad),s.Nb(1),s.vc("hidden",""==e.BadDay),s.Nb(2),s.Kc(" ",e.BadDay," "))},directives:[i.j,o.n,o.s,i.i,o.E,o.x,o.D,o.T,o.j,o.i,o.H,o.t,o.Y,o.G,o.W],styles:[".column.th.cell[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.th.cell.weekday[_ngcontent-%COMP%]{background-color:#cdc8b1}.th.cell.weekend[_ngcontent-%COMP%]{background-color:#d2691e}.month.column.cell.td[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.column.cell.month[_ngcontent-%COMP%]{background-color:#eee9e9;color:#000}.column.cell.xmonth[_ngcontent-%COMP%]{background-color:snow;color:grey}.column.cell.active[_ngcontent-%COMP%]{background-color:#6495ed;color:#000}ion-grid[_ngcontent-%COMP%]{--ion-grid-width:540px}"]}),m),w=n("LvB5"),D=n("B8lH"),C=n("LTmD"),I=n("HULg"),x=n("ylIl"),N=n("mo90");function S(t,e){if(1&t){var n=s.ec();s.dc(0,"ion-header"),s.dc(1,"ion-toolbar"),s.dc(2,"ion-buttons",4),s.Zb(3,"ion-menu-button"),s.cc(),s.dc(4,"ion-title"),s.Ic(5,"\u516d\u723b"),s.cc(),s.dc(6,"ion-buttons",5),s.dc(7,"ion-button",6),s.lc("click",(function(){return s.Bc(n),s.oc().showPaiguaModal()})),s.Zb(8,"ion-icon",7),s.cc(),s.dc(9,"ion-button",6),s.lc("click",(function(){return s.Bc(n),s.oc().showSettingModal()})),s.Zb(10,"ion-icon",8),s.cc(),s.dc(11,"ion-button",9),s.lc("click",(function(){return s.Bc(n),s.oc().SaveGua()})),s.Zb(12,"ion-icon",10),s.cc(),s.cc(),s.cc(),s.cc()}if(2&t){var i=s.oc();s.Nb(11),s.vc("disabled",!i.HasGua)}}function M(t,e){if(1&t){var n=s.ec();s.dc(0,"ion-item",11),s.dc(1,"ion-buttons"),s.dc(2,"ion-button",6),s.lc("click",(function(){return s.Bc(n),s.oc().showPaiguaModal()})),s.Zb(3,"ion-icon",12),s.Ic(4," \u6392\u5366 "),s.cc(),s.dc(5,"ion-button",6),s.lc("click",(function(){return s.Bc(n),s.oc().showSettingModal()})),s.Zb(6,"ion-icon",13),s.Ic(7," \u8bbe\u7f6e "),s.cc(),s.dc(8,"ion-button",9),s.lc("click",(function(){return s.Bc(n),s.oc().SaveGua()})),s.Zb(9,"ion-icon",14),s.Ic(10," \u4fdd\u5b58 "),s.cc(),s.cc(),s.cc()}if(2&t){var i=s.oc();s.Nb(8),s.vc("disabled",!i.HasGua)}}function Y(t,e){if(1&t&&s.Zb(0,"app-guaview",15),2&t){var n=s.oc();s.vc("Config",n.Config)("GuaText",n.Gua)}}n("0eVs");var B,G=((B=function(){function t(e,n,i,c){_classCallCheck(this,t),this.modalController=e,this.alertController=n,this.setting=i,this.dbservice=c,this.smallSymbol=!1}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"SaveGua",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.dbservice.getNodes();case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=[];case 5:if(t.t1=function(t){return 32===t.type},(e=t.t0.filter(t.t1))&&0!==e.length){t.next=9;break}return t.abrupt("return",void this.presentAlert("\u65e0\u6cd5\u4fdd\u5b58",null,"\u8bf7\u5230\u6848\u4f8b\u9875\u9762\uff0c\u521b\u5efa\u81f3\u5c11\u4e00\u4e2a\u201c\u6587\u4ef6\u5939\u201d\u7c7b\u578b\u7684\u76ee\u5f55\u3002"));case 9:return t.next=11,this.modalController.create({component:N.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});case 11:return n=t.sent,t.next=14,n.present();case 14:return t.next=16,n.onWillDismiss();case 16:i=t.sent,c=i.data,console.log("select node",c),c&&c.nodeid&&this.dbservice.CreateRecord(c.nodeid,this.gua.question,8,JSON.stringify(this.gua));case 19:case"end":return t.stop()}}),t,this)})))}},{key:"showPaiguaModal",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:w.a});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.next=7,e.onWillDismiss();case 7:n=t.sent,i=n.data,this.gua=i.result?i.result:null;case 10:case"end":return t.stop()}}),t,this)})))}},{key:"showSettingModal",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:D.a,componentProps:{SettingComponent:"gua",Config:Object(C.b)(this.Config)}});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.next=7,e.onWillDismiss();case 7:n=t.sent,i=n.data,Object(C.c)({},i.result)||!Object(C.c)(this.Config,i.result)&&(this.Config=Object(C.b)(i.result),this.guaview&&this.guaview.Reflash(this.Config));case 10:case"end":return t.stop()}}),t,this)})))}},{key:"ChangSymbol",value:function(){var t=Object(C.b)(this.config);!1===this.smallSymbol&&(t.shensha=4,t.symbol=1),this.smallSymbol=!this.smallSymbol,this.guaview.Reflash(t)}},{key:"presentAlert",value:function(t,e,n){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var c;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alertController.create({header:t||"\u9519\u8bef",subHeader:e||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return c=i.sent,i.next=5,c.present();case 5:case"end":return i.stop()}}),i,this)})))}},{key:"IsWeb",get:function(){return"web"===r.b}},{key:"Config",get:function(){return this.config||(this.config=Object(C.b)(this.setting.Gua)),this.config},set:function(t){t&&(this.config=t)}},{key:"Gua",get:function(){return this.gua}},{key:"HasGua",get:function(){return!!this.Gua}}]),t}()).\u0275fac=function(t){return new(t||B)(s.Yb(o.cb),s.Yb(o.b),s.Yb(C.a),s.Yb(I.a))},B.\u0275cmp=s.Sb({type:B,selectors:[["app-paigua"]],viewQuery:function(t,e){var n;1&t&&s.Nc(x.a,!0),2&t&&s.xc(n=s.mc())&&(e.guaview=n.first)},decls:4,vars:3,consts:[[4,"ngIf"],[2,"margin-bottom","10px"],["lines","none",4,"ngIf"],[3,"Config","GuaText",4,"ngIf"],["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],["lines","none"],["name","add-circle-outline"],["name","settings"],["name","save"],[3,"Config","GuaText"]],template:function(t,e){1&t&&(s.Gc(0,S,13,1,"ion-header",0),s.dc(1,"ion-content",1),s.Gc(2,M,11,1,"ion-item",2),s.Gc(3,Y,1,2,"app-guaview",3),s.cc()),2&t&&(s.vc("ngIf",!e.IsWeb),s.Nb(2),s.vc("ngIf",e.IsWeb),s.Nb(1),s.vc("ngIf",e.HasGua))},directives:[i.j,o.n,o.t,o.Y,o.j,o.G,o.W,o.i,o.u,o.x,x.a],styles:[""]}),B),Z=n("SRjL"),z=n("gTpY");function O(t,e){if(1&t){var n=s.ec();s.dc(0,"ion-header"),s.dc(1,"ion-toolbar",4),s.dc(2,"ion-buttons",5),s.Zb(3,"ion-menu-button"),s.cc(),s.dc(4,"ion-title"),s.Ic(5,"\u516b\u5b57"),s.cc(),s.dc(6,"ion-buttons",6),s.dc(7,"ion-button",7),s.lc("click",(function(){return s.Bc(n),s.oc().showPaipanModal()})),s.Zb(8,"ion-icon",8),s.cc(),s.dc(9,"ion-button",7),s.lc("click",(function(){return s.Bc(n),s.oc().showSettingModal()})),s.Zb(10,"ion-icon",9),s.cc(),s.dc(11,"ion-button",10),s.lc("click",(function(){return s.Bc(n),s.oc().SaveBazi()})),s.Zb(12,"ion-icon",11),s.cc(),s.cc(),s.cc(),s.cc()}if(2&t){var i=s.oc();s.Nb(11),s.vc("disabled",!i.HasBazi)}}function T(t,e){if(1&t){var n=s.ec();s.dc(0,"ion-item",12),s.dc(1,"ion-buttons"),s.dc(2,"ion-button",7),s.lc("click",(function(){return s.Bc(n),s.oc().showPaipanModal()})),s.Zb(3,"ion-icon",13),s.Ic(4," \u6392\u76d8 "),s.cc(),s.dc(5,"ion-button",7),s.lc("click",(function(){return s.Bc(n),s.oc().showSettingModal()})),s.Zb(6,"ion-icon",14),s.Ic(7," \u8bbe\u7f6e "),s.cc(),s.dc(8,"ion-button",10),s.lc("click",(function(){return s.Bc(n),s.oc().SaveBazi()})),s.Zb(9,"ion-icon",15),s.Ic(10," \u4fdd\u5b58 "),s.cc(),s.cc(),s.cc()}if(2&t){var i=s.oc();s.Nb(8),s.vc("disabled",!i.HasBazi)}}function W(t,e){if(1&t&&s.Zb(0,"app-baziview",16),2&t){var n=s.oc();s.vc("Config",n.Config)("BaziText",n.Bazi)}}var j,_=((j=function(){function t(e,n,i,c){_classCallCheck(this,t),this.modalController=e,this.alertController=n,this.dbservice=i,this.setting=c}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"SaveBazi",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.dbservice.getNodes();case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=[];case 5:if(t.t1=function(t){return 32===t.type},(e=t.t0.filter(t.t1))&&0!==e.length){t.next=9;break}return t.abrupt("return",void this.presentAlert("\u65e0\u6cd5\u4fdd\u5b58",null,"\u8bf7\u5230\u6848\u4f8b\u9875\u9762\uff0c\u521b\u5efa\u81f3\u5c11\u4e00\u4e2a\u201c\u6587\u4ef6\u5939\u201d\u7c7b\u578b\u7684\u76ee\u5f55\u3002"));case 9:return t.next=11,this.modalController.create({component:N.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});case 11:return n=t.sent,t.next=14,n.present();case 14:return t.next=16,n.onWillDismiss();case 16:i=t.sent,(c=i.data)&&c.nodeid&&this.dbservice.CreateRecord(c.nodeid,this.bazi.person,16,JSON.stringify(this.bazi));case 19:case"end":return t.stop()}}),t,this)})))}},{key:"showPaipanModal",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:Z.a});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.next=7,e.onWillDismiss();case 7:n=t.sent,i=n.data,this.bazi=i.result?i.result:null;case 10:case"end":return t.stop()}}),t,this)})))}},{key:"showSettingModal",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:D.a,componentProps:{SettingComponent:"bazi",Config:Object(C.b)(this.Config)}});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.next=7,e.onWillDismiss();case 7:n=t.sent,i=n.data,Object(C.c)({},i.result)||!Object(C.c)(this.Config,i.result)&&(this.Config=Object(C.b)(i.result),this.baziview&&this.baziview.Reflash(this.Config));case 10:case"end":return t.stop()}}),t,this)})))}},{key:"presentAlert",value:function(t,e,n){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var c;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alertController.create({header:t||"\u9519\u8bef",subHeader:e||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return c=i.sent,i.next=5,c.present();case 5:case"end":return i.stop()}}),i,this)})))}},{key:"IsWeb",get:function(){return"web"===r.b}},{key:"Config",get:function(){return this.config||(this.config=Object(C.b)(this.setting.Bazi)),this.config},set:function(t){t&&(this.config=t)}},{key:"Bazi",get:function(){return this.bazi}},{key:"HasBazi",get:function(){return!!this.bazi}}]),t}()).\u0275fac=function(t){return new(t||j)(s.Yb(o.cb),s.Yb(o.b),s.Yb(I.a),s.Yb(C.a))},j.\u0275cmp=s.Sb({type:j,selectors:[["app-paibazi"]],viewQuery:function(t,e){var n;1&t&&s.Nc(z.a,!0),2&t&&s.xc(n=s.mc())&&(e.baziview=n.first)},decls:4,vars:3,consts:[[4,"ngIf"],[2,"margin-bottom","10px"],["lines","none",4,"ngIf"],[3,"Config","BaziText",4,"ngIf"],["color","primary"],["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],["lines","none"],["name","add-circle-outline"],["name","settings"],["name","save"],[3,"Config","BaziText"]],template:function(t,e){1&t&&(s.Gc(0,O,13,1,"ion-header",0),s.dc(1,"ion-content",1),s.Gc(2,T,11,1,"ion-item",2),s.Gc(3,W,1,2,"app-baziview",3),s.cc()),2&t&&(s.vc("ngIf",!e.IsWeb),s.Nb(2),s.vc("ngIf",e.IsWeb),s.Nb(1),s.vc("ngIf",e.HasBazi))},directives:[i.j,o.n,o.t,o.Y,o.j,o.G,o.W,o.i,o.u,o.x,z.a],styles:[""]}),j);function R(t,e){1&t&&s.Zb(0,"app-wannianli")}function P(t,e){1&t&&s.Zb(0,"app-paigua")}function F(t,e){1&t&&s.Zb(0,"app-paibazi")}function L(t,e){if(1&t){var n=s.ec();s.dc(0,"ion-fab",2),s.dc(1,"ion-fab-button",3),s.lc("click",(function(){return s.Bc(n),s.oc().Child="\u4e07\u5e74\u5386"})),s.Ic(2," \u4e07\u5e74\u5386 "),s.cc(),s.dc(3,"ion-fab-button",3),s.lc("click",(function(){return s.Bc(n),s.oc().Child="\u516d\u723b"})),s.Ic(4," \u516d\u723b "),s.cc(),s.dc(5,"ion-fab-button",3),s.lc("click",(function(){return s.Bc(n),s.oc().Child="\u516b\u5b57"})),s.Ic(6," \u516b\u5b57 "),s.cc(),s.cc()}}function X(t,e){if(1&t){var n=s.ec();s.dc(0,"ion-footer"),s.dc(1,"ion-toolbar"),s.dc(2,"ion-buttons",4),s.dc(3,"ion-button",5),s.lc("click",(function(){return s.Bc(n),s.oc().Child="\u4e07\u5e74\u5386"})),s.Ic(4,"\u4e07\u5e74\u5386"),s.cc(),s.cc(),s.dc(5,"ion-buttons",6),s.dc(6,"ion-button",7),s.lc("click",(function(){return s.Bc(n),s.oc().Child="\u516d\u723b"})),s.Ic(7,"\u516d\u723b"),s.cc(),s.dc(8,"ion-button",5),s.lc("click",(function(){return s.Bc(n),s.oc().Child="\u516b\u5b57"})),s.Ic(9,"\u516b\u5b57"),s.cc(),s.cc(),s.cc(),s.cc()}}var H,J,A,q,K=((H=function(){function t(e){_classCallCheck(this,t),this.router=e,this.Child="\u4e07\u5e74\u5386"}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"IsWeb",get:function(){return"web"===r.b}}]),t}()).\u0275fac=function(t){return new(t||H)(s.Yb(a.g))},H.\u0275cmp=s.Sb({type:H,selectors:[["app-paipan"]],decls:6,vars:5,consts:[[4,"ngIf"],["vertical","top=","horizontal","end","slot","fixed",4,"ngIf"],["vertical","top=","horizontal","end","slot","fixed"],["color","light",3,"click"],["slot","start"],[3,"click"],["slot","end"],[2,"margin-right","10px",3,"click"]],template:function(t,e){1&t&&(s.dc(0,"ion-content"),s.Gc(1,R,1,0,"app-wannianli",0),s.Gc(2,P,1,0,"app-paigua",0),s.Gc(3,F,1,0,"app-paibazi",0),s.Gc(4,L,7,0,"ion-fab",1),s.cc(),s.Gc(5,X,10,0,"ion-footer",0)),2&t&&(s.Nb(1),s.vc("ngIf","\u4e07\u5e74\u5386"===e.Child),s.Nb(1),s.vc("ngIf","\u516d\u723b"===e.Child),s.Nb(1),s.vc("ngIf","\u516b\u5b57"===e.Child),s.Nb(1),s.vc("ngIf",e.IsWeb),s.Nb(1),s.vc("ngIf",!e.IsWeb))},directives:[o.n,i.j,k,G,_,o.p,o.q,o.r,o.Y,o.j,o.i],styles:[""]}),H),Q=n("Gfuc"),E=n("KPWP"),V=n("n7QD"),$=((J=function t(){_classCallCheck(this,t)}).\u0275mod=s.Wb({type:J}),J.\u0275inj=s.Vb({factory:function(t){return new(t||J)},imports:[[Q.a,E.a,V.a,i.b,c.c,o.Z]]}),J),U=n("9UMr"),tt=n("uEAi"),et=((q=function t(){_classCallCheck(this,t)}).\u0275mod=s.Wb({type:q}),q.\u0275inj=s.Vb({factory:function(t){return new(t||q)},imports:[[U.a,E.a,tt.a,i.b,c.c,o.Z]]}),q),nt=((A=function t(){_classCallCheck(this,t)}).\u0275mod=s.Wb({type:A}),A.\u0275inj=s.Vb({factory:function(t){return new(t||A)},imports:[[i.b,c.c,o.Z]]}),A);n.d(e,"PaipanPageModule",(function(){return at}));var it,ct=[{path:"",component:K}],at=((it=function t(){_classCallCheck(this,t)}).\u0275mod=s.Wb({type:it}),it.\u0275inj=s.Vb({factory:function(t){return new(t||it)},imports:[[i.b,c.c,o.Z,$,et,nt,a.j.forChild(ct)]]}),it)}}]);