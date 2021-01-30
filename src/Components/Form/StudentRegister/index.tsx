import React, { FormEvent, useState } from 'react'
import { post } from '/api'
import { CreateButton, Title } from '/components/Form/CreateUserForm/styles'
import { Label as InputLabel } from '/ui/Label'

type Props = {
    title: string
    buttonText: string
    title2: string
}

const StudentRegister = ({ title, buttonText, title2 }: Props) => {
    const [name, setName] = useState('')
    const [matricula, setMatricula] = useState('')
    const [telefone, setTelefone] = useState('')
    const [ano, setAno] = useState('')
    const [nasc, setNasc] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [telefoneResp, setTelefoneResp] = useState('')
    const [cpfResp, setCpfResp] = useState('')

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(
            'users',
            { name, matricula, telefone, ano, nasc, responsavel, telefoneResp, cpfResp }
        )
    }

    return (
        // Prevenindo que a página sofra um reload
        <form onSubmit={onSubmit} style={{ display: 'flex' }}>
            <div style={{ display: 'block' }}>
                <Title>{title}</Title>
                <div style={{ marginTop: '50px' }}>
                    <InputLabel>Nome</InputLabel>
                    <input
                        name='name'
                        placeholder='Nome completo'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel>Matrícula</InputLabel>
                    <input
                        type='numbers'
                        name='matricula'
                        value={matricula}
                        onChange={e => setMatricula(e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel>Telefone</InputLabel>
                    <input
                        type='number'
                        name='telefone'
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel>Ano</InputLabel>
                    <input
                        type='number'
                        name='ano'
                        value={ano}
                        onChange={e => setAno(e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel>Data de Nascimento</InputLabel>
                    <input
                        type='date'
                        name='nasc'
                        value={ano}
                        onChange={e => setNasc(e.target.value)}
                    />
                </div>
            </div>
            <div style={{ width: 200, marginLeft: 300, marginRight: 30 }}>
            <Title>{title2}</Title>
                <div>
                    <InputLabel>Nome do Responsável</InputLabel>
                    <input
                        type='name'
                        name='responsavel'
                        value={responsavel}
                        onChange={e => setResponsavel(e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel>Telefone Responsável</InputLabel>
                    <input
                        type='number'
                        name='telefoneResp'
                        value={telefoneResp}
                        onChange={e => setTelefoneResp(e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel>CPF do responsável</InputLabel>
                    <input
                        type='number'
                        name='cpfResp'
                        value={cpfResp}
                        onChange={e => setCpfResp(e.target.value)}
                    />
                </div>
                <div style={{ marginTop: '80px' }}>
                    <CreateButton type="submit">{buttonText}</CreateButton>
                </div>
            </div>
        </form>
    )
}

export default StudentRegister