<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
                <form @submit.prevent="AddAdmin">
                    <md-card>

                        <md-card-header data-background-color="purple">
                            <h4 class="title">Добавление администратора</h4>
                        </md-card-header>

                        <md-card-content>
                            <div class="md-layout">
                                <div class="md-layout-item md-size-100">
                                    <md-field>
                                        <label>Имя</label>
                                        <md-input required v-model="name" type="text"></md-input>
                                    </md-field>
                                    <md-field>
                                        <label>Фамилия</label>
                                        <md-input  v-model="second_name" type="text"></md-input>
                                    </md-field>
                                    <md-field>
                                        <label>Email</label>
                                        <md-input required v-model="email" type="text"></md-input>
                                    </md-field>
                                </div>
                                <div class="col-xs-12" style="margin-top: 30px;">
                                    <div class="alert alert-info">
                                        Пароль для доступа к аккаунту будет выслан на введенный Email.
                                    </div>
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
                second_name: '',
                email:'',

            };
        },
        methods: {
            AddAdmin() {
                this.$store.dispatch('user/store', {
                    name: this.name,
                    second_name: this.second_name,
                    email:this.email,
                }).then(response => {
                    this.$router.push('/admin/users');
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


