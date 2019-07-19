<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">IP адреса - {{ University.name }}</h4>
            <p class="category">Список разрешенных IP адресов для регистрации в портале </p>
          </md-card-header>
          <md-card-content>
            <md-button v-on:click="goToAddIp" class="md-raised md-success">
              <i class="md-icon md-icon-font text-info md-theme-default">add</i> ДОБАВИТЬ IP АДРЕС
            </md-button>
            <md-table v-model="Ips">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell>
                 {{ longToIp(item.ip_start) }}<span v-if="item.ip_start !== item.ip_end">&nbsp;— {{ longToIp(item.ip_end) }}</span>
                  <md-button v-on:click="destroyIp(item.id)" class="md-simple md-danger md-sm" style="margin: 0;">
                    <i class="md-icon md-icon-font">library_books</i> Удалить
                  </md-button>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      goToAddIp(id) {
        this.$router.push('/admin/universities/' + this.$route.params.id + '/ip-addresses/add');
      },

      destroyIp(id) {
        if(confirm('Вы точно хотите удалить IP адрес?')) {
          this.$store.dispatch('university/destroyIp', {
            id: id,
            university_id: this.$route.params.id,
          }).then(response => {
            this.$store.dispatch("university/getIps", {
              id: this.$route.params.id,
            });
          }).catch(error => {
            this.errorNotify();
          });
        }
      },
      errorNotify(verticalAlign, horizontalAlign) {
        this.$notify({
          message:
                  "Ошибка удаления!",
          icon: "add_alert",
          horizontalAlign: 'center',
          verticalAlign: 'top',
          type: 'danger'
        });
      },

      longToIp(ip) {
        let part1 = ip & 255;
        let part2 = ((ip >> 8) & 255);
        let part3 = ((ip >> 16) & 255);
        let part4 = ((ip >> 24) & 255);

        return part4 + "." + part3 + "." + part2 + "." + part1;
      }
    },
    mounted() {
      this.$store.dispatch("university/getUniversity", {
        id: this.$route.params.id,
      });
      this.$store.dispatch("university/getIps", {
        id: this.$route.params.id,
      });
    },

    computed: {
      University() {
        return this.$store.getters['university/University']
      },
      Ips() {
        return this.$store.getters['university/Ips']
      }
    }
  }
</script>