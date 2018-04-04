import React, { Component } from 'react';
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + (typeof this.props.bookImageUrl === 'undefined' ? '' : this.props.bookImageUrl.thumbnail) + '")' }}></div>
                    <BookShelfChanger fetchBooks={this.props.fetchBooks} book={this.props.book}/>
                </div>
                <div className="book-title">{this.props.bookTitle}</div>
                <div className="book-authors">{typeof this.props.bookAuthors === 'undefined' ? '' : this.props.bookAuthors.join(',')}</div>
            </div>
        )
    }
}

export default Book