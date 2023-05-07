const { useState } = React
import { About } from "./views/about.jsx"
import { BooksIndex } from "./views/books-index.jsx"
import { Home } from "./views/home.jsx"



export function App() {

    const [page, setPage] = useState('home')


    function handlePageChange(page) {
        setPage(page)
    }

    return (
        <section className="app main-layout">
            <header className="app-header full main-layout">
                <h1>Books Shop</h1>
                <nav className="app-nav">
                    <a onClick={() => handlePageChange('home')} href="#">Home</a> |
                    <a onClick={() => handlePageChange('books')} href="#">Books</a> |
                    <a onClick={() => handlePageChange('about')} href="#">About</a>
                </nav>
            </header>
            <main>
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'books' && <BooksIndex />}
            </main>
        </section>
    )
} 