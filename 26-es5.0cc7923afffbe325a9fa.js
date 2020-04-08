function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"+cLM":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("2QJI"),a=e("l+bK"),o=e("uq+3"),s=function(t){return t[t.DaYun=0]="DaYun",t[t.LiuNian=1]="LiuNian",t[t.XiaoYun=2]="XiaoYun",t}({}),r=function(){var t=function(){function t(n,e,i,a){_classCallCheck(this,t),this.Start=n,this.GZ=e,this.birthYear=i,this.type=a}return _createClass(t,[{key:"Old",get:function(){return this.Start.getFullYear()-this.birthYear}},{key:"End",get:function(){return this.type==s.DaYun?new Date(this.Start.getTime()+t.tenyear):null}},{key:"Year",get:function(){return this.Start.getFullYear()}}]),t}();return t.oneday=864e5,t.oneyear=365.25*t.oneday,t.tenyear=10*t.oneyear,t}(),c=function(){function t(n,e){_classCallCheck(this,t),this.Birthday=n,this.Gender=e,this.bazi=a.b.calcBazi(this.Birthday.getFullYear(),this.Birthday.getMonth()+1,this.Birthday.getDate(),this.Birthday.getHours(),this.Birthday.getMinutes()),this.bazi.Y.Base=this.bazi.D,this.bazi.M.Base=this.bazi.D,this.bazi.D.Base=this.bazi.D,this.bazi.T.Base=this.bazi.D,this.initShenSha(),this.initDaYun()}return _createClass(t,[{key:"CalcShenSha",value:function(t){var n=new Array,e=!0,i=!1,a=void 0;try{for(var o,s=this.ShenSha[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){var r=o.value;1==r.Is(t)&&n.push(r.Name)}}catch(c){i=!0,a=c}finally{try{e||null==s.return||s.return()}finally{if(i)throw a}}return n.join("\u3001")}},{key:"CalcLiuNian",value:function(t,n){for(var e=new Array,o=t-1984;o<0;)o+=60;o%=60;var c=this.T.Index+(t-this.Birthday.getFullYear()+1)*this.Direction;c=(c+600)%60;for(var h=t;h<=n;h++){var l=new i.b(o);l.Base=this.D,l.ShenSha=this.CalcShenSha(l);var u=new i.b(c);u.Base=this.D,u.ShenSha=this.CalcShenSha(u);var b=a.b.getSolarTerms(h,2)[0],d=new r(b,l,this.Birthday.getFullYear(),s.LiuNian);d.GZ2=u,e.push(d),o+=1,o%=60,c=((c+=1*this.Direction)+60)%60}return e}},{key:"equal",value:function(t){return this.Gender==t.Gender&&this.Birthday.toString()==t.Birthday.toString()}},{key:"initShenSha",value:function(){this.shenshas=new Array;var t=this.Y.Index,n=this.M.Index,e=this.D.Index,i=this.T.Index;this.shenshas.push(new o.a("\u5c06\u661f",[e])),this.shenshas.push(new o.a("\u7f8a\u5203",[e])),this.shenshas.push(new o.a("\u7984\u795e",[e])),this.shenshas.push(new o.a("\u534e\u76d6",[e])),this.shenshas.push(new o.a("\u6587\u660c",[e])),this.shenshas.push(new o.a("\u5b66\u5802",[e])),this.shenshas.push(new o.a("\u5929\u559c",[n])),this.shenshas.push(new o.a("\u5929\u533b",[n])),this.shenshas.push(new o.a("\u8d35\u4eba",[e])),this.shenshas.push(new o.a("\u9a7f\u9a6c",[t,e])),this.shenshas.push(new o.a("\u6843\u82b1",[t,e])),this.shenshas.push(new o.a("\u707e\u715e",[t,e])),this.shenshas.push(new o.a("\u52ab\u715e",[t,e])),this.shenshas.push(new o.a("\u65ec\u7a7a",[e])),this.shenshas.push(new o.a("\u9b41\u7f61",[t,n,e,i])),this.shenshas.push(new o.a("\u56db\u5e9f",[t,n,e,i])),this.shenshas.push(new o.a("\u5b64\u8fb0\u5be1\u5bbf",[t,n,e,i])),this.shenshas.push(new o.a("\u9634\u5dee\u9633\u9519",[e]));var a=new o.a("\u5929\u7f57\u5730\u7f51",[t,n,e,i]);a.Gender=this.Gender,this.shenshas.push(a)}},{key:"initDaYun",value:function(){this.dayun=new Array;var t=this.qiDaYun(),n=this.Direction;t.getFullYear(),this.Birthday.getFullYear();for(var e=0;e<10;e++){var a=new i.b((this.M.Index+(e+1)*n+60)%60);a.Base=this.bazi.D;var o=new Date(t.getTime()+315576e6*e),c=new r(o,a,this.Birthday.getFullYear(),s.DaYun);this.dayun.push(c)}}},{key:"qiDaYun",value:function(){var t=a.b.findNextJieQi(this.Birthday,("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)),n=Math.abs(t.getTime()-this.Birthday.getTime())/6e4*2;return new Date(this.Birthday.getTime()+36e5*n)}},{key:"Y",get:function(){return this.bazi.Y}},{key:"M",get:function(){return this.bazi.M}},{key:"D",get:function(){return this.bazi.D}},{key:"T",get:function(){return this.bazi.T}},{key:"All",get:function(){return[this.bazi.Y,this.bazi.M,this.bazi.D,this.bazi.T]}},{key:"Direction",get:function(){return("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)}},{key:"MingGong",get:function(){if(this.minggong)return this.minggong;var t=this.M.Zhi.Index+1+this.T.Zhi.Index+1,n=t<14?14-t:26-t;return new i.b([(this.Y.Gan.QiYueGan+((n-=1)-2+12)%12)%10,n])}},{key:"TaiYuan",get:function(){return new i.b([(this.M.Gan.Index+1)%10,(this.M.Zhi.Index+3)%12])}},{key:"WuXings",get:function(){if(this.wuxings)return this.wuxings;var t=[0,0,0,0,0];return t[this.Y.Gan.WuXing.Index]+=1,t[this.M.Gan.WuXing.Index]+=1,t[this.D.Gan.WuXing.Index]+=1,t[this.T.Gan.WuXing.Index]+=1,t[this.Y.Zhi.WuXing.Index]+=1,t[this.M.Zhi.WuXing.Index]+=1,t[this.D.Zhi.WuXing.Index]+=1,t[this.T.Zhi.WuXing.Index]+=1,this.wuxings=[{Name:"\u91d1",Num:t[0]},{Name:"\u6c34",Num:t[1]},{Name:"\u6728",Num:t[2]},{Name:"\u706b",Num:t[3]},{Name:"\u571f",Num:t[4]}],this.wuxings}},{key:"ShenSha",get:function(){return this.shenshas}},{key:"DaYun",get:function(){return this.dayun}}]),t}()},EUVb:function(t,n,e){"use strict";e.r(n);var i=e("ofXK"),a=e("3Pt+"),o=e("tyNb"),s=e("c7TG"),r=e("fXoL"),c=e("mrSG"),h=e("l+bK");function l(t,n){if(1&t&&(r.Zb(0,"ion-select-option",12),r.xc(1),r.Yb()),2&t){var e=n.$implicit;r.oc("value",n.index),r.Mb(1),r.zc("",e,"\u6708")}}function u(t,n){if(1&t&&(r.Zb(0,"ion-select-option",12),r.xc(1),r.Yb()),2&t){var e=n.$implicit;r.oc("value",n.index),r.Mb(1),r.yc(e)}}var b,d=((b=function(){function t(n){_classCallCheck(this,t),this.modalCtrl=n}return _createClass(t,[{key:"close",value:function(){this.modalCtrl.dismiss({result:this.NlSearch.Result})}},{key:"searchNL",value:function(){var t=this.NlSearch.Year,n=parseInt(this.NlSearch.Month.toString(),10)+1,e=parseInt(this.NlSearch.Date.toString(),10)+1,i="";!0===this.NlSearch.Leap&&(n*=-1,i="\u95f0"),console.log("search ..",t,n,e);var a=h.b.SearchNongli(t,n,e);null!=a?(this.NlSearch.Result=a,this.NlSearch.ResultTX=a.toChinaStr()):(this.NlSearch.ResultTX="\u627e\u4e0d\u5230\u519c\u5386 "+this.NlSearch.Year+"\u5e74 "+i+h.b.M_ChineseMonthNames[this.NlSearch.Month]+"\u6708 "+h.b.M_DayNames[this.NlSearch.Date],this.NlSearch.Result=null)}},{key:"ngOnInit",value:function(){var t=new Date(Date.now());this.NlSearch={Year:t.getFullYear(),MonthOptions:h.b.M_ChineseMonthNames,DateOptions:h.b.M_DayNames,Month:0,Date:0,Leap:!1,Result:null,ResultTX:""}}},{key:"Year",get:function(){return this.year},set:function(t){this.year=t}},{key:"CurrentYear",get:function(){return new Date(Date.now()).getFullYear()}}]),t}()).\u0275fac=function(t){return new(t||b)(r.Wb(s.cb))},b.\u0275cmp=r.Qb({type:b,selectors:[["app-searchnoli"]],decls:31,vars:8,consts:[["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],["position","floating"],["type","number","max","2010","min","1640",3,"placeholder","ngModel","ngModelChange"],["placeholder","\u6b63\u6708","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","\u521d\u4e00","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["slot","start",3,"click"],[1,"ion-text-wrap"],[3,"value"]],template:function(t,n){1&t&&(r.Zb(0,"ion-header"),r.Zb(1,"ion-toolbar",0),r.Zb(2,"ion-buttons",1),r.Zb(3,"ion-button",2),r.hc("click",(function(){return n.close()})),r.Xb(4,"ion-icon",3),r.Yb(),r.Yb(),r.Zb(5,"ion-title"),r.xc(6,"\u519c\u5386\u8f6c\u516c\u5386"),r.Yb(),r.Yb(),r.Yb(),r.Zb(7,"ion-content"),r.Zb(8,"ion-item"),r.Zb(9,"ion-label",4),r.xc(10,"\u5e74\u4efd(1640 ~ 20100)"),r.Yb(),r.Zb(11,"ion-input",5),r.hc("ngModelChange",(function(t){return n.NlSearch.Year=t})),r.Yb(),r.Yb(),r.Zb(12,"ion-item"),r.Zb(13,"ion-label"),r.xc(14,"\u6708\u4efd"),r.Yb(),r.Zb(15,"ion-select",6),r.hc("ngModelChange",(function(t){return n.NlSearch.Month=t})),r.wc(16,l,2,2,"ion-select-option",7),r.Yb(),r.Yb(),r.Zb(17,"ion-item"),r.Zb(18,"ion-label"),r.xc(19,"\u65e5\u5b50"),r.Yb(),r.Zb(20,"ion-select",8),r.hc("ngModelChange",(function(t){return n.NlSearch.Date=t})),r.wc(21,u,2,2,"ion-select-option",7),r.Yb(),r.Yb(),r.Zb(22,"ion-item"),r.Zb(23,"ion-label"),r.xc(24,"\u95f0\u6708"),r.Yb(),r.Zb(25,"ion-toggle",9),r.hc("ngModelChange",(function(t){return n.NlSearch.Leap=t})),r.Yb(),r.Yb(),r.Zb(26,"ion-item"),r.Zb(27,"ion-button",10),r.hc("click",(function(){return n.searchNL()})),r.xc(28,"\u8ba1\u7b97"),r.Yb(),r.Zb(29,"ion-label",11),r.xc(30),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Mb(11),r.oc("placeholder",n.CurrentYear)("ngModel",n.NlSearch.Year),r.Mb(4),r.oc("ngModel",n.NlSearch.Month),r.Mb(1),r.oc("ngForOf",n.NlSearch.MonthOptions),r.Mb(4),r.oc("ngModel",n.NlSearch.Date),r.Mb(1),r.oc("ngForOf",n.NlSearch.DateOptions),r.Mb(4),r.oc("ngModel",n.NlSearch.Leap),r.Mb(5),r.zc("\u67e5\u8be2\u7ed3\u679c\uff1a",n.NlSearch.ResultTX,""))},directives:[s.s,s.Y,s.k,s.j,s.t,s.W,s.o,s.w,s.C,s.v,s.db,a.c,a.d,s.P,s.hb,i.i,s.X,s.c,s.Q],styles:[""]}),b);function g(t,n){if(1&t){var e=r.ac();r.Zb(0,"ion-col",19),r.hc("click",(function(){r.rc(e);var t=n.$implicit;return r.jc(2).changeDate(t)})),r.Zb(1,"ion-label",20),r.xc(2),r.Yb(),r.Xb(3,"br"),r.Zb(4,"ion-label",21),r.xc(5),r.Yb(),r.Yb()}if(2&t){var i=n.$implicit,a=r.jc(2);r.Ob("xmonth",i.Month!=a.Month)("active",i.Date==a.Date&&i.Month==a.Month),r.Mb(1),r.Ob("xmonth",i.Month!=a.Month)("active",i.Date==a.Date&&i.Month==a.Month),r.Mb(1),r.yc(i.Display),r.Mb(2),r.Ob("xmonth",i.Month!=a.Month)("active",i.Date==a.Date&&i.Month==a.Month),r.Mb(1),r.yc(i.DisplayChi)}}function f(t,n){if(1&t&&(r.Zb(0,"ion-row",17),r.wc(1,g,6,14,"ion-col",18),r.Yb()),2&t){var e=n.$implicit;r.Mb(1),r.oc("ngForOf",e.Dates)}}var p,m=((p=function(){function t(n){_classCallCheck(this,t),this.modalController=n,this.Weeks=[],this.searchModel=!1,this.inited=!1}return _createClass(t,[{key:"calcFirstDayInCalendarTable",value:function(t,n){var e=new Date(t,n-1,1),i=e.getDay();return i=0==i?7:i,h.b.addDays(-1*i,e)}},{key:"showModal",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:d});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:case"end":return t.stop()}}),t,this)})))}},{key:"initWeeks",value:function(t,n,e){for(var i=this.calcFirstDayInCalendarTable(t,n),a=[],o=0;o<6;o++){var s=new y;a.push(s);for(var r=0;r<7;r++){var c=new h.a(i);s.Dates.push(c),i=h.b.addDays(1,i),c.Month==n&&c.Date==e&&(this.TyDate=c)}}this.Weeks=a,this.Month=n,this.Date=e,this.Year=t;var l=new Date(t,n-1,e);this.SelectedDate=l.toDatabaseStr()}},{key:"initDetail",value:function(){var t=this.tyDate.JianChu;this.Good=t.Good,this.Bad=t.Bad,this.Jianchu=t.Titel+": "+t.Mean;var n="";n+=!0===this.tyDate.IsSuiPo?" \u5c81\u7834":"",n+=!0===this.tyDate.IsYuePo?" \u6708\u7834":"",n+=!0===this.tyDate.IsShangSuo?" \u4e0a\u6714":"",n+=!0===this.tyDate.IsYangGong13?" \u6768\u516c\u5341\u4e09\u5fcc":"",this.BadDay=n.trim()}},{key:"changeDate",value:function(t){var n=new Date(Date.now()),e=t?t.Year:n.getFullYear(),i=t?t.Month:n.getMonth()+1,a=t?t.Date:n.getDate();i==this.Month&&t?(this.Date=a,this.TyDate=t,this.SelectedDate=t.date.toDatabaseStr()):this.initWeeks(e,i,a)}},{key:"ngOnInit",value:function(){var t=new Date(Date.now());this.initWeeks(t.getFullYear(),t.getMonth()+1,t.getDate()),this.inited=!0}},{key:"DateGanZhi",get:function(){return"".concat(this.tyDate.GZyear,"\u5e74 ").concat(this.tyDate.GZmonth,"\u6708 ").concat(this.tyDate.GZdate,"\u65e5")}},{key:"SelectedDate",get:function(){return this.selectedDate},set:function(t){if(!1!==this.inited&&""!==t){this.selectedDate=t;var n=new Date(Date.parse(t));n.getFullYear()===this.Year&&n.getMonth()+1===this.Month&&n.getDate()===this.Date||this.initWeeks(n.getFullYear(),n.getMonth()+1,n.getDate())}}},{key:"TyDate",get:function(){return this.tyDate},set:function(t){this.tyDate=t,this.initDetail()}}]),t}()).\u0275fac=function(t){return new(t||p)(r.Wb(s.cb))},p.\u0275cmp=r.Qb({type:p,selectors:[["app-wannianli"]],decls:58,vars:6,consts:[["slot","start"],["slot","end"],[3,"click"],["fixed",""],[1,"weekend","th","cell","column"],[1,"weekday","th","cell","column"],["class","ui equal width grid ion-no-padding ion-no-margin",4,"ngFor","ngForOf"],["side","end"],["color","primary"],["slot","start","color","primary",1,"ion-no-padding"],["color","secondary"],["slot","start","color","warning",1,"ion-no-padding"],["color","warning"],["side","end",1,"ion-text-wrap"],[3,"hidden"],["slot","start","color","danger",1,"ion-no-padding"],["color","secondary",1,"ion-text-wrap"],[1,"ui","equal","width","grid","ion-no-padding","ion-no-margin"],["class","cell column month td ion-no-padding ion-no-margin",3,"xmonth","active","click",4,"ngFor","ngForOf"],[1,"cell","column","month","td","ion-no-padding","ion-no-margin",3,"click"],[1,"cell","column","month","ion-no-padding","ion-no-margin"],["position","stacked",1,"cell","column","month","ion-no-padding","ion-no-margin"]],template:function(t,n){1&t&&(r.Zb(0,"ion-header"),r.Zb(1,"ion-toolbar"),r.Zb(2,"ion-buttons",0),r.Xb(3,"ion-menu-button"),r.Yb(),r.Zb(4,"ion-buttons",1),r.Zb(5,"ion-button",2),r.hc("click",(function(){return n.showModal()})),r.xc(6,"\u519c\u5386\u53cd\u67e5"),r.Yb(),r.Yb(),r.Zb(7,"ion-title"),r.xc(8,"\u5e74\u5386"),r.Yb(),r.Yb(),r.Yb(),r.Zb(9,"ion-content"),r.Zb(10,"ion-grid",3),r.Zb(11,"ion-row"),r.Zb(12,"ion-col",4),r.xc(13,"\u5468\u65e5"),r.Yb(),r.Zb(14,"ion-col",5),r.xc(15,"\u5468\u4e00"),r.Yb(),r.Zb(16,"ion-col",5),r.xc(17,"\u5468\u4e8c"),r.Yb(),r.Zb(18,"ion-col",5),r.xc(19,"\u5468\u4e09"),r.Yb(),r.Zb(20,"ion-col",5),r.xc(21,"\u5468\u56db"),r.Yb(),r.Zb(22,"ion-col",5),r.xc(23,"\u5468\u4e94"),r.Yb(),r.Zb(24,"ion-col",4),r.xc(25,"\u5468\u516d"),r.Yb(),r.Yb(),r.wc(26,f,2,1,"ion-row",6),r.Yb(),r.Zb(27,"ion-list"),r.Zb(28,"ion-item"),r.Zb(29,"ion-label",7),r.Zb(30,"ion-text",8),r.Zb(31,"p"),r.xc(32),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(33,"ion-item"),r.Zb(34,"ion-note",9),r.Zb(35,"ion-text",8),r.Zb(36,"h3"),r.xc(37,"\u5b9c"),r.Yb(),r.Yb(),r.Yb(),r.Zb(38,"ion-label",7),r.Zb(39,"ion-text",10),r.Zb(40,"p"),r.xc(41),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(42,"ion-item"),r.Zb(43,"ion-note",11),r.Zb(44,"ion-text",12),r.Zb(45,"h3"),r.xc(46,"\u5fcc"),r.Yb(),r.Yb(),r.Yb(),r.Zb(47,"ion-label",13),r.Zb(48,"ion-text",10),r.Zb(49,"p"),r.xc(50),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(51,"ion-item",14),r.Zb(52,"ion-note",15),r.xc(53),r.Yb(),r.Zb(54,"ion-label"),r.Zb(55,"ion-text",16),r.Zb(56,"p"),r.xc(57,"\u51e1\u5c81\u7834, \u6708\u7834, \u4e0a\u6714, \u6768\u516c\u5341\u4e09\u5fcc\u7b49\u8bf8\u65e5, \u5927\u4e8b\u4e0d\u5b9c!"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Mb(26),r.oc("ngForOf",n.Weeks),r.Mb(6),r.yc(n.DateGanZhi),r.Mb(9),r.yc(n.Jianchu),r.Mb(9),r.yc(n.Bad),r.Mb(1),r.oc("hidden",""==n.BadDay),r.Mb(2),r.zc(" ",n.BadDay," "))},directives:[s.s,s.Y,s.k,s.G,s.j,s.W,s.o,s.r,s.L,s.n,i.i,s.D,s.w,s.C,s.T,s.I],styles:[".column.th.cell[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.th.cell.weekday[_ngcontent-%COMP%]{background-color:#cdc8b1}.th.cell.weekend[_ngcontent-%COMP%]{background-color:#d2691e}.month.column.cell.td[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.column.cell.month[_ngcontent-%COMP%]{background-color:#eee9e9;color:#000}.column.cell.xmonth[_ngcontent-%COMP%]{background-color:snow;color:grey}.column.cell.active[_ngcontent-%COMP%]{background-color:#6495ed;color:#000}ion-grid[_ngcontent-%COMP%]{--ion-grid-width:540px}"]}),p),y=function t(){_classCallCheck(this,t),this.Dates=[]},v=e("LvB5"),Y=e("B8lH"),w=e("LTmD"),k=e("L99X"),x=(e("0eVs"),e("ylIl")),D=e("mo90");function M(t,n){if(1&t&&r.Xb(0,"app-guaview",11),2&t){var e=r.jc();r.oc("Config",e.Config)("GuaText",e.Gua)}}var Z,C=((Z=function(){function t(n,e,i){_classCallCheck(this,t),this.modalController=n,this.setting=e,this.dbservice=i,this.smallSymbol=!1}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"SaveGua",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:D.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:e=t.sent,i=e.data,console.log("select node",i),i&&i.nodeid&&this.dbservice.SaveRecord(i.nodeid,this.gua.question,8,JSON.stringify(this.gua));case 10:case"end":return t.stop()}}),t,this)})))}},{key:"showPaiguaModal",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:v.a});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:e=t.sent,i=e.data,this.gua=i.result?i.result:null;case 10:case"end":return t.stop()}}),t,this)})))}},{key:"showSettingModal",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:Y.a,componentProps:{SettingComponent:"gua",Config:Object(w.b)(this.Config)}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:e=t.sent,i=e.data,Object(w.c)({},i.result)||!Object(w.c)(this.Config,i.result)&&(this.Config=Object(w.b)(i.result),this.guaview&&this.guaview.Reflash(this.Config));case 10:case"end":return t.stop()}}),t,this)})))}},{key:"ChangSymbol",value:function(){var t=Object(w.b)(this.config);!1===this.smallSymbol&&(t.shensha=4,t.symbol=1),this.smallSymbol=!this.smallSymbol,this.guaview.Reflash(t)}},{key:"Config",get:function(){return this.config||(this.config=Object(w.b)(this.setting.Gua)),this.config},set:function(t){t&&(this.config=t)}},{key:"Gua",get:function(){return this.gua}},{key:"HasGua",get:function(){return!!this.Gua}}]),t}()).\u0275fac=function(t){return new(t||Z)(r.Wb(s.cb),r.Wb(w.a),r.Wb(k.a))},Z.\u0275cmp=r.Qb({type:Z,selectors:[["app-paigua"]],viewQuery:function(t,n){var e;1&t&&r.Ac(x.a,!0),2&t&&r.qc(e=r.ic())&&(n.guaview=e.first)},decls:17,vars:3,consts:[["slot","start"],[3,"hidden","click"],["name","md-options"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],[1,"ion-padding"],[3,"Config","GuaText",4,"ngIf"],[3,"Config","GuaText"]],template:function(t,n){1&t&&(r.Zb(0,"ion-header"),r.Zb(1,"ion-toolbar"),r.Zb(2,"ion-buttons",0),r.Xb(3,"ion-menu-button"),r.Zb(4,"ion-button",1),r.hc("click",(function(){return n.ChangSymbol()})),r.Xb(5,"ion-icon",2),r.Yb(),r.Yb(),r.Zb(6,"ion-title"),r.xc(7,"\u516d\u723b"),r.Yb(),r.Zb(8,"ion-buttons",3),r.Zb(9,"ion-button",4),r.hc("click",(function(){return n.showPaiguaModal()})),r.Xb(10,"ion-icon",5),r.Yb(),r.Zb(11,"ion-button",4),r.hc("click",(function(){return n.showSettingModal()})),r.Xb(12,"ion-icon",6),r.Yb(),r.Zb(13,"ion-button",7),r.hc("click",(function(){return n.SaveGua()})),r.Xb(14,"ion-icon",8),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(15,"ion-content",9),r.wc(16,M,1,2,"app-guaview",10),r.Yb()),2&t&&(r.Mb(4),r.oc("hidden",!n.HasGua),r.Mb(9),r.oc("disabled",!n.HasGua),r.Mb(3),r.oc("ngIf",n.HasGua))},directives:[s.s,s.Y,s.k,s.G,s.j,s.t,s.W,s.o,i.j,x.a],styles:[""]}),Z),S=e("SRjL"),N=e("gTpY");function I(t,n){if(1&t&&(r.Zb(0,"ion-text",10),r.xc(1),r.Yb()),2&t){var e=r.jc();r.Mb(1),r.yc(e.Slogen)}}function O(t,n){if(1&t&&r.Xb(0,"app-baziview",11),2&t){var e=r.jc();r.oc("Config",e.Config)("BaziText",e.Bazi)}}var T,z=((T=function(){function t(n,e,i){_classCallCheck(this,t),this.modalController=n,this.dbservice=e,this.setting=i,this.Slogen=""}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"SaveBazi",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:D.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:e=t.sent,(i=e.data)&&i.nodeid&&this.dbservice.SaveRecord(i.nodeid,this.bazi.person,16,JSON.stringify(this.bazi));case 10:case"end":return t.stop()}}),t,this)})))}},{key:"showPaipanModal",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:S.a});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:e=t.sent,i=e.data,this.bazi=i.result?i.result:null;case 10:case"end":return t.stop()}}),t,this)})))}},{key:"showSettingModal",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:Y.a,componentProps:{SettingComponent:"bazi",Config:Object(w.b)(this.Config)}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:e=t.sent,i=e.data,Object(w.c)({},i.result)||!Object(w.c)(this.Config,i.result)&&(this.Config=Object(w.b)(i.result),this.baziview&&this.baziview.Reflash(this.Config));case 10:case"end":return t.stop()}}),t,this)})))}},{key:"typingSlogen",value:function(){var t=this;"\u7269\u683c\u800c\u540e\u77e5\u81f3\uff0c\u77e5\u81f3\u800c\u540e\u610f\u8bda\uff0c\u610f\u8bda\u800c\u540e\u5fc3\u6b63\uff0c\u5fc3\u6b63\u800c\u540e\u8eab\u4fee\uff0c\u8eab\u4fee\u800c\u540e\u5bb6\u9f50\uff0c\u5bb6\u9f50\u800c\u540e\u56fd\u6cbb\uff0c\u56fd\u6cbb\u800c\u540e\u5929\u4e0b\u5e73\u3002".split("").forEach((function(n){setTimeout((function(){t.Slogen+=n}),1e3)}))}},{key:"Config",get:function(){return this.config||(this.config=Object(w.b)(this.setting.Bazi)),this.config},set:function(t){t&&(this.config=t)}},{key:"Bazi",get:function(){return this.bazi}},{key:"HasBazi",get:function(){return!!this.bazi}}]),t}()).\u0275fac=function(t){return new(t||T)(r.Wb(s.cb),r.Wb(k.a),r.Wb(w.a))},T.\u0275cmp=r.Qb({type:T,selectors:[["app-paibazi"]],viewQuery:function(t,n){var e;1&t&&r.Ac(N.a,!0),2&t&&r.qc(e=r.ic())&&(n.baziview=e.first)},decls:16,vars:3,consts:[["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],[1,"ion-padding"],["class","slogen",4,"ngIf"],[3,"Config","BaziText",4,"ngIf"],[1,"slogen"],[3,"Config","BaziText"]],template:function(t,n){1&t&&(r.Zb(0,"ion-header"),r.Zb(1,"ion-toolbar"),r.Zb(2,"ion-buttons",0),r.Xb(3,"ion-menu-button"),r.Yb(),r.Zb(4,"ion-title"),r.xc(5,"\u516b\u5b57"),r.Yb(),r.Zb(6,"ion-buttons",1),r.Zb(7,"ion-button",2),r.hc("click",(function(){return n.showPaipanModal()})),r.Xb(8,"ion-icon",3),r.Yb(),r.Zb(9,"ion-button",2),r.hc("click",(function(){return n.showSettingModal()})),r.Xb(10,"ion-icon",4),r.Yb(),r.Zb(11,"ion-button",5),r.hc("click",(function(){return n.SaveBazi()})),r.Xb(12,"ion-icon",6),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(13,"ion-content",7),r.wc(14,I,2,1,"ion-text",8),r.wc(15,O,1,2,"app-baziview",9),r.Yb()),2&t&&(r.Mb(11),r.oc("disabled",!n.HasBazi),r.Mb(3),r.oc("ngIf",!n.HasBazi),r.Mb(1),r.oc("ngIf",n.HasBazi))},directives:[s.s,s.Y,s.k,s.G,s.W,s.j,s.t,s.o,i.j,s.T,N.a],styles:[""]}),T);function G(t,n){1&t&&r.Xb(0,"app-wannianli")}function B(t,n){1&t&&r.Xb(0,"app-paigua")}function j(t,n){1&t&&r.Xb(0,"app-paibazi")}var W,X,_,P,R=((W=function(){function t(n){_classCallCheck(this,t),this.router=n,this.Child="\u4e07\u5e74\u5386"}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||W)(r.Wb(o.g))},W.\u0275cmp=r.Qb({type:W,selectors:[["app-paipan"]],decls:14,vars:3,consts:[[4,"ngIf"],["slot","start"],[3,"click"],["slot","end"],[2,"margin-right","10px",3,"click"]],template:function(t,n){1&t&&(r.Zb(0,"ion-content"),r.wc(1,G,1,0,"app-wannianli",0),r.wc(2,B,1,0,"app-paigua",0),r.wc(3,j,1,0,"app-paibazi",0),r.Yb(),r.Zb(4,"ion-footer"),r.Zb(5,"ion-toolbar"),r.Zb(6,"ion-buttons",1),r.Zb(7,"ion-button",2),r.hc("click",(function(){return n.Child="\u4e07\u5e74\u5386"})),r.xc(8,"\u4e07\u5e74\u5386"),r.Yb(),r.Yb(),r.Zb(9,"ion-buttons",3),r.Zb(10,"ion-button",4),r.hc("click",(function(){return n.Child="\u516d\u723b"})),r.xc(11,"\u516d\u723b"),r.Yb(),r.Zb(12,"ion-button",2),r.hc("click",(function(){return n.Child="\u516b\u5b57"})),r.xc(13,"\u516b\u5b57"),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Mb(1),r.oc("ngIf","\u4e07\u5e74\u5386"===n.Child),r.Mb(1),r.oc("ngIf","\u516d\u723b"===n.Child),r.Mb(1),r.oc("ngIf","\u516b\u5b57"===n.Child))},directives:[s.o,i.j,s.q,s.Y,s.k,s.j,m,C,z],styles:[""]}),W),F=e("Gfuc"),L=e("KPWP"),Q=e("n7QD"),q=((X=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ub({type:X}),X.\u0275inj=r.Tb({factory:function(t){return new(t||X)},imports:[[F.a,L.a,Q.a,i.b,a.a,s.Z]]}),X),H=e("9UMr"),J=e("uEAi"),A=((P=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ub({type:P}),P.\u0275inj=r.Tb({factory:function(t){return new(t||P)},imports:[[H.a,L.a,J.a,i.b,a.a,s.Z]]}),P),U=((_=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ub({type:_}),_.\u0275inj=r.Tb({factory:function(t){return new(t||_)},imports:[[i.b,a.a,s.Z]]}),_);e.d(n,"PaipanPageModule",(function(){return K}));var E,$=[{path:"",component:R}],K=((E=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ub({type:E}),E.\u0275inj=r.Tb({factory:function(t){return new(t||E)},imports:[[i.b,a.a,s.Z,q,A,U,o.i.forChild($)]]}),E)}}]);