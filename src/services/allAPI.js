import commonAPI from "./commonAPI"
import { baseurl } from "./serviceUrl"


// upload video
export const uploadVideo=async(reqbody)=>{
   const response= await commonAPI('post',`${baseurl}/video`,reqbody)
   return response;
}

// get uploaded videos
export const getVideos=async(reqbody)=>{
    return await commonAPI('get',`${baseurl}/video`,'');

}

export const deleteVideo=async(id)=>{
    return await commonAPI('delete',`${baseurl}/video/${id}`,{});

}

export const addHistory=async(reqbody)=>{
    return await commonAPI('post',`${baseurl}/history`,reqbody);

}


export const getHistory=async()=>{
    return await commonAPI('get',`${baseurl}/history`,'');

}

export const addCategory=async(reqbody)=>{
    return await commonAPI('post',`${baseurl}/category`,reqbody);

}

export const deleteHistory=async(id)=>{
    return await commonAPI('delete',`${baseurl}/history/${id}`,{});

}


export const getCategory=async()=>{
    return await commonAPI('get',`${baseurl}/category`,'');

}

export const deleteCategory=async(id)=>{
    return await commonAPI('delete',`${baseurl}/category/${id}`,{});

}


export const getOneVideo=async(id)=>{
    return await commonAPI('get',`${baseurl}/video/${id}`,{});

}


export const updateCategory=async(id,body)=>{
    return await commonAPI('put',`${baseurl}/category/${id}`,body);

}