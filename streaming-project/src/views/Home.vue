<template>
  <div class="home">
    <h1>Home Projeto-Streaming</h1>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data() {
    return {
      userData: {
        id: "",
        nome: "",
      },
    };
  },
  methods: {
    getUserData() {
      this.$http
        .get("/api/user")
        .then((response) => {
          this.userData = response.data;
        })
        .error((error) => {
          console.log("Erro ou falta de permissão");
          console.log(error);
          this.$router.push("/login");
        });
    },
  },
  mounted(){
      this.getUserData();
  }
}
</script>
