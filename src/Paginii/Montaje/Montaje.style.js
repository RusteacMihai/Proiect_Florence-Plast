
import styled from "styled-components";

export const Container = styled.div`



background: black;
margin-top: 0px;
padding-top: 50px;

height: 100vh;
align-items: center;
margin : auto;

@media only screen and (min-width: 1024px) and (max-width: 3000px) {

}height: 100%;

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  height: 100%;
}

@media only screen and (min-width: 467px) and (max-width: 737px) {
height:100%;
}

@media only screen and (min-width: 300px) and (max-width: 467px) {


}
`

export const SubContainer = styled.div`
  transition: transform 0.2s ease-in-out;
  
justify-content: center;
align-items: center;
border: 3px solid ;
box-shadow: 0 0 7px 7px #3498db;
border-color: rgb(5, 197, 245);
margin: auto;
margin-bottom: 30px;
padding: 10px;
margin-top: 0px;
width: 250px;
height: 240px;





&:hover {
    transform: scale(1.05);
  }

  @media only screen and (min-width: 1023px) and (max-width: 3000px) {
    width: 280px;
height: 300px;


}
  @media only screen and (min-width: 738px) and (max-width: 1023px) {
  
  transition: transform 0.2s ease-in-out;
  
  border: 3px solid ;
  box-shadow: 0 0 7px 7px #3498db;
  border-color: rgb(5, 197, 245);
  margin: auto;
  margin-bottom: 30px;
  padding: 10px;
  margin-top: 0px;
  width: 290px;
  height:340px ;
  
  
    }
  
    @media only screen and (min-width: 467px) and (max-width: 738px) {
      width: 180px;
      height: 220px;
      margin: auto;
    }
  
  
    @media only screen and (min-width: 300px) and (max-width: 466px) {
  
      width: 130px;
  height: 160px;

      &:hover {
      transform: scale(1.05);
    }
  }

`


export const Img = styled.img`


width: 100%;
height: 250px;
margin-top: 5px;
margin-bottom: 5px;

@media only screen and (min-width: 1023px) and (max-width: 3000px) {
  width: 100%;
  height:100% ;
}

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  margin: auto;
  height: 100%;
width: 100%;
margin-top: 5px;
margin-bottom: 5px;
}

@media only screen and (min-width: 467px) and (max-width: 738px) {
    margin: auto;
    height: 100%;
    width: 100%;
margin-top: 5px;
margin-bottom: 5px;
}


@media only screen and (min-width: 300px) and (max-width: 466px) {
    margin: auto;
    height: 100%;
    width: 100%;
margin-top: 5px;



}


`

export const Title = styled.h1`
color: rgb(5, 197, 245);
padding-bottom: 50px;
margin-top: 0px;

display: flex;
justify-content: center;

`

export const ContainerSecundar = styled.div`
display: grid;
  grid-template-columns: repeat(3, 3fr);
margin:auto;

@media only screen and (min-width: 1023px) and (max-width: 3000px) {


}

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  display: grid;
  grid-template-columns: repeat(2, 3fr);
align-items:center;
margin:auto;

gap:20px;
}

@media only screen and (min-width: 467px) and (max-width: 738px) {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
margin:auto;
gap:20px;
}

@media only screen and (min-width: 300px) and (max-width: 466px) {
display: grid;
  grid-template-columns: repeat(2,2fr);
margin:auto;

}
`


export const SubTitle = styled.h4`
color: rgb(5, 197, 245);

margin-top: 0px;
display: flex;
justify-content: center;
`

export const Buttonas = styled.button`
background-color: transparent;
position: fixed;
right: 15px;
bottom: 15px;
display: flex;
justify-content: flex-end;
width: 40px;
height: 40px;
border-radius: 30px;

z-index: 1;
visibility:hidden;
border: 1px solid ;
box-shadow: 0 0 4px 4px #3498db;
`
