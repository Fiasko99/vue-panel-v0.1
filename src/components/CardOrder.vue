<template>
  <div class="app-card-order">
    <div>
      <span>Заказ № {{ order.num }}</span>
      <span >
        на {{ order.createdon | moment("DD.MM") }} к
        {{ order.updatedon | moment("HH:mm") }}
      </span>
    </div>
    <div v-for="product in order.products" :key="product.id">
      <DetailForCardOrder :key="product.id" :product="product" />
    </div>
    <div v-if="order.florist">
      <div >
        <span>Флорист {{ order.florist }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import DetailForCardOrder from './DetailForCardOrder.vue'

export default {
  components: { DetailForCardOrder },
  methods: {
  },
  props: {
    order: {
      type: Object
    }
  }
}
</script>

<style>
.app-card-order {
  border: 1px solid #0002;
  margin: 12px 0;
  padding: 5px;
  cursor: pointer;
}
.app-card-order:hover {
  border: 1px solid #0006;
}
.app-card-order:active {
  border: 4px solid #0002;
  padding: 2px;
}
</style>