<template>
  <div>
    <v-card>
      <v-toolbar color="light-blue darken-4 " height="100px">
        <div class="d-flex align-center">
          <v-btn
            depressed
            fab
            color="light-blue darken-4"
            @click.stop="openNav"
          >
            <v-icon color="white" large>mdi-menu</v-icon>
          </v-btn>

          <v-img
            alt="TopWay Logo"
            class="shrink mr-2"
            contain
            src="../../imagens/logo.png"
            transition="scale-transition"
            width="120"
          />
          <v-toolbar-title class="white--text font-weight text-h4"
            >TOP WAY</v-toolbar-title
          >
        </div>
      </v-toolbar>
    </v-card>

    <v-container>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
        class="light-blue darken-4"
      >
        <v-list>
          <v-list-item class="justify-center">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title white--text">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle class="white--text"
                >sandra_a88@gmail.com</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <!-- menu -->
        <v-list dense nav>
          <div v-for="item in items" :key="item.title">
            <v-list-item v-if="Object.keys(item.submenus).length === 0">
              <v-list-item-icon>
                <v-icon class="title white--text"> {{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="title white--text">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- novos seletores do menu -->
            <div v-else>
              <v-list-group :value="true" no-action sub-group>
                <template v-slot:activator>
                  <v-list-item-title class="title white--text">
                    {{ item.title }}
                  </v-list-item-title>
                </template>

                <v-list-item v-for="menus in item.submenus" :key="menus">
                  <v-list-item-icon>
                    <v-icon class="title white--text">{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="menus.title"
                      class="title white--text"
                    ></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon
                      class="title white--text"
                      :v-text="menus.icon"
                    ></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </div>
          </div>
        </v-list>
      </v-navigation-drawer>
    </v-container>

    <v-footer fixed class="pa-4 white--text" color="light-blue darken-4 ">
      <v-spacer></v-spacer>
      <p>
        Copyright &copy; {{ new Date().getFullYear() }} -
        <strong>Top Way</strong>
      </p>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Struct",
  //cadastro,
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", link: "/", submenus: [] },
      {
        title: "Cadastro",
        icon: "mdi-account",
        link: "/",
        submenus: [
          {
            title: "SubCadastro",
            icon: "mdi-account",
            link: "/",
          },
          {
            title: "SubCadastro2",
            icon: "mdi-account",
            link: "/",
          },
        ],
      },
      {
        title: "Fechamento",
        icon: "mdi-transcribe-close",
        submenus: [],
        link: "/Closure",
      },
      {
        title: "Aprovação",
        icon: "mdi-check-decagram",
        link: "/",
        submenus: [],
      },
      { title: "Relatório", icon: "mdi-file-chart", link: "/", submenus: [] },
    ],
  }),

  methods: {
    openNav() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style>
</style>