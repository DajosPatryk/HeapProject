(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08c0":function(e,t,n){},"12e8":function(e,t,n){"use strict";var r=n("e27a"),s=n.n(r);s.a},"341f":function(e,t,n){e.exports=n.p+"img/TextLogo.7a3178fc.png"},"3c3e":function(e,t,n){"use strict";var r=n("7c16"),s=n.n(r);s.a},"3d3a":function(e,t,n){},"4b13":function(e,t,n){"use strict";var r=n("7116"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},a=[],o={name:"App",components:{},data:function(){return{}}},i=o,c=(n("5c0b"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),f=n("f6c4"),v=Object(c["a"])(i,s,a,!1,null,null,null),p=v.exports;u()(v,{VApp:d["a"],VMain:f["a"]});var h=n("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=n("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"loginscreen"}},[r("div",{attrs:{id:"box"}},[r("v-img",{attrs:{src:n("341f"),width:"50%",id:"loginImg"}}),e.login?r("LoginBox",{on:{swap:e.swapBox,loginUser:e.loginUser}}):e._e(),e.login?e._e():r("RegisterBox",{attrs:{userAccounts:e.userAccounts},on:{swap:e.swapBox,registerUser:e.registerUser}}),r("a",{on:{click:function(t){return e.$router.push("Map")}}},[e._v("Dev Login")])],1),r("v-snackbar",{attrs:{color:"error"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[r("p",{staticClass:"text-center",attrs:{id:"snackbarText"}},[e._v(" "+e._s(e.snackbarText)+" ")])]),r("v-snackbar",{attrs:{color:"success"},model:{value:e.snackbarSuccess,callback:function(t){e.snackbarSuccess=t},expression:"snackbarSuccess"}},[r("p",{staticClass:"text-center",attrs:{id:"snackbarText"}},[e._v(" "+e._s(e.snackbarText)+" ")])])],1)},b=[],w=(n("4d90"),n("96cf"),n("1da1")),k=n("bc3a"),x=n.n(k),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"content"}},[n("v-text-field",{staticClass:"transparent font-bold",attrs:{type:"username",label:"Username",solo:"",elevation:"3"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{staticClass:"input-group--focused transparent font-bold",attrs:{"append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",label:"Password",solo:"",elevation:"3"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{staticClass:"font-bold",attrs:{"x-large":"",block:"",elevation:"3",color:"white",id:"loginBtn",disabled:e.deactivate},on:{click:function(t){return e.$emit("loginUser",e.user)}}},[e._v("Login")]),n("label",{staticClass:"font-thin",staticStyle:{color:"white"},attrs:{id:"loginLabel"}},[e._v("Don't have an Account? "),n("span",{staticClass:"font-bold",on:{click:function(t){return e.$emit("swap")}}},[e._v("Register here.")])])],1)},y=[],S={data:function(){return{username:"YoshiDaSon",password:"CoolPassword",show:!1}},computed:{deactivate:function(){return 0==this.username.length||0==this.password.length},user:function(){return{username:this.username,password:this.password}}}},C=S,O=(n("8126"),n("8336")),j=n("8654"),T=Object(c["a"])(C,_,y,!1,null,null,null),$=T.exports;u()(T,{VBtn:O["a"],VTextField:j["a"]});var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("div",{attrs:{id:"content"}},[n("v-text-field",{staticClass:"transparent font-bold",attrs:{type:"email",label:"E-mail",rules:e.emailRules,solo:"",elevation:"3"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{staticClass:"transparent font-bold",attrs:{rules:e.usernameRules,label:"Username",hint:"At least 3 characters",solo:"",elevation:"3"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-select",{staticClass:"transparent font-bold",attrs:{items:e.items,solo:"",label:"Gender (optional)"},on:{change:function(t){return e.$v.select.$touch()},blur:function(t){return e.$v.select.$touch()}},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}}),n("v-text-field",{staticClass:"input-group--focused transparent font-bold",attrs:{"append-icon":e.show?"mdi-eye":"mdi-eye-off",rules:e.passwordRules,type:e.show?"text":"password",label:"Password",hint:"At least 8 characters",solo:"",required:"",elevation:"3"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-checkbox",{attrs:{dark:"",color:"white",value:"white",label:"I accept the Terms of Service.","hide-details":"",rules:[function(e){return!!e||"Diese Bestätigung ist notwendig!"}],required:""},model:{value:e.TOS,callback:function(t){e.TOS=t},expression:"TOS"}}),n("br"),n("v-btn",{staticClass:"font-bold mb-2",attrs:{disabled:!e.valid,"x-large":"",block:"",elevation:"3",color:"white"},on:{click:function(t){e.$emit("registerUser",e.user),e.validate}}},[e._v("Register")]),n("label",{staticClass:"font-thin",staticStyle:{color:"white"}},[e._v("Already have an Account? "),n("span",{staticClass:"font-bold",on:{click:function(t){return e.$emit("swap")}}},[e._v("Login here.")])])],1)])},E=[],L={props:{userAccounts:{type:Array}},data:function(){return{TOS:!1,valid:!0,email:"antonio.j01@htlwienwest.at",username:"antonioj01",gender:"male",password:"CoolPassword",items:["male","female","other"],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],usernameRules:[function(e){return!!e||"Username is required"},function(e){return e.length>=3||"Minimum 3 characters."}],passwordRules:[function(e){return!!e||"Required."},function(e){return e.length>=8||"Minimum 8 characters"}],show:!1}},computed:{user:function(){return{username:this.username,email:this.email,gender:this.gender,password:this.password,createddate:null}}},methods:{validate:function(){this.$refs.form.validate()}}},M=L,P=(n("ca92"),n("ac7c")),R=n("4bd4"),I=n("b974"),F=Object(c["a"])(M,V,E,!1,null,null,null),A=F.exports;u()(F,{VBtn:O["a"],VCheckbox:P["a"],VForm:R["a"],VSelect:I["a"],VTextField:j["a"]});var U={data:function(){return{login:!0,userAccounts:[],snackbar:!1,snackbarText:"",snackbarSuccess:!1}},components:{LoginBox:$,RegisterBox:A},methods:{getData:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("/accounts");case 2:n=t.sent,e.userAccounts=n.data,console.log("check if users are received by client"),console.log(e.userAccounts);case 6:case"end":return t.stop()}}),t)})))()},registerUser:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,s,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("abschicken"),r=new Date,s=String(r.getDate()).padStart(2,"0"),a=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear(),r=o+"-"+a+"-"+s,e.createddate=r,console.log(e),n.next=10,x()({url:"/register",method:"post",data:e}).then((function(e){console.log(e.data),console.log("funkt"),t.getData(),t.swapBox(),t.snackbarText="You've been successfully registered",t.snackbarSuccess=!0})).catch((function(e){console.log(e.response),400===e.response.status?(t.snackbarText="Username and E-Mail exist already",t.snackbar=!0,console.log(e)):401===e.response.status?(t.snackbarText="Username exists already",t.snackbar=!0):402===e.response.status?(t.snackbarText="E-Mail exists already",t.snackbar=!0):500===e.response.status?(t.snackbarText="Something went wrong on the server",t.snackbar=!0):e.request?(t.snackbarText="Something went wrong! Try again later.",t.snackbar=!0):console.log("cooles else")}));case 10:case"end":return n.stop()}}),n)})))()},loginUser:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,x()({url:"/login",method:"post",data:e}).then((function(e){console.log(e.data),t.$store.dispatch("setToken",{accessToken:e.data.accessToken,refreshToken:e.data.refreshToken}),t.$store.dispatch("setUser",e.data.user),t.$router.push("Map")})).catch((function(e){console.log(e.response),401===e.response.status?(t.snackbarText="Password or Username is wrong",t.snackbar=!0,console.log(e)):500===e.response.status?(t.snackbarText="Something went wrong on the server",t.snackbar=!0):e.request?(t.snackbarText="Something went wrong! Try again later.",t.snackbar=!0):console.log("cooles else")}));case 2:case"end":return n.stop()}}),n)})))()},swapBox:function(){this.login=!this.login}},created:function(){this.getData()}},B=U,D=(n("d6db"),n("adda")),N=n("2db4"),J=Object(c["a"])(B,g,b,!1,null,null,null),q=J.exports;u()(J,{VImg:D["a"],VSnackbar:N["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("google-map"),n("div",{attrs:{id:"top-panel"}},[n("v-btn",{attrs:{id:"profilebtn",fab:"","x-large":"",elevation:"5",color:"white"},on:{click:function(t){return e.$router.push("Profile")}}},[n("v-icon",[e._v("account_circle")])],1)],1),n("div",{staticClass:"centered",attrs:{id:"bottom-panel"}},[n("v-btn",{staticClass:"font-bold",staticStyle:{"margin-bottom":"1.5rem"},attrs:{id:"whbtn","x-large":"",block:"",elevation:"3",color:"white"},on:{click:function(t){return e.$router.push("EventMenu")}}},[e._v("What's Happening?")]),n("div",{staticClass:"centered",staticStyle:{color:"grey",width:"100%","text-align":"center"},attrs:{id:"map-label"}},[e._v("Search for Events!")])],1)],1)},z=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("gmap-map",{staticStyle:{position:"fixed",padding:"0",margin:"0",top:"-5rem",left:"0",width:"100%",height:"100%"},attrs:{options:e.mapOptions,center:e.center,zoom:11}},e._l(e.markers,(function(t,r){return n("gmap-marker",{key:r,attrs:{position:t.position},on:{click:function(n){e.center=t.position}}})})),1)],1)},G=[],W=(n("ac1f"),n("1276"),n("b85c")),K={name:"GoogleMap",data:function(){return{events:[],center:{lat:45.508,lng:-73.587},markers:[],places:[],currentPlace:null,mapOptions:{disableDefaultUI:!0}}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.geolocate(),t.next=3,e.refreshEvents();case 3:return t.next=5,e.refreshMarkers();case 5:case"end":return t.stop()}}),t)})))()},methods:{refreshEvents:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("/events");case 2:n=t.sent,e.events=n.data;case 4:case"end":return t.stop()}}),t)})))()},refreshMarkers:function(){var e,t=Object(W["a"])(this.events);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=n.gpslocation;r=r.substring(1),r=r.substring(0,r.length-1);var s=r.split(","),a={lat:parseFloat(s[0]),lng:parseFloat(s[1])};this.markers.push({position:a})}}catch(o){t.e(o)}finally{t.f()}},setPlace:function(e){this.currentPlace=e},addMarker:function(){if(this.currentPlace){var e={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:e}),this.places.push(this.currentPlace),this.center=e,this.currentPlace=null}},geolocate:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.center={lat:t.coords.latitude,lng:t.coords.longitude}}))}}},Z=K,Q=Object(c["a"])(Z,H,G,!1,null,null,null),X=Q.exports,ee={name:"Map",components:{GoogleMap:X},methods:{getStarted:function(){console.log(this.$store.state.user)}},created:function(){this.getStarted()}},te=ee,ne=(n("df32"),n("132d")),re=Object(c["a"])(te,Y,z,!1,null,"4394bc01",null),se=re.exports;u()(re,{VBtn:O["a"],VIcon:ne["a"]});var ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.show_categories?n("div",{staticClass:"eventdiv",on:{click:e.shutevent}},[n("Eventfilter",{staticStyle:{position:"absolute","z-index":"99"},on:{chosenevent:e.choosenevent}})],1):e._e(),n("div",{attrs:{id:"top-panel"}},[n("v-btn",{attrs:{id:"backbtn",fab:"","x-large":"",elevation:"3",color:"white"},on:{click:function(t){return e.$router.push("Map")}}},[n("v-icon",[e._v("keyboard_backspace")])],1)],1),n("div",{staticClass:"centered",attrs:{id:"search-panel"}},[n("v-text-field",{staticClass:"font-bold",attrs:{label:"Search",solo:"",elevation:"3"},model:{value:e.searchbox,callback:function(t){e.searchbox=t},expression:"searchbox"}})],1),n("div",{staticClass:"centered",attrs:{id:"btn-panel"}},[n("v-btn",{staticClass:"font-bold",attrs:{id:"filterbtn","x-large":"",block:"",elevation:"3",color:"white"},on:{click:e.setCategories}},[e._v("Filter "+e._s(e.chosenevent)+" ")])],1),n("div",{attrs:{id:"list-panel"}},[n("List",{staticClass:"centered",attrs:{listShow:e.listShow,items:e.events}})],1),n("div",{staticClass:"centered",attrs:{id:"showmore-panel"}},[n("v-btn",{attrs:{id:"showmorebtn","x-large":"",block:"",elevation:"3",color:"white"},on:{click:function(t){e.listShow=100}}},[e._v("Show More Events ")])],1)])},oe=[],ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-list",{attrs:{"three-line":""}},[e._l(e.items,(function(t,s){return[s>=e.listShow?r("v-divider",{key:s}):r("v-list-item",{key:t.title},[r("v-list-item-avatar",[r("v-img",{attrs:{src:n("a524")}})],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title)+" "),null!=t.type?r("p",[e._v("- "+e._s(t.type))]):e._e()]),r("v-list-item-subtitle",[e._v(e._s(t.description)+" - "+e._s(t.address))])],1)],1)]}))],2)],1)},ce=[],le=(n("a9e3"),{data:function(){return{}},props:{items:Object,listShow:Number}}),ue=le,de=n("ce7e"),fe=n("8860"),ve=n("da13"),pe=n("8270"),he=n("5d23"),me=Object(c["a"])(ue,ie,ce,!1,null,"536bb9bb",null),ge=me.exports;u()(me,{VDivider:de["a"],VImg:D["a"],VList:fe["a"],VListItem:ve["a"],VListItemAvatar:pe["a"],VListItemContent:he["a"],VListItemSubtitle:he["b"],VListItemTitle:he["c"]});var be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"categories_container",attrs:{id:"blog-posts-events-demo"}},[n("div",{staticClass:"categories"},[e._m(0),e._l(e.event_categories,(function(t){return n("v-btn",{key:t,staticClass:"btncategories",attrs:{tile:"","x-large":""},on:{click:function(n){return e.eventchoosen(t)}}},[e._v(" "+e._s(t)+" ")])}))],2)])},we=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h4",[e._v("Category")])])}],ke={data:function(){return{event_categories:["Hot","Trending","Newest","Soonest","Official Events","Private Events","Nightclubs","Bars","Concerts"]}},methods:{eventchoosen:function(e){this.$emit("chosenevent",e)}}},xe=ke,_e=(n("8a22"),Object(c["a"])(xe,be,we,!1,null,"7bb96be5",null)),ye=_e.exports;u()(_e,{VBtn:O["a"]});var Se={name:"EventMenu",components:{List:ge,Eventfilter:ye},data:function(){return{events:[],listShow:10,searchbox:"",show_categories:!1,chosenevent:""}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.refreshEvents();case 2:case"end":return t.stop()}}),t)})))()},methods:{refreshEvents:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("/events");case 2:n=t.sent,e.events=n.data,console.log("Fetched Events: "+e.events,e.events);case 5:case"end":return t.stop()}}),t)})))()},setCategories:function(){this.show_categories=!this.show_categories},choosenevent:function(e){this.chosenevent=e,this.show_categories=!1},shutevent:function(){this.show_categories=!1}}},Ce=Se,Oe=(n("3c3e"),Object(c["a"])(Ce,ae,oe,!1,null,"5048661d",null)),je=Oe.exports;u()(Oe,{VBtn:O["a"],VIcon:ne["a"],VTextField:j["a"]});var Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.show_addfriend?n("div",{on:{click:e.shutaddfriend}},[e.show_addfriend?n("Addfriend",{staticStyle:{position:"absolute","z-index":"99"},on:{chosenevent:e.choosenevent}}):e._e()],1):e._e(),n("div",{attrs:{id:"top-panel"}},[n("v-btn",{attrs:{id:"backbtn",fab:"","x-large":"",elevation:"3",color:"white"},on:{click:function(t){return e.$router.push("Map")}}},[n("v-icon",[e._v("keyboard_backspace")])],1)],1),n("div",{staticClass:"centered",attrs:{id:"profile-panel"}},[n("div",{staticClass:"profile-story"},["YoshiDaSon"==this.$store.state.user.detail.username?n("v-img",{attrs:{id:"profile-avatar",src:"https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"}}):n("v-img",{attrs:{id:"profile-avatar",src:"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}}),n("svg",{staticStyle:{"enable-background":"new -580 439 577.9 194"},attrs:{id:"profile-avatar-border",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve"}},[n("circle",{attrs:{cx:"50",cy:"50",r:"40"}})])],1),n("div",{staticStyle:{color:"dimgrey !important"},attrs:{color:"grey"}},[n("label",{staticClass:"font-bold"},[e._v(e._s(this.$store.state.user.detail.username))]),n("v-icon",[e._v("location_on")]),n("br"),n("label",[null!=this.$store.state.user.detail.description?n("p",[e._v(e._s(this.$store.state.user.detail.description))]):n("p",[e._v("Click here to add a description!")])])],1)]),n("div",{staticClass:"centered",attrs:{id:"btn-panel"}},[n("v-btn",{staticClass:"font-bold",attrs:{id:"filterbtn","x-large":"",block:"",elevation:"3",color:"white"},on:{click:e.addfriend}},[e._v("Add or Find Friends ")])],1),n("div",{attrs:{id:"list-panel"}},[n("List",{staticClass:"centered",attrs:{listShow:e.listShow,items:e.friends}})],1),n("div",{staticClass:"centered",attrs:{id:"showmore-panel"}},[n("v-btn",{attrs:{id:"showmorebtn","x-large":"",block:"",elevation:"3",color:"white"},on:{click:function(t){e.listShow=100}}},[e._v("Show More Friends ")])],1),n("div",{staticClass:"centered",staticStyle:{"margin-top":"1rem"}},[n("v-btn",{staticClass:"font-bold",attrs:{color:"white",elevation:"3"},on:{click:e.logoutUser}},[e._v("Logout")])],1)])},$e=[],Ve=(n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"categories_container",attrs:{id:"blog-posts-events-demo"}},[n("div",{staticClass:"categories"},[e._m(0),n("div",{staticClass:"centered",attrs:{id:"search-panel"}},[n("v-text-field",{staticClass:"font-bold",attrs:{label:"Search by name...","single-line":"","hide-details":"",clearable:""},model:{value:e.searchbox,callback:function(t){e.searchbox=t},expression:"searchbox"}})],1),e._l(e.event_categories,(function(t){return n("v-btn",{key:t,staticClass:"btncategories",attrs:{tile:"","x-large":""},on:{click:function(n){return e.eventchoosen(t)}}},[e._v(" "+e._s(t)+" ")])})),n("div",{attrs:{id:"list-panel"}},[n("List",{staticClass:"centered",attrs:{listShow:e.listShow,items:e.friends}})],1)],2)])}),Ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h4",[e._v("Add/Find a Friend")])])}],Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-list",{attrs:{"three-line":""}},[e._l(e.items,(function(t,r){return[r>=1?n("v-divider",{key:r}):n("v-list-item",{key:t.title},[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}})],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.username))]),n("v-list-item-subtitle",[null!=t.description?n("p",[e._v(e._s(t.description))]):n("p",[e._v("Hi, I'm new to Heap!")])])],1)],1)]}))],2)],1)},Me=[],Pe={data:function(){return{}},props:{items:Object,listShow:Number}},Re=Pe,Ie=Object(c["a"])(Re,Le,Me,!1,null,"43a91dcd",null),Fe=Ie.exports;u()(Ie,{VDivider:de["a"],VImg:D["a"],VList:fe["a"],VListItem:ve["a"],VListItemAvatar:pe["a"],VListItemContent:he["a"],VListItemSubtitle:he["b"],VListItemTitle:he["c"]});var Ae={name:"Addfriend",components:{List:Fe},data:function(){return{event_categories:[]}},methods:{eventchoosen:function(e){this.$emit("chosenevent",e)}}},Ue=Ae,Be=(n("4b13"),Object(c["a"])(Ue,Ve,Ee,!1,null,"244c5644",null)),De=Be.exports;u()(Be,{VBtn:O["a"],VTextField:j["a"]});var Ne={name:"EventMenu",components:{List:Fe,Addfriend:De},data:function(){return{friends:[],username:"test",description:"Lorem Ipsum Dolor Sit Amet",listShow:10,searchbox:"",show_addfriend:!1,chosenevent:""}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.refreshFriends();case 2:case"end":return t.stop()}}),t)})))()},methods:{getProfile:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("/profile");case 2:n=t.sent,e.username=n.data.username;case 4:case"end":return t.stop()}}),t)})))()},refreshFriends:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("/frl",{params:{id:e.$store.state.user.detail.id}});case 2:n=t.sent,e.friends=n.data,console.log("Fetched Friends: "+e.friends);case 5:case"end":return t.stop()}}),t)})))()},logoutUser:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.$store.state.user.tokens.refreshToken),t.next=3,x.a.post("/logout",{token:e.$store.state.user.tokens.refreshToken});case 3:n=t.sent,console.log(n),e.$store.dispatch("logout"),e.$router.replace("Login");case 7:case"end":return t.stop()}}),t)})))()},addfriend:function(){this.show_addfriend=!this.show_addfriend},choosenevent:function(e){this.chosenevent=e,this.show_addfriend=!1},shutaddfriend:function(){this.show_addfriend=!1}},created:function(){this.getProfile()}},Je=Ne,qe=(n("12e8"),Object(c["a"])(Je,Te,$e,!1,null,"385bbe96",null)),Ye=qe.exports;u()(qe,{VBtn:O["a"],VIcon:ne["a"],VImg:D["a"]});var ze=n("2f62");r["a"].use(ze["a"]);var He=new ze["a"].Store({state:{user:{detail:JSON.parse(window.localStorage.getItem("user")),tokens:JSON.parse(window.localStorage.getItem("tokens"))}},mutations:{setUser:function(e,t){this.state.user.detail=t,window.localStorage.setItem("user",JSON.stringify(t))},setLogout:function(){this.state.user.detail=void 0,window.localStorage.removeItem("user"),window.localStorage.removeItem("tokens")},setToken:function(e,t){this.state.user.tokens=t,window.localStorage.setItem("tokens",JSON.stringify(t))}},actions:{setUser:function(e,t){e.commit("setUser",t)},logout:function(e){e.commit("setLogout")},setToken:function(e,t){e.commit("setToken",t)}},modules:{}});r["a"].use(m["a"]);var Ge=[{path:"/login",name:"Login",component:q},{path:"/Profile",name:"Profile",component:Ye,props:!0},{path:"/map",name:"Map",component:se,props:!0},{path:"/eventMenu",name:"EventMenu",component:je,props:!0}],We=new m["a"]({mode:"history",base:"/",routes:Ge});We.beforeEach((function(e,t,n){"/Login"===e.path||He.state.user.detail?n():n({path:"/Login"})}));var Ke=We,Ze=n("f309");r["a"].use(Ze["a"]);var Qe=new Ze["a"]({}),Xe=n("755e");n("d1e78"),n("77c6");r["a"].config.productionTip=!1,r["a"].use(Xe,{load:{key:"AIzaSyB_zJowT3YJgYlfYyKqeMiTpGo9tVZdWEk",libraries:"places"}}),new r["a"]({router:Ke,store:He,vuetify:Qe,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},7116:function(e,t,n){},"780f":function(e,t,n){},"7c16":function(e,t,n){},8126:function(e,t,n){"use strict";var r=n("3d3a"),s=n.n(r);s.a},"8a22":function(e,t,n){"use strict";var r=n("08c0"),s=n.n(r);s.a},9697:function(e,t,n){},"9c0c":function(e,t,n){},a524:function(e,t,n){e.exports=n.p+"img/small-map-pin.97dad2bf.png"},ca92:function(e,t,n){"use strict";var r=n("9697"),s=n.n(r);s.a},d6db:function(e,t,n){"use strict";var r=n("e67a"),s=n.n(r);s.a},df32:function(e,t,n){"use strict";var r=n("780f"),s=n.n(r);s.a},e27a:function(e,t,n){},e67a:function(e,t,n){}});
//# sourceMappingURL=app.9b29957a.js.map