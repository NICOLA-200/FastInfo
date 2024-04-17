import { create } from "zustand";
import axios from 'axios'

export  const useCountStore  = create((set) => (
     {count: 0,
      isAuthenticated: false,
      userName:"",
      increment: () => {
         set((state) => (
          {count: state.count + 1}
         ))
     },
     decrement: () => {

     },
     getCurrentUser: async (token) => {
          
      const { data } = await axios.get("http://localhost:3000/user/currentUser", {token})
         if (data) {
          set((
               {userName: data.username, isAuthenticated:true}
          ))
     }
     },
     signUp : async (data) => {
          const { response } = await axios.post("http://localhost:3000/user/signup", { data })
          if (response) {
               localStorage.setItem('token', response.token)
               
           set((
                {userName: response.username, isAuthenticated:true}
           ))
      }
     },
     logIn : async (data) => {
          const { response } = await axios.post("http://localhost:3000/user/login", { data })
          if (response) {
               localStorage.setItem('token', response.token)
               
           set((
                {userName: response.username, isAuthenticated:true}
           ))
      }
     },
     logOut : () => {
         localStorage.removeItem("token")

          set((
               {isAuthenticated:false}
          ))
     }
 }
))