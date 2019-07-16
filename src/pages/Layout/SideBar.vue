<template>

  <side-bar>
    <mobile-menu slot="content"></mobile-menu>
    <sidebar-link to="/books">
      <md-icon>library_books</md-icon>
      <p>Книги</p>
    </sidebar-link>
    <sidebar-link to="/user">
      <md-icon>person</md-icon>
      <p>Профиль</p>
    </sidebar-link>
    <sidebar-link to="/admin" v-if="isAdmin">
      <md-icon>dashboard</md-icon>
      <p>Администрирование</p>
    </sidebar-link>
  </side-bar>
</template>

<script>
  export default {
    computed: {
      isAdmin() {
        return this.$store.getters['auth/isAdmin'];
      }
    },
  }
</script>

<style lang="css"></style>
