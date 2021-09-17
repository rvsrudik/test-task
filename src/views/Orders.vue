<template>
  <div class="orders">
    <h1>Orders</h1>
    
    <v-divider class="my-5" />
    <v-fade-transition>
      <v-progress-circular v-if="loading.orders" indeterminate class="orders__loader" />
      <v-row v-else>
        <v-col
          v-for="order in orders"
          :key="order.id"
          cols="12"
          sm="4">
          <v-card @click="goToOrder(order.id)">
            <v-card-title>{{ order.name }}</v-card-title>
            <v-card-text>{{ order.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </div>
</template>

<script>
import { getOrders } from '@/api/services.js'

export default {
  name: 'Orders',
  data() {
    return {
      orders: [],
      loading: {
        orders: false,
      }
    };
  },
  mounted() {
    this.loadOrders();
  },
  methods: {
    async loadOrders() {
      this.loading.orders = true;

      try {
        const response = await getOrders();
        this.orders = response.payload;
      } catch (err) {
        this.$notify.error(err.error)
      } finally {
        this.loading.orders = false;
      }
    },
    goToOrder(id) {
      this.$router.push({ name: 'OrderItem', params: { id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.orders {
  position: relative;
  &__loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>