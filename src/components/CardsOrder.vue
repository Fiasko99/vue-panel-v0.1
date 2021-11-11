<template>
  <div class="cards-order">
    <CardOrder
      v-for="order in orders"
      @click.native="sendOrder(order)"
      :order="order"
      :key="order.id"
      ></CardOrder>
  </div>
</template>

<script>
import CardOrder from './CardOrder.vue'

export default {
  data() {
    return {
    }
  },
  methods: {
    sendOrder(order) {
      this.$emit('getOrder', order)
    }
  },
  components: { CardOrder },
  props: {
    orders: {
      type: Array
    }
  }
}
</script>

<style>

</style>