import axios from "axios";
const BASEENDPOINT = "https://jsonplaceholder.typicode.com/albums"
const API = {
    getAlbum:async()=>{
        try{
            let req = await axios.get(`${BASEENDPOINT}`);
            let json = await req.data;
            return json;
        }catch(err){
            alert(err);
        }
    }
}
export default API;