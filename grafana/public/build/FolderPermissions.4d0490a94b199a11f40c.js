(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5gaU":function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"d",function(){return m}),n.d(t,"g",function(){return b}),n.d(t,"e",function(){return h}),n.d(t,"a",function(){return v});var r=n("mrSG"),i=n("Obii"),o=n("NXk7"),s=n("3SGO"),a=n("v2PB"),c=n("Xmxp"),d=n("BAXh");function u(e){var t=this;return function(n){return Object(r.__awaiter)(t,void 0,void 0,function(){var t;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return[4,Object(o.b)().getFolderByUid(e)];case 1:return t=r.sent(),n(Object(d.b)(t)),n(Object(s.d)(Object(a.a)(t))),[2]}})})}}function l(e){var t=this;return function(n){return Object(r.__awaiter)(t,void 0,void 0,function(){var t;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return[4,Object(o.b)().put("/api/folders/"+e.uid,{title:e.title,version:e.version})];case 1:return t=r.sent(),c.b.emit(i.AppEvents.alertSuccess,["Folder saved"]),n(Object(s.c)({path:t.url+"/settings"})),[2]}})})}}function f(e){var t=this;return function(n){return Object(r.__awaiter)(t,void 0,void 0,function(){return Object(r.__generator)(this,function(t){switch(t.label){case 0:return[4,Object(o.b)().deleteFolder(e,!0)];case 1:return t.sent(),n(Object(s.c)({path:"dashboards"})),[2]}})})}}function m(e){var t=this;return function(n){return Object(r.__awaiter)(t,void 0,void 0,function(){var t;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return[4,Object(o.b)().get("/api/folders/"+e+"/permissions")];case 1:return t=r.sent(),n(Object(d.c)(t)),[2]}})})}}function p(e){return{userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}}function b(e,t){var n=this;return function(i,s){return Object(r.__awaiter)(n,void 0,void 0,function(){var n,a,c,d,u,l,f,b;return Object(r.__generator)(this,function(h){switch(h.label){case 0:n=s().folder,a=[];try{for(c=Object(r.__values)(n.permissions),d=c.next();!d.done;d=c.next())(u=d.value).inherited||(l=p(u),e===u&&(l.permission=t),a.push(l))}catch(e){f={error:e}}finally{try{d&&!d.done&&(b=c.return)&&b.call(c)}finally{if(f)throw f.error}}return[4,Object(o.b)().post("/api/folders/"+n.uid+"/permissions",{items:a})];case 1:return h.sent(),[4,i(m(n.uid))];case 2:return h.sent(),[2]}})})}}function h(e){var t=this;return function(n,i){return Object(r.__awaiter)(t,void 0,void 0,function(){var t,s,a,c,d,u,l;return Object(r.__generator)(this,function(f){switch(f.label){case 0:t=i().folder,s=[];try{for(a=Object(r.__values)(t.permissions),c=a.next();!c.done;c=a.next())(d=c.value).inherited||d===e||s.push(p(d))}catch(e){u={error:e}}finally{try{c&&!c.done&&(l=a.return)&&l.call(a)}finally{if(u)throw u.error}}return[4,Object(o.b)().post("/api/folders/"+t.uid+"/permissions",{items:s})];case 1:return f.sent(),[4,n(m(t.uid))];case 2:return f.sent(),[2]}})})}}function v(e){var t=this;return function(n,i){return Object(r.__awaiter)(t,void 0,void 0,function(){var t,s,a,c,d,u,l;return Object(r.__generator)(this,function(f){switch(f.label){case 0:t=i().folder,s=[];try{for(a=Object(r.__values)(t.permissions),c=a.next();!c.done;c=a.next())(d=c.value).inherited||s.push(p(d))}catch(e){u={error:e}}finally{try{c&&!c.done&&(l=a.return)&&l.call(a)}finally{if(u)throw u.error}}return s.push({userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}),[4,Object(o.b)().post("/api/folders/"+t.uid+"/permissions",{items:s})];case 1:return f.sent(),[4,n(m(t.uid))];case 2:return f.sent(),[2]}})})}}},rtU1:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"FolderPermissions",function(){return v});var r=n("mrSG"),i=n("q1tI"),o=n.n(i),s=n("0cfB"),a=n("/MKj"),c=n("ZGyg"),d=n("kDLi"),u=n("BVom"),l=n("lzJ5"),f=n("5gaU"),m=n("v2PB"),p=n("3p3q"),b=n("wobk"),h=n("QzbV"),v=function(e){function t(t){var n=e.call(this,t)||this;return n.onOpenAddPermissions=function(){n.setState({isAdding:!0})},n.onRemoveItem=function(e){n.props.removeFolderPermission(e)},n.onPermissionChanged=function(e,t){n.props.updateFolderPermission(e,t)},n.onAddPermission=function(e){return n.props.addFolderPermission(e)},n.onCancelAddPermission=function(){n.setState({isAdding:!1})},n.state={isAdding:!1},n}return Object(r.__extends)(t,e),t.prototype.componentDidMount=function(){this.props.getFolderByUid(this.props.folderUid),this.props.getFolderPermissions(this.props.folderUid)},t.prototype.render=function(){var e=this.props,t=e.navModel,n=e.folder,r=this.state.isAdding;if(0===n.id)return o.a.createElement(c.a,{navModel:t},o.a.createElement(c.a.Contents,{isLoading:!0},o.a.createElement("span",null)));var i={title:n.title,url:n.url,id:n.id};return o.a.createElement(c.a,{navModel:t},o.a.createElement(c.a.Contents,null,o.a.createElement("div",{className:"page-action-bar"},o.a.createElement("h3",{className:"page-sub-heading"},"Folder Permissions"),o.a.createElement(d.Tooltip,{placement:"auto",content:o.a.createElement(h.a,null)},o.a.createElement("div",{className:"page-sub-heading-icon"},o.a.createElement("i",{className:"gicon gicon-question gicon--has-hover"}))),o.a.createElement("div",{className:"page-action-bar__spacer"}),o.a.createElement("button",{className:"btn btn-primary pull-right",onClick:this.onOpenAddPermissions,disabled:r},"Add Permission")),o.a.createElement(u.a,{in:r},o.a.createElement(b.a,{onAddPermission:this.onAddPermission,onCancel:this.onCancelAddPermission})),o.a.createElement(p.a,{items:n.permissions,onRemoveItem:this.onRemoveItem,onPermissionChanged:this.onPermissionChanged,isFetching:!1,folderInfo:i})))},t}(i.PureComponent),g={getFolderByUid:f.c,getFolderPermissions:f.d,updateFolderPermission:f.g,removeFolderPermission:f.e,addFolderPermission:f.a};t.default=Object(s.hot)(e)(Object(a.connect)(function(e){var t=e.location.routeParams.uid;return{navModel:Object(l.a)(e.navIndex,"folder-permissions-"+t,Object(m.b)(1)),folderUid:t,folder:e.folder}},g)(v))}.call(this,n("3UD+")(e))},v2PB:function(e,t,n){"use strict";function r(e){return{icon:"fa fa-folder-open",id:"manage-folder",subTitle:"Manage folder dashboards & permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"fa fa-fw fa-th-large",id:"folder-dashboards-"+e.uid,text:"Dashboards",url:e.url},{active:!1,icon:"fa fa-fw fa-lock",id:"folder-permissions-"+e.uid,text:"Permissions",url:e.url+"/permissions"},{active:!1,icon:"gicon gicon-cog",id:"folder-settings-"+e.uid,text:"Settings",url:e.url+"/settings"}]}}function i(e){var t=r({id:1,uid:"loading",title:"Loading",url:"url",canSave:!1,version:0});return t.children[e].active=!0,{main:t,node:t.children[e]}}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})}}]);
//# sourceMappingURL=FolderPermissions.4d0490a94b199a11f40c.js.map