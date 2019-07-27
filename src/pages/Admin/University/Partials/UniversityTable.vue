<template>
  <div>
    <md-table v-model="Universities" :table-header-color="tableHeaderColor">
      <md-table-row v-bind:class="{ 'tr-danger': !item.activated }" slot="md-table-row" slot-scope="{ item }">
        <md-table-cell>{{ item.name }}</md-table-cell>
        <md-table-cell>
          <md-button v-on:click="goToAddIp(item.id)" class="md-simple md-success">
            <i class="md-icon md-icon-font">card_membership</i> ПРОСМОТР IP АДРЕСОВ
          </md-button>
        </md-table-cell>
        <md-table-cell>
          <md-button  v-on:click="goToBooks(item.book)" class="md-simple md-info md-sm">
            <i class="md-icon md-icon-font text-info">library_books</i> АКТИВИРОВАННЫЕ КНИГИ
          </md-button>
        </md-table-cell>
        <md-table-cell>
          <md-button class="md-simple md-info md-sm university-action-btns" title="Статистика">
            <i class="md-icon md-icon-font text-info">trending_up</i>
          </md-button>
          <md-button v-on:click="toEdit(item.id)" class="md-simple md-primary md-sm university-action-btns" title="Редактировать">
            <i class="md-icon md-icon-font text-info">edit</i>
          </md-button>
          <md-button v-on:click="deactivate(item.id)" class="md-simple md-danger md-sm university-action-btns" title="Деактивировать" v-if="item.activated">
            <i class="md-icon md-icon-font text-info">close</i>
          </md-button>
          <md-button v-on:click="activate(item.id)" class="md-simple md-success md-sm university-action-btns" title="Активировать" v-if="!item.activated">
            <i class="md-icon md-icon-font text-info">add</i>
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

  .tr-danger td {
    background-color: #f2dede!important;
  }

  .md-table .tr-danger.md-table-row:hover {
    background-color: #f2dede!important;
  }
</style>

<script>
  export default {

    methods: {
      goToAddIp(id) {
        this.$router.push('/admin/universities/' + id + '/ip-addresses');
      },
      goToBooks(book){
        this.$router.push('/admin/universities/' + book + '/active-books');
      },
      toEdit(id){
        this.$router.push('/admin/universities/' + id +'/edit');
      },
      activate(id) {
        this.$store.dispatch('university/activate', {
          id:id,
        }).catch(error => {
          this.errorNotify();
        });
      },
      deactivate(id) {
        this.$store.dispatch('university/deactivate', {
         id:id,
        }).catch(error => {
          this.errorNotify();
        });
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
        selected: [],
        university_active: {
          2: true,
        }
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
