"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{9288:function(n,t,r){r.r(t),r.d(t,{default:function(){return o}});var e=r(885),u=r(2791),a=r(6871),c=r(184),i=function(n){var t=n.name,r=n.text;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("li",{children:[(0,c.jsx)("h3",{children:t}),(0,c.jsx)("p",{children:r})]})})},s=r(7658),o=function(){var n=(0,u.useState)([]),t=(0,e.Z)(n,2),r=t[0],o=t[1],f=(0,a.UO)().movieId;return(0,u.useEffect)((function(){(0,s.ug)(f).then((function(n){return o(n.results)}))}),[f]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:r.length>0?r.map((function(n){return(0,c.jsx)(i,{name:n.author,text:n.content},n.id)})):(0,c.jsx)("h1",{children:"We don't have any review for this movie"})})})}},7658:function(n,t,r){r.d(t,{bp:function(){return f},dB:function(){return p},ku:function(){return o},l$:function(){return h},ug:function(){return v}});var e=r(5861),u=r(7757),a=r.n(u),c=r(4569),i={api_key:"7a4cd4317772102a9b88ef6a54b71590"},s=r.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:i}),o=function(){var n=(0,e.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/movie/day");case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/movie",{params:{query:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("\n/movie/".concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=Reviews.f6414638.chunk.js.map