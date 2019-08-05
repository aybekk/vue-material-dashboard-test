<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Книги университета - {{ University.name }}</h4>
            <p class="category">Список книг доступные для студентов данного университета</p>
          </md-card-header>
          <md-card-content>
            <md-button v-on:click="goToEditPage" class="md-raised md-success" style="margin-right: 20px;">
              <i class="md-icon md-icon-font text-info md-theme-default">edit</i>
              Редактировать книги
            </md-button>
            <md-button class="md-raised md-primary" >
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
  import BookTable from "./ActiveBookTable";
  export default {
    components: {
      BookTable
    },

    data() {
      return {
        ip_start: '',
        ip_end: '',
      };
    },


    beforeMount() {
      this.$store.dispatch("subject/getSubject", {
        id: this.$route.params.id,
      });
    },


    computed: {
      University() {
        return this.$store.getters['subject/Subject']
      }
    },

    methods: {
      goToEditPage() {
        this.$router.push('/admin/subjects/' + this.$route.params.id +'/books/edit');
      }
    }
  }

</script>