import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'
import BookShelf from "./BookShelf";

class BookSearch extends Component {
    state = {
        keyword : '',
        books : [],
        error: ''
    };

    handleChange = (event) => {
        this.setState({keyword : event.target.value});
        this.searchBooks(event.target.value);

        if (event.target.value === '') {
            this.setState({error: ''});
        }
    };

    searchBooks = (keyword) => {

        BooksAPI.search(keyword).then((books) => {

            //check keyword match
            if (keyword !== this.state.keyword) {
                this.setState({error:'The result and keyword do not match, please try typing more slowly'});
                console.log('no');
            } else {
                this.setState({error:''});
                console.log('yes');
            }

            if (!books.error) {
                books = this.setBookShelf(books);
                this.setState({books: books});
            } else {
                this.setState({error: books.error});
            }
        });
    };

    setBookShelf = (books) => {
        const oldBooks = this.props.books;
        books.forEach((b) => {
            oldBooks.forEach((ob) => {
                if (ob.id === b.id) {
                    b.shelf = ob.shelf;
                }
            })
        });
        return books;
    }

    render() {
        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={"/"} className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.handleChange} value={this.state.keyword} placeholder="Search by title or author"/>
                    </div>
                </div>

                <div className="search-books-results">

                    {/*search not matching keyword*/}
                    {this.state.error !== '' &&
                    <p>{this.state.error}</p>
                    }

                    {/*search result*/}
                    {this.state.keyword.trim() !== '' ? (
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