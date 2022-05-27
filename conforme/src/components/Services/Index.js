import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import { ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP
 } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1> Notre Services </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>check Liste</ServicesH2>
            <ServicesP>Notre plateforme offre une liste de contole 
            contenant les 144 exigences de la norme ISO 27001</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Statistiques</ServicesH2>
            <ServicesP>Notre plateforme présente les statistiques d'évaluation
            de conformité qui aide à analyser et améliorer</ServicesP>
            </ServicesCard>
        </ServicesWrapper>    
       
    </ServicesContainer>
  )
}

export default Services