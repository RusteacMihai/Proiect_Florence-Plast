
import styled from "styled-components";

export const Container = styled.div`
background: black;
margin-top: 0px;
padding-top: 50px;
margin: auto;
height: 90vh;
align-items: center;

@media only screen and (min-width: 1023px) and (max-width: 3000px) {
  height: 130vh;
  padding-bottom: 80px;

}

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  height: 100vh;
}

@media only screen and (min-width: 467px) and (max-width: 738px) {
  height: 170vh;
}

@media only screen and (min-width: 300px) and (max-width: 467px) {
  height: 120vh;
  padding-bottom: 80px;


}
`

export const SubContainer = styled.div`
  transition: transform 0.2s ease-in-out;
justify-content: center;
align-items: center;
border: 3px solid ;
box-shadow: 0 0 7px 7px #3498db;
border-color: rgb(5, 197, 245);
margin: 15px;
margin-bottom: 30px;
padding: 10px;
margin-top: 0px;
width: 200px;
margin: auto;


&:hover {
    transform: scale(1.05);
  }

  @media only screen and (min-width: 1023px) and (max-width: 3000px) {
 width: 200px;
 height: 270px;

}
  
  @media only screen and (min-width: 738px) and (max-width: 1023px) {
  
  transition: transform 0.2s ease-in-out;
  
  border: 3px solid ;
  box-shadow: 0 0 7px 7px #3498db;
  border-color: rgb(5, 197, 245);
  margin: 15px;
  margin-bottom: 30px;
  padding: 10px;
  margin-top: 0px;
  width: 170px;
  margin:auto;
  
    }
  
    @media only screen and (min-width: 467px) and (max-width: 738px) {
      width: 150px;
      margin: auto;
    }
  
  
    @media only screen and (min-width: 300px) and (max-width: 466px) {
  
      width: 140px;
      margin: auto;
  height: 230px;
      &:hover {
      transform: scale(1.05);
    }
  }
`


export const Img = styled.img`

width: 200px;
margin-top: 5px;
margin-bottom: 5px;

@media only screen and (min-width: 1023px) and (max-width: 3000px) {
 width: 100%;

}

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  margin: auto;
  width: 100%;
margin-top: 5px;
margin-bottom: 5px;
}

@media only screen and (min-width: 467px) and (max-width: 738px) {
    margin: auto;
    width: 100%;
margin-top: 5px;
margin-bottom: 5px;
}


@media only screen and (min-width: 300px) and (max-width: 466px) {
margin: auto;
width: 100%;
margin-top: 5px;

margin-bottom: 5px;


}

`

export const Img2 = styled.img`

width: 200px;
height: 200px;
margin-top: 5px;
margin-bottom: 5px;

@media only screen and (min-width: 1023px) and (max-width: 3000px) {
 width: 100%;

}

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  margin: auto;
  width: 100%;
  height: 100%;
margin-top: 5px;
margin-bottom: 5px;
height: 170px;
}

@media only screen and (min-width: 467px) and (max-width: 738px) {
    margin: auto;
    width: 100%;
margin-top: 5px;
margin-bottom: 5px;
height: 150px;
}


@media only screen and (min-width: 300px) and (max-width: 466px) {
margin: auto;
width: 100%;
margin-top: 5px;
height: 65%;
margin-bottom: 5px;


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
display: flex;
justify-content: center;
align-items: center;

@media only screen and (min-width: 1023px) and (max-width: 3000px) {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
margin:auto;

gap:20px;
}
@media only screen and (min-width: 738px) and (max-width: 1023px) {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
margin:auto;

gap:20px;
}

@media only screen and (min-width: 467px) and (max-width: 738px) {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
margin:auto;
height: 150px;
gap:20px;
}

@media only screen and (min-width: 300px) and (max-width: 466px) {
display: grid;
  grid-template-columns: repeat(2,2fr);
margin:auto;
height: 150px;
gap:5px;
}

`


export const SubTitle = styled.h4`
color: rgb(5, 197, 245);

margin-top: 0px;
display: flex;
justify-content: center;
`