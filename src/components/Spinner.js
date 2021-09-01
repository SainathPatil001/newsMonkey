import React from 'react'
import spinner from '../loader.gif'
const Spinner=()=> {
 
        return (
            <div className="d-flex justify-content-center align-items-center my-3 ">
                 <img src={spinner} alt="loading"   />
            </div>
        )
   
}
export default Spinner;