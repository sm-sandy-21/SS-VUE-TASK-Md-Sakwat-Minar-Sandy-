<template>
  <v-card >
  <v-form class="ma-3 pa-2"
    ref="form"
    v-model="valid"
    lazy-validation 
    @submit.prevent="onSubmit"
  >
    <v-text-field
      v-model="newEmployee.name"
      :counter="10"
      :rules="nameRules"
      label="Enter Your Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="newEmployee.phone"
      :counter="13"
      :rules="phoneRules"
      label="Enter Your Valid Phone Number"
      prefix="+88"
      required
    ></v-text-field>

    <v-text-field
      v-model="newEmployee.email"
      :rules="emailRules"
      label="Enter your Email"
      required
    ></v-text-field>
      
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
       type="submit"
      value="Submit"
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      newEmployee:{
          name: '',
          phone: '',
          email: ''
      },
      
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 2) || 'Name must be geter than 2 characters',
      ],
   
      phoneRules: [
        v => !!v || 'Phone number is required',
        v => ( v.length == 11) || 'Phone number must 11 digit Number',
        
       
      ],
     
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],     
    }),

    methods: {

        onSubmit(){  
            this.$store.dispatch('addEmployee',this.newEmployee)
        },
      reset () {
        this.$refs.form.reset()
      }
    },
  }
</script>

<style>

</style>