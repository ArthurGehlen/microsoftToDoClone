import '../../styles/todo_list/todolist.sass'

const user_todos = []

function ToDoList({ title, text, empty_image }) {
    return (
        <div className="user_todos_area">
            {
                user_todos.length < 1 &&
                <div className="empty_list_container">
                    <img src={empty_image} alt="" />
                    <h2>{title}</h2>
                    <p>
                        {text}
                    </p>
                </div>
            }
        </div>
    )
}

export default ToDoList