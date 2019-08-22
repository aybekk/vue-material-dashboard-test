
    <template>
        <div class="content">
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                    <md-card>
                        <md-card-header data-background-color="purple">
                            <h4 class="title"> Научные статьи</h4>
                        </md-card-header>
                        <md-card-content>
                            <md-button v-on:click="goToAddDisciplin" class="md-raised md-success pull-right">
                                <i class="md-icon md-icon-font text-info md-theme-default">add</i> Добавить статью
                            </md-button>
                            <ArticlesTable table-header-color="green"></ArticlesTable>
                        </md-card-content>
                    </md-card>
                </div>


            </div>
        </div>
    </template>

<script>
    export default {
        name: "Index.vue"
    }
</script>

<style scoped>

</style>