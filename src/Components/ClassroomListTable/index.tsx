import React, { useCallback, useEffect, useState } from 'react'
import { useEffectOnce } from 'react-use'
import Search from '../Bars'
import { get, Classroom, Student, Teacher, Parent } from '/api'
import Tabs from '../../ui/Tabs'
import ClassroomsTable from '../tables/ClassroomsTable'
import StudentsTable from '../tables/StudentsTable'
import TeachersTable from '../tables/TeachersTable'
import Sider from '../../ui/Sider'
import CreateClassroomForm from '../CreateClassroomForm'
import CreateStudentForm from '../CreateStudentForm'
import CreateTeacherForm from '../CreateTeacherForm'
import Add from '../Add'
import { ButtonSecondary } from '../../ui/Buttons/button'
import ParentsTable from '../tables/ParentsTable'
import CreateParentForm from '../CreateParentForm'

// Main Classroom component
const ClassroomListTable = () => {
  const [search, setSearch] = useState('')
  const [classrooms, setClassrooms] = useState<Classroom[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [parents, setParents] = useState<Parent[]>([])

  const [showSider, setShowSider] = useState(false)

  const getTables = () => {
    get<Student[]>(
      'students',
      search ? { name: search } : undefined
    )
      .then(resp => setStudents(resp.data))
    get<Classroom[]>(
      'classrooms',
      search ? { name: search } : undefined
    )
      .then(resp => setClassrooms(resp.data))
    get<Teacher[]>(
      'teachers',
      search ? { name: search } : undefined
    )
      .then(resp => setTeachers(resp.data))
    get<Parent[]>(
      'parents',
      search ? { name: search } : undefined
    )
      .then(resp => setParents(resp.data))
  }

  useEffectOnce(getTables)

  useEffect(getTables, [search])

  return (
    <>
      <Search
        color='secondary'
        placeholder='...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onClick={getTables}
      />
      <Tabs tabs={['Turmas', 'Alunos', 'Professores', 'Responsaveis']} title='Escola'>
        <div style={{ display: 'flex' }}>
            <ClassroomsTable classrooms={classrooms} onClickEmptyRow={() => setShowSider(true)} />
          <Sider open={showSider} color="secondary" onClose={() => setShowSider(false)}>
            <CreateClassroomForm title='Criar Turma' buttonText='Criar' updateFunction={getTables} />
          </Sider>
        </div>
        <div style={{ display: 'flex' }}>
          <StudentsTable students={students} onClickEmptyRow={() => setShowSider(true)} show={true}/>
          <Sider open={showSider} color="secondary" onClose={() => setShowSider(false)}>
            <CreateStudentForm title='Cadastro do Estudante' buttonText='Cadastrar' updateFunction={getTables} />
          </Sider>
        </div>
        <div style={{ display: 'flex' }}>
          <TeachersTable teachers={teachers} onClickEmptyRow={() => setShowSider(true)} show={true}/>
          <Sider open={showSider} color="secondary" onClose={() => setShowSider(false)}>
            <CreateTeacherForm title='Cadastro do Professor' buttonText='Cadastrar' updateFunction={getTables} />
          </Sider>
        </div>
        <div style={{ display: 'flex' }}>
          <ParentsTable parents={parents} onClickEmptyRow={() => setShowSider(true)} />
          <Sider open={showSider} color="secondary" onClose={() => setShowSider(false)}>
            <CreateParentForm title='Cadastro do Responsável' buttonText='Cadastrar' updateFunction={getTables} />
          </Sider>
        </div>
      </Tabs>
    </>
  )
}

export default ClassroomListTable
