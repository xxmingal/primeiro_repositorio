<template>
    <v-container class="mt-16">
        <v-row>  
            <v-img
            alt="TopWay Logo"
            class="shrink mt-n5"
            contain
            src="../../imagens/logo.png"
            transition="scale-transition"
            width="100"
            />
            <h1 class="display-3 font-weight-light">{{ titulo }}</h1>
            <v-icon class="display-4 ml-10 mt-n11">{{ icone }}</v-icon>
        </v-row>
        <v-row>
            <v-divider></v-divider>
            <v-card>
                <v-tabs background-color="light-blue darken-4"
                        fixed-tabs
                        dark
                >
                    <v-tab>Home</v-tab>
                    <v-tab>Cadastro</v-tab>
                    <v-tab>Fechamento</v-tab>
                    <v-tab>Aprovação</v-tab>
                    <v-tab>Relatório</v-tab>
                </v-tabs>
            </v-card>
        </v-row>
    </v-container>  
</template>

<script>
export default {
    name: 'Main',
    data() {
        return{
            titulo: 'Home',
            icone: 'mdi-home'
        }
    },
}
</script>

<style>

</style>