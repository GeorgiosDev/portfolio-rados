import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Load.css"

const Load = () => {
    const navigate = useNavigate(); 

    const goToAppPage = () => {
        navigate('/boxes'); 
    };
    
    return (
        <div className="full-screen">
            <div className="content">
                <h1>Όμιλος επιχειρήσεων Γεώργιου Ράδου</h1>
                <button onClick={goToAppPage}>Είσοδος</button>
            </div>
        </div>
    );
}  



export default Load
