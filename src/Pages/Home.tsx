import React from 'react';
import Form from '../Components/Form/CreateUserForm'
import { Layout } from '../Ui/Layouts'

const emailProps = {
    type: 'email',
    placeholder: 'joão.silva@gmail.com'
  }
  
export const Home = () => {
    return (
        <main>
            <Layout>Home page</Layout>
            <Form
                title='Criação de conta'
                buttonText='Cadastrar'
                emailProps={emailProps}
            />
        </main>
    )
}