(this["webpackJsonpplarin-test-task"]=this["webpackJsonpplarin-test-task"]||[]).push([[0],[,,,,function(e,t,a){e.exports={modal:"ModalUser_modal__33XW7",modalBody:"ModalUser_modalBody__PInXn",input:"ModalUser_input__1pqBq",container:"ModalUser_container__3ZOR5",container__wrapper:"ModalUser_container__wrapper__166Q6",container__content:"ModalUser_container__content__hSqm-",buttonContaner:"ModalUser_buttonContaner__1scnA",button:"ModalUser_button__19FqI"}},,,,,,,,,function(e,t,a){e.exports={root:"ModalHeader_root__2pz6m",closeButton:"ModalHeader_closeButton__19kfY",primary:"ModalHeader_primary__1cV5A",temp:"ModalHeader_temp__2g27B"}},function(e,t,a){e.exports={container:"UserCard_container__KjLn0",container__wrapper:"UserCard_container__wrapper__3l6e4",container__content:"UserCard_container__content__2v5Pk",name:"UserCard_name__1KJCp"}},function(e,t,a){e.exports={container:"AddUser_container__2OQQf",container__wrapper:"AddUser_container__wrapper__3OXW0",container__content:"AddUser_container__content__1ZpZn",name:"AddUser_name__D7Jhu"}},,function(e,t,a){e.exports={overlay:"ModalPortal_overlay__2RPrd",modal:"ModalPortal_modal__3Z2sY",primary:"ModalPortal_primary__1ag73"}},function(e,t,a){e.exports={root:"ModalBody_root__-fpx_",primary:"ModalBody_primary__3oU9Z"}},function(e,t,a){e.exports={button:"Button_button__2Lf63",active:"Button_active__h0ecc"}},function(e,t,a){e.exports={container:"ErrorsNotification_container__Ca_pf",error:"ErrorsNotification_error__vgLKj"}},,,,,,,,,,,function(e,t,a){e.exports={container:"Users_container__a50dK"}},function(e,t,a){e.exports={container:"Pagination_container__GPTNG"}},function(e,t,a){e.exports={row:"Row_row__2Lsla"}},function(e,t,a){e.exports={App:"App_App__15LM-"}},,function(e,t,a){e.exports=a(61)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(41),a(42),a(3)),s=Object(n.createContext)(),l=a(8),u=a(5),m=a.n(u),d=r.a.createContext({onHide:function(){},variant:"temp"}),_=a(17),p=a.n(_),v={primary:p.a.primary},f=function(e){var t=e.children,a=e.overlayClassName,o=e.modalClassName,c=Object(n.useRef)(null),i=Object(n.useContext)(d);return Object(n.useEffect)((function(){var e=function(e){var t=e.target;c.current===t&&i.onHide()},t=function(e){return"Escape"===e.key&&i.onHide()};return document.body.style.overflow="hidden",document.addEventListener("click",e),document.addEventListener("keydown",t,!1),function(){document.body.style.overflow="",document.removeEventListener("click",e),document.removeEventListener("keydown",t,!1)}}),[i]),r.a.createElement("div",{ref:c,className:m()(p.a.overlay,a,v[i.variant]),tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:m()(p.a.modal,o),role:"document"},t))},h=a(7),g=a(13),E=a.n(g),b=function(){return r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},r.a.createElement("path",{d:"M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.11 5.7C6.72 5.31 6.09 5.31 5.7 5.7C5.31 6.09 5.31 6.72 5.7 7.11L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"}))},N={primary:E.a.primary,temp:E.a.temp},y=function(e){var t=e.closeButton,a=void 0===t||t,o=e.closeButtonClassName,c=e.className,i=e.children,s=Object(h.a)(e,["closeButton","closeButtonClassName","className","children"]),l=Object(n.useContext)(d);return r.a.createElement("div",Object.assign({},s,{className:m()(E.a.root,c,N[l.variant])}),i,a&&r.a.createElement("button",{onClick:l.onHide,type:"button",className:m()(E.a.closeButton,o)},r.a.createElement(b,null)))};y.displayName="ModalHeader";var O=y,j=a(18),C=a.n(j),w={primary:C.a.primary},k=function(e){var t=e.className,a=e.children,o=Object(h.a)(e,["className","children"]),c=Object(n.useContext)(d);return r.a.createElement("div",Object.assign({},o,{className:m()(C.a.root,t,w[c.variant])}),a)};k.displayName="ModalBody";var x=k,L=function(e){var t=e.variant,a=void 0===t?"temp":t,o=e.onHide,i=void 0===o?function(){}:o,s=e.children,l=e.overlayClassName,u=e.modalClassName,m=Object(n.useMemo)((function(){return{onHide:i,variant:a}}),[i,a]);return r.a.createElement(d.Provider,{value:m},c.a.createPortal(r.a.createElement(f,{overlayClassName:l,modalClassName:u},s),document.body))};L.Header=O,L.Body=x;var U=L,M=a(30),B=a(19),P=a.n(B),H=function(e){var t=e.className,a=e.active,n=e.children,o=Object(h.a)(e,["className","active","children"]);return r.a.createElement("div",Object.assign({className:m()(t,P.a.button,Object(M.a)({},P.a.active,a))},o),n)},S=a(4),A=a.n(S),q=Object(i.a)((function(e){var t=e.user,a=void 0===t?{}:t,o=e.onHide,c=e.onSave,i=e.onDelete,s=Object(n.useState)(a.firstName||""),u=Object(l.a)(s,2),m=u[0],d=u[1],_=Object(n.useState)(a.lastName||""),p=Object(l.a)(_,2),v=p[0],f=p[1],h=Object(n.useState)(a.email||""),g=Object(l.a)(h,2),E=g[0],b=g[1];return r.a.createElement(U,{onHide:o,variant:"primary",modalClassName:A.a.modal},r.a.createElement(U.Header,null),r.a.createElement(U.Body,{className:A.a.modalBody},r.a.createElement("div",{className:A.a.container},r.a.createElement("div",{className:A.a.container__wrapper},r.a.createElement("div",{className:A.a.container__content,style:{backgroundImage:"url(".concat(a.avatar||"".concat("","/no_photo.png"),"), url(").concat("","/no_photo.png)")}}))),r.a.createElement("input",{onChange:function(e){return d(e.target.value)},type:"text",value:m,placeholder:"first_name",className:A.a.input}),r.a.createElement("input",{onChange:function(e){return f(e.target.value)},type:"text",value:v,placeholder:"last_name",className:A.a.input}),r.a.createElement("input",{onChange:function(e){return b(e.target.value)},type:"email",value:E,placeholder:"email",className:A.a.input}),r.a.createElement("div",{className:A.a.buttonContaner},i&&r.a.createElement(H,{onClick:function(){return i(a.id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),c&&r.a.createElement(H,{className:A.a.button,onClick:function(){return c({id:a.id,firstName:m,lastName:v,email:E})}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))})),I=a(14),Z=a.n(I),F=Object(i.a)((function(e){var t=e.user,a=Object(n.useState)(!1),o=Object(l.a)(a,2),c=o[0],i=o[1],s=function(){return i(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Z.a.container,onClick:function(){t.loadFull((function(){return i(!0)}))}},r.a.createElement("div",{className:Z.a.container__wrapper},r.a.createElement("div",{className:Z.a.container__content,style:{backgroundImage:"url(".concat(t.avatar,"), url(").concat("","/no_photo.png)")}},r.a.createElement("span",{className:Z.a.name},t.firstName)))),c&&r.a.createElement(q,{isLoading:t.isLoading,onHide:s,onSave:function(e){t.updateUser(e),s()},onDelete:function(){t.deleteUser(t),s()},user:t}))})),J=a(15),K=a.n(J),R=Object(i.a)((function(){var e=Object(n.useContext)(s).userstore,t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],i=function(){return c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:K.a.container,onClick:function(){return c(!0)}},r.a.createElement("div",{className:K.a.container__wrapper},r.a.createElement("div",{className:K.a.container__content},r.a.createElement("span",{className:K.a.name},"+")))),o&&r.a.createElement(q,{onHide:i,onSave:function(t){e.addUser(t),i()}}))})),W=a(31),D=a.n(W),Q=Object(i.a)((function(){var e=Object(n.useContext)(s).userstore;return r.a.createElement("div",{className:D.a.container},e.users.map((function(e){return r.a.createElement(F,{key:e.id,user:e})})),r.a.createElement(R,null))})),X=a(35),G=a(32),T=a.n(G),Y=Object(i.a)((function(){var e=Object(n.useContext)(s).userstore,t=Object(X.a)(Array(e.totalPages||0));return r.a.createElement("div",{className:T.a.container},t.map((function(t,a){return r.a.createElement(H,{active:e.currentPage===a+1,key:a,onClick:function(){return t=a+1,e.changePage(t);var t}},a+1)})))})),z=a(33),V=a.n(z),$=function(e){var t=e.children,a=Object(h.a)(e,["children"]);return r.a.createElement("div",Object.assign({className:V.a.row},a),t)},ee=a(20),te=a.n(ee),ae=Object(i.a)((function(){var e=Object(n.useContext)(s).errorsStore;return r.a.createElement("div",{className:te.a.container},e.errors.map((function(e,t){return r.a.createElement("div",{className:te.a.error,key:t},e.message||"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")})))})),ne=a(6),re=a(11),oe=a(1),ce=a(9),ie=a.n(ce),se=new(function(){function e(){Object(ne.a)(this,e),this.errors=[],Object(oe.d)(this)}return Object(re.a)(e,[{key:"logError",value:function(e){var t=this;!function(e){console.log(e)}(e),this.addError(e),setTimeout((function(){t.removeError()}),5e3)}},{key:"addError",value:function(e){this.errors.unshift(e)}},{key:"removeError",value:function(){this.errors.pop()}}]),e}()),le=function(){function e(t,a){var n=a.id,r=a.first_name,o=a.avatar;Object(ne.a)(this,e),this.id=null,this.firstName=null,this.lastName=null,this.email=null,this.avatar=null,this.isLoading=!1,this.parent=null,Object(oe.d)(this),this.id=n,this.firstName=r,this.avatar=o,this.parent=t}return Object(re.a)(e,[{key:"setLoading",value:function(e){this.isLoading=e}},{key:"loadFull",value:function(e){var t=this;this.setLoading(!0),ie()({method:"get",url:"https://reqres.in/api/users/".concat(this.id)}).then((function(a){var n=a.data;Object(oe.g)((function(){t.setLoading(!1),t.lastName=n.data.last_name,t.email=n.data.email,t.avatar=n.data.avatar,e()}))})).catch((function(e){t.setLoading(!1),se.logError({message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",error:e})}))}},{key:"updateUser",value:function(e){var t=this,a=e.firstName,n=e.lastName,r=e.email,o=e.id;ie()({method:"put",url:"https://reqres.in/api/users/".concat(o),data:{first_name:a,last_name:n,email:r}}).then((function(e){var a=e.data;Object(oe.g)((function(){console.log(a.first_name,a.last_name,a.email),t.firstName=a.first_name,t.lastName=a.last_name,t.email=a.email}))})).catch((function(e){se.logError({message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",error:e})}))}},{key:"deleteUser",value:function(){var e=this;ie()({method:"delete",url:"https://reqres.in/api/users/".concat(this.id)}).then((function(){e.parent.deleteUser(e.id)})).catch((function(e){se.logError({message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",error:e})}))}}]),e}(),ue=function(){function e(){Object(ne.a)(this,e),this.users=[],this.totalPages=null,this.currentPage=null,this.isLoading=!0,Object(oe.d)(this),this.loadUsers()}return Object(re.a)(e,[{key:"loadUsers",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,ie()({method:"get",url:"https://reqres.in/api/users?page=".concat(t)}).then((function(t){Object(oe.g)((function(){e.users=t.data.data.map((function(t){return new le(e,t)})),e.isLoading=!1,e.totalPages=t.data.total_pages,e.currentPage=t.data.page}))})).catch((function(t){e.isLoading=!1,se.logError({message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",error:t})}))}},{key:"changePage",value:function(e){this.currentPage!==e&&this.loadUsers(e)}},{key:"addUser",value:function(e){var t=this;e.firstName?ie()({method:"post",url:"https://reqres.in/api/users",data:{first_name:e.firstName,last_name:e.lastName,email:e.email}}).then((function(e){Object(oe.g)((function(){t.users.unshift(new le(t,e.data)),t.users.length>6&&t.users.pop()}))})).catch((function(e){se.logError({message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",error:e})})):se.logError({message:"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0431\u0435\u0437 \u0438\u043c\u0435\u043d\u0438"})}},{key:"deleteUser",value:function(e){var t=this.users.findIndex((function(t){return t.id===e}));-1!==t&&this.users.splice(t,1)}}]),e}(),me=new function e(){Object(ne.a)(this,e),this.userstore=new ue,this.errorsStore=se},de=a(34),_e=a.n(de);var pe=function(){return r.a.createElement(s.Provider,{value:me},r.a.createElement("div",{className:_e.a.App},r.a.createElement($,null,r.a.createElement(Q,null),r.a.createElement(Y,null))),r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.36ca02e5.chunk.js.map