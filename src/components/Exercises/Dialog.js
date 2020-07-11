import React, { Fragment, Component } from 'react'
import {
     Button, 
     Dialog, 
     DialogContent,
     DialogContentText,
     DialogTitle,
} from '@material-ui/core'
import { Add } from 'material-ui-icons';
import Form from './Form';




export default class extends Component{
    state={
        open:false
    }

    handleToggle = () =>
        this.setState({
            open:!this.state.open
        })

        handleFormSubmit = exercise => {
            this.handleToggle()

            this.props.onCreate(exercise)
        }
    

    render(){
        const { open} = this.state,
              { muscles } = this.props

     return <Fragment>
     <Button variant="fab" mini onClick={this.handleToggle}>
         <Add color="white"/>
     </Button>
       <Dialog 
       open={ open } 
       onClose={ this.handleToggle }
       fullWidth
       maxWidth="xs"
       >
         <DialogTitle>Create a new exercise</DialogTitle>
             <DialogContent>
                 <DialogContentText>
                 Please fill in the form below   
                 </DialogContentText>
                 <Form 
                     muscles={ muscles }
                     onSubmit={ this.handleFormSubmit }
                 />
             </DialogContent>
         </Dialog>
     </Fragment>
    }
}