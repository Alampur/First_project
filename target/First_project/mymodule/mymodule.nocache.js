function mymodule(){var O='bootstrap',P='begin',Q='gwt.codesvr.mymodule=',R='gwt.codesvr=',S='mymodule',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='DOMContentLoaded',fb=50,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='Failed to load ',ob='head',pb='meta',qb='name',rb='mymodule::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='mymodule.nocache.js',Ib='base',Jb='//',Kb='device.features',Lb='ontouchstart',Mb='googletv',Nb='ipad;',Ob='largeDisplay',Pb='Touch',Qb='Arrows',Rb='opera mini',Sb='opera mobi',Tb='mobile',Ub='windows phone',Vb='iphone',Wb='ipod;',Xb='smallDisplay',Yb='android',Zb='Mouse',$b=2,_b=3,ac=4,bc='user.agent',cc='webkit',dc='safari',ec='msie',fc=10,gc=11,hc='ie10',ic=9,jc='ie9',kc=8,lc='ie8',mc='gecko',nc='gecko1_8',oc='selectingPermutation',pc='mymodule.devmode.js',qc='largeDisplayTouch',rc='00075C70977ED2AB8A6C9F7B99F69C91',sc='smallDisplayTouch',tc='0A97003355B1FE17AA8875AAA64E1AE2',uc='smallDisplayArrows',vc='0B497B963B0ACB0DFDD98EAA52E87C83',wc='largeDisplayArrows',xc='118BDC3E9D6A7EC75383D9122C98B67A',yc='largeDisplayMouse',zc='3DF55A5C5FC363EC59848CD9C47277E9',Ac='4560C1EA2803E6046E048ECBE188B036',Bc='5285C8E2518E86E9EDE7298BF11F3CF1',Cc='70900B49873DC60F029D809BBC6432F9',Dc='743FF9CFDFD53E06A1BF4FCFC0A7D1B3',Ec='7E47F6F59CCC125FFFEADB359B935DE6',Fc='8A3ECEB220D040B098686436ED298A3E',Gc='980EBA3F58198CC6C3E097D3EC97A0FB',Hc='A0C4D96160145C4098DFF7AA2A260174',Ic='A7E246BA5DB151D4F7951C885E62A0FB',Jc='ABB8A7DBF8E52F5A5C0B259E4EE3A1A3',Kc='AE479DCB7816B51896ED2CF4D1456684',Lc='BC78DEFDDB6439BEA647BE8D2B8F7482',Mc='C368EFBC96B2C25CB0C88F5F47F4268F',Nc='C49A9A94290C27E22BB6FBED92061E57',Oc='C566EE37206E528B02C9B6D8C02B3BE7',Pc='CAFCA9F13A35248B43ABED6A096BF317',Qc='D37E74E766259E56AD716934F2BB8406',Rc='DDEF205237E786A738677327727D36F0',Sc='E3FFEBD0811C5E39DF4E3CE2F4A1ECC2',Tc='E9B080AA522958021AC3C107B743D375',Uc=':',Vc='.cache.js',Wc='loadExternalRefs',Xc='end',Yc='http:',Zc='file:',$c='_gwt_dummy_',_c='__gwtDevModeHook:mymodule',ad='Ignoring non-whitelisted Dev Mode URL: ',bd=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
mymodule.__sendStats=r;mymodule.__moduleName=S;mymodule.__errFn=null;mymodule.__moduleBase=U;mymodule.__softPermutationId=V;mymodule.__computePropValue=null;mymodule.__getPropMap=null;mymodule.__installRunAsyncCode=function(){};mymodule.__gwtStartLoadingFragment=function(){return null};mymodule.__gwt_isKnownPropertyValue=function(){return false};mymodule.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};mymodule.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[mymodule.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){if(b()){d()}},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
mymodule.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(mymodule.__errFn){n.onerror=function(){mymodule.__errFn(S,new Error(nb+code))}}p.getElementsByTagName(ob)[V].appendChild(n)}
mymodule.__startLoadingFragment=function(a){return D(a)};mymodule.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,bb);if(j.indexOf(sb)>=V){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;mymodule.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return mymodule.__moduleBase+a}
function F(){var f=[];var g=V;function h(a,b){var c=f;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Kb]=function(){var a=navigator.userAgent.toLowerCase();var b=Lb in window;if(a.indexOf(Mb)!=-1||a.indexOf(Nb)!=-1){return Ob+(b?Pb:Qb)}else if(a.indexOf(Rb)!=-1||(a.indexOf(Sb)!=-1||(a.indexOf(Tb)!=-1||(a.indexOf(Ub)!=-1||(a.indexOf(Vb)!=-1||a.indexOf(Wb)!=-1))))){return Xb+(b?Pb:Qb)}else if(a.indexOf(Yb)!=-1){return Ob+(b?Pb:Qb)}else{return Ob+(b?Pb:Zb)}};i[Kb]={largeDisplayArrows:V,largeDisplayMouse:W,largeDisplayTouch:$b,smallDisplayArrows:_b,smallDisplayTouch:ac};j[bc]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(cc)!=-1}())return dc;if(function(){return a.indexOf(ec)!=-1&&(b>=fc&&b<gc)}())return hc;if(function(){return a.indexOf(ec)!=-1&&(b>=ic&&b<gc)}())return jc;if(function(){return a.indexOf(ec)!=-1&&(b>=kc&&b<gc)}())return lc;if(function(){return a.indexOf(mc)!=-1||b>=gc}())return nc;return bb};i[bc]={gecko1_8:V,ie10:W,ie8:$b,ie9:_b,safari:ac};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};mymodule.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};mymodule.__computePropValue=k;o.__gwt_activeModules[S].bindings=mymodule.__getPropMap;r(O,oc);if(q()){return D(pc)}var l;try{h([qc,hc],rc);h([sc,hc],tc);h([uc,jc],vc);h([wc,dc],xc);h([yc,dc],zc);h([uc,dc],Ac);h([sc,nc],Bc);h([uc,lc],Cc);h([sc,jc],Dc);h([wc,jc],Ec);h([yc,jc],Fc);h([yc,lc],Gc);h([wc,nc],Hc);h([qc,dc],Ic);h([yc,nc],Jc);h([yc,hc],Kc);h([wc,hc],Lc);h([uc,hc],Mc);h([qc,nc],Nc);h([sc,lc],Oc);h([qc,lc],Pc);h([qc,jc],Qc);h([uc,nc],Rc);h([sc,dc],Sc);h([wc,lc],Tc);l=f[k(Kb)][k(bc)];var m=l.indexOf(Uc);if(m!=-1){g=parseInt(l.substring(m+W),fc);l=l.substring(V,m)}}catch(a){}mymodule.__softPermutationId=g;return D(l+Vc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(Wc,P);r(Wc,Xc)}
B();mymodule.__moduleBase=C();t[S].moduleBase=mymodule.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==Yc||o.location.protocol==Zc);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=$c;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=_c;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(ad+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+bd]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(ob)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,Xc);A(H);return true}
mymodule.succeeded=mymodule();