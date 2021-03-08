import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employee: [
      {
        name: "sakwat",
        phone: "0179279660",
        email: "sak@gmail.com",
      },
      {
        name: "minar",
        phone: "0199279660",
        email: "ma@gmail.com",
      },
      {
        name: "sandy",
        phone: "0166279660",
        email: "san@gmail.com",
      },
    ],
    admin: [
      {
        name: "sakwat",
        phone: "0179279660",
        email: "sak@gmail.com",
      },
      {
        name: "minar",
        phone: "0199279660",
        email: "ma@gmail.com",
      },
      {
        name: "sandy",
        phone: "0166279660",
        email: "san@gmail.com",
      },
    ],
  },
  getters: {
    allEmpolyee: (state) => state.employee,
    allAdmin: (state) => state.admin,
  },

  mutations: {
    //Employee Section

    ADD_EMPLOYEE(state, newemployee) {
      state.employee.push({
        name: newemployee.name,
        phone: "+88" + " " + newemployee.phone,
        email: newemployee.email,
      });

      router.push("/");
    },

    DELETE_EMPLOYEE(state, deleteEmployee) {
      console.log(deleteEmployee);
      state.employee.splice(deleteEmployee, 1);
    },

    EDITE_EMPLOYEE(state, editEmployee) {

      state.employee.push({
        name: editEmployee.name,
        phone: editEmployee.phone,
        email: editEmployee.email,
      });
    },

    //Admin Section

    ADD_Admin(state, newAdmin) {
      state.admin.push({
        name: newAdmin.name,
        phone: "+88" + " " + newAdmin.phone,
        email: newAdmin.email,
      });

      router.push("Admin");
    },

    DELETE_Admin(state, deleteAdmin) {
      console.log(deleteAdmin);
      state.admin.splice(deleteAdmin, 1);
    },

    EDITE_Admin(state, editAdmin) {
    
      state.admin.push({
        name: editAdmin.name,
        phone: editAdmin.phone,
        email: editAdmin.email,
      });
    },
  },

  actions: {
    //Emloyee Section

    addEmployee({ commit }, newemployee) {
      commit("ADD_EMPLOYEE", newemployee);
    },
    deleteEmployee({ commit }, deleteEmployee) {
      commit("DELETE_EMPLOYEE", deleteEmployee);
    },

    editEmployee({ commit }, editEmployee) {
      commit("EDITE_EMPLOYEE", editEmployee);
    },

    //Admin Section

    addAdmin({ commit }, newAdmin) {
      commit("ADD_Admin", newAdmin);
    },
    deleteAdmin({ commit }, deleteAdmin) {
      commit("DELETE_Admin", deleteAdmin);
    },

    editAdmin({ commit }, editAdmin) {
      commit("EDITE_Admin", editAdmin);
    },
  },

  modules: {},
});
