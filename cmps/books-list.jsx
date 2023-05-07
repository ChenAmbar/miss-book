import { BookPreview } from "./books-preview.jsx";

export function BookList({ books, onRemoveBook, onSelectBook }) {
console.log('f');
    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onSelectBook(book)} >Select book</button>
                    </section>
                </li>
            )}
        </ul>
    )
}