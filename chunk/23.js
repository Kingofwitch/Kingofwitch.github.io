(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"434":function(e,t,i){"use strict";i(450);var n=i(451),a=i(7),l=(i(452),i(457)),c=i(15),o=i(2),s=i(18);t.a=function BlockWithTitle(e){var t=Object(o.useState)("1"),i=Object(c.a)(t,2),r=i[0],b=i[1],u=e.children,d=e.label,f=e.labelStyle,j=void 0===f?{}:f,m=e.colapseDisabled,p=void 0===m||m,O=e.collapseProps,h=void 0===O?{}:O,g=Object(o.useCallback)((function(e){p||b(e.detail)}),[b,p]);return Object(s.jsx)(n.a,Object(a.a)(Object(a.a)({"className":"collapse-no-style","accordion":!0,"value":r,"onChange":g},h),{},{"children":Object(s.jsx)(l.a,Object(a.a)(Object(a.a)({"className":["collapse-item-no-style",d?"":"collapse-item-no-label",p?"collapse-item-no-icon":""].join(" "),"title":d,"clickable":p,"name":"1"},j),{},{"children":u}))}))}},"651":function(e,t,i){},"658":function(e,t,i){"use strict";i(450);var n=i(451),a=(i(452),i(457)),l=(i(207),i(651),i(80)),c=i.n(l),o=i(54),s=i.n(o),r=i(44),b=i.n(r),u=i(55),d=i.n(u),f=i(38),j=i.n(f),m=i(56),p=i.n(m),O=i(81),h=i.n(O),g=i(82),v=i.n(g),k=i(83),x=i.n(k),y=i(84),C=i.n(y),w=i(37),I=i(65),L=i(18),M=["inset","title","border","children","style","className"];function ownKeys(e,t){var i=c()(e);if(s.a){var n=s()(e);t&&(n=b()(n).call(n,(function(t){return d()(e,t).enumerable}))),i.push.apply(i,n)}return i}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var i,n,a=null!=arguments[t]?arguments[t]:{};t%2?j()(i=ownKeys(Object(a),!0)).call(i,(function(t){x()(e,t,a[t])})):p.a?h()(e,p()(a)):j()(n=ownKeys(Object(a))).call(n,(function(t){v()(e,t,d()(a,t))}))}return e}var N=function CellGroup(e){var t=e.inset,i=e.title,n=e.border,a=void 0===n||n,l=e.children,c=e.style,o=e.className,s=C()(e,M);return Object(L.jsxs)(L.Fragment,{"children":[i&&Object(L.jsx)(w.View,{"className":I.b("cell-group__title",{"inset":t}),"children":i}),Object(L.jsx)(w.View,_objectSpread(_objectSpread({"className":" "+I.b("cell-group",{"inset":t})+" "+(a?"van-hairline--top-bottom":"")+" ".concat(o||""),"style":c},s),{},{"children":l}))]})},S=i(7),B=(i(209),i(210),i(458),i(487)),F=i(15),z=i(2);t.a=function ListWithTitle(e){var t=Object(z.useState)("1"),i=Object(F.a)(t,2),l=i[0],c=i[1],o=e.dataSource,s=void 0===o?[]:o,r=e.label,b=e.titleStyle,u=void 0===b?{}:b,d=e.groupProps,f=void 0===d?{}:d,j=e.cellProps,m=void 0===j?{}:j,p=e.colapseDisabled,O=void 0===p||p,h=e.collapseProps,g=void 0===h?{}:h,v=Object(z.useCallback)((function(e){O||c(e.detail)}),[c,O]);return Object(L.jsx)(n.a,Object(S.a)(Object(S.a)({"className":"collapse-no-style","accordion":!0,"value":l,"onChange":v},g),{},{"children":Object(L.jsx)(a.a,Object(S.a)(Object(S.a)({"className":["collapse-item-no-style",r?"":"collapse-item-no-label",O?"collapse-item-no-icon":""].join(" "),"title":r,"clickable":O,"name":"1"},u),{},{"children":Object(L.jsx)(N,Object(S.a)(Object(S.a)({"inset":!0},f),{},{"children":s.map((function(t,i){return Object(L.jsx)(B.b,Object(S.a)(Object(S.a)(Object(S.a)({"isLink":!0},m),t),{},{"onClick":function onClick(){return e.onClick&&e.onClick(t)}}),t.key||i)}))}))}))}))}},"701":function(e,t,i){"use strict";var n=i(7),a=i(138),l=(i(702),i(18)),c=["dataSource"];t.a=function BlockLine(e){var t=e.dataSource,i=void 0===t?[]:t,o=Object(a.a)(e,c);return Object(l.jsx)("div",Object(n.a)(Object(n.a)({"className":"bkline"},o),{},{"children":i.map((function(t,i){return Object(l.jsxs)("div",{"className":"bkline-item","onClick":function onClick(){return e.onClick&&e.onClick(t,i)},"children":[Object(l.jsx)("div",{"className":"bkline-item-top","children":t.value}),Object(l.jsx)("div",{"className":"bkline-item-btm","children":t.title})]},t.key||i)}))}))}},"702":function(e,t,i){e.exports={"themeColor":"#2DC09B","themeTextColor":"#00A6A7","backgroundColor":"#F2F4F6","textColor":"rgba(0, 0, 0, 0.9)","btnBackgroundColor":"#F6F6F7","textColorDesc":"rgba(0, 0, 0, 0.3)","textColorSub":"rgba(37, 43, 52, 0.5)","textColorErr":"#FB5151"}},"848":function(e,t,i){e.exports={"themeColor":"#2DC09B","themeTextColor":"#00A6A7","backgroundColor":"#F2F4F6","textColor":"rgba(0, 0, 0, 0.9)","btnBackgroundColor":"#F6F6F7","textColorDesc":"rgba(0, 0, 0, 0.3)","textColorSub":"rgba(37, 43, 52, 0.5)","textColorErr":"#FB5151"}},"928":function(e,t,i){"use strict";i.r(t);var n,a,l,c,o,s,r,b,u,d,f,j=i(2),m=i.n(j),p=i(29),O=i(142),h=i(35),g=i(141),v=i(658),k=i(434),x=i(701),y=[{"label":"办理入职","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/办理入职-2x_23.png","key":"induction","url":"/pages/staff/inductionLists/inductionLists"},{"label":"办理离职","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/办理离职-2x_58.png","key":"quit","url":"/pages/staff/dimissionLists/dimissionLists"},{"label":"办理转正","icon":"https://img.dianplus.cn/vpc/1/976477741010391041/办理转正-2x_43.png","key":"formal","url":"/pages/staff/formalLists/formalLists"}],C=i(57),w=i(4),I=i(3),L=i(9),M=i(58),N=(i(140),i(8)),S=i(18),B=(n=Object(w.a)((function MindListsBaseModel(){Object(I.a)(this,MindListsBaseModel),Object(C.a)(this,"mindLists",a,this),Object(C.a)(this,"getMindLists",l,this)})),a=Object(M.a)(n.prototype,"mindLists",[N.m],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),l=Object(M.a)(n.prototype,"getMindLists",[N.f],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(){e.mindLists=[{"title":"待入职","children":Object(S.jsx)("div",{"style":{"color":"#E72520","display":"inline"},"children":"2"}),"key":"waitInduction"},{"title":"待离职","children":Object(S.jsx)("div",{"style":{"color":"#E72520","display":"inline"},"children":"1"}),"key":"waitDimission"}]}}}),n),F=(c=Object(w.a)((function StaffInfoBaseModel(){Object(I.a)(this,StaffInfoBaseModel),Object(C.a)(this,"staffInfos",o,this),Object(C.a)(this,"getStaffInfos",s,this)})),o=Object(M.a)(c.prototype,"staffInfos",[N.m],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),s=Object(M.a)(c.prototype,"getStaffInfos",[N.f],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(){e.staffInfos=[{"title":"在职员工","value":99,"key":"onTheJob"},{"title":"全职","value":98,"key":"fullTime"},{"title":"兼职","value":0,"key":"partTimeJob"},{"title":"实习","value":10,"key":"internship"}]}}}),c),z=(r=Object(w.a)((function AttendanceInfoBaseModel(){Object(I.a)(this,AttendanceInfoBaseModel),Object(C.a)(this,"attendanceInfo",b,this),Object(C.a)(this,"getAttendanceInfo",u,this)})),b=Object(M.a)(r.prototype,"attendanceInfo",[N.m],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),u=Object(M.a)(r.prototype,"getAttendanceInfo",[N.f],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(){e.attendanceInfo=[{"title":"实际出勤","value":99,"key":"onTheJob"},{"title":"迟到","value":98,"key":"fullTime"},{"title":"早退","value":0,"key":"partTimeJob"},{"title":"缺卡","value":10,"key":"internship"}]}}}),r),T=(d=Object(w.a)((function BaseModel(){Object(I.a)(this,BaseModel),Object(C.a)(this,"name",f,this),Object(L.a)(this,"mindModel",new B),Object(L.a)(this,"staffInfoModel",new F),Object(L.a)(this,"attendanceInfoModel",new z)})),f=Object(M.a)(d.prototype,"name",[N.m],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return""}}),d);i(848);t.default=m.a.memo(Object(O.d)((function MamageIndexPage(){var e=Object(p.d)((function(){return new T})),t=e.mindModel,i=e.staffInfoModel,n=e.attendanceInfoModel;Object(j.useEffect)((function(){t.getMindLists(),i.getStaffInfos(),n.getAttendanceInfo()}),[]);var a=Object(j.useCallback)((function(e){switch(e.key){case"waitInduction":g.Router.navigate({"url":"/pages/staff/inductionLists/inductionLists"});break;case"waitDimission":g.Router.navigate({"url":"/pages/staff/dimissionLists/dimissionLists"});break;case"staffList":g.Router.navigate({"url":"/pages/staff/stafflist/index"});break;case"todayAttend":g.Router.navigate({"url":"/pages/attendance/statistic/index"},{"params":{"tabIndex":1}})}}),[]),l=Object(j.useCallback)((function(e){e.url&&g.Router.navigate({"url":e.url}),console.log("staff",e)}),[]);return Object(S.jsxs)("div",{"className":"manage-index home-index","children":[Object(S.jsx)("div",{"className":"manage-pad","children":Object(S.jsx)("div",{"className":"manage-tools","children":y.map((function(e){return Object(S.jsxs)("div",{"className":"manage-tools-item item-tap","onClick":function onClick(){return l(e)},"children":[Object(S.jsx)("img",{"className":"manage-tools-item-icon","src":e.icon}),Object(S.jsx)("div",{"className":"manage-tools-item-label","children":e.label})]},e.key)}))})}),Object(S.jsx)(v.a,{"dataSource":t.mindLists||[],"label":"待办事项","onClick":function onClick(e){return a(e)}}),Object(S.jsx)(k.a,{"label":"人事概况","collapseProps":{"style":{"paddingTop":h.default.pxTransform(20)}},"children":Object(S.jsx)("div",{"className":"manage-card","onClick":function onClick(){return a({"key":"staffList"})},"children":Object(S.jsx)(x.a,{"dataSource":i.staffInfos,"style":{"backGround":"#fff"}})})}),Object(S.jsx)(k.a,{"label":"今日考勤","collapseProps":{"style":{"paddingTop":h.default.pxTransform(20)}},"children":Object(S.jsx)("div",{"className":"manage-card","onClick":function onClick(){return a({"key":"todayAttend"})},"children":Object(S.jsx)(x.a,{"dataSource":n.attendanceInfo,"style":{"backGround":"#fff"}})})})]})})))}}]);