"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[709],{9087:function(t,r,n){n.r(r),n.d(r,{default:function(){return o}});var e=n(885),a=n(184),u=function(t){var r=t.name,n=t.character,e=t.img;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg",alt:"",width:"200"}),(0,a.jsx)("p",{children:r}),(0,a.jsx)("p",{children:n})]})})},c=n(7658),i=n(2791),s=n(6871),o=function(){var t=(0,i.useState)([]),r=(0,e.Z)(t,2),n=r[0],o=r[1],p=(0,s.UO)().movieId;return(0,i.useEffect)((function(){(0,c.l$)(p).then((function(t){var r=t.cast;return o(r)}))}),[p]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:n.length&&n.map((function(t){return(0,a.jsx)(u,{name:t.name,character:t.character,img:t.profile_path},t.id)}))})})}},7658:function(t,r,n){n.d(r,{bp:function(){return p},dB:function(){return f},ku:function(){return o},l$:function(){return h},ug:function(){return d}});var e=n(5861),a=n(7757),u=n.n(a),c=n(4569),i={api_key:"7a4cd4317772102a9b88ef6a54b71590"},s=n.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:i}),o=function(){var t=(0,e.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/day");case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie",{params:{query:r}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("\n/movie/".concat(r,"/reviews"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=Cast.743bc7c9.chunk.js.map