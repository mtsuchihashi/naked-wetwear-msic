(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var n=a(0),r=a.n(n),c=a(235),o=a(229),l=a.n(o);a(219);t.default=function(e){var t=e.pageContext,a=e.data,n=t.tag;return r.a.createElement("div",{className:"container"},r.a.createElement(l.a,{to:"/tags",fade:!0,duration:.5},r.a.createElement("img",{src:"https://img.icons8.com/material-rounded/48/00bcd4/back.png",width:"48",alt:"back-icon",className:"mb-4"})),r.a.createElement("h1",null,"#",n),r.a.createElement("div",{className:"col"},a.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return r.a.createElement(c.a,{key:t,slug:a.frontmatter.slug,authorName:a.frontmatter.author,title:a.frontmatter.title,description:a.frontmatter.description,timeStamp:a.frontmatter.date})})))};var i="3426946482"},235:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(229),o=a.n(c),l={fontWeight:"700"},i={color:"#00BCD4"},m=function(e){var t=e.children,a=e.to;return r.a.createElement(o.a,{style:i,to:a,className:"font-weight-bold",fade:!0},t)};t.a=function(e){var t=e.title,a=e.description,n=e.timeStamp,c=e.authorName,i=e.slug,s={color:"undefined"!=typeof window&&getComputedStyle(document.documentElement).getPropertyValue("--card-text-color"),textDecoration:"none"};return r.a.createElement(o.a,{style:s,to:i,cover:!0,bg:"#00BCD4"},r.a.createElement("div",{class:"card my-4"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title",style:l},t),r.a.createElement("p",{class:"card-text"},a),r.a.createElement("h6",{class:"card-subtitle text-muted"},r.a.createElement(m,{to:"/about"},c)," on ",n))))}}}]);
//# sourceMappingURL=component---src-components-tag-component-js-cf31ce67fb6b3720bbfb.js.map