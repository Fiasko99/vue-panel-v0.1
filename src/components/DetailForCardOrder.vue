<template>
  <div class="order-item-detail">
    <div class="order-info-left">
      <h5 class="order-item-name">{{ product.name }}</h5>
      <span class="text-sm">Артикул: {{ product.product_id }}</span>
    </div>
    <div class="order-info-right">
      <div class="order-item-count">{{ product.count }} шт</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-for-card-order',
  props: {
    product: {
      type: Object
    }
  }
}
</script>

<style>

</style>