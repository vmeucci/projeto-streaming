<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Nome da categoria:" label-for="categoria-nome">
        <b-form-input
          id="categoria-nome"
          v-model="editCategoriaData.categoria_model.titulo"
          :placeholder="editCategoriaData.categoria_model.titulo"
          label="Nome: "
          label-for="categoria-nome"
          description="Nome da categoria"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Modificar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "editCategoria",
  props: {
    categoria: {
      nome: String,
    },
    modelTarget: String,
    callback: Function,
  },

  data() {
    return {
      editCategoriaData: {
        categoria_model: {
          nome: "Nome da categoria",
        }
      }
    };
  },
  mounted() {
    if (this.categoria) {
      this.editCategoriaData.categoria_model.nome = this.categoria.nome;
    }
  },

  methods: {
    onSubmit(categoria) {
      categoria.preventDefault();
      this.callback(categoria, this.editCategoriaData);
      this.$emit("exit", true);
    },
  },
};
</script>

<style>
</style>