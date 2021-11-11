<template>
  <div>
    <h3>Заказы в работе</h3>
    <CardsOrder @getOrder="sendOrder" :orders="progressOrders" />
  </div>
</template>

<script>
import CardsOrder from './CardsOrder.vue'
export default {
  data() {
    return {
      progressOrders: []
    }
  },
  methods: {
    sendOrder(order) {
      this.$emit('sendOrder', order)
    },
    updatedProgressOrders() {
      this.$http
      .get('/results')
      .then(res => this.progressOrders = res.data)
    }
  },
  components: { CardsOrder },
  created() {
    this.updatedProgressOrders()
  }
}
</script>

<style>
h3 {
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 20px;
}
</style>