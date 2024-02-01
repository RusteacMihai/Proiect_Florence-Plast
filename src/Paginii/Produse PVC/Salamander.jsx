import { Buttonas, Container, ContainerSecundar, Img, Img2, Paragraf, SubContainer, SubTitle, Title } from "./Salamander.style";
import LogoSalamander from "./ImaginiProfile/LogoSalamande2.png"
import Salamander1 from "./ImaginiProfile/Salamander 1.webp"
import Salamander2 from "./ImaginiProfile/salamander2.webp"
import Salamander3 from "./ImaginiProfile/salamander 3.webp"
import Salamander4 from "./ImaginiProfile/Usa salamander 2.webp"
import ScrollToTop, { scrollToTopAndShowButton } from "../Componente/Altceva/Scrool";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Salamander() {
    return(
        <Container>
        <ContainerSecundar>
        <Title>Profil Salamander</Title>
        <Buttonas id="scrollButton" onClick={ScrollToTop} >
      <FontAwesomeIcon icon={faArrowUp} style={{width:"50px", height:"40px", color:"rgb(5, 197, 245)",}} />
          </Buttonas>
        <Img2 src= {LogoSalamander}/>
        </ContainerSecundar>
        <SubContainer>
        <Img src={Salamander1}/>
        <div>
            <Title> BlueEvolution 73 </Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf> BlueEvolution 73 satisface toate nevoile dumneavoastră de design sofisticat al ferestrelor: suprafețele foarte compacte nu numai că fac profilul deosebit de ușor de întreținut, dar oferă și o durată de viață excepțional de lungă.

        </Paragraf>
       <Paragraf>
       • Profil cu 5 camere <br />

• Opriți etanșarea <br />

• Adâncime: 73mm <br />

• până la Uw = 0,73 W/(m²K) <br />

• Izolarea fonică: Reducerea sunetului cu până la 46 dB <br />

• Rezistenta la efractie: pana la RC 2 <br />

• Domenii de aplicare: ferestre rotative, basculante, rotative, intrări laterale, uși pliante și PSK
       </Paragraf>
        </div>
        </SubContainer>

        <SubContainer>
        <Img src={Salamander2}/>
        <div>
            <Title>BlueEvolution 82</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf>Viitoarele sisteme de la Salamander: Aceasta este seria de profile bluEvolution cu o adâncime de construcție de 82 mm. Acesta combină economiile excelente de energie și tehnologia inovatoare de etanșare la cel mai înalt nivel și este ideal ca componentă potrivită pentru case pasive. Folosind construcții speciale de cadru și canapea optimizate termic, împreună cu geamuri triple termoizolante cu etanșare integrată a marginilor îmbunătățite termic, costurile de încălzire și energie pot fi economisite în mod optim. Și asta e bine pentru portofelul tău!</Paragraf>
        <Paragraf>• Profil cu 6 camere <br />

• Opriți etanșarea <br />

• Adâncime de construcție: 82mm <br />

• până la Uw = 0,73 W/(m²K)  <br />

• Vitrare: până la 52 mm <br />

• Izolarea fonică: Reducerea sunetului cu până la 47 dB <br />

• Rezistenta la efractie: pana la RC 2 <br />

Domenii de aplicare: ferestre rotative, basculante, rotative, pentru casă, intrare laterală, uși pliante și PSK </Paragraf>
  
       </div>
        </SubContainer>

        <SubContainer>
        <Img src={Salamander3 }/>
        <div>
            <Title>BlueEvolution 92</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf>Sistemul de profile bluEvolution 92 combină tehnologia de ultimă oră, de ultimă oră, cu un design modern și obiectiv, pentru a crea o nouă generație de ferestre de primă clasă. Construcția optimizată cu 6 camere cu o adâncime de 92 mm oferă o protecție termică excelentă și cea mai bună eficiență energetică. Combinat cu o lățime vizibilă subțire de doar 118 mm, câștigurile solare prin incidența mare a luminii și sustenabilitatea ecologică a plasticului 100% reutilizabil, este unul dintre viitoarele sisteme de la Salamander.</Paragraf>
        <Paragraf>• Profil cu 6 camere

• Garnitura centrală <br />

• Adâncime: 92mm  <br />

• până la Uw = 0,70 W/(m²K) (cu oțel separat termic) <br />

• Vitrare: până la 60 mm <br />

• Izolarea fonică: Reducerea sunetului cu până la 47 dB <br />

• Rezistenta la efractie: pana la RC 3 <br />

• Domenii de aplicare: ferestre rotative, basculante, rotative, intrări laterale și uși PSK</Paragraf>
      
        </div>
        </SubContainer>

        

        
        <SubContainer>
        <Img src={Salamander4}/>
        <div>
            <Title>Usa de intrare</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf> 
        Ca intrare în locuință, ușa de la intrare oferă o primă impresie despre stilul, caracterul și gustul personal al locuitorilor. Aceste cunoștințe le prezintă dezvoltatorilor și designerilor noi provocări în fiecare zi. Ca element funcțional, dar mai ales decorativ și deci foarte personal al unei case, ușa de intrare trebuie să îndeplinească cele mai exigente cerințe atât din punct de vedere al funcției, cât și al designului. <br /> <br />

Trebuie să poată rezista la lovituri neglijente, precum și la condiții meteorologice extreme. Stabilitate ridicată, izolație termică optimă, cea mai bună protecție fonică și antiefracție, o durată lungă de viață și design sofisticat sunt factorii decisivi pe care sistemele de uși de la bluEvolution 82 îi îndeplinesc de departe.
        </Paragraf>
      
       </div>
        </SubContainer>

      
    </Container>
    )
    
}