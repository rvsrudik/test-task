<template>
  <div>
    <h1 class="mb-5">Probegin CRM</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-10" @click="goToDashboard">
          <v-card-title>Dashboard</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="pa-10" @click="goToOrders">
          <v-card-title>Orders</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Crm',
  methods: {
    goToDashboard() {
      this.$router.push({ name: 'Dashboard' });
    },
    goToOrders() {
      this.$router.push({ name: 'Orders' });
    }
  }
}
</script>