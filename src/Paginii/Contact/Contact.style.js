import styled from "styled-components";


export const ContainerPrincipales = styled.div`

background: black;
margin-top: 0px;
padding-top: 50px;
width: 100vh;

margin: auto;
width: 100%;

@media only screen and (min-width: 1024px) and (max-width: 3000px) {

}height: 155vh;

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  height: 290vh;
} 

@media only screen and (min-width: 467px) and (max-width: 737px) {
height:100%;
}

@media only screen and (min-width: 300px) and (max-width: 467px) {

height: 100%;
}
`;

export const ContainerAdresa = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-left: 60px;
  margin: 5px;
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

export const ContainerTelefon = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 5px;
  padding-left: 60px;
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-bottom: 25px;
  padding-left: 60px;
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`
export const ContainerProgram = styled.div`
display: flex;
  flex-direction: column;
  align-content: center;
  padding-bottom: 10px;
  padding-left: 60px;
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`

export const Contacte = styled.h1`
margin:10px;
 color: white;
 padding-left: 50px;
`

export const Img = styled.img`
border-radius: 40px;
width: 40px;
`

export const Titlu = styled.h3`
  color: white;
  margin:10px;
@media only screen and (min-width: 601px) and (max-width: 872px) {
font-size: 25px;
}

@media screen and (max-width: 600px) {
  font-size: 25px;
}


`

export const Detalii = styled.h4`
  color: white;
  padding: 0px;
@media only screen and (min-width: 601px) and (max-width: 872px) {
font-size: 21px;
}

@media screen and (max-width: 600px) {
  font-size: 18px;
}
`

export const ContainerOrar = styled.div`

display: flex;
justify-content: flex-start;

  margin: auto;
  margin-left: 2px;
  margin-bottom: 30px;
  padding: 10px;



  


  
  
  &:hover {
      transform: scale(1.05);
    }

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
export const ContainerText = styled.h4`
color:white;

@media only screen and (min-width: 1024px) and (max-width: 3000px) {

}

@media only screen and (min-width: 738px) and (max-width: 1023px) {

}

@media only screen and (min-width: 467px) and (max-width: 737px) {

}

@media only screen and (min-width: 300px) and (max-width: 467px) {


}


`
