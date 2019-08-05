<template>
    <div>
        <md-table v-model="Admins" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID">{{ item.id}}</md-table-cell>
                <md-table-cell md-label="Имя">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Фамилия">{{ item.second_name }}</md-table-cell>
                <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="Действия">

                    <md-button v-on:click="toEdit(item.id)" class="md-simple md-primary md-sm university-action-btns" title="Редактировать">
                        <i class="md-icon md-icon-font text-info">edit</i>
                    </md-button>
                    <md-button v-if="AuthID !== item.id" v-on:click="destroyUser(item.id)" class="md-simple md-danger md-sm university-action-btns" title="Удалить">
                        <i class="md-icon md-icon-font text-info">close</i>
                    </md-button>
                    <md-button v-if="AuthID === item.id" class="md-simple disabled md-sm university-action-btns">
                        <i class="md-icon md-icon-font text-info">close</i>
                    </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>




<script>

    export default {
        data(){
            return {
                name:'',
                email:'',
                id:'',
                second_name:'',

            };
        },
        methods: {
            destroyUser(id) {
                if(confirm('Вы точно хотите удалить Админстратору ?'))
                    this.$store.dispatch('user/destroyUser', {
                        id:id,
                    }).then(response => {
                        this.$store.dispatch("user/getAdmins");
                    }).catch(error => {
                        this.errorNotify();
                    });
            },
            toEdit(id){
                this.$router.push('/admin/users/admin/' + id +'/edit');
            },


        },
        computed: {
            AuthID() {
                let data = this.$store.getters['auth/userInfo'];
                if(data) {
                    return data.id;
                }
                return null;
            },
            Admins() {
                return this.$store.getters['user/Admins'];
            }
        },
        beforeMount() {
            this.$store.dispatch("user/getAdmins");
        }


    }


</script>

