<template>
    <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Регистрация</h4>


        </md-card-header>

        <form @submit.prevent="register">
            <md-card-content>
                <div class="md-layout">

                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label for="password">Имя</label>
                            <md-input id="name" v-model="name" type="name" required></md-input>
                        </md-field>
                        <md-field>
                            <label for="password">Фамилия</label>
                            <md-input id="second_name" v-model="second_name" type="second_name" required></md-input>
                        </md-field>
                        <md-field>
                            <label for="email">Email</label>
                            <md-input id="email" v-model="email" type="email" required></md-input>
                        </md-field>


                        <md-field>
                            <label for="password">Пароль</label>
                            <md-input id="password" v-model="password" type="password" required></md-input>
                        </md-field>
                        <md-field>
                            <label for="password">Повторите пароль</label>
                            <md-input id="password_confirm" v-model="password_confirm" type="password" required></md-input>
                        </md-field>



                        <md-button type="submit" class="md-primary md-block">Регистрация</md-button>
                    </div>



                </div>
            </md-card-content>
        </form>
    </md-card>
</template>
<script>
    export default {
        name: "register-form",
        props: {
            dataBackgroundColor: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                email: '',
                password: '',
                name:'',
                second_name:'',
                password_confirm:'',
            };
        },
        methods: {
            register() {
                if(this.password !== this.password_confirm) {
                    alert('Введенные Вами пароли не совпадают!');
                    return;
                }

                this.$store.dispatch('auth/registerAndRetrieveToken', {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    second_name: this.second_name
                }).then(response => {
                    this.$router.push('/books')
                });
            }
        }
    };

</script>
<style>


</style>
