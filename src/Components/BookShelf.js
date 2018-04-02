import React, { Component } from 'react';
import Book from "./Book";

class BookShelf extends Component {
    changeShelf = (shelfIndex, bookIndex, targetShelf) => {
        this.props.onMove(shelfIndex, bookIndex, targetShelf);
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book, index) => (
                            <li key={index}>
                                <Book shelfIndex={this.props.shelfIndex} bookIndex={index} onChangeShelf={this.changeShelf} bookTitle={book.bookTitle} bookAuthors={book.bookAuthors} bookImageUrl={book.bookImageUrl}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf