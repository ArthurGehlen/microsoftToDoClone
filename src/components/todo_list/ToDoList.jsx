import '../../styles/todo_list/todolist.sass'

const user_todos = []

function ToDoList({ title, text, empty_image, align, page_color }) {
    return (
        <div className="user_todos_area">
            {
                user_todos.length < 1 &&
                <div className="empty_list_container">
                    <img src={empty_image} alt="" />
                    <h2 className={`${page_color}`}>{title}</h2>
                    <p className={`${align} ${page_color}`}>
                        {text}
                    </p>
                </div>
            }
        </div>
    )
}

export default ToDoList