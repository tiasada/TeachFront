import React from 'react'
import { ClassTitle } from '../../Components/Texts/Titles/styles'
import { ClassesButton } from '../../Ui/Buttons'
import Search from '../../Components/Bars'
import { DivClasslist } from '../../Components/DivBox/Overflows'
import { Navbarmenu } from '../../Components/DivBox/NavBars'
import { useHistory } from 'react-router-dom'

const classrooms = [
  {
    id:"1",
    name: "class1"
  },
  {
    id:"2",
    name: "class2"
  },
  {
    id:"3",
    name: "class3"
  },
  {
    id:"4",
    name: "class4"
  },
  {
    id:"5",
    name: "class5"
  }
]


export const MainPage = () => {
  let history = useHistory()

  function handleClick(id:string) {
    history.push(`/class/${id}`)
  }
  return(
  <main>
    <header role="banner">
      <div ><Navbarmenu/></div>
        {/* <Divbox>
            <MainTitle>Teach</MainTitle>
            <Dropdnw>
             <IconMenu></IconMenu>
             <DropCont><MnBtn>Menu</MnBtn></DropCont>
            </Dropdnw>
        </Divbox> */}
        <div>
          <ClassTitle>Escola E.E.F.Rubrivira</ClassTitle>
        </div>
        <div>
          <ClassTitle>Suas Turmas</ClassTitle>
          <Search/>
          <DivClasslist>
            {/* {classrooms.reduce(
              (accumulator, currentValue) => (
                <>
                {accumulator}
                <>
                </>
              ),
              <></>
            )} */}
            {classrooms.map(item => (
              <ClassesButton onClick={() => handleClick(item.id)} key={item.id}>{item.name}</ClassesButton>
            ) )}
          </DivClasslist>
        </div>
    </header>
  </main>
)
}
export default MainPage