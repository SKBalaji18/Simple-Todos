import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {id, title} = eachTodo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
