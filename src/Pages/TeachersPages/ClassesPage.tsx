import React, { useState } from 'react'
import { ClassTitle } from '../../components/Texts/Titles/styles'
import { ClassesButton } from '../../ui/Buttons'
import Search from '../../components/Bars'
import { DivClasslist } from '../../components/DivBox/Overflows'
import { Navbarmenu } from '../../components/NavBars'
import { useHistory } from 'react-router-dom'
import { Classroom, getclassrooms } from '/api'
import { useEffectOnce } from 'react-use'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const ClassesPage = () => {
  const history = useHistory()
  const [classrooms, setClassrooms] = useState<Classroom[]>([])
  const [search, setSearch] = useState('')

  function handleClick(id: string) {
    history.push(`/class/${id}`)
  }
  const getClassrooms = () => {
    getclassrooms<Classroom[]>(
      'classrooms',
      search ? { name: search } : undefined
    )
      .then(resp => setClassrooms(resp.data))
  }
  useEffectOnce(getClassrooms)
  return (
    <main>
      <div >
        <Navbarmenu />
      </div>
      <div>
        <ClassTitle>Escola E.E.F.Rubrivira</ClassTitle>
      </div>
      <div>
        <ClassTitle>Suas Turmas</ClassTitle>
        <Search
          color='secondary'
          placeholder='...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <FontAwesomeIcon
          onClick={getTeams}
          icon={faSearch}
          color={colors.primary}
        />
        <DivClasslist center>
          {classrooms.map(item => (
            <ClassesButton onClick={() => handleClick(item.id)} key={item.id}>{item.name}</ClassesButton>
          ))}
        </DivClasslist>
      </div>
    </main>
  )
}
export default ClassesPage
