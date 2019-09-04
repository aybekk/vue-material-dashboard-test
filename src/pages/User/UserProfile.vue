<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-85 md-small-size-100 md-size-50">
        <user-card> </user-card>
      </div>
    </div>
    <div class="md-layout">

      <div
              class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Книги:</span>
            <md-tabs class="md-primary" md-alignment="left" >
              <md-tab id="tab-home" md-label="Популярные" md-icon="favorite_border">
                <nav-tabs-table-one>
                </nav-tabs-table-one>
              </md-tab>

              <md-tab id="tab-pages" md-label="Читаемые" md-icon="done_all">
                <nav-tabs-table-two></nav-tabs-table-two>
              </md-tab>

              <md-tab id="tab-posts" md-label="Новинки" md-icon="history">
                <nav-tabs-table-three></nav-tabs-table-three>
              </md-tab>
            </md-tabs>
            <div class="md-layout-item md-size-100">
              <md-button class="md-raised md-primary md-block">Все книги
              </md-button>
            </div>
          </template>
        </nav-tabs-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Ваши последние книги </h4>
            <p class="category">В последний раз, вы открывали книгу 2019-08-29 11:59:34</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
          <div class="md-layout-item md-size-100">
            <md-button data-background-color="orange"  class=" md-block">Подробнее
            </md-button>
          </div>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "./Partials/UserCard";
import NavTabsCard from "./Partials/NavTabsCard";
import NavTabsTableOne from "./Partials/NavTabsTableOne";
import NavTabsTableTwo from "./Partials/NavTabsTableTwo";
import NavTabsTableThree from "./Partials/NavTabsTableThree";
import OrderedTable from "./Partials/OrderedTable";




export default {
  components: {
    UserCard,
    NavTabsCard,
    OrderedTable,
    NavTabsTableOne,
    NavTabsTableTwo,
    NavTabsTableThree,
  }
};
</script>
