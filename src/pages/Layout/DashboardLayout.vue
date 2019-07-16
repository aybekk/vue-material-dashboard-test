<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <SideBar v-if="loggedIn"/>
    <SideBarAuth v-if="!loggedIn"/>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import SideBarAuth from "@/pages/Layout/SideBarAuth";
import SideBar from "@/pages/Layout/SideBar";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    SideBarAuth,
    SideBar,
  },

  computed: {
    loggedIn() {
      return this.$store.getters['auth/loggedIn'];
    }
  },
};
</script>
