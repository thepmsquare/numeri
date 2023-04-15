(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7443)}])},7443:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return E}});var t=n(5893),a=n(7294),i=n(3321),s=n(8862),o=n(1703),l=n(44),u=n(3943),c=n(6893),d=n(7109),m=n(6242),h=n(4267),f=n(3946),v=n(1458),x=n(6628),b=n(1265),p=n(1927),y=n(3343),j=n(7840),_=n.n(j),C=JSON.parse('[{"order":1,"text":"The Roman numerals are derived from the Etruscan number symbols: \'\ud800\udf20\', \'\ud800\udf21\', \'\ud800\udf22\', \'\ud800\udf23\', and \'\ud800\udf1f\' for 1, 5, 10, 50, and 100."},{"order":2,"text":"From the 14th century on, Roman numerals began to be replaced by Arabic numerals."},{"order":3,"text":"The number zero was missing from the classical Roman numeral system and was later represented by nulla / N."},{"order":4,"text":"The base \'Roman fraction\' is S, indicating 1/2."},{"order":5,"text":"Apostrophus, Vinculum and other extension systems designed to indicate larger numbers were never standardised."},{"order":6,"text":"The largest number that can be represented in this notation is 3,999 (MMMCMXCIX)"},{"order":7,"text":"Subtractive notation is when the first symbol is subtracted from the larger one. Example: IV is 5 - 1 = 4."},{"order":8,"text":"These are the only subtractive forms in standard use:4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD), 900 (CM)."},{"order":9,"text":"Decimal system  was developed centuries before the Arabic numerals in the Indian subcontinent, using other symbols."},{"order":10,"text":"The Number Forms block of the Unicode character set has a number of Roman numeral symbols in the range of code points from U+2160 to U+2188."}]'),Z="#ffb300",g=(0,b.Z)({palette:{primary:{main:Z},text:{primary:"#8e001c"},background:{paper:Z}},typography:{fontFamily:"Roboto Slab"}}),I={1:"I",4:"IV",5:"V",9:"IX",10:"X",40:"XL",50:"L",90:"XC",100:"C",400:"CD",500:"D",900:"CM",1e3:"M"},N=Object.keys(I).map((function(e){return parseInt(e)})).sort((function(e,r){return r-e})),w=function(e){if(e>3999)return"invalid";var r="",n=!0,t=!1,a=void 0;try{for(var i,s=N[Symbol.iterator]();!(n=(i=s.next()).done);n=!0)for(var o=i.value;e>=o;)e-=o,r+=I[o]}catch(l){t=!0,a=l}finally{try{n||null==s.return||s.return()}finally{if(t)throw a}}return r},T=function(e){var r=0,n=e,t=!0,a=!1,i=void 0;try{for(var s,o=N[Symbol.iterator]();!(t=(s=o.next()).done);t=!0)for(var l=s.value;e.startsWith(I[l]);)e=e.slice(I[l].length),r+=l}catch(u){a=!0,i=u}finally{try{t||null==o.return||o.return()}finally{if(a)throw i}}return 0===r||n!==w(r)?"invalid":r};function E(){var e,r=(0,a.useState)(0),n=r[0],b=r[1],j=(0,a.useState)(""),E=j[0],S=j[1],k=(0,a.useState)(""),X=k[0],R=k[1],P=(0,a.useState)(0),A=P[0],M=P[1],O=(0,a.useState)(0),V=O[0],U=O[1];return(0,a.useEffect)((function(){var e=C.length-1,r=setInterval((function(){return U((function(r){return 100===r?(M((function(r){return r===e?0:r+1})),0):r+5})),function(){return clearInterval(r)}}),500)}),[]),(0,t.jsx)(a.StrictMode,{children:(0,t.jsx)(p.Z,{theme:g,children:(0,t.jsxs)("main",{className:_().main,children:[(0,t.jsx)(s.Z,{variant:"h1",color:Z,className:_().header,children:"numeri"}),(0,t.jsxs)("div",{className:_().tabsContainer,children:[(0,t.jsxs)(o.Z,{value:n,onChange:function(e,r){return b(r)},textColor:"primary",variant:"fullWidth",children:[(0,t.jsx)(l.Z,{label:"Arabic to Roman"}),(0,t.jsx)(l.Z,{label:"Roman to Arabic"})]}),0===n&&(0,t.jsxs)("div",{className:_().tab,children:[(0,t.jsx)(u.Z,{label:"Enter Arabic Numeral",variant:"outlined",type:"number",InputProps:{inputProps:{min:1,max:3999},endAdornment:E&&(0,t.jsx)(d.Z,{position:"end",children:(0,t.jsx)(f.Z,{color:"primary",onClick:function(){S("")},children:(0,t.jsx)(y.Z,{})})})},value:E,onChange:function(e){return S(e.target.value)}}),E&&parseInt(E)>=1&&parseInt(E)<=3999&&(0,t.jsx)(i.Z,{variant:"outlined",color:"primary",onClick:function(){navigator.clipboard.writeText(w(parseInt(E)))},children:w(parseInt(E))}),E&&(parseInt(E)<1||parseInt(E)>3999)&&(0,t.jsx)(i.Z,{variant:"outlined",color:"primary",children:"Numbers from 1 to 3999 only"})]}),1===n&&(0,t.jsxs)("div",{className:_().tab,children:[(0,t.jsx)(u.Z,{label:"Enter Roman Numeral",variant:"outlined",value:X,InputProps:{endAdornment:X&&(0,t.jsx)(d.Z,{position:"end",children:(0,t.jsx)(f.Z,{color:"primary",onClick:function(){R("")},children:(0,t.jsx)(y.Z,{})})})},onChange:function(e){return R(e.target.value.toUpperCase())}}),(0,t.jsx)("div",{className:_().assistButtonsParent,children:N.map((function(e){return(0,t.jsx)(c.Z,{title:e,children:(0,t.jsx)(i.Z,{onClick:function(){return R(X+I[e])},children:I[e]})},I[e])}))}),X&&(0,t.jsx)(i.Z,{variant:"outlined",color:"primary",onClick:function(){navigator.clipboard.writeText(T(X).toString())},children:T(X)})]})]}),(0,t.jsxs)(m.Z,{className:_().triviaCard,children:[(0,t.jsx)(v.Z,{variant:"determinate",value:V}),(0,t.jsx)(h.Z,{children:(0,t.jsx)(x.Z,{in:0!=V,mountOnEnter:!0,unmountOnExit:!0,children:(0,t.jsx)(s.Z,{className:_().triviaCardText,children:0!=V&&(null===(e=null===C||void 0===C?void 0:C.find((function(e){return e.order===A+1})))||void 0===e?void 0:e.text)})})})]})]})})})}},7840:function(e){e.exports={main:"styles_main__luRPU",header:"styles_header__KTjn4",tabsContainer:"styles_tabsContainer__VeJEH",tab:"styles_tab__Y0wje",triviaCard:"styles_triviaCard__oYgse",triviaCardText:"styles_triviaCardText__OYljT",assistButtonsParent:"styles_assistButtonsParent__4jcK_"}}},function(e){e.O(0,[72,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);