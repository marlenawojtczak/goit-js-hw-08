function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var i,o,r,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,a=setTimeout(h,t),l?g(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function h(){var e=v();if(j(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function w(e){return a=void 0,p&&i?g(e):(i=o=void 0,u)}function O(){var e=v(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===a)return S(f);if(s)return a=setTimeout(h,t),g(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=o=a=void 0},O.flush=function(){return void 0===a?u:w(v())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const g=document.querySelector(".feedback-form"),S=document.querySelector('input[type="email"]'),j=document.querySelector('textarea[name="message"]'),h=(document.querySelector('button[type="submit"]'),()=>{const e={email:S.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))});S.addEventListener("input",e(t)(h,500)),j.addEventListener("input",e(t)(h,500));(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(S.value=e.email,j.value=e.message)})(),g.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),S.value="",j.value=""}));
//# sourceMappingURL=03-feedback.3b533198.js.map
