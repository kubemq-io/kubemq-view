(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9i9D":function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"CreateTeam",function(){return d});var n=a("mrSG"),r=a("q1tI"),i=a.n(r),o=a("ZGyg"),l=a("0cfB"),m=a("kDLi"),c=a("t8hP"),s=a("3SGO"),u=a("/MKj"),p=a("lzJ5"),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={name:"",email:""},t.create=function(e){return Object(n.__awaiter)(t,void 0,void 0,function(){var t,a,r,i;return Object(n.__generator)(this,function(n){switch(n.label){case 0:return e.preventDefault(),t=this.state,a=t.name,r=t.email,[4,Object(c.getBackendSrv)().post("/api/teams",{name:a,email:r})];case 1:return(i=n.sent()).teamId&&this.props.updateLocation({path:"/org/teams/edit/"+i.teamId}),[2]}})})},t.onEmailChange=function(e){t.setState({email:e.target.value})},t.onNameChange=function(e){t.setState({name:e.target.value})},t}return Object(n.__extends)(t,e),t.prototype.render=function(){var e=this.props.navModel,t=this.state,a=t.name,n=t.email;return i.a.createElement(o.a,{navModel:e},i.a.createElement(o.a.Contents,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",{className:"page-sub-heading"},"New Team"),i.a.createElement("form",{className:"gf-form-group",onSubmit:this.create},i.a.createElement(m.FormField,{className:"gf-form",label:"Name",value:a,onChange:this.onNameChange,inputWidth:30,labelWidth:10,required:!0}),i.a.createElement(m.FormField,{type:"email",className:"gf-form",label:"Email",value:n,onChange:this.onEmailChange,inputWidth:30,labelWidth:10,placeholder:"email@test.com",tooltip:"This is optional and is primarily used for allowing custom team avatars."}),i.a.createElement("div",{className:"gf-form-button-row"},i.a.createElement(m.Button,{type:"submit",variant:"primary"},"Create"))))))},t}(r.PureComponent);var h={updateLocation:s.c};t.default=Object(l.hot)(e)(Object(u.connect)(function(e){return{navModel:Object(p.a)(e.navIndex,"teams")}},h)(d))}.call(this,a("3UD+")(e))}}]);
//# sourceMappingURL=CreateTeam.4d0490a94b199a11f40c.js.map