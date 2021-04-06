import styled from 'styled-components'
import px2vw from '../utils/px2vw'

export const Container1 = styled.div`
    background-color: #1eae98;
    height: 250px;
    position: relative;
    z-index: -1;
`

export const Titulo = styled.h1`
    color: white;
    margin: 0;
    font-weight: 300;

    @media (max-width: 400px) {
        font-size: ${px2vw(150)};
    }
`
export const SubTitulo = styled.p`
    padding: 0;
    margin: 0;
    color: #08423a;
    font-size: 14px;

    @media (max-width: 400px) {
        font-size: ${px2vw(50)};
    }
`

export const ContainerTitulo = styled.div`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%)
`

export const Container2 = styled.div`
    position: relative;
    padding-top: 25px;
    margin-top: -20px;
    background-color: white;
    border-radius: 15px;
`

export const ContainerResumo = styled.div`
    position: relative;
    text-align: center;
    min-width: 100%;
`

export const Card = styled.div`
    box-shadow: 10px 10px 35px 0 rgb(0 0 0 / 5%);
    max-width: 50%;
    position: relative;
    text-align: left;
    left: 50%;
    padding: 10px;
    transform: translate(-50%);
    border-radius: 15px;
    margin-top: ${props => props.marginTop || 0};

    @media (max-width: 768px) {
        max-width: 70%
    }
`

export const TituloCard = styled.h3`
    padding: 0;
    margin: 0;

    @media (min-width: 1024px) {
        font-size: 21px
    }
`

export const TextCard = styled.div`

@media (max-width: 1024px) {
        font-size: 14px
    }
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
   left: 50%;
   transform: translate(-50%);
   display: flex;
   bottom: -50px;
   cursor: pointer;
   font-size: 12px;
`

