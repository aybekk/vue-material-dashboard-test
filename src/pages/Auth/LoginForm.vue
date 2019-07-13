<template>
    <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Войти</h4>

            <p class="category">Введите свои данные, чтобы начать пользоваться ресурсом</p>
        </md-card-header>

        <form @submit.prevent="login">
            <md-card-content>
                <div class="md-layout">

                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label for="email">Email</label>
                            <md-input id="email" v-model="email" type="email"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label for="password">Пароль</label>
                            <md-input id="password" v-model="password" type="password"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-right">
                        <md-button type="submit" class="md-primary md-block">Войти</md-button>
                    </div>


                    <div class="md-layout-item md-size-100 text-center" style="margin-top: 30px;">
                        <p><router-link to="/register">Зарегистрироваться</router-link></p>
                        <p><a href="/password-reset">Забыли пароль?</a></p>
                    </div>
                </div>
            </md-card-content>
        </form>
    </md-card>
</template>
<script>
    export default {
        name: "login-form",
        props: {
            dataBackgroundColor: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            login() {
                this.$store.dispatch('retrieveToken', {
                    email: this.email,
                    password: this.password,
                }).then(response => {
                    this.$router.push('/dashboard')
                });
            }
        }
    };

</script>
<style>


</style>
