(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[5],{433:function(e,t,n){"use strict";n.r(t);var a=n(162);var r=n(0),c=n.n(r),l=n(14),u=n(208),o=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.chat.status}));return Object(r.useEffect)((function(){return e(Object(u.c)()),function(){e(Object(u.d)())}}),[]),c.a.createElement("div",null,"error"===t&&c.a.createElement("div",null,"Some error occured. Please refresh the page"),c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(m,null)))},i=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(l.d)((function(e){return e.chat.messages})),n=Object(r.useRef)(null),u=Object(r.useState)(!0),o=Object(a.a)(u,2),i=o[0],m=o[1];return Object(r.useEffect)((function(){var e;i&&(null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[t]),c.a.createElement("div",{style:{height:"400px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!i&&m(!0):i&&m(!1)}},t.map((function(e,t){return c.a.createElement(s,{key:e.id,message:e})})),c.a.createElement("div",{ref:n}))},s=c.a.memo((function(e){var t=e.message;return console.log(">>>>>>Message"),c.a.createElement("div",null,c.a.createElement("img",{src:t.photo,style:{width:"30px"}})," ",c.a.createElement("b",null,t.userName),c.a.createElement("br",null),t.message,c.a.createElement("hr",null))})),m=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(l.c)(),s=Object(l.d)((function(e){return e.chat.status}));return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("textarea",{onChange:function(e){return o(e.currentTarget.value)},value:n})),c.a.createElement("div",null,c.a.createElement("button",{disabled:"ready"!==s,onClick:function(){n&&(i(Object(u.b)(n)),o(""))}},"Send")))};t.default=function(){return c.a.createElement("div",null,c.a.createElement(o,null))}}}]);
//# sourceMappingURL=5.4036dc87.chunk.js.map