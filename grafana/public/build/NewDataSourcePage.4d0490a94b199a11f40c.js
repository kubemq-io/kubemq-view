(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5BCB":function(e,t,a){"use strict";var r=a("mrSG"),n=a("ZFWI"),i=a("NXk7"),o=a("WnbS"),c=a("3SGO"),u=a("HUMP"),s=a("okuo"),l=a("Vw/f"),d=a("FFN/"),f=a("Obii");function g(e){var t,a,n,i,o,c,u,s,l=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"other",title:"Others",plugins:[]}],d={},g={},h=[m({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize & explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),m({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize & explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),m({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize & explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),m({id:"grafana-servicenow-datasource",description:"ServiceNow integration & data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),m({id:"grafana-datadog-datasource",description:"DataDog integration & data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),m({id:"grafana-newrelic-datasource",description:"New Relic integration & data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"})];try{for(var b=Object(r.__values)(l),v=b.next();!v.done;v=b.next()){var y=v.value;d[y.id]=y}}catch(e){t={error:e}}finally{try{v&&!v.done&&(a=b.return)&&a.call(b)}finally{if(t)throw t.error}}var _=function(e){var t,a;if(h.find(function(t){return t.id===e.id})&&(e.category="enterprise"),e.info.links)try{for(var n=(t=void 0,Object(r.__values)(e.info.links)),i=n.next();!i.done;i=n.next()){i.value.name="Learn more"}}catch(e){t={error:e}}finally{try{i&&!i.done&&(a=n.return)&&a.call(n)}finally{if(t)throw t.error}}(l.find(function(t){return t.id===e.category})||d.other).plugins.push(e),g[e.id]=e};try{for(var S=Object(r.__values)(e),O=S.next();!O.done;O=S.next()){_(N=O.value)}}catch(e){n={error:e}}finally{try{O&&!O.done&&(i=S.return)&&i.call(S)}finally{if(n)throw n.error}}try{for(var j=Object(r.__values)(l),w=j.next();!w.done;w=j.next()){if("cloud"===(y=w.value).id&&y.plugins.push({id:"gcloud",name:"Grafana Cloud",type:f.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===y.id)try{for(var D=(u=void 0,Object(r.__values)(h)),k=D.next();!k.done;k=D.next()){var N=k.value;g[N.id]||y.plugins.push(N)}}catch(e){u={error:e}}finally{try{k&&!k.done&&(s=D.return)&&s.call(D)}finally{if(u)throw u.error}}p(y.plugins)}}catch(e){o={error:e}}finally{try{w&&!w.done&&(c=j.return)&&c.call(j)}finally{if(o)throw o.error}}return l}function p(e){var t={prometheus:100,graphite:95,loki:90,mysql:80,postgres:79,gcloud:-1};e.sort(function(e,a){var r=t[e.id]||0,n=t[a.id]||0;return r>n?-1:r<n?1:e.name>a.name?-1:1})}function m(e){return{id:e.id,name:e.name,type:f.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:e.description,logos:{small:e.imgUrl,large:e.imgUrl},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/grafana/plugins/"+e.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var h=a("frIo");a.d(t,"c",function(){return b}),a.d(t,"g",function(){return v}),a.d(t,"f",function(){return y}),a.d(t,"d",function(){return _}),a.d(t,"a",function(){return S}),a.d(t,"e",function(){return O}),a.d(t,"h",function(){return j}),a.d(t,"b",function(){return w});var b=function(e,t){return void 0===t&&(t={loadDataSource:_,getDataSource:h.a,getDataSourceMeta:h.b,importDataSourcePlugin:l.b}),function(a,n){return Object(r.__awaiter)(void 0,void 0,void 0,function(){var i,o,c,u;return Object(r.__generator)(this,function(r){switch(r.label){case 0:if(isNaN(e))return a(Object(d.g)(new Error("Invalid ID"))),[2];r.label=1;case 1:return r.trys.push([1,4,,5]),[4,a(t.loadDataSource(e))];case 2:return r.sent(),n().dataSourceSettings.plugin?[2]:(i=t.getDataSource(n().dataSources,e),o=t.getDataSourceMeta(n().dataSources,i.type),[4,t.importDataSourcePlugin(o)]);case 3:return c=r.sent(),a(Object(d.h)(c)),[3,5];case 4:return u=r.sent(),console.log("Failed to import plugin module",u),a(Object(d.g)(u)),[3,5];case 5:return[2]}})})}},v=function(e,t){return void 0===t&&(t={getDatasourceSrv:o.a,getBackendSrv:i.b}),function(a,n){return Object(r.__awaiter)(void 0,void 0,void 0,function(){var n;return Object(r.__generator)(this,function(i){switch(i.label){case 0:return[4,t.getDatasourceSrv().get(e)];case 1:return(n=i.sent()).testDatasource?(a(Object(d.o)()),t.getBackendSrv().withNoBackendCache(function(){return Object(r.__awaiter)(void 0,void 0,void 0,function(){var e,t,i;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,n.testDatasource()];case 1:return e=r.sent(),a(Object(d.p)(e)),[3,3];case 2:return t=r.sent(),i="",i=t.statusText?"HTTP Error "+t.statusText:t.message,a(Object(d.n)({message:i})),[3,3];case 3:return[2]}})})}),[2]):[2]}})})}};function y(){var e=this;return function(t){return Object(r.__awaiter)(e,void 0,void 0,function(){var e;return Object(r.__generator)(this,function(a){switch(a.label){case 0:return[4,Object(i.b)().get("/api/datasources")];case 1:return e=a.sent(),t(Object(d.e)(e)),[2]}})})}}function _(e){var t=this;return function(a){return Object(r.__awaiter)(t,void 0,void 0,function(){var t,n,o;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return[4,Object(i.b)().get("/api/datasources/"+e)];case 1:return t=r.sent(),[4,Object(s.a)(t.type)];case 2:return n=r.sent(),[4,Object(l.b)(n)];case 3:return o=r.sent(),a(Object(d.a)(t)),a(Object(d.b)(n)),a(Object(c.d)(Object(u.a)(t,o))),[2]}})})}}function S(e){var t=this;return function(a,n){return Object(r.__awaiter)(t,void 0,void 0,function(){var t,o,u;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return[4,a(y())];case 1:return r.sent(),t=n().dataSources.dataSources,o={name:e.name,type:e.id,access:"proxy",isDefault:0===t.length},D(t,o.name)&&(o.name=function(e,t){for(;D(e,t);)N(t)?t=""+C(t)+(a=x(t),isNaN(a)?1:a+1):t+="-1";var a;return t}(t,o.name)),[4,Object(i.b)().post("/api/datasources",o)];case 2:return u=r.sent(),a(Object(c.c)({path:"/datasources/edit/"+u.id})),[2]}})})}}function O(){var e=this;return function(t){return Object(r.__awaiter)(e,void 0,void 0,function(){var e,a;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return t(Object(d.c)()),[4,Object(i.b)().get("/api/plugins",{enabled:1,type:"datasource"})];case 1:return e=r.sent(),a=g(e),t(Object(d.d)({plugins:e,categories:a})),[2]}})})}}function j(e){var t=this;return function(a){return Object(r.__awaiter)(t,void 0,void 0,function(){return Object(r.__generator)(this,function(t){switch(t.label){case 0:return[4,Object(i.b)().put("/api/datasources/"+e.id,e)];case 1:return t.sent(),[4,k()];case 2:return t.sent(),[2,a(_(e.id))]}})})}}function w(){var e=this;return function(t,a){return Object(r.__awaiter)(e,void 0,void 0,function(){var e;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return e=a().dataSources.dataSource,[4,Object(i.b)().delete("/api/datasources/"+e.id)];case 1:return r.sent(),[4,k()];case 2:return r.sent(),t(Object(c.c)({path:"/datasources"})),[2]}})})}}function D(e,t){return e.filter(function(e){return e.name.toLowerCase()===t.toLowerCase()}).length>0}function k(){return Object(i.b)().get("/api/frontend/settings").then(function(e){n.b.datasources=e.datasources,n.b.defaultDatasource=e.defaultDatasource,Object(o.a)().init()})}function N(e){return e.endsWith("-",e.length-1)}function x(e){return parseInt(e.slice(-1),10)}function C(e){return e.slice(0,e.length-1)}},EKT6:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a("q1tI"),n=a.n(r),i=a("Obii"),o=Object(r.forwardRef)(function(e,t){return n.a.createElement("label",{className:e.labelClassName},n.a.createElement("input",{ref:t,type:"text",className:e.inputClassName,value:Object(i.unEscapeStringFromRegex)(e.value),onChange:function(t){return e.onChange(Object(i.escapeStringForRegex)(t.target.value))},placeholder:e.placeholder?e.placeholder:null}),n.a.createElement("i",{className:"gf-form-input-icon fa fa-search"}))})},Fofh:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"getNavModel",function(){return y});var r=a("mrSG"),n=a("q1tI"),i=a.n(n),o=a("TSYQ"),c=a.n(o),u=a("/MKj"),s=a("0cfB"),l=a("kDLi"),d=a("1gCF"),f=a("ZGyg"),g=a("5BCB"),p=a("frIo"),m=a("EKT6"),h=a("FFN/"),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onDataSourceTypeClicked=function(e){t.props.addDataSource(e)},t.onSearchQueryChange=function(e){t.props.setDataSourceTypeSearchQuery(e)},t.onLearnMoreClick=function(e){e.stopPropagation()},t}return Object(r.__extends)(t,e),t.prototype.componentDidMount=function(){this.props.loadDataSourcePlugins(),this.searchInput.focus()},t.prototype.renderPlugins=function(e){var t=this;return e&&e.length?i.a.createElement(l.List,{items:e,getItemKey:function(e){return e.id.toString()},renderItem:function(e){return i.a.createElement(v,{plugin:e,onClick:function(){return t.onDataSourceTypeClicked(e)},onLearnMoreClick:t.onLearnMoreClick})}}):null},t.prototype.renderCategories=function(){var e=this,t=this.props.categories;return i.a.createElement(i.a.Fragment,null,t.map(function(t){return i.a.createElement("div",{className:"add-data-source-category",key:t.id},i.a.createElement("div",{className:"add-data-source-category__header"},t.title),e.renderPlugins(t.plugins))}),i.a.createElement("div",{className:"add-data-source-more"},i.a.createElement("a",{className:"btn btn-inverse",href:"https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",target:"_blank",rel:"noopener"},"Find more data source plugins on grafana.com")))},t.prototype.render=function(){var e=this,t=this.props,a=t.navModel,r=t.isLoading,n=t.searchQuery,o=t.plugins;return i.a.createElement(f.a,{navModel:a},i.a.createElement(f.a.Contents,{isLoading:r},i.a.createElement("div",{className:"page-action-bar"},i.a.createElement("div",{className:"gf-form gf-form--grow"},i.a.createElement(m.a,{ref:function(t){return e.searchInput=t},labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-30",value:n,onChange:this.onSearchQueryChange,placeholder:"Filter by name or type"})),i.a.createElement("div",{className:"page-action-bar__spacer"}),i.a.createElement("a",{className:"btn btn-secondary",href:"datasources"},"Cancel")),i.a.createElement("div",null,n&&this.renderPlugins(o),!n&&this.renderCategories())))},t}(n.PureComponent),v=function(e){var t=e.plugin,a=e.onLearnMoreClick,r="phantom"===t.module,n=r?function(){}:e.onClick,o=t.info.links&&t.info.links.length>0?t.info.links[0]:null,u=c()("add-data-source-item",{"add-data-source-item--phantom":r});return i.a.createElement("div",{className:u,onClick:n,"aria-label":d.a.pages.AddDataSource.selectors.dataSourcePlugins(t.name)},i.a.createElement("img",{className:"add-data-source-item-logo",src:t.info.logos.small}),i.a.createElement("div",{className:"add-data-source-item-text-wrapper"},i.a.createElement("span",{className:"add-data-source-item-text"},t.name),t.info.description&&i.a.createElement("span",{className:"add-data-source-item-desc"},t.info.description)),i.a.createElement("div",{className:"add-data-source-item-actions"},o&&i.a.createElement("a",{className:"btn btn-inverse",href:o.url+"?utm_source=grafana_add_ds",target:"_blank",rel:"noopener",onClick:a},o.name," ",i.a.createElement("i",{className:"fa fa-external-link add-datasource-item-actions__btn-icon"})),!r&&i.a.createElement("button",{className:"btn btn-primary"},"Select")))};function y(){var e={icon:"gicon gicon-add-datasources",id:"datasource-new",text:"Add data source",href:"datasources/new",subTitle:"Choose a data source type"};return{main:e,node:e}}var _={addDataSource:g.a,loadDataSourcePlugins:g.e,setDataSourceTypeSearchQuery:h.j};t.default=Object(s.hot)(e)(Object(u.connect)(function(e){return{navModel:y(),plugins:Object(p.c)(e.dataSources),searchQuery:e.dataSources.dataSourceTypeSearchQuery,categories:e.dataSources.categories,isLoading:e.dataSources.isLoadingDataSources}},_)(b))}.call(this,a("3UD+")(e))},HUMP:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return c});var r=a("mrSG"),n=a("Obii"),i=a("ZFWI");function o(e,t){var a,n,o=t.meta,c={img:o.info.logos.large,id:"datasource-"+e.id,subTitle:"Type: "+o.name,url:"",text:e.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"fa fa-fw fa-sliders",id:"datasource-settings-"+e.id,text:"Settings",url:"datasources/edit/"+e.id+"/"}]};if(t.configPages)try{for(var u=Object(r.__values)(t.configPages),s=u.next();!s.done;s=u.next()){var l=s.value;c.children.push({active:!1,text:l.title,icon:l.icon,url:"datasources/edit/"+e.id+"/?page="+l.id,id:"datasource-page-"+l.id})}}catch(e){a={error:e}}finally{try{s&&!s.done&&(n=u.return)&&n.call(u)}finally{if(a)throw a.error}}return o.includes&&void 0!==o.includes.find(function(e){return"dashboard"===e.type})&&c.children.push({active:!1,icon:"fa fa-fw fa-th-large",id:"datasource-dashboards-"+e.id,text:"Dashboards",url:"datasources/edit/"+e.id+"/dashboards"}),i.b.licenseInfo.hasLicense&&c.children.push({active:!1,icon:"fa fa-fw fa-lock",id:"datasource-permissions-"+e.id,text:"Permissions",url:"datasources/edit/"+e.id+"/permissions"}),c}function c(e){var t,a,i,c=o({access:"",basicAuth:!1,basicAuthUser:"",basicAuthPassword:"",withCredentials:!1,database:"",id:1,isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,password:"",readOnly:!1,type:"Loading",typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:""},{meta:{id:"1",type:n.PluginType.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}});try{for(var u=Object(r.__values)(c.children),s=u.next();!s.done;s=u.next()){var l=s.value;if(l.id.indexOf(e)>0){l.active=!0,i=l;break}}}catch(e){t={error:e}}finally{try{s&&!s.done&&(a=u.return)&&a.call(u)}finally{if(t)throw t.error}}return{main:c,node:i}}},frIo:function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"c",function(){return n}),a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"g",function(){return c}),a.d(t,"f",function(){return u}),a.d(t,"e",function(){return s});var r=function(e){var t=new RegExp(e.searchQuery,"i");return e.dataSources.filter(function(e){return t.test(e.name)||t.test(e.database)})},n=function(e){var t=new RegExp(e.dataSourceTypeSearchQuery,"i");return e.plugins.filter(function(e){return t.test(e.name)})},i=function(e,t){return e.dataSource.id===parseInt(t,10)?e.dataSource:{}},o=function(e,t){return e.dataSourceMeta.id===t?e.dataSourceMeta:{}},c=function(e){return e.searchQuery},u=function(e){return e.layoutMode},s=function(e){return e.dataSourcesCount}}}]);
//# sourceMappingURL=NewDataSourcePage.4d0490a94b199a11f40c.js.map