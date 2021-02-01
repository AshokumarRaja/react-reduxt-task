import React from 'react'
import './Button.css'
const Button = (props) => {
    const { submitting, pristine, loading } = props;
    return (
        <>
            { loading ? <div className="loader"><div className="loading"></div></div> :
                <button type="submit" disabled={submitting || pristine} >Ship To This Address</button>
            }
        </>
    )
}

export default Button
