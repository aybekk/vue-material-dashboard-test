<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Список дисциплин</h4>
          </md-card-header>
          <md-card-content>
              <md-button v-on:click="goToAddDisciplin" class="md-raised md-success">
                <i class="md-icon md-icon-font text-info md-theme-default">add</i> Добавить дисциплину
              </md-button>
            <SubjectTable table-header-color="green"></SubjectTable>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>

<script>
  import SubjectTable from "../Subject/Partials/SubjectTable";

  export default {
    components: {
      SubjectTable
    },
    methods: {
      goToAddDisciplin() {
        this.$router.push('/admin/subjects/add');
      }
    }
  };
</script>
