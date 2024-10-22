// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItemDetails, deleteTitle} = props
  const {id, title} = eachItemDetails
  const onDelete = () => {
    deleteTitle(id)
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
