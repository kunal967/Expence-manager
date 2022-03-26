import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import useTransaction from '../../useTransaction'

import useStyles from './style'


const Charts = ({title}) => {
    const classes = useStyles()
    const { total, charType } = useTransaction(title)
  return (
    
        <Card className={title === 'Income' ? classes.income : classes.expense} spacing={2}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>${total}</Typography>
                <Doughnut data={charType}/>
            </CardContent>
        </Card>
    
  )
}

export default Charts