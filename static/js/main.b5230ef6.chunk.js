(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o,c=n(7),s=n.n(c),i=n(6),r=n(8),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),h=function(t){var e=t.good;return Object(b.jsx)("li",{"data-cy":"Good",children:e})},j=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(h,{good:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.Name="name",t.Length="length"}(o||(o={}));var g=function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(!1),u=Object(i.a)(s,2),h=u[0],g=u[1],m=function(t,e){var n=e.sortField,c=e.confirmation,s=Object(r.a)(t);return n&&s.sort((function(t,e){switch(n){case o.Name:return t.localeCompare(e);case o.Length:return t.length-e.length;default:return 0}})),c&&s.reverse(),s}(d,{sortField:n,confirmation:h});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button","is-info",{"is-ligth":n!==o.Name}),onClick:function(){c(o.Name)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-success",{"is-ligth":n!==o.Length}),onClick:function(){c(o.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-ligth":!h}),onClick:function(){g(!h)},children:"Reverse"}),(n||h)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),g(!1)},children:"Reset"})]}),Object(b.jsx)(j,{goods:m})]})};s.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b5230ef6.chunk.js.map