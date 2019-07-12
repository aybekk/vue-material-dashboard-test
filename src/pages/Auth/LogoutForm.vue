<template>
    <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Выйти</h4>


        </md-card-header>

        <form @submit.prevent="logout">
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
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label for="password">Name</label>
                            <md-input id="name" v-model="name" type="name"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-right">
                        <md-button type="submit" class="md-primary md-block">регитрация</md-button>
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
                name:''
            };
        },
        methods: {
            register() {
                this.$store.dispatch('retrieveToken', {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                }).then(response => {
                    this.$router.push('/dashboard')
                });
            }
        }
    };

</script>
<style>


</style>
