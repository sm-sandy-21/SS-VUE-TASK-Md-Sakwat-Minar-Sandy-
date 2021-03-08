<template>
  <div class="Admin">
    <h1 class="subheading blue-grey--text">Admin Page</h1>
    <v-data-table
      :headers="headers"
      :items="allAdmin"
      sort-by="name"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Admin Info</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn :to="{ name: 'AddAdmin' }" color="success"> <v-icon>mdi-account-plus-outline</v-icon></v-btn>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">Edit Admin</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.phone"
                        label="Phone"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
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
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
       <v-btn class="ma-2" color="info" fab @click="editItem(item)"
          ><v-icon> mdi-account-edit </v-icon>
        </v-btn>

        <v-btn
          class="ma-1 ml-1"
          fab
          color="red"
          @click="deleteItem(item)"
        >
          <v-icon> mdi-delete </v-icon></v-btn
        >
      </template>
    </v-data-table>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Admin Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Phone", value: "phone" },
      { text: "Email", value: "email" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    Admin: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      phone: "",
      email: "",
    },
    defaultItem: {
      name: "",
      phone: "",
      email: "",
    },
  }),

  computed: {
    ...mapGetters({
      allAdmin: "allAdmin",
    }),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.$store.state.admin.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.$store.dispatch("deleteAdmin", this.editedIndex);
      // console.log("editItem")
      // console.log(item.name)
    },

    deleteItem(item) {
      this.editedIndex = this.$store.state.admin.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.dispatch("deleteAdmin", this.editedIndex);
      //this.Admin.splice(this.editedIndex, 1)
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
     
        this.$store.dispatch("editAdmin", this.editedItem);
      
      this.close();
    },
  },
};
</script>
