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
    padding-bottom: 50px;
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

export const ContainerInput = styled.div`
    box-shadow: 10px 10px 35px 0 rgb(0 0 0 / 5%);
    padding: 15px 25px;
    width: 400px;
    border-radius: 15px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin-top: ${props => props.marginTop || 0};

    @media (max-width: 500px) {
        width: 80%;
    }
`

export const Input = styled.input`
    outline: none;
    border: none;
    width: ${props => props.width};
`

export const Button = styled.a`
    background-color: #1eae98;
    padding: 10px 40px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    position: absolute;
    left: 50%;
    text-align: center;
    transform: translate(-50%);

`