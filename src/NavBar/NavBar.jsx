import { useState } from "react";
import FlorencePlastLogo from "../Imagini/Florence plast Logo.jpg"
import { Buton, Container, DropdownContainer, Img, Title ,DropdownContents, Button, NavBarMobile, ButtonMobile, NavBarDesktop, Bar, Content} from "./NavBar.styled";
import { Link } from "react-router-dom";

function NavBar() {
  const [navbarActive, setNavbarActive] = useState(false);

  const [buttonsVisible, setButtonsVisible] = useState(false); 

  const handleToggle = () => {
    setNavbarActive(!navbarActive);

    setButtonsVisible(!buttonsVisible);
  };



  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Container>
<NavBarMobile  navbarActive={navbarActive} >

         
<ButtonMobile onClick={handleToggle}>
              <Bar></Bar>
              <Bar ></Bar>
              <Bar></Bar>
            </ButtonMobile>
            
            {buttonsVisible && (
                <Content >
     
      <div>
      <Link to="/Home">
      <Buton>Acasa</Buton>
      </Link>
      </div>
      <DropdownContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
      <Buton >Profile PVC</Buton>
      {isOpen && (
        <DropdownContents>
          <Link to="Rehau">
            <Button>Rehau</Button>
          </Link>

          <Link to="Gealan">
            <Button>Gealan</Button>
          </Link>

          <Link to="Deco">
            <Button>Decco</Button>
            </Link>
          <Link to="Klass">
            <Button>Klass</Button>
          </Link>
          <Link to="Salamander">
            <Button>Salamander</Button>
          </Link>
          <Link to="Deceunick">
            <Button>Deceuninck</Button>
          </Link>
          
        
      
        </DropdownContents>
      )}
    </DropdownContainer>
<Link to="/produse">
   <Buton>Produse</Buton>
   </Link>
   <Link to="/Montaje">
   <Buton>Montaje</Buton>
   </Link>
   <Link to="contact">
   <Buton>Contact</Buton>
   </Link>


   </Content>)};

</NavBarMobile>


      <div className="ContainerDetalii"
      style={{display:"flex",
      marginLeft:"10px"}}>
      <div>
        <Link to="Home">
        <Img src={FlorencePlastLogo}/>
        </Link>
      </div>

      <div>
        <Title >
          Florence Plast
        </Title>
      </div>
      </div>

      <NavBarDesktop>
      <div>
      <Link to="/Home">
      <Buton>Acasa</Buton>
      </Link>
      
      <DropdownContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
      <Buton >Profile PVC</Buton>
      {isOpen && (
        <DropdownContents>
          <Link to="Rehau">
            <Button>Rehau</Button>
          </Link>

          <Link to="Gealan">
            <Button>Gealan</Button>
          </Link>

          <Link to="Deco">
            <Button>Decco</Button>
            </Link>
          <Link to="Klass">
            <Button>Klass</Button>
          </Link>
          <Link to="Salamander">
            <Button>Salamander</Button>
          </Link>
          <Link to="Deceunick">
            <Button>Deceuninck</Button>
          </Link>
          
        
      
        </DropdownContents>
      )}
    </DropdownContainer>
<Link to="/produse">
   <Buton>Produse</Buton>
   </Link>
   <Link to="/Montaje">
   <Buton>Montaje</Buton>
   </Link>
   <Link to="contact">
   <Buton>Contact</Buton>
   </Link>


   </div>
   </NavBarDesktop> 
  
        

    </Container>
  );
}

export default NavBar;