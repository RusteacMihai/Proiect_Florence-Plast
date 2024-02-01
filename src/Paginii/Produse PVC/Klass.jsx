import { Buttonas, Container, ContainerSecundar, Img, Img2, Paragraf, SubContainer, SubTitle, Title } from "./Klass.style";
import LogoKlass from "./ImaginiProfile/logo_klass_new.png"
import Klass1 from "./ImaginiProfile/Klass60.png"
import Klass2 from "./ImaginiProfile/klass70.png"
import Klass3 from "./ImaginiProfile/usa intrare klass2.jpg"
import ScrollToTop, { scrollToTopAndShowButton } from "../Componente/Altceva/Scrool";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Klass() {
    return(
        <Container>
        <ContainerSecundar>
        <Title>Profil KLASS</Title>
        <Buttonas id="scrollButton" onClick={ScrollToTop} >
      <FontAwesomeIcon icon={faArrowUp} style={{width:"50px", height:"40px", color:"rgb(5, 197, 245)",}} />
          </Buttonas>
        <Img2 src= {LogoKlass}/>
        </ContainerSecundar>
        <SubContainer>
        <Img src={Klass1}/>
        <div>
            <Title>Klass 400 </Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf> Design modern, cu muchii generos rotunjite
Adancimea constructiva a profilelor principale este de 60mm
Structura tetracamerala a profilelor principale
Profile clasa B
Coeficient de transfer termic de pana la 1,56 W/m2 K pentru profile armate (ansamblu rama-cercevea)
Etansare cu doua randuri de garnituri
Utilizarea unui singur tip de armatura pentru profilele principale (rama, cercevea, montant)
Sistem de armaturi comun cu seria KLASS 600
Frezare gauri maner fereastra fara trecere prin armatura
Montanti comuni pentru rama si cercevele
Baghete comune pentru profilele principale si cu seria KLASS 600
Posibilitatea montarii de geam simplu (5mm), geam termoizolant dublu (24mm) sau triplu (34mm)
        </Paragraf>
       
        </div>
        </SubContainer>

        <SubContainer>
        <Img src={Klass2}/>
        <div>
            <Title>Klass 600</Title>
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
        <Img src={Klass3} style={{
            height:"500px"
        }} />
        <div>
            <Title>Usa Klass</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf> 
        Design modern, cu muchii generos rotunjite
Adancimea constructiva a profilelor principale este de 70mm <br />
Structura hexacamerala a profilelor principale <br />
Coeficient de transfer termic de pana la 1,31 W/m2 K pentru profile armate  <br />
Etansare cu doua randuri de garnituri <br /> 
Utilizarea unui singur tip de armatura pentru profilele principale <br />
Sistem de armaturi comun cu seria KLASS 400 si KLASS 600 <br /> 
Frezare gauri maner fereastra fara trecere prin armatura <br />
Montanti comuni pentru rama si cercevele <br /> 
Baghete comune pentru profilele principale si cu seria KLASS 400 <br />
Posibilitatea montarii de geam termoizolant dublu (24mm) sau triplu (34mm sau 44mm)
        </Paragraf>
      
       </div>
        </SubContainer>

      
    </Container>
    )
    
}