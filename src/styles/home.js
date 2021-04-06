import styled from 'styled-components'
import px2vw from '../utils/px2vw'

export const Container = styled.div`
    position: absolute;
    top: 40px;
    z-index: 1;
    width: 100%;
    margin-top:  ${px2vw(-20)};
    background-color: transparent;
    border-radius: 20px;

    @media (max-width:1024px) {
        position: relative;
        padding-top: ${px2vw(50)};
        background-color: white;
        top: 0;
    }
`
export const SearchIcon = styled.div`
    padding:  ${px2vw(5)};
    font-size:  ${px2vw(20)};
    color: rgba(0, 0, 0, 0.76);

    @media (max-width:1024px) {
        font-size:  ${px2vw(30)};
    }
    @media (max-width:768px) {
        font-size:  ${px2vw(40)};
    }
    @media (max-width:450px) {
        font-size:  ${px2vw(60)};
    }
`

export const Table = styled.table`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


export const SearchDiv = styled.div`
    background-color: white;
    border-radius: 30px;
    position: relative;
    box-shadow: 10px 10px 35px 0 rgb(0 0 0 / 5%);
    width: ${px2vw(500)};
    left: 50%;
    height: ${px2vw(50)};
    transform: translate(-50%);

    @media (max-width:1024px) {
        width: ${px2vw(700)};
        height: ${px2vw(70)};
    }
    @media (max-width:600px) {
        width: ${px2vw(1000)};
        height: ${px2vw(100)};
    }
    @media (max-width:450px) {
        width: ${px2vw(1200)};
        height: ${px2vw(120)};
    }

`
export const SearchInput = styled.select`
   font-size: ${px2vw(18)};
   width: ${px2vw(400)};
   cursor: pointer;
   padding-left:  ${px2vw(15)};
   color: gray;
   border: none;
   outline: none;

   @media (max-width:1024px) {
    font-size: ${px2vw(24)};
    width: ${px2vw(550)};
    }
    @media (max-width:768px) {
        font-size:  ${px2vw(30)};
    }
    @media (max-width:600px) {
        width: ${px2vw(800)};
        font-size:  ${px2vw(40)};
    }
    @media (max-width:450px) {
        font-size:  ${px2vw(50)};
        width: ${px2vw(1000)};
    }
`

export const ImageDiv = styled.div`
    z-index: -1
` 

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`
