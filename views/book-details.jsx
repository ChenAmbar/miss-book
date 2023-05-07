import { booksService } from "../services/books.service.js"

export function BookDetails({ book, onBack }) {
    const {title,pageCount,thumbnail,publishedDate,listPrice}=book

    let txtPageCount =booksService.getPageCount(pageCount)
    let className =booksService.getClassName(listPrice)
    let txtPublished = booksService.getTxtPublished(publishedDate)
    let txtOnSale = booksService.getTxtOnSale(listPrice)
    return (
        <section className="book-details">
            <h1>{title}</h1>
            <h4>Page Count:{`${pageCount}${txtPageCount}`}</h4>
            <img src={txtOnSale} alt=""/>
            <h4>Published Date:{publishedDate}{txtPublished}</h4>
            <h4 className={className}>Price:{listPrice.amount}$</h4>
            <img src={`${thumbnail}`} />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit reiciendis sed optio eum saepe! Aliquid necessitatibus atque est quasi unde odit voluptate! Vero, dolor sunt molestiae possimus labore suscipit?</p>
            <button onClick={onBack}>Back</button>
        </section>
    )

}