<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
        <form @submit.prevent="saveUniversity">
          <md-card>

            <md-card-header data-background-color="purple">
              <h4 class="title">Добавление учебного заведения</h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Название учебного заведения</label>
                    <md-input required v-model="name" type="text"></md-input>
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
      name: ''
    };
  },
  methods: {
    saveUniversity() {
      this.$store.dispatch('university/store', {
        name: this.name,
      }).then(response => {
        this.$router.push('/admin/universities');
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
