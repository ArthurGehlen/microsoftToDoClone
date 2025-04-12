// Svg's / Images
import { LiaLightbulbSolid } from "react-icons/lia"
import { HiOutlineDotsHorizontal } from "react-icons/hi"

import empty_todo_image from '../images/meudia_empty_todo_img.png'

// Utils
import '../styles/pages/meudia.sass'
import FormatedDates from "../utils/dates"

// Components
import ToDoList from "../components/todo_list/ToDoList"
import Header from "../components/Header"

const get_date = () => {
    let date = new Date()

    let weekday = date.getDay()
    let day = date.getDate()
    let month = date.getMonth()

    return `${FormatedDates.get_weekday(weekday)}, ${day} de ${FormatedDates.get_month(month)}`
}

function MeuDia() {
    return (
        <>
            <Header page='meudia'>
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
            </Header>

            <ToDoList
                title='Foque em seu dia'
                empty_image={empty_todo_image}
                page_color='meudia'
                text='Realize tarefas com o Meu Dia, uma
lista que é atualizada todos os dias.' />
        </>
    )
}

export default MeuDia
