import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCategory from './AddCategory';
import GifGrid  from './GifGrid';
import './index.css';




export default function GifExpertApp() {

    const [categories, setCategories] = useState([''])


    return (
        <div>
        <h1>Gif Expert</h1>
        <Grid container spacing={2}>

        <Grid item xs={8}>
            <AddCategory setCategories={ setCategories } />
        </Grid>

        <Grid item xs={4}>
            <Button variant="contained" color="primary">Agregar Categoria</Button>
        </Grid>

        </Grid>
        <hr />
        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                    key={ category }
                    category={ category } />
                ))
            }
        </ol>
        </div>
    )
}
