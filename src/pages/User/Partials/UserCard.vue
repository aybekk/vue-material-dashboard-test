<template>
    <stats-card data-background-color="green">
        <template slot="header">
            <md-icon>person</md-icon>
        </template>

        <template slot="content">
            <p class="category">{{ userGroupName }}</p>
            <h3 class="title">
                {{ userInfo.name }}
            </h3>
            <p>{{userInfo.email}}</p>
        </template>

        <template slot="footer">
            <div class="stats">
                <md-icon class="text-info">assignment_ind</md-icon>
                 Карточка читателя

            </div>
        </template>
    </stats-card>
</template>
<script>
    import StatsCard from '@/components/Cards/StatsCard'

    export default {
        name: "user-card",
        data() {
            return {};
        },
        components: {
            StatsCard
        },
        computed: {
            userInfo() {
                return this.$store.getters['auth/userInfo'];
            },
            userGroupName() {
                const group = this.$store.getters['auth/userGroup'];
                switch (group) {
                    case 'admin':
                        return 'Менеджер сайта';
                    case 'user':
                        return 'Читатель';
                    case 'librarian':
                        return 'Библиотекарь';
                }
            }
        },
    };
</script>
<style></style>
