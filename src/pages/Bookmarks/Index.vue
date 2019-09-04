<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-content data-background-color="purple">

                        <h4 class="title">Закладки</h4>
                        <p class="category">1 стр </p>
                    </md-card-content>

                </md-card>

            </div>
            <div v-if="no_books" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">


                <div style="margin: 30px 0;" class="alert alert-info alert-with-icon" data-notify="container">
                    <i data-notify="icon" class="material-icons">error_outline</i>
                    <span data-notify="message">Здесь будут книги, которых вы добавили в закладки</span>
                </div>

            </div>


            <div v-if="!no_books" v-for="(item, index) in books"
                 class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                <div class="md-card md-card-stats md-theme-default">
                    <div class="md-card-content">
                        <div class="poster-container ">
                            <img :src="item.poster ? backendUrl + item.poster : 'https://www.film.ru/images/empty/260x400.png'"
                                 alt="Постер книги"
                                 class="poster">
                        </div>
                        <br>
                        <div v-if="isAdmin" class="card-actions  ">
                            <a style="margin: 0; padding: 6px 12px;" type="button"
                               class="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title=""
                               data-original-title="Download">
                                <i class="material-icons text-gray">file_download</i></a>
                            <a v-on:click="toEdit(item.id)" style="margin: 0; padding: 6px 12px;" type="button"
                               class="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title=""
                               data-original-title="Edit">
                                <i class="material-icons text-success">edit</i>
                                <div class="ripple-container"></div>
                            </a>
                            <a v-on:click="destroyBook(item.id)" style="margin: 0; padding: 6px 12px;" type="button"
                               class="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title=""
                               data-original-title="Remove">
                                <i class="material-icons text-danger">close</i>
                                <div class="ripple-container"></div>
                            </a>
                        </div>
                        <br>
                        <div class="books-description text-center">
                            <h6 class="category book-name" :title="item.name">{{item.name}}</h6>
                            <p class="card-description books-author" :title="item.author + item.year ">
                                {{item.author}}.{{item.year}}</p>
                        </div>
                        <md-button v-on:click="openReader(item.id)" class="md-round md-success md-block">Открыть книгу
                        </md-button>
                        <md-button v-if="!item.bookmarked" v-on:click="bookmarkAdd(item.id, index)"
                                   class="md-round md-info md-block">
                            <md-progress-spinner v-if="bookmark_add_loading[index]" :md-diameter="17" :md-stroke="2"
                                                 md-mode="indeterminate"></md-progress-spinner>
                            <span v-if="!bookmark_add_loading[index]">Вернуть в закладки</span>
                        </md-button>

                        <md-button v-if="item.bookmarked" v-on:click="bookmarkRemove(item.id, index)"
                                   class="md-round md-block">
                            <md-progress-spinner v-if="bookmark_remove_loading[index]" :md-diameter="17" :md-stroke="2"
                                                 md-mode="indeterminate"></md-progress-spinner>
                            <span v-if="!bookmark_remove_loading[index]">Убрать из закладок</span>
                        </md-button>
                    </div>
                </div>
            </div>

            <div class="md-layout-item md-size-100">
                <Paginator v-bind:page="parseInt(this.$route.params.page)" v-bind:total_pages="LastPage"
                           v-bind:url="this.url"></Paginator>
            </div>


        </div>
    </div>


</template>

<script>
    import env from '../../config/env.js';

    export default {
        components: {
            env
        },
        data() {
            return {
                backendUrl: null,
                no_books: false,
                url: '/bookmarks/',
                books: [],
                bookmark_add_loading: [],
                bookmark_remove_loading: [],
            }
        },
        computed: {
            Books() {
                return this.$store.getters['bookmarks/Bookmarks'];
            },
            LastPage() {
                return this.$store.getters['bookmarks/LastPage'];
            },

        },
        methods: {
            openReader(id) {
                this.$router.push('/reader/' + id);
            },
            setBookmarks() {
                this.books.forEach(function (item) {
                    item.bookmarked = 1;
                });

                this.$forceUpdate();
            },
            bookmarkAdd(id, index) {
                this.bookmark_add_loading[index] = 1;
                this.$forceUpdate();
                this.$store.dispatch('bookmarks/addBookmark', {
                    id: id,
                }).then(response => {
                    this.bookmark_add_loading[index] = 0;
                    this.books[index].bookmarked = true;
                    this.$forceUpdate();
                }).catch(error => {
                    this.bookmark_add_loading[index] = 0;
                    this.errorNotify();
                    this.$forceUpdate();
                });
            },
            bookmarkRemove(id, index) {
                this.bookmark_remove_loading[index] = 1;
                this.$forceUpdate();
                this.$store.dispatch('bookmarks/removeBookmark', {
                    id: id,
                }).then(response => {
                    this.bookmark_remove_loading[index] = 0;
                    this.books[index].bookmarked = false;
                    this.$forceUpdate();
                }).catch(error => {
                    this.bookmark_remove_loading[index] = 0;
                    this.$forceUpdate();
                    this.errorNotify();
                });
            },
        },
        mounted() {
            this.backendUrl = env.backendUrl;
        },
        beforeMount() {
            this.$store.dispatch('bookmarks/getBookmarksPage', {
                page: this.$route.params.page,
            }).then(response => {
                this.books = this.$store.getters["bookmarks/PageItems"];
                if (this.books.length === 0) {
                    this.no_books = true;
                }
                this.setBookmarks();
            });
        }
    }

</script>

<style>
    .md-button-content .md-progress-spinner.md-theme-default .md-progress-spinner-circle {
        stroke: white;
    }
</style>

<style scoped>
    .poster {
        max-width: 142px;
        width: 100%;
        margin: 10px auto 20px;
        max-height: 215px;
        overflow: hidden;
    }

    .md-card-stats .md-card-content {
        text-align: center;
        padding-top: 20px;
    }
</style>
