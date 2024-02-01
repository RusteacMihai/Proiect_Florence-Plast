import { Buttonas, Container, ContainerSecundar, Img, Img2, Paragraf, SubContainer, SubTitle, Title } from "./Gealan.style";
import Gealan1 from "./ImaginiProfile/Gealan1.jpg"
import Gealan2 from "./ImaginiProfile/Gealan 2.jpg"
import Gealan3 from "./ImaginiProfile/Usa exterior.jpg"
import Gealan4 from "./ImaginiProfile/GEALAN-Glisante.jpg"
import LogoGealan from "./ImaginiProfile/Logo_GEALAN.jpg"
import ScrollToTop, { scrollToTopAndShowButton } from "../Componente/Altceva/Scrool";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Gealan() {
    return(
        <Container>
        <ContainerSecundar>
        <Title>Profil Gealan</Title>
        <Buttonas id="scrollButton" onClick={ScrollToTop} >
      <FontAwesomeIcon icon={faArrowUp} style={{width:"50px", height:"40px", color:"rgb(5, 197, 245)",}} />
          </Buttonas>
        <Img2 src= {LogoGealan}/>
        </ContainerSecundar>
        <SubContainer>
        <Img src={Gealan1}/>
        <div>
            <Title>S 8000</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf>La dezvoltarea sistemului S 8000, o atenție specială a fost acordată stabilității profilelor. O dimensiune ridicată corespunzătoare a fost reprezentată de camera principală pentru susținerea rigidizărilor din oțel.</Paragraf>
        <Paragraf>Rezultatul este o rigiditate foarte mare la încovoiere a armăturilor standard, ceea ce constituie un alt avantaj în ceea ce privește stabilitatea profilului. Astfel, nu mai există obstacole în calea realizării elementelor de mari dimensiuni, iar firma producătoare de ferestre poate oferi clienților ferestre de mari dimensiuni.
 </Paragraf>
       <Paragraf> - Înălțimea maximă a elementelor pentru ferestre depinde de lățimea ferestrei și de suprafața totală rezultată aferentă. <br />
 - În cazul ferestrelor de mari dimensiuni, elementele ferestrei sunt supuse unor forțe puternice. <br />
 - Rigidizările stabile din oțel asigură o rezistență ridicată la încovoiere și permit construirea unor ferestre de mari dimensiuni.</Paragraf>
       <Paragraf>Adâncimea de construcție <br />
Adâncimea de construcție de 74 mm asigură o izolație termică și fonică foarte bună <br />

</Paragraf>
       </div>
        </SubContainer>

        <SubContainer>
        <Img src={Gealan2 }/>
        <div>
            <Title>S 9000</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf>Ferestre adecvate pentru locuințe pasive, disponibile șI în varianta colorată
GEALAN-FUTURA® este combinația de profile individuale din cadrul sistemului S 9000. Aceasta oferă posibilitatea de a construi, utilizând profile standard și rigidizări standard din oțel de 2 mm, și elemente de ferestre colorate pentru locuințe pasive, în conformitate cu directiva ift WA-15/2. Coeficientul Uf de 0,89 W/(m²K) verificat confirmă caracteristicile de bază excelente de izolare termică. Cu GEALAN-FUTURA®, în cazul utilizării tehnicii de lipire STV®, sunt posibile dimensiuni maxime ale cercevelei de până la 2,40 m</Paragraf>
        <Paragraf>Termoizolare optimizată
Dezvoltarea unui sistem cu proprietăți optime de termoizolare nu este accidentală, ci este rezultatul unor lucrări de dezvoltare orientate către rezultate. Succesul nostru confirmă acest lucru. Numeroase calcule au demonstrat coeficienți excelenți în ceea ce privește termoizolarea. De la început, obiectivul de dezvoltare a fost reprezentat de atingerea unui coeficient Uf - 0,92 W/m²K pentru termoizolare în combinația standard cu oțel și astfel, compatibilitatea cu locuințe pasive. Acest lucru este posibil datorită tuturor detaliilor inovatoare care alcătuiesc sistemul.</Paragraf>
      
        </div>
        </SubContainer>

        <SubContainer>
        <Img src={Gealan3}/>
        <div>
            <Title>Ușă de intrare S 8000 </Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf>Grație adâncimii de 82,5 mm și tehnologiei moderne cu 6 camere, noul model de ușă de intrare S 9000 dispune de o izolație termică excelentă. Stabilitatea noii uși de intrare este de asemenea impresionantă. Acest lucru este realizat printr-o cameră extinsă a rigidizării, elementele de rigidizare de oțel cu forma adaptată și rigidizările corespunzătoare la nivelul colțurilor contribuie de asemenea la îmbinări fixe la nivelul pragului de pardoseală prin intermediul prinderii elementului de PVC și aluminiu pe două planuri.

De asemenea, ușa de intrare S 9000 se remarcă prin soluția de sistem privind lăcrimarul, care pune în valoare elementele ușii nu doar din punct de vedere al aspectului. Aceasta asigură o protecție optimă împotriva ploilor torențiale și asigură o etanșeitate maximă datorită garniturilor de tip perie în straturi multiple din zona pragului.

        </Paragraf>
        <Paragraf>O gamă variată de accesorii
Pentru a îmbunătăți semnificativ rigiditatea la torsiune și la nivelul colțurilor cercevelei, sunt disponibile colțare de îmbinare cu fixare prin sudură. Gama variată de accesorii permite construirea tuturor tipurilor obișnuite de uși. În profilul ușii pot fi montate orice elemente de feronerie și sisteme de închidere disponibile pe piață, precum și panelurile disponibile în mod curent pe piață de până la 46 mm. Ușile din cadrul sistemului S 8000 IQ pot fi fabricate cu deschidere către interior sau exterior. Profilele pentru uși sunt disponibile în varianta standard în numeroase nuanțe GEALAN-acrylcolor® și folii decorative (cu aspect de lemn).</Paragraf>
       <Paragraf> - Izolare termică excelentă datorită tehnologiei moderne cu 5 camere <br />
 - Gamă de culori variată <br />
 - Protecție optimă împotriva ploilor torențiale <br />
 - Adecvat pentru grosimi ale geamului și ale panoului de până la 52 mm (cu STV® până la 54 mm) <br />
 - Stabilitate foarte bună datorită camerei extinse de rigidizare și rigidizărilor corespunzătoare la nivelul colțurilor</Paragraf>
        </div>
        </SubContainer>

        
        <SubContainer>
        <Img src={Gealan4}/>
        <div>
            <Title>Sistemul glisant inovator GEALAN-SMOOVIO </Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf> Elementele glisante oferă o creștere semnificativă a spațiului de locuit. Cu acestea, gama pivotantă a geamurilor și a ușilor este eliminată. Spațiul de locuit poate fi astfel utilizat și direct în fața ferestrei. Cu ferestrele glisante anterioare, avantajul confortului a fost adesea în detrimentul unei bune  etanșeități. Datorită unui mecanism de blocare sofisticat, acesta este acum un lucru din trecut, cu noul sistem de glisare GEALAN.
        </Paragraf>
        <Paragraf>Glisare relaxată – ȋnchidere etanşă
La ferestrele glisante de până acum, avantajul confortului a fost adesea plătit cu preţul unui nivel mai scăzut de etanșeitate. Datorită mecanismului de ȋnchidere elaborat, acest dezavantaj este acum de domeniului trecutului datorită noului sistem de glisare GEALAN.</Paragraf>
       <Paragraf>Creați spații libere
Elementele glisante măresc semnificativ spațiul de locuit. Cu ajutorul acestora, spaţiul de pivotare al ferestrelor și al ușilor este eliminat. Astfel, ȋn cameră poate fi folosit chiar şi spaţiul din fața ferestrei. La planificarea schiţelor, elementele glisante oferă un potenţial incredibil în crearea unor spaţii libere.</Paragraf>
<Paragraf>În secret, componentele inteligente își îndeplinesc funcţiile. Sistemele speciale de role și tehnologia de închidere excepțională asigură funcționarea fără probleme și etanșeitatea ridicată.</Paragraf>
       </div>
        </SubContainer>

      
    </Container>
    )
    
}