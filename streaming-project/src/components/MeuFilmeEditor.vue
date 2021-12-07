<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Título do filme:" label-for="filme-titulo">
        <b-form-input
          id="filme-titulo"
          v-model="editFilmeData.filme_model.titulo"
          :placeholder="editFilmeData.filme_model.titulo"
          label="Título: "
          label-for="input-titulo"
          description="Título do filme"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Subtítulo do filme:" label-for="filme-subtitulo">
        <b-form-input
          id="filme-subtitulo"
          v-model="editFilmeData.filme_model.subtitulo"
          :placeholder="editFilmeData.filme_model.subtitulo"
          label="Subtítulo: "
          label-for="input-subtitulo"
          description="Subtítulo do filme"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Duração:" label-for="filme-duracao_min">
        <b-form-input
          type="number" 
          min="0"
          id="filme-duracao_min"
          v-model="editFilmeData.filme_model.duracao_min"
          :placeholder="editFilmeData.filme_model.duracao_min"
          label="Duração: "
          label-for="input-duracao_min"
          description="Duração do filme"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Sinopse:" label-for="filme-sinopse">
        <b-form-textarea
          id="filme-sinopse"
          v-model="editFilmeData.filme_model.sinopse"
          :placeholder="editFilmeData.filme_model.sinopse"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <!-- <b-form-group label="Categoria:" label-for="filme-categoria">
        <b-form-input
          id="filme-categoria"
          v-model="filme_model.categoriaId"
          :placeholder="filme_model.categoriaId"
          label="Categoria: "
          label-for="input-categoria"
          description="Categoria da série"
        ></b-form-input>
      </b-form-group>
      -->
      <b-form-group
        label="Classificação indicativa do filme:"
        label-for="filme-classificacaoIndicativa"
      >
        <b-form-input
          id="filme-classificacaoIndicativa"
          v-model="editFilmeData.filme_model.classificacaoIndicativa"
          :placeholder="editFilmeData.filme_model.classificacaoIndicativa"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Modificar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "editFilme",
  props: {
    filme: {
      titulo: String,
      subtitulo: String,
      duracao_min: Number,
      sinopse: String,
      //categoriaId: Object,
      classificacaoIndicativa: String,
    },
    modelTarget: String,
    callback: Function,
  },

  data() {
    return {
      editFilmeData: {
        filme_model: {
          titulo: "Título do filme",
          subtitulo: "Subtítulo",
          duracao_min: 100,
          sinopse: "Sinopse",
          //categoriaId: "1",
          classificacaoIndicativa: "14 anos",
        }
      }
    };
  },
  mounted() {
    if (this.filme) {
      this.editFilmeData.filme_model.titulo = this.filme.titulo;
      this.editFilmeData.filme_model.subtitulo = this.filme.subtitulo;
      this.editFilmeData.filme_model.episodios = this.filme.episodios;
      this.editFilmeData.filme_model.sinopse = this.filme.sinopse;
      //this.filme_model.categoriaId = this.filmeToEdit.categoriaId;
      this.editFilmeData.filme_model.classificacaoIndicativa = this.filmeToEdit.classificacaoIndicativa;
    }
  },

  methods: {
    onSubmit(filme) {
      filme.preventDefault();
      this.callback(filme, this.editFilmeData);
      this.$emit("exit", true);
    },
  },
};
</script>

<style>
</style>