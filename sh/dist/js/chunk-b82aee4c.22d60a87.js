(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b82aee4c"],{4202:function(t,e,n){},6959:function(t,e,n){"use strict";n("e074")},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-title"},[n("h3",[t._v(t._s(t._f("localize")("Bill")))]),n("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:t.refresh}},[n("i",{staticClass:"material-icons"},[t._v("refresh")])])]),t.loading?n("Loader"):n("div",{staticClass:"row"},[n("HomeBill",{attrs:{rates:t.currency.rates}}),n("HomeCurrency",{attrs:{rates:t.currency.rates,date:t.currency.date}})],1)],1)},o=[],r=(n("96cf"),n("3b8d")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col s12 m6 l4"},[n("div",{staticClass:"card blue-grey  bill-card"},[n("div",{staticClass:"card-content white-text"},[n("span",{staticClass:"card-title"},[t._v(t._s(t._f("localize")("BillInCurrency")))]),t._l(t.currencies,(function(e){return n("p",{key:e,staticClass:"currency-line"},[n("span",[t._v(t._s(t._f("currency")(t.getCurrency(e),e)))])])}))],2)])])},c=[],a={props:["rates"],data:function(){return{currencies:["RUB","USD","EUR"]}},computed:{base:function(){return this.$store.getters.info.bill/(this.rates["RUB"]/this.rates["EUR"])}},methods:{getCurrency:function(t){return Math.floor(this.base*this.rates[t])}}},d=a,l=n("2877"),u=Object(l["a"])(d,s,c,!1,null,null,null),m=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col s12 m6 l8"},[n("div",{staticClass:"card blue-grey bill-card"},[n("div",{staticClass:"card-content white-text"},[n("div",{staticClass:"card-header"},[n("span",{staticClass:"card-title"},[t._v(t._s(t._f("localize")("Recordings")))])]),n("todo-input",{on:{addTodo:t.addTodo}}),n("br"),n("todo-list",t._l(t.items,(function(e){return n("todo-item",{key:e.id,attrs:{item:e},on:{updateTodo:t.updateTodo,deleteTodo:t.deleteTodo,checkItems:t.checkItems}})})),1)],1)])])},h=[],f=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"todo-list"}},[t._t("default")],2)},v=[],b={data:function(){return{}},components:{}},g=b,_=Object(l["a"])(g,y,v,!1,null,null,null),k=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:" todo-item"}},[n("i",{staticClass:"material-icons ic",on:{click:function(e){t.editMode=!t.editmode}}},[t._v("edit")]),n("i",{staticClass:"material-icons ic",on:{click:t.deleteTodo}},[t._v("delete")]),n("label",{staticClass:"inputTodo wwd"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{name:"type",type:"checkbox"},domProps:{checked:Array.isArray(t.type)?t._i(t.type,null)>-1:t.type},on:{change:function(e){var n=t.type,i=e.target,o=!!i.checked;if(Array.isArray(n)){var r=null,s=t._i(n,r);i.checked?s<0&&(t.type=n.concat([r])):s>-1&&(t.type=n.slice(0,s).concat(n.slice(s+1)))}else t.type=o}}}),t.editMode?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.todo,expression:"todo.todo"}],staticClass:"wrid",domProps:{value:t.todo.todo},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTodo(e)},input:function(e){e.target.composing||t.$set(t.todo,"todo",e.target.value)}}})]):n("span",{class:{through:t.item.complited},on:{click:t.check}},[t._v(" "+t._s(t.item.todo)+" ")])])])},O=[],C={props:["item"],data:function(){return{todo:this.item,editMode:!1}},components:{},methods:{check:function(){this.$emit("checkItems",this.item.id)},deleteTodo:function(){this.$emit("deleteTodo",this.item.id)},updateTodo:function(){""!==this.todo.todo&&(this.$$emit("updateTodo",this.item.todo),this.editMode=!1)}}},T=C,j=(n("6959"),Object(l["a"])(T,w,O,!1,null,null,null)),x=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"todo-input"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],attrs:{id:"input_todo",placeholder:"Добавить запись"},domProps:{value:t.todo},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.todo=e.target.value)}}})])},E=[],P={data:function(){return{todo:""}},methods:{addTodo:function(){this.$emit("addTodo",this.todo)}},components:{}},I=P,R=(n("f9ae"),Object(l["a"])(I,$,E,!1,null,null,null)),B=R.exports;function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){Object(f["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var L={data:function(){return{items:[]}},computed:{itemsLength:function(){return this.items.length},getId:function(){return this.itemsLength?this.items[this.itemsLength-1].id+1:1}},methods:{addTodo:function(t){console.log(t),this.items.push({id:this.getId,todo:t,complited:!1})},checkItems:function(t){this.items=this.items.map((function(e){return e.id===t?D(D({},e),{},{complited:!e.complited}):e}))},deleteTodo:function(t){this.items=this.items.filter((function(e){return e.id!==t}))},updateTodo:function(t){this.item=this.item.map((function(e){return items.id==t.id?D({},t):e}))}},components:{TodoList:k,TodoItem:x,TodoInput:B}},U=L,A=Object(l["a"])(U,p,h,!1,null,null,null),H=A.exports,z={name:"home",metaInfo:function(){return{title:this.$title("Menu_Bill")}},data:function(){return{loading:!0,currency:null}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("fetchCurrency");case 2:this.currency=t.sent,this.loading=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{refresh:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$store.dispatch("fetchCurrency");case 3:this.currency=t.sent,this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},components:{HomeBill:m,HomeCurrency:H}},N=z,S=Object(l["a"])(N,i,o,!1,null,null,null);e["default"]=S.exports},e074:function(t,e,n){},f9ae:function(t,e,n){"use strict";n("4202")}}]);
//# sourceMappingURL=chunk-b82aee4c.22d60a87.js.map