import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

export default function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=> {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue){
            setCategories(cats => [inputValue, ...cats,]);
            setInputValue('');
        }

    }

    return (
        <div>
        <h1>{ inputValue }</h1>
            <form onSubmit={ handleSubmit }>
            <TextField 
            id="standard-full-width"
            style={{ paddingButton: 2 }}
            label="Ingresa nombre del GIF" 
            variant="outlined"
            value={ inputValue }
            onChange={ handleInputChange }
            />
            </form>
        </div>
    )
}
