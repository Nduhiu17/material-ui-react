import React, { Component } from 'react'
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    Button,
    MenuItem
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    FormControl: {
        width:500
    }
})

export default withStyles(styles)(class extends Component{

    state= this.getInitialState()

    getInitialState(){
        const { exercise } = this.props

        return exercise ? exercise : {
            title:'',
            description:'',
            muscles:''
        }
    }

    componentWillReceiveProps({ exercise }){
        this.setState({
            ...exercise
        })
    }
    
    handleChange = name => ({ target:{value}}) => 
        this.setState({
            [name]:value
        })
    

    handleSubmit = () => {
        //TODO validate
        this.props.onSubmit({
            id:this.state.title.toLocaleLowerCase().replace(/ /g,'-'),
            ...this.state            
        })

        this.setState(this.getInitialState())
    }

    render(){
        const { title,description,muscles} = this.state,
              { classes, exercise, muscles: categories} = this.props
        return(
            <form>
                <TextField 
                label="Title" 
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                className={classes.FormControl}
                />
                <br/>
                <FormControl className={classes.FormControl}>
                        <InputLabel htmlFor="muscles">Muscles</InputLabel>
                        <Select
                        value={muscles}
                        onChange={this.handleChange('muscles')}
                        >
                        {categories.map(category => 
                        <MenuItem value={category} key={ category }>{category}</MenuItem>
                        )}
                            
                    </Select>
                </FormControl>
                <br/>
                <TextField 
                label="Description" 
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
                className={classes.FormControl}
                multiline
                rows={4}
                />
            <br/>
            <Button 
                color="primary"
                onClick={this.handleSubmit}
                >
                { exercise ? "Edit":"Create"}
             </Button>
        </form>
        )
    }
})