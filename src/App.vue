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
      <v-toolbar flat>
        <div id="nav">
          <router-link to="/">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                v-on="on"
            >
              Tableau
            </v-btn>
          </router-link>
          <v-divider
              class="mx-4"
              inset
              vertical
          ></v-divider>
          <router-link to="/documentation">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                v-on="on"
            >
              Documentation
            </v-btn>
          </router-link>
          <v-divider
              class="mx-4"
              inset
              vertical
          ></v-divider>
          <v-btn
              color="primary"
              dark
              class="mb-2"
              v-on="on"
          >
            Méthode Agile
          </v-btn>
        </div>
      </v-toolbar>
      <router-view/>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
