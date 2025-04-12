// Svg's / Images
import { GoStar } from "react-icons/go"
import empty_todo_image from '../images/importante_empty_todo_img.png'
import { HiOutlineDotsHorizontal } from "react-icons/hi"

// Utils
import '../styles/pages/importante.sass'

// Components
import ToDoList from '../components/todo_list/ToDoList'
import Header from "../components/Header"

function Importante() {
    return (
        <>
            <Header page='importante'>
                <div className="title">
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
            </Header>

            <ToDoList
                title=''
                empty_image={empty_todo_image}
                align='center'
                page_color='importante'
                text='Tente classificar com estrelas algumas
tarefas para vê-las aqui.' />
        </>
    )
}

export default Importante