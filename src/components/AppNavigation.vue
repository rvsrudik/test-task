<template>
  <nav class="navigation">
    <router-link
      v-for="menuItem in filteredMenu"
      :key="menuItem.routeName"
      :to="{ name: menuItem.routeName }"
      class="navidation__link"
      :class="{'navidation__link--active': menuItem.routeName === $route.name}"
      >
      {{ menuItem.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      menu: [
        {
          title: 'Login',
          routeName: 'Login',
          auth: false,
        },
        {
          title: 'Dashboard',
          routeName: 'Dashboard',
          auth: true,
        },
        {
          title: 'Orders',
          routeName: 'Orders',
          auth: true,
        },
        {
          title: 'PrivacyPolicy',
          routeName: 'PrivacyPolicy',
        }
      ]
    };
  },
  computed: {
    filteredMenu() {
      return this.menu.filter(menuItem => {
        // show menu item only for logged
        if (menuItem.auth === true) {
          return !!localStorage.getItem('token');
        }

        // show menu item only for not logged
        if (menuItem.auth === false) {
          return !localStorage.getItem('token');
        }

        return true;
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.navidation {
  &__link {
    padding-right: 15px;
    font-weight: 400;
    text-decoration: none;
    &--active {
      font-weight: 600;
    }
  }
}

</style>