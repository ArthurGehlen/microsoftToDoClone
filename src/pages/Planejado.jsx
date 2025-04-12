// Svg's / Images
import { LuColumns3 } from "react-icons/lu"
import empty_todo_image from '../images/planejado_empty_todo_img.png'
import { HiOutlineDotsHorizontal } from "react-icons/hi"

// Utils
import '../styles/pages/planejado.sass'

// Components
import ToDoList from '../components/todo_list/ToDoList'
import Header from "../components/Header"

function Planejado() {
    return (
        <>
            <Header page='planejado'>
                <div className="title">
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
            </Header>

            <ToDoList
                title=''
                empty_image={empty_todo_image}
                align='center'
                page_color='planejado'
                text='Tente classificar com estrelas algumas
tarefas para vê-las aqui.' />
        </>
    )
}

export default Planejado