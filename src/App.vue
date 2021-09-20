<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
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
