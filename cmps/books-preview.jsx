import { booksService } from "../services/books.service.js"

export function BookPreview({ book }) {
    const {title,thumbnail,listPrice,authors}=book
    let className = booksService.getClassName(listPrice)
    let txtOnSale = booksService.getTxtOnSale(listPrice)
    return (
        <article className="book-preview">
            <h2>{title}</h2>
            <h4>{authors[0]}</h4>
            <img className="book-sale-img" src={txtOnSale} alt=""/>
            <img src={`${thumbnail}`} />
            <h4 className={className}>Price:{listPrice.amount}$</h4>
        </article>
    )
}