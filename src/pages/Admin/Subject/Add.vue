<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
        <form @submit.prevent="saveSubject">
          <md-card>

            <md-card-header data-background-color="purple">
              <h4 class="title">Добавление дисциплины</h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Наименование дисциплины</label>
                    <md-input required v-model="name" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item">
                  <select v-model="category" class="form-control" required style="width: 100%">
                    <option value="">Выберите категорию</option>
                    <option value="hum-phis">Гуманитарно-техническая</option>
                    <option value="medical">Медицинская</option>
                    <option value="other">Другие</option>
                  </select>
                  <br><br>
                  <br>
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
      name: '',
      category: '',
    };
  },
  methods: {
    saveSubject() {
      this.$store.dispatch('subject/store', {
        name: this.name,
        category: this.category,
      }).then(response => {
        this.$router.push('/admin/subjects');
      }).catch(error => {
        this.errorNotify();
      });
    },
    errorNotify(verticalAlign, horizontalAlign) {
      this.$notify({
        message: "Ошибка сохранения!",
        icon: "add_alert",
        horizontalAlign: 'center',
        verticalAlign: 'top',
        type: 'danger'
      });
    }
  }
};
</script>
