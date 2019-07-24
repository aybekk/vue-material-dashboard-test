<template>
  <div>
    <div v-if="Subjects.hums">
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

          <md-button class="md-simple md-primary md-sm university-action-btns">
            <i class="md-icon md-icon-font text-info">edit</i>
          </md-button>
          <md-button class="md-simple md-danger md-sm university-action-btns">
            <i class="md-icon md-icon-font text-info">close</i>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    </div>
    <div>
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

          <md-button class="md-simple md-primary md-sm university-action-btns">
            <i class="md-icon md-icon-font text-info">edit</i>
          </md-button>
          <md-button class="md-simple md-danger md-sm university-action-btns">
            <i class="md-icon md-icon-font text-info">close</i>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    </div>
    <div v-if="!null" "Subjects.others">
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

          <md-button class="md-simple md-primary md-sm university-action-btns">
            <i class="md-icon md-icon-font text-info">edit</i>
          </md-button>
          <md-button class="md-simple md-danger md-sm university-action-btns">
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
