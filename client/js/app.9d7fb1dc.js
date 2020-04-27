(function(t){function e(e){for(var s,r,i=e[0],u=e[1],c=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var u=a[i];0!==o[u]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0383":function(t,e,a){"use strict";var s=a("7505"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("BugLogger")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],u=a("bc3a"),c=a.n(u),l=a("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},p=d,g=a("2877"),m=Object(g["a"])(p,r,i,!1,null,null,null),b=m.exports,h={name:"App",async beforeCreate(){await Object(l["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:b}},v=h,f=(a("5c0b"),Object(g["a"])(v,o,n,!1,null,null,null)),w=f.exports,_=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home text-center"},[a("h1",[t._v("Welcome to Bug Logger")]),a("create-bug"),t._l(t.bugs,(function(e){return a("div",{key:e.id,staticClass:" m-2"},[a("router-link",{attrs:{to:{name:"bug",params:{bugId:e.id}}}},[t._v(t._s(e.title))]),a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.closed,expression:"bug.closed == true"}],staticClass:"bg-danger"},[t._v("X")])],1)}))],2)},$=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.addBug()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"m-2",attrs:{type:"text",placeholder:"whats the bug",required:""},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}}),a("button",{staticClass:"btn btn-sm btn-primary m-2",attrs:{type:"submit"}},[t._v("Post Bug")])])])},y=[],N={name:"create-bug",data(){return{newBug:{title:"",description:""}}},computed:{activeBug(){return this.$store.state.activeBug}},methods:{addBug(t){this.$store.dispatch("addBug",this.newBug),this.newBoard={title:"",description:""}}}},x=N,P=Object(g["a"])(x,C,y,!1,null,null,null),E=P.exports,O={name:"home",mounted(){this.$store.dispatch("getBugs")},data(){return{}},computed:{bugs(){return this.$store.state.bugs}},methods:{},components:{CreateBug:E}},j=O,k=Object(g["a"])(j,B,$,!1,null,null,null),I=k.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},A=[],T={name:"Profile",computed:{profile(){return this.$store.state.profile}}},S=T,U=(a("0383"),Object(g["a"])(S,D,A,!1,null,"59c2bb44",null)),H=U.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bug container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:" col-md-4 card m-2 shadow-lg"},[a("h2",[t._v("Created By: "+t._s(t.bug.creatorEmail))]),a("h3",[t._v("Title: "+t._s(t.bug.title))]),a("h3",[t._v("Description: "+t._s(t.bug.description))]),a("p",[t._v("closed: "+t._s(t.bug.closed))]),a("p",[t._v("Date: "+t._s(t.bug.createdAt))]),a("p",[t._v("Date Updated:"+t._s(t.bug.updatedAt))]),a("button",{directives:[{name:"show",rawName:"v-show",value:!0!==t.bug.closed,expression:"bug.closed !== true"}],staticClass:"btn btn-success m-2",on:{click:function(e){t.openEditor=!t.openEditor}}},[t._v("Open editor")]),t.$auth.userInfo.email==t.bug.creatorEmail?a("button",{directives:[{name:"show",rawName:"v-show",value:!0!==t.bug.closed,expression:"bug.closed !== true"}],staticClass:"btn btn-sm btn-danger m-2",on:{click:function(e){return t.closeBug(t.bug)}}},[t._v("Close")]):t._e(),t.openEditor?a("edit-bug"):t._e()],1),a("div",{staticClass:"col-md-4"},[a("create-Note",{directives:[{name:"show",rawName:"v-show",value:!0!==t.bug.closed,expression:"bug.closed !== true"}],staticClass:"ml-1"}),t._l(t.notes,(function(t){return a("Note",{key:t._id,attrs:{noteData:t}})}))],2)])])},M=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Edit-Bug"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.title,expression:"bug.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"bug"},domProps:{value:t.bug.title},on:{input:function(e){e.target.composing||t.$set(t.bug,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.description,expression:"bug.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"description"},domProps:{value:t.bug.description},on:{input:function(e){e.target.composing||t.$set(t.bug,"description",e.target.value)}}})]),a("button",{staticClass:"btn btn-warning m-1",on:{click:function(e){return t.editBug()}}},[t._v("Edit")])])},F=[],J={name:"Edit-Bug",data(){return{}},mounted(){},computed:{bug(){return console.log(this.$store.state.activeBug),this.$store.state.activeBug}},methods:{editBug(){this.$store.dispatch("editBug",this.bug)}},components:{}},W=J,q=Object(g["a"])(W,z,F,!1,null,"64f7da9e",null),R=q.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card m-2 shadow-lg"},[a("p",[t._v(t._s(t.noteData.content))]),a("button",{staticClass:"btn btn-sm btn-danger m-2",on:{click:function(e){return t.deleteNote(t.noteData)}}},[t._v("DELETE NOTE")])])])},G=[],X={name:"note",data(){return{}},mounted(){this.$store.dispatch("getNote",this.$route.params.noteId)},computed:{note(){return this.$store.state.activeNote}},props:["noteData"],methods:{deleteNote(t){this.$store.dispatch("deleteNote",t)}},components:{}},Z=X,K=Object(g["a"])(Z,Y,G,!1,null,null,null),Q=K.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"m-2",attrs:{type:"text",placeholder:"notes about the bug",required:""},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}}),a("button",{staticClass:"btn btn-sm btn-primary m-2",attrs:{type:"submit"}},[t._v("Post Note")])])])},tt=[],et={name:"create-Note",props:["bugData"],data(){return{newNote:{Content:"",bugId:this.$route.params.bugId}}},methods:{addNote(){this.$store.dispatch("addNote",this.newNote),this.newBoard={title:"",description:""},this.newNote={content:""}}}},at=et,st=Object(g["a"])(at,V,tt,!1,null,null,null),ot=st.exports,nt={name:"bug",data(){return{openEditor:!1}},mounted(){this.$store.dispatch("getBug",this.$route.params.bugId),this.$store.dispatch("getNote",this.$route.params.bugId)},computed:{bug(){return this.$store.state.activeBug},notes(){return this.$store.state.notes}},props:["bugId"],methods:{closeBug(t){this.$store.dispatch("closeBug",t)}},components:{CreateNote:ot,Note:Q,EditBug:R}},rt=nt,it=Object(g["a"])(rt,L,M,!1,null,null,null),ut=it.exports;s["a"].use(_["a"]);const ct=[{path:"/",name:"Home",component:I},{path:"/bugs/:bugId",name:"bug",component:ut,beforeEnter:l["b"]},{path:"/profile",name:"Profile",component:H,beforeEnter:l["b"]}],lt=new _["a"]({routes:ct});var dt=lt,pt=a("2f62");s["a"].use(pt["a"]);let gt=location.host.includes("localhost")?"http://localhost:3000/":"/",mt=c.a.create({baseURL:gt+"api",timeout:3e3,withCredentials:!0});var bt=new pt["a"].Store({state:{bugs:[],activeBug:{},notes:[],activeNote:{},profile:{}},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},setNotes(t,e){t.notes=e},setActiveNote(t,e){t.activeNote=e}},actions:{setBearer({},t){mt.defaults.headers.authorization=t},resetBearer(){mt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await mt.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getBugs({commit:t,dispatch:e}){await mt.get("bugs").then(e=>{t("setBugs",e.data),console.log(e.data)})},async getBug({commit:t,dispatch:e},a){await mt.get("bugs/"+a).then(e=>{t("setActiveBug",e.data),console.log(a)})},async addBug({commit:t,dispatch:e},a){console.log(a),await mt.post("bugs",a).then(t=>{e("getBugs"),dt.push({path:"bugs/"+t.data.id})})},async editBug({commit:t,dispatch:e},a){try{console.log(a);await mt.put("bugs/"+a.id,a)}catch(s){console.log(s)}},async closeBug({commit:t,dispatch:e},a){let s=confirm("Are You Sure?");if(s)try{console.log(a);await mt.put("bugs/"+a.id,{closed:a.closed=!0},a)}catch(o){console.log(o)}},async getNote({commit:t,dispatch:e},a){await mt.get("bugs/"+a+"/notes").then(e=>{t("setNotes",e.data),console.log(e.data)})},async addNote({commit:t,dispatch:e},a){console.log(a.bugId,"this from the store"),await mt.post("notes/",a).then(t=>{e("getNote",a.bugId)})},async deleteNote({commit:t,dispatch:e},a){let s=confirm("Are You Sure?");if(s){await mt.delete("notes/"+a.id);e("getNote",a.bugId)}}}});const ht="dev-4agk-0aw.auth0.com",vt="kanban-project.com",ft="UyZNU0w23S3aGoCJUpFdPzsBcFP8Db1F";s["a"].use(l["a"],{domain:ht,clientId:ft,audience:vt,onRedirectCallback:t=>{dt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:dt,store:bt,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},7505:function(t,e,a){},"9c0c":function(t,e,a){}});