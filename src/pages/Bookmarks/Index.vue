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
                <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">


                            <div style="margin: 30px 0;" class="alert alert-info alert-with-icon" data-notify="container">
                                <i data-notify="icon" class="material-icons">error_outline</i>
                                <span data-notify="message">Здесь будут книги, которых вы добавили в закладки</span>
                            </div>

                </div>
                <div v-for="item in Items" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                    <div class="md-card md-card-stats md-theme-default">
                        <div class="md-card-content">
                            <div class="poster-container ">
                                <img :src="item.poster ? 'http://aybek-test/' + item.poster : 'https://www.film.ru/images/empty/260x400.png'"
                                     alt="Постер книги"
                                     class="poster">
                            </div>
                            <br>
                            <div v-if="isAdmin" class="card-actions  ">
                                <a target="_blank" href="/download/2125" style="margin: 0; padding: 6px 12px;" type="button"
                                   class="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title=""
                                   data-original-title="Download">
                                    <i class="material-icons text-gray">file_download</i></a>
                                <a href="/book/2125/edit" style="margin: 0; padding: 6px 12px;" type="button"
                                   class="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title=""
                                   data-original-title="Edit">
                                    <i class="material-icons text-success">edit</i>
                                    <div class="ripple-container"></div>
                                </a>
                                <a href="/book/2125/delete" style="margin: 0; padding: 6px 12px;" type="button"
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
                            <md-button target="_blank" href="/reader/web/2125" class="md-round md-success">Открыть книгу
                            </md-button>
                            <md-button v-if="false" class="md-round md-info">В закладки</md-button>
                            <md-button class="md-round">Убрать из
                                закладок
                            </md-button>
                        </div>
                    </div>
                </div>



            </div>

        </div>

</template>

<script>
    export default {

        data() {
            return {
                poster:'',
                name: '',
                author: '',
                year: '',

            }
        },
        computed: {
            Items() {
                return this.$store.getters['bookmarks/Bookmarks'];
            }

        },
        beforeMount() {
            this.$store.dispatch("bookmarks/getList");
        }
    }

</script>

<style scoped>

</style>