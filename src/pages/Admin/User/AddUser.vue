<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
                <form @submit.prevent="AddUser">
                    <md-card>

                        <md-card-header data-background-color="purple">
                            <h4 class="title">Добавление пользователя</h4>
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
                                        <md-input required v-model="second_name" type="text"></md-input>
                                    </md-field>
                                    <md-field>
                                        <label>Email</label>
                                        <md-input required v-model="email" type="text"></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item">
                                    <select v-model="group" class="form-control" required style="width: 100%">
                                            <option value="">Выберите группу</option>
                                            <option value="user">Читатель</option>
                                            <option value="librarian">Сотрудник университета</option>
                                    </select>
                                    <br><br>
                                    <select v-model="university_id" class="form-control" required style="width: 100%">
                                        <option value="">Выберите университет</option>
                                        <option v-for="item in ActiveUniversities" :value="item.id">
                                            {{ item.name }}
                                        </option>
                                    </select>
                                    <br>
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
                group:'',
                university_id:'',
            };
        },
        computed: {
            ActiveUniversities() {
                return this.$store.getters['university/ActiveUniversities'];
            },
        },

        beforeMount() {
            this.$store.dispatch('university/getActiveUniversities')
        },

        methods: {
            AddUser() {
                this.$store.dispatch('user/storeUser', {
                    name: this.name,
                    second_name: this.second_name,
                    email:this.email,
                    group:this.group,
                    university_id: this.university_id,
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


