import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/');
    }

    return (
        <div style={styles.container}>
            <p style={styles.companyName} >Fintech</p>
            <Input placeholder="Nome" />
            <Input placeholder="Sobrenome" />
            <Input placeholder="Email" />
            <Input placeholder="Telefone" />
            <Input placeholder="Senha" type="password" />
            <Button handleSubmit={handleRegister} title="Cadastrar" />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#2951e7',
    },

    companyName: {
        fontSize: 30,
        fontFamily: 'Poppins',
        color: '#fcfcfc',
        fontWeight: 'bold',
    }
}

export { Register }