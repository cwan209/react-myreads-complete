import React, { Component } from 'react';
import Book from "./Book";

class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book, index) => (
                            <li key={index}>
                                <Book fetchBooks={this.props.fetchBooks} book={book} bookTitle={book.title} bookAuthors={book.authors} bookImageUrl={book.imageLinks}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf