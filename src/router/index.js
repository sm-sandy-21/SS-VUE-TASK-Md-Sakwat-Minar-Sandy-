import Vue from "vue";
import VueRouter from "vue-router";
import Employee from "@/views/Employee";
import Admin from "@/views/Admin";
import AddEmployee from "@/components/AddEmployee";
import AddAdmin from "@/components/AddAdmin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Employee",
    component: Employee,
  },
  {
    path: "/addemployee",
    name: "AddEmployee",
    component: AddEmployee,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/addadmin",
    name: "AddAdmin",
    component: AddAdmin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
