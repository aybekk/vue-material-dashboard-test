<template>
  <div>
    <div v-if="Subjects.hums.length !== 0">
    <h3>Гуманитарно-технические</h3>
    <md-table v-model="Subjects.hums">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell>{{ item.name }}</md-table-cell>

        <md-table-cell>
          <md-button  v-on:click="goToBooks(item.id)" class="md-simple md-info md-sm">
            <i class="md-icon md-icon-font text-info">library_books</i>  КНИГИ
          </md-button>
        </md-table-cell>
        <md-table-cell>

          <md-button v-on:click="toEdit(item.id)"class="md-simple md-primary md-sm university-action-btns" title="Редактировать">
            <i class="md-icon md-icon-font text-info">edit</i>
          </md-button>
          <md-button v-on:click="destroyDiscipline(item.id)" class="md-simple md-danger md-sm university-action-btns"title="Удалить">
            <i class="md-icon md-icon-font text-info">close</i>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    </div>
    <div v-if="Subjects.medicals.length !== 0">
    <h3>Медицинские</h3>
    <md-table v-model="Subjects.medicals">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell>{{ item.name }}</md-table-cell>

        <md-table-cell>
          <md-button  v-on:click="goToBooks(item.id)" class="md-simple md-info md-sm">
            <i class="md-icon md-icon-font text-info">library_books</i>  КНИГИ
          </md-button>
        </md-table-cell>
        <md-table-cell>

          <md-button v-on:click="toEdit(item.id)" class="md-simple md-primary md-sm university-action-btns" title="Редактировать">
            <i class="md-icon md-icon-font text-info">edit</i>
          </md-button>
          <md-button v-on:click="destroyDiscipline(item.id)" class="md-simple md-danger md-sm university-action-btns"title="Удалить">
            <i class="md-icon md-icon-font text-info">close</i>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    </div>
    <div v-if="Subjects.others.length !== 0">
    <h3>Другие</h3>
    <md-table v-model="Subjects.others">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell>{{ item.name }}</md-table-cell>

        <md-table-cell>
          <md-button  v-on:click="goToBooks(item.id)" class="md-simple md-info md-sm">
            <i class="md-icon md-icon-font text-info">library_books</i>  КНИГИ
          </md-button>
        </md-table-cell>
        <md-table-cell>

          <md-button v-on:click="toEdit(item.id)" class="md-simple md-primary md-sm university-action-btns" title="Редактировать">
            <i class="md-icon md-icon-font text-info">edit</i>
          </md-button>
          <md-button v-on:click="destroyDiscipline(item.id)" class="md-simple md-danger md-sm university-action-btns" title="Удалить">
            <i class="md-icon md-icon-font text-info">close</i>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    </div>
  </div>
</template>

<style scoped>
  .university-action-btns {
    padding-left: 5px;
    padding-right: 5px;
  }
</style>

<script>


  export default {
    methods: {
      destroyDiscipline(id) {
        if(confirm('Вы точно хотите удалить Дисциплину ?'))
          this.$store.dispatch('subject/destroyDiscipline', {
            id:id,
          }).then(response => {
            this.$store.dispatch("subject/getList", {
              id: this.$route.params.id,
            });
        }).catch(error => {
          this.errorNotify();
        });
      },
      toEdit(id){
        this.$router.push('/admin/subjects/' + id +'/edit');
      },
      goToBooks(id){
        this.$router.push('/admin/subjects/' + id + '/books');
      },


    },
    name: "table",
    props: {
      tableHeaderColor: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        selected: [

        ],
      };
    },
    beforeMount() {
      this.$store.dispatch("subject/getList");
    },
    computed: {
      Subjects() {
        return this.$store.getters['subject/Subjects']
      }
    }
  };
</script>
