import styled from 'styled-components'
import px2vw from '../utils/px2vw'

export const Container1 = styled.div`
    background-color: #1eae98;
    height: 300px;
    position: relative;
    z-index: -1;
`
export const Titulo = styled.h1`
    position: absolute;
    color: white;
    margin-top: 0;    
    top: 50%; 
    left: 20%;
    transform: translate(-20%, -50%); 
    font-size: 40px;
    font-weight: 300;

    @media (max-width: 400px) {
        font-size: ${px2vw(150)};
    }
`

export const Container2 = styled.div`
    position: relative;
    padding-top: 25px;
    margin-top: -20px;
    background-color: white;
    border-radius: 15px;
`

export const Arrow = styled.i`
   font-size: 20px;
   margin-top: 10px;
   margin-left: 30px;
   cursor: pointer
`

export const Subtitulo = styled.h2`
    font-size: 20px;
    text-align: left;
    padding-left: 50px;
    padding-right: 40px;

    @media (max-width: 400px) {
        font-size: 16px;
    }
`

export const Texto = styled.p`
    font-size: 14px;
    padding-left: 50px;
    padding-right: 40px;
`

export const Button = styled.a`
    background-color: #1eae98;
    padding: 10px 40px;
    border-radius: 10px;
    color: white;
    margin-top: ${px2vw(100)};
    position: absolute;
    left: 50%;
    cursor: pointer;
    transform: translate(-50%); 
`

export const IconAjuda = styled.i`
    margin: 8px 5px 0px 15px;
    background-color: #1eae98;
    border-radius: 5px;
    padding: 5px;
    color: white
`

export const ButtonAjuda = styled.div`
   position: relative;
   bottom: -50px;
   display: flex;
   cursor: pointer;
   font-size: 12px;
   margin-left: 20px;
   margin-top: 30px;
   
   @media (min-width: 1024px) {
       position: absolute;
       bottom: 0
   }
`