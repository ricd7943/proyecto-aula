var __spreadArray=this&&this.__spreadArray||function(n,t,i){if(i||arguments.length===2)for(var r=0,f=t.length,u;r<f;r++)!u&&r in t||(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return n.concat(u||Array.prototype.slice.call(t))};define("clientinst",["require","exports"],function(n,t){function at(){v=0;u()}function u(){var n,s,t,o;e&&clearTimeout(e);for(n in i)if(i.hasOwnProperty(n)){s=n!=_G.IG?_G.lsUrl.replace(_G.IG,n):_G.lsUrl;for(t in i[n])i[n].hasOwnProperty(t)&&(o=k+s+"&TYPE=Event."+t+"&DATA="+f("[")+i[n][t]+f("]"),yt(o)||(nt().src=o));delete i[n]}typeof r!="undefined"&&r.setTimeout&&(e=r.setTimeout(u,b))}function vt(){return _G!==undefined&&_G.EF!==undefined&&_G.EF.logsb!==undefined&&_G.EF.logsb===1}function yt(n){return vt()?et(n,""):!1}function et(n,t){var i="sendBeacon",r=!1;if(navigator&&navigator[i])try{navigator[i](n,t);r=!0}catch(u){}return r}function ot(n){s("FilterFlare",null,null,"FilterFlare",!1,["queryTags",n.join(",")])}function st(n,t,i){var r=["<ClientInstRequest>"],h=_G.CID||sj_cook.get("MUID","MUID"),e,u,o,s,f;h&&r.push("<CID>",h,"<\/CID>");e=i.IID+"_"+i.SFX;r.push("<AppNS>",e,"<\/AppNS>");r.push("<Events><E>");r.push("<T>Event.PartialDynamicContent.FrontDoor<\/T>");u=_w.ChatMergeLogHelper;typeof u!="undefined"&&typeof u.getConversationIg=="function"&&e.substring(0,6)==="Codex-"&&(o=u.getConversationIg(!0),o&&r.push("<IG>",o,"<\/IG>"));r.push("<DS><![CDATA[",w(t),"]\]><\/DS>");r.push("<Page>");r.push("<Name>",i.Name,"<\/Name>");r.push("<Num>",i.Number,"<\/Num>");r.push("<IID>",i.IID,"<\/IID>");r.push("<SFX>",i.SFX,"<\/SFX>");r.push("<L><![CDATA[",w(i.L),"]\]><\/L>","<\/Page>");r.push("<D><![CDATA[",w(n),"]\]><\/D>","<TS>",(new Date).getTime().toString(),"<\/TS>");r.push("<\/E><\/Events>");r.push("<\/ClientInstRequest>");s=r.join("");et(_G.XLS,s)||(f=sj_gx(),f.open("POST",_G.XLS),f.setRequestHeader("Content-type","text/xml"),f.send(s))}function w(n){return JSON.stringify(n).replace(/]]>/g,"]]]\]><![CDATA[>")}var p,g,i,nt,o,tt,it,rt,ut;t.__esModule=!0;t.LogPartialImpression=t.LogFilterFlare=t.Wrap=t.Log2=t.LogInstrumented=t.Log=t.LogCustomEvent=void 0;var r=n("env"),h=n("event.native"),c=n("event.custom"),f=encodeURIComponent,l="length",a="apply",b=2e3,ht=2e3,v=0,e,k="",ct=_G.lsUrl+"&TYPE=Event.ClientInst&DATA=",y=location.hostname,d=y.match(/([^.]+\.[^.]*)$/);d&&(p=location.protocol,g=p=="https:"?y.substring(0,y.indexOf(".")):"a4",k=p+"//"+g+"."+d[0]);i={};nt=function(){return new Image},function(n){n.Home="home";n.Search="search";n.Conversation="conversation";n.OffStage="off-stage";n.Notebook="notebook";n.GPTCreator="gpt-creator"}(o||(o={}));tt=function(n,t,i,r){for(var f=[],u=4;u<arguments.length;u++)f[u-4]=arguments[u];s(n,t,i,n,r,f)};t.LogCustomEvent=tt;it=function(n,t,i,r){for(var f=[],u=4;u<arguments.length;u++)f[u-4]=arguments[u];s(n,t,i,"ClientInst",r,f)};t.Log=it;rt=function(n,i,r,u,f,e,o){t.Log2(n,i!==null&&i!==void 0?i:r,null,null,u,f,o)};t.LogInstrumented=rt;ut=function(n,t,i,r,u,f,e){var o=Object.keys(e).reduce(function(n,t){return __spreadArray(__spreadArray([],n,!0),[t,e[t]],!1)},[]);i&&o.push("service",i);r&&o.push("scenario",r);u&&o.push("appNS",u);f&&o.push("kValue",f);s(n,null,t,"ClientInst",!1,o)};t.Log2=ut;var s=function(n,t,i,f,o,s){v||(ft("Init","CI","Base","ClientInst",!1),typeof r!="undefined"&&r.setTimeout&&(e=r.setTimeout(u,b)),v=1,typeof h!="undefined"&&h.bind&&h.bind(window,"beforeunload",u,!1),typeof c!="undefined"&&c.bind&&c.bind("unload",function(){at()},!1));ft(n,t,i,f,o,s)},ft=function(n,t,r,e,s,h){var nt,tt,it,y=_G.IG,c={},rt=_w.ChatMergeLogHelper,b,p,k,d,a,v,ut,g,w;if(typeof rt!="undefined"&&typeof rt.getChatJoinKeys=="function"&&(b=null,typeof _w.CIB!="undefined"&&((it=(tt=_w.CIB)===null||tt===void 0?void 0:tt.vm)===null||it===void 0?void 0:it.mode)&&(b=_w.CIB.vm.mode),p=rt.getChatJoinKeys(!0),p&&(b!==o.Notebook&&b!==o.Conversation&&t!=="Codex"&&b||(p.rid&&(c.rid=p.rid),p&&p.ig&&(y=p.ig)))),h&&h.length>0&&h.length%2==0)for(k=0;k<h.length;k+=2)(d=h[k],d)&&(a=d.toLowerCase(),v=h[k+1],a==="impressionguid"?y=v:a==="service"?c.Service=v:a==="scenario"?c.Scenario=v:a==="appns"?c.AppNS=v:a==="k"||a==="kvalue"?c.K=v:a==="pos"?c.Pos=v:c[d]=v);ut=(new Date).getTime();c.T="CI.".concat(n);c.TS=ut;c.Name=r!==null&&r!==void 0?r:"";c.FID=typeof t!="number"?t!==null&&t!==void 0?t:"":"";c.hasOwnProperty("K")||typeof t!="number"||(c.K=t);g=f(JSON.stringify(c));w=i[y]&&i[y][e]||"";ct[l]+w[l]+g[l]>=ht&&(u(),w="");i.hasOwnProperty(y)?i[y][e]=w+f(w?",":"")+g:i[y]=(nt={},nt[e]=w+f(w?",":"")+g,nt);s&&u()},lt=function(n,t,i,r){var u=n[t];n[t]=function(){var n=arguments,e,t,f;if(r&&i[a](this,n),e=u[a](this,n),!r){for(t=[],f=0;f<n.length;f++)t.push(n[f]);t.push(e);i[a](this,t)}return e}};t.Wrap=lt;t.LogFilterFlare=ot;t.LogPartialImpression=st;window.Log={LogCustomEvent:t.LogCustomEvent,Log:t.Log,Wrap:t.Wrap,LogFilterFlare:ot};window.Shared2=window.Shared2||{};window.Shared2.Log={LogCustomEvent:t.LogCustomEvent,Log:t.Log,Wrap:t.Wrap,LogInstrumented:t.LogInstrumented};window.sj_log2=t.Log2;window.cspi_log=st})