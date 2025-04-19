import { create } from "zustand";
const useStore= create((set)=>({
    transaction:[],
    accountSummary:{},
    isLoading: true,
    error: null,
    filters: {
        date: null,
        range:null,
        category: null,
      },
    setTransaction: (data)=>set({transaction:data}),
    setAccountSummary:(data)=>set({accountSummary:data}),
    setLoading:(status)=>set({isLoading:status}),
    setError:(error)=>set({error:error}),
    setFilter: (filter)=>set({filter:filter})
 

}))
export default useStore