(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Gw5z:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("mrSG"),s=a("t8hP"),r=function(){return Object(n.__awaiter)(void 0,void 0,Promise,function(){var e,t;return Object(n.__generator)(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,Object(s.getBackendSrv)().get("api/admin/stats")];case 1:return[2,[{name:"Total users",value:(e=a.sent()).users},{name:"Total admins",value:e.admins},{name:"Total editors",value:e.editors},{name:"Total viewers",value:e.viewers},{name:"Active users (seen last 30 days)",value:e.activeUsers},{name:"Active admins (seen last 30 days)",value:e.activeAdmins},{name:"Active editors (seen last 30 days)",value:e.activeEditors},{name:"Active viewers (seen last 30 days)",value:e.activeViewers},{name:"Active sessions",value:e.activeSessions},{name:"Total dashboards",value:e.dashboards},{name:"Total orgs",value:e.orgs},{name:"Total playlists",value:e.playlists},{name:"Total snapshots",value:e.snapshots},{name:"Total dashboard tags",value:e.tags},{name:"Total starred dashboards",value:e.stars},{name:"Total alerts",value:e.alerts}]];case 2:throw t=a.sent(),console.error(t),t;case 3:return[2]}})})}},jmwA:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"ServerStats",function(){return v});var n=a("mrSG"),s=a("q1tI"),r=a.n(s),l=a("0cfB"),o=a("/MKj"),i=a("lzJ5"),u=a("Gw5z"),c=a("ZGyg"),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={stats:[],isLoading:!0},t}return Object(n.__extends)(t,e),t.prototype.componentDidMount=function(){return Object(n.__awaiter)(this,void 0,void 0,function(){var e,t;return Object(n.__generator)(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,this.props.getServerStats()];case 1:return e=a.sent(),this.setState({stats:e,isLoading:!1}),[3,3];case 2:return t=a.sent(),console.error(t),[3,3];case 3:return[2]}})})},t.prototype.render=function(){var e=this.props.navModel,t=this.state,a=t.stats,n=t.isLoading;return r.a.createElement(c.a,{navModel:e},r.a.createElement(c.a.Contents,{isLoading:n},r.a.createElement("table",{className:"filter-table form-inline"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Value"))),r.a.createElement("tbody",null,a.map(d)))))},t}(s.PureComponent);function d(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.value))}t.default=Object(l.hot)(e)(Object(o.connect)(function(e){return{navModel:Object(i.a)(e.navIndex,"server-stats"),getServerStats:u.a}})(v))}.call(this,a("3UD+")(e))}}]);
//# sourceMappingURL=ServerStats.4d0490a94b199a11f40c.js.map