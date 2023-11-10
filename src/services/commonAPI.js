import axios from 'axios';

const commonAPI=async (method,url,body)=>{
     let reqConfig={
        method:method,
        url:url,
        data:body,
        
        headers:{
            'Content-Type': 'application/json'
        }
     }

     try {
      const response = await axios(reqConfig);
      return response; // Add this line to return the response
    } catch (error) {
      return error;
    }
}

export default commonAPI;