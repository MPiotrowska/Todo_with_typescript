(this["webpackJsonptodo-app-with-typescript"]=this["webpackJsonptodo-app-with-typescript"]||[]).push([[0],{15:function(t,e,r){"use strict";r.r(e);var n=r(8),o=r(5),c=r(9),i=r(3),a=r(1),s=r.n(a),u=r(0),d={todos:[]},l=Object(a.createContext)(void 0);function b(t,e){switch(e.type){case"ADD":return Object(i.a)(Object(i.a)({},t),{},{todos:[].concat(Object(c.a)(t.todos),[e.payload])});case"DELETE":return Object(i.a)(Object(i.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==e.payload}))});default:return t}}function p(t){var e=t.children,r=Object(a.useReducer)(b,d),n=Object(o.a)(r,2),c={state:n[0],dispatch:n[1]};return Object(u.jsx)(l.Provider,{value:c,children:e})}function j(){var t=s.a.useContext(l);if(void 0===t)throw new Error("useTodo must be used within a TodoProvider");return t}var f=r.p+"static/media/recycle-bin.d5138f4b.svg",h=function(){var t=j(),e=t.state.todos,r=t.dispatch;return e.length>0?Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsxs)("li",{className:" flex justify-between mt-4 p-3 rounded text-white transition duration-500 ease-in-out bg-gradient-to-r from-purple-600 via-pink-600 to-red-500  transform hover:-translate-y-1 hover:scale-110 ",children:[t.title,Object(u.jsx)("button",{onClick:function(){return e=t.id,r(function(t){return{type:"DELETE",payload:t}}(e));var e},children:Object(u.jsx)("img",{src:f,alt:"bin",className:"w-4 h-4"})})]},t.id)}))}):Object(u.jsx)("h2",{className:"text-white pt-4",children:"No Todo's!"})},x=(r(7),function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),r=e[0],n=e[1],c=j().dispatch;return Object(u.jsxs)("form",{onSubmit:function(t){(t.preventDefault(),""!==r.trim())&&(c({type:"ADD",payload:{id:(new Date).getTime().toString(),title:r,active:!0}}),n(""))},className:" mb-2 pt-2 flex justify-center ",children:[Object(u.jsx)("input",{className:"text-white h-9 p-3 bg-gray-900 border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",type:"text",value:r,onChange:function(t){n(t.currentTarget.value)},placeholder:"Add to do"}),Object(u.jsx)("button",{className:"text-white bg-gradient-to-r from-purple-500 to-indigo-600  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 h-9 w-20 ",type:"submit",children:"Add"})]})}),m=function(){return Object(u.jsx)("div",{className:"w-full p-6  h-screen  bg-indigo-600 ",children:Object(u.jsxs)("div",{className:"bg-gray-900 p-6 max-w-md mx-auto rounded-xl shadow-md flex flex-col",children:[Object(u.jsx)("div",{className:" mb-2 font-bold text-3xl  text-white flex justify-center",children:"Plan your day"}),Object(u.jsx)(x,{}),Object(u.jsx)(h,{})]})})};function O(){return Object(u.jsx)(p,{children:Object(u.jsx)(m,{})})}var g=document.getElementById("root");Object(n.render)(Object(u.jsx)(O,{}),g)},7:function(t,e,r){}},[[15,1,2]]]);
//# sourceMappingURL=main.0502ea00.chunk.js.map