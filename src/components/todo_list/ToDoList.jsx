// Svg's / Images
import { IoAdd } from "react-icons/io5" // Add Todo input image
import { GoDot } from "react-icons/go" // Add Todo input image (FOCUS)

// Utils
import '../../styles/todo_list/todolist.sass'

// Hooks
import { useState } from "react"

const user_todos = []

function ToDoList({ title, text, empty_image, align, page_color }) {
    const [inputFocus, setInputFocus] = useState(false)

    return (
        <>
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

            <section className="input_todo_container">
                {inputFocus ?
                    <span className={`circle ${page_color}_input_svg`}>
                        <GoDot />
                    </span> :
                    <span className={`${page_color}_input_svg`}>
                        <IoAdd />
                    </span>
                }
                <input type="text"
                    className={`${page_color}_input`}
                    placeholder="Adicionar uma tarefa"
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />
            </section>
        </>
    )
}

export default ToDoList