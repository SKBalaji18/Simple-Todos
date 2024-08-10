import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    todo: '',
  }

  onChangeInput = event => this.setState({todo: event.target.value})

  deleteTodo = id => {
    const {todoList} = this.state
    this.setState({
      todoList: todoList.filter(eachTodo => eachTodo.id !== id),
    })
  }

  addTodo = () => {
    const {todo} = this.state

    const splitTodo = todo.split(' ')

    if (!Number.isNaN(parseInt(splitTodo[splitTodo.length - 1]))) {
      const res = []
      for (let i = 0; i < parseInt(splitTodo[splitTodo.length - 1]); i++) {
        const r = {
          id: uuidv4(),
          title: splitTodo.slice(0, splitTodo.length - 1).join(' '),
        }
        res.push(r)
      }
      this.setState(prev => ({
        todo: '',
        todoList: [...prev.todoList, ...res],
      }))
    } else {
      const id = uuidv4()
      this.setState(prev => ({
        todo: '',
        todoList: [...prev.todoList, {id, title: todo}],
      }))
    }
  }

  render() {
    const {todoList, todo} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Type Something"
              onChange={this.onChangeInput}
              value={todo}
            />
            <button type="button" onClick={this.addTodo}>
              Add
            </button>
          </div>
          <ul>
            {todoList.map(eachItem => (
              <TodoItem
                eachTodo={eachItem}
                deleteTodo={this.deleteTodo}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
