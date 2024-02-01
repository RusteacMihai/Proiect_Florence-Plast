import { Buttonas, Container, ContainerSecundar, Img, Img2, Paragraf, SubContainer, SubTitle, Title } from "./Rehau.style";
import Rehau1 from "./ImaginiProfile/Rehau 1.jpg"
import Rehau2 from "./ImaginiProfile/Rehau 2.jpg"
import Rehau3 from "./ImaginiProfile/Rehau_Geneo_RAU_FIPRO_000.jpg"
import Rehau4 from "./ImaginiProfile/Usa Glisanta Synego.jpg"
import Rehau5 from "./ImaginiProfile/Usa exterior.jpg"
import LogoRehau from "./ImaginiProfile/Logo Rehau 2.png"
import ScrollToTop, { scrollToTopAndShowButton } from "../Componente/Altceva/Scrool";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Rehau() {
    return(
        <Container>
            <ContainerSecundar>
            <Title>Profil Rehau</Title>
            <Buttonas id="scrollButton" onClick={ScrollToTop} >
      <FontAwesomeIcon icon={faArrowUp} style={{width:"50px", height:"40px", color:"rgb(5, 197, 245)",}} />
          </Buttonas>
            <Img2 src= {LogoRehau}/>
            </ContainerSecundar>
            <SubContainer>
            <Img src={Rehau1}/>
            <div>
                <Title>SYNEGO</Title>
                <SubTitle>Descriere Produs</SubTitle> 
    
            <Paragraf>Ferestrele SYNEGO de la REHAU poartă eticheta de produs EcoPuls. Acest lucru înseamnă că profilul ferestrei conține peste 40% de materiale reciclate. REHAU reprezintă această amprentă ecologică pozitivă. Bucurați-vă de confortul ferestrelor dvs. și de sentimentul plăcut de a fi ales un produs fabricat în mod sustenabil.</Paragraf>
            <Paragraf>Dublu sustenabil

Și proprietățile excelente de izolare termică asigură că faceți un lucru bun pentru mediu pe termen lung cu ferestrele SYNEGO. Instalate în spațiile dvs. de locuit, acestea realizează o izolare termică cu până la 45% mai mare în comparație cu fereastra standard actuală*. Acest lucru economisește energie, oferă o căldură confortabilă și, de asemenea, crește valoarea proprietății dumneavoastră.

Astfel, s-a confirmat că ferestrele SYNEGO, în varianta cu garnitură intermediară (MD), sunt adecvate pentru case pasive, în conformitate cu directivele ift.</Paragraf>
           <Paragraf>Ferestrele SYNEGO izolează fonic.

Simțiți-vă confortabil - indiferent cât de zgomotos este mediul înconjurător.

Zgomotul ne îmbolnăvește, chiar dacă nu suntem conștienți de acesta. Studiile dovedesc faptul că, expunerea regulată la zgomotul din trafic creşte semnificativ riscul unor boli cardiovasculare. Lăsaţi zgomotul generator de stres afară. Adâncimea specială de construcție a SYNEGO înseamnă că se poate utiliza sticlă funcțională specială pentru a asigura o izolare fonică sporită - pentru liniște și pace și o casă relaxată.

Izolare fonică premium

Ferestrele SYNEGO îmbunătățesc calitatea vieții, deoarece, echipate cu sistemul opțional de etanșare mediană, reduc sunetul cu până la 47 de decibeli. Aceasta este aproximativ echivalentă cu sunetul unei mașini de tuns iarba la câțiva metri distanță. Astfel, ferestrele SYNEGO realizează o reducere a zgomotului de până la 26 de ori.</Paragraf>
            </div>
            </SubContainer>

            <SubContainer>
            <Img src={Rehau2}/>
            <div>
                <Title>GENEO</Title>
                <SubTitle>Descriere Produs</SubTitle> 
    
            <Paragraf>GENEO INOVENT beneficiază de un sistem de ventilație integrat care asigură aer proaspăt chiar și atunci când ferestrele sunt închise.

Fără umezeală.
Fără mucegai.
Zgomotul rămâne în afară.
Hoții rămân în afară.

Pentru sănătatea dumneavoastră

GENEO INOVENT asigură o atmosferă plăcută, cu aer curat, mai multă liniște și siguranță.</Paragraf>
            <Paragraf>Soluția practică: GENEO INOVENT

Aerisirea constantă, obositoare, care necesită mult timp devine de domeniul trecutului: GENEO INOVENT transportă automat umiditatea către exterior și permite pătrunderea aerului curat, filtrat la temperatura corectă – non-stop, chiar și atunci când ferestrele sunt închise. Acest lucru se traduce și prin pierderi mai mici de energie.

GENEO INOVENT a fost distins recent de către un juriu de specialitate cu premiul „Plus X”-în categoria inovație, calitate ridicată, funcționalitate și ecologie. Premiul Plus X este cel mai mare premiu pentru inovație la nivel mondial în domeniul tehnologiei, sportului și stilului de viață. Premiul este acordat companiilor pentru progresul în ceea ce privește calitatea și inovarea aferente produselor companiei.</Paragraf>
           <Paragraf>Bucurați-vă de liniște și de relaxare <br />

GENEO INOVENT permite pătrunderea aerului curat în interior, însă păstrează zgomotul în exterior

Fie că este vorba de concentrare, relaxare sau un somn odihnitor – aerul proaspăt este important. Mai importantă este liniștea. Aceasta este adeseori perturbată, mai ales de zgomotul din trafic. Din fericire, există GENEO INOVENT: Fereastra care asigură aer proaspăt, chiar și atunci când este închisă. Astfel veți putea lăsa zgomotul afară și vă puteți bucura de liniște.</Paragraf>
            </div>
            </SubContainer>

            <SubContainer>
            <Img src={Rehau3}/>
            <div>
                <Title>GENEO RAU-FIPRO X </Title>
                <SubTitle>Descriere Produs</SubTitle> 
    
            <Paragraf> Conceput pentru avioane, perfect pentru ferestrele dvs. <br />
            Cea mai rentabilă soluție de design

GENEO RAU-FIPRO X permite dimensiuni de ferestre care până acum erau rezervate pentru aluminiu. Cu ajutorul profilelor de placare din aluminiu, ferestrele pot impresiona cu un aspect de aluminiu de calitate înaltă. În plus față de profilele de placare, sunt disponibile laminări în decoruri metalice elegante, precum și lacuri pentru suprafețe structurate și lucioase.

            </Paragraf>
            <Paragraf>Izolare termică excelentă

90% din toate cadrele realizate din GENEO RAU-FIPRO X nu necesită nicio armătură metalică, ceea ce înseamnă că, în primul rând, nu pot apărea punți termice nefavorabile. Și în combinație cu geamurile izolante în trei straturi, acestea obțin valori Uw exemplare de până la 0,60 W/m2K și astfel permit economii de energie de până la 76%*. Suprafețele mari de sticlă asigură captarea de energie solară.</Paragraf>
           <Paragraf>Izolare fonică premium

Zgomotul ne îmbolnăvește, chiar dacă nu suntem conștienți de acesta. Ferestrele realizate din RAU-FIPRO X îmbunătățesc calitatea vieții, deoarece reduc zgomotul cu până la 48 de decibeli. Acest lucru corespunde unei reduceri a zgomotului de până la 26 ori.</Paragraf>
            </div>
            </SubContainer>

            
            <SubContainer>
            <Img src={Rehau4}/>
            <div>
                <Title>USI CULISANTE SYNEGO </Title>
                <SubTitle>Descriere Produs</SubTitle> 
    
            <Paragraf> Pur și simplu fantastic <br />

Cu o lățime maximă a elementului de 10 m și o înălțime de până la 2,70 m, aveți la dispoziție o gamă largă de opțiuni de proiectare pentru casa dumneavoastră. Cu ușile culisante cu ridicare SYNEGO, puteți realiza lățimi de trecere de până la 5 m - făcând ca interiorul și exteriorul să fie unul singur.
            </Paragraf>
            <Paragraf>Proiectează-ți casa deschisă, modernă și cu multă lumină! Cu ușile culisante cu ridicare SYNEGO, toate acestea sunt posibile. Aduceți natura în casa dumneavoastră și bucurați-vă de sentimentul de libertate prin conexiunea unică la exterior.</Paragraf>
           <Paragraf>Deschidere și închidere foarte ușoară

În combinație cu diverse caracteristici de echipare, vă puteți configura modelul personal preferat. Soluțiile speciale de feronerie permit deschiderea și închiderea fără efort, în timp ce motoarele electrice opționale oferă un confort suplimentar.2 În combinație cu un amortizor special de închidere, ușa culisantă cu ridicare alunecă ușor în poziția închisă și se închide în mod fiabil - pentru o siguranță maximă. În plus, soluțiile speciale pentru praguri asigură un acces aproape fără bariere.</Paragraf>
<Paragraf>Ușile culisante cu ridicare SYNEGO nu numai că arată strălucitor, dar vă oferă funcționalitate deplină chiar și după ani de utilizare. O carcasă specială pentru rolele de glisare garantează montarea precisă și, prin urmare, o funcționalitate sigură a componentelor feroneriei. Sistemul special de etanșare vă protejează împotriva curenților de aer și a umidității și, în același timp, asigură o presiune de închidere optimizată. Astfel, ușile culisante se deschid și se închid semnificativ mai ușor.</Paragraf>
           </div>
            </SubContainer>

            <SubContainer>
            <Img src={Rehau5}/>
            <div>
                <Title>USI INTRARE SYNEGO </Title>
                <SubTitle>Descriere Produs</SubTitle> 
    
            <Paragraf> Aceasta întâmpină vizitatorii și îi protejează împotriva oaspeților nepoftiți - ușa noastră de intrare are numeroase funcții importante. Este bine atunci când se potrivește perfect cu casa și cu gustul locuitorilor ei - ca SYNEGO.

Aduceți starea de bine maximă în casa dumneavoastră cu ușile SYNEGO și lăsați pur și simplu hoții, zgomotul și frigul afară.
            </Paragraf>
            <Paragraf>Protecție sporită împotriva efracției

Pentru a vă asigura siguranța, fiecare ușă SYNEGO conține un sistem sofisticat pentru stabilitate și rezistență maximă.

80% din toate spargerile prin efracție  au loc prin intermediul ușilor și ferestrelor rabatate ușor accesibile.</Paragraf>
           <Paragraf>Pentru un climat confortabil, căldura rămâne în casă - și reduceți în mod durabil costurile cu energia. <br id="" />

- Funcționalitate perfectă <br />
- Deschidere și închidere precisă <br />
- Până la 50 % mai multă izolație termică</Paragraf>
<Paragraf>Etanșare perfectă, armătură din oțel, izolație și umpluturi selectabile în mod liber: ușile SYNEGO se potrivesc perfect din punct de vedere tehnic și se închid cu precizie - timp de zeci de ani.</Paragraf>
           </div>
            </SubContainer>
        </Container>
    )
    
}