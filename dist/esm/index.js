import n,{Fragment as e}from"react";import r from"styled-components";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(){return o=Object.assign||function(n){for(var e,r=1,o=arguments.length;r<o;r++)for(var t in e=arguments[r])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},o.apply(this,arguments)};function t(n,e){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(r[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(n);t<o.length;t++)e.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(n,o[t])&&(r[o[t]]=n[o[t]])}return r}function i(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var p,d,a,l,c,s=r.button(p||(p=i(["\n  border: 0;\n  line-height: 1;\n  font-size: 15px;\n  cursor: pointer;\n  font-weight: 700;\n  font-weight: bold;\n  border-radius: 3px;\n  display: inline-block;\n  padding: ",";\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  &:hover {\n    background-color: ",";\n  }\n  &:active {\n      border: solid 2px #1b116e;\n      padding: ",";\n  }\n"],["\n  border: 0;\n  line-height: 1;\n  font-size: 15px;\n  cursor: pointer;\n  font-weight: 700;\n  font-weight: bold;\n  border-radius: 3px;\n  display: inline-block;\n  padding: ",";\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  &:hover {\n    background-color: ",";\n  }\n  &:active {\n      border: solid 2px #1b116e;\n      padding: ",";\n  }\n"])),(function(n){return"small"===n.size?"7px 25px 8px":"medium"===n.size?"9px 30px 11px":"14px 30px 16px"}),(function(n){return n.primary?"#1b116e":"#ffffff"}),(function(n){return n.primary?"#6bedb5":"#1b116e"}),(function(n){return n.disabled?.5:1}),(function(n){return n.primary?"#55bd90":"#6bedb5"}),(function(n){return"small"===n.size?"5px 23px 6px":"medium"===n.size?"7px 28px 9px":"12px 28px 14px"})),b=function(e){var r=e.size,i=e.disabled,p=e.onClick,d=e.primary,a=e.text,l=t(e,["size","disabled","onClick","primary","text"]);return n.createElement(s,o({type:"button",onClick:p,primary:d,disabled:i,size:r},l),a)},u=r.input(d||(d=i(["\n  height: 40px;\n  width: 300px;\n  border-radius: 3px;\n  border: solid 2px ",";\n  background-color: #fff;\n  &:focus{\n    border: solid 2px #1b116e;\n  }\n"],["\n  height: 40px;\n  width: 300px;\n  border-radius: 3px;\n  border: solid 2px ",";\n  background-color: #fff;\n  &:focus{\n    border: solid 2px #1b116e;\n  }\n"])),(function(n){return n.disabled?"#e4e3ea":n.error?"#a9150b":n.success?"#067d68":"#353637"})),f=r.div(a||(a=i(["\n  font-size: 14px;\n  color: ",";\n  padding-bottom: 6px;\n"],["\n  font-size: 14px;\n  color: ",";\n  padding-bottom: 6px;\n"])),(function(n){return n.disabled?"#e4e3ea":"#080808"})),x=r.div(l||(l=i(["\n  font-size: 14px;\n  color: #a9150b8;\n  padding-top: 4px;\n"],["\n  font-size: 14px;\n  color: #a9150b8;\n  padding-top: 4px;\n"]))),g=r.p(c||(c=i(["\n  margin: 0px;\n  color: ",";\n"],["\n  margin: 0px;\n  color: ",";\n"])),(function(n){return n.disabled?"#e4e3ea":n.error?"#a9150b":"#080808"})),m=function(r){var i=r.id,p=r.disabled,d=r.label,a=r.message,l=r.error,c=r.success,s=r.onChange,b=r.placeholder,m=t(r,["id","disabled","label","message","error","success","onChange","placeholder"]);return n.createElement(e,null,n.createElement(f,null,n.createElement(g,{disabled:p,error:l},d)),n.createElement(u,o({id:i,type:"text",onChange:s,disabled:p,error:l,success:c,placeholder:b},m)),n.createElement(x,null,n.createElement(g,{error:l},a)))};export{b as Button,m as Input};
//# sourceMappingURL=index.js.map
