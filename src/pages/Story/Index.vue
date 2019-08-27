
    <template>
        <div class="content">
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                    <md-card>
                        <md-card-header data-background-color="purple">

                            <h4 class="title">История вашей активности</h4>
                            <p class="category text-white">Ваша активность на сайте</p>

                        </md-card-header>
                        <md-card-content>
                            <div class="md-layout">
                                <div style="margin: 30px 0;" class="alert alert-info alert-with-icon" data-notify="container">
                                    <i data-notify="icon" class="material-icons">error_outline</i>
                                    <span data-notify="message">Здесь будет история вашей активности</span>
                                </div>
                            </div>
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