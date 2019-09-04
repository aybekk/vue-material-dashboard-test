
    <template>
        <div class="content">
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                    <md-card>
                        <md-card-header data-background-color="purple">

                            <h4 class="title">История вашей активности</h4>
                            <p class="category text-white">Ваша активность на сайте</p>

                        </md-card-header>

                        <StoryTable table-header-color="green"></StoryTable>
                    </md-card>
                </div>



            </div>


        </div>
    </template>


<script>
    import StoryTable from "../Story/Partials/StoryTable";
    export default {
        components: {
            StoryTable
        },

    }
</script>

<style scoped>

</style>