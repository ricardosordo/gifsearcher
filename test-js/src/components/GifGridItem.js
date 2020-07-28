import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'





function GifGridItem( { id, title, url } ) {
    

    return (
        <div>
        <Paper elevation={2}>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </Paper>
        </div>
    )
}

export default GifGridItem
