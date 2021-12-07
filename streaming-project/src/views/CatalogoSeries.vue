<template>
  <div class="minhas-series">
    <h1>Séries</h1>
    <b-button @click="criarSerie()" variant="primary">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>

    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:cell(editar)="linhaSerie">
        <b-button @click="editarSerie(linhaSerie.item)">Editar</b-button>
      </template>
    </b-table>

    <b-modal
      @hide="resetaModalData()"
      :id="modalData.id"
      :title="modalData.title"
    >
      <MinhaSerieEditor
        :serieToEdit="modalData.content"
        :callback="modalData.callback"
      ></MinhaSerieEditor>
    </b-modal>
  </div>
</template>

<script>
import MinhaSerieEditor from "@/components/MinhaSerieEditor.vue";

export default {
  name: "CatalogoSeries",

  components: {
    MinhaSerieEditor,
  },

  data() {
    return {  
      items: [
        {
          titulo: "Série 1",
          subtitulo: "A primeira",
          episodios: 15,
          sinopse: "Boa série",
          classificacaoIndicativa: "14 anos",
        },
      ],

      fields: [
        "titulo",
        "subtitulo",
        "episodios",
        "sinopse",
        "classificacaoIndicativa",
        "editar",
      ],
      modalData: {
        id: "modal-minhaserie",
        content: null,
        title: "",
        callback: null,
      },
    };
  },

  mounted() {
    this.$http
      .get("/catalogo-series")
      .then((result) => {
        this.items = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    criarSerie() {
      this.modalData.title = "Crie uma nova série";
      this.modalData.callback = (novaSerie) => {
        this.$http
          .post("/catalogo-series", novaSerie.data)

          .then((result) => {
            if (result.data.titulo === novaSerie.data.titulo) {
              console.log("Dado salvo com sucesso!");
              alert("Série criada: \n" + result.data);
            }
          })

          .catch((error) => {
            console.log(error);
          });
      };

      this.$root.$emit("bv::show::modal", this.modalData.id);
    },

    editarSerie(linhaSerie) {
      this.modalData.content = linhaSerie;
      this.modalData.title = 'Edite a série "' + linhaSerie.titulo + '"';
      this.modalData.callback = (editSerie) => {
        this.$http
          .put("/catalogo-series" + editSerie.id, editSerie.data)

          .then(() => {
            console.log("Dado alterado com sucesso!");
            alert("Série alterada com sucesso!");
          })

          .catch((error) => {
            console.log(error);
          });
      };

      this.$root.$emit("bv::show::modal", this.modalData.id);
    },

    resetaModalData() {
      this.modalData.content = null;
      this.modalData.title = "";
    },
  },
};
</script>

<style>
.minhas-series h1 {
  display: inline;
}

.minhas-series button {
  margin-left: 4px;
  margin-bottom: 4px;
}
</style>