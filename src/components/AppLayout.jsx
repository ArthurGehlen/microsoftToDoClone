import { Routes, Route } from "react-router-dom"

import Aside from "./Aside"
import '../styles/components/applayout.sass'

// Pages
import MeuDia from '../pages/MeuDia'
import Importante from '../pages/Importante'
import Planejado from '../pages/Planejado'
import AtribuidoAMim from '../pages/AtribuidoAMim'
import Tarefas from '../pages/Tarefas'

function AppLayout() {
    return (
        <div className="app_layout">
            <Aside />
            <main className="main_content">
                <Routes>
                    <Route path="/" element={<MeuDia />} />
                    <Route path="/importante" element={<Importante />} />
                    <Route path="/planejado" element={<Planejado />} />
                    <Route path="/atribuidoamim" element={<AtribuidoAMim />} />
                    <Route path="/tarefas" element={<Tarefas />} />
                </Routes>
            </main>
        </div>
    )
}

export default AppLayout