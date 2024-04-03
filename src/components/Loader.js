import React from 'react'
import loader from '../images/loader.gif'

const Loader = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={loader} alt="Loading..." />
        </div>
    )
}

export default Loader