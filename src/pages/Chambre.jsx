import React from 'react';
import Sleep from '../components/Sleep';
import SleepInverse from '../components/SleepInverse';
import "../assets/scss/app.scss";
import ChambreLit1 from "../assets/images/ChambreLit1.jpg";
import ChambreVue1 from "../assets/images/ChambreVue1.jpg";
import ChambreCouchage1 from "../assets/images/ChambreCouchage1.jpg";
import ChambreEntrer1 from "../assets/images/ChambreEntrer1.jpg";
import ChambreDouche1 from "../assets/images/ChambreDouche1.jpg";

const Chambre = () => {
  const sleepTitle = "Chambre Blache";
  const sleepDescription = "Voici la description de la chambre";
  const sleepImages = [
    ChambreLit1,
    ChambreVue1,
    ChambreCouchage1,
    ChambreEntrer1,
    ChambreDouche1
  ];
  const sleepTitle2 = "Chambre Rouge";
  const sleepDescription2 = "Voici la description de la chambre";
  const sleepImages2 = [
    ChambreLit1,
    ChambreVue1,
    ChambreCouchage1,
    ChambreEntrer1,
    ChambreDouche1
  ];

  return (
    <div>    
      <div>
        <h1 className='Title'>Chambres </h1>
      </div>
      <Sleep title={sleepTitle} description={sleepDescription} images={sleepImages} />
      <div className="space">..</div>
      <SleepInverse title={sleepTitle2} description={sleepDescription2} images={sleepImages2} />
    </div>
  );
};

export default Chambre;