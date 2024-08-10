import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {id, title} = eachTodo
  const [todoTitle, setTitle] = useState(title)
  const [isEdit, setEdit] = useState(true)
  const [isChecked, setChecked] = useState(false)

  const onChangeTodoTitle = event => setTitle(event.target.value)

  const onChangeEdit = () => setEdit(prev => !prev)

  const onChangeCheckBox = () => setChecked(pr => !pr)

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <input
        type="checkbox"
        value={isChecked}
        onChange={onChangeCheckBox}
        className="checkbox-inp"
      />
      <div className="todo-item">
        {isEdit ? (
          <p className={isChecked ? `checked` : ``}>{todoTitle}</p>
        ) : (
          <input type="text" value={todoTitle} onChange={onChangeTodoTitle} />
        )}
      </div>
      <div className="buttons">
        <button type="button" onClick={onChangeEdit}>
          {isEdit ? 'Edit' : 'Save'}
        </button>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
