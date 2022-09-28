"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1809],{"71809":function(t,n,o){o.r(n),o.d(n,{"taro_movable_area_core":function(){return l}});var i=o(9529),l=function(){function e(t){var n=this;(0,i.r)(this,t),this.views=[],this.scaleLength=0,this.viewsChanged=function(){n.views=[];var t=n.element.querySelectorAll("taro-movable-view-core");Array.from(t).forEach((function(t){n.views.push(t)})),n.updateArea()},this.handleTouchStart=function(t){var o=t.touches;if(o&&!(o.length<=1)){var i=o[1].pageX-o[0].pageX,l=o[1].pageY-o[0].pageY;if(n.scaleLength=Math.sqrt(i*i+l*l),!n.scaleArea){var r=function(t,n){for(var a=function(t,n){return!!(t=t.parentNode)&&((!(t instanceof HTMLElement)||t!==document.body)&&(t===n||t===n.element||t.element===n||a(t,n)))},o=0;o<n.length;o++){var i=n[o];if(t===i.element||a(t,i))return i}},c=r(o[0].target,n.views),s=r(o[1].target,n.views);n.scaleTarget=c&&c===s?c:void 0}}},this.handleTouchMove=function(t){var o=t.touches;if(o&&!(o.length<=1)){t.preventDefault();var i=o[1].pageX-o[0].pageX,l=o[1].pageY-o[0].pageY;n.scaleLength>0&&n.updateScale(Math.sqrt(i*i+l*l)/n.scaleLength)}},this.handleTouchEnd=function(t){var o,i;t.touches&&t.touches.length||!t.changedTouches||(n.scaleLength=0,n.scaleArea?n.views.forEach((function(t){var n;null===(n=t.endScale)||void 0===n||n.call(t)})):null===(i=null===(o=n.scaleTarget)||void 0===o?void 0:o.endScale)||void 0===i||i.call(o),n.scaleTarget=void 0)},this.updateScale=function(t){var o,i;t&&1!==t&&(n.scaleArea?n.views.forEach((function(n){var o;null===(o=n.setScale)||void 0===o||o.call(n,t)})):null===(i=null===(o=n.scaleTarget)||void 0===o?void 0:o.setScale)||void 0===i||i.call(o,t))},this.updateArea=function(){var t=window.getComputedStyle(n.element),o=n.element.getBoundingClientRect(),i=["Left","Right"].map((function(n){return parseFloat(t["border"+n+"Width"])+parseFloat(t["padding"+n])})),l=["Top","Bottom"].map((function(n){return parseFloat(t["border"+n+"Width"])+parseFloat(t["padding"+n])}));n.views.forEach((function(t){var c;null===(c=t.setParent)||void 0===c||c.call(t,{"element":n.element,"area":{"height":o.height-l[0]-l[1],"width":o.width-i[0]-i[1]}})}))}}return e.prototype.connectedCallback=function(){var t=this;this.observer=new MutationObserver((function(n){n.forEach((function(n){var o,i;if("class"===n.attributeName||"style"===n.attributeName){var l=t.element.offsetWidth,c=t.element.offsetHeight;l===(null===(o=t.offset)||void 0===o?void 0:o.width)&&c===(null===(i=t.offset)||void 0===i?void 0:i.height)||t.updateArea(),t.offset={"width":l,"height":c}}}))})),this.observer.observe(this.element,{"attributes":!0})},e.prototype.disconnectedCallback=function(){var t;null===(t=this.observer)||void 0===t||t.disconnect()},e.prototype.componentDidLoad=function(){this.viewsChanged()},e.prototype.render=function(){return(0,i.h)(i.H,{"onTouchStart":this.handleTouchStart,"onTouchMove":this.handleTouchMove,"onTouchEnd":this.handleTouchEnd})},Object.defineProperty(e.prototype,"element",{"get":function(){return(0,i.g)(this)},"enumerable":!1,"configurable":!0}),e}();l.style="taro-movable-area-core{display:block;height:10px;width:10px;position:relative}"}}]);