import { createSlice } from "@reduxjs/toolkit";


const regSlice = createSlice({
    name: 'user',
  initialState: {
    userAccounts:[{
        firstName:"Admin",
        email:"sohaib@gmail.com",
        password:"as@12kha"
    }],
    loggedUser:{},
    isAuthenticated: false,
  },
    reducers:{
        signUpForm(state, action){
             state.userAccounts.push(action.payload) 
        },
        signInForm(state,action){
            state.loggedUser = action.payload
            state.isAuthenticated =true
        },
        userLogout(state,action){
            state.loggedUser={}
            state.isAuthenticated=false
        },
        editForm(state,action){
            // const {id}= action.payload
            const {email,upDateForm} =action.payload
            const loginForm = state.userAccounts.findIndex(user => user.email === email)
            if(loginForm !== -1){
                state.userAccounts[loginForm]={...state.userAccounts[loginForm],...upDateForm}
                state.loggedUser = {...state.loggedUser,...upDateForm}
            }

        },
        deleteUser(state, action) {
            const userId = action.payload;
            state.userAccounts = state.userAccounts.filter(user => user.email !== userId);
          },

    }
})


export const {signUpForm,signInForm, userLogout,editForm,deleteUser}= regSlice.actions
export default  regSlice.reducer