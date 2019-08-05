<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Список книг</h4>
            <p class="category">Список всех книг на сайте</p>
          </md-card-header>
          <md-card-content>
            <md-button  v-on:click="goToAddPage" class="md-raised md-success" style="margin-right: 20px;">
              Добавить книгу
            </md-button>
            <md-button  v-on:click="" class="md-raised md-primary" >
              <i class="md-icon md-icon-font text-info md-theme-default">print</i>  Распечатать
            </md-button>
            <BookTable table-header-color="green"></BookTable>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>

<script>
  import BookTable from "../Book/Partials/BookTable";


  export default {
    components: {
      BookTable
    },
    methods:{
      language() {
        this.$router.push('/admin/books/language');
      },
      goToAddPage() {
        this.$router.push('/admin/books/add');
      }
    }
  }
</script>
