import React, { FormEvent, useState } from 'react'
import { post } from '/api'
import { CreateButton, Title } from '/components/Form/CreateUserForm/styles'
import { Label as InputLabel } from '/ui/Label'

type Props = {
    title: string
    buttonText: string
}

const TeacherRegister = ({ title, buttonText }: Props) => {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(
            'users',
            { name, cpf, telefone }
        )
    }

    return (
        // Prevenindo que a página sofra um reload
        <form onSubmit={onSubmit}>
            <Title>{title}</Title>
            <div style= {{marginTop: '50px'}}>
                <InputLabel>Nome</InputLabel>
                <input
                    name='name'
                    placeholder='Nome completo'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <InputLabel>CPF</InputLabel>
                <input
                    type='cpf'
                    placeholder= '000.000.000-00'
                    name='cpf'
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                />
            </div>
            <div>
                <InputLabel>Telefone</InputLabel>
                <input
                    type='telefone'
                    name='telefone'
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                />
            </div>
            <div style= {{marginTop: '80px'}}>
            <CreateButton type="submit">{buttonText}</CreateButton>
            </div>
        </form>
    )
}

export default TeacherRegister