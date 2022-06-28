import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

const IncomeCard = ({incomeValue}) => {
    return (
        <div style={styles.incomeContainer}>
            <p style={styles.informationText}>Aqui está o valor que entrou até o momento</p>
            <p style={styles.incomeEmoji}>😃💰</p>
            <p style={styles.incomeText}> + R$ 18.000,00</p>
        </div>
    )
}

const OutcomeCard = () => {
    return (
        <div style={styles.outcomeContainer} >
            <p style={styles.informationText} >Aqui está o valor que saiu até o momento</p>
            <p style={styles.incomeEmoji} >🫣💰</p>
            <p style={styles.outcomeText}> - R$ 1.640,00</p>
        </div>
    )
}

const DifferenceInWallet = () => {
    return (
        <div style={styles.differenceInWalletContainer} >
            <p style={styles.informationText} >Aqui está o valor que sobrou</p>
            <p style={styles.incomeEmoji} >😎💰</p>
            <p style={styles.incomeText}>R$ 16.360,00</p>
        </div>
    )
}

const transactions = [
    {provider: 'iFood', value: "R$ 30,00", type: "outcome"},
    {provider: 'BIG Super Mercado', value: "R$ 120,00", type: "outcome"},
    {provider: 'Tapioca do JU', value: "R$ 40,00", type: "outcome"},
    {provider: 'Adega da Vila', value: "R$ 90,00", type: "outcome"},
    {provider: 'Graduação FIAP', value: "R$ 1.300,00", type: "outcome"},
    {provider: 'Udemy', value: "R$ 60,00", type: "outcome"},
    {provider: 'Empresa X', value: "R$ 3.000,00", type: "income"},
    {provider: 'Empresa Y', value: "R$ 4.000,00", type: "income"},
    {provider: 'Empresa Z', value: "R$ 5.000,00", type: "income"},
    {provider: 'Empresa W', value: "R$ 6.000,00", type: "income"},
]

const TransactionItem = ({provider, value, type}) => {
    const isIncome = type === 'income'
    return (
        <div style={styles.transactionItemContainer}>
            <p>{provider}</p>
            <div style={styles.itemValueContainer} >
                <p style={isIncome ? styles.incomeText : styles.outcomeText} >{isIncome ? '+' : '-'} {value}</p>
            </div>
        </div>
    )
}

const TransactionList = () => {

    const [allTransactions, setAllTransactions] = useState(transactions);

    useEffect(() => {
        console.log('transactions', transactions)
        setAllTransactions(transactions)
    }, [transactions])

    return (
        <div style={styles.transactionListContainer}>
            {allTransactions ? allTransactions.map(transaction => (
                <TransactionItem 
                    key={transaction} 
                    provider={transaction.provider} 
                    value={transaction.value} 
                    type={transaction.type} 
                />
            )) : null}
        </div>
    )
}

const AddIncomeInput = () => {
    const [name, setName] = useState('')
    const [value, setValue] = useState('')

    const handleAddIncome = useCallback(() => {
        transactions.push({
            provider: name,
            value,
            type: 'income'
        })
    }, [name, value])

    return (
        <div style={styles.addIncomeInputContainer}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <input onChange={(e) => setValue(e.target.value)} style={{
                    marginBottom: 5
                }} placeholder='Valor' />
                <input onChange={(e) => setName(e.target.value)} placeholder='Nome' />
            </div>
            <Button handleSubmit={handleAddIncome} title="Adicionar entrada" />
        </div>
    )
}
const AddOutcomeInput = () => {
    const [name, setName] = useState('')
    const [value, setValue] = useState('')

    const handleAddOutcome = useCallback(() => {
        transactions.push({
            provider: name,
            value,
            type: 'outcome'
        })
    }, [name, value])

    return (
        <div style={styles.addOutcomeInputContainer}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <input onChange={(e) => setValue(e.target.value)} style={{
                    marginBottom: 5
                }} placeholder='Valor' />
                <input onChange={(e) => setName(e.target.value)} placeholder='Nome' />
            </div>
            <Button handleSubmit={handleAddOutcome} title="Adicionar saída" />
        </div>
    )
}

const Dashboard = () => {

    const navigate = useNavigate()

    const handleSignout = () => {
        navigate('/')
    }

    return (
        <div style={styles.container}>
            <div onClick={handleSignout} style={styles.signOutText}>
                <p>Sair</p>
            </div>
            <div style={styles.transactionsOverview}>
                <IncomeCard />
                <OutcomeCard />
            </div>
            <DifferenceInWallet/>
            <div style={styles.addValuesContainer} >
                <AddIncomeInput />
                <AddOutcomeInput />
            </div>
            <TransactionList />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: '40px 0px',
        backgroundColor: '#2951e7',
    },

    incomeContainer: {
        width: 300,
        height: 140,
        borderRadius: 5,
        borderColor: '#459767',
        backgroundColor: '#fcfcfc',
        padding: 20,
        margin: 10
    },

    outcomeContainer: {
        width: 300,
        height: 140,
        borderRadius: 5,
        borderColor: '#e92d29',
        backgroundColor: '#fcfcfc',
        padding: 20,
        margin: 10
    },

    informationText: {
        color: '#9f9fa1',
        width: '100%'
    },

    incomeEmoji: {
        marginTop: -10
    },

    outcomeEmoji: {
        marginTop: -10
    },

    outcomeText: {
        color: '#e92d29',
        fontSize: 18
    },

    incomeText: {
        color: '#459767',
        fontSize: 18
    },

    transactionListContainer: {
        minWidth: '46.5%',
        borderRadius: 5,
        backgroundColor: '#fcfcfc',
        padding: 20,
    },


    transactionsOverview: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    transactionItemContainer: {
        display: 'flex',
        alignItems: 'center'
    },

    itemValueContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 20
    },

    differenceInWalletContainer: {
        minWidth: '46.5%',
        borderRadius: 5,
        backgroundColor: '#fcfcfc',
        padding: 20,
        marginBottom: 10
    },

    signOutText: {
        color: "#fcfcfc",
        position: 'absolute',
        top: 20,
        right: 40,
        fontSize: 22,
        cursor: 'pointer'
    },

    addIncomeInputContainer: {
        width: 300,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#fcfcfc',
        padding: 20,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
    },

    addOutcomeInputContainer: {
        width: 300,
        height: 30,
        borderRadius: 5,
        borderColor: '#e92d29',
        backgroundColor: '#fcfcfc',
        padding: 20,
        margin: 10,
        display: 'flex',
        alignItems: 'center'
    },

    addValuesContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 30
    }
}

export { Dashboard }