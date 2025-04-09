import { BrowserRouter as Router } from 'react-router-dom'
import AppLayout from './components/AppLayout'

function App() {
  return (
    <Router basename='/microsoftToDoClone/'>
      <AppLayout />
    </Router>
  )
}

export default App
