import { create } from "zustand";
import WorkSpaceSummaryData from "../ApiService/ApiFetch";
const useStore= create((set)=>({
    transaction:[],
    accountSummary:{},
    isLoading: true,
    error: null,
    filter:{},
    setTransaction: (data)=>set({transaction:data}),
    setAccountSummary:(data)=>set({accountSummary:data}),
    setLoading:(status)=>set({isLoading:status}),
    setError:(error)=>set({error:error}),
    setFilter: (filter)=>set({filter:filter})
 

}))
export default useStore