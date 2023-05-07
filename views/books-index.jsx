import { BookFilter } from "../cmps/books-filter.jsx"
import { BookList } from "../cmps/books-list.jsx"
import { booksService } from "../services/books.service.js"
import { BookDetails } from "./book-details.jsx"

const { useEffect, useState } = React

export function BooksIndex() {

    const [books, setbooks] = useState([])
    const [selectedBook, setselectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(booksService.getDefaultFilter())

    useEffect(() => {
        loadbooks()
    }, [filterBy])

    function loadbooks() {
        booksService.query(filterBy).then(books => setbooks(books))
        // booksService.query().then(setbooks)
    }

    function onRemoveBook(bookId) {
        booksService.remove(bookId).then(() => {
            const updatedbooks = books.filter(book => book.id !== bookId)
            setbooks(updatedbooks)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    function onSelectBook(book){
        setselectedBook(book)
    }

    // console.log(books);
    return (
        <section className="book-index">
            {!selectedBook && <React.Fragment>
                <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
                <BookList onSelectBook={onSelectBook} books={books} onRemoveBook={onRemoveBook} />
            </React.Fragment>}
            {selectedBook && <BookDetails onBack={()=>setselectedBook(null)} book={selectedBook} />}
        </section>
    )
}