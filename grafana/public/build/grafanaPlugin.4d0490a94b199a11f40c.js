(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{gcd9:function(t,r,n){"use strict";n.r(r);var a=n("mrSG"),e=n("LvDl"),o=n.n(e),i=function(){function t(t,r){this.backendSrv=t,this.templateSrv=r}return t.$inject=["backendSrv","templateSrv"],t.prototype.query=function(t){return this.backendSrv.get("/api/tsdb/testdata/random-walk",{from:t.range.from.valueOf(),to:t.range.to.valueOf(),intervalMs:t.intervalMs,maxDataPoints:t.maxDataPoints}).then(function(t){var r=[];return t.results&&o.a.forEach(t.results,function(t){var n,e;try{for(var o=Object(a.__values)(t.series),i=o.next();!i.done;i=o.next()){var s=i.value;r.push({target:s.name,datapoints:s.points})}}catch(t){n={error:t}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(n)throw n.error}}}),{data:r}})},t.prototype.metricFindQuery=function(t){return Promise.resolve({data:[]})},t.prototype.annotationQuery=function(t){var r,n,e,i,s={from:t.range.from.valueOf(),to:t.range.to.valueOf(),limit:t.annotation.limit,tags:t.annotation.tags,matchAny:t.annotation.matchAny};if("dashboard"===t.annotation.type){if(!t.dashboard.id)return Promise.resolve([]);s.dashboardId=t.dashboard.id,delete s.tags}else{if(!o.a.isArray(t.annotation.tags)||0===t.annotation.tags.length)return Promise.resolve([]);var l=[];try{for(var u=Object(a.__values)(s.tags),c=u.next();!c.done;c=u.next()){var d=c.value,f=this.templateSrv.replace(d,{},function(t){return"string"==typeof t?t:t.join("__delimiter__")});try{for(var v=(e=void 0,Object(a.__values)(f.split("__delimiter__"))),h=v.next();!h.done;h=v.next()){var p=h.value;l.push(p)}}catch(t){e={error:t}}finally{try{h&&!h.done&&(i=v.return)&&i.call(v)}finally{if(e)throw e.error}}}}catch(t){r={error:t}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}s.tags=l}return this.backendSrv.get("/api/annotations",s)},t}(),s=n("LzXI");n.d(r,"QueryCtrl",function(){return l}),n.d(r,"AnnotationsQueryCtrl",function(){return u}),n.d(r,"GrafanaDatasource",function(){return i}),n.d(r,"Datasource",function(){return i});var l=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return Object(a.__extends)(r,t),r.templateUrl="partials/query.editor.html",r}(s.QueryCtrl),u=function(){function t(){this.types=[{text:"Dashboard",value:"dashboard"},{text:"Tags",value:"tags"}],this.annotation.type=this.annotation.type||"tags",this.annotation.limit=this.annotation.limit||100}return t.templateUrl="partials/annotations.editor.html",t}()}}]);
//# sourceMappingURL=grafanaPlugin.4d0490a94b199a11f40c.js.map