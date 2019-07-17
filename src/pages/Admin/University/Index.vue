<template>
  <div class="content">
    <div class="md-layout">
      <div
              class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Учебные заведения</h4>
            <p class="category">Здесь вы можете редактировать, активировать и деактивировать учебные заведения. Ученики деактивированных учебных заведении не смогут войти на сайт</p>
          </md-card-header>
          <md-card-content>
              <md-button v-on:click="goToAddPage" class="md-raised md-success">
                <i class="md-icon md-icon-font text-info md-theme-default">add</i> Добавить новое учебное заведение
              </md-button>
            <Table table-header-color="green"></Table>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>

<script>
  import Table from "./Partials/Table";

  export default {
    components: {
      Table
    },
    methods: {
      goToAddPage() {
        this.$router.push('/admin/universities/add');
      }
    }
  };
</script>
