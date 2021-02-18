import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CheckPresence from '../../ui/Checkbox'
import { post, Presence, Student } from '/api'
import Button from '/ui/Buttons/button'

type RowProps = {
  setPresence: (presence: Presence) => void
  presence: Presence
  student: Student
}
type TableProps = {
  students: Student[]
}

// CallTable
const Row = ({ student, setPresence, presence }: RowProps) => {
  return (
    <tr >
      <td>{student.registration}</td>
      <td>{student.name}</td>
      <td style={{ display: 'flex', margin: '4px' }}>
        <CheckPresence value={presence.ispresent} onChange={() => {
          setPresence({ ...presence, ispresent: !presence.ispresent, reason: presence.ispresent ? presence.reason : '' })
        }} />
        <label style={{ margin: '4px' }}>Presença</label>
      </td>
      <td>
        <input
          disabled={presence.ispresent}
          style={{ marginTop: '8px' }}
          name='reason'
          placeholder='Motivo da falta'
          value={presence?.reason}
          onChange={e => setPresence({ ...presence, reason: e.target.value })}
        />
      </td>
    </tr>
  )
}

export const ClassCallTable = ({ students }: TableProps) => {
  const [presences, setPresences] = useState<Presence[]>([])

  const { id } = useParams()

  const setPresence = (presence: Presence) => {
    const updatedPresences = presences.map(
      current => current.studentid === presence.studentid ? presence : current)
    setPresences(updatedPresences)
  }
  const sendPresences = () => {
    post<Presence[]>(
      `classrooms/${id}/presences`,
      presences
    ).then(() => alert('CONFIRMADO!'))
      .catch(() => alert('Algo deu errado :('))
  }

  useEffect(() => {
    setPresences(students.map(item => ({
      studentid: item.id,
      ispresent: true,
      reason: ''
    })))
  }, [students])

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >Matricula</th>
            <th className="w-100">Nome</th>
            <th className="w-25">Chamada</th>
            <th className="w-25">Falta Justificada</th>
          </tr>
        </thead>
        <tbody>
          {students.map(item => (
            <Row
              key={item.id}
              student={item}
              setPresence={setPresence}
              presence={presences.find(x => x.studentid === item.id) || {
                studentid: item.id,
                ispresent: true,
                reason: ''
              }}
            />
          ))}
        </tbody>
      </Table>
      <Button color='primary' onClick={sendPresences} >Confirmar</Button>
    </>
  )
}

export default ClassCallTable
