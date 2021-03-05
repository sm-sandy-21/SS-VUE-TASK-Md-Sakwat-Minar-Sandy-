import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employee : [
      {
        name: 'sakwat',
        phone: '0179279660',
        email: 'sak@gmail.com',
      },
      {
        name: 'minar',
        phone: '0199279660',
        email: 'ma@gmail.com',
      }, 
      {
        name: 'sandy',
        phone: '0166279660',
        email: 'san@gmail.com',
      },
     
      
    ]
  },
  getters:{
    allEmpolyee: (state) => state.employee,
  },

 
  mutations: {
    ADD_EMPLOYEE(state,newemployee){
        state.employee.push({
          name: newemployee.name,
          phone:"+88"+" "+ newemployee.phone,
          email:newemployee.email
        })
  
  
        router.push('Employee')
      },
  
      DELETE_EMPLOYEE(state,deleteEmployee){       
        console.log(deleteEmployee)
        state.employee.splice(deleteEmployee,1)
      },
  
      EDITE_EMPLOYEE(state,editEmployee){
  
          let index = state.employee.indexOf()
          console.log(index+1)
          state.employee.splice(index+1,1)

        state.employee.push({
            name: editEmployee.name,
            phone: editEmployee.phone,
            email: editEmployee.email
          })
       
       
        
       
      }
  
    },
  
  
    actions: {
      addEmployee({ commit },newemployee){
        commit("ADD_EMPLOYEE",newemployee)
      },
      deleteEmployee({ commit },deleteEmployee){
        commit("DELETE_EMPLOYEE",deleteEmployee)
      },
  
      editEmployee({ commit }, editEmployee ){
        commit("EDITE_EMPLOYEE",editEmployee)
      }
    },
  
    
    modules: {
    }
  
  
})
