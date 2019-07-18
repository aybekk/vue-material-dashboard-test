<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">IP адреса - KAZNPU</h4>
            <p class="category">Список разрешенных IP адресов для регистрации в портале </p>
          </md-card-header>
          <md-card-content>
            <md-button v-on:click="goToIp" class="md-raised md-success">
              <i class="md-icon md-icon-font text-info md-theme-default">add</i> ДОБАВИТЬ IP АДРЕС
            </md-button>
            <md-table v-model="IpAddresses">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell>
                  98.192.35.225
                  <md-button class="md-simple md-danger md-sm" style="margin: 0;">
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
      goToIp(id) {
        this.$router.push('/admin/universities/' + id + '/ip-addresses/add');
      }
    },
    data() {
      return {
        IpAddresses: [
          {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout"
          },
          {
            name: "Minerva Hooper",
            salary: "$23,738",
            country: "Curaçao",
            city: "Sinaai-Waas"
          },
          {
            name: "Sage Rodriguez",
            salary: "$56,142",
            country: "Netherlands",
            city: "Overland Park"
          },
          {
            name: "Philip Chaney",
            salary: "$38,735",
            country: "Korea, South",
            city: "Gloucester"
          },
          {
            name: "Doris Greene",
            salary: "$63,542",
            country: "Malawi",
            city: "Feldkirchen in Kārnten"
          },
          {
            name: "Mason Porter",
            salary: "$78,615",
            country: "Chile",
            city: "Gloucester"
          }
        ]
      }
    }
  }
</script>