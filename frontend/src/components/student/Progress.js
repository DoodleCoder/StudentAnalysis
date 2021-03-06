import React, { Component } from 'react';
import { Grid, Card, Avatar, CardContent, Typography, LinearProgress, Divider } from 'material-ui'
import BookIcon from 'material-ui-icons/Book'
import { withStyles } from 'material-ui/styles'

const niceColor = '#898C92'
const styles = theme => ({
    icon: { fontSize: '2.2rem', color: niceColor },
    text: { fontSize: '0.9rem', color: niceColor },
    bigNumber: { fontSize: '2.2rem', color: theme.palette.primary.main },
})

class Progress extends Component{
    render(){
        const { classes, theme, data } = this.props
        if(!data) return null

        return (
        <Card style={this.props.style}>
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <BookIcon className={classes.icon} />
                        <Typography className={classes.text} >
                            {data['subject'].toUpperCase()}
                        </Typography>
                    </Grid>

                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                        <Typography className={classes.bigNumber}>
                            {Math.floor(parseFloat(data['A']))}
                        </Typography>
                    </Grid>
                </Grid>
                <LinearProgress variant="determinate" 
                    value={data['A']} 
                    style={{ marginTop: 10 }} />
            </CardContent>
        </Card>)
    }
}

export default withStyles(styles, {withTheme: true})(Progress)