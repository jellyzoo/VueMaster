<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div
            id="carouselExampleIndicators"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div
                :class="`carousel-item ${i == 0 ? 'active' : ''}`"
                :key="i"
                v-for="(pimg, i) in productImage"
              >
                <img
                  :src="`/download/${productId}/${pimg.path}`"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ productDetail.product_name }}</h5>
              <h5 class="card-title pt-3 pb-3 border-top">
                {{ getCurrencyFormat(productDetail.product_price) }}???
              </h5>
              <p class="card-text border-top pt-3">
                <span class="badge bg-dark me-1">{{
                  productDetail.category1
                }}</span>
                <span class="badge bg-dark me-1">{{
                  productDetail.category2
                }}</span>
                <span class="badge bg-dark">{{ productDetail.category3 }}</span>
              </p>
              <p class="card-text pb-3">
                ????????? {{ getCurrencyFormat(productDetail.delivery_price) }}??? |
                ????????????(?????????) ????????? ??????
                {{ getCurrencyFormat(productDetail.add_delivery_price) }}??? |
                ???????????? | {{ productDetail.outbound_days }}??? ?????? ??????
                (??????,????????? ??????)
              </p>
              <div class="card-text border-top pb-3">
                <div class="row">
                  <div class="col-auto">
                    <label class="col-form-label">????????????</label>
                  </div>
                  <div class="col-auto">
                    <div class="input-group">
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="calculatePrice(-1)"
                        >-</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        style="width: 40px"
                        v-model="total"
                      />
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="calculatePrice(1)"
                        >+</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pt-3 pb-3 border-top">
                <div class="col-6">
                  <h3>??? ?????? ??????</h3>
                </div>
                <div class="col-6" style="text-align: right">
                  <h3>{{ getCurrencyFormat(totalPrice) }}???</h3>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-dark">
                    ???????????? ??????
                  </button>
                </div>
                <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-danger">
                    ????????????
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <img
            :src="`/download/${productId}/${productDetail.path}`"
            class="img-fluid"
            alt="..."
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    // ????????? data??? template ????????? ??? ??? ?????? data ??????
    return {
      productId: 0,
      productDetail: {},
      productImage: [],
      total: 0,
      totalPrice: 0,
    };
  },
  created() {
    this.productId = this.$route.query.product_id; //path??? product_id??? productId??? ??????
    this.getProductDetail(); // created ???????????? productDetail??? ???????????? data??? ?????? ??????
    this.getProductImage(); // created ???????????? getProductImage??? ???????????? data??? ?????? ??????
  },
  methods: {
    // ????????? ??????
    calculatePrice(cnt) {
      let total = this.total + cnt; // cnt??? ?????? ??????(total)??? ????????? (total ????????? = 0)
      if (total < 0) total = 0; // total??? 0?????? ?????? ??? total??? ????????? 0
      this.total = total;
      this.totalPrice = this.productDetail.product_price * this.total; // totalPrice??? ?????? ?????? * ??????
    },
    getCurrencyFormat(value) {
      // ????????? ,??? ???????????? $currencyFormat ??????
      return this.$currencyFormat(value);
    },
    async getProductDetail() {
      // getCartList ????????? ??????
      let productDetail = await this.$api("/api/productDetail", {
        param: [this.productId],
      }); //param????????? object????????? ?????? ??????????????? ??????????????????  ?????????.

      if (productDetail.length > 0) {
        this.productDetail = productDetail[0];
        this.totalPrice = this.totalPrice =
          this.productDetail.product_price * this.total;
      }
      console.log(this.productDetail); // ???????????? ??? ??????????????? ??????
    },
    async getProductImage() {
      this.productImage = await this.$api("/api/productMainImages", {
        param: [this.productId],
      });
      console.log("this.productImage", this.productImage);
    },
  },
};
</script>
