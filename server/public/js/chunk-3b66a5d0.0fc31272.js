(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b66a5d0"],{"859e":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"container"},[e._m(0),t("section",[t("div",{staticClass:"detailItem-box"},[e._m(1),t("div",{staticClass:"box-container"},[t("img",{ref:"main",staticClass:"user-avatar",attrs:{src:"",alt:""}}),t("div",{staticClass:"box-reservation"},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.form_rules}},[t("div",{staticClass:"reservation-header"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"廠商"}},[t("div",[e._v(e._s(e.item.motoStore))])])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"車款"}},[t("div",[e._v(e._s(e.item.motoCatalog))])])],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"數量",prop:"orderCarNumbers"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"請輸入預約數量"},model:{value:e.form.orderCarNumbers,callback:function(r){e.$set(e.form,"orderCarNumbers",r)},expression:"form.orderCarNumbers"}}),t("div",[e._v("剩餘數量: "+e._s(this.undoneNumber))])],1)],1)],1)],1),t("div",{staticClass:"reservation-container"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"container-orderLocal"},[t("el-form-item",{attrs:{label:"取車地點",prop:"orderLocal"}},[t("el-select",{attrs:{placeholder:"取車點",clearable:""},model:{value:e.form.orderLocal,callback:function(r){e.$set(e.form,"orderLocal",r)},expression:"form.orderLocal"}},e._l(e.local,(function(e){return t("el-option",{key:e.id,attrs:{label:e.motoStore,value:e}})})),1)],1)],1)]),t("el-col",{attrs:{span:12}},[t("div",{staticClass:"container-orderLocal"},[t("el-form-item",{attrs:{label:"還車地點",prop:"orderLocalBack"}},[t("el-select",{attrs:{placeholder:"還車點",clearable:""},model:{value:e.form.orderLocalBack,callback:function(r){e.$set(e.form,"orderLocalBack",r)},expression:"form.orderLocalBack"}},e._l(e.local,(function(e){return t("el-option",{key:e.id,attrs:{label:e.motoStore,value:e}})})),1)],1)],1)])],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"取車日期",prop:"orderCar"}},[t("el-date-picker",{staticClass:"container-orderDate",attrs:{type:"date",placeholder:"選擇日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",prop:"orderCar"},model:{value:e.form.orderCar,callback:function(r){e.$set(e.form,"orderCar",r)},expression:"form.orderCar"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"還車日期",prop:"orderCarBack"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"選擇日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",prop:"orderCarBack"},model:{value:e.form.orderCarBack,callback:function(r){e.$set(e.form,"orderCarBack",r)},expression:"form.orderCarBack"}})],1)],1)],1)],1),t("div",{staticClass:"reservation-footer"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(r){return e.onSubmit("form")}}},[e._v("預約")])],1)])],1)]),t("div",{staticClass:"box-footer"},[t("p",[e._v("介紹")]),t("div",[e._v(e._s(e.item.description))])])])])])])},o=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"header-container"},[t("div",{staticClass:"header-Img"})])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"box-Info"},[t("p",[e._v("機車")])])}],l=(t("96cf"),t("1da1")),s=t("bb46"),i={name:"motoDetail",data:function(){return{id:null,item:{},initialNumber:null,undoneNumber:null,local:[],form:{motoStore:null,motoCatalog:null,orderCarNumbers:null,orderLocal:"",orderLocalBack:"",orderCar:"",orderCarBack:"",UserId:null},form_rules:{orderCarNumbers:[{required:!0,validator:s["validateNumber"],trigger:"blur"}],orderLocal:[{required:!0,validator:s["validateOrderLocal"],trigger:"change"}],orderLocalBack:[{required:!0,validator:s["validateOrderLocal"],trigger:"change"}],orderCar:[{required:!0,validator:s["validateDate"],trigger:"change"}],orderCarBack:[{required:!0,validator:s["validateDate"],trigger:"change"}]},itemImage:""}},created:function(){this.id=this.$route.params.id,this.form.UserId=this.$store.getters.user.id},mounted:function(){this.motOne(),this.getLocal()},methods:{motOne:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.$store.commit("motoHouse/SET_HOME_MOTONE",e.id),e.item=e.$store.getters.selectHomeMotoOne,e.itemImage=e.item.image,e.$refs.main.src=e.itemImage,e.initialNumber=e.item.numbers,e.form.motoStore=e.item.motoStore,e.form.motoCatalog=e.item.motoCatalog,r.next=9,e.$store.dispatch("order/getOrder");case 9:e.$store.commit("order/GET_HOME_UNDONENUMBERS",[e.id,e.initialNumber,e.form.orderCarNumbers]),e.undoneNumber=e.$store.getters.undoneNumbers;case 11:case"end":return r.stop()}}),r)})))()},getLocal:function(){this.local=this.$store.getters.selectStores},onSubmit:function(e){var r=this;this.$refs[e].validate((function(t){t&&r.$store.dispatch("order/addOrder",r.form).then((function(t){r.$refs[e].resetFields(),r.motOne(),r.$swal.fire({icon:"success",title:"預約成功"})})).then((function(e){r.$router.push({path:"/userOrder/".concat(r.form.UserId)})})).catch((function(e){e.data&&r.$swal.fire({icon:"error",title:e.data.message||"請登入或註冊"})}))}))}}},c=i,n=(t("87c1"),t("2877")),d=Object(n["a"])(c,a,o,!1,null,"22fcdd86",null);r["default"]=d.exports},"87c1":function(e,r,t){"use strict";t("cb39")},cb39:function(e,r,t){}}]);
//# sourceMappingURL=chunk-3b66a5d0.0fc31272.js.map