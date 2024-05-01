import { create } from "zustand";
import axios from 'axios'
import { jwtDecode } from "jwt-decode";


export  const useCountStore  = create((set) => (
     {count: 0,
      isAuthenticated: false,
      id:"",
      userName:"",
      exist: false,
      wrong: false,
      loading: false,
      increment: () => {
         set((state) => (
          {count: state.count + 1}
         ))
     },
     setExisting: () => {
              
          set((
               {exist: false,  wrong: false}
          ))

     },
     setLoading: () => {
              
          set((
               {loading: false}
          ))

     },
     getCurrentUser: async (token) => {
          const data  = jwtDecode(token)
          console.log(data)
     //  const { data } = await axios.get("http://localhost:3000/user/currentUser", {token})
         if (data) {
          set((
               {userName: data.username, isAuthenticated:true , id:data.id}
          ))
     }
     },
     signUp : async (data) => {
          console.log(data)
          const  response  = await axios.post("http://localhost:3000/api/auth/register/user", { data })
          console.log("the response")
          console.log(response.data.exist)
          if (!response.data?.exist) {
               localStorage.setItem('token', response.data.accessToken)
               
               set((
                    {userName: response.data.username, isAuthenticated:true}
               ))


      } else {
          set((
               {
                    exist : response.data.exist,
                    isAuthenticated: false
               }
          ))
      }
     },
     logIn : async (data) => {
          console.log("something")
          const response = await axios.post("http://localhost:3000/api/auth/login/user", { data })
          console.log("the response")
          console.log(response)
          if (!response.data?.wrong) {
               localStorage.setItem('token', response.data.accessToken)
               
           set((
                {userName: response.data.username, isAuthenticated:true}
           ))
      } else {
          set((
               {
                    wrong : response.data.wrong,
                    isAuthenticated: false
               }
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