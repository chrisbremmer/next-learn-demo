(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{O40h:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var r=e("eVuF"),a=e.n(r);function i(n,t,e,r,i,u,c){try{var s=n[u](c),o=s.value}catch(l){return void e(l)}s.done?t(o):a.a.resolve(o).then(r,i)}function u(n){return function(){var t=this,e=arguments;return new a.a(function(r,a){var u=n.apply(t,e);function c(n){i(u,r,a,c,s,"next",n)}function s(n){i(u,r,a,c,s,"throw",n)}c(void 0)})}}},QEfL:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var r=e("ln6h"),a=e.n(r),i=e("O40h");function u(){return c.apply(this,arguments)}function c(){return(c=Object(i.a)(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(14).then(e.t.bind(null,"Wcq6",7));case 2:return t=n.sent,n.next=5,e.e(13).then(e.bind(null,"Zs65"));case 5:try{t.initializeApp({databaseURL:"https://hacker-news.firebaseio.com"})}catch(r){/already exists/.test(r.message)||console.error("Firebase initialization error",r.stack)}return n.abrupt("return",t.database().ref("v0"));case 7:case"end":return n.stop()}},n)}))).apply(this,arguments)}},RNiq:function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),a=e.n(r),i=e("eVuF"),u=e.n(i),c=e("O40h"),s=e("q1tI"),o=e.n(s),l=e("3Hq7"),f=e("YFqc"),p=e.n(f),d=e("QEfL"),h=o.a.createElement;function v(n){return h("li",null,h(p.a,{href:"/p/[id]",as:"/p/".concat(n.id)},h("a",null,n.title)))}function w(n){var t=n.stories;return h(l.a,null,h("h1",null,"Hacker News - Latest"),h("ul",null,t.map(function(n){return h(v,{key:n.id,id:n.id,title:n.title})})))}w.getInitialProps=Object(c.a)(a.a.mark(function n(){var t,e,r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.a)();case 2:return t=n.sent,n.next=5,t.child("topstories").once("value");case 5:return e=n.sent,n.next=8,u.a.all(e.val().slice(0,10).map(function(n){return t.child("item").child(n).once("value")}));case 8:return r=(r=n.sent).map(function(n){return n.val()}),n.abrupt("return",{stories:r});case 11:case"end":return n.stop()}},n)})),t.default=w},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",1,0]]]);