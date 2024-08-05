var customEvents,__spreadArray,fallbackMm,EventLoggingModule;_w.EventsToDuplicate=[];_w.useSharedLocalStorage=!1;define("shared",["require","exports"],function(n,t){function s(n,t){for(var r=n.length,i=0;i<r;i++)t(n[i])}function r(n){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];return function(){n.apply(null,i)}}function u(n){i&&event&&(event.returnValue=!1);n&&typeof n.preventDefault=="function"&&n.preventDefault()}function f(n){i&&event&&(event.cancelBubble=!0);n&&typeof n.stopPropagation=="function"&&n.stopPropagation()}function e(n,t,i){for(var r=0;n&&n.offsetParent&&n!=(i||document.body);)r+=n["offset"+t],n=n.offsetParent;return r}function o(){return(new Date).getTime()}function h(n){return i?event:n}function c(n){return i?event?event.srcElement:null:n.target}function l(n){return i?event?event.fromElement:null:n.relatedTarget}function a(n){return i?event?event.toElement:null:n.relatedTarget}function v(n,t,i){while(n&&n!=(i||document.body)){if(n==t)return!0;n=n.parentNode}return!1}function y(n){window.location.href=n}function p(n,t){n&&(n.style.filter=t>=100?"":"alpha(opacity="+t+")",n.style.opacity=t/100)}t.__esModule=!0;t.getTime=t.getOffset=t.stopPropagation=t.preventDefault=t.wrap=t.forEach=void 0;var i=sb_ie;t.forEach=s;t.wrap=r;t.preventDefault=u;t.stopPropagation=f;t.getOffset=e;t.getTime=o;window.sj_b=document.body;window.sb_de=document.documentElement;window.sj_wf=r;window.sj_pd=u;window.sj_sp=f;window.sj_go=e;window.sj_ev=h;window.sj_et=c;window.sj_mi=l;window.sj_mo=a;window.sj_we=v;window.sb_gt=o;window.sj_so=p;window.sj_lc=y});define("env",["require","exports","shared"],function(n,t,i){function v(n,t){return t.length&&typeof n=="function"?function(){return n.apply(null,t)}:n}function y(n,t){var e=[].slice.apply(arguments).slice(2),i=v(n,e),u;return typeof i=="function"&&(u=window.setImmediate&&!window.setImmediate.Override&&(!t||t<=16)?"i"+setImmediate(i):o(i,t),f[r]=u,r=(r+1)%a),u}function p(n,t){var r=[].slice.apply(arguments).slice(2),i=l(v(n,r),t);return e[u]=i,u=(u+1)%a,i}function w(){h.forEach(f,s);h.forEach(e,window.clearInterval);r=u=e.length=f.length=0}function s(n){n!=null&&(typeof n=="string"&&n.indexOf("i")===0?window.clearImmediate(parseInt(n.substr(1),10)):c(n))}var h=i,f=[],e=[],o,c,l,a=1024,r=0,u=0;o=window.setTimeout;t.setTimeout=y;l=window.setInterval;t.setInterval=p;t.clear=w;c=window.clearTimeout;t.clearTimeout=s;window.sb_rst=o;window.setTimeout=window.sb_st=y;window.setInterval=window.sb_si=p;window.clearTimeout=window.sb_ct=s});define("event.custom",["require","exports","shared","env"],function(n,t,i,r){function f(n){return u[n]||(u[n]=[])}function e(n,t){n.d?l.setTimeout(c.wrap(n,t),n.d):n(t)}function v(n,t,i){var r,f;for(r in u)f=i?t&&r.indexOf(t)===0:!(r.indexOf(a)===0)&&!(t&&r.indexOf(t)===0)&&!(n!=null&&n[r]!=null),f&&delete u[r]}function o(n){for(var t=f(n),u=t.e=arguments,i,r=0;r<t.length;r++)if(t[r].alive)try{e(t[r].func,u)}catch(o){i||(i=o)}if(i)throw i;}function s(n,t,i,r){var u=f(n);t&&(t.d=r,u.push({func:t,alive:!0}),i&&u.e&&e(t,u.e))}function h(n,t){for(var i=0,r=u[n];r&&i<r.length;i++)if(r[i].func==t&&r[i].alive){r[i].alive=!1;break}}var c=i,l=r,u={},a="ajax.";t.reset=v;t.fire=o;t.bind=s;t.unbind=h;_w.sj_evt={bind:s,unbind:h,fire:o}});define("event.native",["require","exports"],function(n,t){function r(n,t,r,u){var f=n===window||n===document||n===document.body;n&&(f&&t=="load"?i.bind("onP1",r,!0):f&&t=="unload"?i.bind("unload",r,!0):n.addEventListener?n.addEventListener(t,r,u):n.attachEvent?n.attachEvent("on"+t,r):n["on"+t]=r)}function u(n,t,r,u){var f=n===window||n===document||n===document.body;n&&(f&&t=="load"?i.unbind("onP1",r):f&&t=="unload"?i.unbind("unload",r):n.removeEventListener?n.removeEventListener(t,r,u):n.detachEvent?n.detachEvent("on"+t,r):n["on"+t]=null)}t.__esModule=!0;t.unbind=t.bind=void 0;var i=n("event.custom");t.bind=r;t.unbind=u;window.sj_be=r;window.sj_ue=u});customEvents=require("event.custom");customEvents.fire("onHTML");define("dom",["require","exports"],function(n,t){function f(n,t){function s(n,t,r,f){r&&u.unbind(r,f,s);c.bind("onP1",function(){if(!n.l){n.l=1;var r=i("script");r.setAttribute("data-rms","1");r.src=(t?"/fd/sa/"+_G.Ver:"/sa/"+_G.AppVer)+"/"+n.n+".js";_d.body.appendChild(r)}},!0,5)}for(var f=arguments,e,o,r=2,l={n:n};r<f.length;r+=2)e=f[r],o=f[r+1],u.bind(e,o,h.wrap(s,l,t,e,o));r<3&&s(l,t)}function e(){var n=_d.getElementById("ajaxStyles");return n||(n=_d.createElement("div"),n.id="ajaxStyles",_d.body.insertBefore(n,_d.body.firstChild)),n}function l(n){var t=i("script");t.type="text/javascript";t.text=n;t.setAttribute("data-bing-script","1");document.body.appendChild(t);r.setTimeout(function(){t.parentNode.removeChild(t)},0)}function a(n){var t=document.querySelector('script[type="importmap"]');t?t.text=n:(t=i("script"),t.type="importmap",t.text=n,document.body.appendChild(t),r.setTimeout(function(){document.body.removeChild(t)},0))}function v(n){var t=i("script");t.type="text/javascript";t.src=n;t.setAttribute("crossorigin","anonymous");t.onload=r.setTimeout(function(){document.body.removeChild(t)},0);document.body.appendChild(t)}function o(n){var t=s("ajaxStyle");t||(t=i("style"),t.setAttribute("data-rms","1"),t.id="ajaxStyle",e().appendChild(t));t.textContent!==undefined?t.textContent+=n:t.styleSheet.cssText+=n}function y(n,t){for(var i=Element.prototype,r=i.matches||i.msMatchesSelector;n!=null;){if(r.call(n,t))return n;n=n.parentElement}return null}function s(n){return _d.getElementById(n)}function i(n,t,i){var r=_d.createElement(n);return t&&(r.id=t),i&&(r.className=i),r}t.__esModule=!0;t.includeCss=t.includeScriptReference=t.includeScript=t.getCssHolder=t.loadJS=void 0;var r=n("env"),h=n("shared"),u=n("event.native"),c=n("event.custom");t.loadJS=f;t.getCssHolder=e;t.includeScript=l;t.includeImportMapScript=a;t.includeScriptReference=v;t.includeCss=o;_w._ge=s;_w.sj_ce=i;_w.sj_jb=f;_w.sj_ic=o;_w.sj_fa=y});define("cookies",["require","exports"],function(n,t){function a(){var n=location.protocol==="https:";return n?";secure":""}function v(){return typeof _G!="undefined"&&_G.EF!==undefined&&_G.EF.cookss!==undefined&&_G.EF.cookss===1}function f(){if(typeof _G!="undefined"&&_G.EF!==undefined&&_G.EF.emptyclientcookdom!==undefined&&(_G===null||_G===void 0?void 0:_G.EF.emptyclientcookdom)==1)return"";var n=location.hostname.match(/([^.]+\.[^.]*)$/);return n?";domain="+n[0]:""}function e(n,t,i,r,u){var s=f(),h=r&&r>0?r*6e4:63072e6,c=new Date((new Date).getTime()+Math.min(h,63072e6)),e="",o;v()&&(o=a(),e=o+(u?";SameSite="+u:";SameSite=None"));document.cookie=n+s+(t?";expires="+c.toGMTString():"")+(i?";path="+i:"")+e}function y(){return _G!==undefined&&_G.EF!==undefined&&_G.EF.empcrumb!==undefined&&_G.EF.empcrumb===1}function o(n,t,r,u,f){if(!i){var o=n+"="+t;e(o,r,u,f)}}function s(){return!i}function r(n,t){var r,u;return i?null:(r=document.cookie.match(new RegExp("\\b"+n+"=[^;]+")),t&&r)?(u=r[0].match(new RegExp("\\b"+t+"=([^&]*)")),u?u[1]:null):r?r[0]:null}function h(n,t,u,f,o,s){var a,h,c,l;i||(h=t+"="+u,c=r(n),c?(l=r(n,t),a=y()?l!==null?c.replace(t+"="+l,h):c+"&"+h:l?c.replace(t+"="+l,h):c+"&"+h):a=n+"="+h,e(a,f,o,s))}function c(n,t){if(!i){var r=n+"=",e=f();document.cookie=r+e+";expires="+u+(t?";path="+t:"")}}var i,u,l;t.__esModule=!0;t.clear=t.set=t.get=t.areCookiesAccessible=t.setNoCrumbs=void 0;i=!1;u=new Date(0).toGMTString();try{l=document.cookie}catch(p){i=!0}t.setNoCrumbs=o;t.areCookiesAccessible=s;t.get=r;t.set=h;t.clear=c;window.sj_cook={get:r,set:h,setNoCrumbs:o,clear:c,areCookiesAccessible:s}});define("rmsajax",["require","exports"],function(n,t){function a(){for(var i,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(n.length!=0){if(i=n[n.length-1],n.length==1)ct(i)&&f.push(i);else if(n.length==3){var o=n[0],s=n[1],u=n[2];lt(o)&&lt(s)&&ct(u)&&(at(r,o,u),at(e,s,u))}return window.rms}}function rt(){var i=arguments,t,n;for(o.push(i),t=0;t<i.length;t++)n=i[t],vt(n,r,n.ct),n.d&&ut.call(null,n);return window.rms}function ii(){var t=arguments,n;for(s.push(t),n=0;n<t.length;n++)vt(t[n],e);return window.rms}function v(){var t,i,n;for(hi(),t=!1,n=0;n<o.length;n++)t=ut.apply(null,w.call(o[n],0))||t;for(i=0;i<s.length;i++)t=ei.apply(null,w.call(s[i],0))||t;if(!t)for(n=0;n<f.length;n++)f[n]()}function ut(){var n=arguments,t,i,f,e;if(n.length===0)return!1;if(t=r[ot(n[0])],n.length>1)for(i=ci.apply(null,n),f=0;f<i.length;f++)e=i[f],e.run=u,ri(e,function(n){return function(){ui(n,i)}}(e));else t.run=u,st(t,function(){ft(t)});return!0}function ri(n,t){var f,r,u;if(!n.state){if(n.state=dt,pt(n)){t();return}window.ActiveXObject!==undefined||ti.test(navigator.userAgent)?(f=new Image,f.onload=t,f.onerror=t,f.src=n.url):typeof XMLHttpRequest!="undefined"&&XMLHttpRequest?(r=new XMLHttpRequest,r.open("GET",n.url,!0),r.onreadystatechange=function(){r.readyState==4&&(!it&&(r.status<200||r.status>=400)&&(bt(n.url,"2",{resourceUrl:n.url,pageUrl:window.location.href,status:r.status,response:r.responseText}),it=!0),t())},r.send()):(u=i.createElement("object"),u.setAttribute("width","0"),u.setAttribute("height","0"),u.setAttribute("tabindex","-1"),u.setAttribute("aria-hidden","true"),u.onload=t,u.onerror=t,u.setAttribute("data",n.url),i.body.appendChild(u))}}function ui(n,t){n.run==u&&(n.state=b,et(t))}function fi(n,t){n.run==u&&st(n,function(n){return function(){ft(n,t)}}(n))}function ft(n,t){n.run==u&&(n.state=l,oi(n),t)&&et(t)}function et(n){for(var i,t=0;t<n.length;t++){i=n[t];switch(i.state){case b:fi(i,n);return;case l:continue}return}}function ot(n){for(var t in n)return t}function ei(){return!1}function oi(n){for(var t=0;t<n.callbacks.length;t++)n.callbacks[t].dec()}function st(n,t){var r,s,f,h,c,e,u;if(n.state!=k&&n.state!=l)if(n.state=k,r=i.createElement("SCRIPT"),s=n.ct!==undefined?n.ct:"text/javascript",r.type=s,r.setAttribute("data-rms","1"),n.key!==undefined&&n.key==="rms:answers:AutoSuggest:AutoSug"&&(r.onerror=function(){n.state=gt}),r.onreadystatechange=r.onload=function(){var i=r.readyState;if(!i||/loaded|complete/.test(i))try{ht(t)}catch(u){throw new TypeError("processCallback threw error for script:"+n.key+" script Url:"+n.url+" error stack:"+(u?u.stack:""));}},pt(n)){if(f=_w.jsDefer,f)f.length>n.pos&&(r.text=f[n.pos],i.body.appendChild(r));else if(h=n.app?g:d,(c=i.getElementById(h))&&(e=c.childNodes)&&e[n.pos]&&(u=e[n.pos].innerHTML,si(e,n.pos),u&&(u===null||u===void 0?void 0:u.length))){var a=4,v=3,o=u.length,y=u.substring(0,a),p=u.substring(o-v,o);y=="<!--"&&p=="-->"&&(u=u.substring(a,o-v));r.text=typeof DefaultTrustedTypesPolicy!="undefined"&&DefaultTrustedTypesPolicy.getOpaqueScript?DefaultTrustedTypesPolicy.getOpaqueScript(u):u;i.body.appendChild(r)}ht(t)}else r.src=n.url,(!wt()||wt()&&li(r.src))&&r.setAttribute("crossorigin","anonymous"),tt||(bt(r.src,"1",{resourceUrl:r.src}),tt=!0),i.body.appendChild(r)}function si(n,t){var i,r,u=(i=n[t])===null||i===void 0?void 0:i.getAttribute("rkey"),f=(r=n[t+1])===null||r===void 0?void 0:r.getAttribute("rkey");_w.lirab=u;_w.liraa=f}function ht(n){n.done||(n.done=!0,n())}function ct(n){return nt.call(n)=="[object Function]"}function lt(n){return nt.call(n)=="[object Array]"}function at(n,t,i){for(var u,f=new y(i),r=0;r<t.length;r++)u=n[t[r]],u||(u=yt(n,t[r])),p(u,f)}function hi(){for(var t,i,u,n=0;n<f.length;n++){t=new y(f[n]);for(i in r)p(r[i],t);for(u in e)p(e[u],t)}}function p(n,t){n.callbacks.push(t);t.inc()}function vt(n,t,i){for(var r in n)if(typeof n[r]!=undefined)return yt(t,r,n[r],i)}function yt(n,t,i,r){return n[t]||(n[t]={callbacks:[],onPrefetch:[]},n[t].key=t),t.indexOf(ni)==0&&(n[t].app=!0),isNaN(i)?n[t].url=i:n[t].pos=i,r&&(n[t].ct=r),n[t]}function ci(){for(var i,t=[],n=0;n<arguments.length;n++)i=ot(arguments[n]),t.push(r[i]);return t}function pt(n){return!n.url}function li(n){var t="https://"+i.location.host,r="http://"+i.location.host;return!(n.indexOf(t)===0||n.indexOf(r)===0)}function wt(){return _G!==undefined&&_G.EF!==undefined&&_G.EF.crossdomainfix===1}function ai(n){return _G!==undefined&&_G.EF!==undefined&&_G.EF.crossoriginlogging===1&&n.indexOf("/rp/")>=0}function vi(n){if(h&&h.length>0)for(var t=0;t<h.length;t++)if(n.indexOf(h[t])===0)return!0;return!1}function bt(n,t,i){if(typeof sj_log2=="function"&&ai(n)){var r=vi(n)?"rms_co":"rms_noco";sj_log2("Request",r,t,"rmsajax_xhrprefetch",null,null,i)}}function yi(n){var t,i;r={};e={};f=[];o=[];s=[];u+=1;t=document.getElementById(d);t&&t.parentNode.removeChild(t);i=document.getElementById(g);i&&i.parentNode.removeChild(i);n||kt()}function kt(){c.bind("onP1Lazy",function(){a(function(){c.fire("onP1")});v()},!0)}var c,y;t.__esModule=!0;t.reset=t.start=t.css=t.js=t.onload=void 0;c=n("event.custom");customEvents=typeof customEvents=="undefined"?sj_evt:customEvents;var w=[].slice,dt=1,b=2,k=3,l=4,gt=5,u=0,ni="A:",d="fRmsDefer",g="aRmsDefer",r={},e={},f=[],o=[],s=[],nt=Object.prototype.toString,i=document,ti=/edge/i,tt=!1,it=!1,h=["https://raka.","https://rafd.","https://r.","https://rcf."];t.onload=a;t.js=rt;t.css=ii;t.start=v;y=function(n){var t=0,i=!1;this.inc=function(){i||t++};this.dec=function(){i||(t--,t==0&&(i=!0,n()))}};t.reset=yi;kt();window.rms={onload:a,js:rt,start:v}});_w.LogUploadCapFeatureEnabled=!1;_w.InstLogQueueKeyFetcher={Get:function(n){var t="eventLogQueue";return n.indexOf("proactive")==1||n.indexOf("search")==1||n.indexOf("zinc")==1?t+"_Online":t+"_Offline"},GetSharedLocation:function(){return"eventLogQueue_Shared"},CanUploadSharedMessages:function(n){return _w.useSharedLocalStorage&&n.indexOf("AS/API")===1?!0:!1}};__spreadArray=this&&this.__spreadArray||function(n,t,i){if(i||arguments.length===2)for(var r=0,f=t.length,u;r<f;r++)!u&&r in t||(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return n.concat(u||Array.prototype.slice.call(t))};define("clientinst",["require","exports"],function(n,t){function at(){v=0;u()}function u(){var n,s,t,o;e&&clearTimeout(e);for(n in i)if(i.hasOwnProperty(n)){s=n!=_G.IG?_G.lsUrl.replace(_G.IG,n):_G.lsUrl;for(t in i[n])i[n].hasOwnProperty(t)&&(o=k+s+"&TYPE=Event."+t+"&DATA="+f("[")+i[n][t]+f("]"),yt(o)||(nt().src=o));delete i[n]}typeof r!="undefined"&&r.setTimeout&&(e=r.setTimeout(u,b))}function vt(){return _G!==undefined&&_G.EF!==undefined&&_G.EF.logsb!==undefined&&_G.EF.logsb===1}function yt(n){return vt()?et(n,""):!1}function et(n,t){var i="sendBeacon",r=!1;if(navigator&&navigator[i])try{navigator[i](n,t);r=!0}catch(u){}return r}function ot(n){s("FilterFlare",null,null,"FilterFlare",!1,["queryTags",n.join(",")])}function st(n,t,i){var r=["<ClientInstRequest>"],h=_G.CID||sj_cook.get("MUID","MUID"),e,u,o,s,f;h&&r.push("<CID>",h,"<\/CID>");e=i.IID+"_"+i.SFX;r.push("<AppNS>",e,"<\/AppNS>");r.push("<Events><E>");r.push("<T>Event.PartialDynamicContent.FrontDoor<\/T>");u=_w.ChatMergeLogHelper;typeof u!="undefined"&&typeof u.getConversationIg=="function"&&e.substring(0,6)==="Codex-"&&(o=u.getConversationIg(!0),o&&r.push("<IG>",o,"<\/IG>"));r.push("<DS><![CDATA[",w(t),"]\]><\/DS>");r.push("<Page>");r.push("<Name>",i.Name,"<\/Name>");r.push("<Num>",i.Number,"<\/Num>");r.push("<IID>",i.IID,"<\/IID>");r.push("<SFX>",i.SFX,"<\/SFX>");r.push("<L><![CDATA[",w(i.L),"]\]><\/L>","<\/Page>");r.push("<D><![CDATA[",w(n),"]\]><\/D>","<TS>",(new Date).getTime().toString(),"<\/TS>");r.push("<\/E><\/Events>");r.push("<\/ClientInstRequest>");s=r.join("");et(_G.XLS,s)||(f=sj_gx(),f.open("POST",_G.XLS),f.setRequestHeader("Content-type","text/xml"),f.send(s))}function w(n){return JSON.stringify(n).replace(/]]>/g,"]]]\]><![CDATA[>")}var p,g,i,nt,o,tt,it,rt,ut;t.__esModule=!0;t.LogPartialImpression=t.LogFilterFlare=t.Wrap=t.Log2=t.LogInstrumented=t.Log=t.LogCustomEvent=void 0;var r=n("env"),h=n("event.native"),c=n("event.custom"),f=encodeURIComponent,l="length",a="apply",b=2e3,ht=2e3,v=0,e,k="",ct=_G.lsUrl+"&TYPE=Event.ClientInst&DATA=",y=location.hostname,d=y.match(/([^.]+\.[^.]*)$/);d&&(p=location.protocol,g=p=="https:"?y.substring(0,y.indexOf(".")):"a4",k=p+"//"+g+"."+d[0]);i={};nt=function(){return new Image},function(n){n.Home="home";n.Search="search";n.Conversation="conversation";n.OffStage="off-stage";n.Notebook="notebook";n.GPTCreator="gpt-creator"}(o||(o={}));tt=function(n,t,i,r){for(var f=[],u=4;u<arguments.length;u++)f[u-4]=arguments[u];s(n,t,i,n,r,f)};t.LogCustomEvent=tt;it=function(n,t,i,r){for(var f=[],u=4;u<arguments.length;u++)f[u-4]=arguments[u];s(n,t,i,"ClientInst",r,f)};t.Log=it;rt=function(n,i,r,u,f,e,o){t.Log2(n,i!==null&&i!==void 0?i:r,null,null,u,f,o)};t.LogInstrumented=rt;ut=function(n,t,i,r,u,f,e){var o=Object.keys(e).reduce(function(n,t){return __spreadArray(__spreadArray([],n,!0),[t,e[t]],!1)},[]);i&&o.push("service",i);r&&o.push("scenario",r);u&&o.push("appNS",u);f&&o.push("kValue",f);s(n,null,t,"ClientInst",!1,o)};t.Log2=ut;var s=function(n,t,i,f,o,s){v||(ft("Init","CI","Base","ClientInst",!1),typeof r!="undefined"&&r.setTimeout&&(e=r.setTimeout(u,b)),v=1,typeof h!="undefined"&&h.bind&&h.bind(window,"beforeunload",u,!1),typeof c!="undefined"&&c.bind&&c.bind("unload",function(){at()},!1));ft(n,t,i,f,o,s)},ft=function(n,t,r,e,s,h){var nt,tt,it,y=_G.IG,c={},rt=_w.ChatMergeLogHelper,b,p,k,d,a,v,ut,g,w;if(typeof rt!="undefined"&&typeof rt.getChatJoinKeys=="function"&&(b=null,typeof _w.CIB!="undefined"&&((it=(tt=_w.CIB)===null||tt===void 0?void 0:tt.vm)===null||it===void 0?void 0:it.mode)&&(b=_w.CIB.vm.mode),p=rt.getChatJoinKeys(!0),p&&(b!==o.Notebook&&b!==o.Conversation&&t!=="Codex"&&b||(p.rid&&(c.rid=p.rid),p&&p.ig&&(y=p.ig)))),h&&h.length>0&&h.length%2==0)for(k=0;k<h.length;k+=2)(d=h[k],d)&&(a=d.toLowerCase(),v=h[k+1],a==="impressionguid"?y=v:a==="service"?c.Service=v:a==="scenario"?c.Scenario=v:a==="appns"?c.AppNS=v:a==="k"||a==="kvalue"?c.K=v:a==="pos"?c.Pos=v:c[d]=v);ut=(new Date).getTime();c.T="CI.".concat(n);c.TS=ut;c.Name=r!==null&&r!==void 0?r:"";c.FID=typeof t!="number"?t!==null&&t!==void 0?t:"":"";c.hasOwnProperty("K")||typeof t!="number"||(c.K=t);g=f(JSON.stringify(c));w=i[y]&&i[y][e]||"";ct[l]+w[l]+g[l]>=ht&&(u(),w="");i.hasOwnProperty(y)?i[y][e]=w+f(w?",":"")+g:i[y]=(nt={},nt[e]=w+f(w?",":"")+g,nt);s&&u()},lt=function(n,t,i,r){var u=n[t];n[t]=function(){var n=arguments,e,t,f;if(r&&i[a](this,n),e=u[a](this,n),!r){for(t=[],f=0;f<n.length;f++)t.push(n[f]);t.push(e);i[a](this,t)}return e}};t.Wrap=lt;t.LogFilterFlare=ot;t.LogPartialImpression=st;window.Log={LogCustomEvent:t.LogCustomEvent,Log:t.Log,Wrap:t.Wrap,LogFilterFlare:ot};window.Shared2=window.Shared2||{};window.Shared2.Log={LogCustomEvent:t.LogCustomEvent,Log:t.Log,Wrap:t.Wrap,LogInstrumented:t.LogInstrumented};window.sj_log2=t.Log2;window.cspi_log=st});fallbackMm=require("fallback.mm");fallbackMm.replay();var sj_anim=function(n){var s=25,t=this,c,u,h,f,e,o,l,i,r;t.init=function(n,s,a,v,y){if(c=n,e=s,o=a,l=v,r=y,v==0){f=h;r&&r();return}i||(i=e);u||t.start()};t.start=function(){h=sb_gt();f=Math.abs(o-i)/l*s;u=setInterval(t.next,s)};t.stop=function(){clearInterval(u);u=0};t.next=function(){var u=sb_gt()-h,s=u>=f;i=e+(o-e)*u/f;s&&(t.stop(),i=o);n(c,i);s&&r&&r()};t.getInterval=function(){return s}},sj_fader=function(){return new sj_anim(function(n,t){sj_so(n,t)})},customEvents=require("event.custom");customEvents.bind("onPP",function(){customEvents.fire("onP1Lazy")},!0),function(n){function i(n,t){return typeof n[t]!="undefined"}function t(){_d.addEventListener("visibilitychange",function(){_d.visibilityState==="visible"&&(i(window,"Log2")&&Log2.LogEvent?Log2.LogEvent("TabFocusChanged","TabFocused",_d.visibilityState,!1):Log&&Log.LogCustomEvent?Log.LogCustomEvent("TabFocusChanged","TabFocused",_d.visibilityState,!0):Log&&Log.Log&&Log.Log("TabFocusChanged","Failed","TabFocusChanged Event not logged"))})}n.LogEventOnTabVisibilityChange=t;sj_evt.bind("onP1",function(){t()},1)}(EventLoggingModule||(EventLoggingModule={}))