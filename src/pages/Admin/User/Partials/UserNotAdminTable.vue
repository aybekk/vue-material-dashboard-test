<template>
    <div>
        <md-table v-model="users"  :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell  md-label="ID">{{ item.id}}</md-table-cell>
                <md-table-cell  md-label="Имя">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Фамилия">{{ item.second_name }}</md-table-cell>
                <md-table-cell  md-label="Email">{{ item.email }}</md-table-cell>
                <md-table-cell  md-label="Группа">{{ item.group }}</md-table-cell>
                <md-table-cell  md-label="Дата регистрации">{{ item.created_at }}</md-table-cell>
                <md-table-cell  md-label="Университет">{{ item.university_name }} </md-table-cell>
                <md-table-cell md-label="Действия" >

                    <md-button v-on:click="toEdit(item.id)" class="md-simple md-primary md-sm university-action-btns" title="Редактировать">
                        <i class="md-icon md-icon-font text-info">edit</i>
                    </md-button>
                    <md-button v-on:click="destroyUser(item.id)" class="md-simple md-danger md-sm university-action-btns" title="Удалить">
                        <i class="md-icon md-icon-font text-info">close</i>
                    </md-button>
                </md-table-cell>

            </md-table-row>
        </md-table>

        <div><ul class="pagination">

            <li class="disabled"><span>&laquo;</span></li>





            <li class="active"><span>1</span></li>
            <li><a href="https://aknurpress.kz/books?page=2">2</a></li>
            <li><a href="https://aknurpress.kz/books?page=3">3</a></li>
            <li><a href="https://aknurpress.kz/books?page=4">4</a></li>
            <li><a href="https://aknurpress.kz/books?page=5">5</a></li>
            <li><a href="https://aknurpress.kz/books?page=6">6</a></li>
            <li><a href="https://aknurpress.kz/books?page=7">7</a></li>
            <li><a href="https://aknurpress.kz/books?page=8">8</a></li>

            <li class="disabled"><span>...</span></li>





            <li><a href="https://aknurpress.kz/books?page=46">46</a></li>
            <li><a href="https://aknurpress.kz/books?page=47">47</a></li>


            <li><a href="https://aknurpress.kz/books?page=2" rel="next">&raquo;</a></li>
        </ul>
        </div>
    </div>
</template>




<script>

    export default {
        data() {
            return {
                users: [],
                universities: [],
            }
        },
        methods: {
            destroyUser(id) {
                if(confirm('Вы точно хотите удалить Пользователя ?'))
                    this.$store.dispatch('user/destroyUser', {
                        id:id,
                    }).then(response => {
                        this.$store.dispatch("user/getUsers");
                    }).catch(error => {
                        this.errorNotify();
                    });
            },
            toEdit(id){
                this.$router.push('/admin/users/' + id +'/edit');
            },

            setUniversityNames() {
                const univers_array = this.universities;
                this.users.forEach(function (item) {
                    item.university_name = univers_array.find(university => item.university_id === university.id).name;
                });
            }
        },
        beforeMount() {
            this.$store.dispatch("university/getList").then(response => {
                this.universities = this.$store.getters["university/Universities"];
                if(this.users.length !== 0) {
                    this.setUniversityNames();
                }
            });

            this.$store.dispatch("user/getUsers").then(response => {
                this.users = this.$store.getters["user/Users"];
                if(this.universities.length !== 0) {
                    this.setUniversityNames();
                }
            });

        },
    }


</script>

<style scoped>
    .pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}

    .pagination>li>a,
    .pagination>li>span {
        border: 0;
        border-radius: 30px !important;
        transition: all .3s;
        padding: 0px 11px;
        margin: 0 3px;
        min-width: 30px;
        height: 30px;
        line-height: 30px;
        color: #999999;
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;
        background: transparent;
    }

    .pagination>li>a:hover,
    .pagination>li>a:focus,
    .pagination>li>span:hover,
    .pagination>li>span:focus {
        color: #999999;
    }

    .pagination>.active>a,
    .pagination>.active>span {
        color: #999999;
        text-align: center;
    }

    .pagination>.active>a,
    .pagination>.active>a:focus,
    .pagination>.active>a:hover,
    .pagination>.active>span,
    .pagination>.active>span:focus,
    .pagination>.active>span:hover {
        background-color: #9c27b0;
        border-color: #9c27b0;
        color: #FFFFFF;
        box-shadow: 0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12), 0 2px 4px -1px rgba(156, 39, 176, 0.2);
    }

    .pagination.pagination-info>.active>a,
    .pagination.pagination-info>.active>a:focus,
    .pagination.pagination-info>.active>a:hover,
    .pagination.pagination-info>.active>span,
    .pagination.pagination-info>.active>span:focus,
    .pagination.pagination-info>.active>span:hover {
        background-color: #00bcd4;
        border-color: #00bcd4;
        box-shadow: 0 4px 5px 0 rgba(0, 188, 212, 0.14), 0 1px 10px 0 rgba(0, 188, 212, 0.12), 0 2px 4px -1px rgba(0, 188, 212, 0.2);
    }

    .pagination.pagination-success>.active>a,
    .pagination.pagination-success>.active>a:focus,
    .pagination.pagination-success>.active>a:hover,
    .pagination.pagination-success>.active>span,
    .pagination.pagination-success>.active>span:focus,
    .pagination.pagination-success>.active>span:hover {
        background-color: #4caf50;
        border-color: #4caf50;
        box-shadow: 0 4px 5px 0 rgba(76, 175, 80, 0.14), 0 1px 10px 0 rgba(76, 175, 80, 0.12), 0 2px 4px -1px rgba(76, 175, 80, 0.2);
    }

    .pagination.pagination-warning>.active>a,
    .pagination.pagination-warning>.active>a:focus,
    .pagination.pagination-warning>.active>a:hover,
    .pagination.pagination-warning>.active>span,
    .pagination.pagination-warning>.active>span:focus,
    .pagination.pagination-warning>.active>span:hover {
        background-color: #ff9800;
        border-color: #ff9800;
        box-shadow: 0 4px 5px 0 rgba(255, 152, 0, 0.14), 0 1px 10px 0 rgba(255, 152, 0, 0.12), 0 2px 4px -1px rgba(255, 152, 0, 0.2);
    }

    .pagination.pagination-danger>.active>a,
    .pagination.pagination-danger>.active>a:focus,
    .pagination.pagination-danger>.active>a:hover,
    .pagination.pagination-danger>.active>span,
    .pagination.pagination-danger>.active>span:focus,
    .pagination.pagination-danger>.active>span:hover {
        background-color: #f44336;
        border-color: #f44336;
        box-shadow: 0 4px 5px 0 rgba(244, 67, 54, 0.14), 0 1px 10px 0 rgba(244, 67, 54, 0.12), 0 2px 4px -1px rgba(244, 67, 54, 0.2);
    }
</style>
