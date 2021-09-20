<template>
  <header>
    <app-navigation />
    <v-btn v-if="isUserLogged" color="warning" @click="doLogout">Logout</v-btn>
  </header>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';
import { logout } from '@/common/auth.js'

export default {
  name: 'DefaultLayout',
  components: {
    AppNavigation
  },
  methods: {
    doLogout() {
      logout();
      this.$router.push({ name: 'Login' });
    },
  },
  computed: {
    isUserLogged() {
      // I know that local storage is not reactive, but in real life It would be some getter
      return localStorage.getItem('token');
    }
  }
};
</script>
