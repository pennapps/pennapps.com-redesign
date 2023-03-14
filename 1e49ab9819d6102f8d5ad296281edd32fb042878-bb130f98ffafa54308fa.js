"use strict";(self.webpackChunkpennapps_com_redesign=self.webpackChunkpennapps_com_redesign||[]).push([[379],{8513:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Collapse=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r};function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f(e);if(t){var r=f(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}function a(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,o,r=u(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),p(s(t=r.call(this,e)),"timeout",void 0),p(s(t),"container",void 0),p(s(t),"content",void 0),p(s(t),"onResize",(function(){if(clearTimeout(t.timeout),t.container&&t.content){var e=t.props,n=e.isOpened,o=e.checkTimeout,r=Math.floor(t.container.clientHeight),i=Math.floor(t.content.clientHeight),c=n&&Math.abs(i-r)<=1,l=!n&&Math.abs(r)<=1;c||l?t.onRest({isFullyOpened:c,isFullyClosed:l,isOpened:n,containerHeight:r,contentHeight:i}):(t.onWork({isFullyOpened:c,isFullyClosed:l,isOpened:n,containerHeight:r,contentHeight:i}),t.timeout=setTimeout((function(){return t.onResize()}),o))}})),p(s(t),"onRest",(function(e){var n=e.isFullyOpened,o=e.isFullyClosed,r=e.isOpened,i=e.containerHeight,c=e.contentHeight;if(t.container&&t.content){var l=r&&t.container.style.height==="".concat(c,"px"),u=!r&&"0px"===t.container.style.height;if(l||u){t.container.style.overflow=r?"initial":"hidden",t.container.style.height=r?"auto":"0px";var a=t.props.onRest;a&&a({isFullyOpened:n,isFullyClosed:o,isOpened:r,containerHeight:i,contentHeight:c})}}})),p(s(t),"onWork",(function(e){var n=e.isFullyOpened,o=e.isFullyClosed,r=e.isOpened,i=e.containerHeight,c=e.contentHeight;if(t.container&&t.content){var l=r&&t.container.style.height==="".concat(c,"px"),u=!r&&"0px"===t.container.style.height;if(!l&&!u){t.container.style.overflow="hidden",t.container.style.height=r?"".concat(c,"px"):"0px";var a=t.props.onWork;a&&a({isFullyOpened:n,isFullyClosed:o,isOpened:r,containerHeight:i,contentHeight:c})}}})),p(s(t),"onRefContainer",(function(e){t.container=e})),p(s(t),"onRefContent",(function(e){t.content=e})),e.initialStyle?t.initialStyle=e.initialStyle:t.initialStyle=e.isOpened?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"},t}return t=a,(n=[{key:"componentDidMount",value:function(){this.onResize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.theme,o=t.isOpened;return t.children!==e.children||o!==e.isOpened||Object.keys(n).some((function(t){return n[t]!==e.theme[t]}))}},{key:"getSnapshotBeforeUpdate",value:function(){if(!this.container||!this.content)return null;if("auto"===this.container.style.height){var e=this.content.clientHeight;this.container.style.height="".concat(e,"px")}return null}},{key:"componentDidUpdate",value:function(){this.onResize()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.children,o=e.isOpened;return i.default.createElement("div",{ref:this.onRefContainer,className:t.collapse,style:this.initialStyle,"aria-hidden":!o},i.default.createElement("div",{ref:this.onRefContent,className:t.content},n))}}])&&c(t.prototype,n),o&&c(t,o),a}(i.default.Component);t.Collapse=y,p(y,"defaultProps",{theme:{collapse:"ReactCollapse--collapse",content:"ReactCollapse--content"},initialStyle:void 0,onRest:void 0,onWork:void 0,checkTimeout:50})},6187:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.UnmountClosed=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r},c=n(8513),l=["isOpened"],u=["isOpened"];function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=O(e);if(t){var r=O(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(s,e);var t,n,o,r=h(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),m(b(t=r.call(this,e)),"onWork",(function(e){var n=e.isOpened,o=p(e,l);t.setState({isResting:!1,isOpened:n});var r=t.props.onWork;r&&r(f({isOpened:n},o))})),m(b(t),"onRest",(function(e){var n=e.isOpened,o=p(e,u);t.setState({isResting:!0,isOpened:n,isInitialRender:!1});var r=t.props.onRest;r&&r(f({isOpened:n},o))})),m(b(t),"getInitialStyle",(function(){var e=t.state,n=e.isOpened;return e.isInitialRender&&n?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"}})),t.state={isResting:!0,isOpened:e.isOpened,isInitialRender:!0},t}return t=s,(n=[{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;e.isOpened!==t&&this.setState({isResting:!1,isOpened:t,isInitialRender:!1})}},{key:"render",value:function(){var e=this.state,t=e.isResting,n=e.isOpened;return t&&!n?null:i.default.createElement(c.Collapse,a({},this.props,{initialStyle:this.getInitialStyle(),onWork:this.onWork,onRest:this.onRest}))}}])&&y(t.prototype,n),o&&y(t,o),s}(i.default.PureComponent);t.UnmountClosed=g,m(g,"defaultProps",{onWork:void 0,onRest:void 0})},4397:function(e,t,n){var o=n(8513).Collapse,r=n(6187).UnmountClosed;e.exports=r,r.Collapse=o,r.UnmountClosed=r},9417:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(7294),r=n(4397);function i(e){var t=e.q,n=e.a,i=(0,o.useState)(!1),c=i[0],l=i[1];return o.createElement("div",{className:"faq-section "+(c?"open":"closed"),onClick:function(){return l(!c)},onKeyPress:function(){return l(!c)}},o.createElement("div",{className:"faq-question-container"},o.createElement("div",{className:"faq-question-text"},t)),o.createElement("img",{className:"faq-question-icon "+(c?"open":"closed"),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEJSURBVHgBfdAxT8JAGAbg7702ahc8E2QGNaawWP9BUbrr5ib8Ev0nsLm6Onk/ARfjRBlN7NCxGvDz7hDS0Cvf0OZNnrz33Xny/Ppmv3X2tNfsFD9Z+kY1I0iwJOJIABPZS6I66BVZOg2aJyBQrPNd0Dp9Kb5mnxVoPkU2U8Fx54gItRjlILvJhInv9Spz8LKff6i5E+7CFWjmsDt41b+4jJ1QRrHkb9/gaI2d0OIwbjP89D8q34naupG851WyjSPhgnzgKQIuyjtWYKOXjLdR5dYGgXnoesdNYyMcPFgEyoHlbRltGi0CPVpEi37+rqbbK0GGV0OGGNuAxaULrY4GdAv0Tr+jOmTmD0CoiGrlLj0tAAAAAElFTkSuQmCC",alt:"arrow"}),o.createElement(r.Collapse,{isOpened:c},o.createElement("div",null,o.createElement("div",null,n))))}function c(e){var t=e.content;return o.createElement(o.Fragment,null,o.createElement("h3",null,"FAQs"),Object.keys(t).map((function(e,n){return o.createElement(i,{q:e,a:t[e]})})))}}}]);
//# sourceMappingURL=1e49ab9819d6102f8d5ad296281edd32fb042878-bb130f98ffafa54308fa.js.map