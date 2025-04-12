// Svg's / Images
import empty_todo_image from '../images/atribuido_empty_todo_img.png'
import { FiUser } from "react-icons/fi"
import { HiOutlineDotsHorizontal } from "react-icons/hi"

// Utils
import '../styles/pages/atribuido.sass'

// Components
import ToDoList from '../components/todo_list/ToDoList'
import Header from '../components/Header'

function AtribuidoAMim() {
    return (
        <>
            <Header page='atribuido'>
                <div className="title">
                    <h1>
                        <FiUser />
                        Atribuído a mim
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
                page_color='atribuido'
                text='As tarefas atribuídas a você aparecem
aqui' />
        </>
    )
}

export default AtribuidoAMim