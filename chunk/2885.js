"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[2885],{"12885":function(e,n,i){i.r(n),i.d(n,{"taro_audio_core":function(){return r}});var o=i(9529),r=function(){function t(e){(0,o.r)(this,e),this.onError=(0,o.c)(this,"error",7),this.onPlay=(0,o.c)(this,"play",7),this.onPause=(0,o.c)(this,"pause",7),this.onTimeUpdate=(0,o.c)(this,"timeupdate",7),this.onEnded=(0,o.c)(this,"ended",7),this.controls=!0,this.autoplay=!1,this.loop=!1,this.muted=!1,this.nativeProps={}}return t.prototype.bindevent=function(){var e=this;this.audio.addEventListener("timeupdate",(function(n){e.onTimeUpdate.emit({"duration":n.srcElement.duration,"currentTime":n.srcElement.duration})})),this.audio.addEventListener("ended",(function(){e.onEnded.emit()})),this.audio.addEventListener("play",(function(){e.onPlay.emit()})),this.audio.addEventListener("pause",(function(n){e.onPause.emit(n)})),this.audio.addEventListener("error",(function(n){var i;e.onError.emit({"errMsg":null===(i=n.srcElement.error)||void 0===i?void 0:i.code})}))},t.prototype.componentDidLoad=function(){this.bindevent()},t.prototype.render=function(){var e=this,n=this,i=n.src,r=n.controls,s=n.autoplay,a=n.loop,d=n.muted,u=n.nativeProps;return(0,o.h)("audio",Object.assign({"src":i,"controls":r,"autoplay":s,"loop":a,"muted":d,"ref":function(n){e.audio=n}},u))},t}();r.style="audio{max-width:100%;outline:none}"}}]);