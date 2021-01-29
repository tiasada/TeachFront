import React, { FormEvent, useState } from 'react'
import { post } from '/api'
import { CreateButton, Title } from '/components/Form/CreateUserForm/styles'
import { Label as InputLabel } from '../../ui/Label'

type Props = {
    title: string
    buttonText: string
    emailProps: {
        type: string
        placeholder: string
    }
}

const TeacherRegister = ({ title, buttonText }: Props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profile, setProfile] = useState<number>()

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(
            'users',
            { name, email, password, profile }
        )
    }

    return (
        // Prevenindo que a página sofra um reload
        <form onSubmit={onSubmit}>
            <Title>{title}</Title>
            <div>
                <InputLabel>Nome</InputLabel>
                <input
                    name='name'
                    placeholder='João da Silva'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <InputLabel>Email</InputLabel>
                <input
                    type='email'
                    name='email'
                    placeholder='jhon.test@gmail.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <InputLabel>Senha</InputLabel>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <InputLabel>Perfil</InputLabel>
                <select
                    value={profile}
                    onChange={e => setProfile(parseInt(e.target.value))}
                >
                    <option></option>
                    <option value={0}>CBF</option>
                    <option value={1}>Torcedor</option>
                </select>
            </div>
            <CreateButton type="submit">{buttonText}</CreateButton>
        </form>
    )
}

export default TeacherRegister
