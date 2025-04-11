// Svg's / Images
import { GoStar } from "react-icons/go"
import empty_todo_image from '../images/importante_empty_todo_img.png'
import { HiOutlineDotsHorizontal } from "react-icons/hi"

// Utils
import '../styles/components/importante.sass'

// Components
import ToDoList from '../components/todo_list/ToDoList'

function Importante() {
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
        </>
    )
}

export default Importante