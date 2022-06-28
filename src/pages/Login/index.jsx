import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard');
    }

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <div style={styles.container}>
            <p style={styles.companyName} >Fintech</p>
            <Input placeholder="Email/Telefone" />
            <Input placeholder="Senha" />
            <Button handleSubmit={handleLogin} title="Entrar" />
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

export { Login }