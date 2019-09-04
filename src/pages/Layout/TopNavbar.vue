<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete" v-if="loggedIn">
            <form @submit.prevent="search">
            <md-autocomplete
              class="search"
              v-model="keyword"
              :md-options="searchHistory"
            >
              <label>Поиск...</label>
            </md-autocomplete>
            </form>
          </div>
          <md-button v-on:click="search" class="md-white md-round md-just-icon pull-right">
            <i class="material-icons">search</i>
            <div class="ripple-container"></div>
          </md-button>
          <md-list>
              <md-list-item href="#/user" v-if="loggedIn">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>

            <md-list-item href="/logout" v-if="loggedIn">
              <i class="material-icons">exit_to_app</i>
              <p class="hidden-lg hidden-md">Выйти</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters['auth/loggedIn'];
    }
  },
  data() {
    return {
      keyword: null,
      searchHistory: []
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    search() {

    }
  }
};
</script>

<style lang="css"></style>
