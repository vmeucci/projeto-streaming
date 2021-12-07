<template>
    <div>
        <b-button v-b-toggle.streaming-menu>Abrir Menu</b-button>
        <b-sidebar id="streaming-menu" title="Sidebar" shadow>
            <div class="px-3 py-2">
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/login">Login</b-nav-item>
                <b-nav-item to="/catalogo-series">Catálogo Séries</b-nav-item>
                <b-nav-item to="/catalogo-filmes">Catálogo Filmes</b-nav-item>
                <b-nav-item to="/categorias">Categorias</b-nav-item>
                <a href="" @click="logout">Logout</a>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
export default {
    name: "MenuLateral",
    methods: {
        logout(){
            this.$http.get("/api/logout")
            .then(()=>{
                this.$router.push("/login");
            }).catch((errors)=>{
                console.error(errors);
            })
        }
    }
};
</script>

<style>
</style>