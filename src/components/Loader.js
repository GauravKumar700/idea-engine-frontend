import React from 'react'
import loader from '../images/loader.gif'

const Loader = () => {
    return (
        <div style={{ position:'fixed', top: '0', left:'0',right:'0', zIndex:'20', height: '100vh', width: '100vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={loader} alt="Loading..." />
        </div>
    )
}

export default Loader