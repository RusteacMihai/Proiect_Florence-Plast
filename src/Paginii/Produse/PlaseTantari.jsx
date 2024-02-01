import { Container, ContainerSecundar, Img, SubContainer, SubTitle, Title } from "./PlaseTanari.style";
import SitaRolou from "./Imagini Produse/1.jpeg"
import SitaAluminu from "./Imagini Produse/2.webp"
import SitaUsa from "./Imagini Produse/3.jpeg"
import SitaPlise from "./Imagini Produse/4.jpeg"
import SitaMagnetica from "./Imagini Produse/5.jpeg"

export default function PlaseTantari() {
    return(
<Container>
<Title>Plase de tantari</Title>

<ContainerSecundar>
<SubContainer>

<Img src={SitaRolou} style={{height:"200px"}}/>
<SubTitle>Sita tip rulou</SubTitle>
</SubContainer>

<SubContainer>

<Img  src={SitaAluminu} style={{height:"200px"}}/>
<SubTitle>Sita de aluminiu</SubTitle>
</SubContainer>

<SubContainer>

<Img src={SitaUsa} style={{height:"200px"}}/>
<SubTitle>Sita de usa</SubTitle>
</SubContainer>

<SubContainer>

<Img src={SitaMagnetica} style={{height:"200px"}}/>
<SubTitle>Sita Magnetica</SubTitle>
</SubContainer>


<SubContainer>

<Img src={SitaPlise} style={{height:"200px"}}/>
<SubTitle>Sita tip plise</SubTitle>
</SubContainer>

</ContainerSecundar>

</Container>
    )
}