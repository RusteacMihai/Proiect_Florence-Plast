import styled from "styled-components";

export const Container = styled.div`
background: black;
margin-top: 0px;
padding-bottom: 20px;
align-items: center;
`


export const Paragraf = styled.p`
color: rgb(5, 197, 245);
margin-top: 0px;
padding: 10px;
align-items: center;
`
export const SubContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 3px solid ;
box-shadow: 0 0 7px 7px #3498db;
border-color: rgb(5, 197, 245);
margin: 15px;
margin-bottom: 30px;
padding: 10px;

@media only screen and (min-width: 738px) and (max-width: 1023px) {
    display: grid;
justify-content: center;
align-items: center;
border: 3px solid ;
box-shadow: 0 0 7px 7px #3498db;
border-color: rgb(5, 197, 245);
margin: 15px;
margin-bottom: 30px;
padding: 10px;
}


@media only screen and (min-width: 467px) and (max-width: 738px) {
    display: grid;
justify-content: center;
align-items: center;
border: 3px solid ;
box-shadow: 0 0 7px 7px #3498db;
border-color: rgb(5, 197, 245);
margin: 15px;
margin-bottom: 30px;
padding: 10px;

}

@media only screen and (min-width: 300px) and (max-width: 466px) {
    display: grid;
justify-content: center;
align-items: center;
border: 3px solid ;
box-shadow: 0 0 7px 7px #3498db;
border-color: rgb(5, 197, 245);
margin: 15px;
margin-bottom: 30px;
padding: 10px;

}
`

export const ContainerSecundar = styled.div`
display: flex;

align-items: center;




`

export const Title = styled.h2`
color: rgb(5, 197, 245);
margin-left: 15px;
margin-top: 0px;
padding-top: 50px;
margin-right: 15px;
`
export const SubTitle = styled.h4`
color: rgb(5, 197, 245);
margin-left: 15px;
margin-top: 0px;


`

export const Img = styled.img`

width: 500px;
margin-top: 5px;
margin-bottom: 5px;

@media only screen and (min-width: 738px) and (max-width: 1023px) {
  margin: auto;
    width: 450px;
margin-top: 5px;
margin-bottom: 5px;
}

@media only screen and (min-width: 467px) and (max-width: 738px) {
    margin: auto;
    width: 380px;
margin-top: 5px;
margin-bottom: 5px;
}


@media only screen and (min-width: 300px) and (max-width: 466px) {
    margin: auto;
    width: 300px;
margin-top: 5px;
margin-bottom: 5px;

}
`

export const Img2 = styled.img`

width: 100px;
margin-top: 30px;


`
export const Buttonas = styled.button`
background-color: transparent;
position: fixed;
right: 22px;
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