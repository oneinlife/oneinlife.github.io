(this["webpackJsonpplarin-test-task"]=this["webpackJsonpplarin-test-task"]||[]).push([[0],{13:function(e,t,a){e.exports={root:"ModalHeader_root__2pz6m",closeButton:"ModalHeader_closeButton__19kfY",primary:"ModalHeader_primary__1cV5A",temp:"ModalHeader_temp__2g27B"}},14:function(e,t,a){e.exports={container:"UserCard_container__KjLn0",container__wrapper:"UserCard_container__wrapper__3l6e4",container__content:"UserCard_container__content__2v5Pk",name:"UserCard_name__1KJCp"}},15:function(e,t,a){e.exports={container:"AddUser_container__2OQQf",container__wrapper:"AddUser_container__wrapper__3OXW0",container__content:"AddUser_container__content__1ZpZn",name:"AddUser_name__D7Jhu"}},18:function(e,t,a){e.exports={overlay:"ModalPortal_overlay__2RPrd",modal:"ModalPortal_modal__3Z2sY",primary:"ModalPortal_primary__1ag73"}},19:function(e,t,a){e.exports={root:"ModalBody_root__-fpx_",primary:"ModalBody_primary__3oU9Z"}},20:function(e,t,a){e.exports={button:"Button_button__2Lf63",active:"Button_active__h0ecc"}},21:function(e,t,a){e.exports={container:"ErrorsNotification_container__Ca_pf",error:"ErrorsNotification_error__vgLKj"}},32:function(e,t,a){e.exports={container:"Users_container__a50dK"}},33:function(e,t,a){e.exports={container:"Pagination_container__GPTNG"}},34:function(e,t,a){e.exports={row:"Row_row__2Lsla"}},35:function(e,t,a){e.exports={App:"App_App__15LM-"}},37:function(e,t,a){e.exports=a(62)},4:function(e,t,a){e.exports={modal:"ModalUser_modal__33XW7",modalBody:"ModalUser_modalBody__PInXn",input:"ModalUser_input__1pqBq",container:"ModalUser_container__3ZOR5",container__wrapper:"ModalUser_container__wrapper__166Q6",container__content:"ModalUser_container__content__hSqm-",buttonContaner:"ModalUser_buttonContaner__1scnA",button:"ModalUser_button__19FqI"}},42:function(e,t,a){},43:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(42),a(43),a(3)),s=Object(n.createContext)(),l=a(8),u=a(5),d=a.n(u),m=r.a.createContext({onHide:function(){},variant:"temp"}),_=a(18),p=a.n(_),v={primary:p.a.primary},f=function(e){var t=e.children,a=e.overlayClassName,o=e.modalClassName,c=Object(n.useRef)(null),i=Object(n.useContext)(m);return Object(n.useEffect)((function(){var e=function(e){var t=e.target;c.current===t&&i.onHide()},t=function(e){return"Escape"===e.key&&i.onHide()};return document.body.style.overflow="hidden",document.addEventListener("click",e),document.addEventListener("keydown",t,!1),function(){document.body.style.overflow="",document.removeEventListener("click",e),document.removeEventListener("keydown",t,!1)}}),[i]),r.a.createElement("div",{ref:c,className:d()(p.a.overlay,a,v[i.variant]),tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:d()(p.a.modal,o),role:"document"},t))},h=a(7),g=a(13),b=a.n(g),E=function(){return r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},r.a.createElement("path",{d:"M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.11 5.7C6.72 5.31 6.09 5.31 5.7 5.7C5.31 6.09 5.31 6.72 5.7 7.11L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"}))},N={primary:b.a.primary,temp:b.a.temp},y=function(e){var t=e.closeButton,a=void 0===t||t,o=e.closeButtonClassName,c=e.className,i=e.children,s=Object(h.a)(e,["closeButton","closeButtonClassName","className","children"]),l=Object(n.useContext)(m);return r.a.createElement("div",Object.assign({},s,{className:d()(b.a.root,c,N[l.variant])}),i,a&&r.a.createElement("button",{onClick:l.onHide,type:"button",className:d()(b.a.closeButton,o)},r.a.createElement(E,null)))};y.displayName="ModalHeader";var O=y,j=a(19),C=a.n(j),w={primary:C.a.primary},k=function(e){var t=e.className,a=e.children,o=Object(h.a)(e,["className","children"]),c=Object(n.useContext)(m);return r.a.createElement("div",Object.assign({},o,{className:d()(C.a.root,t,w[c.variant])}),a)};k.displayName="ModalBody";var x=k,U=function(e){var t=e.show,a=e.variant,o=void 0===a?"temp":a,i=e.onHide,s=void 0===i?function(){}:i,l=e.children,u=e.overlayClassName,d=e.modalClassName,_=Object(n.useMemo)((function(){return{onHide:s,variant:o}}),[s,o]);return r.a.createElement(m.Provider,{value:_},t&&c.a.createPortal(r.a.createElement(f,{overlayClassName:u,modalClassName:d},l),document.body))};U.Header=O,U.Body=x;var L=U,M=a(17),B=a(20),P=a.n(B),H=function(e){var t=e.className,a=e.active,n=e.children,o=Object(h.a)(e,["className","active","children"]);return r.a.createElement("div",Object.assign({className:d()(t,P.a.button,Object(M.a)({},P.a.active,a))},o),n)},S=a(4),A=a.n(S),q=Object(i.a)((function(e){var t=e.user,a=void 0===t?{}:t,o=e.onHide,c=e.isShow,i=e.onSave,s=e.onDelete,u=Object(n.useState)(a.firstName||""),d=Object(l.a)(u,2),m=d[0],_=d[1],p=Object(n.useState)(a.lastName||""),v=Object(l.a)(p,2),f=v[0],h=v[1],g=Object(n.useState)(a.email||""),b=Object(l.a)(g,2),E=b[0],N=b[1];return r.a.createElement(L,{show:c,onHide:o,variant:"primary",modalClassName:A.a.modal},r.a.createElement(L.Header,null),r.a.createElement(L.Body,{className:A.a.modalBody},r.a.createElement("div",{className:A.a.container},r.a.createElement("div",{className:A.a.container__wrapper},r.a.createElement("div",{className:A.a.container__content,style:{backgroundImage:"url(".concat(a.avatar||"".concat("","/no_photo.png"),"), url(").concat("","/no_photo.png)")}}))),r.a.createElement("input",{onChange:function(e){return _(e.target.value)},type:"text",value:m,placeholder:"first_name",className:A.a.input}),r.a.createElement("input",{onChange:function(e){return h(e.target.value)},type:"text",value:f,placeholder:"last_name",className:A.a.input}),r.a.createElement("input",{onChange:function(e){return N(e.target.value)},type:"email",value:E,placeholder:"email",className:A.a.input}),r.a.createElement("div",{className:A.a.buttonContaner},s&&r.a.createElement(H,{onClick:function(){return s(a.id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),i&&r.a.createElement(H,{className:A.a.button,onClick:function(){return i({id:a.id,firstName:m,lastName:f,email:E})}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))})),I=a(14),Z=a.n(I),F=Object(i.a)((function(e){var t=e.user,a=Object(n.useState)(!1),o=Object(l.a)(a,2),c=o[0],i=o[1],s=function(){return i(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Z.a.container,onClick:function(){t.loadFull((function(){return i(!0)}))}},r.a.createElement("div",{className:Z.a.container__wrapper},r.a.createElement("div",{className:Z.a.container__content,style:{backgroundImage:"url(".concat(t.avatar,"), url(").concat("","/no_photo.png)")}},r.a.createElement("span",{className:Z.a.name},t.firstName)))),c&&r.a.createElement(q,{isShow:c,isLoading:t.isLoading,onHide:s,onSave:function(){t.updateUser(t),s()},onDelete:function(){t.deleteUser(t),s()},user:t}))})),J=a(15),K=a.n(J),R=Object(i.a)((function(){var e=Object(n.useContext)(s).userstore,t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],i=function(){return c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:K.a.container,onClick:function(){return c(!0)}},r.a.createElement("div",{className:K.a.container__wrapper},r.a.createElement("div",{className:K.a.container__content},r.a.createElement("span",{className:K.a.name},"+")))),r.a.createElement(q,{isShow:o,onHide:i,onSave:function(t){e.addUser(t),i()}}))})),W=a(32),D=a.n(W),Q=Object(i.a)((function(){var e=Object(n.useContext)(s).userstore;return r.a.createElement("div",{className:D.a.container},e.users.map((function(e){return r.a.createElement(F,{key:e.id,user:e})})),r.a.createElement(R,null))})),X=a(36),G=a(33),T=a.n(G),Y=Object(i.a)((function(){var e=Object(n.useContext)(s).userstore,t=Object(X.a)(Array(e.totalPages||0));return r.a.createElement("div",{className:T.a.container},t.map((function(t,a){return r.a.createElement(H,{active:e.currentPage===a+1,key:a,onClick:function(){return t=a+1,e.changePage(t);var t}},a+1)})))})),z=a(34),V=a.n(z),$=function(e){var t=e.children,a=Object(h.a)(e,["children"]);return r.a.createElement("div",Object.assign({className:V.a.row},a),t)},ee=a(21),te=a.n(ee),ae=Object(i.a)((function(){var e=Object(n.useContext)(s).errorsStore;return r.a.createElement("div",{className:te.a.container},e.errors.map((function(e,t){return r.a.createElement("div",{className:te.a.error,key:t},e.message||"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")})))})),ne=a(6),re=a(11),oe=a(1),ce=a(9),ie=a.n(ce),se=a(22),le=new(function(){function e(){Object(ne.a)(this,e),this.errors=[],Object(oe.d)(this)}return Object(re.a)(e,[{key:"logError",value:function(e){var t=this;!function(e){console.log(e)}(e),this.addError(e),setTimeout((function(){t.removeError()}),5e3)}},{key:"addError",value:function(e){this.errors.unshift(e)}},{key:"removeError",value:function(){this.errors.pop()}}]),e}()),ue=function(){function e(t,a){var n=a.id,r=a.first_name,o=a.avatar;Object(ne.a)(this,e),this.id=null,this.firstName=null,this.lastName=null,this.email=null,this.avatar=null,this.isLoading=!1,this.parent=null,Object(oe.d)(this),this.id=n,this.firstName=r,this.avatar=o,this.parent=t}return Object(re.a)(e,[{key:"setLoading",value:function(e){this.isLoading=e}},{key:"loadFull",value:function(e){var t=this;this.setLoading(!0),ie()({method:"get",url:"https://reqres.in/api/users/".concat(this.id)}).then((function(a){var n=a.data;Object(oe.g)((function(){t.setLoading(!1),t.lastName=n.data.last_name,t.email=n.data.email,t.avatar=n.data.avatar,e()}))})).catch((function(e){t.setLoading(!1),le.logError({message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",error:e})}))}},{key:"updateUser",value:function(e){var t=this,a=e.firstName,n=e.lastName,r=e.email,o=e.id;ie()({method:"put",url:"https://reqres.in/api/users/".concat(o),data:{first_name:a,last_name:n,email:r}}).then((function(e){Object(oe.g)((function(){var a=t.users.findIndex((function(e){return e.id===o}));t.users[a]=Object(se.a)(Object(se.a)({},t.users[a]),e.data)}))})).catch((function(e){le.logError({message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",error:e})}))}},{key:"deleteUser",value:function(e){var t=this;ie()({method:"delete",url:"https://reqres.in/api/users/".concat(e)}).then((function(){t.parent.deleteUser(e)})).catch((function(e){le.logError({message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",error:e})}))}}]),e}(),de=function(){function e(){Object(ne.a)(this,e),this.users=[],this.totalPages=null,this.currentPage=null,this.isLoading=!0,Object(oe.d)(this),this.loadUsers()}return Object(re.a)(e,[{key:"loadUsers",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,ie()({method:"get",url:"https://reqres.in/api/users?page=".concat(t)}).then((function(t){Object(oe.g)((function(){e.users=t.data.data.map((function(t){return new ue(e,t)})),e.isLoading=!1,e.totalPages=t.data.total_pages,e.currentPage=t.data.page}))}))}},{key:"changePage",value:function(e){this.currentPage!==e&&this.loadUsers(e)}},{key:"addUser",value:function(e){var t=this;ie()({method:"post",url:"https://reqres.in/api/users",data:{first_name:e.firstName,last_name:e.lastName,email:e.email}}).then((function(e){Object(oe.g)((function(){t.users.unshift(new ue(t,e.data)),t.users.length>6&&t.users.pop()}))}))}},{key:"deleteUser",value:function(e){var t=this.users.findIndex((function(t){return t.id===e}));this.users.splice(t,1)}}]),e}(),me=new function e(){Object(ne.a)(this,e),this.userstore=new de,this.errorsStore=le},_e=a(35),pe=a.n(_e);var ve=function(){return r.a.createElement(s.Provider,{value:me},r.a.createElement("div",{className:pe.a.App},r.a.createElement($,null,r.a.createElement(Q,null),r.a.createElement(Y,null))),r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.adbefb33.chunk.js.map