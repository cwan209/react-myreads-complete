import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'
import BookShelf from "./BookShelf";

class BookSearch extends Component {
    state = {
        books : []
    }

    searchBooks = (event) => {
        const keyword = event.target.value;
        BooksAPI.search(keyword).then((books) => {
            if (books.error) {
                this.setState({books : []});
            }
            this.setState({books : books});
        });

        // Clear page when nothing's in the bar
        if (keyword === '') {
            this.setState({books : []});
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={"/"} className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.searchBooks} placeholder="Search by title or author"/>
                    </div>
                </div>

                <div className="search-books-results">
                    {this.state.books.length > 0 ? (
                    <BookShelf fetchBooks={this.props.fetchBooks} shelfName={'Search Result'} books={this.state.books}/>
                    ) : (
                    <p>No Result Found</p>
                    )}
                </div>

            </div>
        )
    }

}

export default BookSearch