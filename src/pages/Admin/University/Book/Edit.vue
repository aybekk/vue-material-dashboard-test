<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <form @submit.prevent="saveBooks">
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Список книг</h4>
            <p class="category">Список всех книг на сайте</p>
          </md-card-header>
          <md-card-content>

            <div>
              <div style="margin: 15px 0;">
                <a id="checkAll" v-on:click="checkAll" style="cursor: pointer">Выделить все</a> | <a id="uncheckAll" v-on:click="uncheckAll" style="cursor: pointer">Отменить все</a>
              </div>
              <md-table v-model="AllBooks" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell><input type="checkbox" :value="item.id" v-model="books"></md-table-cell>
                  <md-table-cell>{{ item.id }}</md-table-cell>
                  <md-table-cell>{{ item.name }},{{item.author}},{{item.year}}.</md-table-cell>

                </md-table-row>
              </md-table>
            </div>
            <md-button  type="submit"  class="md-raised md-success" style="margin-right: 20px;">
              Сохранить книгу
            </md-button>
            <md-button  v-on:click="back" class="md-raised md-danger" >
                Назад
            </md-button>


          </md-card-content>
        </md-card>
        </form>
      </div>

      <input type="hidden" v-model="books_val">

    </div>
  </div>
</template>

<script>
  import university from "../../../../store/modules/university";

  export default {
    data() {
      return {
        books: []
      }
    },

    methods:{
      uncheckAll() {
        this.books = [];
      },
      checkAll() {
        let books_array = [];
        this.AllBooks.forEach(function (item) {
          books_array.push(item.id);
        });

        this.books = [];
        this.books = books_array;
      },
      saveBooks(){
        this.$store.dispatch('university/storeBooks', {
          id: this.$route.params.id,
          books: this.books,
        }).then(response => {
          this.$router.push('/admin/universities/' +this.$route.params.id+ '/books');
        }).catch(error => {
          this.errorNotify();
        });

      },
      back(){
        this.$router.push('/admin/universities/' +this.$route.params.id+ '/books');
      }
    },

    computed: {
      AllBooks() {
        return this.$store.getters['book/Books'];
      },
      BooksArray() {
        return this.$store.getters['university/BooksArray'];
      },
      books_val: {
        get () {
          this.books = this.BooksArray;
        }
      },
    },

    beforeMount() {
      this.$store.dispatch("book/getList");
      this.$store.dispatch("university/getBooksArray", {
        id: this.$route.params.id,
      });
    }
  }
</script>
