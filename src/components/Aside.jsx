// Svg's
import { MdOutlineWbSunny } from "react-icons/md" // Meu Dia
import { GoStar } from "react-icons/go"// Importante
import { LuColumns3 } from "react-icons/lu" // Planejado
import { FiUser } from "react-icons/fi" // Atribuído a mim
import { GoHome } from "react-icons/go" // Tarefas
import { IoIosSearch } from "react-icons/io" // Search SVG
import { IoAdd } from "react-icons/io5" // Add list button
import { MdOutlineAddToPhotos } from "react-icons/md" // Add group button

import { Link } from 'react-router-dom'
import '../styles/components/aside.sass'

const default_lists = [
    { link: '/', name: 'Meu Dia', icon: <MdOutlineWbSunny />, id: 'meudia' },
    { link: '/importante', name: 'Importante', icon: <GoStar />, id: 'importante' },
    { link: '/planejado', name: 'Planejado', icon: <LuColumns3 />, id: 'planejado' },
    { link: '/atribuidoamim', name: 'Atribuído a mim', icon: <FiUser />, id: 'atribuido' },
    { link: '/tarefas', name: 'Tarefas', icon: <GoHome />, id: 'tarefas' }
]

const user_lists = []

function Aside() {
    return (
        <aside id="aside">
            <section className="user_area">
                <div className="user_avatar">
                    <p>AG</p>
                </div>

                <div className="user_info">
                    <p className="user_name">Arthur Gehlen</p>
                    <p className="user_email">1arthurgehlen@gmail.com</p>
                </div>
            </section>

            <section className="searchbar">
                <input type="search" placeholder="Pesquisar" />
                <IoIosSearch />
            </section>

            <section className="default_lists">
                <ul>
                    {default_lists.map((list) => (
                        <li key={list.id}>
                            <Link to={list.link}>
                                <p id={list.id}>{list.icon}</p>
                                <span>{list.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="separator"></div>
            </section>

            <section className="adding_lists_area">
                <section className="user_lists">

                </section>

                <div className="buttons">
                    <button className="add_list_btn">
                        <IoAdd />
                        <span>
                            Nova lista
                        </span>
                    </button>
                    <button className="add_group_btn">
                        <MdOutlineAddToPhotos />
                    </button>
                </div>
            </section>
        </aside >
    )
}

export default Aside