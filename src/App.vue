<template>
  <v-app>
    <v-app-bar
      app
      color="Dark"
      dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title>Agile Table</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <DashBoard/>
    </v-main>
  </v-app>
</template>

<script>
import DashBoard from './components/DashBoard';

export default {
  name: 'App',

  components: {
    DashBoard,
  },

  data: () => ({
    //
  }),
};
</script>
