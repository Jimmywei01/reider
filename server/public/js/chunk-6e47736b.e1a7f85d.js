(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e47736b"],{"07ac":function(t,e,a){var n=a("23e7"),i=a("6f53").values;n({target:"Object",stat:!0},{values:function(t){return i(t)}})},"0eed":function(t,e,a){},4760:function(t,e,a){"use strict";a("d6e6")},"6b1a":function(t,e,a){},"6f53":function(t,e,a){var n=a("83ab"),i=a("df75"),r=a("fc6a"),s=a("d1e7").f,o=function(t){return function(e){var a,o=r(e),c=i(o),l=c.length,u=0,h=[];while(l>u)a=c[u++],n&&!s.call(o,a)||h.push(t?[a,o[a]]:o[a]);return h}};t.exports={entries:o(!0),values:o(!1)}},"8ca3":function(t,e,a){"use strict";a("cc69")},a9ed:function(t,e,a){},ac01:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:24}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("i",{staticClass:"el-icon-user"})]),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" 會員 ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.memberNumber,duration:3e3}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-bicycle"},[a("i",{staticClass:"el-icon-bicycle"})]),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" 車款 ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.motoNumber,duration:3500}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("i",{staticClass:"el-icon-tickets"})]),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" 訂單 ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.orderNumber,duration:3e3}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[a("i",{staticClass:"el-icon-school"})]),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" 商店 ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.storeNumber,duration:3e3}})],1)])])],1)},i=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("ec1b")),s=a.n(r),o={components:{CountTo:s.a},data:function(){return{memberNumber:null,motoNumber:null,orderNumber:null,storeNumber:null}},mounted:function(){this.getElementData()},methods:{getElementData:function(){var t=this,e=this.$store.getters.members,a=this.$store.getters.motos,n=this.$store.getters.orders,i=this.$store.getters.stores;Promise.all([e,a,n,i]).then((function(e){t.memberNumber=e[0].length||0,t.motoNumber=e[1].length||0,t.orderNumber=e[2].length||0,t.storeNumber=e[3].length||0}))}}},c=o,l=(a("8ca3"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"5e885254",null);e["a"]=u.exports},c124:function(t,e,a){"use strict";a("e78f")},c26a:function(t,e,a){},cc69:function(t,e,a){},d6e6:function(t,e,a){},dbe3:function(t,e,a){"use strict";a("6b1a")},e079:function(t,e,a){"use strict";a("c26a")},e687:function(t,e,a){"use strict";a("a9ed")},e78f:function(t,e,a){},e81a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chartArea"},[a("PanelGroup"),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,lg:12}},[a("OrderChart")],1),a("el-col",{attrs:{xs:24,sm:12,lg:12}},[a("PieChart")],1),a("el-col",{attrs:{xs:24,sm:12,lg:12}},[a("MotoStoreChart")],1),a("el-col",{attrs:{xs:24,sm:12,lg:12}},[a("MotoCatalogChart")],1)],1)],1)},i=[],r=a("ac01"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"line_container"},[a("div",{ref:"main",staticClass:"chart"})])},o=[],c=(a("4160"),a("fb6a"),a("a9e3"),a("159b"),a("96cf"),a("1da1")),l={name:"OrderChart",data:function(){return{member:"",moto:"",order:"",chart:null,barData:[],counts:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},option:{title:{left:"center"},tooltip:{},legend:{data:["月訂單數量"]},xAxis:{data:["1month","2month","3month","4month","5month","6month","7month","8month","9month","10month","11month","12month"]},yAxis:{},series:[{name:"月訂單數量",type:"line",barMaxWidth:"20%",data:[]}]}}},created:function(){null!==this.chart&&""!==this.chart&&void 0!==this.chart&&(this.chart.dispose(),this.chart=null)},mounted:function(){this.getChartData()},methods:{getChartData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.getters.orders;case 2:a=e.sent,n=[],a.forEach((function(t){n.push(t.orderDate)})),t.filterDate(n);case 6:case"end":return e.stop()}}),e)})))()},filterDate:function(t){var e=[];t.forEach((function(t){e.push(t.slice(5,7))}));for(var a=0;a<e.length;a++){var n=Number(e[a]);this.counts[n]=this.counts[n]?this.counts[n]+1:1}this.option.series[0].data.push(this.counts[1],this.counts[2],this.counts[3],this.counts[4],this.counts[5],this.counts[6],this.counts[7],this.counts[8],this.counts[9],this.counts[10],this.counts[11],this.counts[12]),this.initChar()},initChar:function(){var t=this;this.chart=this.$echarts.init(this.$refs.main),this.chart.setOption(this.option),window.addEventListener("resize",(function(){t.chart.resize()}))}}},u=l,h=(a("4760"),a("2877")),d=Object(h["a"])(u,s,o,!1,null,"397cd804",null),m=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pie_container"},[a("div",{ref:"main",staticClass:"chart"})])},p=[],v={name:"PieChart",data:function(){return{chart:null,counts:{},option:{title:{text:"區域訂單",top:5,left:0,textStyle:{fontSize:15}},tooltip:{},series:[{name:"店家訂單數量",type:"pie",radius:["40%","70%"],data:[]}]}}},created:function(){null!==this.chart&&""!==this.chart&&void 0!==this.chart&&(this.chart.dispose(),this.chart=null)},mounted:function(){this.getChartData()},methods:{getChartData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.getters.stores;case 2:a=e.sent,a.forEach((function(e,a,n){t.option.series[0].data.push({value:n[a].storeOrder,name:n[a].storeName})})),t.initChar();case 5:case"end":return e.stop()}}),e)})))()},initChar:function(){var t=this;this.chart=this.$echarts.init(this.$refs.main),this.chart.setOption(this.option),window.addEventListener("resize",(function(){t.chart.resize()}))}}},g=v,b=(a("dbe3"),Object(h["a"])(g,f,p,!1,null,"4be3983f",null)),C=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar_container"},[a("div",{ref:"main",staticClass:"chart"})])},x=[],y=(a("99af"),a("4e82"),a("07ac"),{name:"BarChart",data:function(){return{chart:null,barData:[],counts:{},moto:[],option:{title:{left:"center"},color:["#FFBF00"],tooltip:{},legend:{data:["車款數量"]},xAxis:{type:"value"},yAxis:{data:[]},series:[{name:"車款數量",type:"bar",stack:"total",data:[]}]}}},mounted:function(){this.getCharName(),this.getChartData()},methods:{getCharName:function(){var t=this.$store.getters.seletCC;t.sort((function(t,e){return t-e}));for(var e=[],a=0;a<t.length;a++)e.push(String(t[a]).concat("cc"));this.option.yAxis.data=e},getChartData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.getters.motos;case 2:a=e.sent,a.forEach((function(e,a,n){var i=Number(e.cc);t.counts[i]=t.counts[i]?t.counts[i]+1:1})),t.option.series[0].data=Object.values(t.counts),t.initChar();case 6:case"end":return e.stop()}}),e)})))()},initChar:function(){var t=this;null!==this.chart&&""!==this.chart&&void 0!==this.chart&&(this.chart.dispose(),this.chart=null),this.chart=this.$echarts.init(this.$refs.main),this.chart.setOption(this.option),window.addEventListener("resize",(function(){t.chart.resize()}))}}}),V=y,F=(a("c124"),Object(h["a"])(V,w,x,!1,null,"79ebbd24",null)),D=F.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar_container"},[a("FilterMoto",{on:{"update:filtMotoStore":t.getChartData}}),a("div",{ref:"main",staticClass:"chart",staticStyle:{height:"50vh"}})],1)},A=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"motoStore_container"},[a("el-select",{attrs:{placeholder:"廠牌"},on:{change:t.getMotoStore},model:{value:t.motoStore,callback:function(e){t.motoStore=e},expression:"motoStore"}},t._l(t.motoStoreOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.motoStore,value:t}})})),1)],1)],1)],1)],1)],1)},S=[],$={name:"FilterMoto",data:function(){return{motoStoreOptions:null,motoStore:"",seletDataCatalog:"",seletDataNum:""}},created:function(){this.getfilterData(),this.getMotoStore()},methods:{getfilterData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("motoHouse/getMoto");case 2:return e.next=4,t.$store.getters.seletMotos;case 4:t.motoStoreOptions=e.sent;case 5:case"end":return e.stop()}}),e)})))()},getMotoStore:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$store.commit("motoHouse/GET_CHART_MOTODATA",t);case 2:return a.next=4,e.$store.getters.seletDataCatalog;case 4:return e.seletDataCatalog=a.sent,a.next=7,e.$store.getters.seletDataNum;case 7:e.seletDataNum=a.sent,e.$emit("update:filtMotoStore",[e.seletDataCatalog,e.seletDataNum]);case 9:case"end":return a.stop()}}),a)})))()}}},N=$,M=(a("e079"),Object(h["a"])(N,O,S,!1,null,"07271c52",null)),j=M.exports,E={name:"BarChart",components:{FilterMoto:j},data:function(){return{member:"",moto:"",order:"",chart:null,barData:[],option:{title:{text:""},tooltip:{},legend:{data:["機車數量"]},xAxis:{data:[],axisTick:{alignWithLabel:!0,interval:0}},yAxis:{type:"value"},series:[{name:"機車數量",type:"bar",label:{show:!0,position:"top"},barMaxWidth:"20%",data:["0"]}]}}},methods:{getChartData:function(t){t[0].length===t[1].length&&(this.option.xAxis.data=t[0],this.option.series[0].data=t[1]),this.initChar()},initChar:function(){var t=this;null!==this.chart&&""!==this.chart&&void 0!==this.chart&&(this.chart.dispose(),this.chart=null),this.chart=this.$echarts.init(this.$refs.main),this.chart.setOption(this.option),window.addEventListener("resize",(function(){t.chart.resize()}))}}},q=E,k=(a("e687"),Object(h["a"])(q,_,A,!1,null,"6d9568ce",null)),R=k.exports,T={name:"Analysis",components:{PanelGroup:r["a"],OrderChart:m,PieChart:C,MotoStoreChart:D,MotoCatalogChart:R}},P=T,z=(a("f510"),Object(h["a"])(P,n,i,!1,null,null,null));e["default"]=z.exports},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,c=0;c<i.length&&(!r||!s);c++)o=i[c],e.requestAnimationFrame=r=r||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];r&&s||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout((function(){t(e+a)}),a);return n=e+a,i},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,n){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var c=Object.create(o.computed||null);Object.keys(n).forEach((function(t){var e=n[t];c[t]=function(){return e}})),o.computed=c}return{esModule:i,exports:r,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},f510:function(t,e,a){"use strict";a("0eed")}}]);
//# sourceMappingURL=chunk-6e47736b.e1a7f85d.js.map