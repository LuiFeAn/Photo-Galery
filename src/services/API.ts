import axios from "axios";
const BASEENDPOINT = "https://jsonplaceholder.typicode.com/"
const API = {
    getAllAlbums:async()=>{
        try{
            let req = await axios.get(`${BASEENDPOINT}albums`);
            let json = await req.data;
            return json;
        }catch(err){
            alert(err);
        }
    },
    getOnlyAlbum: async(id:string)=>{
        try{
            let req = await axios.get(`${BASEENDPOINT}albums/${id}/photos`)
            let json = await req.data;
            return json;
        }catch(err){
            alert(err);
        }
    },
    getMainPhoto: async(id:string)=>{
        try{
            let req = await axios.get(`${BASEENDPOINT}photos/${id}`)
            let json = await req.data;
            return json;
        }catch(err){
            alert(err);
        }
    }
}
export default API;