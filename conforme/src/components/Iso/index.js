import React from 'react'
import { Card, CardTitle, CardText,
     Button
 } from 'reactstrap'
const Iso = () => {
  return (
    <div style={{width:'80%',  justifyContent:'center',
     alignItems:'center', paddingLeft:'20%', paddingTop:'10%'}}>
    <Card body
    inverse
      style={{
          backgroundColor: '#78AB96'
        
      }}>
    <CardTitle tag="h5">
    Politiques de sécurité de l’information
    </CardTitle>
    <CardText>
    Orientations de la direction en matière de sécurité de l’information <br/>
    Objectif: Apporter à la sécurité de l’information une orientation 
    et un soutien de la part de la direction, 
    conformément aux exigences métier et aux lois et règlements en vigueur.
    </CardText>
    <Button>
      Evaluer
    </Button>
  </Card>
  <Card>
    <CardTitle tag="h5">
    Organisation de la sécurité de l’information
    </CardTitle>
    <CardText>
    Organisation interne <br/>
Objectif: Établir un cadre de management pour lancer et vérifier la mise en place 
et le fonctionnement opérationnel de la sécurité de l’information au sein de l’organisation.<br/>
Appareils mobiles et télétravail <br/>
Objectif: Assurer la sécurité du télétravail et de l’utilisation d’appareils mobiles.
    </CardText>
    <Button>
      Evaluer
    </Button>
  </Card><Card body
  inverse
    style={{
        backgroundColor: '#78AB96'
      
    }}>
  
  <CardTitle tag="h5">
  Sécurité des ressources humaines
  </CardTitle>
  <CardText>
  Avant l’embauche <br/>
Objectif: S’assurer que les salariés et les sous-traitants comprennent leurs responsabilités et sont qualifiés 
pour les rôles qu’on envisage de leur donner. <br/>
Pendant la durée du contrat <br/>
Objectif: S’assurer que les salariés et les sous-traitants sont conscients de leurs responsabilités en matière de 
sécurité de l’information et qu’ils assument ces responsabilités.<br/>
Rupture, terme ou modification du contrat de travail <br/>
Objectif: Protéger les intérêts de l’organisation dans le cadre du processus de modification, de rupture ou de 
terme d’un contrat de travail.
  </CardText>
  <Button>
    Evaluer
  </Button>
</Card><Card body>
<CardTitle tag="h5">
Gestion des actifs
</CardTitle>
<CardText>
Responsabilités relatives aux actifs <br/>
Objectif: Identifier les actifs de l’organisation et définir les responsabilités pour une protection appropriée.<br/>
Classification de l’information<br/>
Objectif: S’assurer que l’information bénéficie d’un niveau de protection approprié conforme à son importance 
pour l’organisation<br/>
Manipulation des supports<br/>
Objectif: Empêcher la divulgation, la modification, le retrait ou la destruction non autorisé(e) de l’information 
de l’organisation stockée sur des supports<br/>
</CardText>
<Button>
  Evaluer
</Button>
</Card><Card body
inverse
  style={{
      backgroundColor: '#78AB96'
    
  }}>
<CardTitle tag="h5">
Contrôle d’accès
</CardTitle>
<CardText>
Exigences métier en matière de contrôle d’accès<br/>
Objectif: Limiter l’accès à l’information et aux moyens de traitement de l’information.<br/>
Gestion de l’accès utilisateur<br/>
Objectif: Maîtriser l’accès utilisateur par le biais d’autorisations et empêcher les accès non autorisés aux systèmes et services d’information.<br/>
Responsabilités des utilisateurs<br/>
Objectif: Rendre les utilisateurs responsables de la protection de leurs informations d’authentification.<br/>
Contrôle de l’accès au système et à l’information<br/>
Objectif: Empêcher les accès non autorisés aux systèmes et aux applications.<br/>
</CardText>
<Button>
  Evaluer
</Button>
</Card><Card body>
<CardTitle tag="h5">
Cryptographie
</CardTitle>
<CardText>
Mesures cryptographiques<br/>
Objectif: Garantir l’utilisation correcte et efficace de la cryptographie en vue de protéger la confidentialité, 
l’authenticité et/ou l’intégrité de l’information.<br/>

</CardText>
<Button>
  Evaluer
</Button>
</Card><Card body
inverse
  style={{
      backgroundColor: '#78AB96'
    
  }}>
<CardTitle tag="h5">
Sécurité physique et environnementale
</CardTitle>
<CardText>
Zones sécurisées<br/>
Objectif: Empêcher tout accès physique non autorisé, tout dommage ou intrusion portant sur l’information et 
les moyens de traitement de l’information de l’organisation<br/>
Matériels<br/>
Objectif: Empêcher la perte, l’endommagement, le vol ou la compromission des actifs et l’interruption des activités de l’organisation.<br/>
</CardText>
<Button>
  Evaluer
</Button>
</Card><Card body>
<CardTitle tag="h5">
Sécurité liée à l’exploitation
</CardTitle>
<CardText>
Procédures et responsabilités liées à l’exploitation<br/>
Objectif: Assurer l’exploitation correcte et sécurisée des moyens de traitement de l’information<br/>
Protection contre les logiciels malveillants<br/>
bjectif: S’assurer que l’information et les moyens de traitement de l’information sont protégés contre les logiciels malveillants.<br/>
Sauvegarde<br/>
Objectif: Se protéger de la perte de données<br/>
Journalisation et surveillance<br/>
Objectif: Enregistrer les événements et générer des preuves.<br/>
Maîtrise des logiciels en exploitation<br/>
Objectif: Garantir l’intégrité des systèmes en exploitation.<br/>
Gestion des vulnérabilités techniques<br/>
Objectif: Empêcher toute exploitation des vulnérabilités techniques.<br/>
Considérations sur l’audit des systèmes d’information<br/>
Objectif: Réduire au minimum l’impact des activités d’audit sur les systèmes en exploitation.<br/>
</CardText>
<Button>
  Evaluer
</Button>
</Card><Card body
inverse
  style={{
      backgroundColor: '#78AB96'
    
  }}>
<CardTitle tag="h5">
Sécurité des communications
</CardTitle>
<CardText>
Gestion de la sécurité des réseaux<br/>
Objectif: Garantir la protection de l’information sur les réseaux et des moyens de traitement de l’information 
sur lesquels elle s’appuie.<br/>
Transfert de l’information<br/>
Objectif: Maintenir la sécurité de l’information transférée au sein de l’organisme et vers une entité extérieure.<br/>
</CardText>
<Button>
  Evaluer
</Button>
</Card><Card body>
<CardTitle tag="h5">
Acquisition, développement et maintenance des systèmes d’information
</CardTitle>
<CardText>
Exigences de sécurité applicables aux systèmes d’information<br/>
Objectif: Veiller à ce que la sécurité de l’information fasse partie intégrante des systèmes d’information tout au 
long de leur cycle de vie. Cela inclut également des exigences pour les systèmes d’information fournissant des 
services sur les réseaux publics.<br/>
Sécurité des processus de développement et d’assistance technique<br/>
Objectif: S’assurer que les questions de sécurité de l’information sont étudiées et mises en œuvre dans le cadre 
du cycle de développement des systèmes d’information.<br/>
Données de test<br/>
Objectif: Garantir la protection des données utilisées pour les tests.<br/>
</CardText>
<Button>
  Evaluer
</Button>
</Card><Card body
inverse
  style={{
      backgroundColor: '#78AB96'
    
  }}>
<CardTitle tag="h5">
Relations avec les fournisseurs
</CardTitle>
<CardText>
Sécurité dans les relations avec les fournisseurs<br/>
Objectif: Garantir la protection des actifs de l’organisation accessible aux fournisseurs<br/>
Gestion de la prestation du service<br/>
Objectif: Maintenir le niveau convenu de sécurité de l’information et de service conforme aux accords conclus 
avec les fournisseurs.<br/>
</CardText>
<Button>
  Evaluer
</Button>
</Card><Card body>
<CardTitle tag="h5">
Aspects de la sécurité de l’information dans la gestion de la continuité de l’activité
</CardTitle>
<CardText>
Continuité de la sécurité de l’information<br/>
Objectif: La continuité de la sécurité de l’information doit faire partie intégrante de la gestion de la continuité 
de l’activité.<br/>
Redondances<br/>
Objectif: Garantir la disponibilité des moyens de traitement de l’information.<br/>
</CardText>
<Button>
  Evaluer
</Button>
</Card>
<Card body
    inverse
      style={{
          backgroundColor: '#78AB96'
        
      }}>
<CardTitle tag="h5">
Conformité
</CardTitle>
<CardText>
Conformité aux obligations légales et réglementaires<br/>
Objectif: Éviter toute violation des obligations légales, statutaires, réglementaires ou contractuelles relatives à 
la sécurité de l’information, éviter toute violation des exigences de sécurité.<br/>
</CardText>
<Button>
  Evaluer
</Button>
</Card>

  
</div>
  )
}

export default Iso