import React from 'react';

const Button = ({title, handleSubmit}) => {
    return (
        <div onClick={() => handleSubmit()} style={styles.container} >
            <p style={styles.buttonTitle}>{title}</p>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fcfcfc',
        width: 250,
        height: 50,
        borderRadius: 5,
        margin: '10px 0px',
        cursor: 'pointer'
    },

    buttonTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2951e7',
        fontFamily: 'Poppins',
    }
}

export { Button }