<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="desserts"
        sort-by="NumVersion"
        class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
            flat
        >
          <v-toolbar-title>Cette application vous permet de repertorier vos projets notamment grace a la methode Agile</v-toolbar-title>
          <v-divider
              class="mx-4"
              inset
              vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
              v-model="dialog"
              max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
              >
                Nouveau projet
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          v-model="editedItem.projectName"
                          label="Nom de Projet "
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          v-model="editedItem.NumVersion"
                          label="Numero de Version"
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          v-model="editedItem.Url"
                          label="Url"
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          v-model="editedItem.DateMj"
                          label="Date de la derniere mise a jour"
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          v-model="editedItem.DateLivraison"
                          label="Date de livraison prévue"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                >
                  Annuler
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                >
                  Valider
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Voulez vous supprimer ce projet ?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Annuler</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">Valider</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
            color="primary"
            @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    name: 'DashBoard',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nom du projet',
          align: 'start',
          sortable: false,
          value: 'projectName',
        },
        { text: 'Numero de version', value: 'NumVersion' },
        { text: 'Url', value: 'Url' },
        { text: 'Date de derniere mise a jour', value: 'DateMj' },
        { text: 'Date de livraison prevue', value: 'DateLivraison' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        projectName: '',
        NumVersion: '',
        Url: '',
        DateMj: '',
        DateLivraison: '',
      },
      defaultItem: {
        projectName: '',
        NumVersion: '',
        Url: '',
        DateMj: '',
        DateLivraison: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nouveau projet' : 'Modification d\'un projet'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize() {
        this.desserts = [
          {
            projectName: 'Calendar_front',
            NumVersion: '1.0',
            Url: '127.0.0.1:3000/calendar/event',
            DateMj: '01/02/2021',
            DateLivraison: '10/05/2021',
          },
          {
            projectName: 'Calendar_front',
            NumVersion: '1.1',
            Url: '127.0.0.1:3000/calendar/event',
            DateMj: '10/02/2021',
            DateLivraison: '10/05/2021',
          },
          {
            projectName: 'Calendar_front',
            NumVersion: '1.2',
            Url: '127.0.0.1:3000/calendar/event',
            DateMj: '22/02/2021',
            DateLivraison: '10/05/2021',
          },
          {
            projectName: 'Calendar_back',
            NumVersion: '1.0',
            Url: '127.0.0.1:9085/api/event',
            DateMj: '10/03/2021',
            DateLivraison: '12/06/2021',
          },
          {
            projectName: 'Calendar_back',
            NumVersion: '1.1',
            Url: '127.0.0.1:9085/api/event',
            DateMj: '22/03/2021',
            DateLivraison: '12/06/2021',
          },
          {
            projectName: 'Calendar_back',
            NumVersion: '1.2',
            Url: '127.0.0.1:9085/api/event',
            DateMj: '31/03/2021',
            DateLivraison: '12/06/2021',
          },
          {
            projectName: 'Pokeapi-app',
            NumVersion: '1.0',
            Url: '127.0.0.1:9084/api/poke:',
            DateMj: '31/01/2021',
            DateLivraison: 'Aucune',
          },
        ]
      },

      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm() {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close() {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete() {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    }
  }
</script>
