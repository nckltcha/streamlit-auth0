(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{31:function(n,e,t){n.exports=t(52)},36:function(n,e,t){},43:function(n,e,t){},49:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var o=t(6),a=t.n(o),i=t(26),c=t.n(i),r=(t(36),t(0)),s=t(3),u=t(1),l=t(2),d=t(18),p=t(8),m=(t(43),t(55)),h=t(56),f=function(n){var e=n.props.onRun,t=n.props.domain,o=Object(d.b)(),i=o.user,c=o.isAuthenticated,r=(o.loginWithRedirect,o.loginWithPopup),s=o.logout,u=o.getAccessTokenSilently,l=o.getAccessTokenWithPopup,f=a.a.useState(null),g=Object(p.a)(f,2),v=g[0],b=g[1];return a.a.useEffect((function(){var n={audience:"https://".concat(t,"/api/v2/")};c?v?e(i,v):u(n).catch((function(){return l(n)})).then((function(n){b(n),e(i,n)})):e(!1,null)})),a.a.createElement("div",{className:"nav-container"},a.a.createElement(m.a,{className:"login-component"},!c&&a.a.createElement(h.a,{color:"primary",className:"btn-margin",onClick:function(){r({}).then((function(){e(!1,null)})).catch((function(n){return console.log(n)}))}},"Log in"),c&&a.a.createElement(h.a,{onClick:function(){s({returnTo:window.location.origin})}},"Logout")))},g=t(28),v=(Object(g.a)(),t(23)),b=(t(49),t(21)),w=t(22);var k=function(){b.a.add(w.a),b.a.add(w.c),b.a.add(w.b)},E=t(50);k();var j=function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(n){var o;return Object(r.a)(this,t),(o=e.call(this,n)).domain=o.props.args.auth_setup.domain,o.clientId=o.props.args.auth_setup.clientId,o.providerConfig={clientId:o.clientId,domain:o.domain,audience:"https://".concat(o.domain,"/api/v2/"),redirectUri:window.location.origin,useRefreshTokens:!0,cacheLocation:"localstorage"},o.onRun=function(n,e){E.isEqual(n,o.state.user)||(n&&(n.token=e),v.a.setComponentValue(n),o.setState({user:n}))},o.state={user:null},o}return Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(d.a,this.providerConfig,a.a.createElement("div",{id:"app"},a.a.createElement(f,{props:{onRun:this.onRun,domain:this.providerConfig.domain}})))}}]),t}(v.b),O=Object(v.c)(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a5ade388.chunk.js.map