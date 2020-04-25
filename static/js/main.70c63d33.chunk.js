(this["webpackJsonpinspiration-board"]=this["webpackJsonpinspiration-board"]||[]).push([[0],{23:function(e,a,t){e.exports=t(58)},28:function(e,a,t){},29:function(e,a,t){},47:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(21),c=t.n(r),i=(t(28),t(2)),l=(t(29),t(6)),s=t(10),m=t(7),d=t.n(m),u=(t(47),t(5)),f=t.n(u),h=t(22),b=t.n(h),v=(t(55),function(e){return o.a.createElement("div",{style:{background:"".concat(b()())},className:"card"},o.a.createElement("section",{className:"card__content"},o.a.createElement("p",{className:"card__content-text"},e.text&&e.text),o.a.createElement("span",{className:"card__content-emoji"},e.emoji&&f.a.getUnicode(e.emoji))),o.a.createElement("button",{className:"card__delete",onClick:function(){console.log("you just clicked the delete button!!"),e.deleteCardCallback(e.id)}},"Delete"))}),p=(t(56),["heart_eyes","beer","clap","sparkling_heart","heart_eyes_cat","dog"]),g=function(e){var a=Object(n.useState)({text:"",emoji:""}),t=Object(i.a)(a,2),r=t[0],c=t[1],s=function(e){var a=e.target,t=a.name,n=a.value,o=Object(l.a)({},r);o[t]=n,c(o)},m=p.map((function(e,a){return o.a.createElement("option",{key:a,value:e},f.a.getUnicode(e))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"new-card-form__header"},"Add a new card!!"),o.a.createElement("div",{className:"new-card-form"},o.a.createElement("form",{className:"new-card-form__form",onSubmit:function(a){a.preventDefault(),e.addCardCallback(r),c({text:"",emoji:""})},"data-testid":"new-card-form--form"},o.a.createElement("div",null,o.a.createElement("label",{className:"new-card-form__form-label",htmlFor:"text"}),o.a.createElement("textarea",{className:"new-card-form__form-textarea",id:"text",name:"text",onChange:s,value:r.text,placeholder:"Type something...","data-testid":"new-card-form--text"})),o.a.createElement("div",null,o.a.createElement("label",{className:"new-card-form__form-label",htmlFor:"emoji"}),o.a.createElement("select",{className:"new-card-form__form-select",id:"emoji",name:"emoji",onChange:s,value:r.emoji,"data-testid":"new-card-form--emoji"},o.a.createElement("option",{value:""}," --emoji-- "),m),o.a.createElement("input",{className:"new-card-form__form-button",type:"submit",value:"Add Card"})))))},E=function(e){var a="".concat(e.url).concat(e.boardName,"/cards"),t=Object(n.useState)([]),r=Object(i.a)(t,2),c=r[0],m=r[1],u=Object(n.useState)(null),f=Object(i.a)(u,2),h=f[0],b=f[1];Object(n.useEffect)((function(){d.a.get(a).then((function(e){var a=e.data;console.log(a);var t=a.map((function(e,a){return{id:e.card.id,text:e.card.text,emoji:e.card.emoji}}));m(t)})).catch((function(e){b(e.message)}))}),[e.boardName]);var p=function(e){d.a.delete("https://inspiration-board.herokuapp.com/cards/".concat(e)).then((function(a){var t=c.filter((function(a){return a.id!==e}));m(t)})).catch((function(e){b(e.message)}))},E=c.map((function(e){return o.a.createElement("section",{key:e.id},o.a.createElement(v,{id:e.id,text:e.text,emoji:e.emoji,deleteCardCallback:p}))}));return o.a.createElement("div",{className:"validation-errors-display"},h&&o.a.createElement("div",{className:"validation-errors-display__list"},o.a.createElement("h2",null,h)),o.a.createElement("div",{className:"board"},E),o.a.createElement(g,{addCardCallback:function(e){var t=Math.max.apply(Math,Object(s.a)(c.map((function(e){return e.id}))))+1;d.a.post(a,e).then((function(a){var n=Object(s.a)(c),o=Object(l.a)({id:t},e);n.unshift(o),m(n)})).catch((function(e){b(e.message)}))}}))},w=(t(57),function(e){return o.a.createElement("div",null,o.a.createElement("form",{className:"board-name",onSubmit:function(e){e.preventDefault()}},o.a.createElement("div",null,o.a.createElement("label",{className:"change-board-name-btn-label",htmlFor:"boardName"},"Choose Board \u25bc"),o.a.createElement("select",{id:"boardName",name:"boardName",onChange:function(a){var t=a.target.value;e.changeBoardNameCallback(t)},value:e.boardName,className:"change-board-name-btn--select "},o.a.createElement("option",{value:""},"--Choose Board--"),o.a.createElement("option",{value:"kitty"},"Kate P's Board"),o.a.createElement("option",{value:"hannah-j"},"Hannah J's Board")))))}),N=function(){var e=Object(n.useState)("kitty"),a=Object(i.a)(e,2),t=a[0],r=a[1];return o.a.createElement("section",null,o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__h1"},o.a.createElement("span",{className:"header__text"},"Inspiration Board"))),o.a.createElement(E,{url:"https://inspiration-board.herokuapp.com/boards/",boardName:t}),o.a.createElement(w,{changeBoardNameCallback:function(e){r(e)},boardName:t}))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/inspiration-board",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/inspiration-board","/service-worker.js");j?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):_(e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.70c63d33.chunk.js.map