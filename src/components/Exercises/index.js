import React,{Fragment} from 'react'
import { 
    Grid, 
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    ListItemSecondaryAction 
} from '@material-ui/core'
import {Delete, Edit} from 'material-ui-icons';
import Form from './Form'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    Paper: {
        padding:20,
        marginTop:5,
        marginBottom:10,
        height:500,
        overflow:'auto'
    }
})

export default withStyles(styles)( 
 ({ 
    classes,
    muscles,
    exercises, 
    category, 
    onSelect,
    exercise,
    exercise:{
         id, 
         title="Welcome!!!", 
         description="Please select an exercise from the list on the left"
        },
    onDelete ,
    onSelectEdit,
    onEdit,
    editMode
    }) => 
<Grid container>
    <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
            {exercises.map(([group,exercises]) =>
            !category || category === group 
            ? <Fragment key={group}>
                <Typography
                varian="h1"
                style={{textTransform:"capitalize"}}>
                    {group}
                </Typography>
                <List component="ul">
                {exercises.map(({ id,title }) => 
                    <ListItem
                    button
                    key={id}
                    onClick={() => onSelect(id)}
                    >
                    <ListItemText 
                    primary={ title } 
                    />
                   
                 <ListItemSecondaryAction>
                    <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                    </IconButton>

                    <IconButton onClick={() => onDelete(id)}>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                    </ListItem>
                    
                    )
                }
                 
                </List>
            </Fragment>
            :null 

            )}
        </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
        <Typography 
            variant="h3"
            gutterBottom
            >
        { title } 
        </Typography>
        {
            editMode 
            ?
            <Form
                key={id}
                muscles={muscles}
                onSubmit={onEdit}
                exercise={exercise}
            />
            :
            <Typography variant="5">
                { description }
            </Typography>
           
        }
        </Paper>
    </Grid>
</Grid>
)