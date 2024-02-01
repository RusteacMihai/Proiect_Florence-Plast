
import PervazExterior from "./Imagini Produse/4.1.jpeg"
import PervazInterior from "./Imagini Produse/4.3.jpeg"
import { Container, ContainerSecundar, Img, SubContainer, SubTitle, Title } from "./Pervaze.style"

export default function Pervaze() {
    return (

<Container>
    <Title>Pervaze</Title>
    <ContainerSecundar>
    <SubContainer>
    <Img src={PervazExterior}/>
<SubTitle>Pervaz Exterior Aluminiu</SubTitle>
    </SubContainer>

    <SubContainer>
    <Img src={PervazInterior}  />
<SubTitle>Pervaz Interior din PVC <br /></SubTitle>
    </SubContainer>
    </ContainerSecundar>
</Container>
    )
    
}