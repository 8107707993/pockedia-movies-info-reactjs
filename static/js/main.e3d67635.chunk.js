(this.webpackJsonppockedia_movies_info=this.webpackJsonppockedia_movies_info||[]).push([[0],{14:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(24),r=n.n(s),i=(n(30),n(31),n(0)),l=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})},o=n(4),d=n.n(o),j=n(5),b=n(3),u=n(25),m=n.n(u),p=(n(14),function(e){var t=e.title,n=e.original_title,c=e.overview,a=e.release_date,s=e.vote_average,r=e.imageUrl,l=e.language,o=e.genres,d=e.backdrop_path;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(m.a,{style:{backgroundColor:"rgba(255, 255, 255, 0)",padding:"0px",borderRadius:"15px"},children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("div",{className:"contents",children:[Object(i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+r,alt:"img",className:"imgfluid  "}),Object(i.jsxs)("p",{className:"card-title  title-1 ",children:[Object(i.jsx)("span",{className:"cardThead",children:"Movie Name : "}),n]}),Object(i.jsxs)("p",{className:"card-title title-2",children:[Object(i.jsx)("span",{className:"cardThead",children:"As You Know :"})," ",t]}),Object(i.jsxs)("p",{className:"card-text text1",children:[Object(i.jsx)("span",{className:"cardThead",children:"IMDP Reting : "}),s,"."]}),Object(i.jsxs)("p",{className:"card-text text2",children:[Object(i.jsx)("span",{className:"cardThead",children:"Release date : "}),a,"."]})]}),Object(i.jsxs)("div",{className:"hoverContent",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Overview:- "}),c]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Language:- "}),l]}),Object(i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+d,alt:"img",className:"imgfluid  "}),Object(i.jsx)("p",{children:o})]})]})})})}),h=n(10),x=n.n(h),O=n(13),g=(n(51),function(e){var t=e.genress,n=e.setGenress,a=e.selectedGenres,s=e.setSelectedGenres,r=e.setPageNo,l=e.type,o=e.baseurl,b=e.movieResults;function u(){return(u=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(o,"genre/").concat(l,"/list?api_key=8715e8842217df4604773f0cef2fca91&language=en-US")).then((function(e){var t=e.data;n(t.genres),console.log(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}Object(c.useEffect)((function(){return function(){u.apply(this,arguments)}(),function(){n({})}}),[]);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"chip",children:[b&&a&&a.map((function(e){return Object(i.jsxs)("div",{className:"name",style:{backgroundColor:"rgb(253, 173, 0)"},onClick:function(){return function(e){s(a.filter((function(t){return t.id!==e.id}))),n([].concat(Object(O.a)(t),[e])),r(1)}(e)},children:[e.name," "]},e.id)})),b&&t.map((function(e){return Object(i.jsxs)("div",{className:"name",onClick:function(){return function(e){s([].concat(Object(O.a)(a),[e])),n(t.filter((function(t){return t.id!==e.id}))),r(1)}(e)},children:[e.name," "]},e.id)}))]})})}),f=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},v=function(e){var t=Object(c.useState)(),n=Object(b.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(1),l=Object(b.a)(r,2),o=l[0],u=l[1],m=Object(c.useState)(),h=Object(b.a)(m,2),O=h[0],v=h[1],N=Object(c.useState)([]),w=Object(b.a)(N,2),y=w[0],k=w[1],_=Object(c.useState)({}),S=Object(b.a)(_,2),B=S[0],T=S[1],C=e.apiKey,L=e.baseurl,F=f(y);Object(c.useEffect)((function(){x.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(C,"&language=en-US&page=").concat(o,"&with_genres=").concat(F)).then((function(e){var t=e.data;s(t.results),v(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[o,C,F]);var D=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(o+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(o-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"pageLableBox",children:Object(i.jsxs)("p",{className:"pageLable",children:["Page No :",o]})}),Object(i.jsxs)("div",{className:"container container-bg  my-4",children:[Object(i.jsx)(g,{genress:B,selectedGenres:y,setGenress:T,setSelectedGenres:k,type:"movie",setPageNo:u,movieResults:a,baseurl:L}),Object(i.jsx)("div",{className:"row justify-content-center",children:a&&a.map((function(e){return Object(i.jsx)("div",{className:"col-md-4 cardSty",children:Object(i.jsx)(p,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,title:e.title,release_date:e.release_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(i.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(i.jsxs)("button",{disabled:o<=1,type:"button",onClick:P,className:"btn np",children:["\xab Previous"," "]}),Object(i.jsx)("button",{disabled:o>=O,type:"button",onClick:D,className:"btn np",children:"Next \xbb"})]})]})};n(23);var N=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"search-container",children:[Object(i.jsx)("input",{type:"text",name:"search",placeholder:"Search...",className:"search-input"}),Object(i.jsx)("a",{href:"/",className:"search-btn",children:Object(i.jsx)("i",{className:"fas fa-search"})})]})})},w=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{id:"container",className:"container position-sticky  top-0",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light  blur blur-rounded top-0 z-index-fixed  nav-sty position-absolute my-3 py-2 start-0 end-0 mx-4",children:Object(i.jsxs)("div",{className:"container-fluid px-0",children:[Object(i.jsx)("a",{className:"navbar-brand font-weight-bolder ps-1 ms-sm-3",href:" https://demos.creative-tim.com/marketplace/soft-ui-design-system-pro/presentation.html ",rel:"tooltip",title:"Designed and Coded by Creative Tim","data-placement":"bottom",target:"_blank",children:"Pockedia Movie Info"}),Object(i.jsxs)("button",{className:"navbar-toggler collapsed border-0 shadow-none ms-md-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navigation","aria-controls":"navigation","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(i.jsx)("span",{className:"toggler-icon bar1 "}),Object(i.jsx)("span",{className:"toggler-icon bar2 "}),Object(i.jsx)("span",{className:"toggler-icon bar3 "})]}),Object(i.jsx)("div",{className:"collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0",id:"navigation",children:Object(i.jsxs)("ul",{className:"navbar-nav navbar-nav-hover mx-auto",children:[Object(i.jsx)("li",{className:"nav-item  mx-2",children:Object(i.jsx)("a",{href:"/",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Trending"})}),Object(i.jsx)("li",{className:"nav-item  mx-2",children:Object(i.jsx)("a",{href:"/",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Movies"})}),Object(i.jsx)("li",{className:"nav-item  mx-2",children:Object(i.jsx)("a",{href:"/",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Tv Series"})}),Object(i.jsxs)("li",{className:"nav-item dropdown mx-2",children:[Object(i.jsx)("a",{href:"/",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Types"}),Object(i.jsxs)("ul",{className:"dropdown-containt",children:[Object(i.jsx)("li",{className:"drop-item",children:Object(i.jsx)("a",{className:"drop-link",href:"/",children:"Upcoming"})}),Object(i.jsx)("li",{className:"drop-item",children:Object(i.jsx)("a",{className:"drop-link",href:"/",children:"Popular"})}),Object(i.jsx)("li",{className:"drop-item",children:Object(i.jsx)("a",{className:"drop-link",href:"/",children:"Top_rated"})})]})]}),Object(i.jsx)(N,{})]})})]})})})})})})},y=(n(52),function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!0),r=Object(b.a)(s,2),l=r[0],o=r[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop,t=document.getElementById("circlebtnUp"),n=document.getElementById("circlebtnDown");e>=500?(a(!0),o(!1),t.classList.add("circleButton-show"),t.classList.remove("circleButton"),n.classList.add("circleButtonDown"),n.classList.remove("circleButtonDown-show")):(a(!1),o(!0),t.classList.remove("circleButton-show"),t.classList.add("circleButton"),n.classList.add("circleButtonDown-show"),n.classList.remove("circleButtonDown"))})),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{id:"circlebtnUp",className:"circleButton",children:Object(i.jsx)("i",{className:"fas fa-angle-double-up",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"inline":"none"}})}),Object(i.jsx)("button",{id:"circlebtnDown",className:"circleButtonDown",children:Object(i.jsx)("i",{className:"fas fa-angle-double-down",onClick:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},style:{display:l?"inline":"none"}})})]})}),k=function(){return n(53).config(),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{searchUrl:"search/movie"}),Object(i.jsx)(v,{apiKey:"8715e8842217df4604773f0cef2fca91",baseurl:"https://api.themoviedb.org/3/"}),Object(i.jsx)(y,{}),Object(i.jsx)(l,{})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),_()}},[[56,1,2]]]);
//# sourceMappingURL=main.e3d67635.chunk.js.map