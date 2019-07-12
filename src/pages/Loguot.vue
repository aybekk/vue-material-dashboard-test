<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-45">
        <logout-form data-background-color="purple"> </logout-form>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "@/pages/Auth/LogoutForm";

export default {
  components: {
    LogoutForm
  }
};
</script>
