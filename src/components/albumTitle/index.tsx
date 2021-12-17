import * as S from './style'
import { Link } from 'react-router-dom'
import {useState} from 'react'

type Props = {
    title: string,
    id?: number,
}

const AlbumTitle = ({title,id}:Props)=>{

    const handleList = ()=>{
       
    }

    return(
        <S.TitleContainer>
          <S.TitleOrder>
              <S.TitleList onClick={handleList}>
                  {title}
              </S.TitleList>
          </S.TitleOrder>
        </S.TitleContainer>
    )
}
export default AlbumTitle;