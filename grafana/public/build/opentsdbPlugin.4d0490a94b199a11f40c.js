(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"02dm":function(t,e,r){"use strict";r.r(e);var a=r("mrSG"),i=r("KHwQ"),s=r.n(i),n=r("LvDl"),o=r.n(n),l=r("Obii"),u=function(t){function e(e,r,a){var i=t.call(this,e)||this;return i.backendSrv=r,i.templateSrv=a,i.type="opentsdb",i.url=e.url,i.name=e.name,i.withCredentials=e.withCredentials,i.basicAuth=e.basicAuth,e.jsonData=e.jsonData||{},i.tsdbVersion=e.jsonData.tsdbVersion||1,i.tsdbResolution=e.jsonData.tsdbResolution||1,i.lookupLimit=e.jsonData.lookupLimit||1e3,i.tagKeys={},i.aggregatorsPromise=null,i.filterTypesPromise=null,i}return e.$inject=["instanceSettings","backendSrv","templateSrv"],Object(a.__extends)(e,t),e.prototype.query=function(t){var e=this,r=this.convertToTSDBTime(t.rangeRaw.from,!1,t.timezone),a=this.convertToTSDBTime(t.rangeRaw.to,!0,t.timezone),i=[];o.a.each(t.targets,function(r){r.metric&&i.push(e.convertTargetToQuery(r,t,e.tsdbVersion))});var s=o.a.compact(i);if(o.a.isEmpty(s))return Promise.resolve({data:[]});var n={};return o.a.each(s,function(t){t.filters&&t.filters.length>0?o.a.each(t.filters,function(t){n[t.tagk]=!0}):o.a.each(t.tags,function(t,e){n[e]=!0})}),t.targets=o.a.filter(t.targets,function(t){return!0!==t.hide}),this.performTimeSeriesQuery(s,r,a).then(function(r){var a=e.mapMetricsToTargets(r.data,t,e.tsdbVersion);return{data:o.a.map(r.data,function(r,i){return-1===(i=a[i])&&(i=0),e._saveTagKeys(r),e.transformMetricData(r,n,t.targets[i],t,e.tsdbResolution)})}})},e.prototype.annotationQuery=function(t){var e=this.convertToTSDBTime(t.rangeRaw.from,!1,t.timezone),r=this.convertToTSDBTime(t.rangeRaw.to,!0,t.timezone),a=[],i=[];a.push({aggregator:"sum",metric:t.annotation.target});var s=o.a.compact(a);return this.performTimeSeriesQuery(s,e,r).then(function(e){if(e.data[0]){var r=e.data[0].annotations;t.annotation.isGlobal&&(r=e.data[0].globalAnnotations),r&&o.a.each(r,function(e){var r={text:e.description,time:1e3*Math.floor(e.startTime),annotation:t.annotation};i.push(r)})}return i})},e.prototype.targetContainsTemplate=function(t){if(t.filters&&t.filters.length>0)for(var e=0;e<t.filters.length;e++)if(this.templateSrv.variableExists(t.filters[e].filter))return!0;if(t.tags&&Object.keys(t.tags).length>0)for(var r in t.tags)if(this.templateSrv.variableExists(t.tags[r]))return!0;return!1},e.prototype.performTimeSeriesQuery=function(t,e,r){var a=!1;2===this.tsdbResolution&&(a=!0);var i={start:e,queries:t,msResolution:a,globalAnnotations:!0};3===this.tsdbVersion&&(i.showQuery=!0),r&&(i.end=r);var s={method:"POST",url:this.url+"/api/query",data:i};return this._addCredentialOptions(s),this.backendSrv.datasourceRequest(s)},e.prototype.suggestTagKeys=function(t){return Promise.resolve(this.tagKeys[t]||[])},e.prototype._saveTagKeys=function(t){var e=Object.keys(t.tags);o.a.each(t.aggregateTags,function(t){e.push(t)}),this.tagKeys[t.metric]=e},e.prototype._performSuggestQuery=function(t,e){return this._get("/api/suggest",{type:e,q:t,max:this.lookupLimit}).then(function(t){return t.data})},e.prototype._performMetricKeyValueLookup=function(t,e){if(!t||!e)return Promise.resolve([]);var r=e.split(",").map(function(t){return t.trim()}),a=r[0],i=a+"=*";r.length>1&&(i+=","+r.splice(1).join(","));var s=t+"{"+i+"}";return this._get("/api/search/lookup",{m:s,limit:this.lookupLimit}).then(function(t){t=t.data.results;var e=[];return o.a.each(t,function(t){-1===e.indexOf(t.tags[a])&&e.push(t.tags[a])}),e})},e.prototype._performMetricKeyLookup=function(t){return t?this._get("/api/search/lookup",{m:t,limit:1e3}).then(function(t){t=t.data.results;var e=[];return o.a.each(t,function(t){o.a.each(t.tags,function(t,r){-1===e.indexOf(r)&&e.push(r)})}),e}):Promise.resolve([])},e.prototype._get=function(t,e){var r={method:"GET",url:this.url+t,params:e};return this._addCredentialOptions(r),this.backendSrv.datasourceRequest(r)},e.prototype._addCredentialOptions=function(t){(this.basicAuth||this.withCredentials)&&(t.withCredentials=!0),this.basicAuth&&(t.headers={Authorization:this.basicAuth})},e.prototype.metricFindQuery=function(t){if(!t)return Promise.resolve([]);var e;try{e=this.templateSrv.replace(t,{},"distributed")}catch(t){return Promise.reject(t)}var r=function(t){return o.a.map(t,function(t){return{text:t}})},a=e.match(/metrics\((.*)\)/);if(a)return this._performSuggestQuery(a[1],"metrics").then(r);var i=e.match(/tag_names\((.*)\)/);if(i)return this._performMetricKeyLookup(i[1]).then(r);var s=e.match(/tag_values\((.*?),\s?(.*)\)/);if(s)return this._performMetricKeyValueLookup(s[1],s[2]).then(r);var n=e.match(/suggest_tagk\((.*)\)/);if(n)return this._performSuggestQuery(n[1],"tagk").then(r);var l=e.match(/suggest_tagv\((.*)\)/);return l?this._performSuggestQuery(l[1],"tagv").then(r):Promise.resolve([])},e.prototype.testDatasource=function(){return this._performSuggestQuery("cpu","metrics").then(function(){return{status:"success",message:"Data source is working"}})},e.prototype.getAggregators=function(){return this.aggregatorsPromise?this.aggregatorsPromise:(this.aggregatorsPromise=this._get("/api/aggregators").then(function(t){return t.data&&o.a.isArray(t.data)?t.data.sort():[]}),this.aggregatorsPromise)},e.prototype.getFilterTypes=function(){return this.filterTypesPromise?this.filterTypesPromise:(this.filterTypesPromise=this._get("/api/config/filters").then(function(t){return t.data?Object.keys(t.data).sort():[]}),this.filterTypesPromise)},e.prototype.transformMetricData=function(t,e,r,a,i){var s=this.createMetricLabel(t,r,e,a),n=[];return o.a.each(t.dps,function(t,e){2===i?n.push([t,1*e]):n.push([t,1e3*e])}),{target:s,datapoints:n}},e.prototype.createMetricLabel=function(t,e,r,a){if(e.alias){var i=o.a.clone(a.scopedVars||{});return o.a.each(t.tags,function(t,e){i["tag_"+e]={value:t}}),this.templateSrv.replace(e.alias,i)}var s=t.metric,n=[];return o.a.isEmpty(t.tags)||o.a.each(o.a.toPairs(t.tags),function(t){o.a.has(r,t[0])&&n.push(t[0]+"="+t[1])}),o.a.isEmpty(n)||(s+="{"+n.join(", ")+"}"),s},e.prototype.convertTargetToQuery=function(t,e,r){if(!t.metric||t.hide)return null;var a={metric:this.templateSrv.replace(t.metric,e.scopedVars,"pipe"),aggregator:"avg"};if(t.aggregator&&(a.aggregator=this.templateSrv.replace(t.aggregator)),t.shouldComputeRate&&(a.rate=!0,a.rateOptions={counter:!!t.isCounter},t.counterMax&&t.counterMax.length&&(a.rateOptions.counterMax=parseInt(t.counterMax,10)),t.counterResetValue&&t.counterResetValue.length&&(a.rateOptions.resetValue=parseInt(t.counterResetValue,10)),r>=2&&(a.rateOptions.dropResets=!(a.rateOptions.counterMax||a.rateOptions.ResetValue&&0!==a.rateOptions.ResetValue))),!t.disableDownsampling){var i=this.templateSrv.replace(t.downsampleInterval||e.interval);i.match(/\.[0-9]+s/)&&(i=1e3*parseFloat(i)+"ms"),a.downsample=i+"-"+t.downsampleAggregator,t.downsampleFillPolicy&&"none"!==t.downsampleFillPolicy&&(a.downsample+="-"+t.downsampleFillPolicy)}if(t.filters&&t.filters.length>0){if(a.filters=s.a.copy(t.filters),a.filters)for(var n in a.filters)a.filters[n].filter=this.templateSrv.replace(a.filters[n].filter,e.scopedVars,"pipe")}else if(a.tags=s.a.copy(t.tags),a.tags)for(var o in a.tags)a.tags[o]=this.templateSrv.replace(a.tags[o],e.scopedVars,"pipe");return t.explicitTags&&(a.explicitTags=!0),a},e.prototype.mapMetricsToTargets=function(t,e,r){var a,i,s=this;return o.a.map(t,function(t){return 3===r?t.query.index:o.a.findIndex(e.targets,function(r){return r.filters&&r.filters.length>0?r.metric===t.metric:r.metric===t.metric&&o.a.every(r.tags,function(r,n){return a=s.templateSrv.replace(r,e.scopedVars,"pipe"),i=a.split("|"),o.a.includes(i,t.tags[n])||"*"===a})})})},e.prototype.convertToTSDBTime=function(t,e,r){return"now"===t?null:(t=l.dateMath.parse(t,e,r)).valueOf()},e}(l.DataSourceApi),g=r("PbtU"),c=function(t){function e(e,r){var a=t.call(this,e,r)||this;return a.errors=a.validateTarget(),a.aggregators=["avg","sum","min","max","dev","zimsum","mimmin","mimmax"],a.fillPolicies=["none","nan","null","zero"],a.filterTypes=["wildcard","iliteral_or","not_iliteral_or","not_literal_or","iwildcard","literal_or","regexp"],a.tsdbVersion=a.datasource.tsdbVersion,a.target.aggregator||(a.target.aggregator="sum"),a.target.downsampleAggregator||(a.target.downsampleAggregator="avg"),a.target.downsampleFillPolicy||(a.target.downsampleFillPolicy="none"),a.datasource.getAggregators().then(function(t){0!==t.length&&(a.aggregators=t)}),a.datasource.getFilterTypes().then(function(t){0!==t.length&&(a.filterTypes=t)}),a.suggestMetrics=function(t,e){a.datasource.metricFindQuery("metrics("+t+")").then(a.getTextValues).then(e)},a.suggestTagKeys=function(t,e){a.datasource.suggestTagKeys(a.target.metric).then(e)},a.suggestTagValues=function(t,e){a.datasource.metricFindQuery("suggest_tagv("+t+")").then(a.getTextValues).then(e)},a}return e.$inject=["$scope","$injector"],Object(a.__extends)(e,t),e.prototype.targetBlur=function(){this.errors=this.validateTarget(),this.refresh()},e.prototype.getTextValues=function(t){return o.a.map(t,function(t){return t.text})},e.prototype.addTag=function(){this.target.filters&&this.target.filters.length>0&&(this.errors.tags="Please remove filters to use tags, tags and filters are mutually exclusive."),this.addTagMode?(this.target.tags||(this.target.tags={}),this.errors=this.validateTarget(),this.errors.tags||(this.target.tags[this.target.currentTagKey]=this.target.currentTagValue,this.target.currentTagKey="",this.target.currentTagValue="",this.targetBlur()),this.addTagMode=!1):this.addTagMode=!0},e.prototype.removeTag=function(t){delete this.target.tags[t],this.targetBlur()},e.prototype.editTag=function(t,e){this.removeTag(t),this.target.currentTagKey=t,this.target.currentTagValue=e,this.addTag()},e.prototype.closeAddTagMode=function(){this.addTagMode=!1},e.prototype.addFilter=function(){if(this.target.tags&&o.a.size(this.target.tags)>0&&(this.errors.filters="Please remove tags to use filters, tags and filters are mutually exclusive."),this.addFilterMode){if(this.target.filters||(this.target.filters=[]),this.target.currentFilterType||(this.target.currentFilterType="iliteral_or"),this.target.currentFilterGroupBy||(this.target.currentFilterGroupBy=!1),this.errors=this.validateTarget(),!this.errors.filters){var t={type:this.target.currentFilterType,tagk:this.target.currentFilterKey,filter:this.target.currentFilterValue,groupBy:this.target.currentFilterGroupBy};this.target.filters.push(t),this.target.currentFilterType="literal_or",this.target.currentFilterKey="",this.target.currentFilterValue="",this.target.currentFilterGroupBy=!1,this.targetBlur()}this.addFilterMode=!1}else this.addFilterMode=!0},e.prototype.removeFilter=function(t){this.target.filters.splice(t,1),this.targetBlur()},e.prototype.editFilter=function(t,e){this.removeFilter(e),this.target.currentFilterKey=t.tagk,this.target.currentFilterValue=t.filter,this.target.currentFilterType=t.type,this.target.currentFilterGroupBy=t.groupBy,this.addFilter()},e.prototype.closeAddFilterMode=function(){this.addFilterMode=!1},e.prototype.validateTarget=function(){var t={};if(this.target.shouldDownsample)try{this.target.downsampleInterval?g.a.describe_interval(this.target.downsampleInterval):t.downsampleInterval="You must supply a downsample interval (e.g. '1m' or '1h')."}catch(e){t.downsampleInterval=e.message}return this.target.tags&&o.a.has(this.target.tags,this.target.currentTagKey)&&(t.tags="Duplicate tag key '"+this.target.currentTagKey+"'."),t},e.templateUrl="partials/query.editor.html",e}(r("LzXI").QueryCtrl),p=r("q1tI"),h=r.n(p),m=r("kDLi"),f=[{label:"<=2.1",value:1},{label:"==2.2",value:2},{label:"==2.3",value:3}],d=[{label:"second",value:1},{label:"millisecond",value:2}],v=function(t){var e,r,a,i=t.onChange,s=t.value;return h.a.createElement(h.a.Fragment,null,h.a.createElement("h5",null,"OpenTSDB settings"),h.a.createElement("div",{className:"gf-form"},h.a.createElement(m.FormLabel,{width:7},"Version"),h.a.createElement(m.Select,{options:f,value:(e=f.find(function(t){return t.value===s.jsonData.tsdbVersion}),null!=e?e:f[0]),onChange:y("tsdbVersion",s,i)})),h.a.createElement("div",{className:"gf-form"},h.a.createElement(m.FormLabel,{width:7},"Resolution"),h.a.createElement(m.Select,{options:d,value:(r=d.find(function(t){return t.value===s.jsonData.tsdbResolution}),null!=r?r:d[0]),onChange:y("tsdbResolution",s,i)})),h.a.createElement("div",{className:"gf-form"},h.a.createElement(m.FormLabel,{width:7},"Lookup Limit"),h.a.createElement(m.Input,{type:"number",value:(a=s.jsonData.lookupLimit,null!=a?a:1e3),onChange:T("lookupLimit",s,i)})))},y=function(t,e,r){return function(i){var s;r(Object(a.__assign)(Object(a.__assign)({},e),{jsonData:Object(a.__assign)(Object(a.__assign)({},e.jsonData),(s={},s[t]=i.value,s))}))}},T=function(t,e,r){return function(i){var s;r(Object(a.__assign)(Object(a.__assign)({},e),{jsonData:Object(a.__assign)(Object(a.__assign)({},e.jsonData),(s={},s[t]=i.currentTarget.value,s))}))}};r.d(e,"plugin",function(){return _});var b=function(){function t(){}return t.templateUrl="partials/annotations.editor.html",t}(),_=new l.DataSourcePlugin(u).setQueryCtrl(c).setConfigEditor(function(t){var e=t.options,r=t.onOptionsChange;return h.a.createElement(h.a.Fragment,null,h.a.createElement(m.DataSourceHttpSettings,{defaultUrl:"http://localhost:4242",dataSourceConfig:e,onChange:r}),h.a.createElement(v,{value:e,onChange:r}))}).setAnnotationQueryCtrl(b)}}]);
//# sourceMappingURL=opentsdbPlugin.4d0490a94b199a11f40c.js.map