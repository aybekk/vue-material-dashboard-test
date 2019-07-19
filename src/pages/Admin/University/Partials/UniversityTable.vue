<template>
  <div>
    <md-table v-model="Universities" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell>{{ item.name }}</md-table-cell>
        <md-table-cell>
          <md-button v-on:click="goToAddIp(item.id)" class="md-simple md-success">
            <i class="md-icon md-icon-font">card_membership</i> ПРОСМОТР IP АДРЕСОВ
          </md-button>
        </md-table-cell>
        <md-table-cell>
          <md-button class="md-simple md-info md-sm">
            <i class="md-icon md-icon-font text-info">library_books</i> АКТИВИРОВАННЫЕ КНИГИ
          </md-button>
        </md-table-cell>
        <md-table-cell>
          <md-button class="md-simple md-info md-sm university-action-btns">
            <i class="md-icon md-icon-font text-info">trending_up</i>
          </md-button>
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
      goToAddIp(id) {
        this.$router.push('/admin/universities/' + id + '/ip-addresses');
      }
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
        selected: [],
      };
    },
    beforeMount() {
      this.$store.dispatch("university/getList");
    },
    computed: {
      Universities() {
        return this.$store.getters['university/Universities']
      }
    }
  };
</script>
