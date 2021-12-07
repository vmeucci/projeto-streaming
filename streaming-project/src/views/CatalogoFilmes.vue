<template>
  <div class="meus-filmes">
    <h1>Filmes</h1>
    <b-button @click="criarFilme()" variant="primary">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>

    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:cell(editar)="linhaFilme">
        <b-button @click="editarFilme(linhaFilme.item)">Editar</b-button>
      </template>
    </b-table>

    <b-modal
      @hide="resetaModalData()"
      :id="modalData.id"
      :title="modalData.title"
    >
      <MeuFilmeEditor
        :filmeToEdit="modalData.content"
        :callback="modalData.callback"
      ></MeuFilmeEditor>
    </b-modal>
  </div>
</template>

<script>

import MeuFilmeEditor from "@/components/MeuFilmeEditor.vue";

export default {
  name: "CatalogoFilmes",

  components: {
    MeuFilmeEditor
  },

  data() {
    return {
      items: [
        {
          titulo: "Filme 1",
          subtitulo: "O primeiro",
          duracao_min: 150,
          sinopse: "Bom filme",
          classificacaoIndicativa: "14 anos",
        },
      ],

      fields: [
        "titulo",
        "subtitulo",
        "duracao_min",
        "sinopse",
        "classificacaoIndicativa",
        "editar",
      ],
      modalData: {
        id: "modal-meufilme",
        content: null,
        title: "",
        callback: null
      }
    };
  },

  mounted(){
    this.$http.get("/catalogo-filmes").then(result => {
      this.items = result.data;
    })
    .catch(error => {
      console.log(error);
    })
  },

  methods: {
    criarFilme() {
      this.modalData.title = "Crie um novo filme"
       this.modalData.callback = (novoFilme) => {
        this.$http
          .post("/catalogo-filmes", novoFilme.data)

          .then((result) => {
            if (result.data.titulo === novoFilme.data.titulo) {
              console.log("Dado salvo com sucesso!");
              alert("Filme criado: \n" + result.data);
            }
          })

          .catch((error) => {
            console.log(error);
          });
       };
       
      this.$root.$emit("bv::show::modal", this.modalData.id);
    },

    editarFilme(linhaFilme){
      console.log(linhaFilme)
      this.modalData.content = linhaFilme;
      this.modalData.title = "Edite o filme \"" + linhaFilme.titulo + "\"";
      this.modalData.callback = (editFilme) => {
        this.$http
          .put("/catalogo-filmes" + editFilme.id, editFilme.data)

          .then(() => {
            console.log("Dado alterado com sucesso!");
            alert("Filme alterado com sucesso!");
          })

          .catch((error) => {
            console.log(error);
          });
      };
      this.$root.$emit("bv::show::modal", this.modalData.id);
    },

    resetaModalData(){
      this.modalData.content = null;
      this.modalData.title = "";
    },
  },
};
</script>

<style>
.meus-filmes h1 {
  display: inline;
}

.meus-filmes button {
  margin-left: 4px;
  margin-bottom: 4px;
}
</style>