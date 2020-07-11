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


const styles = {
    Paper: {padding:20,marginTop:10,marginBottom:10,height:500,overflow:'auto'}
}

export default ({ 
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
    <Grid item sm>
        <Paper style={styles.Paper}>
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
    <Grid item sm>
        <Paper style={styles.Paper}>
        {
            editMode 
            ?
            <Form
                muscles={muscles}
                onSubmit={onEdit}
                exercise={exercise}
            />
            :<Fragment>
                <Typography 
                    variant="h3"
                    >
                { title } 
                </Typography>
                <Typography variant="5" style={{marginTop:20}}>
                    { description }
                </Typography>
            </Fragment>
        }
        </Paper>
    </Grid>
</Grid>