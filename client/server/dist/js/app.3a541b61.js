(function(){"use strict";var t={9146:function(t,e,l){var a=l(9242),o=l(3396);function s(t,e,l,a,s,r){const c=(0,o.up)("Header"),i=(0,o.up)("router-view"),n=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c),(0,o.Wm)(i),(0,o.Wm)(n)])}const r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},c={class:"container-fluid"},i=(0,o._)("a",{class:"navbar-brand",href:"#"},"Soldout",-1),n=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},m=(0,o.Uk)("홈"),_={class:"nav-item"},g=(0,o.Uk)("제품리스트"),h={class:"nav-item"},b=(0,o.Uk)("제품상세페이지"),v={class:"nav-item"},f=(0,o.Uk)("제품등록페이지"),y={key:0},w={key:1},k=(0,o._)("form",{class:"d-flex"},[(0,o._)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),(0,o._)("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1);function D(t,e,l,a,s,D){const x=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",r,[(0,o._)("div",c,[i,n,(0,o._)("div",d,[(0,o._)("ul",u,[(0,o._)("li",p,[(0,o.Wm)(x,{class:"nav-link",to:"/"},{default:(0,o.w5)((()=>[m])),_:1})]),(0,o._)("li",_,[(0,o.Wm)(x,{class:"nav-link active",to:"/"},{default:(0,o.w5)((()=>[g])),_:1})]),(0,o._)("li",h,[(0,o.Wm)(x,{class:"nav-link",to:"/Detail"},{default:(0,o.w5)((()=>[b])),_:1})]),(0,o._)("li",v,[(0,o.Wm)(x,{class:"nav-link",to:"/Create"},{default:(0,o.w5)((()=>[f])),_:1})]),void 0==D.user.email?((0,o.wg)(),(0,o.iD)("li",y,[(0,o._)("button",{class:"btn btn-danger",type:"button",onClick:e[0]||(e[0]=(...t)=>D.kakaoLogin&&D.kakaoLogin(...t))},"로그인")])):((0,o.wg)(),(0,o.iD)("li",w,[(0,o._)("button",{class:"btn btn-danger",type:"button",onClick:e[1]||(e[1]=(...t)=>D.kakaoLogout&&D.kakaoLogout(...t))},"로그아웃")]))]),k])])])}var x={name:"header",computed:{user(){return this.$store.state.user}},methods:{kakaoLogin(){window.Kakao.Auth.login({scope:" account_email, profile_nickname",success:this.getProfile})},getProfile(t){console.log(t),window.Kakao.API.request({url:"/v2/user/me",success:t=>{const e=t.kakao_account;console.log(e),this.login(e),alert("로그인 성공!")}})},async login(t){this.$store.commit("user",t)},kakaoLogout(){window.Kakao.Auth.logout((t=>{console.log(t),this.$store.commit("user",{}),alert("로그아웃"),this.$router.push({path:"/"})}))}}},$=l(89);const I=(0,$.Z)(x,[["render",D]]);var C=I;const P={class:"mt-5 py-5 bg-dark"},L=(0,o._)("div",{class:"row"},[(0,o._)("div",{class:"col-12 col-md"},[(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"d-block mb-2",role:"img",viewBox:"0 0 24 24"},[(0,o._)("title",null,"Product"),(0,o._)("circle",{cx:"12",cy:"12",r:"10"}),(0,o._)("path",{d:"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"})]),(0,o._)("small",{class:"d-block mb-3 text-muted"},"© 2017-2020")]),(0,o._)("div",{class:"col-6 col-md"},[(0,o._)("h5",null,"Features"),(0,o._)("ul",{class:"list-unstyled text-small"},[(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Cool stuff")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Random feature")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Team feature")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Stuff for developers")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Another one")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Last time")])])]),(0,o._)("div",{class:"col-6 col-md"},[(0,o._)("h5",null,"Resources"),(0,o._)("ul",{class:"list-unstyled text-small"},[(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Resource name")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Resource")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Another resource")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Final resource")])])]),(0,o._)("div",{class:"col-6 col-md"},[(0,o._)("h5",null,"Resources"),(0,o._)("ul",{class:"list-unstyled text-small"},[(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Business")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Education")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Government")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Gaming")])])]),(0,o._)("div",{class:"col-6 col-md"},[(0,o._)("h5",null,"About"),(0,o._)("ul",{class:"list-unstyled text-small"},[(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Team")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Locations")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Privacy")]),(0,o._)("li",null,[(0,o._)("a",{class:"link-secondary",href:"#"},"Terms")])])])],-1),T=[L];function O(t,e,l,a,s,r){return(0,o.wg)(),(0,o.iD)("footer",P,T)}var j={name:"FooTer"};const E=(0,$.Z)(j,[["render",O]]);var U=E,z={components:{Header:C,Footer:U}};const F=(0,$.Z)(z,[["render",s]]);var S=F,M=l(2483),V=l(7139);const B={class:"mt-5"},H={class:"container"},K=(0,o.uE)('<div class="row mb-2"><div class="col-12"><select class="form-select"><option selected></option><option value="1">BEST 10%</option><option value="2">TOP 10</option><option value="3">EVENT 10% ~ 80%</option></select></div></div>',1),q={key:0,class:"row"},A=(0,o._)("h5",{class:"m-4"},"등록된 상품이 없습니다.",-1),Z=[A],R={class:"row"},Y={class:"card",style:{width:"18rem"}},N=["onClick"],W=["src"],X={class:"card-body"},G={class:"card-title"},J={class:"card-text"},Q={class:"badge bg-dark text-white me-1"},tt={class:"badge bg-dark text-white me-1"},et={class:"badge bg-dark text-white"},lt={class:"d-flex justify-content-between align-items-center"},at=(0,o._)("div",{class:"btn-group",role:"group"},[(0,o._)("button",{type:"button",class:"btn btn-sm btn-outline-secondary"}," 장바구니 담기 "),(0,o._)("button",{type:"button",class:"btn btn-sm btn-outline-secondary"}," 주문하기 ")],-1),ot={class:"text-dark"};function st(t,e,l,a,s,r){return(0,o.wg)(),(0,o.iD)("main",B,[(0,o._)("div",H,[K,0==s.productList?((0,o.wg)(),(0,o.iD)("div",q,Z)):(0,o.kq)("",!0),(0,o._)("div",R,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.productList,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"col-xl-3 col-lg-4 col-md-6",key:e},[(0,o._)("div",Y,[(0,o._)("a",{onClick:e=>r.goToDetail(t.id),style:{cursor:"pointer"}},[(0,o._)("img",{src:`/download/${t.id}/${t.path}`,class:"card-img-top",alt:"..."},null,8,W)],8,N),(0,o._)("div",X,[(0,o._)("h5",G,(0,V.zw)(t.product_name),1),(0,o._)("p",J,[(0,o._)("span",Q,(0,V.zw)(t.category1),1),(0,o._)("span",tt,(0,V.zw)(t.category2),1),(0,o._)("span",et,(0,V.zw)(t.category3),1)]),(0,o._)("div",lt,[at,(0,o._)("small",ot,(0,V.zw)(t.product_price)+"원",1)])])])])))),128))])])])}var rt={data(){return{productList:[]}},created(){this.getProductList()},methods:{async getProductList(){this.productList=await this.$api("/api/productList",{}),console.log(this.productList)},goToDetail(t){this.$router.push({path:"/detail",query:{product_id:t}})}}};const ct=(0,$.Z)(rt,[["render",st]]);var it=ct;const nt={class:"mt-3"},dt={class:"container"},ut={class:"row"},pt={class:"col-md-5"},mt={id:"carouselExampleIndicators",class:"carousel carousel-dark slide","data-bs-ride":"carousel"},_t=(0,o._)("ol",{class:"carousel-indicators"},[(0,o._)("li",{"data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active"}),(0,o._)("li",{"data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1"}),(0,o._)("li",{"data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2"})],-1),gt={class:"carousel-inner"},ht=["src"],bt=(0,o._)("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-bs-slide":"prev"},[(0,o._)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),(0,o._)("span",{class:"visually-hidden"},"Previous")],-1),vt=(0,o._)("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-bs-slide":"next"},[(0,o._)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),(0,o._)("span",{class:"visually-hidden"},"Next")],-1),ft={class:"col-md-7"},yt={class:"card shadow-sm"},wt={class:"card-body"},kt={class:"card-title"},Dt={class:"card-title pt-3 pb-3 border-top"},xt={class:"card-text border-top pt-3"},$t={class:"badge bg-dark me-1"},It={class:"badge bg-dark me-1"},Ct={class:"badge bg-dark"},Pt={class:"card-text pb-3"},Lt={class:"card-text border-top pb-3"},Tt={class:"row"},Ot=(0,o._)("div",{class:"col-auto"},[(0,o._)("label",{class:"col-form-label"},"구매수량")],-1),jt={class:"col-auto"},Et={class:"input-group"},Ut={class:"row pt-3 pb-3 border-top"},zt=(0,o._)("div",{class:"col-6"},[(0,o._)("h3",null,"총 상품 금액")],-1),Ft={class:"col-6",style:{"text-align":"right"}},St=(0,o.uE)('<div class="d-flex justify-content-between align-items-center"><div class="col-6 d-grid p-1"><button type="button" class="btn btn-lg btn-dark"> 장바구니 담기 </button></div><div class="col-6 d-grid p-1"><button type="button" class="btn btn-lg btn-danger"> 주문하기 </button></div></div>',1),Mt={class:"row"},Vt={class:"col-12"},Bt=["src"];function Ht(t,e,l,s,r,c){return(0,o.wg)(),(0,o.iD)("main",nt,[(0,o._)("div",dt,[(0,o._)("div",ut,[(0,o._)("div",pt,[(0,o._)("div",mt,[_t,(0,o._)("div",gt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.productImage,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,V.C_)("carousel-item "+(0==e?"active":"")),key:e},[(0,o._)("img",{src:`/download/${r.productId}/${t.path}`,class:"d-block w-100",alt:"..."},null,8,ht)],2)))),128))]),bt,vt])]),(0,o._)("div",ft,[(0,o._)("div",yt,[(0,o._)("div",wt,[(0,o._)("h5",kt,(0,V.zw)(r.productDetail.product_name),1),(0,o._)("h5",Dt,(0,V.zw)(c.getCurrencyFormat(r.productDetail.product_price))+"원 ",1),(0,o._)("p",xt,[(0,o._)("span",$t,(0,V.zw)(r.productDetail.category1),1),(0,o._)("span",It,(0,V.zw)(r.productDetail.category2),1),(0,o._)("span",Ct,(0,V.zw)(r.productDetail.category3),1)]),(0,o._)("p",Pt," 배송비 "+(0,V.zw)(c.getCurrencyFormat(r.productDetail.delivery_price))+"원 | 도서산간(제주도) 배송비 추가 "+(0,V.zw)(c.getCurrencyFormat(r.productDetail.add_delivery_price))+"원 | 택배배송 | "+(0,V.zw)(r.productDetail.outbound_days)+"일 이내 출고 (주말,공휴일 제외) ",1),(0,o._)("div",Lt,[(0,o._)("div",Tt,[Ot,(0,o._)("div",jt,[(0,o._)("div",Et,[(0,o._)("span",{class:"input-group-text",style:{cursor:"pointer"},onClick:e[0]||(e[0]=t=>c.calculatePrice(-1))},"-"),(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",style:{width:"40px"},"onUpdate:modelValue":e[1]||(e[1]=t=>r.total=t)},null,512),[[a.nr,r.total]]),(0,o._)("span",{class:"input-group-text",style:{cursor:"pointer"},onClick:e[2]||(e[2]=t=>c.calculatePrice(1))},"+")])])])]),(0,o._)("div",Ut,[zt,(0,o._)("div",Ft,[(0,o._)("h3",null,(0,V.zw)(c.getCurrencyFormat(r.totalPrice))+"원",1)])]),St])])])]),(0,o._)("div",Mt,[(0,o._)("div",Vt,[(0,o._)("img",{src:`/download/${r.productId}/${r.productDetail.path}`,class:"img-fluid",alt:"..."},null,8,Bt)])])])])}var Kt={data(){return{productId:0,productDetail:{},productImage:[],total:0,totalPrice:0}},created(){this.productId=this.$route.query.product_id,this.getProductDetail(),this.getProductImage()},methods:{calculatePrice(t){let e=this.total+t;e<0&&(e=0),this.total=e,this.totalPrice=this.productDetail.product_price*this.total},getCurrencyFormat(t){return this.$currencyFormat(t)},async getProductDetail(){let t=await this.$api("/api/productDetail",{param:[this.productId]});t.length>0&&(this.productDetail=t[0],this.totalPrice=this.totalPrice=this.productDetail.product_price*this.total),console.log(this.productDetail)},async getProductImage(){this.productImage=await this.$api("/api/productMainImages",{param:[this.productId]}),console.log("this.productImage",this.productImage)}}};const qt=(0,$.Z)(Kt,[["render",Ht]]);var At=qt;const Zt={class:"mt-3"},Rt={class:"container"},Yt=(0,o._)("h2",{class:"text-center"},"제품 등록",-1),Nt={class:"mb-3 row"},Wt=(0,o._)("label",{class:"col-md-3 col-form-label"},"제품명",-1),Xt={class:"col-md-9"},Gt={class:"mb-3 row"},Jt=(0,o._)("label",{class:"col-md-3 col-form-label"},"제품가격",-1),Qt={class:"col-md-9"},te={class:"input-group mb-3"},ee=(0,o._)("span",{class:"input-group-text"},"원",-1),le={class:"mb-3 row"},ae=(0,o._)("label",{class:"col-md-3 col-form-label"},"배송비",-1),oe={class:"col-md-9"},se={class:"input-group mb-3"},re=(0,o._)("span",{class:"input-group-text"},"원",-1),ce={class:"mb-3 row"},ie=(0,o._)("label",{class:"col-md-3 col-form-label"},"추가배송비(도서산간)",-1),ne={class:"col-md-9"},de={class:"input-group mb-3"},ue=(0,o._)("span",{class:"input-group-text"},"원",-1),pe={class:"mb-3 row"},me=(0,o._)("label",{class:"col-md-3 col-form-label"},"제품카테고리",-1),_e={class:"col-md-9"},ge={class:"row"},he={class:"col-auto"},be=["value"],ve={class:"col-auto"},fe=["value"],ye={class:"col-auto"},we=["value"],ke={class:"mb-3 row"},De=(0,o._)("label",{class:"col-md-3 col-form-label"},"태그",-1),xe={class:"col-md-9"},$e={class:"mb-3 row"},Ie=(0,o._)("label",{class:"col-md-3 col-form-label"},"출고일",-1),Ce={class:"col-md-9"},Pe={class:"input-group mb-3"},Le=(0,o._)("span",{class:"input-group-text"},"일 이내 출고",-1),Te={class:"mb-3 row"},Oe={class:"col-6 d-grid p-1"},je={class:"col-6 d-grid p-1"};function Ee(t,e,l,s,r,c){return(0,o.wg)(),(0,o.iD)("main",Zt,[(0,o._)("div",Rt,[Yt,(0,o._)("div",Nt,[Wt,(0,o._)("div",Xt,[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>r.product.product_name=t)},null,512),[[a.nr,r.product.product_name]])])]),(0,o._)("div",Gt,[Jt,(0,o._)("div",Qt,[(0,o._)("div",te,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>r.product.product_price=t)},null,512),[[a.nr,r.product.product_price]]),ee])])]),(0,o._)("div",le,[ae,(0,o._)("div",oe,[(0,o._)("div",se,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>r.product.delivery_price=t)},null,512),[[a.nr,r.product.delivery_price]]),re])])]),(0,o._)("div",ce,[ie,(0,o._)("div",ne,[(0,o._)("div",de,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=t=>r.product.add_delivery_price=t)},null,512),[[a.nr,r.product.add_delivery_price]]),ue])])]),(0,o._)("div",pe,[me,(0,o._)("div",_e,[(0,o._)("div",ge,[(0,o._)("div",he,[(0,o.wy)((0,o._)("select",{class:"form-select","onUpdate:modelValue":e[4]||(e[4]=t=>r.cate1=t),onChange:e[5]||(e[5]=(...t)=>c.changeCategory1&&c.changeCategory1(...t))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.category1,((t,e)=>((0,o.wg)(),(0,o.iD)("option",{value:t,key:e},(0,V.zw)(t),9,be)))),128))],544),[[a.bM,r.cate1]])]),(0,o._)("div",ve,[(0,o.wy)((0,o._)("select",{class:"form-select","onUpdate:modelValue":e[6]||(e[6]=t=>r.cate2=t),onChange:e[7]||(e[7]=(...t)=>c.changeCategory2&&c.changeCategory2(...t))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.category2,((t,e)=>((0,o.wg)(),(0,o.iD)("option",{value:t,key:e},(0,V.zw)(t),9,fe)))),128))],544),[[a.bM,r.cate2]])]),(0,o._)("div",ye,[(0,o.wy)((0,o._)("select",{class:"form-select","onUpdate:modelValue":e[8]||(e[8]=t=>r.cate3=t)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.category3,((t,e)=>((0,o.wg)(),(0,o.iD)("option",{value:t,key:e},(0,V.zw)(t),9,we)))),128))],512),[[a.bM,r.cate3]])])])])]),(0,o._)("div",ke,[De,(0,o._)("div",xe,[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=t=>r.product.tags=t)},null,512),[[a.nr,r.product.tags]])])]),(0,o._)("div",$e,[Ie,(0,o._)("div",Ce,[(0,o._)("div",Pe,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[10]||(e[10]=t=>r.product.outbound_days=t)},null,512),[[a.nr,r.product.outbound_days]]),Le])])]),(0,o._)("div",Te,[(0,o._)("div",Oe,[(0,o._)("button",{type:"button",class:"btn btn-lg btn-dark",onClick:e[11]||(e[11]=(...t)=>c.goToList&&c.goToList(...t))}," 취소하기 ")]),(0,o._)("div",je,[(0,o._)("button",{type:"button",class:"btn btn-lg btn-danger",onClick:e[12]||(e[12]=(...t)=>c.productInsert&&c.productInsert(...t))}," 저장하기 ")])])])])}var Ue={data(){return{product:{product_name:"",product_price:0,delivery_price:0,add_delivery_price:0,tags:"",outbound_days:0,category_id:1,seller_id:1},categoryList:[],category1:[],category2:[],category3:[],cate1:"",cate2:"",cate3:""}},computed:{user(){return this.$store.state.user}},created(){this.getCategoryList()},mounted(){void 0==this.user.email&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))},methods:{goToList(){this.$router.push({path:"/sales"})},async getCategoryList(){let t=await this.$api("/api/categoryList",{});this.categoryList=t;let e={};t.forEach((t=>{e[t.category1]=t.id}));let l=[];for(let s in e)l.push(s);this.category1=l;let a=[];a=t.filter((t=>t.category1==l[0]));let o={};a.forEach((t=>{o[t.category2]=t.id})),a=[];for(let s in o)a.push(s);this.category2=a},changeCategory1(){this.category3=[];let t=this.categoryList.filter((t=>t.category1==this.cate1)),e={};t.forEach((t=>{e[t.category2]=t.id}));let l=[];for(let a in e)l.push(a);this.category2=l},changeCategory2(){let t=this.categoryList.filter((t=>t.category1==this.cate1&&t.category2==this.cate2)),e={};t.forEach((t=>{e[t.category3]=t.id}));let l=[];for(let a in e)l.push(a);this.category3=l},productInsert(){return""==this.product.product_name?this.$swal("제품명은 필수 입력값입니다."):""==this.product.product_price||0==this.product.product_price?this.$swal("제품 가격을 입력하세요."):""==this.product.delivery_price||0==this.product.delivery_price?this.$swal("배송료를 입력하세요."):""==this.product.outbound_days||0==this.product.outbound_days?this.$swal("출고일을 입력하세요."):(this.product.category_id=this.categoryList.filter((t=>t.category1==this.cate1&&t.category2==this.cate2&&t.category3==this.cate3))[0].id,console.log(this.product.category_id),void this.$swal.fire({title:"정말 등록 하시겠습니까?",showCancelButton:!0,confirmButtonText:"생성",cancelButtonText:"취소"}).then((async t=>{t.isConfirmed&&(await this.$api("/api/productInsert",{param:[this.product]}),this.$swal.fire("저장되었습니다!","","success"),this.$router.push({path:"/sales"}))})))}}};const ze=(0,$.Z)(Ue,[["render",Ee]]);var Fe=ze;const Se={class:"mt-3"},Me={class:"container"},Ve=(0,o._)("h2",{class:"text-center"},"제품 수정",-1),Be={class:"mb-3 row"},He=(0,o._)("label",{class:"col-md-3 col-form-label"},"제품명",-1),Ke={class:"col-md-9"},qe={class:"mb-3 row"},Ae=(0,o._)("label",{class:"col-md-3 col-form-label"},"제품가격",-1),Ze={class:"col-md-9"},Re={class:"input-group mb-3"},Ye=(0,o._)("span",{class:"input-group-text"},"원",-1),Ne={class:"mb-3 row"},We=(0,o._)("label",{class:"col-md-3 col-form-label"},"배송비",-1),Xe={class:"col-md-9"},Ge={class:"input-group mb-3"},Je=(0,o._)("span",{class:"input-group-text"},"원",-1),Qe={class:"mb-3 row"},tl=(0,o._)("label",{class:"col-md-3 col-form-label"},"추가배송비(도서산간)",-1),el={class:"col-md-9"},ll={class:"input-group mb-3"},al=(0,o._)("span",{class:"input-group-text"},"원",-1),ol=(0,o.uE)('<div class="mb-3 row"><label class="col-md-3 col-form-label">제품카테고리</label><div class="col-md-9"><div class="row"><div class="col-auto"><select class="form-select"><option>전자제품</option></select></div><div class="col-auto"><select class="form-select"><option>컴퓨터</option></select></div><div class="col-auto"><select class="form-select"><option>악세사리</option></select></div></div></div></div>',1),sl={class:"mb-3 row"},rl=(0,o._)("label",{class:"col-md-3 col-form-label"},"태그",-1),cl={class:"col-md-9"},il={class:"mb-3 row"},nl=(0,o._)("label",{class:"col-md-3 col-form-label"},"출고일",-1),dl={class:"col-md-9"},ul={class:"input-group mb-3"},pl=(0,o._)("span",{class:"input-group-text"},"일 이내 출고",-1),ml={class:"mb-3 row"},_l={class:"col-6 d-grid p-1"},gl=(0,o._)("div",{class:"col-6 d-grid p-1"},[(0,o._)("button",{type:"button",class:"btn btn-lg btn-danger"},"저장하기")],-1);function hl(t,e,l,s,r,c){return(0,o.wg)(),(0,o.iD)("main",Se,[(0,o._)("div",Me,[Ve,(0,o._)("div",Be,[He,(0,o._)("div",Ke,[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>r.productDetail.product_name=t)},null,512),[[a.nr,r.productDetail.product_name]])])]),(0,o._)("div",qe,[Ae,(0,o._)("div",Ze,[(0,o._)("div",Re,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>r.productDetail.product_price=t)},null,512),[[a.nr,r.productDetail.product_price]]),Ye])])]),(0,o._)("div",Ne,[We,(0,o._)("div",Xe,[(0,o._)("div",Ge,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>r.productDetail.delivery_price=t)},null,512),[[a.nr,r.productDetail.delivery_price]]),Je])])]),(0,o._)("div",Qe,[tl,(0,o._)("div",el,[(0,o._)("div",ll,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=t=>r.productDetail.add_delivery_price=t)},null,512),[[a.nr,r.productDetail.add_delivery_price]]),al])])]),ol,(0,o._)("div",sl,[rl,(0,o._)("div",cl,[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=t=>r.productDetail.tags=t)},null,512),[[a.nr,r.productDetail.tags]])])]),(0,o._)("div",il,[nl,(0,o._)("div",dl,[(0,o._)("div",ul,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=t=>r.productDetail.outbound_days=t)},null,512),[[a.nr,r.productDetail.outbound_days]]),pl])])]),(0,o._)("div",ml,[(0,o._)("div",_l,[(0,o._)("button",{type:"button",class:"btn btn-lg btn-dark",onClick:e[6]||(e[6]=(...t)=>c.goToList&&c.goToList(...t))},"취소하기")]),gl])])])}var bl={data(){return{productId:0,productDetail:{}}},computed:{user(){return this.$store.state.user}},mounted(){void 0==this.user.email&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))},created(){this.productId=this.$route.query.product_id,this.getProductDetail()},methods:{goToList(){this.$router.push({path:"/sales"})},async getProductDetail(){let t=await this.$api("/api/productDetail",{param:[this.productId]});t.length>0&&(this.productDetail=t[0])}}};const vl=(0,$.Z)(bl,[["render",hl]]);var fl=vl;const yl={class:"mt-3"},wl={class:"container"},kl={class:"float-end mb-1"},Dl={class:"table table-bordered"},xl=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th",null,"제품명"),(0,o._)("th",null,"제품가격"),(0,o._)("th",null,"배송비"),(0,o._)("th",null,"추가 배송비"),(0,o._)("th")])],-1),$l=["src"],Il=["onClick"],Cl=["onClick"],Pl=["onClick"];function Ll(t,e,l,a,s,r){return(0,o.wg)(),(0,o.iD)("main",yl,[(0,o._)("div",wl,[(0,o._)("div",kl,[(0,o._)("button",{type:"button",class:"btn btn-dark",onClick:e[0]||(e[0]=(...t)=>r.goToInsert&&r.goToInsert(...t))}," 제품등록 ")]),(0,o._)("table",Dl,[xl,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.productList,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:e},[(0,o._)("td",null,[null!=t.path?((0,o.wg)(),(0,o.iD)("img",{key:0,src:`/download/${t.id}/${t.path}`,style:{height:"50px",width:"auto"}},null,8,$l)):(0,o.kq)("",!0)]),(0,o._)("td",null,(0,V.zw)(t.product_name),1),(0,o._)("td",null,(0,V.zw)(t.product_price),1),(0,o._)("td",null,(0,V.zw)(t.delivery_price),1),(0,o._)("td",null,(0,V.zw)(t.add_delivery_price),1),(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-info me-1",onClick:e=>r.goToImageInsert(t.id)}," 사진등록 ",8,Il),(0,o._)("button",{type:"button",class:"btn btn-warning me-1",onClick:e=>r.goToUpdate(t.id)}," 수정 ",8,Cl),(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e=>r.deleteProduct(t.id)}," 삭제 ",8,Pl)])])))),128))])])])])}var Tl={data(){return{productList:[]}},created(){this.getProductList()},methods:{async getProductList(){this.productList=await this.$api("/api/productList2",{}),console.log(this.productList)},goToInsert(){this.$router.push({path:"/create"})},goToDetail(t){this.$router.push({path:"/detail",query:{product_id:t}})},goToUpdate(t){this.$router.push({path:"/update",query:{product_id:t}})},goToImageInsert(t){this.$router.push({path:"/image_insert",query:{product_id:t}})},deleteProduct(t){this.$swal.fire({title:"정말 삭제하시겠습니까?",showCancelButton:!0,confirmButtonText:"삭제",cancelButtonText:"취소"}).then((async e=>{e.isConfirmed&&(console.log(t),await this.$api("/api/productDelete",{param:[t]}),this.getProductList(),this.$swal.fire("삭제되었습니다!","","success"))}))}}};const Ol=(0,$.Z)(Tl,[["render",Ll]]);var jl=Ol;const El={class:"mt-3"},Ul={class:"container"},zl=(0,o._)("h2",{class:"text-center"},"제품 사진 등록",-1),Fl={class:"mb-3 row"},Sl=(0,o._)("label",{class:"col-md-3 col-form-label"},"제품ID",-1),Ml={class:"col-md-9"},Vl={class:"mb-3 row"},Bl=(0,o._)("label",{class:"col-md-3 col-form-label"},"제품명",-1),Hl={class:"col-md-9"},Kl={class:"mb-3 row"},ql=(0,o._)("label",{class:"col-md-3 col-form-label"},"썸네일이미지",-1),Al={class:"col-md-9"},Zl={class:"row"},Rl={class:"position-relative"},Yl=["src"],Nl=["onClick"],Wl=(0,o._)("div",{class:"alert alert-secondary",role:"alert"},[(0,o._)("ul",null,[(0,o._)("li",null,"이미지 사이즈 : 350*350"),(0,o._)("li",null,"파일 사이즈 : 1M 이하"),(0,o._)("li",null,"파일 확장자 : png, jpg만 가능")])],-1),Xl={class:"mb-3 row"},Gl=(0,o._)("label",{class:"col-md-3 col-form-label"},"제품이미지",-1),Jl={class:"col-md-9"},Ql={class:"row"},ta={class:"position-relative"},ea=["src"],la=["onClick"],aa=(0,o._)("div",{class:"alert alert-secondary",role:"alert"},[(0,o._)("ul",null,[(0,o._)("li",null,"최대 5개 가능"),(0,o._)("li",null,"이미지 사이즈 : 700*700"),(0,o._)("li",null,"파일 사이즈 : 1M 이하"),(0,o._)("li",null,"파일 확장자 : png, jpg만 가능")])],-1),oa={class:"mb-3 row"},sa=(0,o._)("label",{class:"col-md-3 col-form-label"},"제품설명이미지",-1),ra={class:"col-md-9"},ca={class:"row"},ia={class:"col-lg-6 col-md-8"},na=(0,o._)("div",{class:"alert alert-secondary",role:"alert"},[(0,o._)("ul",null,[(0,o._)("li",null,"파일 사이즈 : 5M 이하"),(0,o._)("li",null,"파일 확장자 : png, jpg만 가능")])],-1),da={class:"position-relative"},ua=["src"],pa=["onClick"],ma={class:"mb-3 row m-auto"};function _a(t,e,l,a,s,r){return(0,o.wg)(),(0,o.iD)("main",El,[(0,o._)("div",Ul,[zl,(0,o._)("div",Fl,[Sl,(0,o._)("div",Ml,(0,V.zw)(s.productId),1)]),(0,o._)("div",Vl,[Bl,(0,o._)("div",Hl,(0,V.zw)(s.productDetail.product_name),1)]),(0,o._)("div",Kl,[ql,(0,o._)("div",Al,[(0,o._)("div",Zl,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.productImage.filter((t=>1==t.type)),((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"col-lg-3 col-md-4 col-sm-2",key:e},[(0,o._)("div",Rl,[(0,o._)("img",{src:`/download/${s.productId}/${t.path}`,class:"img-fluid"},null,8,Yl),(0,o._)("div",{class:"position-absolute top-0 end-0",style:{cursor:"pointer"},onClick:e=>r.deleteImage(t.id)}," X ",8,Nl)])])))),128))]),(0,o._)("input",{type:"file",class:"form-control",accept:"image/png,image/jpeg",onChange:e[0]||(e[0]=t=>r.uploadFile(t.target.files,1))},null,32),Wl])]),(0,o._)("div",Xl,[Gl,(0,o._)("div",Jl,[(0,o._)("div",Ql,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.productImage.filter((t=>2==t.type)),((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"col-lg-3 col-md-4 col-sm-2",key:e},[(0,o._)("div",ta,[(0,o._)("img",{src:`/download/${s.productId}/${t.path}`,class:"img-fluid"},null,8,ea),(0,o._)("div",{class:"position-absolute top-0 end-0",style:{cursor:"pointer"},onClick:e=>r.deleteImage(t.id)}," X ",8,la)])])))),128))]),(0,o._)("input",{type:"file",class:"form-control",accept:"image/png,image/jpeg",onChange:e[1]||(e[1]=t=>r.uploadFile(t.target.files,2))},null,32),aa])]),(0,o._)("div",oa,[sa,(0,o._)("div",ra,[(0,o._)("div",ca,[(0,o._)("div",ia,[(0,o._)("input",{type:"file",class:"form-control",accept:"image/png,image/jpeg",onChange:e[2]||(e[2]=t=>r.uploadFile(t.target.files,3))},null,32),na]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.productImage.filter((t=>3==t.type)),((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"col-lg-6 col-md-4",key:e},[(0,o._)("div",da,[(0,o._)("img",{src:`/download/${s.productId}/${t.path}`,class:"img-fluid"},null,8,ua),(0,o._)("div",{class:"position-absolute top-0 end-0",style:{cursor:"pointer",color:"white"},onClick:e=>r.deleteImage(t.id)}," X ",8,pa)])])))),128))])])]),(0,o._)("div",ma,[(0,o._)("button",{type:"button",class:"btn btn-lg btn-dark",onClick:e[3]||(e[3]=(...t)=>r.goToList&&r.goToList(...t))}," 확인 ")])])])}var ga={data(){return{productId:0,productName:"",productDetail:{},productImage:[]}},computed:{user(){return this.$store.state.user}},created(){this.productId=this.$route.query.product_id,this.getProductDetail(),this.getProductImage()},mounted(){void 0==this.user.email&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))},methods:{goToList(){this.$router.push({path:"/sales"})},async getProductDetail(){let t=await this.$api("/api/productDetail",{param:[this.productId]});t.length>0&&(this.productDetail=t[0])},async getProductImage(){this.productImage=await this.$api("/api/imageList",{param:[this.productId]}),console.log("this.productImage",this.productImage)},deleteImage(t){this.$swal.fire({title:"정말 삭제 하시겠습니까?",showCancelButton:!0,confirmButtonText:"삭제",cancelButtonText:"취소"}).then((async e=>{e.isConfirmed&&(await this.$api("/api/imageDelete",{param:[t]}),this.getProductImage(),this.$swal.fire("삭제되었습니다!","","success"))}))},async uploadFile(t,e){let l="",a=null;t&&(l=t[0].name,a=await this.$base64(t[0]));const{error:o}=await this.$api(`/upload/${this.productId}/${e}/${l}`,{data:a});if(o)return this.$swal("이미지 업로드 실패했습니다. 다시 시도하세요.");this.$swal("이미지가 업로드 되었습니다."),setTimeout((()=>{this.getProductImage()}),1e3)}}};const ha=(0,$.Z)(ga,[["render",_a]]);var ba=ha;const va=[{path:"/",name:"Home",component:it},{path:"/detail",name:"ProductDetail",component:At},{path:"/create",name:"ProductCreate",component:Fe},{path:"/update",name:"ProductUpdate",component:fl},{path:"/sales",name:"SalesList",component:jl},{path:"/image_insert",name:"ImageInsert",component:ba}],fa=(0,M.p7)({history:(0,M.PO)("/"),routes:va});var ya=fa,wa=l(6265),ka=l.n(wa),Da={methods:{async $api(t,e){return(await ka()({method:"post",url:t,data:e}).catch((t=>{console.log(t)}))).data},$base64(t){return new Promise((e=>{const l=new FileReader;l.onload=t=>e(t.target.result),l.readAsDataURL(t)}))},$currencyFormat(t,e="#,###"){if(0==t||null==t)return 0;let l=e.substring(0,1);"$"===l||"₩"===l?e=e.substring(1,e.length):l="";let a=",",o=0,s=".";-1==e.indexOf(".")?a=",":e.indexOf(",")<e.indexOf(".")?(a=",",s=".",o=e.length-e.indexOf(".")-1):(a=".",s=",",o=e.length-e.indexOf(",")-1);let r="",c="",i=1;for(let p=0;p<o;p++)i*=10;let n=String(Math.round(parseFloat(t)*i)/i);n.indexOf("-")>-1&&(r="-",n=n.substring(1)),o>0&&"0"==e.substring(e.length-1,e.length)&&(n=String(parseFloat(n).toFixed(o))),o>0&&n.indexOf(".")>-1&&(c=n.substring(n.indexOf(".")),c=c.replace(".",s),n=n.substring(0,n.indexOf(".")));const d=/\D/g;n=n.replace(d,"");const u=/(\d+)(\d{3})/;while(u.test(n))n=n.replace(u,"$1"+a+"$2");return r+l+String(n)+String(c)}}},xa=l(65),$a=l(2415);const Ia=(0,xa.MT)({state(){return{user:{}}},mutations:{user(t,e){t.user=e}},plugins:[(0,$a.Z)({paths:["user"]})]});var Ca=Ia,Pa=(l(9773),l(2707)),La=(0,Pa.Rd)();async function Ta(){const t=await l.e(461).then(l.t.bind(l,3657,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Ta();const Oa=(0,a.ri)(S);Oa.use(ya),Oa.mixin(Da),Oa.use(Ca),Oa.use(La),Oa.mount("#app"),window.Kakao.init("6f2322b3d18a7c34deb4352c1ca34f3a")}},e={};function l(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,l),s.exports}l.m=t,function(){var t=[];l.O=function(e,a,o,s){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],s=t[d][2];for(var c=!0,i=0;i<a.length;i++)(!1&s||r>=s)&&Object.keys(l.O).every((function(t){return l.O[t](a[i])}))?a.splice(i--,1):(c=!1,s<r&&(r=s));if(c){t.splice(d--,1);var n=o();void 0!==n&&(e=n)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,o,s]}}(),function(){l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};l.t=function(a,o){if(1&o&&(a=this(a)),8&o)return a;if("object"===typeof a&&a){if(4&o&&a.__esModule)return a;if(16&o&&"function"===typeof a.then)return a}var s=Object.create(null);l.r(s);var r={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&a;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(t){r[t]=function(){return a[t]}}));return r["default"]=function(){return a},l.d(s,r),s}}(),function(){l.d=function(t,e){for(var a in e)l.o(e,a)&&!l.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){l.f={},l.e=function(t){return Promise.all(Object.keys(l.f).reduce((function(e,a){return l.f[a](t,e),e}),[]))}}(),function(){l.u=function(t){return"js/webfontloader.682a8208.js"}}(),function(){l.miniCssF=function(t){}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";l.l=function(a,o,s,r){if(t[a])t[a].push(o);else{var c,i;if(void 0!==s)for(var n=document.getElementsByTagName("script"),d=0;d<n.length;d++){var u=n[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+s){c=u;break}}c||(i=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.setAttribute("data-webpack",e+s),c.src=a),t[a]=[o];var p=function(e,l){c.onerror=c.onload=null,clearTimeout(m);var o=t[a];if(delete t[a],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(l)})),e)return e(l)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),i&&document.head.appendChild(c)}}}(),function(){l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){l.p="/"}(),function(){var t={143:0};l.f.j=function(e,a){var o=l.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise((function(l,a){o=t[e]=[l,a]}));a.push(o[2]=s);var r=l.p+l.u(e),c=new Error,i=function(a){if(l.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,o[1](c)}};l.l(r,i,"chunk-"+e,e)}},l.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,r=a[0],c=a[1],i=a[2],n=0;if(r.some((function(e){return 0!==t[e]}))){for(o in c)l.o(c,o)&&(l.m[o]=c[o]);if(i)var d=i(l)}for(e&&e(a);n<r.length;n++)s=r[n],l.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return l.O(d)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(9146)}));a=l.O(a)})();
//# sourceMappingURL=app.3a541b61.js.map