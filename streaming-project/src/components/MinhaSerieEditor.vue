<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Título da série:" label-for="serie-titulo">
        <b-form-input
          id="serie-titulo"
          v-model="editSerieData.serie_model.titulo"
          :placeholder="editSerieData.serie_model.titulo"
          label="Título: "
          label-for="input-titulo"
          description="Título da série"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Subtítulo da série:" label-for="serie-subtitulo">
        <b-form-input
          id="serie-subtitulo"
          v-model="editSerieData.serie_model.subtitulo"
          :placeholder="editSerieData.serie_model.subtitulo"
          label="Subtítulo: "
          label-for="input-subtitulo"
          description="Subtítulo da série"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Episódios:" label-for="serie-episodios">
        <b-form-input
          type="number" 
          min="0"
          id="serie-episodios"
          v-model="editSerieData.serie_model.episodios"
          :placeholder="editSerieData.serie_model.episodios"
          label="Episódios: "
          label-for="input-episodios"
          description="Episódios da série"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Sinopse:" label-for="serie-sinopse">
        <b-form-textarea
          id="serie-sinopse"
          v-model="editSerieData.serie_model.sinopse"
          :placeholder="editSerieData.serie_model.sinopse"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <!-- <b-form-group label="Categoria:" label-for="serie-categoria">
        <b-form-input
          id="serie-categoria"
          v-model="serie_model.categoriaId"
          :placeholder="serie_model.categoriaId"
          label="Categoria: "
          label-for="input-categoria"
          description="Categoria da série"
        ></b-form-input>
      </b-form-group>
      -->
      <b-form-group
        label="Classificação indicativa da serie:"
        label-for="serie-classificacaoIndicativa"
      >
        <b-form-input
          id="serie-classificacaoIndicativa"
          v-model="editSerieData.serie_model.classificacaoIndicativa"
          :placeholder="editSerieData.serie_model.classificacaoIndicativa"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Modificar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "editSerie",
  props: {
    serie: {
      titulo: String,
      subtitulo: String,
      episodios: Number,
      sinopse: String,
      //categoriaId: Object,
      classificacaoIndicativa: String,
    },
    modelTarget: String,
    callback: Function,
  },

  data() {
    return {
      editSerieData: {
        serie_model: {
          titulo: "Título do serie",
          subtitulo: "Subtítulo",
          episodios: 10,
          sinopse: "Sinopse",
          //categoriaId: "1",
          classificacaoIndicativa: "14 anos",
        }
      }
    };
  },
  mounted() {
    if (this.serie) {
      this.editSerieData.serie_model.titulo = this.serie.titulo;
      this.editSerieData.serie_model.subtitulo = this.serie.subtitulo;
      this.editSerieData.serie_model.episodios = this.serie.episodios;
      this.editSerieData.serie_model.sinopse = this.serie.sinopse;
      //this.serie_model.categoriaId = this.serieToEdit.categoriaId;
      this.editSerieData.serie_model.classificacaoIndicativa = this.serieToEdit.classificacaoIndicativa;
    }
  },

  methods: {
    onSubmit(serie) {
      serie.preventDefault();
      this.callback(serie, this.editSerieData);
      this.$emit("exit", true);
    },
  },
};
</script>

<style>
</style>