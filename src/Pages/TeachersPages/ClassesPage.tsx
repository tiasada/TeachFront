import React, { useState } from 'react'
import { ClassesButton } from '../../ui/Buttons'
import Search from '../../components/Bars'
import { DivClasslist } from '../../components/Overflows'
import { Navbarmenu } from '../../components/NavBars'
import { useHistory } from 'react-router-dom'
import { Classroom, get } from '/api'
import { useEffectOnce } from 'react-use'
import { colors } from '/theme/colors'
import Typography from '/ui/Typography'

export const ClassesPage = () => {
  const history = useHistory()
  const [classrooms, setClassrooms] = useState<Classroom[]>([])
  const [search, setSearch] = useState('')

  function handleClick (id: string) {
    history.push(`/class/${id}`)
  }
  const getClassrooms = () => {
    get<Classroom[]>(
      'classrooms',
      search ? { name: search } : undefined
    )
      .then(resp => setClassrooms(resp.data))
  }
  useEffectOnce(getClassrooms)
  return (
    <main>
      <div >
        <Navbarmenu color={ colors.primary }/>
      </div>
      <div style={{ paddingTop: '70px', justifyContent: 'center', display: 'flex' }}>
        <Typography variant='h1'>Suas Turmas</Typography>
      </div>
      <div>
        <Search
          color='secondary'
          placeholder='...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onClick={getClassrooms}
        />
        <DivClasslist center>
          {classrooms.map(item => (
            <ClassesButton onClick={() => handleClick(item.id)} color='secondary' key={item.id}>{item.name}</ClassesButton>
          ))}
        </DivClasslist>
      </div>
    </main>
  )
}
export default ClassesPage
