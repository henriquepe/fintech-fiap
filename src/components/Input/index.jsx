import React from 'react';


const Input = ({placeholder, handleChange, type }) => {

    return (
        <div style={styles.container}>
            <input type={type} placeholder={placeholder} style={styles.input} onChange={handleChange} />
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: '#fcfcfc',
        width: 250,
        height: 50,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0px'
    },
    input: {
        border: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        width: '100%',
        paddingLeft: 10
    }
}

export { Input }