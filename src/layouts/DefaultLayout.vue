<template>
  <div class="default-layout">
    <header>
      <navigation />
      <v-btn v-if="isUserLogged" color="warning" @click="doLogout">Logout</v-btn>
    </header>
    <v-container>
      <slot />
    </v-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { logout } from '@/common/auth.js'

export default {
  name: 'DefaultLayout',
  components: {
    Navigation
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
