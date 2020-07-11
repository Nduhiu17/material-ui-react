import React, { Component, Fragment } from 'react'
import  Header  from './components/layout/Header'
import Footer  from './components/layout/Footer'
import Exercises from './components/Exercises'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { muscles,exercises } from './store'

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});


class App extends Component{

  state = {
    exercises,
    exercise:{}
  }

  getExercises(){
    const initExercises = muscles.reduce((exercises,category) => ({
      ...exercises,
      [category]:[]
    }),{})


    console.log(muscles,initExercises);


    return Object.entries(this.state.exercises.reduce((exercises,exercise) => {
        const { muscles } = exercise

        exercises[muscles] =[...exercises[muscles],exercise]
        return exercises
    },initExercises)

    )
  }

  handleCategorySelect = category => {

    this.setState({
        category
    })
  }

  handleExercisesSelect = id => 
    this.setState(({ exercises }) =>({
          exercise:exercises.find(ex => ex.id === id),
          editMode:false
    }))
  

  handleExerciseCreate = exercise => 
    this.setState(({ exercises }) => ({
      exercises:[
        ...exercises,
        exercise
      ]
    }))
  

  handleExeciseDelete = id => 
      this.setState(({ exercises, exercise }) => ({
        exercises:exercises.filter(ex => ex.id !== id),
        exercise: exercise.id === id ? {} : exercise,
        editMode:false
      }))
  

  handleExeciseSelectEdit = id => 
    this.setState(({ exercises }) =>({
      exercise:exercises.find(ex => ex.id === id),
      editMode:true
    }))

    handleExerciseEdit = exercise => 
      this.setState(({ exercises }) => ({
        exercises:[
          ...exercises.filter(ex => ex.id !== exercise.id),
          exercise
        ],
        exercise
      }))


    render(){
      const exercises = this.getExercises(),
      { category, exercise, editMode } = this.state
      
      return (
        <Fragment>
            <MuiThemeProvider  theme={theme}>
              <Header 
                muscles={muscles}
                onExerciseCreate={this.handleExerciseCreate}
              />
              <Exercises 
                exercise={ exercise }
                exercises={ exercises }
                category={ category }
                onSelect={this.handleExercisesSelect}
                onDelete={this.handleExeciseDelete}
                onSelectEdit={this.handleExeciseSelectEdit}
                editMode={editMode}
                muscles={muscles}
                onEdit={this.handleExerciseEdit}
              />
              <Footer muscles={ muscles } 
              onSelect={this.handleCategorySelect}
              category={category}  
              />
            </MuiThemeProvider>
        </Fragment>
      );
    }

}

export default App;
