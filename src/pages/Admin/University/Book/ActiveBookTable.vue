<template>
    <div>
        <md-table v-model="Books" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell>{{ item.id }}</md-table-cell>
                <md-table-cell>{{ item.name }},{{item.author}},{{item.year}}.</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>




<script>

    export default {


        data(){
            return {
                name:'',
                author:'',
                year:'',
            };
        },
        methods: {
            toEdit(id){
                this.$router.push('/admin/universities/' + id +'/books/edit');
            },


        },
        computed: {
            Books() {
                return this.$store.getters['university/Books'];
            }
        },
        beforeMount() {
            this.$store.dispatch("university/getBooks", {
                id: this.$route.params.id,
            });
        }
    }


</script>

