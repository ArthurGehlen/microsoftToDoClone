// Svg's / Images
import { LiaLightbulbSolid } from "react-icons/lia"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { IoAdd } from "react-icons/io5" // Add Todo input image
import { GoDot } from "react-icons/go" // Add Todo input image (FOCUS)
import empty_todo_image from '../images/meudia_empty_todo_img.png'

// Hooks
import { useState, useEffect } from "react"

// Utils
import '../styles/components/meudia.sass'
import FormatedDates from "../utils/dates"

// Components
import ToDoList from "../components/todo_list/ToDoList"

const get_date = () => {
    let date = new Date()

    let weekday = date.getDay()
    let day = date.getDate()
    let month = date.getMonth()

    return `${FormatedDates.get_weekday(weekday)}, ${day} de ${FormatedDates.get_month(month)}`
}

function MeuDia() {
    const [inputFocus, setInputFocus] = useState(false)

    return (
        <>
            <header className="meudia_header">
                <div className="title">
                    <h1>Meu Dia</h1>

                    <div className="options">
                        <button className="sugestions_btn">
                            <LiaLightbulbSolid />
                        </button>
                        <button className="theme_btn">
                            <HiOutlineDotsHorizontal />
                        </button>
                    </div>
                </div>

                <p className="date">{get_date()}</p>
            </header>

            <ToDoList
                title='Foque em seu dia'
                empty_image={empty_todo_image}
                page_color='meudia'
                text='Realize tarefas com o Meu Dia, uma
lista que é atualizada todos os dias.' />

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
                    className="meudia_input"
                    placeholder="Adicionar uma tarefa"
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />
            </section>
        </>
    )
}

export default MeuDia
