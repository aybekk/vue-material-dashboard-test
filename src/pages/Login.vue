<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-45">
        <login-form data-background-color="purple"> </login-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/pages/Auth/LoginForm";

export default {
  components: {
    LoginForm
  }
};
</script>
