<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
        <form @submit.prevent="editUniversity">
          <md-card>

            <md-card-header data-background-color="purple">
              <h4 class="title">Редактирование учебного заведения </h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Название учебного заведения</label>
                    <md-input required v-model="name_val" type="text"></md-input>
                  </md-field>
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
      };
    },
    computed: {
      name_val: {
        get() {
          if (this.getUniversity) {
            this.name = this.getUniversity.name;
            return this.getUniversity.name;
          }
        },
        set(value) {
          this.name = value;
        },

      },
      getUniversity() {
        return this.$store.getters['university/University'];
      }
    },



    beforeMount() {
      this.$store.dispatch("university/getUniversity", {
        id: this.$route.params.id,
      });
    },

    methods: {
      editUniversity() {
        this.$store.dispatch('university/update', {
          name: this.name,
          id: this.$route.params.id,
        }).then(response => {
          this.$router.push('/admin/universities');
        }).catch(error => {

        });
      },

      }

  };



</script>
