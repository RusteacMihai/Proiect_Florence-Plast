import { Container, ContainerSecundar, Img, Img2, SubContainer, SubTitle, Title } from "./Rulouri.style";
import RolouAplicat from "./Imagini Produse/2.2.jpeg"
import RolouTencuibil from "./Imagini Produse/2.1.jpeg"
import RolouSuprapus from "./Imagini Produse/Suprapus.jpeg"

export default function Rulouri() {
    return(
        <Container>
<Title>Rolouri</Title>
<ContainerSecundar>

<SubContainer>
<Img src={RolouAplicat}  />
<SubTitle>Rolou Aplicat</SubTitle>
</SubContainer>



<SubContainer>
<Img src={RolouTencuibil}  />
<SubTitle>Rolou Tencuibil</SubTitle>
</SubContainer>

<SubContainer>
<Img2 src={RolouSuprapus}   />
<SubTitle>Rolou Suprapus</SubTitle>
</SubContainer>


</ContainerSecundar>

        </Container>

    )
    
}