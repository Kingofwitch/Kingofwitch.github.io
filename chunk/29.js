(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"784":function(e,t,n){e.exports={"themeColor":"#2DC09B","themeTextColor":"#00A6A7","backgroundColor":"#F2F4F6","textColor":"rgba(0, 0, 0, 0.9)","btnBackgroundColor":"#F6F6F7","textColorDesc":"rgba(0, 0, 0, 0.3)","textColorSub":"rgba(37, 43, 52, 0.5)","textColorErr":"#FB5151"}},"935":function(e,t,n){"use strict";n.r(t);var o,c=n(3),a=n(4),s=n(36),l=n(24),i=n(25),r=n(9),m=n(2),d=n(142),p=n(141),u=[{"label":"考勤确认","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/attendance-icon_11.png","key":"my-attendance","url":"/pages/attendance/myRecord/index"},{"label":"我的薪资","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/salary-icon_11.png","key":"my-salary","url":"/pages/salary/salaryLists/salaryLists"},{"label":"我的档案","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/files-icon_33.png","key":"my-files","url":"/pages/staff/staffData/staffEdit"},{"label":"我的提成","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/cake-icon_67.png","key":"my-cake"}],b=(n(784),n(18)),h=Object(d.c)("pageInit")(o=Object(d.d)(o=function(e){Object(l.a)(Index,e);var t=Object(i.a)(Index);function Index(){var e;Object(c.a)(this,Index);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),Object(r.a)(Object(s.a)(e),"toolClick",(function(e){e.url&&(p.Router.navigate({"url":e.url}),console.log("item",e))})),e}return Object(a.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"render","value":function render(){var e=this;return console.log(this.props),Object(b.jsxs)("div",{"className":"home home-index","children":[Object(b.jsxs)("div",{"className":"home-top","children":[Object(b.jsx)("img",{"className":"home-top-img","src":"https://jdc.jd.com/img/200"}),Object(b.jsx)("div",{"className":"home-top-name","children":"白茶 (007)"})]}),Object(b.jsx)("div",{"className":"home-tools","children":u.map((function(t){return Object(b.jsxs)("div",{"className":"home-tools-item item-tap","onClick":function onClick(){return e.toolClick(t)},"children":[Object(b.jsx)("img",{"className":"home-tools-item-icon","src":t.icon}),Object(b.jsx)("div",{"className":"home-tools-item-label","children":t.label})]},t.key)}))})]})}}]),Index}(m.Component))||o)||o;t.default=h}}]);