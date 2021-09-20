<template>
  <div class="crm">
    <app-header/>

    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'Crm',
  components: {
    AppHeader,
  },
};
</script>
