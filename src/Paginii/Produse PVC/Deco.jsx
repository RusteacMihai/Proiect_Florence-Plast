import { Buttonas, Container, ContainerSecundar, Img, Img2, Paragraf, SubContainer, SubTitle, Title } from "./Deco.style";
import LogoDecco from "./ImaginiProfile/Logo Decco.png"
import Decco1 from "./ImaginiProfile/decco1.jpg"
import Decco2 from "./ImaginiProfile/decco2.jpg"
import Decco3 from "./ImaginiProfile/decco_62_product.jpg"
import Decco4 from "./ImaginiProfile/Decco slide.jpg"
import ScrollToTop, { scrollToTopAndShowButton } from "../Componente/Altceva/Scrool";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Deco() {
    return(
        <Container>
        <ContainerSecundar>
        <Title>Profil Decco</Title>
        <Buttonas id="scrollButton" onClick={ScrollToTop} >
      <FontAwesomeIcon icon={faArrowUp} style={{width:"50px", height:"40px", color:"rgb(5, 197, 245)",}} />
          </Buttonas>
        <Img2 src= {LogoDecco}/>
        </ContainerSecundar>
        <SubContainer>
        <Img src={Decco3}/>
        <div>
            <Title>Decco 62 </Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf> - Sistem cu 4 camere în alb pur <br />
 - Garnituri în gri sau negru rezistente la condițiile meteorologice <br />
 - Posibilitatea utilizării șipcilor drepte și rotunjite <br />
 - Profil de fereastră simplu-clasic și semi-facetat, care conferă ferestrei o formă delicată și suavă <br />
 - O gamă largă de furnire asemănătoare lemnului <br />
 - Adâncimea cadrului și a fereastrei asigură o stabilitate excelentă și izolație termică și fonoabsorbantă <br />

        </Paragraf>
       
        </div>
        </SubContainer>

        <SubContainer>
        <Img src={Decco1}/>
        <div>
            <Title>DECCO 71</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf>Sistemul de profile Decco 71 ofera calitati foarte bune pentru un pret rezonabil. Fabricat din PVC alb de inalta calitate, datorita proiectarii excelente asigura proprietati termice foarte bune. Camerele profilului sunt dimensionate pentru a putea ranforsa tamplaria, in vederea imbunatatirii stabilitatii. Recomandat tuturor clientilor care apreciaza Eleganta si Design bun.</Paragraf>
        <Paragraf>Sistemul Decco 71 este o ofertă pentru toți clienții care aleg proprietăți de profil foarte bune și, în același timp, au grijă de prețul rezonabil al ferestrelor.

Fabricat din PVC alb de înaltă calitate, datorită profilului perfect proiectat, asigură proprietăți termice bune.

Camerele mari permit aplicarea de armături pentru a îmbunătăți stabilitatea profilului.

Recomandat tuturor clienților care apreciază designul bun și eleganța. </Paragraf>
       <Paragraf> - Înălțimea maximă a elementelor pentru ferestre depinde de lățimea ferestrei și de suprafața totală rezultată aferentă. <br />
 - În cazul ferestrelor de mari dimensiuni, elementele ferestrei sunt supuse unor forțe puternice. <br />
 - Rigidizările stabile din oțel asigură o rezistență ridicată la încovoiere și permit construirea unor ferestre de mari dimensiuni.</Paragraf>
       <Paragraf>Adâncimea de construcție <br />
Adâncimea de construcție de 74 mm asigură o izolație termică și fonică foarte bună <br />

</Paragraf>
       </div>
        </SubContainer>

        <SubContainer>
        <Img src={Decco2 }/>
        <div>
            <Title>Decco 82</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf>Profilul DECCO 82 stabilește cele mai recente tendințe în industria ferestrelor. Designul modern și ascetic conferă ferestrelor un caracter unic. Produsul are proprietăți universale. Oferă posibilitatea utilizării unei game largi de unități de sticlă - de la cele standard până la cele mai groase, de la cele de bază la cele speciale; calde, fonoabsorbante și sigure. Profilul se distinge prin lățimea și stabilitatea sa.</Paragraf>
        <Paragraf>Sistem cu 6 camere cu lățimea de instalare de 81 mm
Posibilitatea utilizării multiple de pachete de sticlă cu grosimea cuprinsă între 23 mm și 54,8 mm
Camere de întărire extinse pentru a crește rigiditatea ferestrei și a permite realizarea tuturor structurilor proiectate corect
Înălțimea optimă a asamblării profilului oferind până la 5% mai multă lumină în comparație cu alte sisteme din aceeași clasă (în fereastra cu două foi) cu dimensiunile: lățime 1.465 mm, înălțime 1.435 mm
Profile de clasă B conform standardului PN-EN 12608: -1:2016-04: Izolație termică perfectă. Uw = 0,77 W/m2 K pentru fereastra de referință
În acest sistem este posibilă aplicarea tehnologiei de aplicare a ferestrelor, ceea ce permite crearea de structuri de dimensiuni mai mari.</Paragraf>
      
        </div>
        </SubContainer>

        

        
        <SubContainer>
        <Img src={Decco4} />
        <div>
            <Title>Decco Slide</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf> 
Sistemul Decco SLIDE este o soluție nouă și alternativă în segmentul ușilor și ferestrelor glisante. Este o alternativă excelentă la ușile de terasă PSK sau HST. Sistemul SLIDE este potrivit atât pentru casele unifamiliale, cât și pentru clădirile publice. Este cel mai călduros sistem SLIDE; are cele mai late pachete de sticlă; este extrem de compact.
        </Paragraf>
      
       </div>
        </SubContainer>

      
    </Container>
    )
    
}