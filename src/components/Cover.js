import React from 'react'
import './Cover.css'
import coverImg from './assets/coverimagee.jpg'

function Cover() {
    return (
        <div className="cover-container">
            <img
                src={coverImg}
                alt="Yaa Pvt Ltd"
                className="cover-image"
            />
        </div>
    )
}

export default Cover