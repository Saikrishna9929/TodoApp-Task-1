import {v4 as uuid} from "uuid"

import TodoItem from "../TodoItem"
import {Component} from "react"
import "./index.css"

class TodoApp extends Component {
    state = {
        todoInputText : "",
        todoList : [],
        updateTodoId : "",
        updatedInputText: ""
    }

    onChangeTodo = (event) =>{
        this.setState({todoInputText: event.target.value})
    }

    onAddingTodo = () =>{
        const {todoInputText, } = this.state
        const newTodo = {
            id: uuid(),
            todoText : todoInputText,
            counter : 0
        }
         this.setState(prevState => ({todoList : [...prevState.todoList, newTodo], todoInputText : ""}))
    }

    removeTodoItem = (id) => {
        const {todoList} = this.state
        const filteredList = todoList.filter(eachItem => eachItem.id !== id)
        this.setState({todoList: filteredList})
    }

    editTodo = (id, text) => {
                
                this.setState({updateTodoId: id, updatedInputText: text})
    }

    updateTodoText = (value) =>{
        this.setState({updatedInputText : value})
    }

    saveChanges = (id) =>{
          const {updatedInputText, todoList} = this.state
          const modifiedList = todoList.map(eachItem => {
            if (eachItem.id === id){
                return {...eachItem, todoText: updatedInputText, counter: eachItem.counter+1}
            }
            return eachItem
          })
          this.setState({todoList: modifiedList,  updateTodoId : "" })
    }

    render(){
        const {todoList, todoInputText, updateTodoId, updatedInputText} = this.state
       return(
        <div className = "todo-bg-container">
            <div className =  "todo-container">
             <h1 className = "todo-heading">Day Goals!</h1>
             <div className = "todo-input-container">
                <input className = "todo-input" onChange = {this.onChangeTodo} value = {todoInputText} type = "text" placeholder = "Add a todo"/>
                <button className = "todo-add-button" onClick = {this.onAddingTodo} type = "button">Add Todo</button>
             </div>
             <ul className = "todo-list-container">
                { todoList.map(eachItem =>  <TodoItem key = {eachItem.id} isUpdating = {eachItem.id === updateTodoId} todoItem = {eachItem} updatedInputText = {updatedInputText} updateTodoText = {this.updateTodoText} editTodo = {this.editTodo} removeTodoItem = {this.removeTodoItem} saveChanges ={this.saveChanges}/>)}      
             </ul>
             </div>
        </div>
       ) }
    }

export default TodoApp