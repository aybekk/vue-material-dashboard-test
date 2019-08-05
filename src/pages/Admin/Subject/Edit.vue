<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
        <form @submit.prevent="editSubject">
          <md-card>

            <md-card-header data-background-color="purple">
              <h4 class="title">Редактирование дисциплины</h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Наименование дисциплины</label>
                    <md-input required v-model="name_val" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item">
                  <select v-model="category_val" class="form-control" required style="width: 100%">
                    <option value="">Выберите категорию</option>
                    <option value="hum-phis">Гуманитарно-техническая</option>
                    <option value="medical">Медицинская</option>
                    <option value="other">Другие</option>
                  </select>
                  <br><br>
                  <br>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-button type="submit" class="md-raised md-primary md-block">Изменить</md-button>
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
    }
  },
  computed: {
    name_val: {
      get () {
        this.name = this.SubjectName;
        return this.SubjectName;
      },
      set (value) {
        this.name = value;
      }
    },
    category_val: {
      get () {
        this.category = this.SubjectCategory;
        return this.SubjectCategory;
      },
      set (value) {
        this.category = value;
      }
    },
    SubjectName() {
      const Subject = this.$store.getters['subject/Subject'];
      if(Subject) {
        return Subject.name;
      }
    },
    SubjectCategory() {
      const Subject = this.$store.getters['subject/Subject'];
      if(Subject) {
        return Subject.category;
      }
    }
  },
  methods: {
    editSubject() {
      this.$store.dispatch('subject/update', {
        name: this.name,
        category: this.category,

        id: this.$route.params.id,
      }).then(response => {
        this.$router.push('/admin/subjects');
      }).catch(error => {

      });
    },
  },
  beforeMount() {
    this.$store.dispatch('subject/getSubject', {
      id: this.$route.params.id,
    })
  }
};
</script>
