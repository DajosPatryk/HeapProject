(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22c0":function(e,t,n){},"444a":function(e,t,n){"use strict";var r=n("22c0"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},a=[],i={name:"App",components:{},data:function(){return{}}},c=i,s=n("2877"),u=n("6544"),l=n.n(u),p=n("7496"),f=n("f6c4"),v=Object(s["a"])(c,o,a,!1,null,null,null),d=v.exports;l()(v,{VApp:p["a"],VMain:f["a"]});var h=n("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Welcome to Login. "),n("a",{on:{click:function(t){return e.$router.push("Map")}}},[e._v("Dev Login")])])},b=[],w={components:{}},_=w,k=Object(s["a"])(_,g,b,!1,null,null,null),y=k.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("google-map"),n("div",{attrs:{id:"top-panel"}},[n("v-btn",{attrs:{id:"profilebtn",fab:"","x-large":"",elevation:"5",color:"white"},on:{click:function(t){return e.$router.push("Profile")}}},[n("v-icon",[e._v("account_circle")])],1)],1),n("div",{attrs:{id:"bottom-panel"}},[n("v-btn",{attrs:{id:"whbtn","x-large":"",block:"",elevation:"5",color:"white"},on:{click:function(t){return e.$router.push("EventMenu")}}},[e._v("What's Happening?")])],1)],1)},O=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("gmap-map",{staticStyle:{position:"fixed",padding:"0",margin:"0",top:"-5rem",left:"0",width:"100%",height:"100%"},attrs:{center:e.center,zoom:15}},e._l(e.markers,(function(t,r){return n("gmap-marker",{key:r,attrs:{position:t.position},on:{click:function(n){e.center=t.position}}})})),1)],1)},M=[],P=(n("ac1f"),n("1276"),n("b85c")),E=(n("96cf"),n("1da1")),S=n("bc3a"),V=n.n(S),$={name:"GoogleMap",data:function(){return{events:[],center:{lat:45.508,lng:-73.587},markers:[],places:[],currentPlace:null}},mounted:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.geolocate(),t.next=3,e.refreshEvents();case 3:return t.next=5,e.refreshMarkers();case 5:case"end":return t.stop()}}),t)})))()},methods:{refreshEvents:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.a.get("http://localhost:3000/events");case 2:n=t.sent,e.events=n.data,console.log("Fetched Events: "+e.events,e.events);case 5:case"end":return t.stop()}}),t)})))()},refreshMarkers:function(){var e,t=Object(P["a"])(this.events);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=n.location.split(","),o={lat:parseFloat(r[0]),lng:parseFloat(r[1])};this.markers.push({position:o})}}catch(a){t.e(a)}finally{t.f()}console.log("Pushed Markers: "+this.markers,this.markers)},setPlace:function(e){this.currentPlace=e},addMarker:function(){if(this.currentPlace){var e={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:e}),this.places.push(this.currentPlace),this.center=e,this.currentPlace=null}},geolocate:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.center={lat:t.coords.latitude,lng:t.coords.longitude}}))}}},L=$,I=Object(s["a"])(L,j,M,!1,null,null,null),R=I.exports,A={name:"Map",components:{GoogleMap:R}},F=A,T=(n("444a"),n("8336")),z=n("132d"),B=Object(s["a"])(F,x,O,!1,null,"66ed9d9a",null),G=B.exports;l()(B,{VBtn:T["a"],VIcon:z["a"]});var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Welcome to Event Menu. "),n("div",{attrs:{id:"center-panel"}},[n("List",{attrs:{id:"list",listShow:e.listShow,items:e.events}})],1),n("a",{on:{click:function(t){return e.$router.push("Map")}}},[e._v("Go Back")])])},J=[],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-list",{attrs:{"three-line":""}},[e._l(e.items,(function(t,o){return[o>=1?r("v-divider",{key:o}):r("v-list-item",{key:t.title},[r("v-list-item-avatar",[r("v-img",{attrs:{src:n("a524")}})],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title)+" - "+e._s(t.type)+" - Size: "+e._s(t.size))]),r("v-list-item-subtitle",[e._v(e._s(t.description)+" - "+e._s(t.address))])],1)],1)]}))],2)],1)},C=[],Y=(n("a9e3"),{data:function(){return{}},props:{items:Object,listShow:Number}}),q=Y,D=n("ce7e"),H=n("adda"),K=n("8860"),Z=n("da13"),Q=n("8270"),U=n("5d23"),X=Object(s["a"])(q,N,C,!1,null,"5befc01b",null),ee=X.exports;l()(X,{VDivider:D["a"],VImg:H["a"],VList:K["a"],VListItem:Z["a"],VListItemAvatar:Q["a"],VListItemContent:U["a"],VListItemSubtitle:U["b"],VListItemTitle:U["c"]});var te={name:"EventMenu",components:{List:ee},data:function(){return{events:[],listShow:10}},mounted:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.refreshEvents();case 2:case"end":return t.stop()}}),t)})))()},methods:{refreshEvents:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.a.get("http://localhost:3000/events");case 2:n=t.sent,e.events=n.data,console.log("Fetched Events: "+e.events,e.events);case 5:case"end":return t.stop()}}),t)})))()}}},ne=te,re=(n("f9c4"),Object(s["a"])(ne,W,J,!1,null,"37e6e696",null)),oe=re.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Welcome to Profile Menu. "),n("a",{on:{click:function(t){return e.$router.push("Map")}}},[e._v("Go Back")])])},ie=[],ce={},se=ce,ue=Object(s["a"])(se,ae,ie,!1,null,"ae33c60c",null),le=ue.exports;r["a"].use(m["a"]);var pe=[{path:"/",name:"Login",component:y},{path:"/Profile",name:"Profile",component:le,props:!0},{path:"/Map",name:"Map",component:G,props:!0},{path:"/EventMenu",name:"EventMenu",component:oe,props:!0}],fe=new m["a"]({mode:"history",base:"/",routes:pe}),ve=fe,de=n("2f62");r["a"].use(de["a"]);var he=new de["a"].Store({state:{},mutations:{},actions:{},modules:{}}),me=n("f309");r["a"].use(me["a"]);var ge=new me["a"]({}),be=n("755e");n("d1e78");r["a"].config.productionTip=!1,r["a"].use(be,{load:{key:"AIzaSyB_zJowT3YJgYlfYyKqeMiTpGo9tVZdWEk",libraries:"places"}}),new r["a"]({router:ve,store:he,vuetify:ge,render:function(e){return e(d)}}).$mount("#app")},6566:function(e,t,n){},a524:function(e,t,n){e.exports=n.p+"img/small-map-pin.97dad2bf.png"},f9c4:function(e,t,n){"use strict";var r=n("6566"),o=n.n(r);o.a}});
//# sourceMappingURL=app.bd08cb75.js.map