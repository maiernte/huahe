function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0eVs":function(t,n){},"2QJI":function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return l})),e.d(n,"d",(function(){return p})),e.d(n,"b",(function(){return d}));var r=e("ZtG1"),i=function(){var t=function(){function t(n,e){_classCallCheck(this,t),this.index=n,this.name=e}return _createClass(t,[{key:"Ref",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!t.HuahePianCai;e&&(r=!e);var i=this.Index%2==n.Index%2,s=this.WuXing,a=n.WuXing;return s.Ke===a.Index?i?["\u4e03\u6740","\u6740"]:["\u6b63\u5b98","\u5b98"]:s.Sheng===a.Index?i?["\u67ad\u795e","\u67ad"]:["\u6b63\u5370","\u5370"]:a.Ke===s.Index?i!==r?["\u6b63\u8d22","\u8d22"]:["\u504f\u8d22","\u624d"]:a.Sheng===s.Index?i?["\u98df\u795e","\u98df"]:["\u4f24\u5b98","\u4f24"]:i?["\u6bd4\u80a9","\u6bd4"]:["\u52ab\u8d22","\u52ab"]}},{key:"GetChangSheng",value:function(n){var e=t.Shuitugongchangsheng;n&&(e=n);var r=e?t.changshengIndexes_shuitu:t.changshengIndexes;return this.Index%2==0?r[Math.floor(this.Index/2)]:(r[Math.floor((this.Index-1)/2)]+7)%12}},{key:"Name",get:function(){return this.name}},{key:"Index",get:function(){return this.index}},{key:"WuXing",get:function(){var t=Math.floor(this.Index/2);return t=(t+2)%5,Object(r.a)(t)}},{key:"ChangSheng",get:function(){return this.GetChangSheng(null)}},{key:"QiYueGan",get:function(){var t=this.Index%5*2;return t=(t+2)%10}},{key:"QiShiGan",get:function(){return this.Index%5*2}}]),t}();return t.changshengIndexes=[11,2,2,5,8],t.changshengIndexes_shuitu=[11,2,8,5,8],t.Shuitugongchangsheng=!1,t.HuahePianCai=!1,t}(),s=new Array;function a(){10!==s.length&&(s.push(new i(0,"\u7532")),s.push(new i(1,"\u4e59")),s.push(new i(2,"\u4e19")),s.push(new i(3,"\u4e01")),s.push(new i(4,"\u620a")),s.push(new i(5,"\u5df1")),s.push(new i(6,"\u5e9a")),s.push(new i(7,"\u8f9b")),s.push(new i(8,"\u58ec")),s.push(new i(9,"\u7678")))}var u=function(){var t=function(){function t(n,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;_classCallCheck(this,t),this.index=n,this.name=e,this.gans=r,this.gans2=i,i||(this.gans2=this.gans)}return _createClass(t,[{key:"ChangSheng",value:function(t){return this.GetChangSheng(t,void 0)}},{key:"Ref",value:function(t){var n=this.Index%2==t.Index%2,e=this.WuXing,r=t.WuXing;return e.Ke===r.Index?n?["\u4e03\u6740","\u6740"]:["\u6b63\u5b98","\u5b98"]:e.Sheng===r.Index?n?["\u6b63\u5370","\u5370"]:["\u67ad\u795e","\u67ad"]:r.Ke===e.Index?n?["\u6b63\u8d22","\u8d22"]:["\u504f\u8d22","\u624d"]:r.Sheng===e.Index?n?["\u4f24\u5b98","\u4f24"]:["\u98df\u795e","\u98df"]:n?["\u6bd4\u80a9","\u6bd4"]:["\u52ab\u8d22","\u52ab"]}},{key:"GetChangSheng",value:function(n,e){for(var r=n.GetChangSheng(e),i=n.Index%2==0?1:-1,s=0;s<12;s++)if((r+s*i+12)%12===this.Index)return t.changShengDefs[s];return"Error"}},{key:"Name",get:function(){return this.name}},{key:"Index",get:function(){return this.index}},{key:"WuXing",get:function(){switch(this.Index){case 2:case 3:return Object(r.a)("\u6728");case 5:case 6:return Object(r.a)("\u706b");case 8:case 9:return Object(r.a)("\u91d1");case 0:case 11:return Object(r.a)("\u6c34");default:return Object(r.a)("\u571f")}}},{key:"CGan",get:function(){var t=new Array,n=i.HuahePianCai?this.gans:this.gans2,e=!0,r=!1,s=void 0;try{for(var a,u=n[Symbol.iterator]();!(e=(a=u.next()).done);e=!0){var o=a.value;t.push(f(o))}}catch(h){r=!0,s=h}finally{try{e||null==u.return||u.return()}finally{if(r)throw s}}return t}}]),t}();return t.changShengDefs=["\u957f\u751f","\u6c90\u6d74","\u51a0\u5e26","\u4e34\u5b98","\u5e1d\u65fa","\u8870","\u75c5","\u6b7b","\u5893","\u7edd","\u80ce","\u517b"],t}(),o=new Array;function h(){12!==o.length&&(o.push(new u(0,"\u5b50",[9])),o.push(new u(1,"\u4e11",[9,7,5])),o.push(new u(2,"\u5bc5",[0,2,5],[0,2,4])),o.push(new u(3,"\u536f",[1])),o.push(new u(4,"\u8fb0",[1,4,9])),o.push(new u(5,"\u5df3",[2,4,6])),o.push(new u(6,"\u5348",[3],[3,5])),o.push(new u(7,"\u672a",[1,3,5])),o.push(new u(8,"\u7533",[5,6,8])),o.push(new u(9,"\u9149",[7])),o.push(new u(10,"\u620c",[3,4,7])),o.push(new u(11,"\u4ea5",[0,4,8],[0,8])))}var c=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"ChangSheng",get:function(){return i.Shuitugongchangsheng},set:function(t){i.Shuitugongchangsheng=t||!1}},{key:"Huahe",get:function(){return i.HuahePianCai},set:function(t){i.HuahePianCai=t||!1}}]),t}();function f(t){if(a(),"string"==typeof t){var n=s.filter((function(n){return n.Name===t}));if(1===n.length)return n[0]}else if("number"==typeof t&&t>=0&&t<=9)return s[t];throw new Error("Parameter Error of Gan: "+t+" is not valiad")}function g(){return a(),s.map((function(t){return t.Name}))}function l(t){if(h(),"string"==typeof t){"\u620d"===t&&(t="\u620c");var n=o.filter((function(n){return n.Name===t}));if(1===n.length)return n[0]}else if("number"==typeof t&&t>=0&&t<=11)return o[t];throw new Error("Parameter Error of Gan: "+t+" is not valiad")}function p(){return h(),o.map((function(t){return t.Name}))}var d=function(){var t=function(){function t(n){if(_classCallCheck(this,t),Array.isArray(n)&&2===n.length)this.Gan=f(n[0]),this.Zhi=l(n[1]);else if("string"==typeof n)this.Gan=2===n.length?f(n.substring(0,1)):null,this.Zhi=l(2===n.length?n.substring(1,2):n.substring(0,1));else if("number"==typeof n&&n>=0&&n<=59){var e=n%12;this.Gan=f(n%10),this.Zhi=l(e)}if(this.Config(i.Shuitugongchangsheng,i.HuahePianCai),null==this.Zhi||void 0===this.Zhi)throw new Error("GanZhi Error: parameter "+n+" is not valid.")}return _createClass(t,[{key:"Config",value:function(t,n){this.shuitu=t||!1,this.huahe=n||!1}},{key:"calcIndex",value:function(t,n){var e=(n-t+12)%12/2;return(e=(6-e)%6*10)+t}},{key:"Name",get:function(){return this.Gan?this.Gan.Name+this.Zhi.Name:this.Zhi.Name}},{key:"Index",get:function(){return this.Gan?this.calcIndex(this.Gan.Index,this.Zhi.Index):this.Zhi.Index}},{key:"NaYin",get:function(){return null==this.Gan?"":t.NaYins[Math.floor(this.Index/2)]}},{key:"Shen10Gan",get:function(){if(!this.Base)throw new Error("BaseGan is not defined.");return this===this.Base?["\u65e5\u4e3b","\u65e5"]:this.Gan.Ref(this.Base.Gan,this.huahe)}},{key:"Shen10Zhi",get:function(){if(!this.Base)throw new Error("BaseGan is not defined.");return this.Zhi.Ref(this.Base.Gan)}},{key:"ChangSheng",get:function(){return this.Base?this.Zhi.GetChangSheng(this.Base.Gan,this.shuitu):""}}],[{key:"GanZhiNames",get:function(){for(var t=g(),n=p(),e=new Array,r=0;r<t.length;r++)for(var i=0;i<n.length;i++)r%2==i%2&&e.push(t[r]+n[i]);return e}}]),t}();return t.NaYins=["\u6d77\u4e2d\u91d1","\u7089\u4e2d\u706b","\u5927\u6797\u6728","\u8def\u65c1\u571f","\u5251\u5cf0\u91d1","\u5c71\u5934\u706b","\u6da7\u4e0b\u6c34","\u57ce\u5899\u571f","\u767d\u8721\u91d1","\u6768\u67f3\u6728","\u6cc9\u4e2d\u6c34","\u5c4b\u4e0a\u571f","\u9739\u96f3\u706b","\u677e\u67cf\u6728","\u957f\u6d41\u6c34","\u6c99\u4e2d\u91d1","\u5c71\u4e0b\u706b","\u5e73\u5730\u6728","\u58c1\u4e0a\u571f","\u91d1\u7b94\u91d1","\u4f5b\u706f\u706b","\u5929\u6cb3\u6c34","\u5927\u9a7f\u571f","\u9497\u948f\u91d1","\u6851\u677e\u6728","\u5927\u6eaa\u6c34","\u6c99\u4e2d\u571f","\u5929\u4e0a\u706b","\u77f3\u69b4\u6728","\u5927\u6d77\u6c34"],t}()},LTmD:function(t,n,e){"use strict";e.d(n,"a",(function(){return h})),e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return f})),e.d(n,"d",(function(){return g}));var r=e("FAH8"),i=e("c7TG"),s=(e("0eVs"),e("2QJI")),a=e("2Vo4"),u=e("fXoL"),o=e("e8h1"),h=function(){var t=function(){function t(n,e,r){var i=this;_classCallCheck(this,t),this.storage=n,this.file=e,this.plateform=r,this.user=null,this.lastsync=0,this.encryp="false",this.dbReady=new a.a(!1),this.dbReady.next(!1),this.ReadSettingFromDB().then((function(t){console.log("Device width",r.width())})).finally((function(){i.dbReady.next(!0)}))}return _createClass(t,[{key:"Avatar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"female"===(t||"")?"../../../assets/img/user_female.png":"../../../assets/img/user_male.png"}},{key:"UserRolers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=[];return(1&(t=t||0))>0&&n.push({name:"\u6ce8\u518c\u7528\u6237",icon:"../../../assets/img/roles/r_register.png"}),(2&t)>0&&n.push({name:"VIP",icon:"../../../assets/img/roles/r_vip.png"}),(4&t)>0&&n.push({name:"\u534e\u9e64\u540c\u95e8",icon:"../../../assets/img/huahe.jpg"}),(8&t)>0&&n.push({name:"\u7248\u4e3b",icon:"../../../assets/img/roles/r_admin.png"}),(16&t)>0&&n.push({name:"\u516d\u723b",icon:"../../../assets/img/roles/r_master.png"}),(64&t)>0&&n.push({name:"\u98ce\u6c34",icon:"../../../assets/img/roles/r_master.png"}),(32&t)>0&&n.push({name:"\u547d\u7406",icon:"../../../assets/img/roles/r_master.png"}),(128&t)>0&&n.push({name:"\u5927\u5b97\u5e08",icon:"../../../assets/img/roles/r_supermaster.png"}),(256&t)>0&&n.push({name:"\u7ba1\u7406\u5458",icon:"../../../assets/img/roles/r_admin.png"}),n}},{key:"WaitInit",value:function(){var t=this;return new Promise((function(n,e){t.InitState.subscribe((function(t){t&&n(!0)}))}))}},{key:"ReadSettingFromDB",value:function(){var n=this,e=this.storage.get(t.APP_CONFIG).then((function(t){n.appconfig=t})).catch((function(t){return t})),r=this.storage.get(t.DB_GUA).then((function(t){n.gua=t,n.gua.symbol=n.gua.symbol||0})).catch((function(t){return t})),i=this.storage.get(t.DB_BAZI).then((function(t){n.bazi=t})).catch((function(t){return t})),s=this.storage.get(t.DB_USER).then((function(t){n.user=t||{id:null,created:null,modified:null,lastlogin:null,name:null,password:null,email:null,phone:null,vip:null,roller:null,verified:null}})).catch((function(t){return t})),a=this.storage.get(t.DB_LASTSYNC).then((function(t){n.lastsync=t})).catch((function(t){return t})),u=this.storage.get(t.USER_ENCRYP).then((function(t){n.encryp=t||n.encryp})).catch((function(t){return t})),o=this.storage.get(t.FORUM_SET).then((function(t){n.forum=t})).catch((function(t){return t}));return Promise.all([e,r,i,s,a,u,o]).then((function(t){return t}))}},{key:"ResetDB",value:function(t){var n=this,e=[];if("all"===t)e.push(this.storage.clear());else if("recordes"===t){var r=this.storage.keys().then((function(t){t.forEach((function(t){(t.startsWith("Book_")||t.startsWith("booktree"))&&e.push(n.storage.remove(t))}))}));e.push(r)}else if(t){var i=this.storage.remove(t).then((function(){console.log("Record ".concat(t," will deleted"))}));e.push(i)}return Promise.all(e)}},{key:"ShowData",value:function(t){"*"!==t?this.storage.get(t).then((function(n){if(n){var e=g(n)||n;console.log("Show ".concat(t),e)}else console.log("Show ".concat(t),n)})).catch((function(n){console.log("Show ".concat(t," failed"),n)})):this.storage.keys().then((function(t){console.log(t)}))}},{key:"IsSmallScreen",get:function(){return this.plateform.width()<400||this.plateform.isPortrait()}},{key:"InitState",get:function(){return this.dbReady.asObservable()}},{key:"AppConfig",get:function(){return this.appconfig||t.default_appconfig},set:function(n){this.appconfig=n,this.storage.set(t.APP_CONFIG,this.appconfig)}},{key:"Encryp",get:function(){return"true"===this.encryp.toLowerCase()},set:function(n){this.encryp=n?"true":"false",this.storage.set(t.USER_ENCRYP,this.encryp)}},{key:"Gua",get:function(){return this.gua||t.defalt_gua_setting},set:function(n){this.gua=n||t.defalt_gua_setting,this.storage.set(t.DB_GUA,this.gua)}},{key:"Bazi",get:function(){return this.bazi||t.default_bazi_setting},set:function(n){this.bazi=n||t.default_bazi_setting,s.a.ChangSheng=this.bazi.shuitu,s.a.Huahe=this.bazi.huahecai,this.storage.set(t.DB_BAZI,this.bazi)}},{key:"HasUser",get:function(){return!!this.User&&!!this.User.id&&""!==this.User.id}},{key:"User",get:function(){return this.user},set:function(n){this.user=n,n?this.storage.set(t.DB_USER,this.user):(this.user=null,this.storage.remove(t.DB_USER))}},{key:"ForumSetting",get:function(){return this.forum||t.default_forum_setting},set:function(n){this.forum=n||t.default_forum_setting,this.storage.set(t.FORUM_SET,this.forum)}},{key:"AnonymUser",get:function(){return{id:"anonym",created:0,modified:0,lastlogin:0,name:null,password:"",email:null,phone:null,vip:0,verified:0,encryp:null,roller:0,avatar:null}}},{key:"LastSync",get:function(){return this.lastsync},set:function(n){this.lastsync=n,this.storage.set(t.DB_LASTSYNC,n)}}]),t}();return t.SAVELOCAL="local",t.SAVEBLOBAL="global",t.GUASYMBOLS=[["\u25fc\ufe0e\u25fb\ufe0e\u25fc\ufe0e","\u25fc\ufe0e\u25fc\ufe0e\u25fc\ufe0e","\u25fc\ufe0e&ensp;\u25fc\ufe0e"],["=","-","="]],t.Product=!1,t.DB_BAZI="bazi_setting",t.DB_GUA="gua_setting",t.DB_USER="userinfo",t.DB_LASTSYNC="lastsync",t.APP_CONFIG="appconfig",t.USER_ENCRYP="encryp",t.FORUM_SET="forum_setting",t.defalt_gua_setting={fontsize:15,shensha:4,shortname:!1,symbol:0},t.default_bazi_setting={fontsize:15,shortname:!0,shuitu:!0,shensha:4,huahecai:!0,yuanju:{cangan:!0,nayin:!0,changshen:!0},shiyun:{cangan:!1,nayin:!1,changshen:!1,shensha:!1}},t.default_forum_setting={showimg:!0,showgua:!0,showbazi:!1,imgOut:!1,guaOut:!1,baziOut:!0},t.default_appconfig={app:{version:"2.0.0",accessToken:"as%3asdE87!08jR\xf6",serverUrl:"https://1051463780297201.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/huaheservice/sqlquery"},website:"https://maiernte.gitee.io/huahe",document:"https://maiernte.github.io/mathjax-yixue-usage.html"},t.\u0275fac=function(n){return new(n||t)(u.dc(o.b),u.dc(r.a),u.dc(i.eb))},t.\u0275prov=u.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}();function c(t,n){var e=Object.getOwnPropertyNames(t),r=Object.getOwnPropertyNames(n);if(e.length!==r.length)return!1;for(var i=0;i<e.length;i++){var s=e[i];if("object"!=typeof t[s]){if(t[s]!==n[s])return!1}else if(!1===c(t[s],n[s]))return!1}return!0}function f(t){if(!t)return t;var n;if([Number,String,Boolean].forEach((function(e){t instanceof e&&(n=e(t))})),void 0===n)if("[object Array]"===Object.prototype.toString.call(t))n=[],t.forEach((function(t,e,r){n[e]=f(t)}));else if("object"==typeof t)if(t.nodeType&&"function"==typeof t.cloneNode)n=t.cloneNode(!0);else if(t.prototype)n=t;else if(t instanceof Date)n=new Date(t);else for(var e in n={},t)n[e]=f(t[e]);else n=t;return n}function g(t){try{return"string"==typeof t?JSON.parse(t):t}catch(n){return null}}},Y6BA:function(t,n,e){"use strict";function r(t,n,e){return e.indexOf(t)===n}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=16*Math.random()|0;return("x"===t?n:3&n|8).toString(16)}));return t&&"number"==typeof t?n.substring(0,t):n}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return i})),String.prototype.int2str=function(t,n){var e=this.toString(null==n||void 0===n?2:n);if(e.length>=t)return e;for(;e.length<t;)e="0"+e;return e},String.prototype.parseDate=function(){var t=this.replace(/[\u5e74\u6708\u65e5\u65f6\u5206\u79d2:\uff1a,\uff0c\ \/-]/g,"|").split("|").removeEmpty().select((function(t){return parseInt(t,10)}));return new Date(t[0],t[1]-1,t[2],t[3]||0,t[4]||0,t[5]||0)},String.prototype.IsNullOrEmpty=function(){return void 0===this||null==this||""===this},Array.prototype.select=function(t){var n=[];return this.forEach((function(e){n.push(t(e))})),n},Array.prototype.where=function(t){var n=[];return this.forEach((function(e){t(e)&&n.push(e)})),n},Array.prototype.distinct=function(){for(var t={},n=[],e=0,r=this.length;e<r;++e)t.hasOwnProperty(this[e])||(n.push(this[e]),t[this[e]]=1);return n},Array.prototype.insert=function(t,n){this.splice(t,0,n)},Array.prototype.removeEmpty=function(){return this.filter((function(t){return!!t&&""!==(t||"").toString()}))},Array.prototype.sortByKey=function(t){return this.sort((function(n,e){var r=n[t]||0,i=e[t]||0;return r<i?-1:r>i?1:0}))},Date.prototype.toChinaStr=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.getFullYear()+"\u5e74"+(this.getMonth()+1)+"\u6708"+this.getDate()+"\u65e5";return!0===t&&(n+=" "+this.getHours().toString().int2str(2,10)+"\u65f6",n+=this.getMinutes().toString().int2str(2,10)+"\u5206",n+=this.getSeconds().toString().int2str(2,10)+"\u79d2"),n},Date.prototype.toDatabaseStr=function(){var t=this.getFullYear()+"-"+(this.getMonth()+1).toString().int2str(2,10)+"-"+this.getDate().toString().int2str(2,10);return t+=" "+this.getHours().toString().int2str(2,10)+":",t+=this.getMinutes().toString().int2str(2,10)+":",t+=this.getSeconds().toString().int2str(2,10)}},ZtG1:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=function(){function t(n,e){_classCallCheck(this,t),this.name=n,this.index=e}return _createClass(t,[{key:"Ref",value:function(t){return this.Ke==t.Index?["\u5b98\u9b3c","\u5b98"]:this.Sheng==t.Index?["\u7236\u6bcd","\u7236"]:t.Ke==this.index?["\u59bb\u8d22","\u8d22"]:t.Sheng==this.index?["\u5b50\u5b59","\u5b59"]:["\u5144\u5f1f","\u5144"]}},{key:"Name",get:function(){return this.name}},{key:"Index",get:function(){return this.index}},{key:"Ke",get:function(){return(this.index+2)%5}},{key:"Sheng",get:function(){return(this.index+1)%5}}]),t}(),i=[];function s(t){if("number"==typeof t){if(t>=0&&t<=4)return i[t];throw new RangeError("WuXing index out of range: "+t)}var n=i.filter((function(n){return n.Name==t}));if(n&&1==n.length)return n[0];throw new RangeError("WuXing name out of range: "+t)}i.push(new r("\u91d1",0)),i.push(new r("\u6c34",1)),i.push(new r("\u6728",2)),i.push(new r("\u706b",3)),i.push(new r("\u571f",4))}}]);