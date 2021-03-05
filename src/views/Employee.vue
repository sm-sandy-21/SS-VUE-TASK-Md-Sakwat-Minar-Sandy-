<template>
  <div class="employee">
    <h1 class="subheading blue-grey--text">Employee Page</h1>
     <v-data-table
    :headers="headers"
    :items="allEmpolyee"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Employee Info</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
         <v-btn :to="{name:'AddEmployee'}" color="success">Add</v-btn> 
      <v-dialog
          v-model="dialog"
          max-width="500px"
        >

          <!-- <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"                           
            >
              New Item
            </v-btn>
          </template>  -->
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle  }}</span>
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
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.phone"
                      label="Phone"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
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
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> 
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
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
  </v-data-table>
  </div>
</template>


<script>
import {  mapGetters } from "vuex";

  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Employee Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Phone', value: 'phone' },
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      employee: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        phone: '',
        email: '',
        
      },
      defaultItem: {
        name: '',
        phone: '',
        email: '',
       
      },
    }),

    computed: {
      ...mapGetters({
        allEmpolyee : "allEmpolyee"
        }),

        
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'

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

    methods: {
      // ...mapActions({
      //   deleteEmployee : "deleteEmployee"
      // }),

      editItem (item) {
        this.editedIndex = this.employee.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true

        console.log("editItem")
        console.log(item.name)
      },

      deleteItem (item) {
        this.editedIndex = this.$store.state.employee.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.$store.dispatch('deleteEmployee',this.editedIndex)
        //this.employee.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {

         Object.assign(this.employee[this.editedIndex], this.editedItem)
           
        } else {
         this.$store.dispatch('editEmployee',this.editedItem) 
          
        }
        this.close()
      },
    },
  }
</script>
