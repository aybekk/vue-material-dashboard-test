<template>
    <div>
        <md-table v-model="Books" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell>{{ counter++ }}</md-table-cell>
                <md-table-cell>{{ item.name }},{{item.author}},{{item.year}}.</md-table-cell>
                <md-table-cell>

                    <md-button v-on:click="toEdit(item.id)" class="md-simple md-primary md-sm university-action-btns" title="Редактировать">
                        <i class="md-icon md-icon-font text-info">edit</i>
                    </md-button>
                    <md-button v-on:click="destroyBook(item.id)" class="md-simple md-danger md-sm university-action-btns" title="Удалить">
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
                counter: 1,
                name:'',
                author:'',
                year:'',
            };
        },
        methods: {
            destroyBook(id) {
                if(confirm('Вы точно хотите удалить Дисциплину ?'))
                    this.$store.dispatch('book/destroyBook', {
                        id:id,
                    }).then(response => {
                        this.$store.dispatch("book/getList", {
                            id: this.$route.params.id,
                        });
                    }).catch(error => {
                        this.errorNotify();
                    });
            },
            toEdit(id){
                this.$router.push('/admin/books/' + id +'/edit');
            },


        },
        computed: {
            Books() {
                return this.$store.getters['book/Books'];
            }
        },
        beforeMount() {
            this.$store.dispatch("book/getList");
        }
    }


</script>

