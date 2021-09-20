<template>
  <div class="orders">
    <h1>Orders</h1>

    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="pagination.itemsPerPage"
      :page="pagination.page"
      :server-items-length="totalOrders"
      :loading="loading.orders"
      disable-filtering
      @pagination="onPaginationChanged"
    />
  </div>
</template>

<script>
import { getOrders } from '@/api/services.js'

export default {
  name: 'Orders',
  data() {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
      ],
      orders: [],
      totalOrders: null,
      loading: {
        orders: false,
      },
      pagination: {
        page: 1,
        itemsPerPage: 10,
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
        const response = await getOrders(this.pagination.page, this.pagination.itemsPerPage);
        this.orders = response.payload.result;
        this.totalOrders = response.payload.total
      } catch (err) {
        this.$notify.error(err.error)
      } finally {
        this.loading.orders = false;
      }
    },
    goToOrder(id) {
      this.$router.push({ name: 'OrderItem', params: { id } })
    },
    onPaginationChanged(pagination) {
      this.pagination.page = pagination.page;
      this.pagination.itemsPerPage = pagination.itemsPerPage;

      this.loadOrders();
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