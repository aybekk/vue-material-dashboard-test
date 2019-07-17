<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-85 md-small-size-100 md-size-50">
        <user-card> </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "./Partials/UserCard";

export default {
  components: {
    UserCard
  }
};
</script>
