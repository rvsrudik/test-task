<template>
  <div class="order-item">
    <h1 class="mb-5">Order Item</h1>

    <v-card class="order-card" :loading="loading.order">
      <template v-if="order">
        <v-card-title>{{ order.name }}</v-card-title>
        <v-card-text>{{ order.description }}</v-card-text>  
      </template>
    </v-card>
  </div>
</template>

<script>
import { getOrderById } from '@/api/services.js'

export default {
  name: 'OrderItem',
  data() {
    return {
      order: null,
      loading: {
        order: false,
      }
    };
  },
  mounted() {
    this.loadOrder();
  },
  methods: {
    async loadOrder() {
      this.loading.order = true;

      try {
        const response = await getOrderById(this.$route.params.id);
        this.order = response.payload;
      } catch (err) {
        this.$notify.error(err.error)
      } finally {
        this.loading.order = false;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.order-item {
  position: relative;
  &__loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.order-card {
  min-height: 200px;
}
</style>