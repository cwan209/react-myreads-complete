import React, { Component } from 'react';
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {

    render() {
        const book = this.props.book;
        console.log(book);
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + (typeof book.imageLinks === 'undefined' ? '' : book.imageLinks.thumbnail) + '")' }}></div>
                    <BookShelfChanger fetchBooks={this.props.fetchBooks} book={book}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{typeof book.authors === 'undefined' ? '' : book.authors.join(',')}</div>
            </div>
        )
    }
}

export default Book