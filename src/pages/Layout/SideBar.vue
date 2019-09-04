<template>

  <side-bar>
    <mobile-menu slot="content"></mobile-menu>
    <sidebar-link to="/books/1">
      <md-icon>library_books</md-icon>
      <p>Книги</p>
    </sidebar-link>
    <sidebar-link to="/profile">
      <md-icon>person</md-icon>
      <p>Профиль</p>
    </sidebar-link>
    <sidebar-link to="/story">
      <md-icon>date_range</md-icon>
      <p> Просмотренные мною</p>
    </sidebar-link>
    <sidebar-link to="/bookmarks/1">
      <md-icon>book</md-icon>
      <p>Закладки</p>
    </sidebar-link>
    <sidebar-link to="/articles">
      <md-icon>receipt</md-icon>
      <p>Научные статьи</p>
    </sidebar-link>

    <sidebar-link to="/admin" v-if="isAdmin">
      <md-icon>dashboard</md-icon>
      <p>Администрирование</p>
    </sidebar-link>

  </side-bar>
</template>

<script>
  import MobileMenu from "@/pages/Layout/MobileMenu.vue";

  export default {
    components: {
      MobileMenu
    },
    computed: {
      isAdmin() {
        return this.$store.getters['auth/isAdmin'];
      }
    },
  }
</script>

<style lang="css"></style>
