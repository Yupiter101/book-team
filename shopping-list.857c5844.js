!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired4da;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var d={id:e,exports:{}};return t[e]=d,n.call(d.exports,d,d.exports),d.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequired4da=n),n.register("7x7K1",(function(e,t){var i=document.querySelector("[data-modal-open]"),n=document.querySelector("[data-modal-close]"),d=document.querySelector("[data-modal]"),o=document.querySelector('[data-action="sign-up"]'),s=document.querySelector('[data-action="sign-in"]'),a=document.querySelector(".authorization__bacdrop");function r(){d.classList.add("is-hidden"),document.body.style.overflow="",n.removeEventListener("click",r),a.removeEventListener("click",l),window.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&r()}function l(e){e.currentTarget===e.target&&r()}i.addEventListener("click",(function(){d.classList.remove("is-hidden"),document.body.style.overflow="hidden",n.addEventListener("click",r),a.addEventListener("click",l),window.addEventListener("keydown",c)})),n.addEventListener("click",r),o.disabled=!0;var u=document.querySelector(".authorization__btn__submit"),v=document.querySelector("#sign-in"),f=document.querySelector("#sign-up");s.addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("active-link"),o.classList.add("desactive-link"),s.classList.remove("desactive-link"),s.classList.add("active-link"),u.textContent="Sign in",v.classList.remove("display-form"),f.classList.add("display-form"),o.disabled=!1,s.disabled=!0})),o.addEventListener("click",(function(e){e.preventDefault(),o.classList.add("active-link"),o.classList.remove("desactive-link"),s.classList.add("desactive-link"),s.classList.remove("active-link"),u.textContent="Sign up",v.classList.add("display-form"),f.classList.remove("display-form"),o.disabled=!0,s.disabled=!1}));var m=document.querySelector(".js-user-bar");document.querySelector(".js-log-out-btn");m.addEventListener("click",(function(){m.classList.toggle("is-active")}))})),n("7x7K1")}();
//# sourceMappingURL=shopping-list.857c5844.js.map
