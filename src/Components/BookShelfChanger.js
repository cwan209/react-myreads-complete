import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'

class BookShelfChanger extends Component {
    moveToShelf = (event) => {
        BooksAPI.update(this.props.book, event.target.value);
        this.props.fetchBooks();
    };

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={typeof this.props.book.shelf === 'undefined' ? 'none' : this.props.book.shelf} onChange={this.moveToShelf}>
                    <option value="moveTo" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger