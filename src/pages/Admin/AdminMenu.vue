<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>library_books</md-icon>
          </template>

          <template slot="content">
            <p class="category">Книги</p>
            <h3 class="title">245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <router-link to="/admin/books">
                <md-icon>arrow_forward</md-icon>
                Перейти
              </router-link>
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>work</md-icon>
          </template>

          <template slot="content">
            <p class="category">Дисциплины
            </p>
            <h3 class="title">75</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <router-link to="/admin/subjects">
                <md-icon>arrow_forward</md-icon>
                Перейти
              </router-link>
            </div>
          </template>
        </stats-card>
      </div>
      <div
              class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>account_balance</md-icon>
          </template>

          <template slot="content">
            <p class="category">Университеты</p>
            <h3 class="title">
              12
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <router-link to="/admin/universities">
                <md-icon>arrow_forward</md-icon>
                Перейти
              </router-link>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fab fa-twitter"></i>
          </template>

          <template slot="content">
            <p class="category">Folowers</p>
            <h3 class="title">+245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";

export default {
  components: {
    StatsCard,
  },
  data() {
    return {

    };
  }
};
</script>
