import React, { Component } from 'react';

class BookShelfChanger extends Component {
    moveToShelf = (event) => {
        this.props.onMoveToShelves(this.props.shelfIndex, this.props.bookIndex, event.target.value);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.moveToShelf}>
                    <option value="none" disabled>Move to...</option>
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