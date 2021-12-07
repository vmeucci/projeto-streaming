<template>
  <div class="minhas-categorias">
    <h1>Categorias</h1>
    <b-button @click="criarCategoria()" variant="primary">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>

    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:cell(editar)="linhaCategoria">
        <b-button @click="editarCategoria(linhaCategoria.item)"
          >Editar</b-button
        >
      </template>
    </b-table>

    <b-modal
      @hide="resetaModalData()"
      :id="modalData.id"
      :title="modalData.title"
    >
      <MinhaCategoriaEditor
        :categoriaToEdit="modalData.content"
        :callback="modalData.callback"
      ></MinhaCategoriaEditor>
    </b-modal>
  </div>
</template>
<script>
import MinhaCategoriaEditor from "@/components/MinhaCategoriaEditor.vue";

export default {
  name: "Categorias",
  components: {
    MinhaCategoriaEditor,
  },
  data() {
    return {  
      items: [
        {
          Nome: "Terror",
        },
      ],

      fields: [
        "nome",
        "editar",
      ],
      modalData: {
        id: "modal-minhacategoria",
        content: null,
        title: "",
        callback: null,
      },
    };
  },

  mounted() {
    this.$http
      .get("/categorias")
      .then((result) => {
        this.items = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    criarCategoria() {
      this.modalData.title = "Crie uma nova categoria";
      this.modalData.callback = (novaCategoria) => {
        this.$http
          .post("/categoria", novaCategoria.data)

          .then((result) => {
            if (result.data.nome === novaCategoria.data.nome) {
              console.log("Dado salvo com sucesso!");
              alert("Categoria criada: \n" + result.data);
            }
          })

          .catch((error) => {
            console.log(error);
          });
      };

      this.$root.$emit("bv::show::modal", this.modalData.id);
    },

    editarCategoria(linhaCategoria) {
      this.modalData.content = linhaCategoria;
      this.modalData.title = 'Edite a categoria "' + linhaCategoria.nome + '"';
      this.modalData.callback = (editCategoria) => {
        this.$http
          .put("/categoria" + editCategoria.id, editCategoria.data)

          .then(() => {
            console.log("Dado alterado com sucesso!");
            alert("Categoria alterada com sucesso!");
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
.minhas-categorias h1 {
  display: inline;
}

.minhas-categorias button {
  margin-left: 4px;
  margin-bottom: 4px;
}
</style>