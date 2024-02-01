import styled from "styled-components";

import ImagineFundal from "../Paginii/Produse/Imagini Produse/ImagineFundal.jpg.png"

export const ContainerPrincipal = styled.div`
 background-image: url(${ImagineFundal});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100vh;
margin: auto;

@media only screen and (min-width: 1023px) and (max-width: 3000px) {
height: 100vh;
}

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  background-image: url(${ImagineFundal});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 130vh;
margin: auto;
}


@media only screen and (min-width: 467px) and (max-width: 737px) {
  width: 100%;
  height: 140vh;
}


@media only screen and (min-width: 300px) and (max-width: 466px) {
  background-image: url(${ImagineFundal});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 87vh;
margin: auto;

}

`

export const ContainerDetalii = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  margin-bottom: 50px;
  margin-top: 15px;

  @media only screen and (min-width: 1024px) and (max-width: 3000px) {
    height: 440px;
}

  @media only screen and (min-width: 738px) and (max-width: 1023px) {
    position: relative;
  width: 240px;
  height: 380px;
  margin-bottom: 10px;
  margin-top: 20px;
  }

  @media only screen and (min-width: 467px) and (max-width: 737px) {
  position: relative;
  width: 205px;
  height: 290px;
  margin-bottom: 10px;
  margin-top: 20px;
}

@media only screen and (min-width: 300px) and (max-width: 466px) {
  width: 150px;
  height: 260px;
  margin-top: 20px;
  margin-bottom: 10px;
}


`;
export const ContainerContainere = styled.div`
display: flex;
justify-content: space-between;



@media only screen and (min-width: 300px) and (max-width: 600px) {
  display: grid;
}

`
export const ContainerDetaliiBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(128, 128, 128, 0.5));
`;

export const ContainerDetaliiContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const H2 = styled.h2`
  color: white;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  margin-top: 0px;

  
@media only screen and (min-width: 1023px) and (max-width: 3000px) {
  font-size: 32px;
}

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  font-size: 28px;
}

  @media only screen and (min-width: 467px) and (max-width: 738px) {
    font-size: 20px;
  }
   
@media only screen and (min-width: 300px) and (max-width: 466px) {
  font-size: 19px;
}

`


export const TitluPagina = styled.h2`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.5);
  margin-left: 10px;
  display: flex;
  justify-content: center;
  margin-top: 0px;
  font-size:60px;
  font-weight:700;
margin:auto;
  box-shadow: 0 0 10px 10px black;
border-color: rgb(black);
padding: 0 10px 0 10px;
background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(128, 128, 128, 0.5));

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.5);
  margin-left: 10px;
 
  justify-content: center;
  margin-top: 0px;
  font-size:50px;
  font-weight:700;
margin:auto;
  box-shadow: 0 0 10px 10px black;
border-color: rgb(black);
padding: 0 10px 0 10px;
background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(128, 128, 128, 0.5));
}

   
@media only screen and (min-width: 467px) and (max-width: 738px) {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.5);

display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  font-size:30px;
  font-weight:700;
margin:auto;
  box-shadow: 0 0 10px 10px black;
border-color: rgb(black);
padding: 0 10px 0 10px;
background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(128, 128, 128, 0.5));
}


@media only screen and (min-width: 300px) and (max-width: 466px) {
  font-size:24px;
  padding: auto;
}
`

export const H3 = styled.h3`
  color: white;
  margin-top: 10px;
  margin-left: 10px;
  @media only screen and (min-width: 1023px) and (max-width: 3000px) {
  font-size: 28px;
}

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  font-size: 24px;
}

  @media only screen and (min-width: 467px) and (max-width: 738px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 300px) and (max-width: 466px) {
  font-size:16px;
}
`;

export const ContainerDetalii2 = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
margin-top: 15px;

@media only screen and (min-width: 1024px) and (max-width: 3000px) {
  height: 310px;
}

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  height: 280px;
  width: 290px;

  }

 
@media only screen and (min-width: 467px) and (max-width: 738px) {
  position: relative;
  width: 200px;
  height: 240px;
  margin-top: 10px;
 
}

@media only screen and (min-width: 300px) and (max-width: 467px) {
  width: 150px;
  margin-top: 10px;
  height: 220px;

}
`;

export const ContainerDetaliiBackground2 = styled.div`
position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(128, 128, 128, 0.5));

  
  
`;

export const ContainerDetaliiContent2 = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;