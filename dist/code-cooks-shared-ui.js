"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),classNames=require("classnames"),reactRouterDom=require("react-router-dom"),ChevronLeft=require("@material-ui/icons/ChevronLeft"),PulseLoader=require("react-spinners/PulseLoader"),KeyboardArrowDownIcon=require("@material-ui/icons/KeyboardArrowDown"),Person=require("@material-ui/icons/Person");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var React__default=_interopDefaultLegacy(React),classNames__default=_interopDefaultLegacy(classNames),ChevronLeft__default=_interopDefaultLegacy(ChevronLeft),PulseLoader__default=_interopDefaultLegacy(PulseLoader),KeyboardArrowDownIcon__default=_interopDefaultLegacy(KeyboardArrowDownIcon),Person__default=_interopDefaultLegacy(Person),styles$9={root:"BackButton-module_root__emSmV"};function BackButton(e){var t=e.className,e=e.to;return React__default.default.createElement(reactRouterDom.Link,{className:classNames__default.default(styles$9.root,void 0===t?void 0:t),to:e},React__default.default.createElement(ChevronLeft__default.default,null),"Back")}var styles$8={root:"Button-module_root__2n3wi",go:"Button-module_go__12Aoj",inverse:"Button-module_inverse__1W3pk",white:"Button-module_white__3Bvdw"},returnButtonClasses=function(e,t){return classNames__default.default(styles$8.root,t,((t={})[styles$8[e]]="default"!==e,t))};function Button(e){var t=e.type,a=e.disabled,l=e.children,r=e.className,o=e.loading,n=void 0!==o&&o,u=e.onClick,s=e.testId,o=void 0===s?void 0:s,s=e.variant,e=void 0===s?"default":s,s="inverse"===e,r=returnButtonClasses(e,void 0===r?void 0:r);return React__default.default.createElement("button",{type:t,className:r,disabled:a,onClick:u,"data-testid":o},n?React__default.default.createElement(PulseLoader__default.default,{color:s?"var(--primary)":"var(--white)",size:6}):l)}function ReactRouterLinkButton(e){var t=e.className,a=e.children,l=e.to,r=e.testId,e=e.variant,t=returnButtonClasses(void 0===e?"default":e,void 0===t?void 0:t);return React__default.default.createElement(reactRouterDom.Link,{className:t,to:l,"data-testid":r},a)}var styles$7={root:"Checkbox-module_root__BpVEe",label:"Checkbox-module_label__3WTE-",box:"Checkbox-module_box__3c3lm",error:"Checkbox-module_error__1yf43",message:"Checkbox-module_message__1pRQ8"};function CheckBox(e){var t=e.onChange,a=e.checked,l=e.errors,r=void 0===l?[]:l,o=e.name,n=e.label,u=void 0===n?"":n,s=e.id,l=e.value,n=e.className,e=!!r.length,n=classNames__default.default(styles$7.root,n,((n={})[styles$7.error]=e,n));return React__default.default.createElement("div",{className:n},React__default.default.createElement("label",{htmlFor:s,className:styles$7.label},React__default.default.createElement("input",{type:"checkbox",checked:a,onChange:t,name:o,id:s,value:l}),React__default.default.createElement("span",{className:styles$7.box}),React__default.default.createElement("span",{dangerouslySetInnerHTML:{__html:u}})),e&&r.map(function(e){return React__default.default.createElement("p",{className:styles$7.message,key:e},e)}))}var styles$6={root:"Label-module_root__QGl7l",error:"Label-module_error__3RiKu"};function Label(e){var t=e.children,a=e.name,l=e.required,r=void 0!==l&&l,l=e.hasErrors,e=classNames__default.default(styles$6.root,((e={})[styles$6.error]=void 0!==l&&l,e));return React__default.default.createElement("label",{htmlFor:a,className:e},t,r&&React__default.default.createElement("sup",null,"*"))}var styles$5={root:"FormField-module_root__18x_I",error:"FormField-module_error__3TnSY",errorText:"FormField-module_errorText__2KWBD"};function FormField(e){var t=e.label,a=e.children,l=e.className,r=e.errors,o=void 0===r?[]:r,r=e.required,e=e.name,l=classNames__default.default(styles$5.root,l,((l={})[styles$5.error]=o.length,l));return React__default.default.createElement("div",{className:l},t&&React__default.default.createElement(Label,{name:e,hasErrors:!!o.length,required:r},t),a,o.map(function(e){return React__default.default.createElement("p",{key:e,className:styles$5.errorText},e)}))}var styles$4={root:"Select-module_root__2NELW",wrap:"Select-module_wrap__3beLR"};function Select(e){var t=e.errors,a=void 0===t?[]:t,l=e.name,r=e.value,o=e.options,n=e.label,u=e.onChange,s=e.className,d=e.readOnly,t=void 0!==d&&d,d=e.required,d=void 0!==d&&d,e=e.testId;return React__default.default.createElement(FormField,{label:n,className:classNames__default.default(styles$4.root,s,((s={})[styles$4.hasErrors]=a.length,s)),errors:a,required:d,name:l},React__default.default.createElement("div",{className:styles$4.wrap},React__default.default.createElement("select",{onChange:u,name:l,value:r,disabled:t,"data-testid":e},o.map(function(e){return React__default.default.createElement("option",{value:e.value,key:e.value},e.name)})),React__default.default.createElement(KeyboardArrowDownIcon__default.default,null)))}function Textarea(e){var t=e.className,a=e.errors,l=e.name,r=e.label,o=e.onChange,n=e.placeholder,u=e.required,s=e.rows,e=e.value;return React__default.default.createElement(FormField,{label:r,errors:void 0===a?[]:a,className:t,name:l,required:void 0!==u&&u},React__default.default.createElement("textarea",{name:l,placeholder:n,onChange:o,onBlur:o,value:e,rows:void 0===s?5:s}))}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function __rest(e,t){var a={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a}var styles$3={};function TextField(e){var t=e.className,a=e.name,l=e.onChange,r=e.placeholder,o=e.readOnly,n=void 0!==o&&o,u=e.tabIndex,s=void 0===u?0:u,o=e.type,u=void 0===o?"text":o,o=e.value,e=__rest(e,["className","name","onChange","placeholder","readOnly","tabIndex","type","value"]);return React__default.default.createElement(FormField,__assign({className:classNames__default.default(styles$3.root,t),name:a},e),React__default.default.createElement("input",{type:u,onChange:l,onBlur:l,name:a,placeholder:r,value:o,readOnly:n,tabIndex:s}))}var styles$2={root:"UserMenu-module_root__3Trh8",button:"UserMenu-module_button__3LSLO",menu:"UserMenu-module_menu__1ftft"},defaultProps={profilePicture:void 0};function UserMenu(e){var t=e.children,a=e.profilePicture,e=React.useState(!1),l=e[0],r=e[1];return React__default.default.createElement("div",{className:styles$2.root},React__default.default.createElement("button",{type:"button",className:styles$2.button,style:{backgroundImage:"url("+a+")"},onClick:function(){return r(!l)},"data-testid":"user-menu-profile-button"},!a&&React__default.default.createElement(Person__default.default,null)),l&&React__default.default.createElement("div",{className:styles$2.menu},t))}UserMenu.defaultProps=defaultProps;var styles$1={root:"Header-module_root__1SPn1",right:"Header-module_right__3xsjW"};function Header(e){e.fixed;var t=e.logo,a=e.middle,l=e.profilePicture,e=classNames__default.default(styles$1.root);return React__default.default.createElement("header",{className:e},t,React__default.default.createElement("div",null,a),React__default.default.createElement(UserMenu,{profilePicture:l}))}var styles={root:"Modal-module_root__cGKgJ",open:"Modal-module_open___oCw8",content:"Modal-module_content__ocM9x",close:"Modal-module_close__3TffD"};function Modal(e){var t=e.children,a=e.className,l=e.closeModal,r=e.contentClassName;e.error;var o=e.hideCloseButton,o=void 0!==o&&o,e=e.open,n=void 0!==e&&e,u=React.useRef(null),r=classNames__default.default(styles.content,r),a=classNames__default.default(styles.root,a,((a={})[styles.open]=n,a));return React.useEffect(function(){function e(e){"Escape"===e.key&&l()}function t(e){u.current&&!u.current.contains(e.target)&&n&&l()}return n&&document.body.classList.add("no-scroll"),document.addEventListener("keydown",e),document.addEventListener("click",t),function(){document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",e),document.removeEventListener("click",t)}},[n]),React__default.default.createElement("div",{className:a,role:"dialog","aria-modal":"true"},React__default.default.createElement("div",{className:r,ref:u},!o&&React__default.default.createElement("button",{onClick:l,className:styles.close,type:"button"},"×"),React__default.default.createElement("div",{className:styles.inner},t)))}exports.BackButton=BackButton,exports.Button=Button,exports.CheckBox=CheckBox,exports.FormField=FormField,exports.Header=Header,exports.Label=Label,exports.Modal=Modal,exports.ReactRouterLinkButton=ReactRouterLinkButton,exports.Select=Select,exports.TextField=TextField,exports.Textarea=Textarea;
