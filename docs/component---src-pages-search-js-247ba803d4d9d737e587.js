(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{226:function(e,t,a){"use strict";a.r(t);var n=a(295),r=a(0),c=a.n(r),l=a(231),o=a(232),s=a.n(o),i=(a(102),a(296)),m=a(137);var d=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).getOrCreateIndex=function(){return a.index?a.index:i.Index.load(a.props.searchIndex)},a.search=function(e){var t=e.target.value;a.index=a.getOrCreateIndex(),a.setState({query:t,results:a.index.search(t,{}).map(function(e){var t=e.ref;return a.index.documentStore.getDoc(t)})})},a.state={query:"",results:[]},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return c.a.createElement("div",{className:"my-4"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},c.a.createElement("img",{src:"https://img.icons8.com/material-outlined/24/000000/search.png",alt:"search-icon"}))),c.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search",value:this.state.query,onChange:this.search})),this.state.results.map(function(e){return c.a.createElement("div",{key:e.id,className:"card my-4"},c.a.createElement(m.Link,{to:"/"+e.path},c.a.createElement("h4",{className:"card-title"},e.title)),c.a.createElement("div",{className:"card-text mt-1"},c.a.createElement("img",{src:"https://img.icons8.com/material/24/00BCD4/tags.png",alt:"tag-icon",width:"24"})," ",e.tags.join(",")))}))},n}(r.Component);t.default=function(){var e=n.data;return c.a.createElement(l.a,null,c.a.createElement(s.a,null,c.a.createElement("title",null,"Authors | The 404 Blog")),c.a.createElement("div",{className:"container"},c.a.createElement(d,{searchIndex:e.siteSearchIndex.index}),c.a.createElement("p",{className:"text-center"},"Search powered by ",c.a.createElement("a",{href:"http://elasticlunr.com/"},"Elasticlunr.js"))))}},230:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useState)("light"),t=e[0],a=e[1];return Object(n.useEffect)(function(){var e=localStorage.getItem("theme");e&&a(e)},{}),{theme:t,toggleTheme:function(){"dark"!==t?(localStorage.setItem("theme","dark"),a("dark")):(localStorage.setItem("theme","light"),a("light"))}}}},231:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(229),l=a.n(c),o={color:"#00F0FF",fontSize:"24px",fontWeight:"600"},s={color:"#FFF"},i=function(e){var t=e.children,a=e.to;return r.a.createElement(l.a,{to:a,activeStyle:s,style:o,fade:!0,duration:1},t)};var m=function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light shadow-sm ",style:{backgroundColor:"#00BCD4"}},r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"nav justify-content-center container"},r.a.createElement("li",{class:"nav-item mr-5"},r.a.createElement(i,{class:"nav-link",to:"/"},"Home")),r.a.createElement("li",{class:"nav-item mr-5"},r.a.createElement(i,{class:"nav-link",to:"/blog"},"Blog")),r.a.createElement("li",{class:"nav-item mr-5"},r.a.createElement(i,{class:"nav-link",to:"/tags"},"Tags")),r.a.createElement("li",{class:"nav-item mr-5"},r.a.createElement(i,{class:"nav-link",to:"/search"},"Search")))))},d=(a(219),a(230));t.a=function(e){var t=e.children,a=Object(d.a)(),n=a.theme,c=a.toggleTheme;return r.a.createElement("div",{className:n},r.a.createElement(m,null),r.a.createElement("button",{className:"btn theme-toggle-button",onClick:c},"light"===n?("undefined"!=typeof window&&document.documentElement.style.setProperty("--bg-color","#FFF"),r.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/24/FFFFFF/moon-symbol.png",alt:"moon-icon"})):("undefined"!=typeof window&&document.documentElement.style.setProperty("--bg-color","#12181B"),r.a.createElement("img",{src:"https://img.icons8.com/android/24/FFFFFF/sun.png",alt:"sun-icon"}))),r.a.createElement("main",null,t),r.a.createElement("footer",{className:"text-center pt-4 "+n},r.a.createElement("h6",null," Author: ",r.a.createElement("a",{className:"font-weight-bold text-info",href:"https://twitter.com/mtsuchi_tech"},"mtsuchi_tech")),r.a.createElement("h6",null,"Copyright © Naked Wetwear Side:Misc. 2021"),r.a.createElement("h6",null,"Powered by ",r.a.createElement("a",{className:"font-weight-bold text-info",href:"https://www.gatsbyjs.com/starters/algokun/the404blog"},"the404blog")),r.a.createElement("br",null)))}},295:function(e){e.exports={data:{siteSearchIndex:{index:{version:"0.9.5",fields:["title","tags"],ref:"id",documentStore:{docs:{"10625c7d-4d48-5c7b-88a2-b22a33ac4e90":{id:"10625c7d-4d48-5c7b-88a2-b22a33ac4e90",title:"",tags:["�e�X�g","test"],path:"/blog/210924"}},docInfo:{"10625c7d-4d48-5c7b-88a2-b22a33ac4e90":{title:0,tags:2}},length:1,save:!0},index:{title:{root:{docs:{},df:0}},tags:{root:{docs:{},df:0,e:{docs:{},df:0,"�":{docs:{},df:0,x:{docs:{},df:0,"�":{docs:{},df:0,g:{docs:{"10625c7d-4d48-5c7b-88a2-b22a33ac4e90":{tf:1}},df:1}}}}},t:{docs:{},df:0,e:{docs:{},df:0,s:{docs:{},df:0,t:{docs:{"10625c7d-4d48-5c7b-88a2-b22a33ac4e90":{tf:1}},df:1}}}}}}},pipeline:["trimmer","stopWordFilter","stemmer"]}}}}}}]);
//# sourceMappingURL=component---src-pages-search-js-247ba803d4d9d737e587.js.map