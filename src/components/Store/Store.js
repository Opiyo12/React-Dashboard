import { create } from "zustand";
const useStore= create((set)=>({
    transaction:[],
    isLoading: false,
    error: null,
    setTransaction: (transaction)=>set({transaction:data}),
    setLoading:(loading)=>set({isLoading:loading}),
    setError:(error)=>set({error:error}),
    

    




}))