(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){e.exports=a.p+"static/media/pinpoint.b0112773.png"},139:function(e,t,a){e.exports=a.p+"static/media/pinpoint2.9d47d235.png"},140:function(e,t,a){e.exports=a(279)},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},170:function(e,t){},172:function(e,t){},206:function(e,t){},207:function(e,t){},277:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(59),i=a.n(c),r=(a(145),a(146),a(147),a(33)),l=a(34),s=a(36),u=a(35),m=a(37),d=a(21),h=a(41),p=(a(148),function(e){return o.a.createElement("button",{className:"toggle-button",onClick:e.click},o.a.createElement("div",{className:"toggle-button__line"}),o.a.createElement("div",{className:"toggle-button__line"}),o.a.createElement("div",{className:"toggle-button__line"}))}),E=(a(149),function(e){return o.a.createElement("header",{className:"toolbar border"},o.a.createElement("nav",{className:"toolbar__navigation"},o.a.createElement("div",{className:"toolbar__toggle-button"},o.a.createElement(p,{click:e.drawerClickHandler})),o.a.createElement("div",{className:"toolbar__logo"},o.a.createElement(d.b,{to:"/"},"ECOSAIL")),o.a.createElement("div",{className:"spacer"}),o.a.createElement("div",{className:"toolbar_navigation-items"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(d.b,{to:"/"},"Main")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/map"},"Map")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/camera"},"Camera")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/data"},"Data"))))))}),b=(a(154),function(e){var t="side-drawer";return e.show&&(t="side-drawer open"),o.a.createElement("nav",{className:t},o.a.createElement("div",{className:"picture"},o.a.createElement("label",null,"picture here")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(d.b,{to:"/"},"Main")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/map"},"Map")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/camera"},"Camera")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/data"},"Data"))))}),f=(a(155),function(e){return o.a.createElement("div",{className:"backdrop",onClick:e.click})}),g=a(281),v=a(282),L=a(283),w=a(284),O=a(285),j=a(286),y=a(287),S=(a(156),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement(g.a,null,o.a.createElement(v.a,{className:"justify-content-md-center"},o.a.createElement(L.a,{xs:!0,lg:"5"},o.a.createElement(w.a,{body:!0,inverse:!0,className:"main-item"},o.a.createElement(O.a,null,"Add New Boat"),o.a.createElement(j.a,null,"Adding a new boat id."),o.a.createElement(y.a,null,"Add"))),o.a.createElement(L.a,{xs:!0,lg:"5"},o.a.createElement(w.a,{body:!0,inverse:!0,color:"success"},o.a.createElement(O.a,null,"Boat activation"),o.a.createElement(j.a,null,"Activate boats"),o.a.createElement(y.a,{color:"secondary"},"Button"))))))}}]),t}(n.Component)),C=a(62),k=a(137),N=a(15),D=a.n(N),F=a(293),_=a(294),A=a(292),U=a(295),x=a(45),z=a.n(x),H=a(138),I=a.n(H),M=a(139),B=a.n(M),V=(a(277),a(288)),q=a(289),T=a(290),J=a(291),W=(a(278),function(e){return o.a.createElement(w.a,{body:!0,className:"location-form"},o.a.createElement(O.a,null,"Sailboat Geolocation"),e.sendingLocation||e.sentLocation||!e.haveUsersLocation?e.sendingLocation||!e.haveUsersLocation?o.a.createElement(j.a,null,"Successfully submit a location!"):"":o.a.createElement(V.a,{onSubmit:e.formSubmitted},o.a.createElement(q.a,null,o.a.createElement(T.a,{for:"slat"},"Latitude"),o.a.createElement(J.a,{onChange:e.valueChanged,type:"number",step:"0.0000001",name:"slat",id:"slat",placeholder:"Enter the latitude"})),o.a.createElement(q.a,null,o.a.createElement(T.a,{for:"slng"},"Longitude"),o.a.createElement(J.a,{onChange:e.valueChanged,type:"number",step:"0.0000001",name:"slng",id:"slng",placeholder:"Enter the longitude"})),o.a.createElement(y.a,{type:"cancel",color:"danger",onClick:e.cancelLocation},"Cancel")," "," ",o.a.createElement(y.a,{type:"submit",color:"info",disabled:!e.formIsValid()},"Send")))}),G="localhost"===window.location.hostname?"http://localhost:5000":"http://52.221.214.117:5000",P=G+"/authed/data/getCurLocation",$=G+"/authed/data/getDestination",K=G+"/authed/data/postDestination";var Q=D.a.icon({iconUrl:I.a,iconSize:[30,41],iconAnchor:[12.5,40],popupAnchor:[0,-45]}),R=D.a.icon({iconUrl:B.a,iconSize:[30,41],iconAnchor:[12.5,40],popupAnchor:[0,-45]}),X=z.a.object().keys({latitude:z.a.number().min(-90).max(90).required(),longitude:z.a.number().min(-180).max(180).required()}),Y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={location:{lat:5.354482,lng:100.301226},haveUsersLocation:!1,zoom:1,userSetDest:{slat:"",slng:""},curLocations:[],destinations:[],showLocationForm:!1,sendingLocation:!1,sentLocation:!1},a.updateLocation=function(){fetch($).then(function(e){return e.json()}).then(function(e){return e}).then(function(e){a.setState({destinations:e})}),fetch(P).then(function(e){return e.json()}).then(function(e){return e}).then(function(e){a.setState({curLocations:e,haveUsersLocation:!0,zoom:18})})},a.showLocationForm=function(){a.setState({showLocationForm:!0})},a.cancelLocation=function(){a.setState({showLocationForm:!1})},a.formIsValid=function(){var e={latitude:a.state.userSetDest.slat,longitude:a.state.userSetDest.slng};return!(z.a.validate(e,X).error||!e)},a.formSubmitted=function(e){if(e.preventDefault(),a.formIsValid()){a.setState({sendingLocation:!0});var t={latitude:a.state.userSetDest.slat,longitude:a.state.userSetDest.slng};(n=t,fetch(K,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()})).then(function(e){setTimeout(function(){a.setState({sendingLocation:!1,sentLocation:!0})},4e3)})}var n},a.valueChanged=function(e){var t=e.target,n=t.name,o=t.value;a.setState(function(e){return{userSetDest:Object(k.a)({},e.userSetDest,Object(C.a)({},n,o))}})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.updateLocation();var e=[this.state.location.lat,this.state.location.lng],t=[this.state.location.lat,this.state.location.lng];if(0!=Object.keys(this.state.curLocations).length){var a=this.state.curLocations;e[0]=parseFloat(a.latitude),e[1]=parseFloat(a.longitude)}return 0!=Object.keys(this.state.destinations).length&&(t[0]=parseFloat(this.state.destinations.latitude),t[1]=parseFloat(this.state.destinations.longitude)),o.a.createElement("div",null,o.a.createElement(F.a,{className:"map",center:e,zoom:this.state.zoom},o.a.createElement(_.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),this.state.haveUsersLocation?o.a.createElement(A.a,{position:e,icon:Q},o.a.createElement(U.a,null,"lat:",e[0],", lng:",e[1])):"",this.state.haveUsersLocation?o.a.createElement(A.a,{position:t,icon:R},o.a.createElement(U.a,null,"lat:",t[0],", lng:",t[1])):""),this.state.showLocationForm?this.state.sentLocation?this.setState({sentLocation:!1,showLocationForm:!1}):o.a.createElement(W,{cancelLocation:this.cancelLocation,showLocationForm:this.state.showLocationForm,sendingLocation:this.state.sendingLocation,sentLocation:this.state.sentLocation,haveUsersLocation:this.state.haveUsersLocation,formSubmitted:this.formSubmitted,valueChanged:this.valueChanged,formIsValid:this.formIsValid}):o.a.createElement(y.a,{className:"location-form",onClick:this.showLocationForm,color:"info"},"Add a location"))}}]),t}(n.Component),Z=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Camera view"),o.a.createElement("p",null,"Duis a turpis sed lacus dapibus elementum sed eu lectus."))}}]),t}(n.Component),ee=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"HELLO"),o.a.createElement("p",null,"Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."),o.a.createElement("p",null,"Duis a turpis sed lacus dapibus elementum sed eu lectus."))}}]),t}(n.Component),te=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={sideDrawerOpen:!1},a.drawerToggleClickHandler=function(){a.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},a.backdropClickHandler=function(){a.setState({sideDrawerOpen:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=o.a.createElement(f,{click:this.backdropClickHandler})),o.a.createElement(d.a,null,o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(E,{drawerClickHandler:this.drawerToggleClickHandler}),o.a.createElement(b,{show:this.state.sideDrawerOpen}),e,o.a.createElement("div",{className:"content"},o.a.createElement(h.a,{exact:!0,path:"/",component:S}),o.a.createElement(h.a,{path:"/map",component:Y}),o.a.createElement(h.a,{path:"/camera",component:Z}),o.a.createElement(h.a,{path:"/data",component:ee}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=function(){i.a.render(o.a.createElement(te,null),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",ae,!1):ae(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[140,1,2]]]);
//# sourceMappingURL=main.08ab15ac.chunk.js.map