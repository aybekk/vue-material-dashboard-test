<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
        <form @submit.prevent="saveUniversityIp">
          <md-card>

            <md-card-header data-background-color="purple">
              <h4 class="title">Добавление IP адреса/ов - {{ University.name }}</h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Ip адрес</label>
                    <md-input required v-model="ip_start" type="text"></md-input>
                  </md-field>
                  <md-field>
                    <label>Ip адрес- конец диапазона(не обязательно)</label>
                    <md-input v-model="ip_end" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-button type="submit" class="md-raised md-primary md-block">Добавить</md-button>
                </div>
              </div>
            </md-card-content>

          </md-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ip_start: '',
      ip_end: '',
    };
  },
  mounted() {
    this.$store.dispatch("university/getUniversity", {
      id: this.$route.params.id,
    });
  },
  computed: {
    University() {
      return this.$store.getters['university/University']
    }
  },
  methods: {
    saveUniversityIp() {
      this.$store.dispatch('university/storeIp', {
        id: this.$route.params.id,
        ip_start: this.ip_start,
        ip_end: this.ip_end,
      }).then(response => {
        this.$router.push('/admin/universities/' +this.$route.params.id+ '/ip-addresses');
      }).catch(error => {
        this.errorNotify();
      });
    },
    errorNotify(verticalAlign, horizontalAlign) {
      this.$notify({
        message:
                "Ошибка сохранения!",
        icon: "add_alert",
        horizontalAlign: 'center',
        verticalAlign: 'top',
        type: 'danger'
      });
    }
  }
};
</script>
