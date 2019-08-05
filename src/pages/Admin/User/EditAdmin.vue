<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
                <form @submit.prevent="editAdmin">
                    <md-card>

                        <md-card-header data-background-color="purple">
                            <h4 class="title">Редактирование пользователя</h4>
                        </md-card-header>

                        <md-card-content>
                            <div class="md-layout">
                                <div class="md-layout-item md-size-100">
                                    <md-field>
                                        <label>Имя</label>
                                        <md-input required v-model="name_val" type="text"></md-input>
                                    </md-field>
                                    <md-field>
                                        <label>Фамилия</label>
                                        <md-input  v-model="second_name_val" type="text"></md-input>
                                    </md-field>
                                    <md-field>
                                        <label>Email</label>
                                        <md-input required v-model="email_val" type="text"></md-input>
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-size-100">
                                    <md-button type="submit" class="md-raised md-primary md-block">Сохранить</md-button>
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
                email: '',
                second_name:'',
            }
        },
        computed: {
            User() {
                return this.$store.getters['user/User'];
            },
            AuthUser() {
                return this.$store.getters['auth/userInfo'];
            },
            name_val: {
                get () {
                    if(this.User) {
                        this.name = this.User.name;
                        return this.User.name;
                    }
                },
                set (value) {
                    this.name = value;
                }
            },
            email_val: {
                get () {
                    if(this.User) {
                        this.email = this.User.email;
                        return this.User.email;
                    }
                },
                set (value) {
                    this.email = value;
                }
            },
            second_name_val: {
                get () {
                    if(this.User) {
                        this.second_name = this.User.second_name;
                        return this.User.second_name;
                    }
                },
                set (value) {
                    this.second_name = value;
                }
            },
        },
        methods: {

        },
        beforeMount() {
            this.$store.dispatch('user/getUser', {
                id: this.$route.params.id,
            })
        }
    };
</script>
