(function(t){function e(e){for(var s,r,n=e[0],c=e[1],l=e[2],d=0,m=[];d<n.length;d++)r=n[d],i[r]&&m.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-hotel-reservation/dist/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1bd2":function(t,e,a){t.exports=a.p+"img/holly-stratton-PhwbTwdZ3f4-unsplash.813ea023.png"},"3fb9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header"},[a("div",{staticClass:"wrap"},[a("h1",{staticClass:"logo"},[t._v(":OR")]),a("div",{staticClass:"menu"},[a("router-link",{staticClass:"menu-link",attrs:{to:"home"}},[t._v("HOME")]),a("a",{staticClass:"menu-link",attrs:{href:"javascript:;"}},[t._v("ROOMS")])],1)])]),a("div",{staticClass:"main",class:{"is-show":t.$store.state.loading}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("footer",{staticClass:"footer"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"mainFooter"},[a("div",{staticClass:"footer-item logo"},[t._v(":OR")]),t._m(0),a("div",{staticClass:"footer-item sitmap"},[a("router-link",{staticClass:"sitmap-link",attrs:{to:"home"}},[t._v("HOME")]),a("a",{staticClass:"sitmap-link",attrs:{href:"javascript:;"}},[t._v("ROOMS")])],1),t._m(1)]),a("div",{staticClass:"copyright"},[t._v("Copyright © 2019 :OR All Rights Reserved.")])])]),a("Modal",{model:{value:t.$store.state.lightbox,callback:function(e){t.$set(t.$store.state,"lightbox",e)},expression:"$store.state.lightbox"}},[a("div",{staticClass:"lightBox"},[a("div",{staticClass:"lightBox-header"},[a("a",{staticClass:"close-btn",attrs:{href:"javascript:;"},on:{click:t.closeLightBox}},[t._v("close")])]),a("div",{staticClass:"lightBox-title"},[t._v("訂房完成")]),a("div",{staticClass:"lightBox-body"},[a("p",[t._v("您已預定完成，詳細內容將傳送簡訊至您的手機。")]),a("dl",[a("dt",[t._v("NAME")]),a("dd",[t._v(t._s(t.$store.state.order.name))])]),a("dl",[a("dt",[t._v("TEL.")]),a("dd",[t._v(t._s(t.$store.state.order.tel))])]),a("dl",[a("dt",[t._v("ROOMS")]),a("dd",[t._v(t._s(t.$store.state.order.roomName))])]),a("dl",[a("dt",[t._v("DATE")]),a("dd",[t._v(t._s(t.$store.state.order.date))])])]),a("div",{staticClass:"lightBox-footer"},[a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:t.closeLightBox}},[t._v("完成")])])])]),a("Loading",{attrs:{text:"Loading",loading:t.$store.state.loading}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-item contact"},[a("p",{staticClass:"icon-place"},[t._v("50 Nathan Road,Tsimshatsui, Kowloon Hong Kong")]),a("p",{staticClass:"icon-phone"},[t._v("+886-900-000-000")]),a("p",{staticClass:"icon-email"},[t._v("or_hotel@gmail.com")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-item media"},[a("a",{staticClass:"media-link icon-facebook",attrs:{href:"javascript:;",title:"Facebook"}},[t._v("Facebook")]),a("a",{staticClass:"media-link icon-twitter",attrs:{href:"javascript:;",title:"Twitter"}},[t._v("Twitter")]),a("a",{staticClass:"media-link icon-instagram",attrs:{href:"javascript:;",title:"Instagram"}},[t._v("Instagram")])])}],r=a("6511"),n=a("5961"),c=a("bc3a"),l=a.n(c),u={data:function(){return{}},components:{home:r["default"],room:n["default"]},created:function(){var t=this;l.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:{accept:"application/json",Authorization:"Bearer FEHYikSsoJvXjqurOCdQ3nfnpY6i579Hjh7K7ToTmJ11tB7tuiexfHE9uxp8"}}).then(function(e){t.$store.dispatch("getRoomsAllData",e.data.items),t.$store.state.loading=!1}).catch(function(e){t.$store.state.loading=!1,console.log(e)})},methods:{closeLightBox:function(){this.$store.state.lightbox=!1}}},d=u,m=(a("5c0b"),a("2877")),f=Object(m["a"])(d,i,o,!1,null,null,null),h=f.exports,v=a("8c4f");s["default"].use(v["a"]);var p=new v["a"]({routes:[{path:"/home",name:"home",props:!0,component:function(){return Promise.resolve().then(a.bind(null,"6511"))},meta:{title:""}},{path:"/room",name:"room",props:!0,component:function(){return Promise.resolve().then(a.bind(null,"5961"))},meta:{title:""}},{path:"*",redirect:"/home"}]}),b=(a("7f7f"),a("ac6a"),a("2f62"));s["default"].use(b["a"]);var g=new b["a"].Store({state:{rooms:[],loading:!0,lightbox:!1,order:{name:"",tel:"",date:"",roomName:""}},actions:{getRoomsAllData:function(t,e){t.commit("PUSHROOMSITEM",e)},getBooksOrder:function(t,e){t.commit("PUSHBOOKSITEM",e)}},mutations:{PUSHROOMSITEM:function(t,e){e.forEach(function(e){t.rooms.push(e)})},PUSHBOOKSITEM:function(t,e){t.order.name=e.booking[0].name,t.order.tel=e.booking[0].tel,t.order.date=e.booking[0].date,t.order.roomName=e.room[0].name}}}),k=a("caf9"),_=a("d54e"),C=a.n(_);a("5e5f"),s["default"].use(C.a),s["default"].config.productionTip=!1,s["default"].use(k["a"],{preLoad:1.3,attempt:1}),new s["default"]({router:p,store:g,render:function(t){return t(h)}}).$mount("#app")},5961:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("Album",{attrs:{imageUrl:this.room.imageUrl}})],1),a("div",{staticClass:"container"},[a("div",{staticClass:"article"},[a("h2",{staticClass:"title"},[t._v(t._s(this.room.name))]),a("p",[t._v(t._s(this.room.description))]),a("div",{staticClass:"price-block"},[a("div",{staticClass:"price-item"},[t._v("平日每晚 $ "+t._s(t.toCurrency(this.room.normalDayPrice)))]),a("div",{staticClass:"price-item"},[t._v("假日每晚 $ "+t._s(t.toCurrency(this.room.holidayPrice)))])]),a("ul",{staticClass:"descriptionShort"},[a("li",[t._v("客房人數限制："+t._s(this.getGuestNumber))]),a("li",[t._v("房間大小："+t._s(this.room.descriptionShort.Footage))]),a("li",[t._v("床型："+t._s(this.getBedClassName))]),a("li",[t._v("checkIn 時間："+t._s(this.room.checkInAndOut.checkInEarly)+" - "+t._s(this.room.checkInAndOut.checkInLate))]),a("li",[t._v("衛浴數量："+t._s(this.room.descriptionShort["Private-Bath"]))]),a("li",[t._v("checkOut 時間："+t._s(this.room.checkInAndOut.checkOut))])]),a("ul",{staticClass:"amenitiesList"},t._l(this.room.amenitiesList,function(e,s){return a("li",{key:s},[a("div",{staticClass:"amenities-item",class:{current:e[1]}},[t._v(t._s(e[0]))])])}),0)]),a("div",{staticClass:"aside"},[a("h2",{staticClass:"aside-title"},[t._v("BOOK NOW")]),a("BooksForm",{attrs:{room:t.room,booking:t.booking}})],1)])],1)},i=[],o=(a("55dd"),a("a481"),a("6b54"),a("456d"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"album"},[a("figure",{staticClass:"album-image"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.currentImage,expression:"currentImage"}]})]),a("ul",{staticClass:"albumList"},t._l(this.imageList,function(e,s){return a("li",{key:s,class:{current:e===t.currentImage}},[a("a",{staticClass:"albumList-image",attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.selectCurrentImage(e)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}]})])])}),0)])}),r=[],n={data:function(){return{imageList:[],currentImage:""}},name:"Album",props:{imageUrl:Array},methods:{selectCurrentImage:function(t){this.currentImage=t}},watch:{imageUrl:{deep:!0,handler:function(t,e){this.imageList=t,this.currentImage=this.imageList[0]}}}},c=n,l=(a("bbe3"),a("2877")),u=Object(l["a"])(c,o,r,!1,null,"9e5753e8",null),d=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"booksform"},[a("div",{staticClass:"booksform-body"},[a("div",{staticClass:"fieldset"},[a("label",{attrs:{for:"booksName"}},[t._v("NAME")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"ctrl-input",attrs:{type:"text",id:"booksName"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"fieldset"},[a("label",{attrs:{for:"booksTel"}},[t._v("TEL")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.tel,expression:"form.tel",modifiers:{trim:!0}}],staticClass:"ctrl-input",attrs:{type:"text",id:"booksTel"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"fieldset"},[a("label",{attrs:{for:"booksRooms"}},[t._v("ROOMS")]),a("input",{staticClass:"ctrl-input",attrs:{type:"text",id:"booksRooms",placeholder:t.room.name,disabled:""}})]),a("div",{staticClass:"fieldset col-50"},[a("label",{attrs:{for:""}},[t._v("CHECK IN")]),a("DatePicker",{attrs:{placeholder:"請選擇開始日期",option:{start:t.datepicker.dateStart,disabled:t.datepicker.disabled},readonly:!0},model:{value:t.checkInDate,callback:function(e){t.checkInDate=e},expression:"checkInDate"}})],1),a("div",{staticClass:"fieldset col-50"},[a("label",{attrs:{for:""}},[t._v("CHECK OUT")]),a("DatePicker",{attrs:{placeholder:"請選擇結束日期",option:{start:t.datepicker.checkoutStart,disabled:t.datepicker.disabled},readonly:!0,disabled:t.datepicker.checkoutDisabled},model:{value:t.checkOutDate,callback:function(e){t.checkOutDate=e},expression:"checkOutDate"}})],1)]),a("div",{staticClass:"booksform-footer"},[a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.checkBooksform()}}},[t._v("立即預訂")])])])},f=[],h=(a("7f7f"),a("28a5"),a("f026")),v=a.n(h),p=a("bc3a"),b=a.n(p),g={data:function(){var t=this;return{checkInDate:"",checkOutDate:"",disabledDate:[],datepicker:{dateStart:v()().add(0,v.a.DAY),disabled:function(e){return t.disabledDate.indexOf(e.format())>=0},checkoutStart:v()().add(0,v.a.DAY),checkoutDisabled:!0},form:{name:"",tel:""}}},name:"BooksForm",props:{room:Object,booking:Array},components:{},created:function(){},mounted:function(){},methods:{toDateObj:function(t){var e=t.split("-"),a=new Date(e[0],e[1]-1,e[2]);return a},getBookDates:function(t,e){var a=[],s=0,i=this.toDateObj(t),o=this.toDateObj(e);while(o.getTime()-i.getTime()>=0){var r=i.getFullYear(),n=1==(i.getMonth()+1).toString().length?"0"+(i.getMonth()+1).toString():(i.getMonth()+1).toString(),c=1==i.getDate().toString().length?"0"+i.getDate():i.getDate();a[s]=r+"-"+n+"-"+c,i.setDate(i.getDate()+1),s+=1}return a},valBooksName:function(t){var e=/^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/;return!(!e.test(t)||0==t)},valTelNumber:function(t){var e=/^\d{10,11}$/;return!(!e.test(t)||0==t)},checkBooksform:function(){var t=this,e="請填妥正確的訂單格式",a={name:!1,tel:!1,date:!1},s={name:"",tel:"",date:[]};a.name=this.valBooksName(this.form.name),a.tel=this.valTelNumber(this.form.tel),""===this.checkInDate&&""===this.checkOutDate?a.date=!1:(s.date=this.getBookDates(this.checkInDate,this.checkOutDate),s.date.length<2?(a.date=!1,e="訂房天數至少一晚以上"):(e="您所選擇的日期已經被預訂",a.date=s.date.every(function(e){return t.disabledDate.indexOf(e)<0}))),!1===a.name||!1===a.tel||!1===a.date?this.$Message({type:"error",text:e}):(s.name=this.form.name,s.tel=this.form.tel,this.sendBooksOrder(s))},sendBooksOrder:function(t){var e=this;b()({method:"POST",url:"https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(this.room.id),headers:{accept:"application/json",Authorization:"Bearer FEHYikSsoJvXjqurOCdQ3nfnpY6i579Hjh7K7ToTmJ11tB7tuiexfHE9uxp8"},data:t}).then(function(t){e.$store.dispatch("getBooksOrder",t.data),e.$store.state.lightbox=!0,e.checkInDate="",e.checkOutDate="",e.form.name="",e.form.tel=""}).catch(function(t){e.$Message({type:"error",text:"訂房失敗，此段時間無法預定"}),console.log(t)})}},computed:{},watch:{checkInDate:function(t){""==!t?(this.datepicker.checkoutDisabled=!1,this.datepicker.checkoutStart=v()(t).add(1,v.a.DAY)):(this.datepicker.checkoutDisabled=!0,this.datepicker.checkoutStart=v()().add(0,v.a.DAY))},booking:{deep:!0,handler:function(t,e){this.disabledDate=t}}}},k=g,_=(a("bd92"),Object(l["a"])(k,m,f,!1,null,"933898a6",null)),C=_.exports,O={data:function(){return{room:{checkInAndOut:{checkInEarly:"00:00",checkInLate:"00:00",checkOut:"00:00"},descriptionShort:{GuestMax:"-",Footage:"-","Private-Bath":"-",Bed:[]},amenitiesList:[]},booking:[]}},name:"room",components:{Album:d,BooksForm:C},created:function(){var t=this;this.$store.state.loading=!0,b.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(this.$route.query.id),{headers:{accept:"application/json",Authorization:"Bearer FEHYikSsoJvXjqurOCdQ3nfnpY6i579Hjh7K7ToTmJ11tB7tuiexfHE9uxp8"}}).then(function(e){t.room=e.data.room[0],e.data.booking.forEach(function(e){t.booking.push(e.date)}),t.setAenitiesList(),t.$store.state.loading=!1}).catch(function(t){console.log(t)})},methods:{setAenitiesList:function(){var t=this.room.amenities;this.room.amenitiesList=Object.keys(t).map(function(e){var a="";switch(e){case"Wi-Fi":a="Wifi";break;case"Room-Service":a="Room Service";break;case"Refrigerator":a="冰箱";break;case"Smoke-Free":a="可吸菸";break;case"Mini-Bar":a="Mini Bar";break;case"Television":a="電視";break;case"Sofa":a="沙發";break;case"Child-Friendly":a="適合兒童";break;case"Breakfast":a="早餐";break;case"Air-Conditioner":a="空調";break;case"Great-View":a="景觀";break;case"Pet-Friendly":a="寵物攜帶";break;default:a=e}return[a,t[e]]})},toCurrency:function(t){"number"===typeof t&&(t=t.toString());var e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1,$2");return t}},computed:{getBedClassName:function(){var t="",e=this.room.descriptionShort.Bed,a=e.sort(function(t,e){return t-e}),s="";return a.forEach(function(e){if(e!==s){var i=a.filter(function(t){return t===e}),o="";switch(e){case"Single":o="單人床";break;case"Small Double":o="小型雙人床";break;case"Double":o="雙人床";break;case"Queen":o="豪華雙人床";break;default:o=e}t+="".concat(o," x ").concat(i.length),s=e}}),t},getGuestNumber:function(){return this.room.descriptionShort.GuestMin===this.room.descriptionShort.GuestMax?"".concat(this.room.descriptionShort.GuestMax," 人"):"".concat(this.room.descriptionShort.GuestMin," - ").concat(this.room.descriptionShort.GuestMax," 人")}}},y=O,x=(a("6847"),Object(l["a"])(y,s,i,!1,null,"34bd98b2",null));e["default"]=x.exports},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),i=a.n(s);i.a},"5e27":function(t,e,a){},6511:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"banner"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("1bd2"),expression:"require('../../public/img/holly-stratton-PhwbTwdZ3f4-unsplash.png')"}]})]),t._m(0),s("h2",{staticClass:"title"},[t._v("ENJOY YOUR STAY")]),s("div",{staticClass:"subtitle"},[t._v("PERFECT PLACE FOR HOLIDAY")]),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("RoomsList")],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"desc-block"},[a("div",{staticClass:"desc-item"},[a("div",{staticClass:"desc-title icon-place"},[t._v("UPCOMING NEIGHBORHOODS")]),a("p",[t._v("Tourist Attractions, Industrial Park, College, Hospital, Airport, Major Cross Road For Through Traffic, etc")])]),a("div",{staticClass:"desc-item"},[a("div",{staticClass:"desc-title icon-train"},[t._v("TRANSPORTATION CONNECTIVITY")]),a("p",[t._v("Roads, Taxi, Metro, Subway, Buses, Trains, Walking, Bicycle Paths, etc")])])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"roomsList"},t._l(t.$store.state.rooms,function(e,s){return a("li",{key:s},[a("div",{staticClass:"roomsList-item"},[a("figure",{staticClass:"roomsList-image"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imageUrl,expression:"item.imageUrl"}]})]),a("div",{staticClass:"roomsList-heading"},[a("div",{staticClass:"roomsList-title"},[t._v(t._s(e.name))]),a("router-link",{staticClass:"roomsList-link",attrs:{to:{path:"room",query:{id:e.id}}}},[t._v("MORE")])],1)])])}),0)},r=[],n={data:function(){return{}},name:"RoomsList",props:{},created:function(){},mounted:function(){},methods:{},watch:{}},c=n,l=(a("a46d"),a("2877")),u=Object(l["a"])(c,o,r,!1,null,"1bd86294",null),d=u.exports,m={data:function(){return{}},name:"home",components:{RoomsList:d},created:function(){},mounted:function(){},methods:{},watch:{}},f=m,h=(a("c86a"),Object(l["a"])(f,s,i,!1,null,"726ca130",null));e["default"]=h.exports},6847:function(t,e,a){"use strict";var s=a("8fbf"),i=a.n(s);i.a},7442:function(t,e,a){},"8fbf":function(t,e,a){},a46d:function(t,e,a){"use strict";var s=a("b45f"),i=a.n(s);i.a},b45f:function(t,e,a){},bbe3:function(t,e,a){"use strict";var s=a("7442"),i=a.n(s);i.a},bd92:function(t,e,a){"use strict";var s=a("ff59"),i=a.n(s);i.a},c86a:function(t,e,a){"use strict";var s=a("3fb9"),i=a.n(s);i.a},ff59:function(t,e,a){}});
//# sourceMappingURL=app.778393fd.js.map