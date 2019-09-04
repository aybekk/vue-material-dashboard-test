<template>
  <div>
    <md-table v-model="books" >
      <md-table-row slot="md-table-row"  slot-scope="{ item, index }">
        <md-table-cell>{{ item.name }}</md-table-cell>


        <md-table-cell>
          <md-button v-on:click="openReader(item.id)" class="md-just-icon md-simple md-primary">
            <md-icon>chrome_reader_mode</md-icon>
            <md-tooltip md-direction="top">Открыть книгу</md-tooltip>
          </md-button>
          <md-button v-if="!item.bookmarked" v-on:click ="bookmarkAdd(item.id, index)" class="md-just-icon md-simple md-danger"
                     style="position: relative;">
            <md-icon>bookmark_border</md-icon>
            <md-tooltip md-direction="top">В закладки</md-tooltip>
            <md-progress-spinner v-if="bookmark_loading[index]" :md-diameter="18" :md-stroke="1"
                                 style="position: absolute; top:5px; right: -10px;" md-mode="indeterminate"></md-progress-spinner>

          </md-button>
          <md-button style="position: relative; overflow: visible;" v-if="item.bookmarked" v-on:click ="bookmarkRemove(item.id, index)" class="md-just-icon md-simple md-danger">
            <md-icon>bookmark</md-icon>
            <md-tooltip md-direction="top">Убрать из закладок</md-tooltip>
            <md-progress-spinner v-if="bookmark_loading[index]" :md-diameter="18" :md-stroke="1"
                                 style="position: absolute; top:5px; right: -10px;" md-mode="indeterminate"></md-progress-spinner>
          </md-button>

        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<style>
  .md-button-content .md-progress-spinner.md-theme-default .md-progress-spinner-circle {
    stroke: #4b74ff!important;
  }
</style>

<script>
  export default {

    data() {
      return{
        books: [],
        bookmark_loading: [],
      }

    },
    methods:{
      openReader(id) {
        this.$router.push('/reader/' + id);
      },
      bookmarkAdd(id, index) {
        this.bookmark_loading[index] = 1;
        this.$forceUpdate();
        this.$store.dispatch('bookmarks/addBookmark', {
          id:id,
        }).then(response => {
          this.bookmark_loading[index] = 0;
          this.books[index].bookmarked = true;
          this.$forceUpdate();
        }).catch(error => {
          this.bookmark_loading[index] = 0;
          this.errorNotify();
          this.$forceUpdate();
        });
      },
      bookmarkRemove(id, index) {
        this.bookmark_loading[index] = 1;
        this.$forceUpdate();
        this.$store.dispatch('bookmarks/removeBookmark', {
          id:id,
        }).then(response => {
          this.bookmark_loading[index] = 0;
          this.books[index].bookmarked = false;
          this.$forceUpdate();
        }).catch(error => {
          this.bookmark_loading[index] = 0;
          this.$forceUpdate();
          this.errorNotify();
        });
      },
    },
    beforeMount() {
      this.$store.dispatch("user/getStats").then(response => {
        this.books = this.$store.getters["user/New"];
      });
    },
  };
</script>