(this["webpackJsonpsquid-app"]=this["webpackJsonpsquid-app"]||[]).push([[0],{60:function(e,t,n){e.exports=n(72)},65:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),c=n.n(l),i=(n(65),n(109)),o=n(108);var u=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Social Media Posts Time Retrieval"))},s=n(25),m=n.n(s),p=n(31),h=n(50),f=n(17),d=n(106),v=n(107),E=n(49);function b(e){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://fj9xc2nlr1.execute-api.ap-southeast-2.amazonaws.com/dev/tweets?id="+t,e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",JSON.parse(r.body).data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var t=e.split(" ");return"".concat(t[5]," ").concat(t[1]," ").concat(t[2]," ").concat(t[0]," ").concat(t[3])}var x=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(f.c,{initialValues:{link:""},validate:function(e){var t={};return e.link||(t.link="The link is required"),t},onSubmit:function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,n.setSubmitting)(!1),c=t.link,a=c.split("/").pop(),e.next=5,b(a);case 5:r=e.sent,l(w(r));case 7:case"end":return e.stop()}var c}),e)})));return function(t,n){return e.apply(this,arguments)}}()},(function(e){var t=e.submitForm,n=e.isSubmitting,a=e.resetForm;return r.a.createElement(f.b,null,r.a.createElement(f.a,{component:E.a,name:"link",type:"text",label:"Link",variant:"outlined",fullWidth:!0}),n&&r.a.createElement(d.a,null),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"contained",color:"primary",disabled:n,onClick:t},"Submit"),r.a.createElement(v.a,{variant:"contained",color:"default",disabled:n,onClick:function(){a(),l("")}},"Clear"))})),r.a.createElement("h2",null,"The UTC time of this tweet is: ",n))};var g=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Instruction"),r.a.createElement("p",null,"1. Paste the links of the tweet into the text box"),r.a.createElement("p",null,"2. Click the submit button"),r.a.createElement("p",null,"3. The UTC time will display on the screen"),r.a.createElement("p",null,"4. Click the clear button to clear the text box"))};var y=function(){return r.a.createElement("main",null,r.a.createElement(x,null),r.a.createElement(g,null))};var C=function(){return r.a.createElement("footer",null,r.a.createElement("small",null,"\xa9 Copyright Francis Lin ",(new Date).getFullYear()))};var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(i.a,null,r.a.createElement(u,null),r.a.createElement(y,null),r.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.ac1dcef3.chunk.js.map