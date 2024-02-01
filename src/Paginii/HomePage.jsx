

import { ContainerContainere, ContainerDetalii, ContainerDetalii2, ContainerDetaliiBackground, ContainerDetaliiBackground2, ContainerDetaliiContent, ContainerDetaliiContent2, ContainerPrincipal, H1, H2, H3, TitluPagina,  } from "./HomePage.style"

export default function HomePage() {
    
    return(
        <div>
        <ContainerPrincipal>
            <TitluPagina >FERESTRE SI USI TERMOPANE</TitluPagina>
          
            <ContainerContainere>
            <ContainerDetalii>
               <ContainerDetaliiBackground>
               <ContainerDetaliiContent>
                <H2>Oferim servicii:</H2>
                <H3>Masuratori</H3>
                <H3>Montaj</H3>
                <H3>Mentenanta</H3>
                <H3>Modificari</H3>
                <H3>Reglaje</H3>
                <H3>Reparatii</H3>
                </ContainerDetaliiContent>
                </ContainerDetaliiBackground>
                 </ContainerDetalii>
            

             

                 <ContainerDetalii2>
               <ContainerDetaliiBackground2>
               <ContainerDetaliiContent2>
               <H2>Ce ne recomanda?:</H2>
                <H3>Pretul</H3>
                <H3>Calitatea</H3>
                <H3>Seriozitatea</H3>
                <H3>Diversitatea</H3>
               
                </ContainerDetaliiContent2>
                </ContainerDetaliiBackground2>
                 </ContainerDetalii2>
            </ContainerContainere>
               
           
        
        </ContainerPrincipal>
        </div>
    )
    
}