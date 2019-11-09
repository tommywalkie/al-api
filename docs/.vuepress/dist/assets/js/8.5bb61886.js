(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ships"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ships"}},[t._v("#")]),t._v(" Ships")]),t._v(" "),a("p",[t._v("Used to get ships from a specific rarity, type or affiliation.")]),t._v(" "),a("p",[a("strong",[t._v("URL")]),t._v(" : "),a("code",[t._v("/ships")])]),t._v(" "),a("p",[a("strong",[t._v("URL Parameters")]),t._v(" :")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("orderBy=[string]")]),t._v(" can be one of "),a("code",[t._v("rarity")]),t._v(", "),a("code",[t._v("type")]),t._v(" or "),a("code",[t._v("affiliation")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("rarity=[string]")]),t._v(" depending on what you used in orderBy, this is which rarity.")]),t._v(" "),a("li",[a("code",[t._v("type=[string]")]),t._v(" depending on what you used in orderBy, this is which type.")]),t._v(" "),a("li",[a("code",[t._v("affiliation=[string]")]),t._v(" depending on what you used in orderBy, this is which affiliation.")])]),t._v(" "),a("p",[a("strong",[t._v("Method")]),t._v(" : "),a("code",[t._v("GET")])]),t._v(" "),a("p",[a("strong",[t._v("Auth required")]),t._v(" : NO")]),t._v(" "),a("h2",{attrs:{id:"success-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#success-response"}},[t._v("#")]),t._v(" Success Response")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("200 OK")])]),t._v(" "),a("p",[a("strong",[t._v("Content return types")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://azurlane-api.appspot.com/v1/ships?orderBy=affiliation&affiliation=Sardegna%20Empire",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://azurlane-api.appspot.com/v1/ships?orderBy=affiliation&affiliation=Sardegna%20Empire"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ship")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    statusCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    statusMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ships"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Ship"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"error-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-response"}},[t._v("#")]),t._v(" Error Response")]),t._v(" "),a("p",[a("strong",[t._v("Condition")]),t._v(" : If something server-side goes wrong.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("500 Internal Server Error")])]),t._v(" "),a("p",[a("strong",[t._v("Content return types")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ErrorResponse")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    statusCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    statusMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Condition")]),t._v(" : Bad request param.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("400 Bad Request")])]),t._v(" "),a("p",[a("strong",[t._v("Content return types")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ErrorResponse")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    statusCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    statusMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);