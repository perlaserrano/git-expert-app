import { useState } from "react";
import React  from "react";

export const AddCategory = () =>{
const [inputValue, setInputValue] = useState('hola mundo')
const handleInputChange = (e) =>{
    setInputValue(e.target.value)
}

const handleSubmit = (e) =>{
     e.preventDefault();
    console.log('Submit hecho')

}

    return (
        <>
        <form onSubmit={handleSubmit}>

         <input 
         
         type="text"
         value={inputValue}
         onChange={handleInputChange}
         />
            
        </form>
         
        </>
    )
}