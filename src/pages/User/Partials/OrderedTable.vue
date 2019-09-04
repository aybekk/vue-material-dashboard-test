<template>
  <div>
    <md-table v-model="books" >
      <md-table-row v-model="Books" slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Название книги">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Дата">{{ item.updated_at }}</md-table-cell>

      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {


  data() {
    return{
      books:[]
    }
  },
  computed:{
    Books(){
      return this.$store.getters['user/LastRead']
    }
  },
  beforeMount() {
    this.$store.dispatch("user/getStats");
  }
};
</script>
