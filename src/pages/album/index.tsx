import API from "../../services/API"
import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom";
import AlbumPhoto from '../../components/albumPhoto';
import photo from "../../types/photo";
import * as S from './style'

const Album = ()=>{
    const parms = useParams();
    const navigate = useNavigate();

    const [album,setAlbum] = useState<photo[]>([]);

    useEffect(()=>{
        if(parms.id){
            getAlbumPhotos(parms.id);
        }
    },[])

    const getAlbumPhotos = async(id:string)=>{
        let json = await API.getOnlyAlbum(id);
        setAlbum(json);
    }

    const handleBack = ()=>{
        navigate(-1);
    }

    return(
       <S.Container>
           <button onClick={handleBack}>Voltar</button>
           {album.map((item,index)=>(
               <AlbumPhoto key = {index} data = {item}/>
           ))}
       </S.Container>
    )
}
export default Album