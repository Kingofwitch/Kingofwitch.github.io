(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"436":function(e,t,n){"use strict";n(492);var i=n(493),a=n(7),c=(n(494),n(500)),l=n(15),o=n(2),s=n(18);t.a=function BlockWithTitle(e){var t=Object(o.useState)("1"),n=Object(l.a)(t,2),r=n[0],b=n[1],u=e.children,d=e.label,f=e.labelStyle,j=void 0===f?{}:f,m=e.colapseDisabled,p=void 0===m||m,O=e.collapseProps,h=void 0===O?{}:O,g=Object(o.useCallback)((function(e){p||b(e.detail)}),[b,p]);return Object(s.jsx)(i.a,Object(a.a)(Object(a.a)({"className":"collapse-no-style","accordion":!0,"value":r,"onChange":g},h),{},{"children":Object(s.jsx)(c.a,Object(a.a)(Object(a.a)({"className":["collapse-item-no-style",d?"":"collapse-item-no-label",p?"collapse-item-no-icon":""].join(" "),"title":d,"clickable":p,"name":"1"},j),{},{"children":u}))}))}},"675":function(e,t,n){},"693":function(e,t,n){"use strict";n(492);var i=n(493),a=(n(494),n(500)),c=(n(207),n(675),n(80)),l=n.n(c),o=n(54),s=n.n(o),r=n(44),b=n.n(r),u=n(55),d=n.n(u),f=n(38),j=n.n(f),m=n(56),p=n.n(m),O=n(81),h=n.n(O),g=n(82),v=n.n(g),k=n(83),x=n.n(k),y=n(84),C=n.n(y),w=n(37),I=n(65),L=n(18),M=["inset","title","border","children","style","className"];function ownKeys(e,t){var n=l()(e);if(s.a){var i=s()(e);t&&(i=b()(i).call(i,(function(t){return d()(e,t).enumerable}))),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,i,a=null!=arguments[t]?arguments[t]:{};t%2?j()(n=ownKeys(Object(a),!0)).call(n,(function(t){x()(e,t,a[t])})):p.a?h()(e,p()(a)):j()(i=ownKeys(Object(a))).call(i,(function(t){v()(e,t,d()(a,t))}))}return e}var N=function CellGroup(e){var t=e.inset,n=e.title,i=e.border,a=void 0===i||i,c=e.children,l=e.style,o=e.className,s=C()(e,M);return Object(L.jsxs)(L.Fragment,{"children":[n&&Object(L.jsx)(w.View,{"className":I.b("cell-group__title",{"inset":t}),"children":n}),Object(L.jsx)(w.View,_objectSpread(_objectSpread({"className":" "+I.b("cell-group",{"inset":t})+" "+(a?"van-hairline--top-bottom":"")+" ".concat(o||""),"style":l},s),{},{"children":c}))]})},S=n(7),B=(n(209),n(210),n(501),n(502)),F=n(15),z=n(2);t.a=function ListWithTitle(e){var t=Object(z.useState)("1"),n=Object(F.a)(t,2),c=n[0],l=n[1],o=e.dataSource,s=void 0===o?[]:o,r=e.label,b=e.titleStyle,u=void 0===b?{}:b,d=e.groupProps,f=void 0===d?{}:d,j=e.cellProps,m=void 0===j?{}:j,p=e.colapseDisabled,O=void 0===p||p,h=e.collapseProps,g=void 0===h?{}:h,v=Object(z.useCallback)((function(e){O||l(e.detail)}),[l,O]);return Object(L.jsx)(i.a,Object(S.a)(Object(S.a)({"className":"collapse-no-style","accordion":!0,"value":c,"onChange":v},g),{},{"children":Object(L.jsx)(a.a,Object(S.a)(Object(S.a)({"className":["collapse-item-no-style",r?"":"collapse-item-no-label",O?"collapse-item-no-icon":""].join(" "),"title":r,"clickable":O,"name":"1"},u),{},{"children":Object(L.jsx)(N,Object(S.a)(Object(S.a)({"inset":!0},f),{},{"children":s.map((function(t,n){return Object(L.jsx)(B.b,Object(S.a)(Object(S.a)(Object(S.a)({"isLink":!0},m),t),{},{"onClick":function onClick(){return e.onClick&&e.onClick(t)}}),t.key||n)}))}))}))}))}},"773":function(e,t,n){"use strict";var i=n(7),a=n(138),c=(n(774),n(18)),l=["dataSource"];t.a=function BlockLine(e){var t=e.dataSource,n=void 0===t?[]:t,o=Object(a.a)(e,l);return Object(c.jsx)("div",Object(i.a)(Object(i.a)({"className":"bkline"},o),{},{"children":n.map((function(t,n){return Object(c.jsxs)("div",{"className":"bkline-item","onClick":function onClick(){return e.onClick&&e.onClick(t,n)},"children":[Object(c.jsx)("div",{"className":"bkline-item-top","children":t.value}),Object(c.jsx)("div",{"className":"bkline-item-btm","children":t.title})]},t.key||n)}))}))}},"774":function(e,t,n){e.exports={"themeColor":"#2DC09B","themeTextColor":"#00A6A7","backgroundColor":"#F2F4F6","textColor":"rgba(0, 0, 0, 0.9)","btnBackgroundColor":"#F6F6F7","textColorDesc":"rgba(0, 0, 0, 0.3)","textColorSub":"rgba(37, 43, 52, 0.5)","textColorErr":"#FB5151"}},"844":function(e,t,n){e.exports={"themeColor":"#2DC09B","themeTextColor":"#00A6A7","backgroundColor":"#F2F4F6","textColor":"rgba(0, 0, 0, 0.9)","btnBackgroundColor":"#F6F6F7","textColorDesc":"rgba(0, 0, 0, 0.3)","textColorSub":"rgba(37, 43, 52, 0.5)","textColorErr":"#FB5151"}},"921":function(e,t,n){"use strict";n.r(t);var i,a,c,l,o,s,r,b,u,d,f,j=n(2),m=n.n(j),p=n(29),O=n(141),h=n(35),g=n(143),v=n(693),k=n(436),x=n(773),y=[{"label":"办理入职","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/办理入职-2x_23.png","key":"induction","url":"/pages/staff/inductionLists/inductionLists"},{"label":"办理离职","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/办理离职-2x_58.png","key":"quit","url":"/pages/staff/dimissionLists/dimissionLists"},{"label":"办理转正","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/办理转正-2x_43.png","key":"attendance"}],C=n(57),w=n(4),I=n(3),L=n(9),M=n(58),N=(n(140),n(8)),S=n(18),B=(i=Object(w.a)((function MindListsBaseModel(){Object(I.a)(this,MindListsBaseModel),Object(C.a)(this,"mindLists",a,this),Object(C.a)(this,"getMindLists",c,this)})),a=Object(M.a)(i.prototype,"mindLists",[N.m],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),c=Object(M.a)(i.prototype,"getMindLists",[N.f],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(){e.mindLists=[{"title":"待入职","children":Object(S.jsx)("div",{"style":{"color":"#E72520","display":"inline"},"children":"2"}),"key":"waitInduction"},{"title":"待离职","children":Object(S.jsx)("div",{"style":{"color":"#E72520","display":"inline"},"children":"1"}),"key":"waitDimission"}]}}}),i),F=(l=Object(w.a)((function StaffInfoBaseModel(){Object(I.a)(this,StaffInfoBaseModel),Object(C.a)(this,"staffInfos",o,this),Object(C.a)(this,"getStaffInfos",s,this)})),o=Object(M.a)(l.prototype,"staffInfos",[N.m],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),s=Object(M.a)(l.prototype,"getStaffInfos",[N.f],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(){e.staffInfos=[{"title":"在职员工","value":99,"key":"onTheJob"},{"title":"全职","value":98,"key":"fullTime"},{"title":"兼职","value":0,"key":"partTimeJob"},{"title":"实习","value":10,"key":"internship"}]}}}),l),z=(r=Object(w.a)((function AttendanceInfoBaseModel(){Object(I.a)(this,AttendanceInfoBaseModel),Object(C.a)(this,"attendanceInfo",b,this),Object(C.a)(this,"getAttendanceInfo",u,this)})),b=Object(M.a)(r.prototype,"attendanceInfo",[N.m],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),u=Object(M.a)(r.prototype,"getAttendanceInfo",[N.f],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(){e.attendanceInfo=[{"title":"实际出勤","value":99,"key":"onTheJob"},{"title":"迟到","value":98,"key":"fullTime"},{"title":"早退","value":0,"key":"partTimeJob"},{"title":"缺卡","value":10,"key":"internship"}]}}}),r),T=(d=Object(w.a)((function BaseModel(){Object(I.a)(this,BaseModel),Object(C.a)(this,"name",f,this),Object(L.a)(this,"mindModel",new B),Object(L.a)(this,"staffInfoModel",new F),Object(L.a)(this,"attendanceInfoModel",new z)})),f=Object(M.a)(d.prototype,"name",[N.m],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return""}}),d);n(844);t.default=m.a.memo(Object(O.d)((function MamageIndexPage(){var e=Object(p.d)((function(){return new T})),t=e.mindModel,n=e.staffInfoModel,i=e.attendanceInfoModel;Object(j.useEffect)((function(){t.getMindLists(),n.getStaffInfos(),i.getAttendanceInfo()}),[]);var a=Object(j.useCallback)((function(e){switch(e.key){case"waitInduction":g.Router.navigate({"url":"/pages/staff/inductionLists/inductionLists"});break;case"waitDimission":g.Router.navigate({"url":"/pages/staff/dimissionLists/dimissionLists"});break;case"staffList":g.Router.navigate({"url":"/pages/staff/stafflist/index"});break;case"todayAttend":g.Router.navigate({"url":"/pages/attendance/statistic/index"},{"params":{"tabIndex":1}})}}),[]),c=Object(j.useCallback)((function(e){e.url&&g.Router.navigate({"url":e.url}),console.log("staff",e)}),[]);return Object(S.jsxs)("div",{"className":"manage-index home-index","children":[Object(S.jsx)("div",{"className":"manage-pad","children":Object(S.jsx)("div",{"className":"manage-tools","children":y.map((function(e){return Object(S.jsxs)("div",{"className":"manage-tools-item item-tap","onClick":function onClick(){return c(e)},"children":[Object(S.jsx)("img",{"className":"manage-tools-item-icon","src":e.icon}),Object(S.jsx)("div",{"className":"manage-tools-item-label","children":e.label})]},e.key)}))})}),Object(S.jsx)(v.a,{"dataSource":t.mindLists||[],"label":"待办事项","onClick":function onClick(e){return a(e)}}),Object(S.jsx)(k.a,{"label":"人事概况","collapseProps":{"style":{"paddingTop":h.default.pxTransform(20)}},"children":Object(S.jsx)("div",{"className":"manage-card","onClick":function onClick(){return a({"key":"staffList"})},"children":Object(S.jsx)(x.a,{"dataSource":n.staffInfos,"style":{"backGround":"#fff"}})})}),Object(S.jsx)(k.a,{"label":"今日考勤","collapseProps":{"style":{"paddingTop":h.default.pxTransform(20)}},"children":Object(S.jsx)("div",{"className":"manage-card","onClick":function onClick(){return a({"key":"todayAttend"})},"children":Object(S.jsx)(x.a,{"dataSource":i.attendanceInfo,"style":{"backGround":"#fff"}})})})]})})))}}]);