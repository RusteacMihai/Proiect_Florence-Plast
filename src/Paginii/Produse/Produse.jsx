import { Container, ContainerSecundar, Img, SubContainer, SubTitle, Title } from "./Produse.style";
import  Site  from "./Imagini Produse/2.webp"
import Rulouri  from "./Imagini Produse/2.1.jpeg"
import Jaluzele  from "./Imagini Produse/3.3.jpeg"
import Pervaze  from "./Imagini Produse/4.3.jpeg"
import { Link } from "react-router-dom";


export default function Produse() {
    return(
        <Container>
        
            <Title>Produse</Title>
            <ContainerSecundar>


<SubContainer>
    
 <Link to="/Site">
<Img src={Site}/>
</Link>
<SubTitle>Plase de tantari</SubTitle>
</SubContainer>


  
<SubContainer>
<Link to="/Rulouri">
<Img src={Rulouri}/>
</Link>
<SubTitle>Rulouri</SubTitle>
</SubContainer>


  
<SubContainer>
<Link to="/Jaluzele">
<Img src={Jaluzele}/>
</Link>
<SubTitle>Jaluzele</SubTitle>
</SubContainer>


 
<SubContainer>
<Link to="/Pervaze"> 
<Img src={Pervaze}/>
</Link>
<SubTitle>Pervaze</SubTitle>
</SubContainer>


</ContainerSecundar>

        </Container>
    )
    
}