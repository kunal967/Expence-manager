import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import useTransaction from '../../useTransaction'

import useStyles from './style'



const Charts = ({title}) => {
    const classes = useStyles()
    const { total } = useTransaction(title)
    // const chart = new Chart({
    //     type: 'doughnut',
    //     data: charType,
    // })
    return (
    
        <Card className={title === 'Income' ? classes.income : classes.expense} spacing={2}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>₹{total}</Typography>
                
            </CardContent>
        </Card>
    
  )
}

export default Charts