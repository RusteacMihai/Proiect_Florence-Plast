import styled from "styled-components";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
</style>




export const NavBarMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
 
 
align-items: flex-end;
    position: absolute;
    top: 18px;
    right: 20px;


    z-index: 3;
  
    ${({ navbarActive }) => navbarActive }
  }



@media only screen and (min-width: 467px) and (max-width: 767px) {
  display: block;


    position: absolute;
    top: 18px;
    right: 30px;
    
   
    z-index: 3;
 
    ${({ navbarActive }) => navbarActive}}

@media only screen and (min-width: 300px) and (max-width: 467px) {


margin-right:10px;
}
`;

export const ButtonMobile = styled.button`
display: grid;

background-color:transparent;
border:none;
justify-items: flex-end;


`;

export const Content = styled.div`
  display: grid;

  margin-top: 20px;
  background-color: black;
  margin-left: -136px; 
  margin-right:-28px;
`;


export const Container = styled.div`
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0;
  padding: 0;
 
`;

export const NavBarDesktop = styled.div`
@media (max-width: 768px) {
    display: none;
  }
  
`

export const Img = styled.img`
border-radius: 20px;
width: 80px;
margin-top: 5px;
margin-bottom: 5px;
transition: opacity 0.3s ease-in-out;
&:hover {
    opacity: 0.8;}
z-index: 2;
`

export const Bar = styled.div`
 background-color: rgb(5, 197, 245);;
 border-radius:10px;
  height: 4px;
  width: 28px;
  margin: 3px 0;
`

export const Title = styled.h1`
 text-shadow: 1px 1px 3px rgba(255, 255, 255, 1);
color: rgb(5, 197, 245);
margin-left: 15px;
font-family: 'Fjalla One', sans-serif;
z-index: 2;

@media only screen and (min-width: 1024px) and (max-width: 3000px) {

}

@media only screen and (min-width: 738px) and (max-width: 1023px) {

} 

@media only screen and (min-width: 467px) and (max-width: 737px) {
font-size: 20px;
}

@media only screen and (min-width: 300px) and (max-width: 467px) {

  font-size: 27px;
}

`

export const DropdownContainer = styled.div`
color: rgb(5, 197, 245);
position: relative;
  display: inline-block;
  @media only screen and (min-width: 300px) and (max-width: 737px) {
display: flex;
justify-content: left;
left:0;
margin: auto;
}

`;
export const Buton = styled.button`
  background-color:transparent;
 color: rgb(5, 197, 245);
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border-color:rgb(5, 197, 245);
  font-weight: 700;
  &:hover {
    color:white;}

    @media only screen and (min-width: 1024px) and (max-width: 3000px) {
      font-size: 28px;
}
@media only screen and (min-width: 769px) and (max-width: 1023px) {
  font-size: 26px;
} 

    @media only screen and (min-width: 467px) and (max-width: 768px) {
font-size: 26px;
}

@media only screen and (min-width: 300px) and (max-width: 467px) {

  font-size: 25px;

 }
`;

export const DropdownContents = styled.div`
  position: absolute;
  top: 100%;
display: grid;
  background-color: black;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  border-radius: 0 0 5px 5px;
  z-index: 3;
 margin: auto;

 @media only screen and (min-width: 467px) and (max-width: 768px) {
  position: absolute;
right: 180px;
 }

@media only screen and (min-width: 300px) and (max-width: 467px) {
position: absolute;
right: 140px;



}
`;


export const Button = styled.button`
  background-color:transparent;
 color: rgb(5, 197, 245);
  padding: 10px 10px;
  font-size: 16px;
  border: none;

  cursor: pointer;
  border-color:rgb(5, 197, 245);
  font-weight: 700;
  width:100%;
  &:hover {
    background-color: rgb(5, 197, 245);
color:white;
width:100% }

@media only screen and (min-width: 1024px) and (max-width: 3000px) {
      font-size: 28px;
}
@media only screen and (min-width: 769px) and (max-width: 1023px) {
  font-size: 26px;
} 

@media only screen and (min-width: 467px) and (max-width: 768px) {
font-size: 26px;
}

@media only screen and (min-width: 300px) and (max-width: 467px) {

  font-size: 25px;
}
`;