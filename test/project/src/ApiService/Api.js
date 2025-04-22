import { transaction,accountSummary } from "../components/MockApi/ApiData";
import axios from "axios";
const apiInstance= axios.create({
    baseUrl:"https://api.example.com",
    timeout:1000, //this ensures api doesnt wait indefinately for a response
    headers: {'Content-Type': 'application/json'}

});
//defining different method for fetching data
export const WorkSpaceTransaction=async()=>{
    return new Promise((resolve)=>{
         setTimeout(()=>{
                resolve({data:transaction});
              },1000);
        
    })
}
export const WorkSpaceSummaryData=async()=>{
    return new Promise((resolve)=>{
         setTimeout(()=>{
                resolve({data:accountSummary});
              },1000);
        
    })
}
// export const WorkSpaceTransaction = async () => {
//     const response = await axios.get('https://your-real-api.com/api/transactions'); // real endpoint
//     return response.data; // no delay, returns real API response
//   };
export default apiInstance;