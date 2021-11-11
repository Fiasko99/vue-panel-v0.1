<template>
  <vue-tabs class="tab-list">
    <!-- new list -->
    <v-tab :title="statusCount(statusNew, newOrders.length)">
      <div class="tab-content order-list-new">
        <div v-if="newOrders.length > 0">
          <CardsOrder @getOrder="sendOrder" :orders="newOrders" />
        </div>
        <div v-else>
          <p>Новых заказов нет</p>
        </div>
      </div>
    </v-tab>
    <!-- canceled list -->
    <v-tab :title="statusCount(statusCanceled, canceledOrders.length)">
      <div class="tab-content">
        <div v-if="canceledOrders.length > 0">
          <CardsOrder @getOrder="sendOrder" :orders="canceledOrders" />
        </div>
        <div v-else>
          <p>Отмененных заказов нет</p>
        </div>
      </div>
    </v-tab>
  </vue-tabs>
</template>

<script>
import CardsOrder from './CardsOrder.vue'
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

export default {
  data() {
    return {
      newOrders: [],
      canceledOrders: [],
      statusNew: "Новые ",
      statusCanceled: "Отмененные ",
    }
  },
  components: {
    CardsOrder,
    VueTabs, 
    VTab
  },
  methods: {
    statusCount(statusName, id) {
      return statusName + id;
    },
    sendOrder(order) {
      this.$emit('sendOrder', order)
    },
    updatedNewAndCanceledOrders() {
       this.$http
      .get('/results')
      .then(res => this.newOrders = res.data)
      
      this.$http
      .get('/results')
      .then(res => this.canceledOrders = res.data)
    }
  },
  created() {
    this.updatedNewAndCanceledOrders()
  }
}
</script>

<style>
.order-list-new .card:not(.active) {
  pointer-events: none;
}
</style>