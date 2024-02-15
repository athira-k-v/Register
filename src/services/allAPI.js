import { commonApi } from "./commonApi"
import SERVER_URL from "./serverUrl"



//register
export const registerAPI =async(user)=>{
    return  await commonApi("POST",`${SERVER_URL}/register` ,user,"")
  }
  


  //get student details
  export const  getStudentDetailsAPI =async()=>{
    return  await commonApi("GET",`${SERVER_URL}/get-student-details`,"","")
  }
