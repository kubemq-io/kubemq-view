(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{QjE0:function(e,t,r){"use strict";var a;r.d(t,"a",function(){return a}),r.d(t,"c",function(){return n}),r.d(t,"b",function(){return i}),function(e){e.Password="password",e.BasicAuthPassword="basicAuthPassword"}(a||(a={}));var n=function(e,t){return function(r){r.preventDefault(),e.current[t]=null,e.current.secureJsonFields[t]=!1,e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=""}},i=function(e,t){return function(r){e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=r.currentTarget.value}}},"XXK+":function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return s});var a=r("LvDl"),n=r.n(a),i=function(){return function(e){this.type=e.type,e.label?this.label=e.label:this.label=this.type[0].toUpperCase()+this.type.substring(1)+":",this.style=e.style,"function"===this.style?(this.wrapOpen="(",this.wrapClose=")",this.separator=", "):(this.wrapOpen=" ",this.wrapClose=" ",this.separator=" "),this.params=e.params,this.defaultParams=e.defaultParams}}(),s=function(){function e(e,t){if(this.part=e,this.def=t,!this.def)throw{message:"Could not find sql part "+e.type};this.datatype=e.datatype,e.name?(this.name=e.name,this.label=t.label+" "+e.name):(this.name="",this.label=t.label),e.params=e.params||n.a.clone(this.def.defaultParams),this.params=e.params}return e.prototype.updateParam=function(e,t){""===e&&this.def.params[t].optional?this.params.splice(t,1):this.params[t]=e,this.part.params=this.params},e}()},"qSU+":function(e,t,r){"use strict";r.r(t);var a=r("mrSG"),n=r("LvDl"),i=r.n(n),s=function(){function e(){}return e.prototype.processQueryResult=function(e){var t,r,n,i,s=[];if(!e.data.results)return{data:s};for(var o in e.data.results){var u=e.data.results[o];if(u.series)try{for(var l=(t=void 0,Object(a.__values)(u.series)),m=l.next();!m.done;m=l.next()){var c=m.value;s.push({target:c.name,datapoints:c.points,refId:u.refId,meta:u.meta})}}catch(e){t={error:e}}finally{try{m&&!m.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}if(u.tables)try{for(var p=(n=void 0,Object(a.__values)(u.tables)),h=p.next();!h.done;h=p.next()){var d=h.value;d.type="table",d.refId=u.refId,d.meta=u.meta,s.push(d)}}catch(e){n={error:e}}finally{try{h&&!h.done&&(i=p.return)&&i.call(p)}finally{if(n)throw n.error}}}return{data:s}},e.prototype.parseMetricFindQueryResult=function(e,t){if(!t||0===t.data.length||0===t.data.results[e].meta.rowCount)return[];var r=t.data.results[e].tables[0].columns,a=t.data.results[e].tables[0].rows,n=this.findColIndex(r,"__text"),i=this.findColIndex(r,"__value");return 2===r.length&&-1!==n&&-1!==i?this.transformToKeyValueList(a,n,i):this.transformToSimpleList(a)},e.prototype.transformToKeyValueList=function(e,t,r){for(var a=[],n=0;n<e.length;n++)this.containsKey(a,e[n][t])||a.push({text:e[n][t],value:e[n][r]});return a},e.prototype.transformToSimpleList=function(e){for(var t=[],r=0;r<e.length;r++)for(var a=0;a<e[r].length;a++){var n=e[r][a];-1===t.indexOf(n)&&t.push(n)}return i.a.map(t,function(e){return{text:e}})},e.prototype.findColIndex=function(e,t){for(var r=0;r<e.length;r++)if(e[r].text===t)return r;return-1},e.prototype.containsKey=function(e,t){for(var r=0;r<e.length;r++)if(e[r].text===t)return!0;return!1},e.prototype.transformAnnotationResponse=function(e,t){for(var r=t.data.results[e.annotation.name].tables[0],a=-1,n=-1,i=-1,s=-1,o=0;o<r.columns.length;o++)if("time_sec"===r.columns[o].text||"time"===r.columns[o].text)a=o;else if("timeend"===r.columns[o].text)n=o;else{if("title"===r.columns[o].text)return Promise.reject({message:"The title column for annotations is deprecated, now only a column named text is returned"});"text"===r.columns[o].text?i=o:"tags"===r.columns[o].text&&(s=o)}if(-1===a)return Promise.reject({message:"Missing mandatory time column (with time_sec column alias) in annotation query."});var u=[];for(o=0;o<r.rows.length;o++){var l=r.rows[o],m=-1!==n&&l[n]?Math.floor(l[n]):void 0;u.push({annotation:e.annotation,time:Math.floor(l[a]),timeEnd:m,text:l[i]?l[i].toString():"",tags:l[s]?l[s].trim().split(/\s*,\s*/):[]})}return u},e}(),o=function(){function e(e,t,r){this.target=e,this.templateSrv=t,this.scopedVars=r,e.format=e.format||"time_series",e.timeColumn=e.timeColumn||"time",e.metricColumn=e.metricColumn||"none",e.group=e.group||[],e.where=e.where||[{type:"macro",name:"$__timeFilter",params:[]}],e.select=e.select||[[{type:"column",params:["value"]}]],"rawQuery"in this.target||(e.rawQuery="rawSql"in e),this.interpolateQueryStr=this.interpolateQueryStr.bind(this)}return e.$inject=["target","templateSrv","scopedVars"],e.prototype.unquoteIdentifier=function(e){return'"'===e[0]&&'"'===e[e.length-1]?e.substring(1,e.length-1).replace(/""/g,'"'):e},e.prototype.quoteIdentifier=function(e){return'"'+e.replace(/"/g,'""')+'"'},e.prototype.quoteLiteral=function(e){return"'"+e.replace(/'/g,"''")+"'"},e.prototype.escapeLiteral=function(e){return String(e).replace(/'/g,"''")},e.prototype.hasTimeGroup=function(){return i.a.find(this.target.group,function(e){return"time"===e.type})},e.prototype.hasMetricColumn=function(){return"none"!==this.target.metricColumn},e.prototype.interpolateQueryStr=function(e,t,r){return t.multi||t.includeAll?"string"==typeof e?this.quoteLiteral(e):i.a.map(e,this.quoteLiteral).join(","):this.escapeLiteral(e)},e.prototype.render=function(e){var t=this.target;return this.target.rawQuery||"table"in this.target?(t.rawQuery||(t.rawSql=this.buildQuery()),e?this.templateSrv.replace(t.rawSql,this.scopedVars,this.interpolateQueryStr):t.rawSql):""},e.prototype.hasUnixEpochTimecolumn=function(){return["int","bigint","double"].indexOf(this.target.timeColumnType)>-1},e.prototype.buildTimeColumn=function(e){void 0===e&&(e=!0);var t,r=this.hasTimeGroup(),a="$__timeGroup";if(r){var n=void 0;n=r.params.length>1&&"none"!==r.params[1]?r.params.join(","):r.params[0],this.hasUnixEpochTimecolumn()&&(a="$__unixEpochGroup"),e&&(a+="Alias"),t=a+"("+this.target.timeColumn+","+n+")"}else t=this.target.timeColumn,e&&(t+=' AS "time"');return t},e.prototype.buildMetricColumn=function(){return this.hasMetricColumn()?this.target.metricColumn+" AS metric":""},e.prototype.buildValueColumns=function(){var e,t,r="";try{for(var n=Object(a.__values)(this.target.select),i=n.next();!i.done;i=n.next()){var s=i.value;r+=",\n  "+this.buildValueColumn(s)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}return r},e.prototype.buildValueColumn=function(e){var t="";t=i.a.find(e,function(e){return"column"===e.type}).params[0];var r=i.a.find(e,function(e){return"aggregate"===e.type});r&&(t=r.params[0]+"("+t+")");var a=i.a.find(e,function(e){return"alias"===e.type});return a&&(t+=" AS "+this.quoteIdentifier(a.params[0])),t},e.prototype.buildWhereClause=function(){var e=this,t="",r=i.a.map(this.target.where,function(t,r){switch(t.type){case"macro":return t.name+"("+e.target.timeColumn+")";case"expression":return t.params.join(" ")}});return r.length>0&&(t="\nWHERE\n  "+r.join(" AND\n  ")),t},e.prototype.buildGroupClause=function(){for(var e="",t="",r=0;r<this.target.group.length;r++){var a=this.target.group[r];r>0&&(t+=", "),"time"===a.type?t+="1":t+=a.params[0]}return t.length&&(e="\nGROUP BY "+t,this.hasMetricColumn()&&(e+=",2")),e},e.prototype.buildQuery=function(){var e="SELECT";return e+="\n  "+this.buildTimeColumn(),this.hasMetricColumn()&&(e+=",\n  "+this.buildMetricColumn()),e+=this.buildValueColumns(),e+="\nFROM "+this.target.table,e+=this.buildWhereClause(),e+=this.buildGroupClause(),e+="\nORDER BY "+this.buildTimeColumn(!1)},e}(),u=r("4qJB"),l=function(){function e(e,t,r,a){var n=this;this.backendSrv=t,this.templateSrv=r,this.timeSrv=a,this.interpolateVariable=function(e,t){return"string"==typeof e?t.multi||t.includeAll?n.queryModel.quoteLiteral(e):e:"number"==typeof e?e:i.a.map(e,function(e){return n.queryModel.quoteLiteral(e)}).join(",")},this.name=e.name,this.id=e.id,this.responseParser=new s,this.queryModel=new o({}),this.interval=(e.jsonData||{}).timeInterval||"1m"}return e.$inject=["instanceSettings","backendSrv","templateSrv","timeSrv"],e.prototype.interpolateVariablesInQueries=function(e,t){var r=this,n=e;return e&&e.length>0&&(n=e.map(function(e){return Object(a.__assign)(Object(a.__assign)({},e),{datasource:r.name,rawSql:r.templateSrv.replace(e.rawSql,t,r.interpolateVariable)})})),n},e.prototype.query=function(e){var t=this,r=i.a.filter(e.targets,function(e){return!0!==e.hide}).map(function(r){var a=new o(r,t.templateSrv,e.scopedVars);return{refId:r.refId,intervalMs:e.intervalMs,maxDataPoints:e.maxDataPoints,datasourceId:t.id,rawSql:a.render(t.interpolateVariable),format:r.format}});return 0===r.length?Promise.resolve({data:[]}):this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:r}}).then(this.responseParser.processQueryResult)},e.prototype.annotationQuery=function(e){var t=this;if(!e.annotation.rawQuery)return Promise.reject({message:"Query missing in annotation definition"});var r={refId:e.annotation.name,datasourceId:this.id,rawSql:this.templateSrv.replace(e.annotation.rawQuery,e.scopedVars,this.interpolateVariable),format:"table"};return this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:[r]}}).then(function(r){return t.responseParser.transformAnnotationResponse(e,r)})},e.prototype.metricFindQuery=function(e,t){var r=this,a="tempvar";t&&t.variable&&t.variable.name&&(a=t.variable.name);var n=this.templateSrv.replace(e,Object(u.g)({query:e,wildcardChar:"%",options:t}),this.interpolateVariable),i={refId:a,datasourceId:this.id,rawSql:n,format:"table"},s=this.timeSrv.timeRange(),o={queries:[i],from:s.from.valueOf().toString(),to:s.to.valueOf().toString()};return t&&t.range&&t.range.from&&(o.from=t.range.from.valueOf().toString()),t&&t.range&&t.range.to&&(o.to=t.range.to.valueOf().toString()),this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:o}).then(function(e){return r.responseParser.parseMetricFindQueryResult(a,e)})},e.prototype.testDatasource=function(){return this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:"5m",to:"now",queries:[{refId:"A",intervalMs:1,maxDataPoints:1,datasourceId:this.id,rawSql:"SELECT 1",format:"table"}]}}).then(function(e){return{status:"success",message:"Database Connection OK"}}).catch(function(e){return console.log(e),e.data&&e.data.message?{status:"error",message:e.data.message}:{status:"error",message:e.status}})},e.prototype.targetContainsTemplate=function(e){var t="";e.rawQuery?t=e.rawSql:t=new o(e).buildQuery();return t=t.replace("$__",""),this.templateSrv.variableExists(t)},e}(),m=r("Xmxp"),c=function(){function e(e,t){this.target=e,this.queryModel=t}return e.prototype.getOperators=function(e){switch(e){case"double":case"float":return["=","!=","<","<=",">",">="];case"text":case"tinytext":case"mediumtext":case"longtext":case"varchar":case"char":return["=","!=","<","<=",">",">=","IN","NOT IN","LIKE","NOT LIKE"];default:return["=","!=","<","<=",">",">=","IN","NOT IN"]}},e.prototype.quoteIdentAsLiteral=function(e){return this.queryModel.quoteLiteral(this.queryModel.unquoteIdentifier(e))},e.prototype.findMetricTable=function(){return"\n  SELECT\n    table_name as table_name,\n    ( SELECT\n        column_name as column_name\n      FROM information_schema.columns c\n      WHERE\n        c.table_schema = t.table_schema AND\n        c.table_name = t.table_name AND\n        c.data_type IN ('timestamp', 'datetime')\n      ORDER BY ordinal_position LIMIT 1\n    ) AS time_column,\n    ( SELECT\n        column_name AS column_name\n      FROM information_schema.columns c\n      WHERE\n        c.table_schema = t.table_schema AND\n        c.table_name = t.table_name AND\n        c.data_type IN('float', 'int', 'bigint')\n      ORDER BY ordinal_position LIMIT 1\n    ) AS value_column\n  FROM information_schema.tables t\n  WHERE\n    t.table_schema = database() AND\n    EXISTS\n    ( SELECT 1\n      FROM information_schema.columns c\n      WHERE\n        c.table_schema = t.table_schema AND\n        c.table_name = t.table_name AND\n        c.data_type IN ('timestamp', 'datetime')\n    ) AND\n    EXISTS\n    ( SELECT 1\n      FROM information_schema.columns c\n      WHERE\n        c.table_schema = t.table_schema AND\n        c.table_name = t.table_name AND\n        c.data_type IN('float', 'int', 'bigint')\n    )\n  LIMIT 1\n;"},e.prototype.buildTableConstraint=function(e){var t="";if(e.includes(".")){var r=e.split(".");return t="table_schema = "+this.quoteIdentAsLiteral(r[0]),t+=" AND table_name = "+this.quoteIdentAsLiteral(r[1])}return t="table_schema = database() AND table_name = "+this.quoteIdentAsLiteral(e)},e.prototype.buildTableQuery=function(){return"SELECT table_name FROM information_schema.tables WHERE table_schema = database() ORDER BY table_name"},e.prototype.buildColumnQuery=function(e){var t="SELECT column_name FROM information_schema.columns WHERE ";switch(t+=this.buildTableConstraint(this.target.table),e){case"time":t+=" AND data_type IN ('timestamp','datetime','bigint','int','double','float')";break;case"metric":t+=" AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')";break;case"value":t+=" AND data_type IN ('bigint','int','smallint','mediumint','tinyint','double','decimal','float')",t+=" AND column_name <> "+this.quoteIdentAsLiteral(this.target.timeColumn);break;case"group":t+=" AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')"}return t+=" ORDER BY column_name"},e.prototype.buildValueQuery=function(e){var t="SELECT DISTINCT QUOTE("+e+")";return t+=" FROM "+this.target.table,t+=" WHERE $__timeFilter("+this.target.timeColumn+")",t+=" ORDER BY 1 LIMIT 100"},e.prototype.buildDatatypeQuery=function(e){var t="\nSELECT data_type\nFROM information_schema.columns\nWHERE ";return t+=" table_name = "+this.quoteIdentAsLiteral(this.target.table),t+=" AND column_name = "+this.quoteIdentAsLiteral(e)},e}(),p=r("LzXI"),h=r("XXK+"),d=[];function f(e){d[e.type]=new h.b(e)}f({type:"column",style:"label",params:[{type:"column",dynamicLookup:!0}],defaultParams:["value"]}),f({type:"expression",style:"expression",label:"Expr:",params:[{name:"left",type:"string",dynamicLookup:!0},{name:"op",type:"string",dynamicLookup:!0},{name:"right",type:"string",dynamicLookup:!0}],defaultParams:["value","=","value"]}),f({type:"macro",style:"label",label:"Macro:",params:[],defaultParams:[]}),f({type:"aggregate",style:"label",params:[{name:"name",type:"string",options:["avg","count","min","max","sum","stddev","variance"]}],defaultParams:["avg"]}),f({type:"alias",style:"label",params:[{name:"name",type:"string",quote:"double"}],defaultParams:["alias"]}),f({type:"time",style:"function",label:"time",params:[{name:"interval",type:"interval",options:["$__interval","1s","10s","1m","5m","10m","15m","1h"]},{name:"fill",type:"string",options:["none","NULL","previous","0"]}],defaultParams:["$__interval","none"]});var y={create:function(e){var t=d[e.type];return t?new h.a(e,t):null}},g=r("GQ3c"),v=r("Obii"),b="SELECT\n  UNIX_TIMESTAMP(<time_column>) as time_sec,\n  <value column> as value,\n  <series name column> as metric\nFROM <table name>\nWHERE $__timeFilter(time_column)\nORDER BY <time_column> ASC\n",S=function(e){function t(t,r,a,n){var i=e.call(this,t,r)||this;return i.templateSrv=a,i.uiSegmentSrv=n,i.target=i.target,i.queryModel=new o(i.target,a,i.panel.scopedVars),i.metaBuilder=new c(i.target,i.queryModel),i.updateProjection(),i.formats=[{text:"Time series",value:"time_series"},{text:"Table",value:"table"}],i.target.rawSql||("table"===i.panelCtrl.panel.type?(i.target.format="table",i.target.rawSql="SELECT 1",i.target.rawQuery=!0):(i.target.rawSql=b,i.datasource.metricFindQuery(i.metaBuilder.findMetricTable()).then(function(e){if(e.length>0){i.target.table=e[0].text;var t=i.uiSegmentSrv.newSegment(i.target.table);i.tableSegment.html=t.html,i.tableSegment.value=t.value,i.target.timeColumn=e[1].text,t=i.uiSegmentSrv.newSegment(i.target.timeColumn),i.timeColumnSegment.html=t.html,i.timeColumnSegment.value=t.value,i.target.timeColumnType="timestamp",i.target.select=[[{type:"column",params:[e[2].text]}]],i.updateProjection(),i.updateRawSqlAndRefresh()}}))),i.target.table?i.tableSegment=n.newSegment(i.target.table):i.tableSegment=n.newSegment({value:"select table",fake:!0}),i.timeColumnSegment=n.newSegment(i.target.timeColumn),i.metricColumnSegment=n.newSegment(i.target.metricColumn),i.buildSelectMenu(),i.whereAdd=i.uiSegmentSrv.newPlusButton(),i.groupAdd=i.uiSegmentSrv.newPlusButton(),i.panelCtrl.events.on(v.PanelEvents.dataReceived,i.onDataReceived.bind(i),t),i.panelCtrl.events.on(v.PanelEvents.dataError,i.onDataError.bind(i),t),i}return t.$inject=["$scope","$injector","templateSrv","uiSegmentSrv"],Object(a.__extends)(t,e),t.prototype.updateRawSqlAndRefresh=function(){this.target.rawQuery||(this.target.rawSql=this.queryModel.buildQuery()),this.panelCtrl.refresh()},t.prototype.updateProjection=function(){this.selectParts=i.a.map(this.target.select,function(e){return i.a.map(e,y.create).filter(function(e){return e})}),this.whereParts=i.a.map(this.target.where,y.create).filter(function(e){return e}),this.groupParts=i.a.map(this.target.group,y.create).filter(function(e){return e})},t.prototype.updatePersistedParts=function(){this.target.select=i.a.map(this.selectParts,function(e){return i.a.map(e,function(e){return{type:e.def.type,datatype:e.datatype,params:e.params}})}),this.target.where=i.a.map(this.whereParts,function(e){return{type:e.def.type,datatype:e.datatype,name:e.name,params:e.params}}),this.target.group=i.a.map(this.groupParts,function(e){return{type:e.def.type,datatype:e.datatype,params:e.params}})},t.prototype.buildSelectMenu=function(){this.selectMenu=[];this.selectMenu.push({text:"Aggregate Functions",value:"aggregate",submenu:[{text:"Average",value:"avg"},{text:"Count",value:"count"},{text:"Maximum",value:"max"},{text:"Minimum",value:"min"},{text:"Sum",value:"sum"},{text:"Standard deviation",value:"stddev"},{text:"Variance",value:"variance"}]}),this.selectMenu.push({text:"Alias",value:"alias"}),this.selectMenu.push({text:"Column",value:"column"})},t.prototype.toggleEditorMode=function(){var e=this;this.target.rawQuery?m.b.emit(g.CoreEvents.showConfirmModal,{title:"Warning",text2:"Switching to query builder may overwrite your raw SQL.",icon:"fa-exclamation",yesText:"Switch",onConfirm:function(){e.target.rawQuery=!e.target.rawQuery}}):this.target.rawQuery=!this.target.rawQuery},t.prototype.resetPlusButton=function(e){var t=this.uiSegmentSrv.newPlusButton();e.html=t.html,e.value=t.value},t.prototype.getTableSegments=function(){return this.datasource.metricFindQuery(this.metaBuilder.buildTableQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))},t.prototype.tableChanged=function(){var e=this;this.target.table=this.tableSegment.value,this.target.where=[],this.target.group=[],this.updateProjection();var t=this.uiSegmentSrv.newSegment("none");this.metricColumnSegment.html=t.html,this.metricColumnSegment.value=t.value,this.target.metricColumn="none";var r=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then(function(t){if(t.length>0&&!i.a.find(t,function(t){return t.text===e.target.timeColumn})){var r=e.uiSegmentSrv.newSegment(t[0].text);e.timeColumnSegment.html=r.html,e.timeColumnSegment.value=r.value}return e.timeColumnChanged(!1)}),a=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then(function(t){t.length>0&&(e.target.select=[[{type:"column",params:[t[0].text]}]],e.updateProjection())});Promise.all([r,a]).then(function(){e.updateRawSqlAndRefresh()})},t.prototype.getTimeColumnSegments=function(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))},t.prototype.timeColumnChanged=function(e){var t=this;return this.target.timeColumn=this.timeColumnSegment.value,this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(this.target.timeColumn)).then(function(r){if(1===r.length){t.target.timeColumnType!==r[0].text&&(t.target.timeColumnType=r[0].text);var a=void 0;a=t.queryModel.hasUnixEpochTimecolumn()?y.create({type:"macro",name:"$__unixEpochFilter",params:[]}):y.create({type:"macro",name:"$__timeFilter",params:[]}),t.whereParts.length>=1&&"macro"===t.whereParts[0].def.type?t.whereParts[0]=a:t.whereParts.splice(0,0,a)}t.updatePersistedParts(),!1!==e&&t.updateRawSqlAndRefresh()})},t.prototype.getMetricColumnSegments=function(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("metric")).then(this.transformToSegments({addNone:!0})).catch(this.handleQueryError.bind(this))},t.prototype.metricColumnChanged=function(){this.target.metricColumn=this.metricColumnSegment.value,this.updateRawSqlAndRefresh()},t.prototype.onDataReceived=function(e){this.lastQueryMeta=null,this.lastQueryError=null;var t=i.a.find(e,{refId:this.target.refId});t&&(this.lastQueryMeta=t.meta)},t.prototype.onDataError=function(e){if(e.data&&e.data.results){var t=e.data.results[this.target.refId];t&&(this.lastQueryMeta=t.meta,this.lastQueryError=t.error)}},t.prototype.transformToSegments=function(e){var t=this;return function(r){var n,s,o=i.a.map(r,function(e){return t.uiSegmentSrv.newSegment({value:e.text,expandable:e.expandable})});if(e.addTemplateVars)try{for(var u=Object(a.__values)(t.templateSrv.variables),l=u.next();!l.done;l=u.next()){var m=l.value,c=void 0;c="$"+m.name,e.templateQuoter&&!1===m.multi&&(c=e.templateQuoter(c)),o.unshift(t.uiSegmentSrv.newSegment({type:"template",value:c,expandable:!0}))}}catch(e){n={error:e}}finally{try{l&&!l.done&&(s=u.return)&&s.call(u)}finally{if(n)throw n.error}}return e.addNone&&o.unshift(t.uiSegmentSrv.newSegment({type:"template",value:"none",expandable:!0})),o}},t.prototype.findAggregateIndex=function(e){return i.a.findIndex(e,function(e){return"aggregate"===e.def.type||"percentile"===e.def.type})},t.prototype.findWindowIndex=function(e){return i.a.findIndex(e,function(e){return"window"===e.def.type||"moving_window"===e.def.type})},t.prototype.addSelectPart=function(e,t,r){var a=t.value;r&&r.type&&(a=r.type);var n=y.create({type:a});r&&(n.params[0]=r.value);var s=!1;switch(a){case"column":var o=i.a.map(e,function(e){return y.create({type:e.def.type,params:i.a.clone(e.params)})});this.selectParts.push(o);break;case"percentile":case"aggregate":0===this.target.group.length&&this.addGroup("time","$__interval");var u=this.findAggregateIndex(e);-1!==u?e[u]=n:e.splice(1,0,n),i.a.find(e,function(e){return"alias"===e.def.type})||(s=!0);break;case"moving_window":case"window":var l=this.findWindowIndex(e);if(-1!==l)e[l]=n;else{var m=this.findAggregateIndex(e);-1!==m?e.splice(m+1,0,n):e.splice(1,0,n)}i.a.find(e,function(e){return"alias"===e.def.type})||(s=!0);break;case"alias":s=!0}s&&(n=y.create({type:"alias",params:[e[0].params[0].replace(/"/g,"")]}),"alias"===e[e.length-1].def.type?e[e.length-1]=n:e.push(n)),this.updatePersistedParts(),this.updateRawSqlAndRefresh()},t.prototype.removeSelectPart=function(e,t){if("column"===t.def.type){if(this.selectParts.length>1){var r=i.a.indexOf(this.selectParts,e);this.selectParts.splice(r,1)}}else{var a=i.a.indexOf(e,t);e.splice(a,1)}this.updatePersistedParts()},t.prototype.handleSelectPartEvent=function(e,t,r){switch(r.name){case"get-param-options":switch(t.def.type){case"column":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeSelectPart(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}},t.prototype.handleGroupPartEvent=function(e,t,r){switch(r.name){case"get-param-options":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeGroup(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}},t.prototype.addGroup=function(e,t){var r,n,i=[t];"time"===e&&(i=["$__interval","none"]);var s=y.create({type:e,params:i});"time"===e?this.groupParts.splice(0,0,s):this.groupParts.push(s);try{for(var o=Object(a.__values)(this.selectParts),u=o.next();!u.done;u=o.next()){var l=u.value;if(!l.some(function(e){return"aggregate"===e.def.type})){var m=y.create({type:"aggregate",params:["avg"]});if(l.splice(1,0,m),!l.some(function(e){return"alias"===e.def.type})){var c=y.create({type:"alias",params:[l[0].part.params[0]]});l.push(c)}}}}catch(e){r={error:e}}finally{try{u&&!u.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}this.updatePersistedParts()},t.prototype.removeGroup=function(e,t){"time"===e.def.type&&(this.selectParts=i.a.map(this.selectParts,function(e){return i.a.filter(e,function(e){return"aggregate"!==e.def.type&&"percentile"!==e.def.type})})),this.groupParts.splice(t,1),this.updatePersistedParts()},t.prototype.handleWherePartEvent=function(e,t,r,a){var n=this;switch(r.name){case"get-param-options":switch(r.param.name){case"left":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"right":return["int","bigint","double","datetime"].indexOf(t.datatype)>-1?Promise.resolve([]):this.datasource.metricFindQuery(this.metaBuilder.buildValueQuery(t.params[0])).then(this.transformToSegments({addTemplateVars:!0,templateQuoter:function(e){return n.queryModel.quoteLiteral(e)}})).catch(this.handleQueryError.bind(this));case"op":return Promise.resolve(this.uiSegmentSrv.newOperators(this.metaBuilder.getOperators(t.datatype)));default:return Promise.resolve([])}case"part-param-changed":this.updatePersistedParts(),this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(t.params[0])).then(function(e){1===e.length&&(t.datatype=e[0].text)}),this.updateRawSqlAndRefresh();break;case"action":e.splice(a,1),this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}},t.prototype.getWhereOptions=function(){var e=[];return this.queryModel.hasUnixEpochTimecolumn()?e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__unixEpochFilter"})):e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__timeFilter"})),e.push(this.uiSegmentSrv.newSegment({type:"expression",value:"Expression"})),Promise.resolve(e)},t.prototype.addWhereAction=function(e,t){switch(this.whereAdd.type){case"macro":var r=y.create({type:"macro",name:this.whereAdd.value,params:[]});this.whereParts.length>=1&&"macro"===this.whereParts[0].def.type?this.whereParts[0]=r:this.whereParts.splice(0,0,r);break;default:this.whereParts.push(y.create({type:"expression",params:["value","=","value"]}))}this.updatePersistedParts(),this.resetPlusButton(this.whereAdd),this.updateRawSqlAndRefresh()},t.prototype.getGroupOptions=function(){var e=this;return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("group")).then(function(t){var r,n,i=[];e.queryModel.hasTimeGroup()||i.push(e.uiSegmentSrv.newSegment({type:"time",value:"time($__interval,none)"}));try{for(var s=Object(a.__values)(t),o=s.next();!o.done;o=s.next()){var u=o.value;i.push(e.uiSegmentSrv.newSegment({type:"column",value:u.text}))}}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return i}).catch(this.handleQueryError.bind(this))},t.prototype.addGroupAction=function(){this.groupAdd.value,this.addGroup(this.groupAdd.type,this.groupAdd.value),this.resetPlusButton(this.groupAdd),this.updateRawSqlAndRefresh()},t.prototype.handleQueryError=function(e){return this.error=e.message||"Failed to issue metric query",[]},t.templateUrl="partials/query.editor.html",t}(p.QueryCtrl),w=r("QjE0");r.d(t,"ConfigCtrl",function(){return _}),r.d(t,"AnnotationsQueryCtrl",function(){return x}),r.d(t,"MysqlDatasource",function(){return l}),r.d(t,"Datasource",function(){return l}),r.d(t,"QueryCtrl",function(){return S});var _=function(){function e(){this.onPasswordReset=Object(w.c)(this,w.a.Password),this.onPasswordChange=Object(w.b)(this,w.a.Password)}return e.templateUrl="partials/config.html",e}(),C="SELECT\n    UNIX_TIMESTAMP(<time_column>) as time_sec,\n    <text_column> as text,\n    <tags_column> as tags\n  FROM <table name>\n  WHERE $__timeFilter(time_column)\n  ORDER BY <time_column> ASC\n  LIMIT 100\n  ",x=function(){function e(){this.annotation.rawQuery=this.annotation.rawQuery||C}return e.templateUrl="partials/annotations.editor.html",e}()}}]);
//# sourceMappingURL=mysqlPlugin.4d0490a94b199a11f40c.js.map