(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d05dc"],{6859:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[e._v(e._s(e._f("localize")("Menu_Planning")))]),r("h4",[e._v(e._s(e._f("currency")(e.info.bill,"RUB")))])]),e.loading?r("Loader"):e.categories.length?r("section",e._l(e.categories,(function(t){return r("div",{key:t.id},[r("p",[r("strong",[e._v(e._s(t.title)+":")]),e._v("\n        "+e._s(e._f("currency")(t.spend))+" "+e._s(e._f("localize")("Of"))+" "+e._s(e._f("currency")(t.limit))+"\n      ")]),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip.noloc",value:t.tooltip,expression:"cat.tooltip",modifiers:{noloc:!0}}],staticClass:"progress"},[r("div",{staticClass:"determinate",class:[t.progressColor],style:{width:t.progressPercent+"%"}})])])})),0):r("p",{staticClass:"center"},[e._v("\n    "+e._s(e._f("localize")("NoCategories"))+".\n    "),r("router-link",{attrs:{to:"/categories"}},[e._v(e._s(e._f("localize")("AddFirst")))])],1)],1)},o=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),c=r("bd86"),s=r("2f62"),a=r("5bb3"),l=r("e977");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(c["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"planning",metaInfo:function(){return{title:this.$title("Menu_Planning")}},data:function(){return{loading:!0,categories:[]}},computed:p({},Object(s["c"])(["info"])),mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("fetchRecords");case 2:return t=e.sent,e.next=5,this.$store.dispatch("fetchCategories");case 5:r=e.sent,this.categories=r.map((function(e){var r=t.filter((function(t){return t.categoryId===e.id})).filter((function(e){return"outcome"===e.type})).reduce((function(e,t){return e+ +t.amount}),0),n=100*r/e.limit,o=n>100?100:n,i=n<60?"green":n<100?"yellow":"red",c=e.limit-r,s="".concat(c<0?Object(l["a"])("MoreThan"):Object(l["a"])("Stayed")," ").concat(Object(a["a"])(Math.abs(c)));return p(p({},e),{},{progressPercent:o,progressColor:i,spend:r,tooltip:s})})),this.loading=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},d=f,g=r("2877"),b=Object(g["a"])(d,n,o,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0d05dc.fd928568.js.map