<template>
  <div>
    <img src="../assets/LogoStreaming.png" />
    <div class="login">
      <b-form @submit="doLogin">
        <b-form-group
          id="user-label"
          label="Email:"
          label-for="user-input"
          label-aling="left"
          description="Digite um email cadastrado: "
        >
          <b-form-input
            id="user-input"
            v-model="login.user"
            placeholder="Digite o email: "
            type="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="password-label"
          label="Senha:"
          label-for="password-input"
          label-aling="left"
          description="Digite uma senha cadastrada: "
        >
          <b-form-input
            id="password-input"
            v-model="login.pwd"
            placeholder="Digite a senha: "
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit">Entrar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      login: {
        user: "user@email.com",
        senha: "123",
      },
    };
  },

  methods: {
    doLogin() {
      let dataLogin = {
        user: this.login.user,
        pwd: this.login.senha,
      };
      this.$http
        .post("/api/login", dataLogin)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("Falha no login");
          console.log(error);
        });
    },
  },
};
</script>

<style>
.login {
    margin: 50px 350px 0px 350px;
    padding: 50px 50px 20px 50px;
    border-radius: 30px;
    background-color: crimson;
}
</style>