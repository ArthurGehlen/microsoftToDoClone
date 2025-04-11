// Svg's / Images
import { GoStar } from "react-icons/go"
import empty_todo_image from '../images/importante_empty_todo_img.png'
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { IoAdd } from "react-icons/io5" // Add Todo input image
import { GoDot } from "react-icons/go" // Add Todo input image (FOCUS)

// Hooks
import {useState} from 'react'

// Utils
import '../styles/components/importante.sass'

// Components
import ToDoList from '../components/todo_list/ToDoList'

function Importante() {
    const [inputFocus, setInputFocus] = useState(false)

    return (
        <>
            <header className="importante_header">
                <div className="importante_title">
                    <h1>
                        <GoStar />
                        Importante
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
                page_color='importante'
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
                    className="importante_input"
                    placeholder="Adicionar uma tarefa"
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />
            </section>
        </>
    )
}

export default Importante