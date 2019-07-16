<template>
</template>

<script>
  export default {
    created(){
      this.$store.dispatch('auth/destroyToken')
              .then(response =>{
                this.$router.push("/login")
              })
    }
};
</script>
