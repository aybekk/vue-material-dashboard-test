<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-45">
        <register-form data-background-color="purple"> </register-form>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "@/pages/Auth/RegisterForm";

export default {
  components: {
    RegisterForm
  }
};
</script>
