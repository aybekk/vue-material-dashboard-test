<template>
    <md-card-content>
        <div class="md-layout">
            <div v-if="no_books" class="md-layout-item md-size-100">
                <div style="margin: 30px 0;" class="alert alert-info alert-with-icon" data-notify="container">
                    <i data-notify="icon" class="material-icons">error_outline</i>
                    <span data-notify="message">Здесь будет история вашей активности</span>
                </div>
            </div>
            <div v-if="!no_books" class="md-layout-item md-size-100">
                <md-table v-model="books" :table-header-color="tableHeaderColor">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label=" Книги">{{ item.name }}</md-table-cell>
                        <md-table-cell md-label="Дата">{{item.created_at}}</md-table-cell>
                    </md-table-row>
                </md-table>
            </div>
        </div>
    </md-card-content>
</template>




<script>

    export default {

        data() {
            return {
                no_books: false,
                books: [],

            }
        },



        beforeMount(){
            this.$store.dispatch('book/getLatest', {
                page: this.$route.params.page,
            }).then(response => {
                this.books = this.$store.getters["book/PageLatest"];
                if (this.books.length === 0) {
                    this.no_books = true;
                }
            })
        }
    }


</script>

