


import LogoTelefon from "./Icons/Logo Tel 2.jpeg";
import LogoEmail from "./Icons/Logo Email.png";
import LogoAdresa from "./Icons/Logo locatie.jpeg";
import LogoProgram2 from "./Icons/LogoProgram2.jpg";



import {
  Contacte,
  ContainerAdresa,
  ContainerEmail,
  ContainerOrar,
  ContainerPrincipales,
  ContainerProgram,
  ContainerTelefon,
  ContainerText,
  Detalii,
  Img,
  Titlu,
} from "./Contact.style";

import Program from "./ModalProgram";




export default function Contact() {



 
  return (
    <>


      <ContainerPrincipales>
        <Contacte> Contact </Contacte>
        <ContainerAdresa>
          <Titlu>Adresa</Titlu>
          <a href="https://www.google.ro/maps/place/Strada+Romanilor+19,+Lugoj+305500/@45.6902711,21.8894779,17z/data=!3m1!4b1!4m6!3m5!1s0x474fbe8906403597:0x5e4aeef79fd09a43!8m2!3d45.6902674!4d21.8920528!16s%2Fg%2F11dfh99zhz?entry=ttu">
            <Img
              src={LogoAdresa}
              
            />
 
          </a>

          <Detalii>Strada: Romanilor nr 19 <br />Oras : Lugoj</Detalii>
        </ContainerAdresa>
        <ContainerTelefon>
   
          <Titlu>Telefon </Titlu>
          <a href="tel:+40 765 029 994">
            <Img
              src={LogoTelefon}
              style={{
                width: "50px",
              }}
            />
          </a>
          <Detalii>
            Alin Barbos : <br />
            tel:+40 765 029 994</Detalii>
        </ContainerTelefon>
   
        <ContainerEmail>
          <Titlu>Email</Titlu>
          <a href="mailto:florenceplast@gmail.com">
            <Img
              src={LogoEmail}
              style={{
                width: "50px",
              }}
            />
          </a>
      
          <Detalii> florenceplast@gmail.com</Detalii>
        </ContainerEmail>

        <ContainerProgram >
        <Titlu>Program</Titlu>
         
            <Img
              src={LogoProgram2}
              style={{
                width: "50px",
              }}
            /> <br />
          <ContainerOrar>
          <ContainerText>
          Luni 09:00 - 17:00 <br />
          Marţi 09:00 - 17:00 <br />
          Miercuri 09:00 - 17:00 <br />
          Joi 09:00 - 17:00 <br />
          Vineri 09:00 - 17:00 <br />
          Sâmbătă ÎNCHIS <br />
          Duminică ÎNCHIS
          </ContainerText>
          </ContainerOrar>
        </ContainerProgram>
     
      </ContainerPrincipales>

    </>
  );
}

   