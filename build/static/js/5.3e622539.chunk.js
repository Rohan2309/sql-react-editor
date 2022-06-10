(this["webpackJsonpsql-react"]=this["webpackJsonpsql-react"]||[]).push([[5],{22:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));function s(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}},23:function(e,t,a){"use strict";t.a=["regions","categories","customers","employees","order_details","orders","products"]},26:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var s=a(21),r=a(27),c=(a(0),a(22)),n=a(1),l=["children","className"],i=function(e){var t=e.children,a=e.className,s=e.handleClick;return Object(n.jsx)("button",{className:Object(c.a)("bg-primary-dark hover:bg-secondary-dark transition-colors text-white rounded-md font-semibold px-4 py-2 my-4 shadow-lg",a),onClick:s,children:t})},o=function(e){var t=e.children,a=e.className,i=Object(r.a)(e,l);return Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button",className:Object(c.a)("relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",a)},i),{},{children:t}))}},53:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),c=a(2),n=a(40),l=a.n(n),i=a(6),o=a(23),d=function(e){var t=Object(s.useState)([]),a=Object(c.a)(t,2),r=a[0],n=a[1],d=Object(s.useState)(!1),j=Object(c.a)(d,2),b=j[0],u=j[1],x=Object(s.useState)(""),m=Object(c.a)(x,2),h=m[0],p=m[1];return Object(s.useEffect)((function(){var t=performance.now();!function(e){n([]),o.a.find((function(t){return t===e}))?(u(!1),fetch(function(e){return"https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/".concat(e,".csv")}(e),{headers:{Accept:"application/vnd.github.v4+raw"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){return function(e){l.a.promise("SELECT * FROM CSV(?, {headers: false, separator:','})",[e]).then((function(e){n(e),i.b.success("Query run successfully")})).catch((function(e){i.b.error(e.message)}))}(atob(e.content.replace("\n","")))})).catch((function(e){i.b.error(e.message)}))):(u(!0),i.b.error("Please enter a valid query"))}(e);var a=performance.now();p(a-t)}),[e]),{data:r,runtime:h,error:b}},j=a(21),b=a(43),u=a(26),x=(a(47),a(49),a(22),a(1)),m=function(e){var t=e.preGlobalFilteredRows,a=e.globalFilter,r=e.setGlobalFilter,n=(t.length,Object(s.useState)(a)),l=Object(c.a)(n,2);l[0],l[1],Object(b.useAsyncDebounce)((function(e){r(e||void 0)}),200);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("label",{className:"flex gap-x-2 items-baseline"})})},h=function(e){var t=e.columns,a=e.data,s=(e.completeData,e.query,Object(b.useTable)({columns:t,data:a},b.useGlobalFilter,b.useSortBy,b.usePagination)),r=s.getTableProps,c=s.getTableBodyProps,n=s.headerGroups,l=s.page,i=s.prepareRow,o=s.previousPage,d=s.nextPage,h=s.canPreviousPage,p=s.canNextPage,O=s.state,g=(s.setPageSize,s.pageOptions),f=s.gotoPage,v=s.pageCount,w=s.setGlobalFilter,y=s.preGlobalFilteredRows;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"flex justify-between items-center",children:[Object(x.jsx)(m,{preGlobalFilteredRows:y,globalFilter:O.globalFilter,setGlobalFilter:w}),Object(x.jsx)("div",{})]}),Object(x.jsx)("div",{className:"shadow overflow-auto border-b border-gray-200 sm:rounded-lg",children:Object(x.jsxs)("table",Object(j.a)(Object(j.a)({},r()),{},{className:"min-w-full divide-y divide-gray-200",children:[Object(x.jsx)("thead",{className:"bg-primary-dark",children:n.map((function(e){return Object(x.jsx)("tr",Object(j.a)(Object(j.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(x.jsxs)("th",Object(j.a)(Object(j.a)({scope:"col",className:"px-6 py-4 text-left text-xs font-medium text-white  uppercase tracking-wider"},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[Object(x.jsx)("span",{className:" hover:text-gray-300",children:e.render("Header")}),Object(x.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""})]}))}))}))}))}),Object(x.jsx)("tbody",Object(j.a)(Object(j.a)({},c()),{},{className:"bg-white text-black divide-y divide-gray-200",children:l.map((function(e,t){return i(e),Object(x.jsx)("tr",Object(j.a)(Object(j.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(x.jsx)("td",Object(j.a)(Object(j.a)({},e.getCellProps()),{},{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.render("Cell")}))}))}))}))}))]}))}),Object(x.jsxs)("div",{className:"py-3 flex items-center justify-between",children:[Object(x.jsxs)("div",{className:"flex-1 flex justify-between sm:hidden",children:[Object(x.jsx)(u.a,{handleClick:function(){return o()},disabled:!h,children:"Previous"}),Object(x.jsx)(u.a,{handleClick:function(){return d()},disabled:!p,children:"Next"})]}),Object(x.jsxs)("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[Object(x.jsx)("div",{className:"flex gap-x-2",children:Object(x.jsxs)("span",{className:"text-sm text-gray-700",children:["Page ",Object(x.jsx)("span",{className:"font-medium",children:O.pageIndex+1})," of"," ",Object(x.jsx)("span",{className:"font-medium",children:g.length})]})}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsxs)("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:[Object(x.jsxs)(u.b,{className:"rounded-l-md",onClick:function(){return f(0)},disabled:!h,children:[Object(x.jsx)("span",{className:"sr-only",children:"First"}),Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(x.jsx)("title",{id:"pageOne",children:"Go to page one"}),Object(x.jsx)("path",{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})]})]}),Object(x.jsxs)(u.b,{onClick:function(){return o()},disabled:!h,children:[Object(x.jsx)("span",{className:"sr-only",children:"Previous"}),Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(x.jsx)("title",{id:"previousPage",children:"Go to previous page"}),Object(x.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})]})]}),Object(x.jsxs)(u.b,{onClick:function(){return d()},disabled:!p,children:[Object(x.jsx)("span",{className:"sr-only",children:"Next"}),Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(x.jsx)("title",{id:"nextPage",children:"Go to next page"}),Object(x.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})]})]}),Object(x.jsxs)(u.b,{className:"rounded-r-md",onClick:function(){return f(v-1)},disabled:!p,children:[Object(x.jsx)("span",{className:"sr-only",children:"Last"}),Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(x.jsx)("title",{id:"lastPage",children:"Go to last page"}),Object(x.jsx)("path",{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}),Object(x.jsx)("path",{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"})]})]})]})})]})]})]})},p=a(5),O=r.a.memo((function(e){var t=e.query,a=e.isOpen,r=d(t),c=r.data,n=(r.runtime,r.error),l=Object(s.useMemo)((function(){if(c.length>0)return Object.keys(c[0]).map((function(e){return{Header:c[0][e].replace(/([A-Z]+)/g," $1").replace(/([A-Z][a-z])/g," $1"),accessor:e}}))}),[c]),i=Object(s.useMemo)((function(){return c.slice(1)}),[c]);return n?Object(x.jsx)("section",{className:"".concat(a?"col-start-2":"col-start-1"," col-end-3 row-start-3 row-end-4 text-white m-6"),children:Object(x.jsx)("h1",{className:"text-right font-bold text-xl text-primary-dark",children:"Invalid Input"})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("section",{className:"".concat(a?"col-start-2":"col-start-1"," col-end-3 row-start-3 row-end-4 text-white mx-6 my-12 lg:mx-12 overflow-hidden"),children:c.length>0?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(h,{columns:l,completeData:c,data:i,query:t})}):Object(x.jsx)("img",{src:p.a,className:"w-20 mx-auto",alt:"loader"})})})}));t.default=O}}]);
//# sourceMappingURL=5.3e622539.chunk.js.map