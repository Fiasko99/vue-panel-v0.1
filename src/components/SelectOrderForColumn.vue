<template>
  <div v-if="order" class="order-detail-inner">
    <!-- step  1 -->
    <div class="order-detail-top">
      <div class="order-info">
        <span class="order-num">Заказ № {{ order.num }}</span>
        <span class="text-sm">
          на {{ order.createdon | moment("DD.MM") }} к
          {{ order.updatedon | moment("HH:mm") }}
        </span>
      </div>
      <div v-for="product in order.products" :key="product.id">
        <div :key="product.id">
          <span class="text-sm">Артикул: {{ product.article }}</span>
          <h3 class="order-name">{{ product.name }}</h3>
          <div class="order-count">{{ product.count }} шт</div>
          <div class="order-comment">
            <div class="order-title">Комментарий клиента</div>
            <p>
              {{ product.text_note }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="step1">
        <button
          type="button"
          class="btn btn-primary"
          @click="step1 = false; step2 = true"
        >
          Принять заказ
        </button>
      </div>
      <div v-if="order.status == 5">
        <div class="order-maker"><span>Флорист</span>Розочкина Людмила</div>
        <button type="button" class="btn btn-primary">Заказ выполнен</button>
      </div>
    </div>
    <div v-if="step2">
      <div class="order-detail-bottom">
        <OrderBarcodeForSelectOrder @updateOrders="updateOrders" :orderId="order.id" />
      </div>
    </div>
    <div v-if="order.status == 5">
      <div class="order-detail-bottom">
        <button
          class="btn btn-link btn-danger"
        >
          Отказаться от сборки букета
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import OrderBarcodeForSelectOrder from './OrderBarcodeForSelectOrder.vue'
export default {
  data() {
    return {
      step1: true,
      step2: false,
      step3: false,
    }
  },
  props: {
    order: {
      type: Object
    }
  },
  components: {
    OrderBarcodeForSelectOrder,
  },
  methods: {
    updateOrders() {
      this.$emit('updateOrders')
    }
  }
}
</script>

<style>

</style>