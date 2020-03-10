(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{swYP:function(e,t,r){"use strict";r.r(t);var a,s=r("mrSG"),n=r("7Nqv"),i=r("Xmxp"),c=r("LvDl"),o=r.n(c),u=r("4qC0"),l=r.n(u);!function(e){e.Services="services",e.MetricTypes="metricTypes",e.LabelKeys="labelKeys",e.LabelValues="labelValues",e.ResourceTypes="resourceTypes",e.Aggregations="aggregations",e.Aligners="aligners",e.AlignmentPeriods="alignmentPeriods"}(a||(a={}));var p=r("PQjG"),h=function(){function e(e){this.datasource=e}return e.prototype.execute=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(t){try{switch(e.selectedQueryType){case a.Services:return[2,this.handleServiceQuery()];case a.MetricTypes:return[2,this.handleMetricTypesQuery(e)];case a.LabelKeys:return[2,this.handleLabelKeysQuery(e)];case a.LabelValues:return[2,this.handleLabelValuesQuery(e)];case a.ResourceTypes:return[2,this.handleResourceTypeQuery(e)];case a.Aligners:return[2,this.handleAlignersQuery(e)];case a.AlignmentPeriods:return[2,this.handleAlignmentPeriodQuery()];case a.Aggregations:return[2,this.handleAggregationQuery(e)];default:return[2,[]]}}catch(t){return console.error("Could not run StackdriverMetricFindQuery "+e,t),[2,[]]}return[2]})})},e.prototype.handleServiceQuery=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e;return Object(s.__generator)(this,function(t){switch(t.label){case 0:return[4,this.datasource.getMetricTypes(this.datasource.projectName)];case 1:return e=t.sent(),[2,Object(p.a)(e).map(function(e){return{text:e.serviceShortName,value:e.service,expandable:!0}})]}})})},e.prototype.handleMetricTypesQuery=function(e){var t=e.selectedService;return Object(s.__awaiter)(this,void 0,void 0,function(){var e;return Object(s.__generator)(this,function(r){switch(r.label){case 0:return t?[4,this.datasource.getMetricTypes(this.datasource.projectName)]:[2,[]];case 1:return e=r.sent(),[2,Object(p.g)(e,this.datasource.templateSrv.replace(t)).map(function(e){return{text:e.displayName,value:e.type,expandable:!0}})]}})})},e.prototype.handleLabelKeysQuery=function(e){var t=e.selectedMetricType;return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){switch(e.label){case 0:return t?[4,Object(p.e)(this.datasource,t)]:[2,[]];case 1:return[2,e.sent().map(this.toFindQueryResult)]}})})},e.prototype.handleLabelValuesQuery=function(e){var t=e.selectedMetricType,r=e.labelKey;return Object(s.__awaiter)(this,void 0,void 0,function(){var e,a;return Object(s.__generator)(this,function(s){switch(s.label){case 0:return t?("handleLabelValuesQuery",[4,this.datasource.getLabels(t,"handleLabelValuesQuery",[r])]):[2,[]];case 1:return e=s.sent(),a=this.datasource.templateSrv.replace(r),[2,(e.hasOwnProperty(a)?e[a]:[]).map(this.toFindQueryResult)]}})})},e.prototype.handleResourceTypeQuery=function(e){var t=e.selectedMetricType;return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){switch(e.label){case 0:return t?("handleResourceTypeQueryQueryType",[4,this.datasource.getLabels(t,"handleResourceTypeQueryQueryType")]):[2,[]];case 1:return[2,e.sent()["resource.type"].map(this.toFindQueryResult)]}})})},e.prototype.handleAlignersQuery=function(e){var t=e.selectedMetricType;return Object(s.__awaiter)(this,void 0,void 0,function(){var e,r,a,n,i=this;return Object(s.__generator)(this,function(s){switch(s.label){case 0:return t?[4,this.datasource.getMetricTypes(this.datasource.projectName)]:[2,[]];case 1:return e=s.sent(),r=e.find(function(e){return e.type===i.datasource.templateSrv.replace(t)}),a=r.valueType,n=r.metricKind,[2,Object(p.c)(a,n).map(this.toFindQueryResult)]}})})},e.prototype.handleAggregationQuery=function(e){var t=e.selectedMetricType;return Object(s.__awaiter)(this,void 0,void 0,function(){var e,r,a,n,i=this;return Object(s.__generator)(this,function(s){switch(s.label){case 0:return t?[4,this.datasource.getMetricTypes(this.datasource.projectName)]:[2,[]];case 1:return e=s.sent(),r=e.find(function(e){return e.type===i.datasource.templateSrv.replace(t)}),a=r.valueType,n=r.metricKind,[2,Object(p.b)(a,n).map(this.toFindQueryResult)]}})})},e.prototype.handleAlignmentPeriodQuery=function(){return n.c.map(this.toFindQueryResult)},e.prototype.toFindQueryResult=function(e){return l()(e)?{text:e,expandable:!0}:Object(s.__assign)(Object(s.__assign)({},e),{expandable:!0})},e}(),d=r("Obii"),y=r("GQ3c"),v=function(e){function t(t,r,a,s){var n=e.call(this,t)||this;return n.backendSrv=r,n.templateSrv=a,n.timeSrv=s,n.baseUrl="/stackdriver/",n.url=t.url,n.projectName=t.jsonData.defaultProject||"",n.authenticationType=t.jsonData.authenticationType||"jwt",n.metricTypes=[],n}return t.$inject=["instanceSettings","backendSrv","templateSrv","timeSrv"],Object(s.__extends)(t,e),Object.defineProperty(t.prototype,"variables",{get:function(){return this.templateSrv.variables.map(function(e){return"$"+e.name})},enumerable:!0,configurable:!0}),t.prototype.getTimeSeries=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,r=this;return Object(s.__generator)(this,function(a){switch(a.label){case 0:return(t=e.targets.filter(function(e){return!e.hide&&e.metricType}).map(function(t){return{refId:t.refId,intervalMs:e.intervalMs,datasourceId:r.id,metricType:r.templateSrv.replace(t.metricType,e.scopedVars||{}),crossSeriesReducer:r.templateSrv.replace(t.crossSeriesReducer||"REDUCE_MEAN",e.scopedVars||{}),perSeriesAligner:r.templateSrv.replace(t.perSeriesAligner,e.scopedVars||{}),alignmentPeriod:r.templateSrv.replace(t.alignmentPeriod,e.scopedVars||{}),groupBys:r.interpolateGroupBys(t.groupBys,e.scopedVars),view:t.view||"FULL",filters:r.interpolateFilters(t.filters,e.scopedVars),aliasBy:r.templateSrv.replace(t.aliasBy,e.scopedVars||{}),type:"timeSeriesQuery"}})).length>0?[4,this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:t}})]:[3,2];case 1:return[2,a.sent().data];case 2:return[2,{results:[]}]}})})},t.prototype.interpolateFilters=function(e,t){var r=this,a=o.a.chunk(e,4).map(function(e){var t=Object(s.__read)(e,4),r=t[0],a=t[1],n=t[2],i=t[3];return{key:r,operator:a,value:n,condition:void 0===i?"AND":i}}).reduce(function(e,t){return t.value?Object(s.__spread)(e,[t]):e},[]);return(o.a.flatten(a.map(function(e){return[e.key,e.operator,e.value,e.condition]}))||[]).map(function(e){return r.templateSrv.replace(e,t||{},"regex")})},t.prototype.getLabels=function(e,t,r){return Object(s.__awaiter)(this,void 0,void 0,function(){var a,n;return Object(s.__generator)(this,function(s){switch(s.label){case 0:return[4,this.getTimeSeries({targets:[{refId:t,datasourceId:this.id,metricType:this.templateSrv.replace(e),groupBys:this.interpolateGroupBys(r||[],{}),crossSeriesReducer:"REDUCE_NONE",view:"HEADERS"}],range:this.timeSrv.timeRange()})];case 1:return a=s.sent(),[2,(n=a.results[t])&&n.meta?n.meta.labels:{}]}})})},t.prototype.interpolateGroupBys=function(e,t){var r=this,a=[];return(e||[]).forEach(function(e){var s=r.templateSrv.replace(e,t||{},"csv").split(",");Array.isArray(s)?a=a.concat(s):a.push(s)}),a},t.prototype.resolvePanelUnitFromTargets=function(e){var t;return e.length>0&&e.every(function(t){return t.unit===e[0].unit})&&n.d.hasOwnProperty(e[0].unit)&&(t=n.d[e[0].unit]),t},t.prototype.query=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,r,a=this;return Object(s.__generator)(this,function(n){switch(n.label){case 0:return t=[],[4,this.getTimeSeries(e)];case 1:return(r=n.sent()).results?(Object.values(r.results).forEach(function(r){if(r.series){var n=a.resolvePanelUnitFromTargets(e.targets);r.series.forEach(function(e){var a={target:e.name,datapoints:e.points,refId:r.refId,meta:r.meta};n&&(a=Object(s.__assign)(Object(s.__assign)({},a),{unit:n})),t.push(a)})}}),[2,{data:t}]):[2,{data:[]}]}})})},t.prototype.annotationQuery=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,r,a;return Object(s.__generator)(this,function(s){switch(s.label){case 0:return t=e.annotation,r=[{refId:"annotationQuery",datasourceId:this.id,metricType:this.templateSrv.replace(t.target.metricType,e.scopedVars||{}),crossSeriesReducer:"REDUCE_NONE",perSeriesAligner:"ALIGN_NONE",title:this.templateSrv.replace(t.target.title,e.scopedVars||{}),text:this.templateSrv.replace(t.target.text,e.scopedVars||{}),tags:this.templateSrv.replace(t.target.tags,e.scopedVars||{}),view:"FULL",filters:this.interpolateFilters(t.target.filters||[],e.scopedVars),type:"annotationQuery"}],[4,this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:r}})];case 1:return a=s.sent().data,[2,a.results.annotationQuery.tables[0].rows.map(function(e){return{annotation:t,time:Date.parse(e[0]),title:e[1],tags:[],text:e[3]}})]}})})},t.prototype.metricFindQuery=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(t){return[2,new h(this).execute(e)]})})},t.prototype.testDatasource=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t,r,a,n,i,c;return Object(s.__generator)(this,function(s){switch(s.label){case 0:r="Cannot connect to Stackdriver API",s.label=1;case 1:return s.trys.push([1,4,5,6]),[4,this.getDefaultProject()];case 2:return a=s.sent(),n="v3/projects/"+a+"/metricDescriptors",[4,this.doRequest(""+this.baseUrl+n)];case 3:return 200===(i=s.sent()).status?(e="success",t="Successfully queried the Stackdriver API."):(e="error",t=i.statusText?i.statusText:r),[3,6];case 4:return c=s.sent(),e="error",o.a.isString(c)?t=c:(t="Stackdriver: ",t+=c.statusText?c.statusText:r,c.data&&c.data.error&&c.data.error.code&&(t+=": "+c.data.error.code+". "+c.data.error.message)),[3,6];case 5:return[2,{status:e,message:t}];case 6:return[2]}})})},t.prototype.formatStackdriverError=function(e){var t="Stackdriver: ";if(t+=e.statusText?e.statusText+": ":"",e.data&&e.data.error)try{var r=JSON.parse(e.data.error);t+=r.error.code+". "+r.error.message}catch(r){t+=e.data.error}else t+="Cannot connect to Stackdriver API";return t},t.prototype.getDefaultProject=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t;return Object(s.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),"gce"!==this.authenticationType&&this.projectName?[3,2]:[4,this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{queries:[{refId:"ensureDefaultProjectQuery",type:"ensureDefaultProjectQuery",datasourceId:this.id}]}})];case 1:return e=r.sent().data,this.projectName=e.results.ensureDefaultProjectQuery.meta.defaultProject,[2,this.projectName];case 2:return[2,this.projectName];case 3:return[3,5];case 4:throw t=r.sent(),this.formatStackdriverError(t);case 5:return[2]}})})},t.prototype.getMetricTypes=function(e){return Object(s.__awaiter)(this,void 0,Promise,function(){var t,r,a;return Object(s.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),0!==this.metricTypes.length?[3,2]:(t="v3/projects/"+e+"/metricDescriptors",[4,this.doRequest(""+this.baseUrl+t)]);case 1:r=n.sent().data,this.metricTypes=r.metricDescriptors.map(function(e){var t=Object(s.__read)(e.type.split("/"),1)[0],r=Object(s.__read)(t.split("."),1)[0];return e.service=t,e.serviceShortName=r,e.displayName=e.displayName||e.type,e}),n.label=2;case 2:return[2,this.metricTypes];case 3:return a=n.sent(),i.b.emit(y.CoreEvents.dsRequestError,{error:{data:{error:this.formatStackdriverError(a)}}}),[2,[]];case 4:return[2]}})})},t.prototype.doRequest=function(e,t){return void 0===t&&(t=1),Object(s.__awaiter)(this,void 0,void 0,function(){var r=this;return Object(s.__generator)(this,function(a){return[2,this.backendSrv.datasourceRequest({url:this.url+e,method:"GET"}).catch(function(a){if(t>0)return r.doRequest(e,t-1);throw a})]})})},t}(d.DataSourceApi),f=function(e){function t(t,r,a){var s=e.call(this,t,r)||this;return s.templateSrv=a,s.onQueryChange=s.onQueryChange.bind(s),s.onExecuteQuery=s.onExecuteQuery.bind(s),s}return t.$inject=["$scope","$injector","templateSrv"],Object(s.__extends)(t,e),t.prototype.onQueryChange=function(e){Object.assign(this.target,e)},t.prototype.onExecuteQuery=function(){this.$scope.ctrl.refresh()},t.templateUrl="partials/query.editor.html",t}(r("LzXI").QueryCtrl),g=function(){function e(e){this.validationErrors=[],this.defaultAuthenticationType="jwt",this.datasourceSrv=e,this.current.jsonData=this.current.jsonData||{},this.current.jsonData.authenticationType=this.current.jsonData.authenticationType?this.current.jsonData.authenticationType:this.defaultAuthenticationType,this.current.secureJsonData=this.current.secureJsonData||{},this.current.secureJsonFields=this.current.secureJsonFields||{},this.authenticationTypes=[{key:this.defaultAuthenticationType,value:"Google JWT File"},{key:"gce",value:"GCE Default Service Account"}]}return e.$inject=["datasourceSrv"],e.prototype.save=function(e){this.current.secureJsonData.privateKey=e.private_key,this.current.jsonData.tokenUri=e.token_uri,this.current.jsonData.clientEmail=e.client_email,this.current.jsonData.defaultProject=e.project_id},e.prototype.validateJwt=function(e){return this.resetValidationMessages(),e.private_key&&0!==e.private_key.length||this.validationErrors.push("Private key field missing in JWT file."),e.token_uri&&0!==e.token_uri.length||this.validationErrors.push("Token URI field missing in JWT file."),e.client_email&&0!==e.client_email.length||this.validationErrors.push("Client Email field missing in JWT file."),e.project_id&&0!==e.project_id.length||this.validationErrors.push("Project Id field missing in JWT file."),0===this.validationErrors.length&&(this.inputDataValid=!0,!0)},e.prototype.onUpload=function(e){this.jsonText="",this.validateJwt(e)&&this.save(e)},e.prototype.onPasteJwt=function(e){try{var t=JSON.parse(e.originalEvent.clipboardData.getData("text/plain")||this.jsonText);this.validateJwt(t)&&this.save(t)}catch(e){this.resetValidationMessages(),this.validationErrors.push("Invalid json: "+e.message)}},e.prototype.resetValidationMessages=function(){this.validationErrors=[],this.inputDataValid=!1,this.jsonText="",this.current.jsonData=Object.assign({},{authenticationType:this.current.jsonData.authenticationType}),this.current.secureJsonData={},this.current.secureJsonFields={}},e.templateUrl="public/app/plugins/datasource/stackdriver/partials/config.html",e}(),m=function(){function e(){this.annotation.target=this.annotation.target||{},this.onQueryChange=this.onQueryChange.bind(this)}return e.prototype.onQueryChange=function(e){Object.assign(this.annotation.target,e)},e.templateUrl="partials/annotations.editor.html",e}(),b=r("q1tI"),_=r.n(b),T=r("Opuj"),j=function(e){function t(t){var r=e.call(this,t)||this;return r.queryTypes=[{value:a.Services,name:"Services"},{value:a.MetricTypes,name:"Metric Types"},{value:a.LabelKeys,name:"Label Keys"},{value:a.LabelValues,name:"Label Values"},{value:a.ResourceTypes,name:"Resource Types"},{value:a.Aggregations,name:"Aggregations"},{value:a.Aligners,name:"Aligners"},{value:a.AlignmentPeriods,name:"Alignment Periods"}],r.defaults={selectedQueryType:r.queryTypes[0].value,metricDescriptors:[],selectedService:"",selectedMetricType:"",labels:[],labelKey:"",metricTypes:[],services:[]},r.state=Object.assign(r.defaults,r.props.query),r}return Object(s.__extends)(t,e),t.prototype.componentDidMount=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t,r,a,n,i,c,o,u=this;return Object(s.__generator)(this,function(l){switch(l.label){case 0:return[4,this.props.datasource.getMetricTypes(this.props.datasource.projectName)];case 1:return e=l.sent(),t=Object(p.a)(e).map(function(e){return{value:e.service,name:e.serviceShortName}}),r="",t.some(function(e){return e.value===u.props.templateSrv.replace(u.state.selectedService)})?r=this.state.selectedService:t&&t.length>0&&(r=t[0].value),a=Object(p.f)(e,this.state.selectedMetricType,this.props.templateSrv.replace(this.state.selectedMetricType),this.props.templateSrv.replace(r)),n=a.metricTypes,i=a.selectedMetricType,o=[{services:t,selectedService:r,metricTypes:n,selectedMetricType:i,metricDescriptors:e}],[4,this.getLabels(i)];case 2:return c=s.__assign.apply(void 0,o.concat([l.sent()])),this.setState(c),[2]}})})},t.prototype.onQueryTypeChange=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,r;return Object(s.__generator)(this,function(a){switch(a.label){case 0:return r=[{selectedQueryType:e.target.value}],[4,this.getLabels(this.state.selectedMetricType,e.target.value)];case 1:return t=s.__assign.apply(void 0,r.concat([a.sent()])),this.setState(t),[2]}})})},t.prototype.onServiceChange=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,r,a,n,i;return Object(s.__generator)(this,function(c){switch(c.label){case 0:return t=Object(p.f)(this.state.metricDescriptors,this.state.selectedMetricType,this.props.templateSrv.replace(this.state.selectedMetricType),this.props.templateSrv.replace(e.target.value)),r=t.metricTypes,a=t.selectedMetricType,i=[{selectedService:e.target.value,metricTypes:r,selectedMetricType:a}],[4,this.getLabels(a)];case 1:return n=s.__assign.apply(void 0,i.concat([c.sent()])),this.setState(n),[2]}})})},t.prototype.onMetricTypeChange=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,r;return Object(s.__generator)(this,function(a){switch(a.label){case 0:return r=[{selectedMetricType:e.target.value}],[4,this.getLabels(e.target.value)];case 1:return t=s.__assign.apply(void 0,r.concat([a.sent()])),this.setState(t),[2]}})})},t.prototype.onLabelKeyChange=function(e){this.setState({labelKey:e.target.value})},t.prototype.componentDidUpdate=function(){var e=this,t=this.state,r=(t.metricDescriptors,t.labels,t.metricTypes,t.services,Object(s.__rest)(t,["metricDescriptors","labels","metricTypes","services"])),a=this.queryTypes.find(function(t){return t.value===e.state.selectedQueryType});this.props.onChange(r,"Stackdriver - "+a.name)},t.prototype.getLabels=function(e,t){return void 0===t&&(t=this.state.selectedQueryType),Object(s.__awaiter)(this,void 0,void 0,function(){var r,n,i,c=this;return Object(s.__generator)(this,function(s){switch(s.label){case 0:return r={labels:this.state.labels,labelKey:this.state.labelKey},e&&t===a.LabelValues?[4,Object(p.e)(this.props.datasource,e)]:[3,2];case 1:n=s.sent(),i=n.some(function(e){return e===c.props.templateSrv.replace(c.state.labelKey)})?this.state.labelKey:n[0],r={labels:n,labelKey:i},s.label=2;case 2:return[2,r]}})})},t.prototype.insertTemplateVariables=function(e){var t=this.props.templateSrv.variables.map(function(e){return{name:"$"+e.name,value:"$"+e.name}});return Object(s.__spread)(t,e)},t.prototype.renderQueryTypeSwitch=function(e){var t=this;switch(e){case a.MetricTypes:return _.a.createElement(T.j,{value:this.state.selectedService,options:this.insertTemplateVariables(this.state.services),onValueChange:function(e){return t.onServiceChange(e)},label:"Service"});case a.LabelKeys:case a.LabelValues:case a.ResourceTypes:return _.a.createElement(_.a.Fragment,null,_.a.createElement(T.j,{value:this.state.selectedService,options:this.insertTemplateVariables(this.state.services),onValueChange:function(e){return t.onServiceChange(e)},label:"Service"}),_.a.createElement(T.j,{value:this.state.selectedMetricType,options:this.insertTemplateVariables(this.state.metricTypes),onValueChange:function(e){return t.onMetricTypeChange(e)},label:"Metric Type"}),e===a.LabelValues&&_.a.createElement(T.j,{value:this.state.labelKey,options:this.insertTemplateVariables(this.state.labels.map(function(e){return{value:e,name:e}})),onValueChange:function(e){return t.onLabelKeyChange(e)},label:"Label Key"}));case a.Aligners:case a.Aggregations:return _.a.createElement(_.a.Fragment,null,_.a.createElement(T.j,{value:this.state.selectedService,options:this.insertTemplateVariables(this.state.services),onValueChange:function(e){return t.onServiceChange(e)},label:"Service"}),_.a.createElement(T.j,{value:this.state.selectedMetricType,options:this.insertTemplateVariables(this.state.metricTypes),onValueChange:function(e){return t.onMetricTypeChange(e)},label:"Metric Type"}));default:return""}},t.prototype.render=function(){var e=this;return _.a.createElement(_.a.Fragment,null,_.a.createElement(T.j,{value:this.state.selectedQueryType,options:this.queryTypes,onValueChange:function(t){return e.onQueryTypeChange(t)},label:"Query Type"}),this.renderQueryTypeSwitch(this.state.selectedQueryType))},t}(b.PureComponent);r.d(t,"Datasource",function(){return v}),r.d(t,"QueryCtrl",function(){return f}),r.d(t,"ConfigCtrl",function(){return g}),r.d(t,"AnnotationsQueryCtrl",function(){return m}),r.d(t,"VariableQueryEditor",function(){return j})}}]);
//# sourceMappingURL=stackdriverPlugin.4d0490a94b199a11f40c.js.map