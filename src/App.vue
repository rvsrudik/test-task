<template>
  <v-app>
    <v-main>
      <component :is="layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'App',
  components: {
    AuthLayout,
    DefaultLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  } 
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
header {
  padding: 15px 30px;
  text-align: left;
  box-shadow: 0px 0px 4px 0px;
  display: flex;
  justify-content: space-between;
}
</style>
