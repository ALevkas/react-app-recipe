(this["webpackJsonpreact-app-recipes"]=this["webpackJsonpreact-app-recipes"]||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(19),a=c.n(s),i=(c(25),c(4)),j=c(0),l=function(){return Object(j.jsx)("footer",{className:"page-footer green lighten-2",children:Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear," Aleksandr Levchenko and @Levkas my profile in github.com",Object(j.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/ALevkas/",children:"My others app in github page."})]})})})},o=function(){return Object(j.jsx)("nav",{className:"green darken-1",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsx)(i.b,{to:"/",className:"brand-logo",children:"React App Recipes"}),Object(j.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/contact",children:"Contacts"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/about",children:"About"})})]})]})})},b=c(2),u=c(8),d=c(10),h=c.n(d),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),p=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=c(12),v=function(e){e.idCategory;var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:c,alt:t})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title",children:t}),Object(j.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(i.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})},N=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(j.jsx)("div",{className:"list",children:c.map((function(e){return Object(j.jsx)(v,Object(g.a)({},e),e.idCategory)}))})},w=function(){return Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"indeterminate"})})},y=function(e){var t=e.cb,c=Object(n.useState)(""),r=Object(u.a)(c,2),s=r[0],a=r[1],i=function(e){t(s)};return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{type:"search",id:"search-field",placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&i()},onChange:function(e){return a(e.target.value)},value:s}),Object(j.jsx)("button",{className:"btn btn-search",onClick:i,children:"Search"})]})})},k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(u.a)(s,2),i=a[0],l=a[1],o=Object(b.g)(),d=o.pathName,h=o.search,O=Object(b.f)().push;return Object(n.useEffect)((function(){m().then((function(e){r(e.categories),l(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathName:d,search:"?search=".concat(e)})}}),c.length?Object(j.jsx)(N,{catalog:i}):Object(j.jsx)(w,{})]})},C=function(){return Object(j.jsx)("div",{children:"About Page"})},M=function(){return Object(j.jsx)("div",{children:"Contact Page"})},S=function(){return Object(j.jsx)("h1",{children:"\u0423\u043f\u0441, \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0433\u0434\u0435 \u0442\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u043b\u0430\u0441\u044c."})},A=function(e){var t=e.idMeal,c=e.strMeal,n=e.strMealThumb;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:n,alt:c})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("span",{className:"card-title",children:c})}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(i.b,{to:"/meal/".concat(t),className:"btn",children:"Watch recipe"})})]})},F=function(e){var t=e.meals;return Object(j.jsx)("div",{className:"list",children:t.map((function(e){return Object(j.jsx)(A,Object(g.a)({},e),e.idMeal)}))})},L=function(){var e=Object(b.h)().name,t=Object(n.useState)([]),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(b.f)().goBack;return Object(n.useEffect)((function(){f(e).then((function(e){return s(e.meals)}))}),[e]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn",onClick:a,children:"Go back"}),r.length?Object(j.jsx)(F,{meals:r}):Object(j.jsx)(w,{})]})},E=function(){var e=Object(b.f)().goBack,t=Object(b.h)().idMeal,c=Object(n.useState)({}),r=Object(u.a)(c,2),s=r[0],a=r[1];return Object(n.useEffect)((function(){p(t).then((function(e){return a(e.meals[0])}))}),[t]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn",onClick:e,children:"Go Back"}),s?Object(j.jsxs)("div",{className:"card card-recipe",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:s.strMealThumb})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title",children:s.strMeal}),Object(j.jsx)("span",{children:s.strCategory}),Object(j.jsx)("br",{}),s.strArea?Object(j.jsx)("span",{children:" recipe.strArea "}):null,Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:s.strInstructions}),Object(j.jsxs)("table",{className:"centered",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Ingredient"}),Object(j.jsx)("th",{children:"Measure"})]})}),Object(j.jsx)("tbody",{children:Object.keys(s).map((function(e){return e.includes("Ingredient")&&s[e]?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:s[e]}),Object(j.jsx)("td",{children:s["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),s.strYoutube?Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h5",{children:"Video Recipe"}),Object(j.jsx)("iframe",{title:t,src:"https://www.youtube.com/embed/".concat(s.strYoutube.slice(-11)),allowFullScreen:!0})]}):null]})]}):Object(j.jsx)(w,{})]})},B=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("main",{className:"container content",children:Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{exact:!0,path:"/",component:k}),Object(j.jsx)(b.a,{path:"/about",component:C}),Object(j.jsx)(b.a,{path:"/contact",component:M}),Object(j.jsx)(b.a,{path:"/category/:name",component:L}),Object(j.jsx)(b.a,{path:"/meal/:idMeal",component:E}),Object(j.jsx)(b.a,{component:S})]})})})};var I=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.a,{basename:"react-app-recipes",children:[Object(j.jsx)(o,{}),Object(j.jsx)(B,{}),Object(j.jsx)(l,{})]})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e2b2adaf.chunk.js.map