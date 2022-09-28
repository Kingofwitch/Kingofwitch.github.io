/*! For license information please see 82.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"856":function(r,t,e){var n,o,a,i,u=e(75).default;i=function(r,t,e){"use strict";function _interopDefaultLegacy(r){return r&&"object"===u(r)&&"default"in r?r:{"default":r}}var n=_interopDefaultLegacy(t),o=function __assign(){return(o=Object.assign||function __assign(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r}).apply(this,arguments)},a={"CHAR_TILDE":102},i=1,f=2,c=3,l=4,s=5,g=[[2,1,2,2,2,2,0,0],[2,2,2,1,2,2,0,0],[2,2,2,2,2,1,0,0],[1,2,1,2,2,3,0,0],[1,2,1,3,2,2,0,0],[1,3,1,2,2,2,0,0],[1,2,2,2,1,3,0,0],[1,2,2,3,1,2,0,0],[1,3,2,2,1,2,0,0],[2,2,1,2,1,3,0,0],[2,2,1,3,1,2,0,0],[2,3,1,2,1,2,0,0],[1,1,2,2,3,2,0,0],[1,2,2,1,3,2,0,0],[1,2,2,2,3,1,0,0],[1,1,3,2,2,2,0,0],[1,2,3,1,2,2,0,0],[1,2,3,2,2,1,0,0],[2,2,3,2,1,1,0,0],[2,2,1,1,3,2,0,0],[2,2,1,2,3,1,0,0],[2,1,3,2,1,2,0,0],[2,2,3,1,1,2,0,0],[3,1,2,1,3,1,0,0],[3,1,1,2,2,2,0,0],[3,2,1,1,2,2,0,0],[3,2,1,2,2,1,0,0],[3,1,2,2,1,2,0,0],[3,2,2,1,1,2,0,0],[3,2,2,2,1,1,0,0],[2,1,2,1,2,3,0,0],[2,1,2,3,2,1,0,0],[2,3,2,1,2,1,0,0],[1,1,1,3,2,3,0,0],[1,3,1,1,2,3,0,0],[1,3,1,3,2,1,0,0],[1,1,2,3,1,3,0,0],[1,3,2,1,1,3,0,0],[1,3,2,3,1,1,0,0],[2,1,1,3,1,3,0,0],[2,3,1,1,1,3,0,0],[2,3,1,3,1,1,0,0],[1,1,2,1,3,3,0,0],[1,1,2,3,3,1,0,0],[1,3,2,1,3,1,0,0],[1,1,3,1,2,3,0,0],[1,1,3,3,2,1,0,0],[1,3,3,1,2,1,0,0],[3,1,3,1,2,1,0,0],[2,1,1,3,3,1,0,0],[2,3,1,1,3,1,0,0],[2,1,3,1,1,3,0,0],[2,1,3,3,1,1,0,0],[2,1,3,1,3,1,0,0],[3,1,1,1,2,3,0,0],[3,1,1,3,2,1,0,0],[3,3,1,1,2,1,0,0],[3,1,2,1,1,3,0,0],[3,1,2,3,1,1,0,0],[3,3,2,1,1,1,0,0],[3,1,4,1,1,1,0,0],[2,2,1,4,1,1,0,0],[4,3,1,1,1,1,0,0],[1,1,1,2,2,4,0,0],[1,1,1,4,2,2,0,0],[1,2,1,1,2,4,0,0],[1,2,1,4,2,1,0,0],[1,4,1,1,2,2,0,0],[1,4,1,2,2,1,0,0],[1,1,2,2,1,4,0,0],[1,1,2,4,1,2,0,0],[1,2,2,1,1,4,0,0],[1,2,2,4,1,1,0,0],[1,4,2,1,1,2,0,0],[1,4,2,2,1,1,0,0],[2,4,1,2,1,1,0,0],[2,2,1,1,1,4,0,0],[4,1,3,1,1,1,0,0],[2,4,1,1,1,2,0,0],[1,3,4,1,1,1,0,0],[1,1,1,2,4,2,0,0],[1,2,1,1,4,2,0,0],[1,2,1,2,4,1,0,0],[1,1,4,2,1,2,0,0],[1,2,4,1,1,2,0,0],[1,2,4,2,1,1,0,0],[4,1,1,2,1,2,0,0],[4,2,1,1,1,2,0,0],[4,2,1,2,1,1,0,0],[2,1,2,1,4,1,0,0],[2,1,4,1,2,1,0,0],[4,1,2,1,2,1,0,0],[1,1,1,1,4,3,0,0],[1,1,1,3,4,1,0,0],[1,3,1,1,4,1,0,0],[1,1,4,1,1,3,0,0],[1,1,4,3,1,1,0,0],[4,1,1,1,1,3,0,0],[4,1,1,3,1,1,0,0],[1,1,3,1,4,1,0,0],[1,1,4,1,3,1,0,0],[3,1,1,1,4,1,0,0],[4,1,1,1,3,1,0,0],[2,1,1,4,1,2,0,0],[2,1,1,2,1,4,0,0],[2,1,1,2,3,2,0,0],[2,3,3,1,1,1,2,0]];function code128(r){for(var t=function stringToCode128(r){var t={"currcs":s},e=function getBytes(r){for(var t=[],e=0;e<r.length;e++)t.push(r.charCodeAt(e));return t}(r),n=126==e[0]?1:0,o=e.length>0?codeSetAllowedFor(e[n++]):f,i=e.length>0?codeSetAllowedFor(e[n++]):f;t.currcs=function getBestStartSet(r,t){var e=0;return e+=r==c?1:0,e+=r==l?-1:0,e+=t==c?1:0,(e+=t==l?-1:0)>0?c:l}(o,i),t.currcs=function perhapsCodeC(r,t){for(var e=0;e<r.length;e++){var n=r[e];if((n<48||n>57)&&126!=n)return t}return s}(e,t.currcs);var u=[];switch(t.currcs){case c:u.push(103);break;case l:u.push(104);break;default:u.push(105)}for(var g=0;g<e.length;g++){var h=e[g];h in a&&(u.push(a[h]),g++,h=e[g]);var d=e.length>g+1?e[g+1]:-1;u=u.concat(codesForChar(h,d,t.currcs)),t.currcs==s&&g++}for(var v=u[0],p=1;p<u.length;p++)v+=p*u[p];return u.push(v%103),u.push(106),u;function codesForChar(r,e,n){var o=[],a=-1;if(charCompatible(r,n))n==s&&(-1==e?(a=100,n=l):-1==e||charCompatible(e,n)||(charCompatible(e,c)?(a=101,n=c):(a=100,n=l)));else if(-1==e||charCompatible(e,n))a=98;else switch(n){case c:a=100,n=l;break;case l:a=101,n=c}return-1!=a?(o.push(a),o.push(codeValue(r))):n==s?o.push(codeValue(r,e)):o.push(codeValue(r)),t.currcs=n,o}}(r),e=[],n=0;n<t.length;n++)for(var o=t[n],i=0;i<8;i+=2){var u=g[o][i];e=e.concat(Array(u).fill(1));var h=g[o][i+1];e=e.concat(Array(h).fill(0))}return e}function codeValue(r,t){return void 0===t&&(t=void 0),void 0===t?r>=32?r-32:r+64:parseInt(String.fromCharCode(r)+String.fromCharCode(t))}function charCompatible(r,t){var e=codeSetAllowedFor(r);return e==i||e==f||e==c&&t==c||e==l&&t==l}function codeSetAllowedFor(r){return r>=48&&r<=57?i:r>=32&&r<=95?f:r<32?c:l}function getLittleEndianHex(r){for(var t=[],e=4;e>0;e--)t.push(String.fromCharCode(255&r)),r>>=8;return t.join("")}function barcode(r){var t=r.text,e=void 0===t?"":t,n=r.scale,o=void 0===n?4:n,a=r.blackColor,i=r.whiteColor,u=code128(e),f=u.length*o,c=f%4,l=1*(3*f+c),s=getLittleEndianHex(l+54),g=getLittleEndianHex(l);return"data:image/bmp;base64,"+function btoa(r){for(var t,e,n,o,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="",u=0,f=(r=String(r)).length%3;u<r.length;){if((e=r.charCodeAt(u++))>255||(n=r.charCodeAt(u++))>255||(o=r.charCodeAt(u++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=a.charAt((t=e<<16|n<<8|o)>>18&63)+a.charAt(t>>12&63)+a.charAt(t>>6&63)+a.charAt(63&t)}return f?i.slice(0,f-3)+"===".substring(f):i}("BM"+s+"\0\0\0\x006\0\0\0(\0\0\0"+getLittleEndianHex(f)+getLittleEndianHex(1)+"\0\0\0\0\0\0"+g+"\v\0\0\v\0\0\0\0\0\0\0\0\0\0"+function getBuffer(r){var t=r.pieces,e=r.width,n=r.extraBytes,o=r.scale,a=void 0===o?1:o,i=r.whiteColor,u=void 0===i?"":i,f=r.blackColor,c=(void 0===f?"":f).split(""),l=u.split(""),s=[parseInt(""+c[5]+c[6],16),parseInt(""+c[3]+c[4],16),parseInt(""+c[1]+c[2],16)],g=[parseInt(""+l[5]+l[6],16),parseInt(""+l[3]+l[4],16),parseInt(""+l[1]+l[2],16)];return t.map((function(r){return Array(a).fill(r)})).reduce((function(r,t){return r.concat(t)}),[]).map((function(r,t){var o=parseInt(r)?s:g;return t%e-1||!n?o:o.concat(Array(n).fill(0))})).reduce((function(r,t){return r.concat(t)}),[]).map((function(r){return String.fromCharCode(r)})).join("")}({"pieces":u,"width":f,"extraBytes":c,"scale":o,"blackColor":a,"whiteColor":i}))}var h=t.forwardRef((function(r,a){var i=r.className,u=r.text,f=void 0===u?"":u,c=r.scale,l=void 0===c?4:c,s=r.width,g=void 0===s?300:s,h=r.height,d=void 0===h?60:h,v=r.style,p=void 0===v?{}:v,w=r.foregroundColor,y=void 0===w?"#000000":w,m=r.backgroundColor,C=void 0===m?"#FFFFFF":m,b=t.useMemo((function(){return barcode({"text":f,"scale":l,"whiteColor":C,"blackColor":y})}),[f,l,C,y]);t.useImperativeHandle(a,(function(){return{"image":b}}),[b]);var B=o({"width":null!=g?g+"px":"","height":null!=d?d+"px":""},p);return n.default.createElement(e.Image,{"className":i,"style":B,"src":null!=b?b:""})})),d=function qrcode(r,t){var e=r,n=B[t],o=null,a=0,i=null,u=[],f={},c=function makeImpl(r,t){o=function(r){for(var t=new Array(r),e=0;e<r;e+=1){t[e]=new Array(r);for(var n=0;n<r;n+=1)t[e][n]=null}return t}(a=4*e+17),l(0,0),l(a-7,0),l(0,a-7),g(),s(),d(r,t),e>=7&&h(r),null==i&&(i=p(e,n,u)),v(i,t)},l=function setupPositionProbePattern(r,t){for(var e=-1;e<=7;e+=1)if(!(r+e<=-1||a<=r+e))for(var n=-1;n<=7;n+=1)t+n<=-1||a<=t+n||(o[r+e][t+n]=e>=0&&e<=6&&(0==n||6==n)||n>=0&&n<=6&&(0==e||6==e)||e>=2&&e<=4&&n>=2&&n<=4)},s=function setupTimingPattern(){for(var r=8;r<a-8;r+=1)null==o[r][6]&&(o[r][6]=r%2==0);for(var t=8;t<a-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},g=function setupPositionAdjustPattern(){for(var r=E.getPatternPosition(e),t=0;t<r.length;t+=1)for(var n=0;n<r.length;n+=1){var a=r[t],i=r[n];if(null==o[a][i])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[a+u][i+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},h=function setupTypeNumber(r){for(var t=E.getBCHTypeNumber(e),n=0;n<18;n+=1){var i=!r&&1==(t>>n&1);o[Math.floor(n/3)][n%3+a-8-3]=i}for(n=0;n<18;n+=1)i=!r&&1==(t>>n&1),o[n%3+a-8-3][Math.floor(n/3)]=i},d=function setupTypeInfo(r,t){for(var e=n<<3|t,i=E.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!r&&1==(i>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[a-15+u][8]=f}for(u=0;u<15;u+=1)f=!r&&1==(i>>u&1),u<8?o[8][a-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f;o[a-8][8]=!r},v=function mapData(r,t){for(var e=-1,n=a-1,i=7,u=0,f=E.getMaskFunction(t),c=a-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var l=0;l<2;l+=1)if(null==o[n][c-l]){var s=!1;u<r.length&&(s=1==(r[u]>>>i&1)),f(n,c-l)&&(s=!s),o[n][c-l]=s,-1==(i-=1)&&(u+=1,i=7)}if((n+=e)<0||a<=n){n-=e,e=-e;break}}},p=function createData(r,t,e){for(var n=F.getRSBlocks(r,t),o=T(),a=0;a<e.length;a+=1){var i=e[a];o.put(i.getMode(),4),o.put(i.getLength(),E.getLengthInBits(i.getMode(),r)),i.write(o)}var u=0;for(a=0;a<n.length;a+=1)u+=n[a].dataCount;if(o.getLengthInBits()>8*u)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*u+")");for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function createBytes(r,t){for(var e=0,n=0,o=0,a=new Array(t.length),i=new Array(t.length),u=0;u<t.length;u+=1){var f=t[u].dataCount,c=t[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),a[u]=new Array(f);for(var l=0;l<a[u].length;l+=1)a[u][l]=255&r.getBuffer()[l+e];e+=f;var s=E.getErrorCorrectPolynomial(c),g=qrPolynomial(a[u],s.getLength()-1).mod(s);for(i[u]=new Array(s.getLength()-1),l=0;l<i[u].length;l+=1){var h=l+g.getLength()-i[u].length;i[u][l]=h>=0?g.getAt(h):0}}var d=0;for(l=0;l<t.length;l+=1)d+=t[l].totalCount;var v=new Array(d),p=0;for(l=0;l<n;l+=1)for(u=0;u<t.length;u+=1)l<a[u].length&&(v[p]=a[u][l],p+=1);for(l=0;l<o;l+=1)for(u=0;u<t.length;u+=1)l<i[u].length&&(v[p]=i[u][l],p+=1);return v}(o,n)};return f.addData=function(r){var t=O(r);u.push(t),i=null},f.isDark=function(r,t){if(r<0||a<=r||t<0||a<=t)throw new Error(r+","+t);return o[r][t]},f.getModuleCount=function(){return a},f.make=function(){c(!1,function getBestMaskPattern(){for(var r=0,t=0,e=0;e<8;e+=1){c(!0,e);var n=E.getLostPoint(f);(0==e||r>n)&&(r=n,t=e)}return t}())},f.createTableTag=function(r,t){r=r||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(t=void 0===t?4*r:t)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createImgTag=function(r,t,e,n,o){r=r||2;var a=t=void 0===t?4*r:t,i=f.getModuleCount()*r+t;return q(e,e,(function(t,e){if(a<=t&&t<i&&a<=e&&e<i){var n=Math.floor((t-a)/r),o=Math.floor((e-a)/r);return f.isDark(o,n)?0:1}return 1}),n,o)},f};d.stringToBytes=function(r){for(var t=[],e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t},d.createStringToBytes=function(r,t){var e=function(){for(var e=N(r),n=function read(){var r=e.read();if(-1==r)throw new Error;return r},o=0,a={};;){var i=e.read();if(-1==i)break;var u=n(),f=n()<<8|n();a[String.fromCharCode(i<<8|u)]=f,o+=1}if(o!=t)throw new Error(o+" != "+t);return a}(),n="?".charCodeAt(0);return function(r){for(var t=[],o=0;o<r.length;o+=1){var a=r.charCodeAt(o);if(a<128)t.push(a);else{var i=e[r.charAt(o)];"number"==typeof i?(255&i)==i?t.push(i):(t.push(i>>>8),t.push(255&i)):t.push(n)}}return t}};var v,p,w,y=1,m=2,C=4,b=8,B={"L":1,"M":0,"Q":3,"H":2},k=0,A=1,L=2,I=3,x=4,S=5,D=6,M=7,E=(v=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],w=function getBCHDigit(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t},(p={}).getBCHTypeInfo=function(r){for(var t=r<<10;w(t)-w(1335)>=0;)t^=1335<<w(t)-w(1335);return 21522^(r<<10|t)},p.getBCHTypeNumber=function(r){for(var t=r<<12;w(t)-w(7973)>=0;)t^=7973<<w(t)-w(7973);return r<<12|t},p.getPatternPosition=function(r){return v[r-1]},p.getMaskFunction=function(r){switch(r){case k:return function(r,t){return(r+t)%2==0};case A:return function(r){return r%2==0};case L:return function(r,t){return t%3==0};case I:return function(r,t){return(r+t)%3==0};case x:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case S:return function(r,t){return r*t%2+r*t%3==0};case D:return function(r,t){return(r*t%2+r*t%3)%2==0};case M:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw new Error("bad maskPattern:"+r)}},p.getErrorCorrectPolynomial=function(r){for(var t=qrPolynomial([1],0),e=0;e<r;e+=1)t=t.multiply(qrPolynomial([1,P.gexp(e)],0));return t},p.getLengthInBits=function(r,t){if(t>=1&&t<10)switch(r){case y:return 10;case m:return 9;case C:case b:return 8;default:throw new Error("mode:"+r)}else if(t<27)switch(r){case y:return 12;case m:return 11;case C:return 16;case b:return 10;default:throw new Error("mode:"+r)}else{if(!(t<41))throw new Error("type:"+t);switch(r){case y:return 14;case m:return 13;case C:return 16;case b:return 12;default:throw new Error("mode:"+r)}}},p.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;n<t;n+=1)for(var o=0;o<t;o+=1){for(var a=0,i=r.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||t<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||t<=o+f||0==u&&0==f||i==r.isDark(n+u,o+f)&&(a+=1);a>5&&(e+=3+a-5)}for(n=0;n<t-1;n+=1)for(o=0;o<t-1;o+=1){var c=0;r.isDark(n,o)&&(c+=1),r.isDark(n+1,o)&&(c+=1),r.isDark(n,o+1)&&(c+=1),r.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<t;n+=1)for(o=0;o<t-6;o+=1)r.isDark(n,o)&&!r.isDark(n,o+1)&&r.isDark(n,o+2)&&r.isDark(n,o+3)&&r.isDark(n,o+4)&&!r.isDark(n,o+5)&&r.isDark(n,o+6)&&(e+=40);for(o=0;o<t;o+=1)for(n=0;n<t-6;n+=1)r.isDark(n,o)&&!r.isDark(n+1,o)&&r.isDark(n+2,o)&&r.isDark(n+3,o)&&r.isDark(n+4,o)&&!r.isDark(n+5,o)&&r.isDark(n+6,o)&&(e+=40);var l=0;for(o=0;o<t;o+=1)for(n=0;n<t;n+=1)r.isDark(n,o)&&(l+=1);return e+=Math.abs(100*l/t/t-50)/5*10},p),P=function(){for(var r=new Array(256),t=new Array(256),e=0;e<8;e+=1)r[e]=1<<e;for(e=8;e<256;e+=1)r[e]=r[e-4]^r[e-5]^r[e-6]^r[e-8];for(e=0;e<255;e+=1)t[r[e]]=e;var n={"glog":function(r){if(r<1)throw new Error("glog("+r+")");return t[r]},"gexp":function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r[t]}};return n}();function qrPolynomial(r,t){if(void 0===r.length)throw new Error(r.length+"/"+t);var e=function(){for(var e=0;e<r.length&&0==r[e];)e+=1;for(var n=new Array(r.length-e+t),o=0;o<r.length-e;o+=1)n[o]=r[o+e];return n}(),n={"getAt":function(r){return e[r]},"getLength":function(){return e.length},"multiply":function(r){for(var t=new Array(n.getLength()+r.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<r.getLength();o+=1)t[e+o]^=P.gexp(P.glog(n.getAt(e))+P.glog(r.getAt(o)));return qrPolynomial(t,0)},"mod":function(r){if(n.getLength()-r.getLength()<0)return n;for(var t=P.glog(n.getAt(0))-P.glog(r.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<r.getLength();o+=1)e[o]^=P.gexp(P.glog(r.getAt(o))+t);return qrPolynomial(e,0).mod(r)}};return n}var F=function(){var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function qrRSBlock(r,t){var e={};return e.totalCount=r,e.dataCount=t,e},e={"getRSBlocks":function(e,n){var o=function getRsBlockTable(t,e){switch(e){case B.L:return r[4*(t-1)+0];case B.M:return r[4*(t-1)+1];case B.Q:return r[4*(t-1)+2];case B.H:return r[4*(t-1)+3];default:return}}(e,n);if(void 0===o)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+n);for(var a=o.length/3,i=[],u=0;u<a;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],s=0;s<f;s+=1)i.push(t(c,l));return i}};return e}(),T=function qrBitBuffer(){var r=[],t=0,e={"getBuffer":function(){return r},"getAt":function(t){var e=Math.floor(t/8);return 1==(r[e]>>>7-t%8&1)},"put":function(r,t){for(var n=0;n<t;n+=1)e.putBit(1==(r>>>t-n-1&1))},"getLengthInBits":function(){return t},"putBit":function(e){var n=Math.floor(t/8);r.length<=n&&r.push(0),e&&(r[n]|=128>>>t%8),t+=1}};return e},O=function qr8BitByte(r){for(var t=C,e=r,n=[],o={},a=0,i=e.length;a<i;a++){var u=[],f=e.charCodeAt(a);f>65536?(u[0]=240|(1835008&f)>>>18,u[1]=128|(258048&f)>>>12,u[2]=128|(4032&f)>>>6,u[3]=128|63&f):f>2048?(u[0]=224|(61440&f)>>>12,u[1]=128|(4032&f)>>>6,u[2]=128|63&f):f>128?(u[0]=192|(1984&f)>>>6,u[1]=128|63&f):u[0]=f,n.push(u)}(n=Array.prototype.concat.apply([],n)).length!=e.length&&(n.unshift(191),n.unshift(187),n.unshift(239));var c=n;return o.getMode=function(){return t},o.getLength=function(){return c.length},o.write=function(r){for(var t=0;t<c.length;t+=1)r.put(c[t],8)},o},H=function byteArrayOutputStream(){var r=[],t={"writeByte":function(t){r.push(255&t)},"writeShort":function(r){t.writeByte(r),t.writeByte(r>>>8)},"writeBytes":function(r,e,n){e=e||0,n=n||r.length;for(var o=0;o<n;o+=1)t.writeByte(r[o+e])},"writeString":function(r){for(var e=0;e<r.length;e+=1)t.writeByte(r.charCodeAt(e))},"toByteArray":function(){return r},"toString":function(){var t="";t+="[";for(var e=0;e<r.length;e+=1)e>0&&(t+=","),t+=r[e];return t+="]"}};return t},N=function base64DecodeInputStream(r){var t=r,e=0,n=0,o=0,a={"read":function(){for(;o<8;){if(e>=t.length){if(0==o)return-1;throw new Error("unexpected end of file./"+o)}var r=t.charAt(e);if(e+=1,"="==r)return o=0,-1;r.match(/^\s$/)||(n=n<<6|i(r.charCodeAt(0)),o+=6)}var a=n>>>o-8&255;return o-=8,a}},i=function decode(r){if(r>=65&&r<=90)return r-65;if(r>=97&&r<=122)return r-97+26;if(r>=48&&r<=57)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw new Error("c:"+r)};return a},j=function gifImage(r,t){var e=r,n=t,o=new Array(r*t),a={"setPixel":function(r,t,n){o[t*e+r]=n},"write":function(r,t,o){void 0===t&&(t="#000000"),void 0===o&&(o="#ffffff"),r.writeString("GIF87a"),r.writeShort(e),r.writeShort(n),r.writeByte(128),r.writeByte(0),r.writeByte(0);var a=t.split("");r.writeByte(parseInt(""+a[1]+a[2],16)),r.writeByte(parseInt(""+a[3]+a[4],16)),r.writeByte(parseInt(""+a[5]+a[6],16));var u=o.split("");r.writeByte(parseInt(""+u[1]+u[2],16)),r.writeByte(parseInt(""+u[3]+u[4],16)),r.writeByte(parseInt(""+u[5]+u[6],16)),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(e),r.writeShort(n),r.writeByte(0);var f=i(2);r.writeByte(2);for(var c=0;f.length-c>255;)r.writeByte(255),r.writeBytes(f,c,255),c+=255;r.writeByte(f.length-c),r.writeBytes(f,c,f.length-c),r.writeByte(0),r.writeString(";")}},i=function getLZWRaster(r){for(var t=1<<r,e=1+(1<<r),n=r+1,a=u(),i=0;i<t;i+=1)a.add(String.fromCharCode(i));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(e));var f=H(),c=function bitOutputStream(r){var t=r,e=0,n=0,o={"write":function(r,o){if(r>>>o!=0)throw new Error("length over");for(;e+o>=8;)t.writeByte(255&(r<<e|n)),o-=8-e,r>>>=8-e,n=0,e=0;n|=r<<e,e+=o},"flush":function(){e>0&&t.writeByte(n)}};return o}(f);c.write(t,n);var l=0,s=String.fromCharCode(o[l]);for(l+=1;l<o.length;){var g=String.fromCharCode(o[l]);l+=1,a.contains(s+g)?s+=g:(c.write(a.indexOf(s),n),a.size()<4095&&(a.size()==1<<n&&(n+=1),a.add(s+g)),s=g)}return c.write(a.indexOf(s),n),c.write(e,n),c.flush(),f.toByteArray()},u=function lzwTable(){var r={},t=0,e={"add":function(n){if(e.contains(n))throw new Error("dup key:"+n);r[n]=t,t+=1},"size":function(){return t},"indexOf":function(t){return r[t]},"contains":function(t){return void 0!==r[t]}};return e};return a},q=function createImgTag(r,t,e,n,o){for(var a=j(r,t),i=0;i<t;i+=1)for(var u=0;u<r;u+=1)a.setPixel(u,i,e(u,i));var f=H();a.write(f,n,o);for(var c=function base64EncodeOutputStream(){var r=0,t=0,e=0,n="",o={},a=function writeEncoded(r){n+=String.fromCharCode(i(63&r))},i=function encode(r){if(r<0);else{if(r<26)return 65+r;if(r<52)return r-26+97;if(r<62)return r-52+48;if(62==r)return 43;if(63==r)return 47}throw new Error("n:"+r)};return o.writeByte=function(n){for(r=r<<8|255&n,t+=8,e+=1;t>=6;)a(r>>>t-6),t-=6},o.flush=function(){if(t>0&&(a(r<<6-t),r=0,t=0),e%3!=0)for(var o=3-e%3,i=0;i<o;i+=1)n+="="},o.toString=function(){return n},o}(),l=f.toByteArray(),s=0;s<l.length;s+=1)c.writeByte(l[s]);c.flush();var g="";return g+="data:image/gif;base64,",g+=c},_=t.forwardRef((function(r,a){var i=r.className,u=r.text,f=void 0===u?"":u,c=r.size,l=void 0===c?100:c,s=r.scale,g=void 0===s?4:s,h=r.typeNumber,v=void 0===h?2:h,p=r.errorCorrectLevel,w=void 0===p?"M":p,y=r.style,m=void 0===y?{}:y,C=r.foregroundColor,b=void 0===C?"#000000":C,B=r.backgroundColor,k=void 0===B?"#FFFFFF":B,A=function __rest(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(e[n[o]]=r[n[o]])}return e}(r,["className","text","size","scale","typeNumber","errorCorrectLevel","style","foregroundColor","backgroundColor"]),L=t.useMemo((function(){return function createQrCodeImg(r,t){var e,n,o,a,i,u,f=null!==(e=(t=null!=t?t:{}).typeNumber)&&void 0!==e?e:4,c=null!==(n=t.errorCorrectLevel)&&void 0!==n?n:"M",l=null!==(o=t.size)&&void 0!==o?o:500,s=null!==(a=t.black)&&void 0!==a?a:"#000000",g=null!==(i=t.white)&&void 0!==i?i:"#FFFFFF";try{(u=d(f,null!=c?c:"M")).addData(r),u.make()}catch(t){if(f>=40)throw new Error("Text too long to encode");return createQrCodeImg(r,{"size":l,"errorCorrectLevel":c,"typeNumber":f+1,"black":s,"white":g})}var h=parseInt(""+l/u.getModuleCount()),v=parseInt(""+(l-u.getModuleCount()*h)/2);return u.createImgTag(h,v,l,s,g)}(f,{"errorCorrectLevel":w,"typeNumber":v,"size":l*g,"black":b,"white":k})}),[w,v,l,g,b,k,f]),I=o({"width":null!=l?l+"px":"","height":null!=l?l+"px":""},m);return t.useImperativeHandle(a,(function(){return{"image":L}}),[L]),n.default.createElement(e.Image,o({},A,{"className":i,"style":I,"src":L}))}));r.Barcode=h,r.QRCode=_,Object.defineProperty(r,"__esModule",{"value":!0})},"object"===u(t)&&void 0!==r?i(t,e(2),e(37)):(o=[t,e(2),e(37)],void 0===(a="function"==typeof(n=i)?n.apply(t,o):n)||(r.exports=a))}}]);