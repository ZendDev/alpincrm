webpackJsonp([0],[,,,,,,,,function(s,t,a){"use strict";function n(s){a(41)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(32),e=a(55),c=a(3),l=n,o=c(i.a,e.a,!1,l,null,null);t.default=o.exports},,,,,,,,,,,,,,,,,,,,,,,,function(s,t,a){"use strict";var n=a(43),i=a(47),e=a(51);t.a={data:function(){return{menus:[{name:"Funnel",link:"funnel",icon:"funnel",id:"1"},{name:"Dealers",link:"dealers",icon:"dealers",id:"2"},{name:"Catalog",link:"catalog",icon:"catalog",id:"3"},{name:"Documents",link:"documents",icon:"documents",id:"4"},{name:"Mail",link:"mail",icon:"mail",id:"5"},{name:"Invoices",link:"invoices",icon:"invoice",id:"6"},{name:"Support",link:"support",icon:"support",id:"7"},{name:"Analytics",link:"analytics",icon:"analytics",id:"8"}]}},components:{Header:n.a,NavBar:i.a,SecondMenu:e.a}}},function(s,t,a){"use strict";t.a={}},function(s,t,a){"use strict";t.a={props:["menus"],data:function(){return{navigations:[{name:"B2C",link:"b2c",id:"1"},{name:"Tourists",link:"tourists",id:"2"}]}}}},function(s,t,a){"use strict";t.a={}},,,,,,function(s,t,a){var n=a(42);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a(5)("7af110c8",n,!0,{})},function(s,t,a){t=s.exports=a(4)(!1),t.push([s.i,"",""])},function(s,t,a){"use strict";function n(s){a(44)}var i=a(33),e=a(46),c=a(3),l=n,o=c(i.a,e.a,!1,l,null,null);t.a=o.exports},function(s,t,a){var n=a(45);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a(5)("1fcd1c12",n,!0,{})},function(s,t,a){t=s.exports=a(4)(!1),t.push([s.i,"",""])},function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("header",{staticClass:"header"},[a("div",{staticClass:"search"},[a("ul",{staticClass:"search__options"},[a("li",{staticClass:"search__option"},[a("span",[s._v("Email")])]),s._v(" "),a("li",{staticClass:"search__option"},[a("span",[s._v("Client code")])]),s._v(" "),a("li",{staticClass:"search__option"},[a("span",[s._v("Riserv code")])]),s._v(" "),a("li",{staticClass:"search__option"},[a("span",[s._v("Name")])])]),s._v(" "),a("div",{staticClass:"search__input"},[a("input",{attrs:{type:"text",placeholder:"Search"}})]),s._v(" "),a("div",{staticClass:"search__calendar"},[a("span",[s._v("Today 23 AUG")]),s._v(" "),a("img",{attrs:{src:"/src/assets/images/header/calendar.svg",alt:"img"}})])]),s._v(" "),a("ul",{staticClass:"control-panel"},[a("li",{staticClass:"control-panel__item"},[a("a",{staticClass:"control-panel__link",attrs:{href:"#"}},[a("img",{attrs:{src:"/src/assets/images/header/notifications.svg",alt:"notification"}})])]),s._v(" "),a("li",{staticClass:"control-panel__item"},[a("a",{staticClass:"control-panel__link",attrs:{href:"#"}},[a("img",{attrs:{src:"/src/assets/images/header/logout.svg",alt:"logout"}})])])])])}],e={render:n,staticRenderFns:i};t.a=e},function(s,t,a){"use strict";function n(s){a(48)}var i=a(34),e=a(50),c=a(3),l=n,o=c(i.a,e.a,!1,l,null,null);t.a=o.exports},function(s,t,a){var n=a(49);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a(5)("f6e627a4",n,!0,{})},function(s,t,a){t=s.exports=a(4)(!1),t.push([s.i,"",""])},function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("nav",{staticClass:"navbar"},[a("div",{staticClass:"navbar__inner"},[a("ul",{staticClass:"mainmenu"},s._l(s.navigations,function(t){return a("li",{key:t.id,staticClass:"mainmenu__item"},[a("router-link",{staticClass:"mainmenu__link",attrs:{to:"/"+t.link}},[a("span",{staticClass:"mainmenu__name"},[s._v("\n                        "+s._s(t.name)+"\n                    ")])])],1)}),0),s._v(" "),a("ul",{staticClass:"navigation"},s._l(s.menus,function(t){return a("li",{key:t.id,staticClass:"navigation__item"},[a("router-link",{staticClass:"navigation__link",attrs:{to:"/b2c/"+t.link}},[a("i",{class:"icon icon-"+t.icon}),s._v(" "),a("span",{staticClass:"navigation__name"},[s._v("\n                        "+s._s(t.name)+"\n                    ")])])],1)}),0)]),s._v(" "),a("div",{staticClass:"navsettings"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"icon icon-settings"})])],1)])},i=[],e={render:n,staticRenderFns:i};t.a=e},function(s,t,a){"use strict";function n(s){a(52)}var i=a(35),e=a(54),c=a(3),l=n,o=c(i.a,e.a,!1,l,null,null);t.a=o.exports},function(s,t,a){var n=a(53);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a(5)("4a5e3362",n,!0,{})},function(s,t,a){t=s.exports=a(4)(!1),t.push([s.i,"",""])},function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"secondmenu"},[a("ul",{staticClass:"secondmenu__list"},[a("li",{staticClass:"secondmenu__item"},[a("a",{staticClass:"secondmenu__link",attrs:{href:""}},[a("i",{staticClass:"icon icon-notes"}),s._v(" "),a("span",{staticClass:"secondmenu__name"},[s._v("Notes")])])]),s._v(" "),a("li",{staticClass:"secondmenu__item"},[a("a",{staticClass:"secondmenu__link",attrs:{href:""}},[a("i",{staticClass:"icon icon-tutorial"}),s._v(" "),a("span",{staticClass:"secondmenu__name"},[s._v("Tutorial")])])]),s._v(" "),a("li",{staticClass:"secondmenu__item"},[a("a",{staticClass:"secondmenu__link",attrs:{href:""}},[a("i",{staticClass:"icon icon-scripts"}),s._v(" "),a("span",{staticClass:"secondmenu__name"},[s._v("Scripts")])])]),s._v(" "),a("li",{staticClass:"secondmenu__item"},[a("a",{staticClass:"secondmenu__link",attrs:{href:""}},[a("i",{staticClass:"icon icon-log"})])])])])}],e={render:n,staticRenderFns:i};t.a=e},function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"main"},[a("NavBar",{attrs:{menus:s.menus}}),s._v(" "),a("div",{staticClass:"main__inner"},[a("Header"),s._v(" "),a("div",{staticClass:"main__content"},[a("router-view"),s._v(" "),a("SecondMenu")],1)],1)],1)},i=[],e={render:n,staticRenderFns:i};t.a=e}]);
//# sourceMappingURL=0.build.js.map