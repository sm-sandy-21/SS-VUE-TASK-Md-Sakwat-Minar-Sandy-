<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main class="ma-5">
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/navBar.vue';

export default {
  name: 'App',

  components: {
    NavBar
    
  },

  data: () => ({
    //
  }),
};
</script>
