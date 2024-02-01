import JaluzeleTextile  from "./Imagini Produse/textile.jpeg"
import JaluzeleVerticale  from "./Imagini Produse/3.3.jpeg"
import JaluzeleAluminiu  from "./Imagini Produse/3.2.jpeg"
import JaluzeleDayAndNight  from "./Imagini Produse/3.4.jpeg"
import { Container, ContainerSecundar, Img, Img2, SubContainer, SubTitle, Title } from "./Jaluzele.style"
export default function Jaluzele() {
    return (
<Container>
<Title>Jaluzele</Title>

<ContainerSecundar>
<SubContainer>
    <Img src={JaluzeleVerticale}/>
    <SubTitle>Jaluzele Verticale</SubTitle>
</SubContainer>

<SubContainer>
    <Img2 src={JaluzeleDayAndNight}/>
    <SubTitle>Jaluzele Day and Night</SubTitle>
</SubContainer>

<SubContainer>
    <Img2 src={JaluzeleAluminiu} />
    <SubTitle>Jaluzele de Aluminu</SubTitle>
</SubContainer>

<SubContainer>
    <Img2 src={JaluzeleTextile}/>
    <SubTitle>Jaluzele Textile </SubTitle>
</SubContainer>


</ContainerSecundar>

</Container>
    )
    
}