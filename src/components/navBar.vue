<template>
  <nav>
    <v-toolbar class="cyan accent-1">
      <h1>
        <v-icon left>mdi-view-dashboard-outline</v-icon> Staff Managment System
      </h1>
      <v-spacer></v-spacer>
      <v-btn class="grey lighten-4 mx-2" :to="{ name: 'Employee' }">
        <v-icon left> mdi-account-group </v-icon>
        Employee
      </v-btn>
      <v-btn color="success" :to="{ name: 'Admin' }">
        <v-icon left> mdi-account </v-icon>
        Admin
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>