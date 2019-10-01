import React from 'react'
import styled from 'styled-components/macro'
import snack001 from './img/eat-performance-Cashew-Kirsche.png'
import snack002 from './img/eat-performance-Coco-Cranberry.png'
import snack003 from './img/eat-performance-Dattelnuss.png'
import snack004 from './img/eat-performance-Feige-Banane.png'
import snack005 from './img/eat-performance-Nussknacker.png'
import snack006 from './img/eat-performance-Sonnige-Aprikose.png'
import snack007 from './img/nucao-Cashew-Vanille.png'
import snack008 from './img/nucao-Cocos-Zimt.png'
import snack009 from './img/nucao-Haselnuss.png'
import snack010 from './img/nucao-Macadamia-Chai.png'
import snack011 from './img/nucao-Wilde-Beere.png'
import snack012 from './img/primal-pantry-Acai-Berry-Superseed.png'
import snack013 from './img/primal-pantry-Almond-Cashew.png'
import snack014 from './img/primal-pantry-Apple-Pecan.png'
import snack015 from './img/primal-pantry-Brazil-Nut-Cherry.png'
import snack016 from './img/primal-pantry-Coconut-Macadamia.png'
import snack017 from './img/primal-pantry-Hazelnut-Cocoa.png'
import snack018 from './img/primal-pantry-Lemon-Poppy-Seed.png'
import snack019 from './img/raw-bite-Cashew.png'
import snack020 from './img/raw-bite-Coconut.png'
import snack021 from './img/raw-bite-Peanut.png'
import snack022 from './img/raw-bite-Protein.png'
import snack023 from './img/raw-bite-Raw-Cacao.png'
import snack024 from './img/raw-bite-Vanilla-Berries.png'
import snack025 from './img/raw-energy-Apricot-Cashew.png'
import snack026 from './img/raw-energy-Banana-Coconut.png'
import snack027 from './img/raw-energy-Maracuja-Coconut.png'
import snack028 from './img/raw-energy-Peanuts-Dates.png'

export default function SnackList() {
  return (
    <PicturesStyled>
      <img src={snack001} alt="Eat Performance – Cashew Kirsche" />
      <img src={snack002} alt="Eat Performance – Coco Cranberry" />
      <img src={snack003} alt="Eat Performance – Dattelnuss" />
      <img src={snack004} alt="Eat Performance – Feige Banane" />
      <img src={snack005} alt="Eat Performance – Nussknacker" />
      <img src={snack006} alt="Eat Performance – Sonnige Aprikose" />
      <img src={snack007} alt="nucao – Cashew Vanille" />
      <img src={snack008} alt="nucao – Cocos Zimt" />
      <img src={snack009} alt="nucao – Haselnuss" />
      <img src={snack010} alt="nucao – Macadamia Chai" />
      <img src={snack011} alt="nucao – Wilde Beere" />
      <img src={snack012} alt="The Primal Pantry – Acai Berry Superseed" />
      <img src={snack013} alt="The Primal Pantry – Almond Cashew" />
      <img src={snack014} alt="The Primal Pantry – Apple Pecan" />
      <img src={snack015} alt="The Primal Pantry – Brazil Nut Cherry" />
      <img src={snack016} alt="The Primal Pantry – Coconut Macadamia" />
      <img src={snack017} alt="The Primal Pantry – Hazelnut Cocoa" />
      <img src={snack018} alt="The Primal Pantry – Lemon Poppy Seed" />
      <img src={snack019} alt="Raw Bite – Cashew" />
      <img src={snack020} alt="Raw Bite – Coconut" />
      <img src={snack021} alt="Raw Bite – Peanut" />
      <img src={snack022} alt="Raw Bite – Protein" />
      <img src={snack023} alt="Raw Bite – Raw Cacao" />
      <img src={snack024} alt="Raw Bite – Vanilla Berries" />
      <img src={snack025} alt="Raw Energy – Apricot Cashew" />
      <img src={snack026} alt="Raw Energy – Banana Coconut" />
      <img src={snack027} alt="Raw Energy – Maracuja Coconut" />
      <img src={snack028} alt="Raw Energy – Peanuts Dates" />
    </PicturesStyled>
  )
}

const PicturesStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  gap: 80px;
  margin: 160px 0;
`
