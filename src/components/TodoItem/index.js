import { TiPencil } from "react-icons/ti";
import { FiX } from "react-icons/fi";
import "./index.css"
const TodoItem = (props) =>{
    const {todoItem, isUpdating, editTodo, saveChanges, updatedInputText, updateTodoText, removeTodoItem} = props
    const {id,todoText, counter} = todoItem
    const onEditTodoItem = () =>{
          editTodo(id, todoText)
    }
    const onSaveChanges = () =>{
        saveChanges(id)
    }

    const onUpdateTodoText = (event) =>{
        updateTodoText(event.target.value)
    }

    const onRemoveTodoItem = () => {
         removeTodoItem(id)
    }

    return(
        <li className = "todo-list-item-container">
           { isUpdating ? <input type = "text" className = "update-input-box" value = {updatedInputText} onChange = {onUpdateTodoText} /> : <p className = "todo-text">{`${todoText} (Updated ${counter} Times)`}</p>}
           <div className = "buttons-container">
           { isUpdating ? <button type = "button" className = "save-button" onClick = {onSaveChanges}>save</button> : <button type = "button" className = "edit-button" onClick = {onEditTodoItem}> 
            <TiPencil size = "25"  color = "white"/>
            </button> }
            <button type = "button" className = "remove-button" onClick = {onRemoveTodoItem}>
            <FiX size = "25" color = "red"/>
            </button>
            </div>
        </li>
    )
}

export default TodoItem