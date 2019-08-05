<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="purple">
                        <h4 class="title">Администраторы</h4>
                    </md-card-header>
                    <md-card-content>
                        <md-button v-on:click="goToAddAdmin" class="md-raised md-success" style="margin-right: 20px;">
                            Добавить нового админстратора
                        </md-button>

                        <UserAdminTable table-header-color="green"></UserAdminTable>

                    </md-card-content>
                </md-card>
                <md-card>
                    <md-card-header data-background-color="purple">
                        <h4 class="title">Список пользователей</h4>
                    </md-card-header>
                    <md-card-content>
                        <md-button v-on:click="goToAddUser" class="md-raised md-success" style="margin-right: 20px;">
                            Добавить нового пользователя
                        </md-button>
                        <div class="dataTables_length" id="usersTable_length"><label>Показать
                            <div class="form-group"><select name="usersTable_length" aria-controls="usersTable"
                                                            class="custom-select custom-select-sm form-control form-control-sm">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="-1">Все</option>
                            </select><span class="material-input"></span></div>
                            записей</label></div>
                        <div id="usersTable_filter" class="dataTables_filter"><label>Поиск:
                            <div class="form-group is-empty"><input type="search" class="form-control form-control-sm"
                                                                    placeholder="" aria-controls="usersTable"><span
                                    class="material-input"></span></div>
                        </label></div>

                        <UserNotAdminTable table-header-color="green"></UserNotAdminTable>

                    </md-card-content>
                </md-card>
            </div>


        </div>
    </div>
</template>

<script>
    import UserAdminTable from "./Partials/UserAdminTable";
    import UserNotAdminTable from "./Partials/UserNotAdminTable";


    export default {
        components: {
            UserAdminTable,
            UserNotAdminTable,
        },
        methods: {

            goToAddAdmin() {
            this.$router.push('/admin/users/admin/add');
        },
            goToAddUser() {
            this.$router.push('/admin/users/user/add');
        },
    }
    }
</script>
