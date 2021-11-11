<template>
  <div>
    <div>Сканируйте карту чтобы начать</div>
    <input type="text" v-model="floristId" autofocus @keyup.enter="postData" />
    <p class="info" v-if="!floristName">Флорист не выбран</p>
    <img src="../assets/images/barcode.jpg" alt="" />
    <div class="card-body">Returned floristId Id: {{ floristId }}</div>
    <p>orderId {{ orderId }}</p>
    <div v-for="order in orders" :key="order.id">
      <p>{{ order.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderBarcode",
  props: {
    getFloristName: String,
    orderId: Number,
    isOpened: Boolean,
  },
  data() {
    return {
      floristName: "",
      floristId: null,
      orders: [],
    }
  },
  methods: {
    postData() {
      this.$http
      .post("http://localhost:3000/results", {
        id: this.floristId,
        num: "2109/1567",
        products: [
          {
            id: 2,
            product_id: 1209,
            order_id: 2,
            name: "Букет 5 Эустом Микс и Эвкалипт",
            count: 1,
            price: 349,
            weight: 0,
            cost: 349,
            options: null,
            text_note: null,
            article: null,
          },
        ],
      })
      .then(() => {
        this.$emit('updateOrders')
      })
      .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.info {
  margin: 15px 0;
}
</style>
