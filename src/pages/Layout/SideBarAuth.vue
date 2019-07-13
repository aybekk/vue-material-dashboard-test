<template>
  <side-bar>
    <mobile-menu slot="content"></mobile-menu>
    <sidebar-link to="/login">
      <md-icon>person</md-icon>
      <p>Вход</p>
    </sidebar-link>
    <sidebar-link to="/register">
      <md-icon>assignment</md-icon>
      <p>Регистрация</p>
    </sidebar-link>
  </side-bar>
</template>

<script>
  export default {

  };
</script>
