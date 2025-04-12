import '../styles/components/header.sass'

function Header({ children, page }) {
    return <header className={`header ${page}`}>
        {children}
    </header>
}

export default Header 