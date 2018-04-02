import React, { Component } from 'react';
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {

    setTargetShelf = (shelfIndex, bookIndex, targetShelf) => {
        this.props.onChangeShelf(shelfIndex, bookIndex, targetShelf);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + this.props.bookImageUrl + '")' }}></div>
                    <BookShelfChanger shelfIndex={this.props.shelfIndex} bookIndex={this.props.bookIndex} key={this.props.key} onMoveToShelves={this.setTargetShelf}/>
                </div>
                <div className="book-title">{this.props.bookTitle}</div>
                <div className="book-authors">{this.props.bookAuthors}</div>
            </div>
        )
    }
}

export default Book