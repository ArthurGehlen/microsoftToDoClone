// Svg's / Images
import { LuColumns3 } from "react-icons/lu" // Planejado
import empty_todo_image from '../images/importante_empty_todo_img.png'
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { IoAdd } from "react-icons/io5" // Add Todo input image
import { GoDot } from "react-icons/go" // Add Todo input image (FOCUS)

// Hooks
import { useState } from 'react'

// Utils
import '../styles/components/planejado.sass'

// Components
import ToDoList from '../components/todo_list/ToDoList'
function Planejado() {
    const [inputFocus, setInputFocus] = useState(false)

    return (
        <>
            <header className="planejado_header">
                <div className="planejado_title">
                    <h1>
                        <LuColumns3 />
                        Planejado
                    </h1>

                    <div className="options">
                        <button className="theme_btn">
                            <HiOutlineDotsHorizontal />
                        </button>
                    </div>
                </div>
            </header>

            <ToDoList
                title=''
                empty_image={empty_todo_image}
                align='center'
                page_color='planejado'
                text='Tente classificar com estrelas algumas
tarefas para vê-las aqui.' />

            <section className="input_todo_container">
                {inputFocus ?
                    <span id="circle">
                        <GoDot />
                    </span> :
                    <span>
                        <IoAdd />
                    </span>
                }
                <input type="text"
                    className="planejado_input"
                    placeholder="Adicionar uma tarefa"
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />
            </section>
        </>
    )
}

export default Planejado