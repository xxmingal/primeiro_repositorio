<template>
  <v-app>
    <Struct/>   

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Struct from './components/Struct.vue';

export default {
  name: "App",
  components: {
  Struct,
  },

  data: () => ({}),
  methods: {},
};
</script>
