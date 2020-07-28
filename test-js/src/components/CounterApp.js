import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core'
import './index.css';



const CounterApp = ( { value } )  => {

    //Hooks
    const [ counter, setCounter ] = useState (value);


    //Handlers App
    const handleAdd = (e) => {
        setCounter( counter +1);
    }

    const handleMinus = (e) => {
        setCounter( counter -1);
    }

    const handleReset = (e) => {
        setCounter( value );
    }

    return(
    <div className="container">
        <h1>Counter App</h1>
        <h2> { counter } </h2>
        <Button variant="contained" color="primary" onClick={ handleAdd } >Incrementar </Button>
        <br />
        <Button variant="contained" color="secondary" onClick={ handleReset } >Reset</Button>
        <br />
        <Button variant="contained" color="primary" onClick={ handleMinus } >Decrementar </Button>
    </div>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

export default CounterApp;