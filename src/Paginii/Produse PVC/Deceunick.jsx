import { Buttonas, Container, ContainerSecundar, Img, Img2, Paragraf, SubContainer, SubTitle, Title } from "./Deceunick.style";
import LogoDeceunick from "./ImaginiProfile/LogoDeceunick.png"
import Deceunick1 from "./ImaginiProfile/Deceuninck.jpeg"
import Deceunick2 from "./ImaginiProfile/Deceunick2.jpeg"
import Deceunick3 from "./ImaginiProfile/deceunick3.jpeg"
import Deceunick4 from "./ImaginiProfile/Usa Glisanta Synego.jpg"
import ScrollToTop, { scrollToTopAndShowButton } from "../Componente/Altceva/Scrool";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Deceunick() {
    return(
        <Container>
        <ContainerSecundar>
        <Title>Profil Deceuninck</Title>
        <Buttonas id="scrollButton" onClick={ScrollToTop} >
      <FontAwesomeIcon icon={faArrowUp} style={{width:"50px", height:"40px", color:"rgb(5, 197, 245)",}} />
          </Buttonas>
        <Img2 src= {LogoDeceunick}/>
        </ContainerSecundar>
        <SubContainer>
        <Img src={Deceunick1} style={{
            width:"800px"
        }}/>
        <div>
            <Title>Zendow</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf> Izolare superioară <br />
Proiectat cu 5 camere de izolare și o lățime a profilului de 70 mm, sistemul Zendow oferă performanțe termice excelente. Conform testelor efectuate de către institutul IFT Rosenheim coeficientul de transmitere al profilului (Uf) este de 1,3-1,4 W/m²K și este certificat pentru valoarea Uf=1,3 W/m²K.

        </Paragraf>

        <Paragraf>
        Performanță acustică <br />
În lumea modernă izolarea fonică este foarte importantă pentru spațiile de locuit. Sistemul Zendow are incorporate 2 camere cu izolație fonică din fabricare ce oferă o izolare fonică mai bună decât cele introduse manual. În plus, caracteristicile existențe ale PVC-ului precum și structură multicamerala a sistemului Zendow transformă mediul zgomotos într-un spațiu perfect de locuit, chiar și în locuri cu trafic intens care necesită un grad ridicat de izolare fonică.
        </Paragraf>

        <Paragraf>
        Rezistență <br />
Datorită ofertei largi de produse, sistemul Zendow se potrivește oricărei cerinţe. Armăturile și profilele de rezistență oferă cele mai bune soluții chiar și în zonele cu vânt puternic.
        </Paragraf>
       
        </div>
        </SubContainer>

        <SubContainer>
        <Img src={Deceunick2} />
        <div>
            <Title>Everest Max</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf>Sistemul Everest Max este proiectat cu 4 camere de izolare și o lățime a profilului de 60mm cu 2 garnituri de etanșare. Utilizarea garniturilor TPE, permite sistemului o sudura efectivă la colț, asigurând astfel un nivel ridicat de izolare.</Paragraf>
        <Paragraf>Versatilitate <br />
Sistemul oferă profile principale și profile auxiliare de conexiune de colț la 90 grade și pentru unghiuri variabile, picurători, prag de aluminiu, diferite profile de închidere și profile de rezistență. Profilele pentru uși cu deschidere spre interior sau exterior sunt în așa fel optimizate încât să permită creșterea suprafeței vitrate ceea ce oferă o transparentă mai mare. În vederea găsirii de soluții pentru orice detaliu, sistemul Everest Max oferă diferite profile auxiliare cum ar fi profile de acoperire, de imagine (L54) etc.

 </Paragraf>
       <Paragraf> Fabricat din PVC alb de înaltă calitate, datorită profilului perfect proiectat, asigură proprietăți termice bune.

Camerele mari permit aplicarea de armături pentru a îmbunătăți stabilitatea profilului.

Recomandat tuturor clienților care apreciază designul bun și eleganța.</Paragraf>
       
       </div>
        </SubContainer>

        <SubContainer>
        <Img src={Deceunick3 }
        />
        <div>
            <Title>Legend</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf>Sistemul Legend este proiectat cu 6 camere de izolare având o lățime a profilului de 80 mm. Având în vedere criteriul de înaltă performanță au fost proiectate astfel încât să asigure proprietăți de izolare termică, fonică și de rezistență și etanșare ale ferestrei. Profilele sunt produse în conformitate cu normele standardului TS5358 – EN12608.</Paragraf>
        <Paragraf>Performanță ridicată pentru izolare termică <br />
Pentru a vă oferi un nivel cât mai ridicat de izolare termică, sistemul Legend a fost proiectat în așa fel încât să cuprindă cât mai multe elemente de construcție importante. Acest sistem cu 6 camere de izolare, cu o lățime a profilului de 80 mm, cu 3 garnituri (una pe mijloc), oferă un coeficient de conductivitate a căldurii (Uf) foarte scăzut având valoarea de 1,17 W/m²K. Acest sistem de lățime 80 mm oferă posibilitatea aplicării geamului tripan de 44 mm care oferă valori scăzute Uf=0,6-0,7 W/m²K. Datorită coeficientului de conductivitate al profilului cât și al pachetului de sticlă , rezultă o valoare superioară Uw = 0,95 W/m²K.</Paragraf>
       <Paragraf>Rezistență <br />
Armăturile folosite la profilele sistemului Legend oferă valori de rezistență sporite. Conform calculelor de rezistență în zonele afectate de vânt puternic acest sistem oferă posibilitatea de a construi ferestre cu o suprafața mai mare față de cele clasice.</Paragraf>
       <Paragraf>Vitrarea <br />
Se pot folosi atât la uși cât și la ferestre pachete de sticlă de grosimi : 24;30;36;44 și 52 mm. Sistemul Legend de la Deceuninck oferă o paletă bogată de culori pentru toate gusturile.

Valorile Uf variază în funcție de mărimea suprafeței vitrate precum și de caracteristicile geamului.</Paragraf>
        </div>
        </SubContainer>

        

        
        <SubContainer>
        <Img src={Deceunick4} />
        <div>
            <Title>Glisante Simple</Title>
            <SubTitle>Descriere Produs</SubTitle> 

        <Paragraf> 
        Izolare superioară <br />
Toate profilele și accesoriile aferente sistemului de glisante sunt special proiectate să ofere o izolare optimă având etanșare atât pe perii cât și pe garnituri TPE.        </Paragraf>
      <Paragraf>
      Versatilitate <br />
Acest sistem permite soluții variate de glisare, cale de rulare simplă, dublă, triplă, cu plasă împotrivă insectelor. Acest sistem oferă 2 opțiuni diferite pentru cercevele (3 camere) în funcție de tipul ferestrelor și a ușilor.
      </Paragraf>

      <Paragraf>
      Inovație și compatibilitate <br />
Sistemul de uși glisante poate fi combinat cu sistemele Zendow și Everest Max folosind profile auxiliare. Suplimentar pentru protecția la presiunea vântului se folosesc profile de capăt din aluminiu permițând astfel deschideri mai mari. Ușă cu dublă deschidere sau cu o parte fixă permite fixarea laterală sau în partea superioară. Toate profilele sistemului sunt conform standardului EN 12608.
      </Paragraf>
       </div>
        </SubContainer>

      
    </Container>
    )
    
}