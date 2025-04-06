// Svg's / Images
import { LiaLightbulbSolid } from "react-icons/lia"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import empty_todo_container from '../images/empty_todo_img.png'

// Hooks
import { useState, useEffect } from "react"

// Utils
import '../styles/components/meudia.sass'
import FormatedDates from "../utils/dates"

const get_date = () => {
    let date = new Date()

    let weekday = date.getDay()
    let day = date.getDate()
    let month = date.getMonth()

    return `${FormatedDates.get_weekday(weekday)}, ${day} de ${FormatedDates.get_month(month)}`
}

let user_todo_list = []

function MeuDia() {
    return (
        <>
            <header>
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

            <section className="user_todos_area">
                {user_todo_list.length < 1 &&
                    <div className="empty_list_container">
                        <img src={empty_todo_container} alt="" />
                        <h2>Foque em seu dia</h2>
                        <p>
                            Realize tarefas com o Meu Dia, uma <br />
                            lista que é atualizada todos os dias.
                        </p>
                    </div>}
            </section>

            <section className="input_todo_container">
                <input type="text" placeholder="Adicionar uma tarefa" />
            </section>
        </>
    )
}

export default MeuDia
