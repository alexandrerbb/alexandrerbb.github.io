import{i as e,a as t,s as i,y as r}from"./query-assigned-elements.js";import{t as s}from"./state.js";import{a as o}from"./constants.js";var n=function(e,t,i,r){var s,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends i{constructor(){super(...arguments),this.index=0}render(){return r`${o.map((e=>{var t;return r`<section class="${e.grow?"grow":""}"><h4>${e.category}</h4><div class="tech-icons">${null===(t=e.techIcons)||void 0===t?void 0:t.map((e=>r`<tech-icon .tech="${e}" i="${this.index++}"></tech-icon>`))}</div><recursive-list .list="${e.infos}"></recursive-list></section>`}))}`}};c.styles=e`section{margin:0 2rem 1rem;padding:0 0 1rem;border-radius:.675rem;flex-grow:1}.tech-icons{display:flex}h4{font-weight:400;width:100%}section.grow{display:flex;flex-wrap:wrap}section.grow>recursive-list{margin-left:2rem}@media (max-width:1199.98px){section{width:40vw;margin:0 0 1rem}}@media (max-width:991.98px){section>h4{text-align:center}section.grow{display:block;flex-wrap:unset}section.grow>recursive-list{margin:0}}@media (max-width:767.98px){section{width:100%}.tech-icons{justify-content:center}section>h4{text-align:start}}`,n([s()],c.prototype,"index",void 0),c=n([t("aa-techs")],c);export{c as Techs};