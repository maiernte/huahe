function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0eVs":function(n,t){},"2QJI":function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"c",(function(){return l})),e.d(t,"d",(function(){return p})),e.d(t,"b",(function(){return d}));var i=e("ZtG1"),r=function(){var n=function(){function n(t,e){_classCallCheck(this,n),this.index=t,this.name=e}return _createClass(n,[{key:"Ref",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!n.HuahePianCai;e&&(i=!e);var r=this.Index%2==t.Index%2,s=this.WuXing,a=t.WuXing;return s.Ke===a.Index?r?["\u4e03\u6740","\u6740"]:["\u6b63\u5b98","\u5b98"]:s.Sheng===a.Index?r?["\u67ad\u795e","\u67ad"]:["\u6b63\u5370","\u5370"]:a.Ke===s.Index?r!==i?["\u6b63\u8d22","\u8d22"]:["\u504f\u8d22","\u624d"]:a.Sheng===s.Index?r?["\u98df\u795e","\u98df"]:["\u4f24\u5b98","\u4f24"]:r?["\u6bd4\u80a9","\u6bd4"]:["\u52ab\u8d22","\u52ab"]}},{key:"GetChangSheng",value:function(t){var e=n.Shuitugongchangsheng;t&&(e=t);var i=e?n.changshengIndexes_shuitu:n.changshengIndexes;return this.Index%2==0?i[Math.floor(this.Index/2)]:(i[Math.floor((this.Index-1)/2)]+7)%12}},{key:"Name",get:function(){return this.name}},{key:"Index",get:function(){return this.index}},{key:"WuXing",get:function(){var n=Math.floor(this.Index/2);return n=(n+2)%5,Object(i.a)(n)}},{key:"ChangSheng",get:function(){return this.GetChangSheng(null)}},{key:"QiYueGan",get:function(){var n=this.Index%5*2;return n=(n+2)%10}},{key:"QiShiGan",get:function(){return this.Index%5*2}}]),n}();return n.changshengIndexes=[11,2,2,5,8],n.changshengIndexes_shuitu=[11,2,8,5,8],n.Shuitugongchangsheng=!1,n.HuahePianCai=!1,n}(),s=new Array;function a(){10!==s.length&&(s.push(new r(0,"\u7532")),s.push(new r(1,"\u4e59")),s.push(new r(2,"\u4e19")),s.push(new r(3,"\u4e01")),s.push(new r(4,"\u620a")),s.push(new r(5,"\u5df1")),s.push(new r(6,"\u5e9a")),s.push(new r(7,"\u8f9b")),s.push(new r(8,"\u58ec")),s.push(new r(9,"\u7678")))}var u=function(){var n=function(){function n(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;_classCallCheck(this,n),this.index=t,this.name=e,this.gans=i,this.gans2=r,r||(this.gans2=this.gans)}return _createClass(n,[{key:"ChangSheng",value:function(n){return this.GetChangSheng(n,void 0)}},{key:"Ref",value:function(n){var t=this.Index%2==n.Index%2,e=this.WuXing,i=n.WuXing;return e.Ke===i.Index?t?["\u4e03\u6740","\u6740"]:["\u6b63\u5b98","\u5b98"]:e.Sheng===i.Index?t?["\u6b63\u5370","\u5370"]:["\u67ad\u795e","\u67ad"]:i.Ke===e.Index?t?["\u6b63\u8d22","\u8d22"]:["\u504f\u8d22","\u624d"]:i.Sheng===e.Index?t?["\u4f24\u5b98","\u4f24"]:["\u98df\u795e","\u98df"]:t?["\u6bd4\u80a9","\u6bd4"]:["\u52ab\u8d22","\u52ab"]}},{key:"GetChangSheng",value:function(t,e){for(var i=t.GetChangSheng(e),r=t.Index%2==0?1:-1,s=0;s<12;s++)if((i+s*r+12)%12===this.Index)return n.changShengDefs[s];return"Error"}},{key:"Name",get:function(){return this.name}},{key:"Index",get:function(){return this.index}},{key:"WuXing",get:function(){switch(this.Index){case 2:case 3:return Object(i.a)("\u6728");case 5:case 6:return Object(i.a)("\u706b");case 8:case 9:return Object(i.a)("\u91d1");case 0:case 11:return Object(i.a)("\u6c34");default:return Object(i.a)("\u571f")}}},{key:"CGan",get:function(){var n=new Array,t=r.HuahePianCai?this.gans:this.gans2,e=!0,i=!1,s=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done);e=!0){var o=a.value;n.push(f(o))}}catch(h){i=!0,s=h}finally{try{e||null==u.return||u.return()}finally{if(i)throw s}}return n}}]),n}();return n.changShengDefs=["\u957f\u751f","\u6c90\u6d74","\u51a0\u5e26","\u4e34\u5b98","\u5e1d\u65fa","\u8870","\u75c5","\u6b7b","\u5893","\u7edd","\u80ce","\u517b"],n}(),o=new Array;function h(){12!==o.length&&(o.push(new u(0,"\u5b50",[9])),o.push(new u(1,"\u4e11",[9,7,5])),o.push(new u(2,"\u5bc5",[0,2,5],[0,2,4])),o.push(new u(3,"\u536f",[1])),o.push(new u(4,"\u8fb0",[1,4,9])),o.push(new u(5,"\u5df3",[2,4,6])),o.push(new u(6,"\u5348",[3],[3,5])),o.push(new u(7,"\u672a",[1,3,5])),o.push(new u(8,"\u7533",[5,6,8])),o.push(new u(9,"\u9149",[7])),o.push(new u(10,"\u620c",[3,4,7])),o.push(new u(11,"\u4ea5",[0,4,8],[0,8])))}var c=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"ChangSheng",get:function(){return r.Shuitugongchangsheng},set:function(n){r.Shuitugongchangsheng=n||!1}},{key:"Huahe",get:function(){return r.HuahePianCai},set:function(n){r.HuahePianCai=n||!1}}]),n}();function f(n){if(a(),"string"==typeof n){var t=s.filter((function(t){return t.Name===n}));if(1===t.length)return t[0]}else if("number"==typeof n&&n>=0&&n<=9)return s[n];throw new Error("Parameter Error of Gan: "+n+" is not valiad")}function g(){return a(),s.map((function(n){return n.Name}))}function l(n){if(h(),"string"==typeof n){"\u620d"===n&&(n="\u620c");var t=o.filter((function(t){return t.Name===n}));if(1===t.length)return t[0]}else if("number"==typeof n&&n>=0&&n<=11)return o[n];throw new Error("Parameter Error of Gan: "+n+" is not valiad")}function p(){return h(),o.map((function(n){return n.Name}))}var d=function(){var n=function(){function n(t){if(_classCallCheck(this,n),Array.isArray(t)&&2===t.length)this.Gan=f(t[0]),this.Zhi=l(t[1]);else if("string"==typeof t)this.Gan=2===t.length?f(t.substring(0,1)):null,this.Zhi=l(2===t.length?t.substring(1,2):t.substring(0,1));else if("number"==typeof t&&t>=0&&t<=59){var e=t%12;this.Gan=f(t%10),this.Zhi=l(e)}if(this.Config(r.Shuitugongchangsheng,r.HuahePianCai),null==this.Zhi||void 0===this.Zhi)throw new Error("GanZhi Error: parameter "+t+" is not valid.")}return _createClass(n,[{key:"Config",value:function(n,t){this.shuitu=n||!1,this.huahe=t||!1}},{key:"calcIndex",value:function(n,t){var e=(t-n+12)%12/2;return(e=(6-e)%6*10)+n}},{key:"Name",get:function(){return this.Gan?this.Gan.Name+this.Zhi.Name:this.Zhi.Name}},{key:"Index",get:function(){return this.Gan?this.calcIndex(this.Gan.Index,this.Zhi.Index):this.Zhi.Index}},{key:"NaYin",get:function(){return null==this.Gan?"":n.NaYins[Math.floor(this.Index/2)]}},{key:"Shen10Gan",get:function(){if(!this.Base)throw new Error("BaseGan is not defined.");return this===this.Base?["\u65e5\u4e3b","\u65e5"]:this.Gan.Ref(this.Base.Gan,this.huahe)}},{key:"Shen10Zhi",get:function(){if(!this.Base)throw new Error("BaseGan is not defined.");return this.Zhi.Ref(this.Base.Gan)}},{key:"ChangSheng",get:function(){return this.Base?this.Zhi.GetChangSheng(this.Base.Gan,this.shuitu):""}}],[{key:"GanZhiNames",get:function(){for(var n=g(),t=p(),e=new Array,i=0;i<n.length;i++)for(var r=0;r<t.length;r++)i%2==r%2&&e.push(n[i]+t[r]);return e}}]),n}();return n.NaYins=["\u6d77\u4e2d\u91d1","\u7089\u4e2d\u706b","\u5927\u6797\u6728","\u8def\u65c1\u571f","\u5251\u5cf0\u91d1","\u5c71\u5934\u706b","\u6da7\u4e0b\u6c34","\u57ce\u5899\u571f","\u767d\u8721\u91d1","\u6768\u67f3\u6728","\u6cc9\u4e2d\u6c34","\u5c4b\u4e0a\u571f","\u9739\u96f3\u706b","\u677e\u67cf\u6728","\u957f\u6d41\u6c34","\u6c99\u4e2d\u91d1","\u5c71\u4e0b\u706b","\u5e73\u5730\u6728","\u58c1\u4e0a\u571f","\u91d1\u7b94\u91d1","\u4f5b\u706f\u706b","\u5929\u6cb3\u6c34","\u5927\u9a7f\u571f","\u9497\u948f\u91d1","\u6851\u677e\u6728","\u5927\u6eaa\u6c34","\u6c99\u4e2d\u571f","\u5929\u4e0a\u706b","\u77f3\u69b4\u6728","\u5927\u6d77\u6c34"],n}()},LTmD:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return h})),e.d(t,"b",(function(){return c}));var i=e("c7TG"),r=(e("0eVs"),e("2QJI")),s=e("2Vo4"),a=e("fXoL"),u=e("e8h1"),o=function(){var n=function(){function n(t,e){var i=this;_classCallCheck(this,n),this.storage=t,this.plateform=e,this.user=null,this.lastsync=0,this.encryp="false",this.dbReady=new s.a(!1),this.dbReady.next(!1),this.ReadSettingFromDB().then((function(n){console.log("Device width",e.width(),e.height())})).finally((function(){i.dbReady.next(!0)}))}return _createClass(n,[{key:"Avatar",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"female"===(n||"")?"assets/img/user_female.png":"assets/img/user_male.png"}},{key:"UserRolers",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=[];return(1&(n=n||0))>0&&t.push({name:"\u6ce8\u518c\u7528\u6237",icon:"assets/img/roles/r_register.png",value:1}),(2&n)>0&&t.push({name:"VIP",icon:"assets/img/roles/r_vip.png",value:2}),(4&n)>0&&t.push({name:"\u534e\u9e64\u540c\u95e8",icon:"assets/img/huahe.jpg",value:4}),(8&n)>0&&t.push({name:"\u7248\u4e3b",icon:"assets/img/roles/r_admin.png",value:8}),(16&n)>0&&t.push({name:"\u516d\u723b",icon:"assets/img/roles/r_master.png",value:16}),(64&n)>0&&t.push({name:"\u98ce\u6c34",icon:"assets/img/roles/r_master.png",value:64}),(32&n)>0&&t.push({name:"\u547d\u7406",icon:"assets/img/roles/r_master.png",value:32}),(128&n)>0&&t.push({name:"\u5927\u5b97\u5e08",icon:"assets/img/roles/r_supermaster.png",value:128}),(256&n)>0&&t.push({name:"\u7ba1\u7406\u5458",icon:"assets/img/roles/r_admin.png",value:256}),t}},{key:"WaitInit",value:function(){var n=this;return new Promise((function(t,e){n.InitState.subscribe((function(n){n&&t(!0)}))}))}},{key:"ReadSettingFromDB",value:function(){var t=this,e=this.storage.get(n.APP_CONFIG).then((function(n){t.appconfig=n})).catch((function(n){return n})),i=this.storage.get(n.DB_GUA).then((function(n){t.Gua=n,t.gua.symbol=t.gua.symbol||0})).catch((function(n){return n})),r=this.storage.get(n.DB_BAZI).then((function(n){t.Bazi=n})).catch((function(n){return n})),s=this.storage.get(n.DB_USER).then((function(n){t.user=n||{id:null,created:null,modified:null,lastlogin:null,name:null,password:null,email:null,phone:null,vip:null,roller:null,verified:null}})).catch((function(n){return n})),a=this.storage.get(n.DB_LASTSYNC).then((function(n){t.lastsync=n})).catch((function(n){return n})),u=this.storage.get(n.USER_ENCRYP).then((function(n){t.encryp=n||t.encryp})).catch((function(n){return n})),o=this.storage.get(n.FORUM_SET).then((function(n){t.forum=n})).catch((function(n){return n}));return this.storage.get(n.Calendar).then((function(n){t.calenadr=n||{showGanZhi:!0}})).catch((function(n){return n})),Promise.all([e,i,r,s,a,u,o]).then((function(n){return n}))}},{key:"ResetDB",value:function(){return this.storage.clear()}},{key:"ShowData",value:function(n){"*"!==n?this.storage.get(n).then((function(t){if(t){var e=function(n){try{return"string"==typeof n?JSON.parse(n):n}catch(t){return null}}(t)||t;console.log("Show ".concat(n),e)}else console.log("Show ".concat(n),t)})).catch((function(t){console.log("Show ".concat(n," failed"),t)})):this.storage.keys().then((function(n){console.log(n)}))}},{key:"IsIos",get:function(){return this.plateform.is("ios")}},{key:"IsDevice",get:function(){return this.plateform.is("mobile")&&!this.plateform.is("mobileweb")}},{key:"IsSmallScreen",get:function(){return this.plateform.width()<768||this.plateform.isPortrait()}},{key:"DeviceHeight",get:function(){return this.plateform.height()}},{key:"DeviceWidth",get:function(){return this.plateform.width()}},{key:"InitState",get:function(){return this.dbReady.asObservable()}},{key:"AppConfig",get:function(){return this.appconfig||n.default_appconfig},set:function(t){this.appconfig=t,this.storage.set(n.APP_CONFIG,this.appconfig)}},{key:"Encryp",get:function(){return"true"===this.encryp.toLowerCase()},set:function(t){this.encryp=t?"true":"false",this.storage.set(n.USER_ENCRYP,this.encryp)}},{key:"Gua",get:function(){return this.gua||n.defalt_gua_setting},set:function(t){this.gua=t||n.defalt_gua_setting,this.storage.set(n.DB_GUA,this.gua)}},{key:"Bazi",get:function(){return this.bazi||n.default_bazi_setting},set:function(t){this.bazi=t||n.default_bazi_setting,r.a.ChangSheng=this.bazi.shuitu,r.a.Huahe=this.bazi.huahecai,this.storage.set(n.DB_BAZI,this.bazi)}},{key:"CalendarSetting",get:function(){return this.calenadr},set:function(t){this.calenadr=t,this.storage.set(n.Calendar,this.calenadr)}},{key:"HasUser",get:function(){return!!this.User&&!!this.User.id&&""!==this.User.id}},{key:"User",get:function(){return this.user},set:function(t){this.user=t,t?this.storage.set(n.DB_USER,this.user):(this.user=null,this.storage.remove(n.DB_USER))}},{key:"LastSync",get:function(){return this.lastsync},set:function(t){this.lastsync=t,this.storage.set(n.DB_LASTSYNC,t)}}]),n}();return n.SAVELOCAL="local",n.SAVEBLOBAL="global",n.GUASYMBOLS=[["\u25fc\ufe0e\u25fb\ufe0e\u25fc\ufe0e","\u25fc\ufe0e\u25fc\ufe0e\u25fc\ufe0e","\u25fc\ufe0e&ensp;\u25fc\ufe0e"],["=","-","="]],n.Product=!1,n.DB_BAZI="bazi_setting",n.DB_GUA="gua_setting",n.DB_USER="userinfo",n.DB_LASTSYNC="lastsync",n.APP_CONFIG="appconfig",n.USER_ENCRYP="encryp",n.FORUM_SET="forum_setting",n.Calendar="calendar_setting",n.defalt_gua_setting={fontsize:15,shensha:4,shortname:!1,symbol:0},n.default_bazi_setting={fontsize:15,shortname:!0,shuitu:!0,shensha:4,huahecai:!0,yuanju:{cangan:!0,nayin:!0,changshen:!0},shiyun:{cangan:!1,nayin:!1,changshen:!1,shensha:!1}},n.default_forum_setting={showimg:!0,showgua:!1,showbazi:!1,imgOut:!1,guaOut:!1,baziOut:!0},n.default_appconfig={app:{version:"2.1.0",accessToken:"i8uel@%3ki$03kRL",serverUrl:"https://1051463780297201.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/huaheservice/sqlquery"},website:"https://maiernte.gitee.io/huahe",document:"https://maiernte.gitee.io/huahedocument"},n.\u0275fac=function(t){return new(t||n)(a.hc(u.b),a.hc(i.cb))},n.\u0275prov=a.Ub({token:n,factory:n.\u0275fac,providedIn:"root"}),n}();function h(n,t){var e=Object.getOwnPropertyNames(n),i=Object.getOwnPropertyNames(t);if(e.length!==i.length)return!1;for(var r=0;r<e.length;r++){var s=e[r];if("object"!=typeof n[s]){if(n[s]!==t[s])return!1}else if(!1===h(n[s],t[s]))return!1}return!0}function c(n){if(!n)return n;var t;if([Number,String,Boolean].forEach((function(e){n instanceof e&&(t=e(n))})),void 0===t)if("[object Array]"===Object.prototype.toString.call(n))t=[],n.forEach((function(n,e,i){t[e]=c(n)}));else if("object"==typeof n)if(n.nodeType&&"function"==typeof n.cloneNode)t=n.cloneNode(!0);else if(n.prototype)t=n;else if(n instanceof Date)t=new Date(n);else for(var e in t={},n)t[e]=c(n[e]);else t=n;return t}},Y6BA:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return r})),e.d(t,"d",(function(){return s})),e.d(t,"c",(function(){return a})),String.prototype.int2str=function(n,t){var e=this.toString(null==t||void 0===t?2:t);if(e.length>=n)return e;for(;e.length<n;)e="0"+e;return e},String.prototype.parseDate=function(){var n=this.replace(/[\u5e74\u6708\u65e5\u65f6\u5206\u79d2:\uff1a,\uff0c\ \/-]/g,"|").split("|").removeEmpty().select((function(n){return parseInt(n,10)}));return new Date(n[0],n[1]-1,n[2],n[3]||0,n[4]||0,n[5]||0)},String.prototype.IsNullOrEmpty=function(){return void 0===this||null==this||""===this},Array.prototype.select=function(n){var t=[];return this.forEach((function(e){t.push(n(e))})),t},Array.prototype.where=function(n){var t=[];return this.forEach((function(e){n(e)&&t.push(e)})),t},Array.prototype.distinct=function(){for(var n={},t=[],e=0,i=this.length;e<i;++e)n.hasOwnProperty(this[e])||(t.push(this[e]),n[this[e]]=1);return t},Array.prototype.insert=function(n,t){this.splice(n,0,t)},Array.prototype.removeEmpty=function(){return this.filter((function(n){return!!n&&""!==(n||"").toString()}))},Array.prototype.sortByKey=function(n){return this.sort((function(t,e){var i=t[n]||0,r=e[n]||0;return i<r?-1:i>r?1:0}))},Date.prototype.toChinaStr=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.getFullYear()+"\u5e74"+(this.getMonth()+1)+"\u6708"+this.getDate()+"\u65e5";return!0===n&&(t+=" "+this.getHours().toString().int2str(2,10)+"\u65f6",t+=this.getMinutes().toString().int2str(2,10)+"\u5206",t+=this.getSeconds().toString().int2str(2,10)+"\u79d2"),t},Date.prototype.toDatabaseStr=function(){var n=this.getFullYear()+"-"+(this.getMonth()+1).toString().int2str(2,10)+"-"+this.getDate().toString().int2str(2,10);return n+=" "+this.getHours().toString().int2str(2,10)+":",n+=this.getMinutes().toString().int2str(2,10)+":",n+=this.getSeconds().toString().int2str(2,10)};var i="web",r={id:"anonym",created:0,modified:0,lastlogin:0,name:null,password:"",email:null,phone:null,vip:0,verified:0,encryp:"null",roller:0,avatar:"assets/img/user_male.png"};function s(n,t,e){return e.indexOf(n)===t}function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var t=16*Math.random()|0;return("x"===n?t:3&t|8).toString(16)}));return n&&"number"==typeof n?t.substring(0,n):t}},ZtG1:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var i=function(){function n(t,e){_classCallCheck(this,n),this.name=t,this.index=e}return _createClass(n,[{key:"Ref",value:function(n){return this.Ke==n.Index?["\u5b98\u9b3c","\u5b98"]:this.Sheng==n.Index?["\u7236\u6bcd","\u7236"]:n.Ke==this.index?["\u59bb\u8d22","\u8d22"]:n.Sheng==this.index?["\u5b50\u5b59","\u5b59"]:["\u5144\u5f1f","\u5144"]}},{key:"Name",get:function(){return this.name}},{key:"Index",get:function(){return this.index}},{key:"Ke",get:function(){return(this.index+2)%5}},{key:"Sheng",get:function(){return(this.index+1)%5}}]),n}(),r=[];function s(n){if("number"==typeof n){if(n>=0&&n<=4)return r[n];throw new RangeError("WuXing index out of range: "+n)}var t=r.filter((function(t){return t.Name==n}));if(t&&1==t.length)return t[0];throw new RangeError("WuXing name out of range: "+n)}r.push(new i("\u91d1",0)),r.push(new i("\u6c34",1)),r.push(new i("\u6728",2)),r.push(new i("\u706b",3)),r.push(new i("\u571f",4))}}]);