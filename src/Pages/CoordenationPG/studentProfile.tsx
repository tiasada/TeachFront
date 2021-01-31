import React from 'react'
import { DivProfile } from '../../components/DivBox'
import { Navbarmenu } from '../../components/NavBars'
export const StudentInfo = () => (
  <main>
    <header role="banner">
        <div style={{ padding: '0px 1px 50px 0px' }}>
          <Navbarmenu/>
        </div>
        <div style = {{ textAlign: 'center', marginTop: 30 }}>
          <h1>Enzo Gabriel JR</h1>
          <h2 style = {{ marginTop: 70 }}>Dados do aluno(a)</h2>
        </div>
        <div style = {{ marginTop: 110, marginLeft: '10%' }}>
        <img style={{ width: 230, marginLeft: 200, marginRight: 30 }} src= "https://justplayproducts.com/wp-content/uploads/2020/06/95865_95772-PJ-Masks-Diecast-Vehicles-Owlette-Lifestyle-scaled.jpg"></img>
          <DivProfile color='primary'>
              <h3>Matrícula: 4544356651</h3>
              <h3>Turma: Infem</h3>
              <h3>Sala: 204</h3>
              <h3>Ano: 2°ano</h3>
              <h3>Pais/Responsáveis: Carlos dos Santos Lima</h3>
              <h3>Contatos: (47)9889-75463 - (47)9987-7765</h3>
          </DivProfile>
        </div>

    </header>
  </main>
)

export default StudentInfo
