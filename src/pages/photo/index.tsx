import API from "../../services/API";
import { useEffect, useState } from "react";
import {useParams,useNavigate} from 'react-router-dom'
import * as S from './style'
import photo from "../../types/photo";
const Photo = ()=>{


    const parm = useParams();

    const [photo,setPhoto] = useState<photo>();
    const navigate = useNavigate();


    useEffect(()=>{
        if(parm.id){
            getPhotoId(parm.id);
        }
    },[])

    const getPhotoId = async (id:string)=>{
        let json = await API.getMainPhoto(id);
        setPhoto(json);
    }

    const handleBack = ()=>{
        navigate(-1);
    }

    return(
        <S.PhotoContainer>
            <button onClick={handleBack}>Voltar</button>
            <S.PhotoImg src = {photo?.thumbnailUrl}/>
            <h1>Título: {photo?.title}</h1>
        </S.PhotoContainer>
    );
}
export default Photo;