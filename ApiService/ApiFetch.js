
import AccountSummaryApi from "../src/components/MockApi/AccountSummaryApi"

const WorkSpaceSummaryData=()=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({data:AccountSummaryApi});
      },1000);


    });

    

};
export default WorkSpaceSummaryData;