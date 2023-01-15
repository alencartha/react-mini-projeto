import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        
            <Spinner animation="border" role="status" style={{width: '100px',height: '100px'}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
       
    )
}

export default Loading