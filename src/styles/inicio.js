import styled from 'styled-components'
import px2vw from '../utils/px2vw'

export const Container = styled.div`
    background-image: linear-gradient(to bottom right, #1eae98 -50%, #177466);
    color: white;
    height: 100vh;
    position: absolute;
    top: 0;
    min-width: 100%;
`
export const Titulo = styled.h1`
    font-weight: 300;

    @media (max-width: 500px){
        font-size: 32px
    }
`

export const Texto = styled.p`
    @media (max-width: 500px){
        font-size: 14px
    }
`

export const ContainerTexto = styled.div`
    width: 400px;
    text-align: center;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 0;

    @media (max-width: 500px) {
        text-align: left;
        width: ${px2vw(1000)};
        top: 40%;
    }
`

export const IconAjuda = styled.i`
    margin: 8px 5px 0px 15px;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    color: #1eae98
`

export const ButtonAjuda = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    font-size: 12px;
    padding: 10px;

    @media (min-width: 1024px) {
        padding: 30px
    }
`

export const Arrow = styled.i`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 20px;
    cursor: pointer;

    @media (min-width: 1024px) {
        font-size: 25px;
        padding: 30px;
    }
`